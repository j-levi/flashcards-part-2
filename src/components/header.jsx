import React from "react"

const Header = (props) => {

    return (
        <div>

            <h1> James Levi Z23677798</h1>
            <h1> git command flashcards!</h1>
            <h2> hello everyone! Here we will be learning how to use common git commands in the terminal. There are {props.total} flashcards in this deck. 

            </h2>
        </div>
    )
}

export default Header;