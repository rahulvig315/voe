'use client';
import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


export default function Home({ }) {
  const { push } = useRouter();
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      push('/dashboard');
    } else {
      push('/landing')
    }
  }, [push, user]);

  return (<></>)
}