import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
export async function load() {
    const completed_events =  (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:false})).data;
    return {
      completed_events:completed_events ?? [],
    };
  }
