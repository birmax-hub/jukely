export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      venue_profiles: {
        Row: {
          id: string;
          venue_name: string;
          created_at: string;
          updated_at: string;
          spotify_connected: boolean;
          spotify_refresh_token: string | null;
          spotify_access_token: string | null;
          spotify_token_expires: string | null;
        };
        Insert: {
          id: string;
          venue_name: string;
          created_at?: string;
          updated_at?: string;
          spotify_connected?: boolean;
          spotify_refresh_token?: string | null;
          spotify_access_token?: string | null;
          spotify_token_expires?: string | null;
        };
        Update: {
          id?: string;
          venue_name?: string;
          created_at?: string;
          updated_at?: string;
          spotify_connected?: boolean;
          spotify_refresh_token?: string | null;
          spotify_access_token?: string | null;
          spotify_token_expires?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "venue_profiles_id_fkey";
            columns: ["id"];
            referencedRelation: "users";
            referencedColumns: ["id"];
          }
        ];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      create_venue_profile: {
        Args: {
          uid: string;
          name?: string;
        };
        Returns: {
          id: string;
          venue_name: string;
          created_at: string;
          updated_at: string;
          spotify_connected: boolean;
          spotify_refresh_token: string | null;
          spotify_access_token: string | null;
          spotify_token_expires: string | null;
        };
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}

