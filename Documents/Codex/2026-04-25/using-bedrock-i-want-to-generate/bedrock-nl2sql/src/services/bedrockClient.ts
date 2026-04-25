import axios from 'axios';

export class BedrockClient {
    private endpoint: string;
    private apiKey: string;

    constructor(endpoint: string, apiKey: string) {
        this.endpoint = endpoint;
        this.apiKey = apiKey;
    }

    public async generateSQL(prompt: string): Promise<string> {
        try {
            const response = await axios.post(this.endpoint, {
                prompt: prompt,
                max_tokens: 150,
                temperature: 0.5,
            }, {
                headers: {
                    'Authorization': `Bearer ${this.apiKey}`,
                    'Content-Type': 'application/json',
                },
            });

            return response.data.sql;
        } catch (error) {
            throw new Error(`Error generating SQL: ${error.message}`);
        }
    }
}