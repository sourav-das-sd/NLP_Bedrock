import { Router } from 'express';
import { PromptBuilder } from '../services/promptBuilder';
import { SQLGenerator } from '../services/sqlGenerator';
import { Validator } from '../services/validator';
import { Executor } from '../services/executor';

const router = Router();

const promptBuilder = new PromptBuilder();
const sqlGenerator = new SQLGenerator();
const validator = new Validator();
const executor = new Executor();

router.post('/query', async (req, res) => {
    try {
        const userInput = req.body.query;
        const prompt = promptBuilder.buildPrompt(userInput);
        const sql = sqlGenerator.generateSQL(prompt);
        const isValid = validator.validate(sql);

        if (!isValid) {
            return res.status(400).json({ error: 'Invalid SQL query' });
        }

        const result = await executor.execute(sql);
        res.json({ sql, result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;