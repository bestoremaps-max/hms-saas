import { createClient } from '@supabase/supabase-js'

// Client con service role - SOLO per operazioni server-side privilegiate
// NON esporre mai questo client lato browser
export function createAdminClient() {
    return createClient(
          process.env.NEXT_PUBLIC_SUPABASE_URL!,
          process.env.SUPABASE_SERVICE_ROLE_KEY!,
      {
              auth: {
                        autoRefreshToken: false,
                        persistSession: false,
              },
      }
        )
}
