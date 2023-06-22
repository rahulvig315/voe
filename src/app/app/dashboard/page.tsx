"use client";
import { useUser } from "@auth0/nextjs-auth0/client";

type Props = {}

function Page({ pageProps }: any) {
  const { user } = useUser();
  if (!user) {
    <></>
  }
  return (
    <div>
      <h1 className="text-2xl">Welcome to VOE, {user?.name?.split(' ')[0]} </h1>

    </div>
  )
}

export default Page