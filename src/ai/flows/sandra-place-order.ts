// 'use server';
/**
 * @fileOverview An AI agent that allows clients to place orders using voice commands through Sandra.
 *
 * - sandraPlaceOrder - A function that handles the order placement process via voice commands.
 * - SandraPlaceOrderInput - The input type for the sandraPlaceOrder function.
 * - SandraPlaceOrderOutput - The return type for the sandraPlaceOrder function.
 */

'use server';

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SandraPlaceOrderInputSchema = z.object({
  productName: z.string().describe('The name of the product to order.'),
  quantity: z.number().describe('The quantity of the product to order.'),
  clientName: z.string().describe('The name of the client placing the order.'),
});
export type SandraPlaceOrderInput = z.infer<typeof SandraPlaceOrderInputSchema>;

const SandraPlaceOrderOutputSchema = z.object({
  orderConfirmation: z.string().describe('A confirmation message for the order, including the product name, quantity, and client name.'),
  orderId: z.string().describe('The unique identifier for the placed order.'),
});
export type SandraPlaceOrderOutput = z.infer<typeof SandraPlaceOrderOutputSchema>;

export async function sandraPlaceOrder(input: SandraPlaceOrderInput): Promise<SandraPlaceOrderOutput> {
  return sandraPlaceOrderFlow(input);
}

const placeOrderPrompt = ai.definePrompt({
  name: 'placeOrderPrompt',
  input: {schema: SandraPlaceOrderInputSchema},
  output: {schema: SandraPlaceOrderOutputSchema},
  prompt: `You are Sandra, an AI-powered voice assistant for Chefland's CIMS (Chefland Inventory Management System).

A client named {{clientName}} wants to place an order for {{quantity}} units of {{productName}}.

Generate an order confirmation message and a unique order ID.
`,
});

const sandraPlaceOrderFlow = ai.defineFlow(
  {
    name: 'sandraPlaceOrderFlow',
    inputSchema: SandraPlaceOrderInputSchema,
    outputSchema: SandraPlaceOrderOutputSchema,
  },
  async input => {
    const {output} = await placeOrderPrompt(input);
    return output!;
  }
);
