# Bedrock NL2SQL

## Overview

Bedrock NL2SQL is an enterprise application that converts natural language queries into SQL statements using Amazon Bedrock. The platform is designed to empower business users, analysts, and developers to interact with databases using simple, intuitive language.

## Features

- **Natural Language Processing**: Converts user queries into structured SQL.
- **Multi-Domain Support**: Works across various business domains without requiring extensive reconfiguration.
- **Governance and Security**: Ensures that generated SQL adheres to defined policies and security measures.
- **Extensible Architecture**: Easily integrates with different databases and can be extended with additional features.

## Project Structure

The project is organized into several key directories:

- **src**: Contains the source code for the application.
  - **api**: API server and route definitions.
  - **services**: Core business logic and services for processing queries.
  - **semantic**: Metadata and semantic models for understanding business terms.
  - **connectors**: Database connectors for various data sources.
  - **auth**: Access control and user permissions.
  - **cli**: Command-line interface for application interaction.
  - **utils**: Utility functions and helpers.
  - **types**: TypeScript types and interfaces.

- **config**: Configuration files for application settings.
- **infra**: Infrastructure as code for deploying resources.
- **scripts**: Automation scripts for deployment and metadata seeding.
- **tests**: Unit and integration tests for ensuring code quality.
- **docs**: Documentation for architecture, onboarding, and usage.
- **examples**: Sample queries for users to reference.

## Getting Started

### Prerequisites

- Node.js (version X.X.X)
- TypeScript (version X.X.X)
- Access to Amazon Bedrock

### Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   cd bedrock-nl2sql
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Configure environment variables by copying `env.example` to `.env` and updating the values.

### Running the Application

To start the server, run:
```
npm start
```

### Running Tests

To execute the tests, use:
```
npm test
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.