import { createBrowserClient } from '@supabase/ssr'
import {createFetch} from "@/app/lib/cache";

export function createClient() {
  return createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        global: {
          fetch: createFetch({
            // cache: "no-store"
            next: {
              revalidate: 60*60,
            }
          })
        }
      }
  )
}
