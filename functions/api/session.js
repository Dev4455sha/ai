export async function onRequestGet(context) {
  const h = context.request.headers;
  const ip = h.get("CF-Connecting-IP") || h.get("X-Forwarded-For")?.split(",")[0]?.trim() || null;
  return new Response(JSON.stringify({
    ok: true,
    ip,
    country: h.get("CF-IPCountry") || null,
    colo: h.get("CF-Ray")?.split("-")[1] || null
  }), {
    headers: {"content-type":"application/json; charset=utf-8","cache-control":"no-store"}
  });
}
