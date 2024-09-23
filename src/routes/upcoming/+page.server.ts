import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";
let today:string = new Date().toISOString().slice(0,10);
console.log(today);
export async function load() {
    const { data } = await supabase.from("Upcoming Events").select('*').gte('date', `>= ${today}`).order('date',{ascending:true});
    console.log(data);
    return {
      new_events: data ?? [],
    };
  }
