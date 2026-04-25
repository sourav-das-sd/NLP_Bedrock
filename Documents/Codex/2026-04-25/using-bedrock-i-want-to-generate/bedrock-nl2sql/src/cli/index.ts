import { Command } from 'commander';
import { PromptBuilder } from '../services/promptBuilder';
import { BedrockClient } from '../services/bedrockClient';
import { SQLGenerator } from '../services/sqlGenerator';
import { Validator } from '../services/validator';
import { Executor } from '../services/executor';

const program = new Command();

program
  .version('1.0.0')
  .description('Command-line interface for the Bedrock NL2SQL application');

program
  .command('generate <query>')
  .description('Generate SQL from a natural language query')
  .action(async (query) => {
    const promptBuilder = new PromptBuilder();
    const bedrockClient = new BedrockClient();
    const sqlGenerator = new SQLGenerator();
    const validator = new Validator();
    const executor = new Executor();

    try {
      const prompt = promptBuilder.build(query);
      const generatedSQL = await bedrockClient.generateSQL(prompt);
      const validatedSQL = validator.validate(generatedSQL);

      if (validatedSQL) {
        const result = await executor.execute(validatedSQL);
        console.log('Generated SQL:', validatedSQL);
        console.log('Result:', result);
      } else {
        console.error('SQL validation failed.');
      }
    } catch (error) {
      console.error('Error generating SQL:', error);
    }
  });

program.parse(process.argv);