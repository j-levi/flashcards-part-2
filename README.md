# WEB102 Project 2: **Flashcards! Part 1**
Submitted by: **James Levi**
**Flashcards! Part 1** is a React web application that allows users to study using flashcards with pairs of items (questions and answers). Users can study cards in a randomized order, flip them to see the answer, and enjoy dynamic styles for each card.
Time spent: **8 hours** in total

## Required Features

The following **required** functionality is completed:

* [x] The title of the card set and some information about it, such as a short description and the total number of cards, are displayed.
* [x] A single card at a time is displayed, only showing one component of the information pair (question or answer).
* [x] A list of card pairs is created (an array of objects containing the question and answer).
* [x] Clicking on the card shows the corresponding component of the information pair.
* [x] Clicking the "Next" button displays a random new card.

---

## Optional Features

The following **optional** features are implemented:

* [x] Cards contain images in addition to or in place of text.
* [x] Cards have different visual styles, such as color, based on their category.

---

## Video Walkthrough

Here's a walkthrough of implemented features:

<img src='preview.gif' title='Video Walkthrough' width='' alt='Video Walkthrough' />

GIF created with **Kap** for macOS.

---

## Notes

Challenges encountered while building the app:
- Integrating images for the cards required understanding relative and absolute paths in React with Vite.
- Designing the flip animation and ensuring the card displayed correctly when flipped took debugging CSS transitions.
- Handling state across components and ensuring dynamic updates were seamless required additional practice with `useState` and props.

This project helped me better understand how to manage component-based design in React and how to dynamically update UI using hooks like `useState`. I also gained experience creating reusable components with props and styling interactive elements with CSS. Debugging animation issues and dynamic updates were valuable lessons in React's rendering model.

---

## License

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

--- 

