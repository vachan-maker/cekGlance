
import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load({params}) {
    const {slug} = params;
    console.log({slug});
    const { data } = await supabase.from("Organizers").select('*').ilike('slug', slug);
    const events =  (await supabase.from("Upcoming Events").select('*').contains('tags', [slug]).order('date',{ascending:true})).data;
    console.log({data});
    console.log(events);
    return {
      organizer: data ?? [],
      events:events ?? [],
    };
  }
