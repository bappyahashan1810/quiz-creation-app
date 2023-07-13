import React, { useContext } from 'react';
import { HandlerContex } from '../quizes/Quiz';
import { QuestionIdContex } from '../Question/Question';

const Option = ({ option }) => {
    const handlerSelectedAns = useContext(HandlerContex);
    const question = useContext(QuestionIdContex);
    return (
        <div className='bg-orange-200 p-2 justify-center rounded-xl text-center mt-3'>
            <li onClick={() => handlerSelectedAns(question, option)}>{option}</li>
        </div>
    );
};

export default Option;