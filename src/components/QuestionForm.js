import { useState } from 'react'

function QuestionForm () {
    const[inputValue, setInputValue] = useState('posez votre question ici')
    const isInputError = inputValue.includes("f")

function checkValue(value) {
    if(!value.includes('f')) {
        setInputValue(value)
    }
}


    return (
            <div>
                {isInputError && (
                    <div>" π₯La lettre 'f' est interdite !" </div>
                )}
                <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={() => alert(inputValue)}>π¨ Alerte au click sur le bouton π</button>
            </div>
    )
} 





export default QuestionForm




