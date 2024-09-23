import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load() {
    const { data } = await supabase.from("Upcoming Events").select('*').gte('date', `${today}`).order('date',{ascending:true});
    const completed_events =  (await supabase.from("Upcoming Events").select('*').lt('date', `${today}`).order('date',{ascending:true})).data;
    console.log(completed_events);
    return {
      new_events: data ?? [],
      completed_events:completed_events ?? [],
    };
  }
