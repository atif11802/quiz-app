import React from "react";
import Countdown from "react-countdown";

type rendererProps = {
	hours: number;
	minutes: number;
	seconds: number;
	completed: boolean;
};

type TimerProps = {
	setSubmit: React.Dispatch<React.SetStateAction<boolean>>;
	submit: boolean;
};

const Timer = ({ submit, setSubmit }: TimerProps) => {
	const renderer = ({ hours, minutes, seconds, completed }: rendererProps) => {
		if (completed) {
			// Render a completed state
			setSubmit(!submit);
		} else {
			// Render a countdown
			return (
				<div className='flex justify-end items-center'>
					<span className='bg-zinc-900 w-24 h-24 text-white  rounded-lg flex flex-col text-3xl text-center justify-center items-center'>
						{hours}
						<span className='text-xs'>hours</span>
					</span>

					<span className='bg-zinc-900 ml-3 w-24 h-24 text-white  rounded-lg flex flex-col text-3xl text-center justify-center items-center'>
						{minutes}
						<span className='text-xs'>minutes</span>
					</span>

					<span className='bg-zinc-900 ml-3 w-24 h-24 text-white  rounded-lg flex flex-col text-3xl text-center justify-center items-center'>
						{seconds}
						<span className='text-xs'>seconds</span>
					</span>
				</div>
			);
		}
	};

	// 1770000

	return (
		<div>
			<Countdown date={Date.now() + 1770000} renderer={renderer} />
		</div>
	);
};

export default Timer;
