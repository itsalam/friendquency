import { getCsrfToken } from "next-auth/react";

export default function Songs() {
    getCsrfToken().then((token) => { console.log(token) });
}