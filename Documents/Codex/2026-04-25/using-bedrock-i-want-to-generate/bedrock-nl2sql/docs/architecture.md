# Architecture Overview

## Introduction

This document provides an overview of the architecture for the Bedrock NL2SQL project. The architecture is designed to facilitate the conversion of natural language queries into SQL queries using Amazon Bedrock, while ensuring governance, security, and extensibility across multiple domains.

## High-Level Architecture

The architecture consists of several key components that interact with each other to process user queries and generate SQL. The main components include:

1. **User Interface**: Entry points for users to submit natural language queries, including web applications, APIs, and command-line interfaces.

2. **Request Gateway**: Standardizes incoming requests and attaches user context, including identity and session information.

3. **Query Understanding Service**: Analyzes the user query to identify intent, metrics, filters, and output expectations.

4. **Domain Router**: Determines the appropriate semantic model based on the identified domain and user context.

5. **Semantic Metadata Layer**: Stores business-friendly definitions, including tables, columns, joins, and synonyms, allowing for a flexible and reusable architecture.

6. **Prompt Builder**: Constructs prompts for the Bedrock model using the user query and semantic metadata.

7. **Amazon Bedrock**: Generates candidate SQL queries based on the prompts provided.

8. **SQL Validation and Guardrails**: Validates the generated SQL against defined rules and policies to ensure safety and correctness.

9. **Execution Planner**: Manages the execution of validated SQL queries against the appropriate database.

10. **Database Connectors**: Provides connectivity to various database systems, enabling the execution of SQL queries.

11. **Result Formatter**: Formats the results and SQL queries for presentation back to the user.

12. **Audit and Feedback Store**: Captures logs, user feedback, and execution metadata for continuous improvement and governance.

## Component Interactions

The components interact in a defined flow:

1. A user submits a natural language query through the user interface.
2. The request gateway standardizes the request and forwards it to the query understanding service.
3. The query understanding service analyzes the query and identifies the necessary metrics and filters.
4. The domain router selects the appropriate semantic model based on the identified domain.
5. The semantic metadata layer provides the necessary definitions and mappings for the query.
6. The prompt builder constructs a prompt for the Bedrock model.
7. Amazon Bedrock generates candidate SQL queries based on the prompt.
8. The SQL validation and guardrails component checks the generated SQL for validity and safety.
9. The execution planner executes the validated SQL against the appropriate database.
10. The result formatter prepares the results for presentation to the user.
11. The audit and feedback store captures relevant data for future improvements.

## Conclusion

The architecture of the Bedrock NL2SQL project is designed to be flexible, extensible, and secure, allowing for the effective conversion of natural language queries into SQL across multiple domains. By leveraging a metadata-driven approach, the system can easily adapt to new business requirements and domains without extensive rework.