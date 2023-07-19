import { signIn } from "next-auth/react";


import { getProviders } from "next-auth/react";

export default async function SignIn() {
    const providers = await getProviders();
    return (
        <>
            {providers && Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id)}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}