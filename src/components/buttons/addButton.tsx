'use client';

import { useRouter } from 'next/navigation';
import addIcon from '../../../public/add_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg'
import './style.css'

function AddButton(){
    const router = useRouter();

    const handleRoute = () =>{
        router.push("/create");
    }

    return(
        <button className="btn add" onClick={handleRoute}>
            <p className='btn-text'>Create</p>
            <img src={addIcon.src} alt="add" className='btn-icon'/>
        </button>
    );
}

export default AddButton;