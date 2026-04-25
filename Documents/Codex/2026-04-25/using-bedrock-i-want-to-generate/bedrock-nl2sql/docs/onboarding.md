# Onboarding Instructions for Bedrock NL2SQL Project

Welcome to the Bedrock NL2SQL project! This document provides onboarding instructions for new developers to help you get started with the project.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (version 14 or higher)
- npm (Node package manager)
- TypeScript (global installation)
- Git

## Getting Started

1. **Clone the Repository**

   Start by cloning the repository to your local machine:

   ```
   git clone <repository-url>
   cd bedrock-nl2sql
   ```

2. **Install Dependencies**

   Navigate to the project directory and install the required dependencies:

   ```
   npm install
   ```

3. **Set Up Environment Variables**

   Create a `.env` file in the root directory of the project based on the `env.example` file:

   ```
   cp config/env.example .env
   ```

   Update the `.env` file with your specific configuration settings.

4. **Build the Project**

   Compile the TypeScript files into JavaScript:

   ```
   npm run build
   ```

5. **Run the Application**

   Start the server:

   ```
   npm start
   ```

   The application should now be running on `http://localhost:3000`.

## Development Workflow

- **Creating New Features**: When adding new features, create a new branch from `main` and follow the naming convention `feature/your-feature-name`.
  
- **Writing Tests**: Ensure that you write unit and integration tests for any new functionality. Place unit tests in the `tests/unit/services` directory and integration tests in the `tests/integration` directory.

- **Code Reviews**: Submit a pull request for your branch to be reviewed before merging into the `main` branch.

## Useful Scripts

- **Run Tests**: To execute the test suite, use:

  ```
  npm test
  ```

- **Deploy the Application**: Use the provided deployment script:

  ```
  ./scripts/deploy.sh
  ```

## Resources

- **Documentation**: Refer to the `docs` directory for detailed documentation on architecture, prompts, and other aspects of the project.
- **Examples**: Check the `examples/sample_queries.md` file for example queries to test the application.

## Support

If you encounter any issues or have questions, feel free to reach out to the team via the project’s communication channels.

Welcome aboard, and happy coding!