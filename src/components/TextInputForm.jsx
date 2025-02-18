//textInputForm.jsx
import React, { useState } from 'react';

const TextInputForm = ({ answerStatus, submit }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submit(inputText);
  };

  return (
    <form onSubmit={handleSubmit} className={answerStatus}>
      <label htmlFor="textInput">Enter text:</label>
      <input 
        type="text" 
        id="textInput" 
        name="textInput" 
        value={inputText}
        onChange={handleInputChange}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default TextInputForm;

