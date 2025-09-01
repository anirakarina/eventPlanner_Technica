import type {workshop} from '../types/workshop.ts';
import '../App.css';
import {db} from "../firebase.ts";
import {addWorkshopToUser} from '../services/auth.ts';

const Workshop = (props: workshop) => {
    const title = props.title;
    const time = props.time;
    const tags = props.tags;
    const desc = props.desc;
    const wshpRef = props.wshpRef;
    const onAddWorkshopClick = () => {
        console.log('add workshop', props);
        addWorkshopToUser(wshpRef);
    }

    return(
        <>
            <div className={`event ${props.className}`}>
                <h2>{title}</h2>
                <a className="flag" onClick={onAddWorkshopClick}>
                    <img src="src\assets\Technica_Flag_Unselected.svg"></img>
                </a>
                <a className="remind">
                    <img src="src\assets\Technica_Remind_Unselected.svg"></img>
                </a>
                <p>{time}</p>
                <div>
                    {tags.map((t: string) => (
                        <span>{t + ", "}</span>
                    ))}
                </div>
                <p>{desc}</p>
            </div>
        </>
    );
}

export default Workshop;