export const ssr = false;
import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load() {
    const { data } = (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:false}));
    const upcoming_events = (await supabase.from("Upcoming Events").select('*').gte('date', `${today}`).order('date',{ascending:true})).data;
    const past_events = (await supabase.from("cek-past-events").select('*').order('date',{ascending:false})).data;
    console.log(data);
    return {
      archive: data ?? [],
      past_events:past_events ?? [],
      upcoming_events: upcoming_events ?? [],
    };
  }
