import ChatLog from '../models/ChatLog.js';
import { ChatBotAPI } from '../services/chatBotAPI.js';

export const askChatBot = async (req, res) => {
  const { query } = req.body;
  const aiResult = await ChatBotAPI.ask();
  const suggestions = aiResult.suggestions;

  await ChatLog.create({
    user: req.user._id,
    question: query,
    suggestions: suggestions.map((item) => ({
      productName: item.productName,
      reason: item.reason,
      action: item.action,
      confidence: item.confidence
    }))
  });

  res.json(aiResult);
};

export const getChatLogs = async (_, res) => {
  const logs = await ChatLog.find().populate('user', 'name email role').sort({ createdAt: -1 }).limit(100);
  res.json(logs);
};
