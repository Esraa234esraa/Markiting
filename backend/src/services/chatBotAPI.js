import { generateSuggestions } from './chatBotLogic.js';

export const ChatBotAPI = {
  ask: async () => {
    const suggestions = await generateSuggestions();
    return {
      response: 'Here are the top recommendations based on current sales and stock behavior.',
      suggestions
    };
  }
};
