import React from "react";

export type IqNumberingProps = {
	quizzes: {
		question: string;
		a: string;
		b: string;
		c: string;
		d: string;
		correct: string;
		answered: boolean;
	}[];
	setCurrentQuiz: React.Dispatch<React.SetStateAction<number>>;
};

const IqNumbering = ({ quizzes, setCurrentQuiz }: IqNumberingProps) => {
	return (
		<div className='flex mt-7'>
			{quizzes.map((quiz, index) => {
				// console.log(quiz.answered);
				return (
					<div
						onClick={() => setCurrentQuiz(index)}
						key={index}
						className={`w-10 h-10 cursor-pointer ${
							quiz.answered === true ? "bg-green-500" : "bg-gray-500"
						}  rounded-full flex items-center justify-center flex-wrap mr-4`}
					>
						{index + 1}
					</div>
				);
			})}
		</div>
	);
};

export default IqNumbering;
