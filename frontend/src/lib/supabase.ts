import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL || '';
const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Database types (same as backend)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          phone?: string;
          role: 'admin' | 'homeowner' | 'tenant' | 'vendor';
          is_active: boolean;
          email_verified: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      properties: {
        Row: {
          id: string;
          email: string;
          first_name: string;
          last_name: string;
          phone?: string;
          role: 'admin' | 'homeowner' | 'tenant' | 'vendor';
          is_active: boolean;
          email_verified: boolean;
          created_at: string;
          updated_at: string;
        };
      };
      leases: {
        Row: {
          id: string;
          start_date: string;
          end_date: string;
          monthly_rent: number;
          security_deposit: number;
          status: 'pending' | 'active' | 'expired' | 'terminated' | 'renewed';
          terms?: string;
          is_active: boolean;
          tenant_id: string;
          unit_id: string;
          property_id: string;
          created_at: string;
          updated_at: string;
        };
      };
      maintenance_requests: {
        Row: {
          id: string;
          title: string;
          description: string;
          priority: 'low' | 'medium' | 'high' | 'urgent';
          status: 'pending' | 'assigned' | 'in_progress' | 'completed' | 'cancelled';
          category: 'plumbing' | 'electrical' | 'hvac' | 'appliance' | 'structural' | 'landscaping' | 'cleaning' | 'other';
          images: string[];
          estimated_cost?: number;
          actual_cost?: number;
          scheduled_date?: string;
          completed_date?: string;
          tenant_rating?: number;
          tenant_feedback?: string;
          tenant_id: string;
          assigned_vendor_id?: string;
          unit_id: string;
          property_id: string;
          created_at: string;
          updated_at: string;
        };
      };
    };
  };
}
