import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Calendar from '/components/calendar.jsx';
import Workshop from '/components/workshop.jsx';

function App() {
  //const [count, setCount] = useState(0)
  const Sat_workshops = [
    {
      title: "React 101",
      time: "9AM-10AM",
      tags: ["beginner", "front-end dev", "javascript", "CSS", "HTML", "React"],
      desc: "An introduction to creating apps with React and nodejs! No background in front end development necessary!"
    },
    {
      title: "Networking for business",
      time: "3PM-4PM",
      tags: ["Entrepreneurship", "Startup", "Networking"],
      desc: "Want to increase your connections? This workshop will have tips on expanding your outreach using LinkedIn and Handshake, as well as having a QnA time at the end from our Technica mentors!"
    }
  ];

  const Sun_workshops = [
    {
      title: "Computer Science research",
      time: "8PM-9PM",
      tags: ["Computer Science", "Interdisciplinary", "Research"],
      desc: "This workshop will introduce you to the various fields of research within computer science and its interdisciplinary areas, as well as give advice as to how to find research opportunities!"
    },
    {
      title: "Working with Django",
      time: "4PM-5PM",
      tags: ["Back-end dev", "beginner", "Django", "Python"],
      desc: "An introduction to backend development using the python framework Django! No backend development experience required."
    }
  ];

  const Sat_calendar = {
    day: "Saturday"
  };

  const Sun_calendar = {
    day: "Sunday"
  };

  return (
    <>
      
      
    </>
  )
}

export default App

{/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}