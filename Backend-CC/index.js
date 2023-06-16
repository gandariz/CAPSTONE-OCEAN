const express = require('express');
const mysql = require('mysql2');


const dotenv = require('dotenv');
const crypto = require('crypto');

// Load environment variables from a .env file
dotenv.config();

// Create an Express.js app
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON request bodies
app.use(express.json());

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Create a MySQL connection pool
const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    connectionLimit: 10
  });
  
//   Test the database connection
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to the database: ', err);
      return;
    }
    console.log('Connected to the database');
    connection.release();
  });
  
  // POST questions Array
  app.post('/q', (req, res) => {
    const questions = req.body; // Assuming the request body is an array of questions
  
    // Prepare the values to be inserted into the database
    const values = questions.map(question => [question.Context, question.original_question, question.modified_question]);
  
    // Insert the questions into the questions table
    pool.query('INSERT INTO questions_table (Context, original_question, modified_question) VALUES ?', [values], (err, results) => {
      if (err) {
        console.error('Error storing questions:', err);
        res.status(500).json({ error: 'Failed to store questions' });
        return;
      }
      res.json({ message: 'Questions stored successfully' });
    });
  });

  // GET all questions
  app.get('/q', (req, res) => {
    // Retrieve all users from the database
    pool.query('SELECT * FROM questions_table', (err, results) => {
      if (err) {
        console.error('Error fetching questions_table:', err);
        res.status(500).json({ error: 'Failed to fetch questions_table' });
        return;
      }
      res.json(results);
    });
  });
  
  // GET question by context
  app.get('/question/:context', (req, res) => {
    const context = req.params.context;
  
    // Retrieve data from the questions_table based on the context
    pool.query('SELECT * FROM questions_table WHERE Context = ?', [context], (err, results) => {
      if (err) {
        console.error('Error fetching questions:', err);
        res.status(500).json({ error: 'Failed to fetch questions' });
        return;
      }
      res.json(results);
    });
  });

  // EDIT question by context
  app.put('/question/:context', (req, res) => {
    const context = req.params.context;
    const { updatedQuestion } = req.body;
  
    // Update data in the questions_table based on the context
    pool.query('UPDATE questions_table SET Question = ? WHERE Context = ?', [updatedQuestion, context], (err, results) => {
      if (err) {
        console.error('Error updating question:', err);
        res.status(500).json({ error: 'Failed to update question' });
        return;
      }
      res.json({ message: 'Question updated successfully' });
    });
  });

  // DELETE question by context
  app.delete('/question/:context', (req, res) => {
    const context = req.params.context;
  
    // Delete data from the questions_table based on the context
    pool.query('DELETE FROM questions_table WHERE Context = ?', [context], (err, results) => {
      if (err) {
        console.error('Error deleting questions:', err);
        res.status(500).json({ error: 'Failed to delete questions' });
        return;
      }
      res.json({ message: 'Questions deleted successfully' });
    });
  });
  
  

  // POST users
  app.post('/users', (req, res) => {
    const { name, result } = req.body;
  
    // Generate a random ID using UUID v4
    const id = crypto.randomBytes(16).toString('hex');
  
    // Insert the data into the users table
    const query = 'INSERT INTO users (id, name, result) VALUES (?, ?, ?)';
    pool.query(query, [id, name, result], (err, results) => {
      if (err) {
        console.error('Error storing user data:', err);
        res.status(500).json({ error: 'Failed to store user data' });
        return;
      }
      res.json({ message: 'User data stored successfully' });
    });
  });

  // GET all users
  app.get('/users', (req, res) => {
    // Retrieve all users from the database
    pool.query('SELECT * FROM users', (err, results) => {
      if (err) {
        console.error('Error fetching users:', err);
        res.status(500).json({ error: 'Failed to fetch users' });
        return;
      }
      res.json(results);
    });
  });
  
  // Edit a user by ID
  app.put('/users/:id', (req, res) => {
    const { name, result } = req.body;
    const { id } = req.params;

    // Update the user in the database
    pool.query('UPDATE users SET name = ?, result = ? WHERE id = ?', [name, result, id], (err, results) => {
      if (err) {
        console.error('Error updating user:', err);
        res.status(500).json({ error: 'Failed to update user' });
        return;
      }
      res.json({ message: 'User updated successfully' });
    });
  });

  // Get a user by ID
  app.get('/users/:id', (req, res) => {
    const { id } = req.params;

    // Retrieve the user from the database
    pool.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error fetching user:', err);
        res.status(500).json({ error: 'Failed to fetch user' });
        return;
      }

      if (results.length === 0) {
        res.status(404).json({ error: 'User not found' });
        return;
      }

      res.json(results[0]);
    });
  });

  // Delete a user by ID
  app.delete('/users/:id', (req, res) => {
    const { id } = req.params;

    // Delete the user from the database
    pool.query('DELETE FROM users WHERE id = ?', [id], (err, results) => {
      if (err) {
        console.error('Error deleting user:', err);
        res.status(500).json({ error: 'Failed to delete user' });
        return;
      }

      res.json({ message: 'User deleted successfully' });
    });
  });
