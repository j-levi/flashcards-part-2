//display.jsx
import React, { useState } from "react"
import './display.css'
import TextInputForm from './TextInputForm'; // Import the new component

const Display = ({ question, answer, color, image, next, back, answerStatus, submit }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="display-box">
            <div className="card">
                <div 
          className={`card-inner ${isFlipped ? 'flipped' : ''}`} 
          onClick={handleFlip}
        >
          <div className={`front ${color}`}>
            <h3>{question}</h3>
            <div className="image-container">
              <img src={image} alt="Flashcard" className="card-image" />
            </div>
          </div>
          
          <div className={`back ${color}`}>
            <p>{answer}</p>
            <div className="image-container">
              <img src={image} alt="Flashcard" className="card-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button onClick={next}> Next </button>
<button onClick={back}> Back </button>
      </div>
      
      <TextInputForm answerStatus={answerStatus} submit={submit} />
    </div>
  )
}

export default Display

