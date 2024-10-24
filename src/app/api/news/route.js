import axios from "axios";
export const dynamic = 'force-dynamic';

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page")) || 1;  
  const limit = parseInt(searchParams.get("limit")) || 10;  
  const apiUrl = `${process.env.BACKEND_API}?page=${page}&limit=${limit}`;
  try {
    const response = await axios.get(apiUrl);
  const responseData = response.data;
  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
  } catch (error) {
    console.error("API fetch failed:", error.message);
    return new Response(JSON.stringify({ error: "API fetch failed" }), {
      status: 500,
    });
  }
  
};