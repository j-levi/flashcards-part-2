import React, { useState } from 'react';

const TextInputForm = ({ answerStatus, submit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(inputText);
    // Optionally clear the input after submission:
    // setInputText('');
  };

  let statusMessage = "";
  let statusClass = "";

  if (answerStatus === 2) {
    statusMessage = "Pending";
    statusClass = "answer-pending";
  } else if (answerStatus === 1) {
    statusMessage = "Correct!";
    statusClass = "answer-correct";
  } else if (answerStatus === 0) {
    statusMessage = "Incorrect!";
    statusClass = "answer-incorrect";
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textInput">Enter text:</label>
      <input 
        type="text" 
        id="textInput" 
        name="textInput" 
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
      <div className={`answer-status ${statusClass}`}>
        {statusMessage}
      </div>
    </form>
  );
};

export default TextInputForm;
