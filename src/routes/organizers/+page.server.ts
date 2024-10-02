import { supabase } from "$lib/supabaseClient";
export async function load() {
    const { data } = await supabase.from("Organizers").select('*');
    console.log({data});
    return {
      organizer: data ?? [],
    };
  }
