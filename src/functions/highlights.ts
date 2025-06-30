import { highlight } from "@/types/highlights.dot";

export async function getHighlights() : Promise<highlight[]>{
    try{
        const link = `https://surgetakehome.vercel.app/api/getreviews/${process.env.NEXT_PUBLIC_SECRET}`
        
        const response = await fetch(link,
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

export async function sendHighlights(title: string, loc: string, desc: string) {
    try{
        const body = {
            "title": title,
            "location": loc,
            "description": desc
        }

        const link = `https://surgetakehome.vercel.app/api/postreview/${process.env.NEXT_PUBLIC_SECRET}`;

        await fetch(link,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
                mode: 'no-cors'
            }
        );

        return true;
    }catch(err){
        console.error(err);
    }

    return false;
}