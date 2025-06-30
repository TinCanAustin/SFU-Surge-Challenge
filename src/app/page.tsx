import AddButton from "@/components/buttons/addButton";
import Header from "@/components/header/header";
import Highlight_card from "@/components/highlight_card/highlight_card";
import { getHighlights } from "@/functions/highlights";

export default async function Home(){
    const highlights = await getHighlights();

    return(
        <>
            <Header/>
            <div className="grid-display">
                {highlights.reverse().map(item => (
                    <div className="card" key={item.id}><Highlight_card name={item.title} location={item.location} desc={item.description}/></div>
                ))}
            </div>
            <div className="add-btn-trans"><AddButton/></div>
        </>
    );
}