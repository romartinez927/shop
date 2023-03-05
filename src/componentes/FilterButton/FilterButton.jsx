export default function FilterButton(props) {
    return (
        <div className="group-type" >
            <input type="checkbox" onClick={props.onClick} name={props.name} id={props.name} />
            <label htmlFor={props.name}>{props.value}</label>
        </div>
    )
}