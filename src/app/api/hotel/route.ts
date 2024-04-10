export async function GET(request: Request)
{
  return new Response("hotel");
}

export async function POST(request: Request)
{
  const body = await request.json();

  return new Response("OK");
}
