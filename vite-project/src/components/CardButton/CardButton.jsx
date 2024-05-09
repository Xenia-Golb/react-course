import './CardButton.css';
function Button({ children }) {

    return (
        <>
            <button className='card-button'>
                {children}
            </button>
        </>);
}

export default Button;