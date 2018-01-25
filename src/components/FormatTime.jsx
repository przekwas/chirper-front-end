//Just a component to format the date which are my keys for the list items
const FormatTime = (props) => {
    let d = new Date(props.time);
    return `${d}`
}

export default FormatTime;