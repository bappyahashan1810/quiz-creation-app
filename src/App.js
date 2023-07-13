import logo from './logo.svg';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/main';
import Home from './Components/Home/Home';
import Quiz from './Components/quizes/Quiz';
import Blog from './Components/Blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',

      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => fetch('https://openapi.programming-hero.com/api/quiz'),
          element: <Home></Home>
        },
        {
          path: '/quiz/:quizid',
          loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizid}`),
          element: <Quiz></Quiz>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        }
      ]

    }

  ])
  return (
    <div className='m-4'>
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
