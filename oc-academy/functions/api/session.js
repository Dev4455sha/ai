export async function onRequestGet(context) {
  const h = context.request.headers;
  const ip = h.get('CF-Connecting-IP') || h.get('x-forwarded-for')?.split(',')[0]?.trim() || '';
  return new Response(JSON.stringify({
    ip: ip || null,
    country: h.get('CF-IPCountry') || null
  }), { headers: { 'content-type': 'application/json; charset=UTF-8', 'cache-control': 'no-store' } });
}
