import React, { useState } from "react"
import './display.css'

const Display = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  }

  return (
    <div className="display-box">
      {/* Outer container for perspective */}
      <div className="card">
        {/* Inner element that rotates */}
        <div 
          className={`card-inner ${isFlipped ? 'flipped' : ''}`} 
          onClick={handleFlip}
        >
          <div className={`front ${props.color}`}>
            <h3>{props.question}</h3>
            <div className="image-container">
              <img src={props.image} alt="Flashcard" className="card-image" />
            </div>
          </div>
          
          <div className={`back ${props.color}`}>
            <p>{props.answer}</p>
            <div className="image-container">
              <img src={props.image} alt="Flashcard" className="card-image" />
            </div>
          </div>
        </div>
      </div>

      <div className="button-container">
        <button onClick={props.handleNext}> Next </button>
      </div>
    </div>
  )
}

export default Display
