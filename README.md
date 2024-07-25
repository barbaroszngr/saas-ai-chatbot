# SaaS AI Chatbot

An advanced AI-powered sales representative chatbot designed to streamline customer interactions, automate appointments, and process payments seamlessly.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
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

### Next.js 14
Next.js is our chosen React framework for building a fast, SEO-friendly, and highly scalable web application. It provides server-side rendering, static site generation, and API routes, which are crucial for our SaaS platform's performance and functionality.

### React 18
We use React 18 for building our user interface components. Its latest features, including automatic batching and concurrent rendering, help improve our application's performance and user experience.

### TypeScript
TypeScript adds static typing to our JavaScript code, enhancing code quality, catching errors early, and improving developer productivity through better tooling support.

### Tailwind CSS
Tailwind CSS is our utility-first CSS framework. It allows for rapid UI development, consistent styling, and easy customization, which is essential for our white-labeling feature.

### Prisma (ORM)
Prisma serves as our Object-Relational Mapping (ORM) tool. It simplifies database operations, provides type-safe database access, and supports multiple databases, making it ideal for our scalable SaaS application.

### Stripe
We integrate Stripe for secure and flexible payment processing. It handles subscriptions, one-time payments, and connects with our financial dashboard for comprehensive payment management.

### OpenAI API
The OpenAI API powers our AI chatbot's natural language processing capabilities, enabling intelligent conversations and automated responses.

### Clerk
Clerk is our chosen authentication and user management solution. We opted for Clerk due to its robust security features, easy integration with Next.js, and support for various authentication methods including OTP.

### Zod
Zod is our schema declaration and validation library. It ensures data integrity throughout the application, from form inputs to API responses.

### React Hook Form
We use React Hook Form for efficient, flexible, and extensible forms. It integrates well with our TypeScript and Zod setup for type-safe form handling.

### Radix UI
Radix UI provides our application with a set of accessible, unstyled UI components. We chose it for its flexibility in styling and strong accessibility support.

### Uploadcare
Uploadcare handles our file and image upload needs.

## Getting Started

To get started with the SaaS AI Chatbot, make sure you have Node.js (v14 or later) and npm installed on your system.

## Installation

1. Clone the repository:

```
git clone https://github.com/barbaroszngr/saas-ai-chatbot.git
cd saas-ai-chatbot
```

2. Install dependencies:

```
npm install
```

3. Install Prisma CLI globally (if not already installed):

```
npm install -g prisma

```

4. Set up environment variables:

   Create a `.env` file in the root directory. We'll add the necessary variables in the Configuration section.


## Configuration

1. Database setup:

   Add the following to your `.env` file:

```
DATABASE_URL="your_database_connection_string"
```

  Then run:

```
npx prisma generate
npx prisma db push
```

2. Clerk (Authentication):

Add to `.env`:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY="your_clerk_publishable_key"

CLERK_SECRET_KEY="your_clerk_secret_key"

NEXT_PUBLIC_CLERK_SIGN_IN_URL="/auth/sign-in"

NEXT_PUBLIC_CLERK_SIGN_UP_URL="/auth/sign-up"

3. Stripe (Payments):

Add to `.env`:

STRIPE_SECRET="your_stripe_secret_key"

NEXT_PUBLIC_STRIPE_PUBLISH_KEY="your_stripe_publishable_key"

4. OpenAI (Chatbot):

Add to `.env`:

OPEN_AI_KEY="your_openai_api_key"

5. Uploadcare (File uploads):

Add to `.env`:

NEXT_PUBLIC_UPLOAD_CARE_PUBLIC_KEY="your_uploadcare_public_key"

UPLOAD_CARE_SECRET_KEY="your_uploadcare_secret_key"

6. Nodemailer (Email functionality):
Add to `.env`:

NODE_MAILER_EMAIL="your_email@example.com"

NODE_MAILER_GMAIL_APP_PASSWORD="your_gmail_app_password"

After adding these environment variables, your application should be properly configured to use all the integrated services.

## Usage

To run the development server:

bash
npm run dev

Open http://localhost:3000 in your browser to see the application.



Key files:
- `src/middleware.ts`: Handles authentication middleware
- `src/lib/prisma.ts`: Prisma client initialization
- `src/components/chatbot/window.tsx`: Main chatbot interface

## Deployment

This project is designed to be deployed on Vercel. Follow these steps:

1. Push your code to a GitHub repository.
2. Connect your GitHub account to Vercel.
3. Import the project from your GitHub repository.
4. Configure the environment variables in Vercel's dashboard.
5. Deploy the application.

For more detailed instructions on deploying Next.js applications to Vercel, refer to the [official Vercel documentation](https://vercel.com/docs/frameworks/nextjs).

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).