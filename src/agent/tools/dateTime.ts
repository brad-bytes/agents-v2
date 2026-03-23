import {tool} from 'ai';
import { z } from 'zod';

export const dateTime = tool({
    description: 'Gets the current date and time. Use this tool when you want to know the current date and time. Use this tool befire any time related tasks.',
    inputSchema: z.object({}),
    execute: async () => {
        return new Date().toISOString();
    },
});
