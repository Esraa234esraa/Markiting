import mongoose from 'mongoose';

const chatLogSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    question: { type: String, required: true },
    suggestions: [
      {
        productName: String,
        reason: String,
        action: { type: String, enum: ['BUY', 'RESTOCK', 'PROMOTE'] },
        confidence: Number
      }
    ]
  },
  { timestamps: true }
);

export default mongoose.model('ChatLog', chatLogSchema);
