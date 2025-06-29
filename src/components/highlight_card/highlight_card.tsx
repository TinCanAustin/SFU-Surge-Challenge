import no_img_found from "../../../public/no_img_found.png"
import './style.css'

function Highlight_card({name, location, desc, img_id}:{
    name: string,
    location: string,
    desc: string,
    img_id?: string
}){
    return(
        <div className="highlight_card">
            <img src={
                img_id ? img_id : no_img_found.src
            } alt="No Image Found" className="image_parm"/>
            <h3 className="higlight_title">{name}</h3>
            <p className="higlight_loc">{location}</p>
            <p className="higlight_desc">{desc}</p>
        </div>
    );
}

export default Highlight_card;