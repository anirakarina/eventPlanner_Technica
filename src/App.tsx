//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import Calendar from '../src/components/calendar.tsx';
import type {calendar} from '../src/types/calendar.ts';
import type {workshop} from '../src/types/workshop.ts';

function App() {
  //const [count, setCount] = useState(0)

  const Sat_workshops: workshop[] = [
    {
      className: "start-9 beginner",
      title: "React 101",
      time: "9AM-10AM",
      tags: ["Beginner", "Front-end dev", "Javascript", "CSS", "HTML", "React"],
      desc: "An introduction to creating apps with React and nodejs! No background in front end development necessary!"
    },
    {
      className: "start-15 startup",
      title: "Networking for business",
      time: "3PM-4PM",
      tags: ["Entrepreneurship", "Startup", "Networking"],
      desc: "Want to increase your connections? This workshop will have tips on expanding your outreach using LinkedIn and Handshake, as well as having a QnA time at the end from our Technica mentors!"
    }
  ];

  const Sun_workshops: workshop[] = [
    {
      className: "start-20 research",
      title: "Computer Science research",
      time: "8PM-9PM",
      tags: ["Computer Science", "Interdisciplinary", "Research"],
      desc: "This workshop will introduce you to the various fields of research within computer science and its interdisciplinary areas, as well as give advice as to how to find research opportunities!"
    },
    {
      className: "start-16 general",
      title: "Working with Django",
      time: "4PM-5PM",
      tags: ["Back-end dev", "Django", "Python"],
      desc: "An introduction to backend development using the python framework Django! No backend development experience required."
    }
  ];

  const Sat_calendar: calendar = {
    day: "Saturday",
    workshops: Sat_workshops
  }

  const Sun_calendar: calendar = {
    day: "Sunday",
    workshops: Sun_workshops
  };

  return (
    <>
      <div className="schedule">
        <div className="dayOne">
          <Calendar day={Sat_calendar.day} workshops={Sat_calendar.workshops}/>
        </div>

        <div className="dayTwo">
          <Calendar day={Sun_calendar.day} workshops={Sun_calendar.workshops}/>
        </div>
      </div>
    </>
  )
}

export default App;