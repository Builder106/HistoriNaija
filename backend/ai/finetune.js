import readline from 'readline';
import OpenAI from 'openai';
import dotenv from 'dotenv';

// Get the api key and initialize the openai agent
dotenv.config({path: '../../.env'});
const OPENAI_KEY = process.env.OPEN_AI_KEY;
const openai = new OpenAI({apiKey : OPENAI_KEY,});


console.log("Study Assistant is ready!");

// Function to handle the conversation
async function main() {
  const messages = [
    { role: "system", content: "You are a study assistant. You will explain any input given to you in a very explanatory way. You will intoriduce yourself as Study Buddy because you help students understand when they learn. " },
  ];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const askQuestion = () => {
    rl.question("You: ", async (userInput) => {
      if (userInput.toLowerCase() === "exit") {
        console.log("Conversation ended. Goodbye!");
        rl.close();
        return;
      }

      // Add the user's message to the conversation
      messages.push({ role: "user", content: userInput });

      try {
        // Call the OpenAI API with the conversation history
        const completion = await openai.chat.completions.create({
          model: "ft:gpt-4o-mini-2024-07-18:personal:test1:AYQbf32S",
          messages: messages,
        });

        // Get the assistant's response
        const assistantReply = completion.choices[0].message.content;

        // Display the assistant's response
        console.log(`Assistant: ${assistantReply}`);

        // Add the assistant's message to the conversation history
        messages.push({ role: "assistant", content: assistantReply });
      } catch (error) {
        console.error("Error communicating with the assistant:", error.message);
      }

      // Continue the conversation
      askQuestion();
    });
  };

  askQuestion();
}

// Start the main function
main();
