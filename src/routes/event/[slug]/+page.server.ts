
import { supabase } from "$lib/supabaseClient";
export async function load({params}) {
    const {slug} = params;
    const { data } = await supabase.from("Upcoming Events").select('*').ilike('identifier', slug);
    console.log({data});
    return {
      organizer: data ?? [],
    };
  }
