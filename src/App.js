// App.js
import './App.css';
import React, { useState } from 'react';

function App() {
  // State of the application
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');

  // BMI calculation logic
  const calBmi = (e) => {
    e.preventDefault();
    if (weight === '' || height === '') {
      alert('Enter valid values');
    } else {
      let calculatedBmi = (weight / (height * height)) * 703;
      setBmi(calculatedBmi.toFixed(1));

      // Display message logic
      if (calculatedBmi < 18.5) {
        setMessage('You are underweight');
      } else if (calculatedBmi >= 18.5 && calculatedBmi <= 24.9) {
        setMessage('You are healthy');
      } else {
        setMessage('You are overweight');
      }
    }
  };

  // Reload logic
  const reload = () => {
    setWeight('');
    setHeight('');
    setBmi('');
    setMessage('');
  };

  return (
    <div className="app">
      <div className="container">
        <h2>BMI Calculator</h2>
        <form onSubmit={calBmi}>
          <div className="input-group">
            <label>Weight (lbs)</label>
            <input
              type="number"
              placeholder="Enter weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Height (in cms)</label>
            <input
              type="number"
              placeholder="Enter height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div className="button-group">
            <button className="btn" type="submit">Submit</button>
            <button className="btn btn-outline" onClick={reload} type="button">Reload</button>
          </div>

          <div className="center">
            {bmi && <h3>Your BMI is: {bmi}</h3>}
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
