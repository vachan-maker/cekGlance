import { supabase } from "$lib/supabaseClient";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load() {
    const { data } = (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:false}).limit(6));
    const upcoming_events = ((await supabase.from("Upcoming Events").select('*').gte('date', `${today}`).order('date',{ascending:true}))).data;
    const organizers = (await supabase.from("Organizers").select('*')).data;
    console.log(data);
    return {
      archive: data ?? [],
      upcoming_events: upcoming_events ?? [],
      organizers:organizers ?? []
    };
  }
