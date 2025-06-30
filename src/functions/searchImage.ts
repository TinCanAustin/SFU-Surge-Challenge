import { search_tp } from "@/types/search.dto";

export async function search(img_src : string){
    try{
        const response = await fetch("https://www.googleapis.com/customsearch/v1?" + new URLSearchParams({
            key: process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
            cx: process.env.NEXT_PUBLIC_SEARCH_KEY,
            q: img_src,
            searchType: 'image',
            num: '5'
        }).toString(), {
            method: 'GET'
        });

        const body = await response.json();
        const items = body["items"] as search_tp[];
        
        if(items){
           for(const e of items){
            if(e.image.height >= 250 && e.image.width >= 400){
                return e.link;
            }
        }     
        }
    } catch (err){
        console.error(err);
    }

    return null;
}