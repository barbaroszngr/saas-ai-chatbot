# SaaS AI Chatbot

An advanced AI-powered sales representative chatbot designed to streamline customer interactions, automate appointments, and process payments seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Features

- 📅 Automated appointment booking
- 💻 Easy integration with any website
- 🧠 Smart question linking for enhanced conversations
- 💬 Real-time chat support (manual and automated)
- 🏷️ White-labeling options for customization
- 🎨 Customizable user interface
- 🗓️ Calendar widget for easy scheduling
- 💳 Stripe integration for secure payments
- ✉️ Simple email marketing tools
- 💰 Financial dashboard for business insights
- 💾 Lead capture and management
- 🔐 Custom login/signup system with OTP
- 📲 Secure file and image uploads
- 🔍 SEO-optimized blogging platform
- 🏗️ Improved architecture for scalability
- 🖥️ Minimal and stunning user interface
- ❓ FAQ section for quick answers
- 🌓 Light/dark mode toggle
- ⚙️ Feature control settings
- 🔒 Plan-based feature restrictions

## Technologies

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Prisma (ORM)
- Stripe (Payments)
- OpenAI API
- Clerk (Authentication)
- Pusher (Real-time functionality)
- Zod (Schema validation)
- React Hook Form
- Radix UI (UI components)
- Uploadcare (File uploads)
- Nodemailer (Email functionality)

## Getting Started

To get started with the SaaS AI Chatbot, make sure you have Node.js (v14 or later) and npm installed on your system.

## Installation

1. Clone the repository:
git clone https://github.com/barbaroszngr/saas-ai-chatbot.git
cd saas-ai-chatbot

2. Install dependencies:
npm install

3. Set up environment variables:
   Create a `.env` file in the root directory and add the necessary environment variables (refer to `.env.example` if available).

4. Set up the database:
npx prisma generate
npx prisma db push

## Usage
To run the development server:
npm run dev

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Configuration

- Stripe: Set up your Stripe account and add the API keys to the environment variables.
- OpenAI: Configure your OpenAI API key for AI functionality.
- Clerk: Set up Clerk for authentication and add the necessary credentials.
- Pusher: Configure Pusher for real-time features.
- Uploadcare: Set up Uploadcare for file and image uploads.

## Deployment

This project is designed to be deployed on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your GitHub account to Vercel.
3. Import the project from your GitHub repository.
4. Configure the environment variables in Vercel's dashboard.
5. Deploy the application.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).