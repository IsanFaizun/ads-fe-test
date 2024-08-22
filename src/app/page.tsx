import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white border border-gray-300 py-3 shadow-md mx-96 mt-5 rounded-lg">
        <div className="flex justify-center items-center px-0">
            <div className="hidden md:flex space-x-8">
                <div className="py-2 pr-5">
                  <Image 
                    src="/Logo.png" 
                    alt="MyLogo" 
                    width={100} 
                    height={40} 
                    className="h-7 w-auto"
                  />
                </div>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Features</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Pricing</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Demo</a>
                <a href="#" className="text-gray-600 hover:text-gray-800 py-2">Blog</a>
                <a href="#" className="text-white bg-blue-500 hover:bg-blue-700 font-medium rounded-lg text-sm px-8 flex items-center">
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

function Page1() {
  return(
    <div className="grid grid-rows-1 grid-flow-col mx-10 ">
      <div>< Sidebar/></div>
      <div>
        <p className="font-bold text-3xl">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</p>
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

export default function LandingPage() {
  return(
    <div>
      <Navbar/>
      <Page1/>
    </div>
  );
}