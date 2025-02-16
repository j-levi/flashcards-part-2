import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Display from './components/display'


function App() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const flashcards = [
    { description: 'Initializes a new Git repository.', command: 'git init', color: 'green', image: ' /image1.png' },
    { description: 'Clones a repository into a new directory.', command: 'git clone', color: 'green', image: ' /image1.png' },
    { description: 'Adds changes to the staging area.', command: 'git add', color: 'green', image: ' /image1.png' },
    { description: 'Records changes to the repository.', command: 'git commit', color: 'green', image: 'image1.png' },
    { description: 'Displays the state of the working directory and staging area.', command: 'git status', color: 'yellow', image: ' /image1.png' },
    { description: 'Uploads local repository content to a remote repository.', command: 'git push', color: 'yellow', image: ' /image1.png' },
    { description: 'Fetches and integrates changes from a remote repository to the local repository.', command: 'git pull', color: 'red', image: ' /image1.png' },
    { description: 'Lists, creates, or deletes branches.', command: 'git branch', color: 'red', image: ' /image1.png' },
    { description: 'Joins two or more development histories together.', command: 'git merge', color: 'red', image: 'image1.png' },
    { description: 'Manages set of tracked repositories.', command: 'git remote', color: 'yellow', image: ' /image1.png' },
  ];

  const nextRandomCard = () => {
    setCurrentIndex(Math.floor(Math.random() * flashcards.length));
  };

  return (
    <div className="App">
      <div className="overlay"></div>
      <div className="content">
        <Header total={flashcards.length} />
        <Display 
          question={flashcards[currentIndex].command} 
          answer={flashcards[currentIndex].description} 
          color={flashcards[currentIndex].color}
          image={flashcards[currentIndex].image}
          handleNext={nextRandomCard}
        />
      </div>
    </div>
  )
}

export default App
