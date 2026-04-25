class PromptBuilder {
    private userInput: string;
    private context: any;

    constructor(userInput: string, context: any) {
        this.userInput = userInput;
        this.context = context;
    }

    public buildPrompt(): string {
        // Construct the prompt based on user input and context
        const prompt = `Generate SQL for the following request: "${this.userInput}" with context: ${JSON.stringify(this.context)}`;
        return prompt;
    }
}

export default PromptBuilder;