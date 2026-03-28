import mongoose from 'mongoose';

const leadSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
  },
  phone: {
    type: String,
    trim: true,
  },
  lastMessage: {
    type: String,
  },
  chatHistory: [{
    role: {
      type: String,
      enum: ['user', 'assistant'],
    },
    content: {
      type: String,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    }
  }],
  status: {
    type: String,
    enum: ['new', 'contacted', 'qualified', 'converted', 'closed'],
    default: 'new',
  },
  source: {
    type: String,
    default: 'AI Chatbot',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  }
});

leadSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

export default mongoose.models.Lead || mongoose.model('Lead', leadSchema);
