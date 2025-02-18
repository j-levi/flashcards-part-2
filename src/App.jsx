import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Display from './components/display'
import levenshtein from 'js-levenshtein';

const flashcards = [
  { description: 'Initializes a new Git repository.', command: 'git init', color: 'green', image: '/image1.png' },
  { description: 'Clones a repository into a new directory.', command: 'git clone', color: 'green', image: '/image1.png' },
  { description: 'Adds changes to the staging area.', command: 'git add', color: 'green', image: '/image1.png' },
  { description: 'Records changes to the repository.', command: 'git commit', color: 'green', image: '/image1.png' },
  { description: 'Displays the state of the working directory and staging area.', command: 'git status', color: 'yellow', image: '/image1.png' },
  { description: 'Uploads local repository content to a remote repository.', command: 'git push', color: 'yellow', image: '/image1.png' },
  { description: 'Fetches and integrates changes from a remote repository to the local repository.', command: 'git pull', color: 'red', image: '/image1.png' },
  { description: 'Lists, creates, or deletes branches.', command: 'git branch', color: 'red', image: '/image1.png' },
  { description: 'Joins two or more development histories together.', command: 'git merge', color: 'red', image: '/image1.png' },
  { description: 'Manages set of tracked repositories.', command: 'git remote', color: 'yellow', image: '/image1.png' },
];

function App() {
  // Existing state values
  const [answerStatus, setAnswerStatus] = useState(2);  
  const [previousIndeces, setPreviousIndeces] = useState([
    Math.floor(Math.random() * flashcards.length)
  ]);
  const [pointer, setPointer] = useState(0);
  
  // New state for streaks
  const [currentStreak, setCurrentStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  
  // New state for managing active & mastered cards.
  // Initially, all card indices are active.
  const [activeCards, setActiveCards] = useState(flashcards.map((_, i) => i));
  const [masteredCards, setMasteredCards] = useState([]);

  const storeCard = (x) => {
    setPreviousIndeces([...previousIndeces, x]);
  };

  const next = () => {
    // If we are at the most recent card, generate a new card index from activeCards
    if (pointer === previousIndeces.length - 1) {
      setAnswerStatus(2);
      if (activeCards.length === 0) {
        alert("All cards mastered!");
        return;
      }
      const newIndex = activeCards[Math.floor(Math.random() * activeCards.length)];
      storeCard(newIndex);      
      setPointer(pointer + 1);
    } else { 
      // Otherwise, simply move forward in the history
      setAnswerStatus(2);
      setPointer(pointer + 1);
    }
  };

  const back = () => {
    if (pointer) {
      setAnswerStatus(2);
      setPointer(pointer - 1);
    }
  };

  const submit = (input) => {
    const correctCommand = flashcards[previousIndeces[pointer]].command;
    const distance = levenshtein(correctCommand, input.trim());
    const threshold = 2; // Allowable number of edits

    if (distance <= threshold) {
      setAnswerStatus(1); // Correct
      setCurrentStreak(prev => {
        const newStreak = prev + 1;
        if (newStreak > longestStreak) {
          setLongestStreak(newStreak);
        }
        return newStreak;
      });
    } else {
      setAnswerStatus(0); // Incorrect
      setCurrentStreak(0);
    }
  };

  const markMastered = () => {
    const cardIndex = previousIndeces[pointer];
    // Remove the card from the active pool if not already mastered
    if (!masteredCards.includes(cardIndex)) {
      setActiveCards(activeCards.filter(index => index !== cardIndex));
      setMasteredCards([...masteredCards, cardIndex]);
    }
  };

  const currentCardIndex = previousIndeces[pointer];

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="content">
        <Header 
          total={flashcards.length} 
          currentStreak={currentStreak} 
          longestStreak={longestStreak} 
          masteredCount={masteredCards.length}
        />
        <Display 
          question={flashcards[currentCardIndex].command} 
          answer={flashcards[currentCardIndex].description} 
          color={flashcards[currentCardIndex].color}
          image={flashcards[currentCardIndex].image}
          next={next}
          back={back}
          answerStatus={answerStatus}
          submit={submit}
          markMastered={markMastered}
          isMastered={masteredCards.includes(currentCardIndex)}
        />
      </div>
    </div>
  )
}

export default App;
