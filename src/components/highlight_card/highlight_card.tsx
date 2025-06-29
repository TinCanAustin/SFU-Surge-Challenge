import { search } from "@/functions/searchImage";
import no_img_found from "../../../public/no_img_found.png"
import './style.css'

async function Highlight_card({name, location, desc}:{
    name: string,
    location: string,
    desc: string,
}){
    const data = await search(name);

    return(
        <div className="highlight_card">
            <img src={data ? data : no_img_found.src} alt="No Image Found" className="image_parm"/>
            <h3 className="higlight_title">{name}</h3>
            <p className="higlight_loc">{location}</p>
            <p className="higlight_desc">{desc}</p>
        </div>
    );
}

export default Highlight_card;