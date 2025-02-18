//App.jsx
import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Display from './components/display'

const flashcards = [
  { description: 'Initializes a new Git repository.', command: 'git init', color: 'green', image: '/image1.png' },
  { description: 'Clones a repository into a new directory.', command: 'git clone', color: 'green', image: '/image1.png' },
  { description: 'Adds changes to the staging area.', command: 'git add', color: 'green', image: '/image1.png' },
  { description: 'Records changes to the repository.', command: 'git commit', color: 'green', image: '/image1.png' },
  { description: 'Displays the state of the working directory and staging area.', command: 'git status', color: 'yellow', image: ' /image1.png' },
  { description: 'Uploads local repository content to a remote repository.', command: 'git push', color: 'yellow', image: ' /image1.png' },
  { description: 'Fetches and integrates changes from a remote repository to the local repository.', command: 'git pull', color: 'red', image: ' /image1.png' },
  { description: 'Lists, creates, or deletes branches.', command: 'git branch', color: 'red', image: '/image1.png' },
  { description: 'Joins two or more development histories together.', command: 'git merge', color: 'red', image: '/image1.png' },
  { description: 'Manages set of tracked repositories.', command: 'git remote', color: 'yellow', image: '/image1.png' },
];


function App() {
  const [answerStatus, setAnswerStatus] = useState(2);  
  const [previousIndeces, setPreviousIndeces] = useState([
    Math.floor(Math.random() * flashcards.length)
  ]);
  const [pointer, setPointer] = useState(0);



  const storeCard = (x) => {
    setPreviousIndeces([...previousIndeces, x]);
  };

  const next = () => {
    console.log("Here are the previousIndeces: ", previousIndeces);
    console.log("We clicked Next");
    // if we are at the most recent Card, we want to generate a new Card
    if (pointer === previousIndeces.length - 1) {
      console.log("We are at the most recent Card");
      setAnswerStatus(2);
      console.log("Added this card before wethe previousIndeces: ", previousIndeces);

      storeCard(Math.floor(Math.random() * flashcards.length));      
      setPointer(pointer + 1);


    } else { 
      // if we are not at the most recent Card, we want to move forward in the previousIndeces array
      setAnswerStatus(2);
      setPointer(pointer + 1);
    }
  };

  const back = () => {
    if (pointer) {


      setAnswerStatus(2);
      setPointer(pointer - 1);
    } else {
      // nothing happens, since we are at index 0
    }
  }

  const submit = (input) => {
    if (flashcards[previousIndeces[pointer]].command === input.trim()) {
      setAnswerStatus(1);
    } else {
      setAnswerStatus(0);
    }
  }

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="content">
        <Header total={flashcards.length} />
        <Display 
          question={flashcards[previousIndeces[pointer]].command} 
          answer={flashcards[previousIndeces[pointer]].description} 
          color={flashcards[previousIndeces[pointer]].color}
          image={flashcards[previousIndeces[pointer]].image}
          next={next}
          back={back}
          answerStatus={answerStatus}
          submit={submit}
        />
      </div>
    </div>
  )
}

export default App

