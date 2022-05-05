import './Button.css';
const Button = (props) => {

    return (
        <button
            className="btn"
            id={"btn-"+props.color}
            title={props.title}
            onClick={props.onClick}
        >
            {props.title}
        </button>
    )
}
export default Button;