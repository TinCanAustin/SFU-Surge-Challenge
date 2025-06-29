'use client';
import addIcon from '../../../public/add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import './style.css'

function Reuse_button({text, type, onClick}:{
    text: string,
    type: string,
    onClick: ()=>void
}){
    return(
        <button className={`btn ${type}`} onClick={onClick}>
            <p className='btn-text'>{text}</p>
            {
                (type == 'add') ? <img src={addIcon.src} alt="add" className='btn-icon'/> : <></>
            }
        </button>
    );
}

export default Reuse_button;