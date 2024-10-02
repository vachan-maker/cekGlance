
import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load({params}) {
    const {slug} = params;
    const { data } = await supabase.from("Organizers").select('*').eq('slug', slug);
    // const completed_events =  (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:true})).data;
    console.log({data});
    return {
      organizer: data ?? [],
    //   completed_events:completed_events ?? [],
    };
  }
