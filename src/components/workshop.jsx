const Workshop = (props) => {
    const title = props.title;
    const time = props.time;
    const tags = props.tags;
    const desc = props.desc;
    return(
        <>
            <p>{title}</p>
            <p>{time}</p>
            <div>
                {tags.map((t) => (
                    <span>{t}</span>
                ))}
            </div>
            <br></br>
            <p>{desc}</p>
        </>
    );
}