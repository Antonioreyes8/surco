/**
 * @file supabaseClient.js
 * @description Supabase database and storage client configuration
 *
 * PURPOSE:
 * Initializes and exports the Supabase client that handles:
 * - Authentication (user login/signup)
 * - Database queries (CRUD operations)
 * - File storage (images, videos, documents)
 * - Real-time subscriptions
 *
 * SECURITY:
 * - API credentials are loaded from environment variables (.env file)
 * - The anonymous key is safe to expose in client-side code
 * - Never commit .env file to version control
 * - See .env.example for setup instructions
 *
 * USAGE:
 * import { supabase } from './supabaseClient';
 * const { data, error } = await supabase.from('table_name').select();
 */

import { createClient } from "@supabase/supabase-js";

/**
 * Supabase project URL
 * @type {string}
 */
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;

/**
 * Supabase anonymous public key
 * This key is safe to expose in client-side code
 * It's restricted to specific operations via Row Level Security (RLS) policies
 * @type {string}
 */
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;

/**
 * Initialize and export Supabase client
 * Available globally for database and storage operations
 *
 * @type {SupabaseClient}
 * @example
 * import { supabase } from './supabaseClient';
 *
 * // Fetch data
 * const { data, error } = await supabase.from('users').select();
 *
 * // Upload file
 * const { data, error } = await supabase.storage
 *   .from('photos')
 *   .upload('folder/image.jpg', file);
 */
export const supabase = createClient(supabaseUrl, supabaseKey);
