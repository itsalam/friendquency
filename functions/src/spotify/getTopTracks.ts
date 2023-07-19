// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
import * as logger from "firebase-functions/logger";
import { onRequest } from "firebase-functions/v2/https";

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

export const topTracks = onRequest(async (request, response) => {
  const body = JSON.parse(request.body);

  logger.info("Hello logs!", { structuredData: true });
  const topTracks = await getTopTracks(body.token);
  response.send(topTracks);
});
