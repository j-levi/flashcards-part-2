# WEB102 Project 3: **Flashcards! Part 2**  
Submitted by: **James Levi**  

**Flashcards! Part 2** is an interactive React web application that enhances the flashcard study experience. Users can enter answers, receive feedback on their responses, and track their progress with streak counters. The flashcards are already randomized, ensuring a varied learning experience each session. Users can navigate forward and backward through the cards and mark mastered ones to remove them from the study pool.

**Time spent:** **10 hours** in total  

---

## **Required Features**  

The following **required** functionality is completed:  

✅ **User Input**  
- Users can enter their guess in a text box before revealing the flipside of the card.  
- Clicking the "Submit" button provides visual feedback on whether the answer was correct or incorrect.  

✅ **Moving Multiple Ways in the Card List**  
- A **Back** button allows users to return to the previous card in the set sequence.  
- A **Next** button allows users to navigate forward in the set sequence.  

✅ **Randomized Order**  
- The flashcards are **already shuffled** at the start to ensure a fresh learning experience each session.  

---

## **Optional Features**  

The following **optional** features are implemented:  

✅ **Answer Tolerance**  
- Users' answers are accepted even if they are slightly different from the correct answer using Levenshtein distance calculations.  

✅ **Streak Counter**  
- The app tracks the user’s **current streak** of correct answers.  
- The **longest streak** is recorded to motivate consistent accuracy.  

✅ **Mastered Cards**  
- Users can mark a flashcard as **Mastered**, removing it from the active study pool.  
- Mastered cards are stored in a separate list, allowing users to see their progress.  

---

## **Screenshot**  

Here's a preview of the app with all the required features implemented:  

<img src='public/preview.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />  

---

## **Lessons Learned**  

This project deepened my understanding of **state management** and **conditional rendering** in React. Implementing navigation through a set sequence reinforced my ability to **manage arrays dynamically**. Using Levenshtein distance for flexible answer checking gave me experience with **string similarity algorithms**. The **streak tracking** and **mastered cards** features helped me refine **state persistence techniques** and build user engagement mechanics. Debugging UI state updates provided further insight into React’s rendering lifecycle.

---

## **License**  

```
Copyright 2025 James Levi

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```

---

