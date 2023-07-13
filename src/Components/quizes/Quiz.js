import React, { createContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Question from '../Question/Question';


export const HandlerContex = createContext(undefined);

const Quiz = () => {
    const quizes = useLoaderData();
    const questions = quizes.data.questions;
    // const { id } = questions;
    // console.log(questions);

    const handlerSelectedAns = (id, ans) => {
        console.log(id, ans);

    }

    return (
        <HandlerContex.Provider value={handlerSelectedAns}>
            <div className='md:grid grid-cols-2 gap-4 mt-5 grid justify-items-stretch'>
                <div className='border-2 border-red-500'>
                    {
                        questions.map(question => <Question
                            key={question.id}
                            question={question}
                        ></Question>)
                    }

                </div>
                <div className='border-2 border-red-500 justify-self-end'></div>
            </div>

        </HandlerContex.Provider>
    );
};

export default Quiz;