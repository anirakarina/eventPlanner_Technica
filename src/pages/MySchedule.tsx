import '../App.css'
import Navbar from '../components/navbar'
import Calendar from '../components/calendar.tsx';
import { Sat_calendar } from '../demoData.tsx';
import { Sun_calendar } from '../demoData.tsx';

const MySchedule = () => {

  return (
    <>
      <Navbar />
      <div className="schedule">
        <div className='dayOne'>
          <Calendar day={Sat_calendar.day} workshops={Sat_calendar.workshops}/>
        </div>

        <div className="dayTwo">
          <Calendar day={Sun_calendar.day} workshops={Sun_calendar.workshops}/>
        </div>
      </div>
    </>
  )
}

export default MySchedule