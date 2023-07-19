import { GetStaticProps, InferGetStaticPropsType } from "next";
import { getCsrfToken } from "next-auth/react";

type Repo = {

}

export const getStaticProps: GetStaticProps<{
    repo: Repo
}> = async () => {
    const token = await getCsrfToken();
    const res = await fetch('/api/spotify/getsongs', { body: token })
    console.log(res);
    const repo = await res.json()
    return { props: { repo } }
}


export default function Songs({ repo }: InferGetStaticPropsType<typeof getStaticProps>) {
    console.log(repo);
    return <div>{JSON.stringify(repo)}</div>
}

