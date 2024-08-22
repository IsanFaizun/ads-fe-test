import Image from "next/image";

export default function LoginPage() {
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
            <div className="flex flex-row">
                <div className="flex flex-col">
                    <div>
                    <Image 
                        src="/pic1.png" 
                        alt="pic1" 
                        width={558} 
                        height={351} 
                        />
                    </div>
                    <div className="flex flex-col">
                        <p className="text-2xl font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p><br />
                        <p className="text-sm font-medium">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
                    </div>
                </div>
                <div className="bg-white border border-gray-300 py-3 px-5 shadow-md rounded-lg">
                    <div className="flex flex-col">
                        <div className="flex flex-col">
                            <p className="text-2xl font-bold text-center">Welcome Back</p>
                            <p className="text-sm font-medium text-center">We’re so excited to see you again!</p>
                        </div>
                        <br /><br />
                        <div>
                            <form action="">
                                <input type="text" placeholder="Username / Email" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md mb-4 w-[406px]"/>
                                <input type="password" placeholder="Password" className="text-xs border-2 border-gray-300 px-5 py-3 rounded-md w-[406px]"/>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}