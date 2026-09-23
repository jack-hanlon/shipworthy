/**
 * @module (app)/(with-toolbar)/build-program/page
 * Intentional redirect leftover after ADR 0034 / 01 rename to /dashboard.
 */
import { redirect } from "next/navigation";

type TPageProps = {
    searchParams?: Promise<Record<string, string | string[] | undefined>> | Record<string, string | string[] | undefined>;
};

export default async function BuildProgramRedirectPage(props: TPageProps) {
    const raw = await Promise.resolve(props.searchParams ?? {});
    const params = new URLSearchParams();
    for (const [key, value] of Object.entries(raw)) {
        if (typeof value === "string") params.set(key, value);
        else if (Array.isArray(value) && value[0]) params.set(key, value[0]);
    }
    const qs = params.toString();
    redirect(qs ? `/dashboard?${qs}` : "/dashboard");
}
