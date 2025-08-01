import Workshop from './workshop.js';

const Calendar = (props) =>{
    const day = props.day;
    const workshops = props.workshops;
    return(
        <>
            {/*These are the lines on the calendar that indicate the time*/}
            <div>8 AM</div>
            <div>9 AM</div>
            <div>10 AM</div>
            <div>11 AM</div>
            <div>12 PM</div>
            <div>1 PM</div>
            <div>2 PM</div>
            <div>3 PM</div>
            <div>4 PM</div>
            <div>5 PM</div>
            <div>6 PM</div>
            <div>7 PM</div>
            <div>8 PM</div>
            <div>9 PM</div>
            <div>10 PM</div>
            <div>11 PM</div>
            <div>12 AM</div>
            <div>
                <h2>{day}</h2>
                <div>{/*The map will list all of the workshop components in the day*/}
                {workshops.map((wshp)=>(
                    <div>{wshp}</div>
                ))}
            </div>
            </div>
        </>
    );
}