// // // const express = require('express');
// // // const mongoose = require('mongoose');
// // // const cors = require('cors');
// // // const dotenv = require('dotenv');
// // // const flightRoutes = require('./routes/flightRoutes');
// // // app.use('/api/flights', flightRoutes);


// // // dotenv.config();

// // // const app = express();
// // // app.use(express.json());
// // // app.use(cors());

// // // // MongoDB connection
// // // mongoose.connect(process.env.MONGO_URI, {
// // //     useNewUrlParser: true,
// // //     useUnifiedTopology: true,
// // // })
// // // .then(() => console.log('MongoDB connected'))
// // // .catch((err) => console.log('MongoDB connection error:', err));

// // // // Routes
// // // app.get('/', (req, res) => {
// // //     res.send('Welcome to the Flight Booking Backend');
// // // });

// // // // Server listen
// // // const PORT = process.env.PORT || 8000;
// // // app.listen(PORT, () => {
// // //     console.log(`Server is running on port ${PORT}`);
// // // });


// // const express = require('express');
// // const dotenv = require('dotenv');
// // const connectDB = require('./config/db');
// // const flightRoutes = require('./routes/flightRoutes');
// // const bookingRoutes = require('./routes/bookingRoutes');

// // dotenv.config();
// // connectDB();

// // const app = express();
// // app.use(express.json());

// // // Routes
// // app.use('/api', flightRoutes);
// // app.use('/api', bookingRoutes);

// // const PORT = process.env.PORT || 5000;
// // app.listen(PORT, () => {
// //   console.log(`Server running on port ${PORT}`);
// // });


// // server.js

// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// require('dotenv').config(); // Load environment variables

// const bookingRoutes = require('./routes/bookingRoutes');

// // Initialize the express app
// const app = express();

// // Middleware
// app.use(cors()); // Enable CORS
// app.use(express.json()); // Parse incoming JSON data

// // MongoDB connection using MONGO_URI from environment variables

// // const connectDB = async () => {
// //     try {
// //         await mongoose.connect(process.env.MONGO_URI, {
// //             useNewUrlParser: true,
// //             useUnifiedTopology: true,
// //         });
// //         console.log('MongoDB connected');
// //     } catch (error) {
// //         console.error('Error connecting to MongoDB:', error);
// //         process.exit(1);
// //     }
// // };

// // mongoose.connect(process.env.MONGO_URI, {
// //     useNewUrlParser: true,
// //     useUnifiedTopology: true,
// //   })
// //   .then(() => console.log('MongoDB connected'))
// //   .catch((error) => {
// //     console.error('MongoDB connection error:', error);
// //     process.exit(1); // Exit process if MongoDB fails to connect
// //   });

// // Connect to the database
// connectDB();

// // Routes
// app.use('/api', bookingRoutes);

// // Default route for testing
// app.get('/', (req, res) => {
//     res.send('Flight Booking System API is running...');
// });

// // Port setup
// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });



// const express = require('express');
// const mongoose = require('mongoose');
// require('dotenv').config(); // Load environment variables

// const app = express();
// const PORT = process.env.PORT || 3000;

// // MongoDB connection using local MongoDB URI
// const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydb'; // Fallback to default if env var is missing

// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => console.log('MongoDB connected'))
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//     process.exit(1); // Exit process if connection fails
//   });

// // Middleware
// app.use(express.json());

// // Routes
// app.use('/api/booking', require('./routes/bookingRoutes'));

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });


const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 3000;

// MongoDB connection using local MongoDB URI
const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/flight'; // Fallback to default if env var is missing

mongoose.connect(mongoURI)
  .then(() => console.log('MongoDB connected!'))
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process if connection fails
  });

// Middleware
app.use(express.json());

// Routes
app.use('/api/booking', require('./routes/bookingRoutes'));

app.use('/api/flight', require('./routes/flightRoutes'));

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
