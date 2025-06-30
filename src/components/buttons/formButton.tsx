'use client';
import './style.css'

function FormButton({text, type, onClick}:{
    text: string,
    type: string,
    onClick: ()=>void
}){
    return(
        <button className={`btn ${type}`} onClick={onClick}>
            <p className='btn-text'>{text}</p>
        </button>
    );
}

export default FormButton;