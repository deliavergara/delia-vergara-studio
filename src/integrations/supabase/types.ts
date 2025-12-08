export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      insumos: {
        Row: {
          costo_unidad: number
          created_at: string
          id: string
          nombre: string
          unidad_medida: string
          updated_at: string
        }
        Insert: {
          costo_unidad: number
          created_at?: string
          id?: string
          nombre: string
          unidad_medida: string
          updated_at?: string
        }
        Update: {
          costo_unidad?: number
          created_at?: string
          id?: string
          nombre?: string
          unidad_medida?: string
          updated_at?: string
        }
        Relationships: []
      }
      productos: {
        Row: {
          cantidad_bolsa: number | null
          cantidad_hechura: number | null
          categoria: string | null
          cera_gramos: number | null
          costo_cadena_referencia: number | null
          costo_piedra_referencia: number | null
          created_at: string
          descripcion: string | null
          display_name: string | null
          id: string
          nombre: string
          plata_gramos: number | null
          porte: string | null
          precio_venta_con_bano_oro_es: number | null
          precio_venta_es: number | null
          sku: string
          storage_path_folder: string | null
          updated_at: string
        }
        Insert: {
          cantidad_bolsa?: number | null
          cantidad_hechura?: number | null
          categoria?: string | null
          cera_gramos?: number | null
          costo_cadena_referencia?: number | null
          costo_piedra_referencia?: number | null
          created_at?: string
          descripcion?: string | null
          display_name?: string | null
          id?: string
          nombre: string
          plata_gramos?: number | null
          porte?: string | null
          precio_venta_con_bano_oro_es?: number | null
          precio_venta_es?: number | null
          sku: string
          storage_path_folder?: string | null
          updated_at?: string
        }
        Update: {
          cantidad_bolsa?: number | null
          cantidad_hechura?: number | null
          categoria?: string | null
          cera_gramos?: number | null
          costo_cadena_referencia?: number | null
          costo_piedra_referencia?: number | null
          created_at?: string
          descripcion?: string | null
          display_name?: string | null
          id?: string
          nombre?: string
          plata_gramos?: number | null
          porte?: string | null
          precio_venta_con_bano_oro_es?: number | null
          precio_venta_es?: number | null
          sku?: string
          storage_path_folder?: string | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      precios_y_costos_finales: {
        Row: {
          categoria: string | null
          costo_total: number | null
          costo_total_x3: number | null
          nombre: string | null
          porte: string | null
          precio_cl: number | null
          precio_cl_con_bano_oro: number | null
          precio_venta_con_bano_oro_es: number | null
          precio_venta_es: number | null
          sku: string | null
        }
        Insert: {
          categoria?: string | null
          costo_total?: never
          costo_total_x3?: never
          nombre?: string | null
          porte?: string | null
          precio_cl?: never
          precio_cl_con_bano_oro?: never
          precio_venta_con_bano_oro_es?: number | null
          precio_venta_es?: number | null
          sku?: string | null
        }
        Update: {
          categoria?: string | null
          costo_total?: never
          costo_total_x3?: never
          nombre?: string | null
          porte?: string | null
          precio_cl?: never
          precio_cl_con_bano_oro?: never
          precio_venta_con_bano_oro_es?: number | null
          precio_venta_es?: number | null
          sku?: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      is_admin: { Args: never; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
