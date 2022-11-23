import React from "react";
import Swal from "sweetalert2";

type QuizProps = {
	quizzes: {
		question: string;
		a: string;
		b: string;
		c: string;
		d: string;
		correct: string;
		answered: boolean;
		selected: string;
	}[];
	currentQuiz: number;
	setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
	setQuizQuestion: React.Dispatch<
		React.SetStateAction<
			{
				answered: boolean;
				question: string;
				a: string;
				b: string;
				c: string;
				d: string;
				correct: string;
				selected: string;
			}[]
		>
	>;
	score: number;
	setScore: React.Dispatch<React.SetStateAction<number>>;
	setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
	submit: boolean;
};

const Quiz = ({
	quizzes,
	currentQuiz,
	setCurrentQuiz,
	setQuizQuestion,
	score,
	setScore,
	submit,
	setSubmit,
}: QuizProps) => {
	const prev = () => {
		if (currentQuiz > 0) {
			setCurrentQuiz(currentQuiz - 1);
		}
	};

	const next = () => {
		if (currentQuiz < quizzes.length - 1) {
			setCurrentQuiz(currentQuiz + 1);
		}
	};

	const reset = () => {
		setQuizQuestion(
			quizzes.map((quiz) =>
				quiz === quizzes[currentQuiz]
					? { ...quiz, answered: false, selected: "" }
					: quiz
			)
		);
	};

	const handleSubmit = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, submit it!",
		}).then((result) => {
			if (result.isConfirmed) {
				setSubmit(!submit);
			}
		});
	};

	const handleAnswer = (ans: string) => {
		setQuizQuestion(
			quizzes.map((quiz) =>
				quiz === quizzes[currentQuiz]
					? { ...quiz, answered: true, selected: ans }
					: quiz
			)
		);

		if (ans === quizzes[currentQuiz].correct) {
			setScore(score + 1);
		}
	};

	return (
		<div className='mt-6'>
			<h1 className='text-2xl font-bold'>{quizzes[currentQuiz].question}</h1>
			<div className=' grid grid-rows-2 grid-flow-col mt-4'>
				<div
					onClick={() => handleAnswer("a")}
					className={`${
						quizzes[currentQuiz].selected === "a"
							? "bg-green-700   "
							: "bg-blue-600"
					} text-white p-2 rounded-md mr-2 mt-2`}
				>
					{quizzes[currentQuiz].a}
				</div>
				<div
					onClick={() => handleAnswer("b")}
					className={`${
						quizzes[currentQuiz].selected === "b"
							? "bg-green-700  "
							: "bg-blue-600"
					} text-white p-2 rounded-md mr-2 mt-2`}
				>
					{quizzes[currentQuiz].b}
				</div>
				<div
					onClick={() => handleAnswer("c")}
					className={`${
						quizzes[currentQuiz].selected === "c"
							? "bg-green-700  "
							: "bg-blue-600"
					} text-white p-2 rounded-md mr-2 mt-2`}
				>
					{quizzes[currentQuiz].c}
				</div>
				<div
					onClick={() => handleAnswer("d")}
					className={`${
						quizzes[currentQuiz].selected === "d"
							? "bg-green-700"
							: "bg-blue-600"
					} text-white p-2 rounded-md mr-2 mt-2`}
				>
					{quizzes[currentQuiz].d}
				</div>
			</div>
			<div className='flex mt-5 justify-between'>
				<button
					onClick={prev}
					className='bg-blue-500 text-white p-2 rounded-md mr-2'
				>
					Previous
				</button>
				<button
					onClick={reset}
					className='bg-blue-500 text-white p-2 rounded-md mr-2'
				>
					reset only this Answer?
				</button>

				<button
					onClick={next}
					className='bg-blue-500 text-white p-2 rounded-md mr-2'
				>
					Next
				</button>
			</div>
			<div className='flex justify-center items-center mt-6'>
				<button
					onClick={handleSubmit}
					className='bg-red-500 text-white p-2 rounded-md mr-2'
				>
					submit
				</button>
			</div>
		</div>
	);
};

export default Quiz;
