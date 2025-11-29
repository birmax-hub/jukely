import { createClient } from "./server";
import { Database } from "./types";

type VenueProfile = Database["public"]["Tables"]["venue_profiles"]["Row"];

/**
 * Get the current venue profile for the authenticated user
 * Returns null if user is not authenticated or profile doesn't exist
 */
export async function getVenueProfile(): Promise<VenueProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return null;
  }

  const { data, error } = await supabase
    .from("venue_profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  if (error || !data) {
    return null;
  }

  return data;
}

/**
 * Create a venue profile for the authenticated user
 * Should be called after user signup
 */
export async function createVenueProfile(
  venueName: string = "My Venue"
): Promise<VenueProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("User must be authenticated to create a venue profile");
  }

  // Call the RPC function
  const { data, error } = await supabase.rpc("create_venue_profile", {
    uid: user.id,
    name: venueName,
  });

  if (error) {
    throw new Error(`Failed to create venue profile: ${error.message}`);
  }

  // RPC returns the venue profile directly
  return data as VenueProfile | null;
}

/**
 * Update venue profile
 * Only allows updating the authenticated user's own profile
 */
export async function updateVenueProfile(
  updates: Partial<Omit<VenueProfile, "id" | "created_at" | "updated_at">>
): Promise<VenueProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("User must be authenticated to update venue profile");
  }

  const { data, error } = await supabase
    .from("venue_profiles")
    .update(updates)
    .eq("id", user.id)
    .select()
    .single();

  if (error) {
    throw new Error(`Failed to update venue profile: ${error.message}`);
  }

  return data;
}

/**
 * Update Spotify connection status and tokens
 */
export async function updateSpotifyConnection(
  connected: boolean,
  accessToken?: string,
  refreshToken?: string,
  expiresAt?: Date
): Promise<VenueProfile | null> {
  const supabase = await createClient();

  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    throw new Error("User must be authenticated to update Spotify connection");
  }

  const updates: Partial<VenueProfile> = {
    spotify_connected: connected,
  };

  if (accessToken) {
    updates.spotify_access_token = accessToken;
  }

  if (refreshToken) {
    updates.spotify_refresh_token = refreshToken;
  }

  if (expiresAt) {
    updates.spotify_token_expires = expiresAt.toISOString();
  }

  // If disconnecting, clear tokens
  if (!connected) {
    updates.spotify_access_token = null;
    updates.spotify_refresh_token = null;
    updates.spotify_token_expires = null;
  }

  return updateVenueProfile(updates);
}

