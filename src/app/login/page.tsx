'use client';

import Image from "next/image";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });
  
    console.log('SignIn Result:', result); // Tambahkan logging
  
    if (result?.error) {
      setError(result.error);
    } else {
      router.push("/dashboard");
    }
  };
  

  return (
    <div className="bg-skyblue flex flex-col ps-24 pe-24 pt-10 pb-32">
      <div>
        <Image src="/Logo.png" alt="MyLogo" width={100} height={40} className="h-7 w-auto" />
      </div>
      <br /><br /><br /><br />
      <div className="flex flex-row ms-10">
        <div className="flex flex-col">
          <div>
            <Image src="/pic1.png" alt="pic1" width={558} height={351} />
          </div>
          <div className="flex flex-col w-2/3">
            <p className="text-2xl font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p><br />
            <p className="text-sm font-medium">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Contact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
          </div>
        </div>
        <div className="bg-white border border-gray-300 pt-10 px-5 shadow-md rounded-lg w-full h-[427px]">
          <div className="flex flex-col">
            <div className="flex flex-col">
              <p className="text-2xl font-bold text-center">Welcome Back</p>
              <p className="text-sm font-medium text-center">We’re so excited to see you again!</p>
            </div>
            <br /><br />
            <div className="flex flex-col">
              <form onSubmit={handleSubmit} className="mb-3">
                <input
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Username / Email"
                  className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-full"
                />
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Password"
                  className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-full"
                />
                <a href="#" className="text-sm font-medium text-blue-500">Lupa Password?</a><br />
                <button type="submit" className="bg-blue-500 text-white text-sm font-medium h-[48px] rounded-md my-5 w-full">Sign In</button>
              </form>
              {error && <p className="text-red-500 text-center">{error}</p>}
              <p className="text-sm font-medium text-center">Butuh buat akun? <span className="text-blue-500"><a href="/register">Daftar di sini</a></span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}