import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import QuizTopic from '../QuizTopic/QuizTopic';

const Home = () => {
    const loadQuizTopics = useLoaderData();
    const quizTopics = loadQuizTopics.data;
    console.log(quizTopics);
    return (
        <div className='mt-5'>
            <div className='border-slate-500 border-2	h-52 image-container'>

            </div>
            <div className='border-red-50 border-2 mt-5 md:grid grid-cols-4 gap-3 p-2 bg-yellow-100'>
                {
                    quizTopics.map(topics => <QuizTopic
                        key={topics.id}
                        topics={topics}
                    ></QuizTopic>)
                }

            </div>
        </div>
    );
};

export default Home;