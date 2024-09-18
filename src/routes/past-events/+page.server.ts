import { supabase } from "$lib/supabaseClient";
export async function load() {
    const { data } = await supabase.from("cek-past-events").select('*');
    console.log(data);
    return {
      past_events: data ?? [],
    };
  }