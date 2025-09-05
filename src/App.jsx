import React, { useState } from 'react';
import './App.css'; // Import the CSS file

// Main App Component that handles navigation and renders sub-components.
const App = () => {
  // State to manage the current view, defaulting to 'armstrong'.
  const [view, setView] = useState('armstrong');

  // Renders the component based on the current view state.
  const renderContent = () => {
    switch (view) {
      case 'armstrong':
        return <ArmstrongCheck />;
      case 'naturalNumbers':
        return <NaturalNumbers />;
      case 'factorial':
        return <FactorialFinder />;
      case 'greatestNumber':
        return <GreatestOfThree />;
      case 'boxGame':
        return <BoxGame />;
      default:
        return <p className="text-message">Please select an option from the menu.</p>;
    }
  };

  return (
    <div className="app-container">
    {/* Sidebar Navigation Panel */}
    <div className="sidebar">
    <h1 className="main-title">Exercises</h1>
    <nav className="nav-menu">
    <button
    onClick={() => setView('armstrong')}
    className={`nav-button ${view === 'armstrong' ? 'active' : ''}`}
    >
    Armstrong Number
    </button>
    <button
    onClick={() => setView('naturalNumbers')}
    className={`nav-button ${view === 'naturalNumbers' ? 'active' : ''}`}
    >
    Natural Numbers
    </button>
    <button
    onClick={() => setView('factorial')}
    className={`nav-button ${view === 'factorial' ? 'active' : ''}`}
    >
    Factorial
    </button>
    <button
    onClick={() => setView('greatestNumber')}
    className={`nav-button ${view === 'greatestNumber' ? 'active' : ''}`}
    >
    Greatest Number
    </button>
    <button
    onClick={() => setView('boxGame')}
    className={`nav-button ${view === 'boxGame' ? 'active' : ''}`}
    >
    Box Game
    </button>
    </nav>
    </div>

    {/* Main Content Area */}
    <div className="main-content">
    <div className="content-card">
    {renderContent()}
    </div>
    </div>
    </div>
  );
};

// Component for checking if a number is an Armstrong number.
const ArmstrongCheck = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const isArmstrong = () => {
    if (!number || isNaN(number) || number < 0) {
      setResult('Please enter a valid positive number.');
      return;
    }
    const numStr = number.toString();
    const numDigits = numStr.length;
    let sum = 0;
    for (let digit of numStr) {
      sum += Math.pow(parseInt(digit, 10), numDigits);
    }
    if (sum === parseInt(number, 10)) {
      setResult(`${number} is an Armstrong number.`);
    } else {
      setResult(`${number} is not an Armstrong number.`);
    }
  };

  return (
    <div className="exercise-section">
    <h2 className="section-title">Armstrong Number</h2>
    <p className="section-description">
    An Armstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
    </p>
    <div className="input-group">
    <input
    type="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
    placeholder="Enter a number"
    className="input-field"
    />
    <button onClick={isArmstrong} className="action-button">
    Check
    </button>
    {result && <p className="result-text">{result}</p>}
    </div>
    </div>
  );
};

// Component for displaying natural numbers up to 10.
const NaturalNumbers = () => {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <div className="exercise-section">
    <h2 className="section-title">Natural Numbers</h2>
    <p className="section-description">
    Here are the first 10 natural numbers.
    </p>
    <ul className="number-list">
    {numbers.map((num) => (
      <li key={num} className="number-item">
      {num}
      </li>
    ))}
    </ul>
    </div>
  );
};

// Component for finding the factorial of an input number.
const FactorialFinder = () => {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState('');

  const calculateFactorial = () => {
    const num = parseInt(number, 10);
    if (isNaN(num) || num < 0) {
      setResult('Please enter a non-negative integer.');
      return;
    }

    if (num === 0) {
      setResult(`The factorial of 0 is 1.`);
      return;
    }

    let factorial = 1;
    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    setResult(`The factorial of ${num} is ${factorial}.`);
  };

  return (
    <div className="exercise-section">
    <h2 className="section-title">Factorial</h2>
    <p className="section-description">
    Find the factorial of a given non-negative integer.
    </p>
    <div className="input-group">
    <input
    type="number"
    value={number}
    onChange={(e) => setNumber(e.target.value)}
    placeholder="Enter a number"
    className="input-field"
    />
    <button onClick={calculateFactorial} className="action-button">
    Calculate
    </button>
    {result && <p className="result-text">{result}</p>}
    </div>
    </div>
  );
};

