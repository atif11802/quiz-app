import React from "react";
import { quizzes } from "../../data.js";
import IqNumbering from "../../components/IqNumbering";
import Quiz from "../../components/Quiz";
import CountDownTimer from "../../components/Timer";
import Result from "../../components/Result";

const Iq = () => {
	const [currentQuiz, setCurrentQuiz] = React.useState(0);
	const [quizQuestion, setQuizQuestion] = React.useState(
		quizzes.map((quiz) => ({
			...quiz,
			answered: false,
			selected: "",
		}))
	);

	const [submit, setSubmit] = React.useState(false);

	const [score, setScore] = React.useState(0);

	return (
		<div className='container mx-auto p-10'>
			{submit !== true ? (
				<>
					<CountDownTimer setSubmit={setSubmit} submit={submit} />
					<IqNumbering quizzes={quizQuestion} setCurrentQuiz={setCurrentQuiz} />
					<Quiz
						quizzes={quizQuestion}
						currentQuiz={currentQuiz}
						setCurrentQuiz={setCurrentQuiz}
						setQuizQuestion={setQuizQuestion}
						score={score}
						setScore={setScore}
						setSubmit={setSubmit}
						submit={submit}
					/>
				</>
			) : (
				<Result score={score} />
			)}
		</div>
	);
};

export default Iq;
