import { highlight } from "@/types/highlights.dot";

export async function getHighlights() : Promise<highlight[]>{
    try{
        const response = await fetch(`https://surgetakehome.vercel.app/api/getreviews/${process.env.SECRET}`,
            {
                method: 'GET'
            }
        );

        const body = await response.json();
        
        return body;
    }catch (err){
        console.error(err);
    }

    return [];
}