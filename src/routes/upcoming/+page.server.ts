import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
export async function load() {
    const { data } = await supabase.from("Upcoming Events").select('*').gte('date', `${today}`).order('date',{ascending:true});
    const completed_events =  (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:true})).data;
    return {
      new_events: data ?? [],
      completed_events:completed_events ?? [],
    };
  }
