# Supabase Setup for Jukely

This directory contains database migrations for the Jukely venue authentication system.

## Migration Files

- `20250101000000_create_venue_profiles.sql` - Creates the `venue_profiles` table, RLS policies, and RPC functions for venue management.

## Running Migrations

### Using Supabase CLI (Recommended)

1. Install Supabase CLI: https://supabase.com/docs/guides/cli

2. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

3. Run migrations:
   ```bash
   supabase db push
   ```

### Using Supabase Dashboard

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `20250101000000_create_venue_profiles.sql`
4. Execute the SQL

## Environment Variables

Add these to your `.env.local` file:

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-project-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## Database Schema

### `venue_profiles` Table

- `id` (UUID, PK) - References `auth.users.id`
- `venue_name` (TEXT) - Name of the venue
- `created_at` (TIMESTAMPTZ) - Auto-set on creation
- `updated_at` (TIMESTAMPTZ) - Auto-updated on changes
- `spotify_connected` (BOOLEAN) - Spotify connection status
- `spotify_refresh_token` (TEXT, nullable) - Spotify refresh token
- `spotify_access_token` (TEXT, nullable) - Spotify access token
- `spotify_token_expires` (TIMESTAMPTZ, nullable) - Token expiration

## Row Level Security (RLS)

- Users can only SELECT/UPDATE their own venue profile
- Users can INSERT their own profile via the `create_venue_profile` RPC function

## RPC Functions

### `create_venue_profile(uid UUID, name TEXT)`

Creates a venue profile for the authenticated user. Should be called after user signup.

**Security**: Only authenticated users can call this function, and they can only create a profile for themselves.

## Usage in Next.js

See `/lib/supabase/venue.ts` for helper functions:

- `getVenueProfile()` - Get current user's venue profile
- `createVenueProfile(name)` - Create a venue profile after signup
- `updateVenueProfile(updates)` - Update venue profile
- `updateSpotifyConnection(...)` - Update Spotify connection status

