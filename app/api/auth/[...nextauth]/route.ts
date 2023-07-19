import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";

const handler = NextAuth({
  providers: [
    SpotifyProvider({
      clientId: process.env.SPOTIFY_CLIENT_ID!,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
    }),
  ],
  secret: process.env.SECRET,
  pages: {
    signIn: "/auth/signin",
  },
});

export { handler as GET, handler as POST };
// export default function spotifyLogin(req, res) {
//   let state = Math.random().toString(36).substring(2, 7);
//   let scope = "user-read-private user-read-email";

//   window.location.href =
//     "https://accounts.spotify.com/authorize?" +
//     new URLSearchParams({
//       response_type: "code",
//       client_id: process.env.SPOTIFY_CLIENT_ID ?? "",
//       scope: scope,
//       redirect_uri: process.env.REDIRECT_URI ?? "",
//       state: state,
//     }).toString();
// }
