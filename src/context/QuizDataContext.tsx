import React, { createContext } from 'react'



const QuizContext = createContext<null>(null)


const QuizDataContext = () => {

    const [quizData, setQuizData] = React.useState([])

    


  return (
    <div>QuizDataContext</div>
  )
}

export default QuizDataContext