# Sample Queries for Bedrock NL2SQL

This document contains example queries that users can run against the Bedrock NL2SQL application. These queries demonstrate how to utilize the natural language processing capabilities to generate SQL queries based on user input.

## Example Queries

1. **Total Premium by State for Active Auto Policies**
   - **User Input:** "Show total premium by state for active auto policies in the last 12 months"
   - **Generated SQL:**
     ```sql
     SELECT state, SUM(premium_amount) AS total_premium
     FROM policies
     WHERE policy_status = 'ACTIVE' AND policy_type = 'AUTO' AND policy_date >= NOW() - INTERVAL '12 months'
     GROUP BY state;
     ```

2. **Count of Claims by Status**
   - **User Input:** "How many claims are currently open?"
   - **Generated SQL:**
     ```sql
     SELECT COUNT(*) AS open_claims_count
     FROM claims
     WHERE claim_status = 'OPEN';
     ```

3. **Average Billing Amount for Customers**
   - **User Input:** "What is the average billing amount for customers in Texas?"
   - **Generated SQL:**
     ```sql
     SELECT AVG(billing_amount) AS average_billing
     FROM billing
     WHERE customer_state = 'Texas';
     ```

4. **List of Customers with Active Policies**
   - **User Input:** "List all customers who have active policies"
   - **Generated SQL:**
     ```sql
     SELECT DISTINCT customer_id, customer_name
     FROM customers
     JOIN policies ON customers.id = policies.customer_id
     WHERE policies.policy_status = 'ACTIVE';
     ```

5. **Total Claims Amount by Year**
   - **User Input:** "Show total claims amount by year"
   - **Generated SQL:**
     ```sql
     SELECT EXTRACT(YEAR FROM claim_date) AS year, SUM(claim_amount) AS total_claims
     FROM claims
     GROUP BY year
     ORDER BY year;
     ```

## Notes

- These queries are examples and may need to be adjusted based on the actual database schema and business logic.
- Ensure that the necessary permissions and access controls are in place when executing these queries.