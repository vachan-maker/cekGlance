import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load() {
    const { data } = await supabase.from("Upcoming Events").select('*').order('date',{ascending:true});
    const past_events = (await supabase.from("cek-past-events").select('*').order('date',{ascending:false})).data;
    console.log(data);
    return {
      new_events: data ?? [],
      past_events:past_events ?? [],
    };
  }
