export async function GET(request: Request)
{
  return new Response("hotel");
}

export async function POST(request: Request)
{
  const body = await request.json();
  setTimeout(async () =>
  {
    console.log("Hotel Successfully added to database")
  }, 2000);
  return new Response("OK");
}
