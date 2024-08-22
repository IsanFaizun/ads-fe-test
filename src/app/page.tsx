import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white border border-gray-300 py-3 shadow-md mx-96 mt-5 rounded-lg sticky top-5 z-50">
        <div className="flex justify-center items-center px-0">
            <div className="flex space-x-8">
                <div className="py-2 pr-5">
                  <Image 
                    src="/Logo.png" 
                    alt="MyLogo" 
                    width={100} 
                    height={40} 
                    className="h-7 w-full"
                  />
                </div>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Demo</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Blog</a>
                <a href="/login" className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-8 flex items-center">
                  Sign In
                </a>
            </div>
        </div>
    </nav>
  );
}

function Sidebar() {
  return(
    <div className="pt-5">
      <ul className="border-l-2 border-slate-900 ps-3">
        <li className="mb-2">Get Started</li>
        <li className="mb-2">Broadcast</li>
        <li className="mb-2">Campaign</li>
        <li className="mb-2">Auto Reply</li>
        <li className="mb-2">Opportunity</li>
        <li className="mb-2">Pricing</li>
        <li className="mb-2">FAQ</li>
        <li className="mb-2">Contact Us</li>
      </ul>
    </div>
  );
}

function Section1() {
  return(
    <div className="grid grid-rows-1 grid-flow-col ps-10 pe-24 py-32">
      <div>< Sidebar/></div>
      <div className="grid grid-row-2 ms-32">
        <div className="w-1/2">
          <p className="font-bold text-3xl">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p><br />
          <p className="text-sm">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
        </div>
        <br />
        <a href="#" className="w-56 text-white bg-slate-900 font-medium rounded-lg text-sm px-8 flex items-center justify-between">
          <span className="py-3">Daftar Sekarang</span>
          <span className="flex items-center justify-center w-6 h-full bg-slate text-white text-lg border-white border-l-2 ps-8">
            ➔
          </span>
        </a>
      </div>
      <div>
      <Image 
        src="/pic1.png" 
        alt="pic1" 
        width={558} 
        height={351} 
      />
      </div>
    </div>
  );
}

function Section2() {
  return(
    <div className="flex items-center ps-10 pe-24 py-32 bg-skyblue">
      <Sidebar/>
      <Image 
        src="/pic2.png" 
        alt="pic2" 
        width={468} 
        height={378}
        className="ms-32" 
      />
      <div className="w-1/4 ms-48">
        <p className="font-bold text-3xl">Reach Further with Ease</p><br />
        <p className="text-sm">Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
      </div>
    </div>
  );
}

function Section3() {
  return(
    <div className="flex items-center ps-10 pe-24 py-32 bg-white">
      <Sidebar/>
      <div className="w-1/4 ms-48">
        <p className="font-bold text-3xl">Right Time, Effective Messages</p><br />
        <p className="text-sm">Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.</p>
      </div>
      <Image 
        src="/pic3.png" 
        alt="pic3" 
        width={461} 
        height={283}
        className="ms-32" 
      />
    </div>
  );
}

function Section4() {
  return(
    <div className="flex items-center ps-10 pe-24 py-32 bg-skyblue">
      <Sidebar/>
      <Image 
        src="/pic4.png" 
        alt="pic4" 
        width={463} 
        height={223}
        className="ms-32" 
      />
      <div className="w-1/4 ms-48">
        <p className="font-bold text-3xl">Respond Faster with the Convenience of Auto Reply</p><br />
        <p className="text-sm">Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.</p> </div>
    </div>
  );
}

function Section5() {
  return(
    <div className="flex ps-10 pe-24 py-32 bg-white">
      <Sidebar/>
      <div className="flex flex-col ms-56">
        <p className="font-bold text-3xl text-prim-blue w-3/4 text-center mb-8">"One Step Closer to More Effective and Connected Communication!"</p>
        <div className="flex flex-row">
          <Image 
            src="/pic5.png" 
            alt="pic5" 
            width={253} 
            height={243}
            />
            <div className="flex flex-col mt-12 ms-5 gap-5">
              <div className="flex flex-row gap-4">
                <button className="text-white bg-blue-500 font-medium rounded-lg text-sm px-5 py-3 flex items-center">Bisnis dan Pemasaran</button>
                <button className="text-blue-500 border border-blue-500 font-medium rounded-lg text-sm px-5 py-3 flex items-center">Komersial dan Penjualan</button>
                <button className="text-blue-500 border border-blue-500 font-medium rounded-lg text-sm px-5 py-3 flex items-center">Organisasi Sosial</button>
              </div>
              <p className="text-sm font-medium w-3/4">Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.</p>
            </div>
        </div>
      </div> 
    </div>
  );
}

function Section6() {
  return(
    <div>
      <Sidebar/>

    </div>
  );
}

function Section7() {
  return(
    <div>
      <Sidebar/>

    </div>
  );
}

function Section8() {
  return(
    <div>
      <Sidebar/>

    </div>
  );
}

export default function LandingPage() {
  return(
    <div>
      <Navbar/>
      <Section1/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
      <Section8/>
    </div>
  );
}