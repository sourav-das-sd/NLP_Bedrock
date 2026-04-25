# Prompts Documentation

This document outlines the prompt structures and examples used in the Bedrock NL2SQL application. The prompts are designed to facilitate the conversion of natural language queries into SQL queries through the Amazon Bedrock service.

## Prompt Structure

Prompts should be constructed to provide clear context and expectations for the Bedrock model. A typical prompt includes the following components:

1. **User Query**: The natural language question posed by the user.
2. **Domain Context**: The specific domain relevant to the query (e.g., policy, claims, billing).
3. **Allowed Schema Objects**: The tables and columns that can be referenced in the query.
4. **Output Format Instructions**: Guidelines on how the output should be structured (e.g., SQL query, explanation).

## Example Prompts

### Example 1: Total Premium by State

**User Query**: "Show total premium by state for active auto policies in the last 12 months."

**Prompt**:
```
User Query: Show total premium by state for active auto policies in the last 12 months.
Domain Context: Insurance Policy
Allowed Schema Objects: [premium_amount, policy_status, state]
Output Format Instructions: Return SQL query and a natural language explanation.
```

### Example 2: Claims Count

**User Query**: "How many claims were filed in the last quarter?"

**Prompt**:
```
User Query: How many claims were filed in the last quarter?
Domain Context: Claims
Allowed Schema Objects: [claim_id, claim_date]
Output Format Instructions: Return SQL query and a summary of the results.
```

### Example 3: Customer Insights

**User Query**: "List all customers with active policies and their contact information."

**Prompt**:
```
User Query: List all customers with active policies and their contact information.
Domain Context: Customer
Allowed Schema Objects: [customer_id, customer_name, contact_info, policy_status]
Output Format Instructions: Return SQL query and a formatted result set.
```

## Conclusion

The prompts are essential for guiding the Bedrock model in generating accurate SQL queries. By following the outlined structure and examples, users can effectively communicate their data needs and receive the desired outputs.