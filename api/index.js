const express = require("express");
const cors = require("cors");
const dbConnect = require("./dbconnection.js");
const studentRouter = require("./studentController.js"); // Adjust the path if necessary

const app = express();
const port = 4000; // Backend port

// Dynamic CORS configuration
const corsOptions = {
  origin: (origin, callback) => {
    console.log("Request Origin:", origin);
    const allowedOrigins = [
      'https://sristi-registration-frontend.vercel.app', // Frontend's origin
      'https://sristi-registration-frontend.vercel.app/', // Frontend's origin
      'http://127.0.0.1:5500', // For local testing
      'http://127.0.0.1:5500/frontend/index.html',
      'http://localhost:4000/'
    ];
    if (allowedOrigins.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
};

// Apply CORS middleware
app.use(cors(corsOptions));
app.options('*', cors(corsOptions)); // Explicitly handle preflight requests

// Middleware for parsing JSON requests
app.use(express.json());

// Connect to the database
dbConnect();

// Log incoming requests for debugging
app.use((req, res, next) => {
  console.log(`Incoming Request: ${req.method} ${req.url}`);
  console.log(`Request Origin: ${req.headers.origin}`);
  next();
});

// Route setup for student-related endpoints
app.use('/', studentRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});