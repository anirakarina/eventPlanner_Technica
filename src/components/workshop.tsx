import type {workshop} from '../App.tsx';

const Workshop = (props: workshop) => {
    const title = props.title;
    const time = props.time;
    const tags = props.tags;
    const desc = props.desc;
    return(
        <>
            <p>{title}</p>
            <p>{time}</p>
            <div>
                {tags.map((t: string) => (
                    <span>{t}</span>
                ))}
            </div>
            <br></br>
            <p>{desc}</p>
        </>
    );
}

export default Workshop;