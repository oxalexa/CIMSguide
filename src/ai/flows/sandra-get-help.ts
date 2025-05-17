// The Sandra AI voice assistant flow to help clients with navigation, product details, or order status.
'use server';
/**
 * @fileOverview Implements Sandra, an AI-powered voice assistant, to help clients with navigation, product details, or order status.
 *
 * - sandraGetHelp - A function that processes user queries and provides helpful information.
 * - SandraGetHelpInput - The input type for the sandraGetHelp function, including the user query.
 * - SandraGetHelpOutput - The return type for the sandraGetHelp function, providing the assistant's response.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SandraGetHelpInputSchema = z.object({
  query: z.string().describe('The user query for help or information.'),
});
export type SandraGetHelpInput = z.infer<typeof SandraGetHelpInputSchema>;

const SandraGetHelpOutputSchema = z.object({
  response: z.string().describe('The response from Sandra, the AI voice assistant.'),
});
export type SandraGetHelpOutput = z.infer<typeof SandraGetHelpOutputSchema>;

export async function sandraGetHelp(input: SandraGetHelpInput): Promise<SandraGetHelpOutput> {
  return sandraGetHelpFlow(input);
}

const sandraGetHelpPrompt = ai.definePrompt({
  name: 'sandraGetHelpPrompt',
  input: {schema: SandraGetHelpInputSchema},
  output: {schema: SandraGetHelpOutputSchema},
  prompt: `You are Sandra, an AI-powered voice assistant within the Chefland Inventory Management System (CIMS) client portal. Your purpose is to assist clients with navigation, provide product details, and update them on their order status. Tailor your responses to be concise and helpful.  Consider these points in your response:

- If the query relates to product availability, check the current inventory and respond accordingly.
- For order status inquiries, access the order history and give an update.
- If it's a navigation-related question, guide the user to the correct section of the portal.
- Be polite and professional.

User Query: {{{query}}}`,
});

const sandraGetHelpFlow = ai.defineFlow(
  {
    name: 'sandraGetHelpFlow',
    inputSchema: SandraGetHelpInputSchema,
    outputSchema: SandraGetHelpOutputSchema,
  },
  async input => {
    const {output} = await sandraGetHelpPrompt(input);
    return output!;
  }
);
