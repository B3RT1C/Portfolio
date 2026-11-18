const VISITS_KEY = "total";

function jsonResponse(body, status = 200) {
    return new Response(JSON.stringify(body), {
        status,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            "Cache-Control": "no-store"
        }
    });
}

async function readVisits(kv) {
    const raw = await kv.get(VISITS_KEY);
    const parsed = Number(raw || "0");
    if (!Number.isFinite(parsed) || parsed < 0) {
        return 0;
    }
    return Math.floor(parsed);
}

export async function onRequestGet({ env }) {
    if (!env || !env.VISITS) {
        return jsonResponse({ error: "KV binding VISITS not configured" }, 503);
    }
    const visits = await readVisits(env.VISITS);
    return jsonResponse({ visits });
}

export async function onRequestPost({ env }) {
    if (!env || !env.VISITS) {
        return jsonResponse({ error: "KV binding VISITS not configured" }, 503);
    }
    const visits = (await readVisits(env.VISITS)) + 1;
    await env.VISITS.put(VISITS_KEY, String(visits));
    return jsonResponse({ visits });
}

export function onRequest() {
    return new Response("Method Not Allowed", {
        status: 405,
        headers: {
            Allow: "GET, POST",
            "Cache-Control": "no-store"
        }
    });
}
