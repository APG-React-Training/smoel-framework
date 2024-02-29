const Button = ({ text, handler }) => {

    return (
        <div className="Button"
             onClick={ () => handler() }>
            { text }
        </div>
    )

}

export default Button