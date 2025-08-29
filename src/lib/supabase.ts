import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

export type Database = {
  public: {
    Tables: {
      posts: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          featured_image: string | null
          status: 'draft' | 'published' | 'archived'
          author_id: string
          category_id: string | null
          tags: string[]
          created_at: string
          updated_at: string
          published_at: string | null
          slug: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          featured_image?: string | null
          status?: 'draft' | 'published' | 'archived'
          author_id: string
          category_id?: string | null
          tags?: string[]
          created_at?: string
          updated_at?: string
          published_at?: string | null
          slug: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          featured_image?: string | null
          status?: 'draft' | 'published' | 'archived'
          author_id?: string
          category_id?: string | null
          tags?: string[]
          created_at?: string
          updated_at?: string
          published_at?: string | null
          slug?: string
        }
      }
      categories: {
        Row: {
          id: string
          name: string
          slug: string
          description: string | null
          created_at: string
        }
        Insert: {
          id?: string
          name: string
          slug: string
          description?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          name?: string
          slug?: string
          description?: string | null
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          avatar_url: string | null
          role: 'admin' | 'editor' | 'author'
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'editor' | 'author'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          avatar_url?: string | null
          role?: 'admin' | 'editor' | 'author'
          created_at?: string
          updated_at?: string
        }
      }
    }
  }
}