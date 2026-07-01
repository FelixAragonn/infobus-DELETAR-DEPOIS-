'use server';
/**
 * @fileOverview This file implements a Genkit flow to generate a daily bus schedule summary.
 *
 * - dailyScheduleSummary - A function that takes daily schedule data and returns an AI-generated summary.
 * - DailyScheduleSummaryInput - The input type for the dailyScheduleSummary function.
 * - DailyScheduleSummaryOutput - The return type for the dailyScheduleSummary function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const DailyScheduleSummaryInputSchema = z.object({
  scheduleData: z
    .string()
    .describe(
      'The raw daily bus schedule data, including routes, timings, and stops, provided as a string.'
    ),
});
export type DailyScheduleSummaryInput = z.infer<
  typeof DailyScheduleSummaryInputSchema
>;

const DailyScheduleSummaryOutputSchema = z.object({
  summary: z.string().describe('An AI-generated summary of the daily bus schedule, highlighting key timings and route details.')
});
export type DailyScheduleSummaryOutput = z.infer<
  typeof DailyScheduleSummaryOutputSchema
>;

export async function dailyScheduleSummary(
  input: DailyScheduleSummaryInput
): Promise<DailyScheduleSummaryOutput> {
  return dailyScheduleSummaryFlow(input);
}

const dailyScheduleSummaryPrompt = ai.definePrompt({
  name: 'dailyScheduleSummaryPrompt',
  input: { schema: DailyScheduleSummaryInputSchema },
  output: { schema: DailyScheduleSummaryOutputSchema },
  prompt: `You are an intelligent assistant tasked with summarizing daily bus schedules for students and drivers.
Your goal is to provide a concise overview, highlighting important departure and arrival times, and significant stops,
so that the user can quickly understand their daily transit plan.

Here is the daily bus schedule data:
{{{scheduleData}}}

Please provide a summary of this schedule. Focus on:
- The route name.
- The earliest and latest departure times for each period (morning, afternoon, evening, if applicable).
- Any key stops or landmarks mentioned.
- Any important notes or specific instructions.

Keep the summary brief and easy to read.`,
});

const dailyScheduleSummaryFlow = ai.defineFlow(
  {
    name: 'dailyScheduleSummaryFlow',
    inputSchema: DailyScheduleSummaryInputSchema,
    outputSchema: DailyScheduleSummaryOutputSchema,
  },
  async (input) => {
    let attempts = 0;
    const maxAttempts = 3;
    let lastError: any = null;

    while (attempts < maxAttempts) {
      try {
        const { output } = await dailyScheduleSummaryPrompt(input);
        if (output) return output;
        throw new Error('AI failed to generate a schedule summary.');
      } catch (e: any) {
        lastError = e;
        const isTransient = e.message?.includes('503') || e.message?.includes('429') || e.message?.includes('UNAVAILABLE');
        
        if (!isTransient || attempts === maxAttempts - 1) {
          throw e;
        }

        // Exponential backoff
        await new Promise(resolve => setTimeout(resolve, 1000 * Math.pow(2, attempts)));
        attempts++;
      }
    }
    throw lastError || new Error('AI failed after multiple attempts.');
  }
);
