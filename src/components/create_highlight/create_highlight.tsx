'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import FormButton from '../buttons/formButton';
import './style.css'
import { sendHighlights } from '@/functions/highlights';

function Create_highlight(){
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [loc, setLocation] = useState('');
    const [desc, setDescription] = useState('');

    const handleRoute = () =>{
        router.back();
    }

    const submit = async ()=>{
        if (!title || !loc || !desc) {
            alert("Please fill out the fields.");
            return;
        }

        const result = await sendHighlights(title, loc, desc);
        if(result){
            router.back();
        }else{
            alert("FAIL");
        }
    }

    return(
        <div id='form'>
            <div className="form-head">
                <h2>Create a highlight</h2>
                <a onClick={handleRoute}>x</a>
            </div>
            <form className="form-fields">
                <label htmlFor="name">Highlight name <span>*</span></label>
                <input type="text" name="name" value={title} onChange={e => setTitle(e.target.value)}/>
                <label htmlFor="loc">Location <span>*</span></label>
                <input type="text" name="loc" value={loc} onChange={e => setLocation(e.target.value)}/>
                <label htmlFor="desc">Description <span>*</span></label>
                <textarea name="desc" value={desc} onChange={e => setDescription(e.target.value)}></textarea>
            </form>
            <div className='form-buttons'>
                <div className='add_pad'><FormButton text="Cancel" type='cancel' onClick={handleRoute}/></div>
                <div className='add_pad'><FormButton text="Confrim" type='confirm' onClick={submit}/></div>
            </div>
        </div>
    );
}

export default Create_highlight;