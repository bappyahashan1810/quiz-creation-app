import React, { createContext } from 'react';
import Option from '../Option/Option';

export const QuestionIdContex = createContext(undefined);
const Question = ({ question }) => {
    const { options, id } = question;




    return (
        <QuestionIdContex.Provider value={question}>
            <div>
                <ul>
                    <div className='bg-teal-300	 mt-5 border-1 border-sky-500 p-2 rounded-lg'>
                        <li>{question.question}</li>
                        <div className='border-1 border-red-600 grid grid-cols-2 gap-3'>
                            {
                                options.map(option => <Option
                                    // key={id}
                                    option={option}
                                ></Option>)
                            }
                        </div>
                    </div>
                </ul>
            </div>
        </QuestionIdContex.Provider>
    );
};

export default Question;