export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      campaign: {
        Row: {
          beneficiary: string | null
          created_at: string | null
          current_amount: number | null
          description: string | null
          duration: string | null
          goal: number | null
          id: number
          image_url: string | null
          title: string | null
        }
        Insert: {
          beneficiary?: string | null
          created_at?: string | null
          current_amount?: number | null
          description?: string | null
          duration?: string | null
          goal?: number | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
        Update: {
          beneficiary?: string | null
          created_at?: string | null
          current_amount?: number | null
          description?: string | null
          duration?: string | null
          goal?: number | null
          id?: number
          image_url?: string | null
          title?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
