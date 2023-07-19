import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/** Fetches the Spotify Web API
 * Adds two numbers together.
 * @param {string} endpoint The spotify endpoint.
 * @param {string} method The REST method.
 * @param {any} body The response body, typically as an object.
 * @return {int} The sum of the two numbers.
 */
async function fetchWebApi(
  endpoint: string,
  method: string,
  token: string,
  body: unknown = undefined
) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

/**
 * Get the user's top tracks.
 * @param {string} token The Client token.
 */
async function getTopTracks(token: string) {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi(
      "v1/me/top/tracks?time_range=short_term&limit=5",
      "GET",
      token
    )
  ).items;
}

export async function GET(request: NextRequest) {
  const body = await request.json();
  const topTracks = await getTopTracks(body.token);
  return NextResponse.json(
    {
      body: topTracks,
      path: request.nextUrl.pathname,
      query: request.nextUrl.search,
      cookies: request.cookies.getAll(),
    },
    {
      status: 200,
    }
  );
}
