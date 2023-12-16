export async function POST(req) {
  const data = await req.json();
  const { email, password } = data;

  return new Response([{ email, password }]);
}
