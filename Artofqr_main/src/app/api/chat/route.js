import { companyProfile, serviceCatalog } from '@/content/proBaseSolution';
import connectDB from '@/lib/mongodb';
import Lead from '@/models/Lead';
import { NextResponse } from 'next/server';

// Fireworks AI Configuration (Hardcoded as requested)
const FIREWORKS_API_KEY = 'fw_MMBeWAcxv6hAanuvcaUvkH';
const FIREWORKS_MODEL = 'accounts/fireworks/models/deepseek-v3p2';

export async function POST(req) {
  try {
    const { messages, leadInfo } = await req.json();

    await connectDB();

    // 1. Prepare the System Prompt with Company Context
    const systemPrompt = `
You are the Official AI Assistant for "${companyProfile.name}".
Your goal is to provide accurate, professional, and helpful information about the company's services and help users schedule meetings.

COMPANY OVERVIEW:
- Name: ${companyProfile.name}
- Tagline: ${companyProfile.tagline}
- About: ${companyProfile.aboutDescription}
- Founder: ${companyProfile.founder}
- Address: ${companyProfile.address}
- Contact: ${companyProfile.email} | ${companyProfile.phones.join(', ')}

SERVICES OFFERED:
${serviceCatalog.map(s => `- ${s.title}: ${s.shortDescription}`).join('\n')}

INSTRUCTIONS:
1. Be friendly, professional, and concise.
2. If the user asks about scheduling a meeting or "scheduling a meet", tell them they can schedule a call directly with our team at: https://calendly.com/probasesolution (or just ask for their contact details so we can call them).
3. Always try to be helpful but do not make up services we don't offer.
4. If a user provides their email or phone number, acknowledge it politely.
5. Your name is "ProBase Assistant".
    `;

    // 2. Call Fireworks AI
    const response = await fetch('https://api.fireworks.ai/inference/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${FIREWORKS_API_KEY}`
      },
      body: JSON.stringify({
        model: FIREWORKS_MODEL,
        messages: [
          { role: 'system', content: systemPrompt },
          ...messages
        ],
        max_tokens: 500,
        temperature: 0.7,
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error?.message || 'Fireworks AI API Error');
    }

    const data = await response.json();
    const assistantMessage = data.choices[0].message.content;

    // 3. Lead Capture Logic (Simple detection from history or explicit leadInfo)
    try {
      if (leadInfo?.email || leadInfo?.phone || messages.length > 2) {
        const lastUserMessage = messages[messages.length - 1].content;

        // Find existing lead by email or create new
        let lead;
        if (leadInfo?.email) {
          lead = await Lead.findOne({ email: leadInfo.email });
        }

        if (lead) {
          lead.chatHistory.push(...messages.slice(-2).map(m => ({ role: m.role, content: m.content })), { role: 'assistant', content: assistantMessage });
          lead.lastMessage = assistantMessage;
          await lead.save();
        } else {
          await Lead.create({
            name: leadInfo?.name || 'Anonymous User',
            email: leadInfo?.email,
            phone: leadInfo?.phone,
            lastMessage: assistantMessage,
            chatHistory: [
              ...messages.map(m => ({ role: m.role, content: m.content })),
              { role: 'assistant', content: assistantMessage }
            ]
          });
        }
      }
    } catch (dbError) {
      console.error('Lead Capture Error:', dbError);
      // Don't fail the response if lead capture fails
    }

    return NextResponse.json({ message: assistantMessage });

  } catch (error) {
    console.error('Chat API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error', details: error.message },
      { status: 500 }
    );
  }
}
