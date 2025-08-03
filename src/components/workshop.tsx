import type {workshop} from '../types/workshop.ts';
import '../App.css';

const Workshop = (props: workshop) => {
    const title = props.title;
    const time = props.time;
    const tags = props.tags;
    const desc = props.desc;
    return(
        <>
            <div className={`event ${props.className}`}>
                <h2>{title}</h2>
                <input className="flag" type="button" value="Flag Event"></input>
                <input className="remind" type="button" value="Remind Me"></input>
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