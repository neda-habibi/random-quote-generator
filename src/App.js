import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Failed to fetch quote');
      }

      const data = await response.json();
      const { content, author } = data;
      setQuote(content);
      setAuthor(author);
    } catch (error) {
      console.error('Error fetching quote:', error.message);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  const getNewQuote = () => {
    fetchQuote();
  };

  return (
    <div className="App">
      <h1 className="header">Random Quote Generator</h1>
      <div className="quote-container">
        <blockquote>
          <p>{quote}</p>
          <footer className="author">{author}</footer>
        </blockquote>
      </div>
      <button onClick={getNewQuote}>New Quote</button>
    </div>
  );
}

export default App;
