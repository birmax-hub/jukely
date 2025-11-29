-- Create venue_profiles table
-- Maps 1:1 to auth.users.id
CREATE TABLE IF NOT EXISTS public.venue_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  venue_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMPTZ DEFAULT NOW() NOT NULL,
  spotify_connected BOOLEAN DEFAULT FALSE NOT NULL,
  spotify_refresh_token TEXT,
  spotify_access_token TEXT,
  spotify_token_expires TIMESTAMPTZ
);

-- Create index on venue_name for faster lookups
CREATE INDEX IF NOT EXISTS idx_venue_profiles_venue_name ON public.venue_profiles(venue_name);

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_venue_profiles_updated_at
  BEFORE UPDATE ON public.venue_profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE public.venue_profiles ENABLE ROW LEVEL SECURITY;

-- Policy: Enable read/write access for authenticated user to their own profile
CREATE POLICY "Users can view their own venue profile"
  ON public.venue_profiles
  FOR SELECT
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own venue profile"
  ON public.venue_profiles
  FOR UPDATE
  USING (auth.uid() = id);

-- Policy: Allow authenticated users to create their own profile via RPC
-- (The RPC function will handle the insert with proper security)
CREATE POLICY "Users can insert their own venue profile"
  ON public.venue_profiles
  FOR INSERT
  WITH CHECK (auth.uid() = id);

-- Create RPC function to create venue profile
-- This function should be called after user signup
CREATE OR REPLACE FUNCTION public.create_venue_profile(uid UUID, name TEXT DEFAULT 'My Venue')
RETURNS public.venue_profiles
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
  new_profile public.venue_profiles;
BEGIN
  -- Verify that the caller is authenticated and matches the uid
  IF auth.uid() IS NULL THEN
    RAISE EXCEPTION 'User must be authenticated';
  END IF;

  IF auth.uid() != uid THEN
    RAISE EXCEPTION 'User can only create their own profile';
  END IF;

  -- Insert the new venue profile
  INSERT INTO public.venue_profiles (id, venue_name)
  VALUES (uid, name)
  RETURNING * INTO new_profile;

  RETURN new_profile;
END;
$$;

-- Grant execute permission on RPC function to authenticated users
GRANT EXECUTE ON FUNCTION public.create_venue_profile(UUID, TEXT) TO authenticated;

