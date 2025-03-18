"use client";

import { signIn, signOut, useSession } from "next-auth/react";

export default function page() {
  const { data: session, status } = useSession();
  const loading = status === "loading";
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : session?.user ? (
        <>
          <h1>Welcome, {session.user?.name}</h1>
          <p>You are logged in!</p>
          <button onClick={() => signOut()}>Sign out</button>
        </>
      ) : (
        <>
          <h1>Welcome to the App</h1>
          <button onClick={() => signIn("google")}>Sign In</button>
        </>
      )}
    </div>
  );
}
