import { DatabaseConnector } from '../connectors/genericConnector';
import { Validator } from './validator';

export class Executor {
    private connector: DatabaseConnector;
    private validator: Validator;

    constructor(connector: DatabaseConnector, validator: Validator) {
        this.connector = connector;
        this.validator = validator;
    }

    async executeQuery(sql: string): Promise<any> {
        // Validate the SQL query
        const isValid = this.validator.validate(sql);
        if (!isValid) {
            throw new Error('Invalid SQL query');
        }

        // Execute the validated SQL query
        try {
            const result = await this.connector.execute(sql);
            return result;
        } catch (error) {
            throw new Error(`Execution error: ${error.message}`);
        }
    }
}