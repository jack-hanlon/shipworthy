/* eslint-disable @typescript-eslint/naming-convention */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never;
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      graphql: {
        Args: {
          extensions?: Json;
          operationName?: string;
          query?: string;
          variables?: Json;
        };
        Returns: Json;
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
  public: {
    Tables: {
      artifacts: {
        Row: {
          created_at: string;
          document: NonNullable<Json>;
          id: string;
          title: string | null;
          updated_at: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          document?: NonNullable<Json>;
          id?: string;
          title?: string | null;
          updated_at?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          document?: NonNullable<Json>;
          id?: string;
          title?: string | null;
          updated_at?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "artifacts_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      chat_history: {
        Row: {
          conversation: Json[] | null;
          created_at: string;
          id: string;
          pinned: boolean | null;
          program_id: number | null;
          title: string;
          user_id: string;
        };
        Insert: {
          conversation?: Json[] | null;
          created_at?: string;
          id?: string;
          pinned?: boolean | null;
          program_id?: number | null;
          title: string;
          user_id: string;
        };
        Update: {
          conversation?: Json[] | null;
          created_at?: string;
          id?: string;
          pinned?: boolean | null;
          program_id?: number | null;
          title?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "chat_history_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      feature_ideas: {
        Row: {
          created_at: string;
          id: string;
          text: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          text: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          text?: string;
        };
        Relationships: [];
      };
      feature_ideas_feedback_items_join: {
        Row: {
          feedback_item_id: string;
          idea_id: string;
          model: string;
          noul: number;
          scored_at: string;
        };
        Insert: {
          feedback_item_id: string;
          idea_id: string;
          model: string;
          noul: number;
          scored_at?: string;
        };
        Update: {
          feedback_item_id?: string;
          idea_id?: string;
          model?: string;
          noul?: number;
          scored_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "feature_ideas_feedback_items_join_feedback_item_id_fkey";
            columns: ["feedback_item_id"];
            isOneToOne: false;
            referencedRelation: "feedback_items";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "feature_ideas_feedback_items_join_idea_id_fkey";
            columns: ["idea_id"];
            isOneToOne: false;
            referencedRelation: "feature_ideas";
            referencedColumns: ["id"];
          },
        ];
      };
      feature_usage: {
        Row: {
          created_at: string;
          id: string;
          monthly_exports_used: number;
          monthly_llm_requests: number;
          period_start: string;
          user_id: string;
        };
        Insert: {
          created_at?: string;
          id?: string;
          monthly_exports_used?: number;
          monthly_llm_requests?: number;
          period_start?: string;
          user_id: string;
        };
        Update: {
          created_at?: string;
          id?: string;
          monthly_exports_used?: number;
          monthly_llm_requests?: number;
          period_start?: string;
          user_id?: string;
        };
        Relationships: [
          {
            foreignKeyName: "feature_usage_user_id_fkey";
            columns: ["user_id"];
            isOneToOne: false;
            referencedRelation: "users";
            referencedColumns: ["id"];
          },
        ];
      };
      feedback_items: {
        Row: {
          body: string;
          created_at: string;
          customer_id: string | null;
          id: string;
          source: string;
        };
        Insert: {
          body: string;
          created_at?: string;
          customer_id?: string | null;
          id: string;
          source: string;
        };
        Update: {
          body?: string;
          created_at?: string;
          customer_id?: string | null;
          id?: string;
          source?: string;
        };
        Relationships: [];
      };
      product_usage_limits: {
        Row: {
          created_at: string;
          id: string;
          max_monthly_exports: number | null;
          max_monthly_llm_requests: number | null;
          max_premium_llm_requests: number | null;
          product_title: string | null;
        };
        Insert: {
          created_at?: string;
          id?: string;
          max_monthly_exports?: number | null;
          max_monthly_llm_requests?: number | null;
          max_premium_llm_requests?: number | null;
          product_title?: string | null;
        };
        Update: {
          created_at?: string;
          id?: string;
          max_monthly_exports?: number | null;
          max_monthly_llm_requests?: number | null;
          max_premium_llm_requests?: number | null;
          product_title?: string | null;
        };
        Relationships: [];
      };
      users: {
        Row: {
          bio: string | null;
          created_at: string;
          email: string | null;
          first_name: string | null;
          id: string;
          last_name: string | null;
          textsearchable_index_col: unknown;
          timezone: string | null;
          username: string | null;
        };
        Insert: {
          bio?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id: string;
          last_name?: string | null;
          textsearchable_index_col?: unknown;
          timezone?: string | null;
          username?: string | null;
        };
        Update: {
          bio?: string | null;
          created_at?: string;
          email?: string | null;
          first_name?: string | null;
          id?: string;
          last_name?: string | null;
          textsearchable_index_col?: unknown;
          timezone?: string | null;
          username?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      customer_mrr: {
        Row: {
          active_mrr: number | null;
          customer_id: string | null;
          lost_mrr: number | null;
        };
        Relationships: [];
      };
      subscription_mrr: {
        Row: {
          cancel_comment: string | null;
          cancel_feedback: string | null;
          customer_id: string | null;
          mrr: number | null;
          status: string | null;
          subscription_id: string | null;
        };
        Relationships: [];
      };
      unattributed_lost_mrr: {
        Row: {
          amount: number | null;
          cancellations: number | null;
        };
        Relationships: [];
      };
    };
    Functions: {
      delete_secret: { Args: { secret_name: string }; Returns: string };
      get_my_feature_limits: {
        Args: Record<PropertyKey, never>;
        Returns: {
          has_active_subscription: boolean;
          max_monthly_exports: number;
          max_monthly_llm_requests: number;
          monthly_exports_used: number;
          monthly_llm_requests_used: number;
          period_start: string;
          remaining_exports: number;
          remaining_llm_requests: number;
          resets_on: string;
          tier: string;
          user_id: string;
        }[];
      };
      idea_demand: {
        Args: { cutoff?: number };
        Returns: {
          active_mrr_asking: number;
          active_spread: number;
          customers_asking: number;
          idea: string;
          idea_id: string;
          lost_mrr_asking: number;
          lost_spread: number;
          total_asks: number;
          unlinked_mentions: number;
        }[];
      };
      idea_evidence: {
        Args: { cutoff?: number; p_idea_id: string };
        Returns: {
          active_mrr: number;
          body: string;
          customer_id: string;
          feedback_item_id: string;
          lost_mrr: number;
          noul: number;
          source: string;
        }[];
      };
      increment_feature_usage: {
        Args: { p_feature: string };
        Returns: undefined;
      };
      insert_secret: {
        Args: { secret: string; secret_name: string };
        Returns: string;
      };
      read_secret: { Args: { secret_name: string }; Returns: string };
      try_consume_feature_usage: {
        Args: { p_feature: string };
        Returns: {
          allowed: boolean;
        }[];
      };
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">;

type DefaultSchema = DatabaseWithoutInternals[Extract<
  keyof Database,
  "public"
>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    keyof DefaultSchema["Tables"] | { schema: keyof DatabaseWithoutInternals },
  TableName extends (DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never) = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    keyof DefaultSchema["Enums"] | { schema: keyof DatabaseWithoutInternals },
  EnumName extends (DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never) = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends (PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals;
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never) = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals;
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  graphql_public: {
    Enums: {},
  },
  public: {
    Enums: {},
  },
} as const;
