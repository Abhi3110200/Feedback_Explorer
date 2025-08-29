# Feedback Explorer

NEXT_PUBLIC_API_URL=https://feedback-explorer-ec5g.onrender.com

A modern, full-stack web application for collecting and managing product feedback. Built with the MERN stack (MongoDB, Express.js, React, and Node.js).

## Features

- **Submit Feedback**: Users can submit feedback with title, description, and category
- **Categorize Feedback**: Organize feedback into Bug, Feature, or Improvement
- **Vote on Feedback**: Users can upvote feedback they find valuable
- **Search & Filter**: Easily find feedback using search and category filters
- **Sorting**: Sort feedback by newest, oldest, or most voted
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

### Frontend
- **React** with **TypeScript** for type safety
- **Next.js** for server-side rendering and routing
- **Tailwind CSS** for styling
- **React Hook Form** for form handling and validation

### Backend
- **Node.js** with **Express.js**
- **MongoDB** with **Mongoose** ODM
- **CORS** for cross-origin requests

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account or local MongoDB instance

## Getting Started

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the backend directory with the following variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the frontend directory:
   ```
   NEXT_PUBLIC_API_URL=http://localhost:5000
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## API Endpoints

### Feedback

- `GET /api/feedback` - Get all feedback
  - Query params:
    - `sort`: 'newest' (default), 'oldest', or 'votes'
    - `category`: Filter by category ('Bug', 'Feature', 'Improvement')
    - `q`: Search query
    - `page`: Page number for pagination
    - `limit`: Items per page (default: 10)

- `POST /api/feedback` - Create new feedback
  - Body: `{ title: string, description: string, category: string }`



## Project Structure

```
/feedback-explorer
├── backend/               # Backend server
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── index.js           # Server entry point
│   └── package.json
├── frontend/              # Frontend React app
│   ├── app/               # Next.js app directory
│   ├── components/        # Reusable components
│   ├── lib/               # Utility functions
│   ├── public/            # Static files
│   └── package.json
└── README.md
```

## Deployment

### Backend

1. Deploy to Heroku, Vercel, or your preferred Node.js hosting provider
2. Set environment variables in your hosting provider's dashboard
3. Make sure to set `NODE_ENV=production` in production

### Frontend

1. Build the application:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy to Vercel, Netlify, or your preferred static hosting provider

## Future Improvements

- [ ] User authentication and profiles
- [ ] Commenting system on feedback
- [ ] Rich text editing for feedback descriptions
- [ ] File uploads for screenshots
- [ ] Email notifications for updates
- [ ] Admin dashboard for moderation

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

**No AI was used in the development of this application.** All code and documentation was written manually to demonstrate my skills and understanding of the MERN stack.
