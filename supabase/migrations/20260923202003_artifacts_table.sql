-- User-owned Chat artifact JSON documents (ADR 0034 slice 2).
-- App persistence goes only here; fitness / hevy_* tables stay untouched.

CREATE TABLE public.artifacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES public.users (id) ON DELETE CASCADE,
  title text,
  document jsonb NOT NULL DEFAULT '{"title":"","weeks":[]}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

COMMENT ON TABLE public.artifacts IS
  'Durable Chat artifact JSON for the dual-pane builder (ADR 0034).';
COMMENT ON COLUMN public.artifacts.title IS
  'Optional denormalized title mirrored from document.title for list/query convenience.';
COMMENT ON COLUMN public.artifacts.document IS
  'Chat artifact JSON: { title, weeks: [{ days: [{ id, title, items: [{ id, title, notes? }] }] }] }.';

CREATE INDEX artifacts_user_id_updated_at_idx
  ON public.artifacts (user_id, updated_at DESC);

ALTER TABLE public.artifacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own artifacts"
  ON public.artifacts FOR SELECT
  USING ((SELECT auth.uid()) = user_id);

CREATE POLICY "Users can insert own artifacts"
  ON public.artifacts FOR INSERT
  WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "Users can update own artifacts"
  ON public.artifacts FOR UPDATE
  USING ((SELECT auth.uid()) = user_id)
  WITH CHECK ((SELECT auth.uid()) = user_id);

CREATE POLICY "Users can delete own artifacts"
  ON public.artifacts FOR DELETE
  USING ((SELECT auth.uid()) = user_id);

CREATE TRIGGER set_updated_at
  BEFORE UPDATE ON public.artifacts
  FOR EACH ROW
  EXECUTE FUNCTION public.set_updated_at_metadata();

GRANT SELECT, INSERT, REFERENCES, DELETE, TRIGGER, TRUNCATE, UPDATE
  ON TABLE public.artifacts TO anon;
GRANT SELECT, INSERT, REFERENCES, DELETE, TRIGGER, TRUNCATE, UPDATE
  ON TABLE public.artifacts TO authenticated;
GRANT SELECT, INSERT, REFERENCES, DELETE, TRIGGER, TRUNCATE, UPDATE
  ON TABLE public.artifacts TO service_role;
