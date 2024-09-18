import { PUBLIC_SUPABASE_ANON_KEY, PUBLIC_SUPABASE_URL } from "$env/static/public";
import { supabase } from "$lib/supabaseClient";
import { error } from "@sveltejs/kit";
export async function load() {
    const { data } = await supabase.from("cek-past-events").select('*').order('date',{ascending:false});
    console.log(data);
    return {
      past_events: data ?? [],
    };
  }
