import { Client } from 'pg';

export class PostgresConnector {
    private client: Client;

    constructor(connectionString: string) {
        this.client = new Client({
            connectionString: connectionString,
        });
    }

    async connect(): Promise<void> {
        await this.client.connect();
    }

    async query(queryText: string, params?: any[]): Promise<any> {
        const res = await this.client.query(queryText, params);
        return res.rows;
    }

    async disconnect(): Promise<void> {
        await this.client.end();
    }
}