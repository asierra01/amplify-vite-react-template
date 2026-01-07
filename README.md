## AWS Amplify React+Vite Starter Template

This repository provides a starter template for creating applications using React+Vite and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Overview

This template equips you with a foundational React application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn
- AWS Account (for deploying the backend)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd amplify-vite-react-template
```

2. Install dependencies:
```bash
npm install
```

### Running Locally

#### Option 1: Run with Amplify Sandbox (Recommended)

To run the application with a live backend, start the Amplify sandbox environment:

```bash
npx ampx sandbox
```

This will:
- Deploy a temporary backend to your AWS account
- Generate the `amplify_outputs.json` configuration file
- Watch for changes in your backend code

Then in another terminal, start the development server:

```bash
npm run dev
```

#### Option 2: Run Frontend Only

To run just the frontend without a live backend:

```bash
npm run dev
```

Note: Without running the sandbox, the app will load but backend features (authentication, API, database) won't be functional until you deploy or run the sandbox.

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Linting

```bash
npm run lint
```

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

## Project Structure

```
├── amplify/               # Amplify backend configuration
│   ├── auth/              # Authentication resources
│   ├── data/              # GraphQL API and database schema
│   └── backend.ts         # Backend definition
├── src/
│   ├── App.tsx            # Main application component
│   ├── main.tsx           # Application entry point
│   └── index.css          # Global styles
├── amplify_outputs.json   # Generated backend configuration (auto-generated)
└── package.json
```

## Learn More

- [Amplify Gen 2 Documentation](https://docs.amplify.aws/react/)
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.