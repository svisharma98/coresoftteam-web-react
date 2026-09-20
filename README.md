# Core Soft Team Web React

A React + Vite website for Core Soft Team with a contact form, landing-page sections, and a production-ready API configuration pattern.

## Project overview

This project is a frontend marketing website built with React, Vite, and Material UI. It includes:

- homepage and service sections
- contact page with validation
- API-based contact submission
- environment-based configuration for backend URL
- styling and UI components for a polished presentation

## Tech stack

- React 19
- Vite 8
- React Router
- Material UI
- Axios
- OXLint for linting

## Prerequisites

Before running the project, make sure you have installed:

- Node.js 18 or newer
- npm or yarn
- a backend API that exposes a POST endpoint at /contactus

## Environment setup

1. Create your local environment file:

   cp .env.example .env
 
3. Important notes:

   - The value must be the backend base URL, not the full contact endpoint.
   - The frontend calls /contactus automatically using this base URL.
   - Do not commit your real .env file to Git.
   - Keep .env.local or .env in your local environment only.
 
## Local development

Install dependencies:

npm install

Start the app:

npm run dev

The project runs in development mode on the Vite local server.

## Production build

Create a production build:

npm run build

Then preview it locally:

npm run preview

## Security and production notes

- Never store production API secrets in the frontend.
- Use a public-safe backend URL only.
- Validate all input on the backend as well.
- Add rate limiting and anti-abuse protections to the /contactus endpoint.
- Use HTTPS in production.
- Keep environment variables out of source control with .gitignore.

## File structure notes

- src/api/contactApi.js handles API requests
- src/pages/ContactPage.jsx handles form validation and user interaction
- .env is for local runtime configuration
- .env.example is a safe template for teammates or deployment setup

## Example .env file

The project expects a file similar to:

VITE_API_URL=https://api.yourdomain.com

## Deployment checklist

Before deployment, confirm:

- .env is not committed
- backend URL is correct
- HTTPS is enabled
- backend route /contactus is live
- frontend validation is working
- server-side validation is implemented

## Support

For any project configuration or deployment questions, update the backend URL in .env and ensure the API is running before testing the contact form.
