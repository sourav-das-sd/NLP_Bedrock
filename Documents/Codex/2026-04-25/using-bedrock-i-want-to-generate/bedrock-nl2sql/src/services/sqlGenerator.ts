import { PromptBuilder } from './promptBuilder';
import { Validator } from './validator';

export class SQLGenerator {
    private promptBuilder: PromptBuilder;
    private validator: Validator;

    constructor(promptBuilder: PromptBuilder, validator: Validator) {
        this.promptBuilder = promptBuilder;
        this.validator = validator;
    }

    public generateSQL(userInput: string): string {
        const prompt = this.promptBuilder.buildPrompt(userInput);
        const sqlQuery = this.convertPromptToSQL(prompt);
        this.validator.validate(sqlQuery);
        return sqlQuery;
    }

    private convertPromptToSQL(prompt: string): string {
        // Logic to convert the prompt into SQL query
        // This is a placeholder for the actual SQL generation logic
        return `SELECT * FROM example_table WHERE condition = '${prompt}'`;
    }
}