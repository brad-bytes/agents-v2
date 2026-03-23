import { tools } from "./tools/index.ts";
export type ToolName = keyof typeof tools;

export const executeTools = async (name: string, args: any) => {
    const tool = tools[name as ToolName]; 
    if (!tool) {
        return `Tool ${name} not found.`;
    }

    const execute = tool.execute;

    if (!execute) {
        return `Tool ${name} has no execute function.`;
    }

    const results = await execute(args,{
        toolCallId: '',
        messages: [],
   });

    return String(results);
};