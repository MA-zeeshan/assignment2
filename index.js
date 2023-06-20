import express from 'express';
import mongoose from 'mongoose';
import AuthRoutes from './routes/authRoutes.js';
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

const connectionString =
  'mongodb+srv://root:toor@cluster0.rkizo1a.mongodb.net/?retryWrites=true&w=majority';
try {
  mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log('Connected to MongoDB Atlas');
  app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
} catch (error) {
  console.error('Error connecting to MongoDB Atlas:', error);
}

app.use('/register', (req, res) => {
  res.render('register');
});

app.use('/login', (req, res) => {
  res.send('I am working here');
});

app.use('/auth', AuthRoutes);
