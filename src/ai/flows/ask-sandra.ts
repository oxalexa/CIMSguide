// src/ai/flows/ask-sandra.ts
'use server';
/**
 * @fileOverview A flow that allows clients to use Sandra, the AI voice assistant,
 * to quickly check the availability of products by speaking naturally.
 *
 * - askSandraCheckAvailability - A function that handles the product availability check process.
 * - AskSandraCheckAvailabilityInput - The input type for the askSandraCheckAvailability function.
 * - AskSandraCheckAvailabilityOutput - The return type for the askSandraCheckAvailability function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AskSandraCheckAvailabilityInputSchema = z.object({
  productName: z.string().describe('The name of the product to check availability for.'),
});
export type AskSandraCheckAvailabilityInput = z.infer<typeof AskSandraCheckAvailabilityInputSchema>;

const AskSandraCheckAvailabilityOutputSchema = z.object({
  isAvailable: z.boolean().describe('Whether the product is currently available.'),
  quantityAvailable: z.number().describe('The quantity of the product that is currently available.'),
  expiryDate: z.string().nullable().describe('The expiry date of the soonest expiring batch of the product, or null if not available.'),
  message: z.string().describe('A message indicating the availability and other details of the product.'),
});
export type AskSandraCheckAvailabilityOutput = z.infer<typeof AskSandraCheckAvailabilityOutputSchema>;

export async function askSandraCheckAvailability(
  input: AskSandraCheckAvailabilityInput
): Promise<AskSandraCheckAvailabilityOutput> {
  return askSandraCheckAvailabilityFlow(input);
}

const prompt = ai.definePrompt({
  name: 'askSandraCheckAvailabilityPrompt',
  input: {schema: AskSandraCheckAvailabilityInputSchema},
  output: {schema: AskSandraCheckAvailabilityOutputSchema},
  prompt: `You are Sandra, an AI voice assistant for Chefland CIMS. A client is asking about the availability of a product.

  Product name: {{{productName}}}

  Respond with a JSON object that indicates the availability of the product, the quantity available, and the expiry date of the soonest expiring batch. If the product is not available, set isAvailable to false, quantityAvailable to 0, and expiryDate to null.
  Provide a conversational message indicating the availability and other details of the product, and use natural language.
  `,
});

const askSandraCheckAvailabilityFlow = ai.defineFlow(
  {
    name: 'askSandraCheckAvailabilityFlow',
    inputSchema: AskSandraCheckAvailabilityInputSchema,
    outputSchema: AskSandraCheckAvailabilityOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
