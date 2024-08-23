import Image from "next/image";

export default function RegisterPage() {
    return(
        <div className="bg-skyblue flex flex-col ps-24 pe-24 pt-10 pb-32">
            <div>
                <Image 
                src="/Logo.png" 
                alt="MyLogo" 
                width={100} 
                height={40} 
                className="h-7 w-auto"
                />
            </div>
            <br /><br /><br /><br />
            <div className="flex flex-row ms-10">
                <div className="flex flex-col">
                    <div>
                    <Image 
                        src="/pic1.png" 
                        alt="pic1" 
                        width={558} 
                        height={351} 
                        />
                    </div>
                    <div className="flex flex-col w-2/3">
                        <p className="text-2xl font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p><br />
                        <p className="text-sm font-medium">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 pt-10 px-5 shadow-md rounded-lg w-full h-[539px]">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold text-center">Welcome to Fowardin</p>
                            <p className="text-sm font-medium text-center px-16">Revolutionize your communication journey with Fowardin today</p>
                        </div>
                        <br />
                        <div className="flex flex-col">
                            <form action="" className="mb-3">
                                <input type="email" placeholder="Email" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-full"/>
                                <input type="text" placeholder="Usermame" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-full"/>
                                <input type="number" placeholder="Whatsapp Phone Number" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-full"/>
                                <input type="password" placeholder="Password" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md w-full"/>
                            </form>
                            <button className="bg-blue-500 text-white text-sm font-medium h-[48px] rounded-md mt-5 mb-5">Sign Up</button>
                            <p className="text-sm font-medium text-center">Sudah punya akun? <span className="text-blue-500"><a href="/login">Masuk di sini</a></span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}