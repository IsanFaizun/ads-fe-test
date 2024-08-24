'use client';
import Image from "next/image";
import { useState } from 'react';


function Navbar() {
  return (
    <nav className="bg-white border border-gray-300 py-3 shadow-md mx-96 mt-5 rounded-lg sticky top-5 z-50">
        <div className="flex justify-center items-center px-0">
            <div className="flex space-x-8">
                <div className="py-2 pr-5">
                  <Image 
                    src="/Logo.png" 
                    alt="Logo" 
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

function SidebarWhite() {
  return(
    <div className="pt-5">
      <ul className="border-l-2 border-white ps-3">
        <li className="mb-2 text-white">Get Started</li>
        <li className="mb-2 text-white">Broadcast</li>
        <li className="mb-2 text-white">Campaign</li>
        <li className="mb-2 text-white">Auto Reply</li>
        <li className="mb-2 text-white">Opportunity</li>
        <li className="mb-2 text-white">Pricing</li>
        <li className="mb-2 text-white">FAQ</li>
        <li className="mb-2 text-white">Contact Us</li>
      </ul>
    </div>
  );
}

function Section1() {
  return(
    <div className="bg-skyblue grid grid-rows-1 grid-flow-col ps-10 pe-24 py-32">
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
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleSwitch = () => {
    setIsMonthly(!isMonthly);
  };

  return(
    <div className="flex flex-row gap-10 ps-10 pe-24 py-32 bg-white">
      <Sidebar/>
      <div className="flex flex-col ms-10 items-center">
        <p className="text-3xl font-bold">Our Pricing</p>
        <div className="mt-4">
          <div className="flex">
            <span className={`${isMonthly ? 'text-blue-600' : 'text-gray-600'} font-bold`}>
              Monthly
            </span>
            <div
              className={`w-14 h-7 flex items-center bg-gray-300 rounded-full mx-3 px-1 cursor-pointer ${
                isMonthly ? 'bg-blue-500' : 'bg-gray-300'
              }`}
              onClick={toggleSwitch}
            >
              <div
                className={`bg-white w-5 h-5 rounded-full shadow-md transform duration-300 ease-in-out ${
                  isMonthly ? 'translate-x-0' : 'translate-x-7'
                }`}
              />
            </div>
            <span className={`${isMonthly ? 'text-gray-600' : 'text-blue-600'} font-bold`}>
              Yearly
            </span>
          </div>
        </div>
        <div className="bg-light-grey rounded-md px-2 py-1 mt-4">
          <p className="text-blue-500 text-xs font-medium">Hemat hingga 25% dengan paket tahunan</p>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-col w-1/4 p-4">
            <p className="text-xl font-bold">Starter</p>
            <p className="text-sm font-medium">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
            <br />
            <p className="text-xl font-bold">Gratis</p>
            <p className="text-sm font-semibold text-gray-500">-</p>
            <button className="text-white text-sm font-medium bg-blue-500 p-3 my-5" type="button">Start Now</button>
            <Image
              src="/details.png" 
              alt="search-ic" 
              width={211} 
              height={184}
            />
          </div>
          <div className="flex flex-col w-1/4 p-4 bg-white rounded-md shadow-lg">
            <p className="text-xl font-bold">Basic</p>
            <p className="text-sm font-medium">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
            <br />
            <p className="text-xl font-bold">Rp. 65.000 <span className="text-xs">/bulan</span></p>
            <p className="text-sm font-semibold text-gray-500">Rp. 650.000 /tahun</p>
            <button className="text-white text-sm font-medium bg-gold p-3 my-5" type="button">Get Started</button>
            <Image
              src="/details.png" 
              alt="search-ic" 
              width={211} 
              height={184}
            />
          </div>
          <div className="flex flex-col w-1/4 p-4">
            <p className="text-xl font-bold">Premium</p>
            <p className="text-sm font-medium">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
            <br />
            <p className="text-xl font-bold">Rp. 76.000 <span className="text-xs">/bulan</span></p>
            <p className="text-sm font-semibold text-gray-500">Rp. 800.000 /tahun</p>
            <button className="text-white text-sm font-medium bg-blue-500 p-3 my-5" type="button">Start Now</button>
            <Image
              src="/details.png" 
              alt="search-ic" 
              width={211} 
              height={184}
            />
          </div>
          <div className="flex flex-col w-1/4 p-4">
            <p className="text-xl font-bold">Pro</p>
            <p className="text-sm font-medium">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
            <br />
            <p className="text-xl font-bold">Rp. 86.000 <span className="text-xs">/bulan</span></p>
            <p className="text-sm font-semibold text-gray-500">Rp. 900.000 /tahun</p>
            <button className="text-white text-sm font-medium bg-blue-500 p-3 my-5" type="button">Start Now</button>
            <Image
              src="/details.png" 
              alt="search-ic" 
              width={211} 
              height={184}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function Section7() {
  return(
    <div className="flex ps-10 pe-24 py-32 bg-blue-600">
      <div className="me-5">
        <SidebarWhite/>
      </div>
      <div className="flex flex-col ms-80">
        <div className="tems-center justify-items-center">
          <p className="text-white text-2xl font-bold text-center mb-14">Freaquently Asked Question</p>
          <div className="flex flex-row">
            <input type="search" className="w-[558px] h-[37px] px-3 py-3" />
            <Image
              src="/search.png" 
              alt="search-ic" 
              width={22} 
              height={18}
              className="h-8 w-8 ms-3"
            />
          </div>
        </div>
        <br /><br />
        <div className="flex flex-col bg-white rounded mb-4 p-3 w-[600px]">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Apa itu Fowardin</p>
            <div className="bg-blue-600 px-3">
              <p className="text-white font-black text-xl">–</p>
            </div>
          </div>
          <p className="text-xs font-medium">Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
        </div>
        <div className="flex flex-col bg-white rounded mb-4 p-3 w-[600px]">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Apakah Forwardin cocok untuk saya?</p>
            <div className="bg-blue-600 px-3">
              <p className="text-white font-black text-xl">–</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-white rounded mb-4 p-3 w-[600px]">
          <div className="flex justify-between items-center">
            <p className="text-lg font-bold">Apakah Forwardin perlu di-install ke komputer?</p>
            <div className="bg-blue-600 px-3">
              <p className="text-white font-black text-xl">–</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section8() {
  return(
    <div className="flex ps-10 pe-24 py-32 bg-blue-600">
      <div className="flex flex-col">
        <div className="flex flex-row gap-32">
          <SidebarWhite/>
          <div className="flex flex-col w-1/2">
            <Image 
              src="/Logo-white.png" 
              alt="Logo" 
              width={100} 
              height={40} 
              className="h-[33px] w-[175px]"
            />
            <br /><br /><br />
            <p className="text-white text-sm font-medium">Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-white text-lg font-bold">Contact Us</p>
            <br />
            <p className="text-white text-sm font-medium">Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.</p>
            <br />
            <p className="text-white text-sm font-medium">Email: info@fowarin <br /> Phone: +1 (123) 456-7890</p>
          </div>
          <div className="flex flex-col w-1/3">
            <p className="text-white text-lg font-bold">Lets Talk</p>
            <br />
            <p className="text-white text-sm font-medium">Facebook <br /> Instagram <br />Twitter</p>
          </div>
        </div>
        <br /><br /><br /><br /><br />
        <div className="flex flex-row justify-center items-center">
          <p className="text-white font-light text-small me-3">Powered By</p>
          <Image 
              src="/Logo-text.png" 
              alt="Logo" 
              width={100} 
              height={40} 
              className="h-[33px] w-[175px]"
            />
        </div>
      </div>
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