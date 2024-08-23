'use client';

import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login"); // Redirect ke halaman login jika tidak terautentikasi
    }
  }, [status, router]);

  return (
    <div className="p-8">
      {session ? (
        <>
          <p className="text-2xl font-bold">Welcome, {session.user?.name}</p>
          <button
            onClick={() => signOut({ callbackUrl: '/login' })}
            className="mt-4 px-4 py-2 bg-red-600 text-white font-semibold rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Sign in
        </button>
      )}
    </div>
  );
}
