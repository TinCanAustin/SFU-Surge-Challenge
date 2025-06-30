'use client';

import Reuse_button from '../reuse_button/reuse_button';
import './style.css'

function Create_highlight(){
    return(
        <div id='form'>
            <div className="form-head">
                <h2>Create a highlight</h2>
                <a onClick={()=>{}}>x</a>
            </div>
            <form className="form-fields">
                <label htmlFor="name">Highlight name <span>*</span></label>
                <input type="text" name="name"/>
                <label htmlFor="loc">Location <span>*</span></label>
                <input type="text" name="loc"/>
                <label htmlFor="desc">Description <span>*</span></label>
                <textarea name="desc"></textarea>
            </form>
            <div className='form-buttons'>
                <div className='add_pad'><Reuse_button text="Cancel" type='cancel' onClick={()=>{}}/></div>
                <div className='add_pad'><Reuse_button text="Confrim" type='confirm' onClick={()=>{}}/></div>
            </div>
        </div>
    );
}

export default Create_highlight;