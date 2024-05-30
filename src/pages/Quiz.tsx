import { useState } from "react";

export default function QuizApp(props: any) {
    const [currInd, setCurrInd] = useState(0);
    const [isFinish, setFinished] = useState(false);
    const [score, setScore] = useState(0);

    const questions = [
        {
            question: "If Sally has 8 apples and gives 3 to her friend, how many apples does she have left?",
            options: ["2", "5", "3", "8"],
            correctAnswer: "5"
        },
        {
            question: "What is the sum of 9 and 6?",
            options: ["11", "14", "12", "15"],
            correctAnswer: "15"
        },
        {
            question: "If a box has 5 red balls, 3 blue balls, and 2 green balls, how many balls are there in total?",
            options: ["7", "8", "10", "12"],
            correctAnswer: "10"
        },
        {
            question: "If a pencil costs 4 rupees, how much will 5 pencils cost?",
            options: ["10 rupees", "15 rupees", "20 rupees", "25 rupees"],
            correctAnswer: "20 rupees",
        },
        {
            question: "If a rectangle has a length of 7 units and a width of 4 units, what is its area?",
            options: ["28 square units", "18 square units", "11 square units", "14 square units"],
            correctAnswer: "28 square units",
        }
    ];

    const answerChk = (selectedOption: string) => {
        if (selectedOption === questions[currInd].correctAnswer) {
            setScore(score + 1);
        }

        if (currInd + 1 < questions.length) {
            setCurrInd(currInd + 1);
        } else {
            setFinished(true);
        }
    };

    return (
        <div className="p-3 bg-secondary.bg-gradient">
            {isFinish ? (
                <div className="p-2 rounded mb-3 text-center">
                    <h3 className="">QUIZ RESULT</h3>
                    <p>Congratulations!</p>
                    <p>Your score is = {score} / {questions.length}</p>
                </div>
            ) : (
                <div className="p-2 rounded mb-3 text-center">
                    <h3 className="">MATH'S QUIZ</h3>
                    <p>Question.no {currInd + 1}/{questions.length}</p>
                    <h4>{questions[currInd].question}</h4>
                    <div className="d-flex flex-column m-5 pt-5 align-items-center">
                        {questions[currInd].options.map((option, i) => (
                            <button
                                className="btn btn-secondary w-100 mb-2"
                                key={i}
                                onClick={() => answerChk(option)}>
                                {option}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}