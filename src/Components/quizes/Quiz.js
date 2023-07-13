import React, { createContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


export const HandlerContex = createContext(undefined);

const Quiz = () => {
    const quizes = useLoaderData();
    const questions = quizes.data.questions;
    const [correct, setCorrect] = useState(0);
    const [wrong, setWrong] = useState(0);
    // const { id } = questions;
    // console.log(questions);

    const handlerSelectedAns = (question, ans) => {

        if (question.correctAnswer === ans) {
            setCorrect(correct + 1);
        }
        else {
            setWrong(wrong + 1);
        }


    }
    console.log(correct);


    return (
        <HandlerContex.Provider value={handlerSelectedAns}>
            <div className='md:grid grid-cols-2 gap-4 mt-5 grid justify-items-stretch'>
                <div className='border-0'>
                    {
                        questions.map(question => <Question
                            key={question.id}
                            question={question}
                        ></Question>)
                    }

                </div>
                <div className='border-0 justify-self-end p-4 mt-4 bg-neutral-500'>
                    <div className='sticky top-0'>
                        <div className='bg-green-500 p-4 rounded-1 rounded-lg text-white font-bold m-4'>
                            <h4>Total Correct Answer: {correct}</h4>
                        </div>
                        <div className='bg-red-500 p-4 rounded-1 rounded-lg text-white font-bold m-4 '>

                            <h4>Total Wrong Answer: {wrong}</h4>
                        </div>
                    </div>

                </div>
            </div>

        </HandlerContex.Provider>
    );
};

export default Quiz;