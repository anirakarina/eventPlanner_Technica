import Workshop from './workshop.tsx';
import type {calendar} from '../types/calendar.ts';
import type {workshop} from '../types/workshop.ts';
import '../App.css';

const Calendar = (props: calendar) =>{
    const day = props.day;
    const workshops = props.workshops;
    return(
        <>
            {/*These are the lines on the calendar that indicate the time*/}
            <div className="calendar">
                <h1>{day}</h1>
                <div className="timeline">
                    <div className="timeMarker start-8 end-9">8 AM</div>
                    <div className="timeMarker start-9 end-10">9 AM</div>
                    <div className="timeMarker start-10 end-11">10 AM</div>
                    <div className="timeMarker start-11 end-12">11 AM</div>
                    <div className="timeMarker start-12 end-13">12 PM</div>
                    <div className="timeMarker start-13 end-14">1 PM</div>
                    <div className="timeMarker start-14 end-15">2 PM</div>
                    <div className="timeMarker start-15 end-16">3 PM</div>
                    <div className="timeMarker start-16 end-17">4 PM</div>
                    <div className="timeMarker start-17 end-18">5 PM</div>
                    <div className="timeMarker start-18 end-19">6 PM</div>
                    <div className="timeMarker start-19 end-20">7 PM</div>
                    <div className="timeMarker start-20 end-21">8 PM</div>
                    <div className="timeMarker start-21 end-22">9 PM</div>
                    <div className="timeMarker start-22 end-23">10 PM</div>
                    <div className="timeMarker start-23 end-24">11 PM</div>
                    <div className="timeMarker start-24">12 AM</div>
                    {workshops.map((wshp: workshop) => {
                        return <Workshop className={wshp.className} title={wshp.title} time={wshp.time} tags={wshp.tags} desc={wshp.desc}/>
                    })}
                </div>
            </div>
        </>
    );
}

export default Calendar;