// Component for finding the greatest of three input numbers.
const GreatestOfThree = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [num3, setNum3] = useState('');
  const [result, setResult] = useState('');

  const findGreatest = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    const n3 = parseFloat(num3);

    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      setResult('Please enter three valid numbers.');
      return;
    }

    const greatest = Math.max(n1, n2, n3);
    setResult(`The greatest number is ${greatest}.`);
  };

  return (
    <div className="exercise-section">
    <h2 className="section-title">Greatest of Three Numbers</h2>
    <p className="section-description">
    Enter three numbers to find the greatest among them.
    </p>
    <div className="input-group">
    <input
    type="number"
    value={num1}
    onChange={(e) => setNum1(e.target.value)}
    placeholder="First number"
    className="input-field"
    />
    <input
    type="number"
    value={num2}
    onChange={(e) => setNum2(e.target.value)}
    placeholder="Second number"
    className="input-field"
    />
    <input
    type="number"
    value={num3}
    onChange={(e) => setNum3(e.target.value)}
    placeholder="Third number"
    className="input-field"
    />
    <button onClick={findGreatest} className="action-button">
    Find Greatest
    </button>
    {result && <p className="result-text">{result}</p>}
    </div>
    </div>
  );
};

// Placeholder component for the box game.
const BoxGame = () => {
  const [initialValue, setInitialValue] = useState('');
  const [boxes, setBoxes] = useState({
    violet: 0,
    orange: 0,
    green: 0,
    white: 0,
  });
  const [message, setMessage] = useState('');

  // Map box colors to labels
  const boxLabels = {
    violet: 'Box A',
    orange: 'Box B',
    green: 'Box C',
    white: 'Box D',
  };

  const handleInitialize = () => {
    const value = parseInt(initialValue, 10);
    if (isNaN(value) || value <= 0) {
      setMessage('Please enter a valid positive number.');
      return;
    }

    const newBoxes = {
      violet: value,
      orange: value * 2,
      green: value * 4,
      white: value * 8,
    };
    setBoxes(newBoxes);
    setMessage('Boxes initialized successfully!');
  };

  const handleChoice1 = () => {
    const newBoxes = {
      violet: boxes.violet * 2,
      orange: boxes.orange * 2,
      green: boxes.green * 2,
      white: boxes.white * 2,
    };
    setBoxes(newBoxes);
    setMessage('Each box has been filled with twice the number of balls.');
  };

  const handleChoice2 = () => {
    const newBoxes = { ...boxes };
    newBoxes.white = newBoxes.white + newBoxes.orange + newBoxes.green;
    newBoxes.orange = 0;
    newBoxes.green = 0;
    setBoxes(newBoxes);
    setMessage('Consecutive boxes (Orange and Green) have been emptied and pushed to the last box (White).');
  };

  const handleChoice3 = () => {
    const newBoxes = { ...boxes };
    newBoxes.orange += newBoxes.violet;
    newBoxes.white += newBoxes.green;
    newBoxes.violet = 0;
    newBoxes.green = 0;
    setBoxes(newBoxes);
    setMessage('Odd numbered boxes (Violet and Green) have been pushed into even numbered boxes (Orange and White).');
  };

  return (
    <div className="exercise-section">
    <h2 className="section-title">Box Game</h2>
    <p className="section-description">
    Enter an initial value to start the game. Then, choose an action to perform on the boxes.
    </p>
    <div className="input-group">
    <input
    type="number"
    value={initialValue}
    onChange={(e) => setInitialValue(e.target.value)}
    placeholder="Enter initial value"
    className="input-field"
    />
    <button onClick={handleInitialize} className="action-button">
    Initialize Boxes
    </button>
    </div>

    <div className="game-display">
    <div className="box-container">
    {Object.entries(boxes).map(([color, count]) => (
      <div key={color} className="box">
      <div className="box-color" style={{ backgroundColor: color }}></div>
      <p className="box-name">{boxLabels[color]}</p> {/* Added box label */}
      <p className="box-label">{color.charAt(0).toUpperCase() + color.slice(1)}: {count}</p>
      </div>
    ))}
    </div>
    </div>

    <div className="button-group">
    <button onClick={handleChoice1} className="action-button" disabled={!initialValue}>
    Choice 1: Double all
    </button>
    <button onClick={handleChoice2} className="action-button" disabled={!initialValue}>
    Choice 2: Push to last
    </button>
    <button onClick={handleChoice3} className="action-button" disabled={!initialValue}>
    Choice 3: Push odds to evens
    </button>
    </div>
    {message && <p className="result-text">{message}</p>}
    </div>
  );
};

export default App;
