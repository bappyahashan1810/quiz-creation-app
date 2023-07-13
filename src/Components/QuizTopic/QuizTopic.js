import React from 'react';
import { Link } from 'react-router-dom';

const QuizTopic = ({ topics }) => {
    const { id, logo, name } = topics;
    console.log(topics);
    return (
        <div className='border-2 border-neutral-500	rounded-lg items-center justify-center flex flex-col'>
            <img className='rounded-full' src={logo} alt="" />
            <Link to={`/quiz/${id}`}><button className='bg-orange-600 rounded-lg p-2 w-32 text-white mt-4'>{name}</button></Link>
        </div>
    );
};

export default QuizTopic;