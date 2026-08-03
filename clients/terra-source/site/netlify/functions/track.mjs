// Terra Source Corp — order tracking lookup.
// Orders live server-side in this function (not in any public file). To add or
// update an order, edit ORDERS below and redeploy the site. When order volume
// justifies it, swap this array for a database lookup (e.g. Supabase) without
// touching the front-end — the response shape is the contract.

const ORDERS = [
  {
    number: 'TSG-10001',
    email: 'buyer@example.com',
    status: 'Shipped', // Received | Confirmed | In Preparation | Shipped | Delivered
    timeline: {
      Received: 'Jul 18, 2026',
      Confirmed: 'Jul 19, 2026',
      'In Preparation': 'Jul 24, 2026',
      Shipped: 'Jul 30, 2026',
    },
    carrier: 'Maersk',
    blNumber: 'MAEU-8841207',
    vesselEta: 'Aug 28, 2026 — Charleston, SC',
    destination: 'Charleston, SC, USA',
    items: [
      { name: 'Green Robusta — Volcanic, Mount Cameroon', qty: '1 × 20′ FCL' },
    ],
    demo: true,
  },
];

const norm = (s) => String(s || '').trim().toLowerCase();

export default async (req) => {
  if (req.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }
  let body;
  try {
    body = await req.json();
  } catch {
    return Response.json({ error: 'Invalid request' }, { status: 400 });
  }
  const number = norm(body.number);
  const email = norm(body.email);
  if (!number || !email) {
    return Response.json({ error: 'Order number and email are required.' }, { status: 400 });
  }
  const order = ORDERS.find(
    (o) => norm(o.number) === number && norm(o.email) === email
  );
  if (!order) {
    return Response.json(
      { error: 'No order found for that number and email. Check both and try again, or contact the trade desk.' },
      { status: 404 }
    );
  }
  const { email: _e, ...safe } = order;
  return Response.json({ order: safe });
};

export const config = { path: '/.netlify/functions/track' };
