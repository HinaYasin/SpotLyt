import Link from "next/link";

export default function Header() {
  return (
    <header
      className="w-full text-800 shadow-sm body-font items-center" style={{ backgroundColor: "#050920" }} 
    >
      <div className="container px-4 flex items-center flex-col items-start mx-auto md:flex-row">
        <Link href='/' className="flex items-center font-medium text-gray-900 title-font md:mb-0" style={{ width: '220px', height: '100px'}}>
          <img src='/spotlight/logo1.png' style={{ width: '100%' }}/>
        </Link>
        <nav className="flex items-center justify-center text-base md:ml-auto">
          <a href="#_" className="mr-10 font-medium hover:text-gray-900">
            Home
          </a>
          <a href="#_" className="mr-10 font-medium hover:text-gray-900">
            Album
          </a>
          <a href="#_" className="mr-10 font-medium hover:text-gray-900">
            Podcast
          </a>
          <a href="#_" className="mr-10 font-medium hover:text-gray-900">
            Events
          </a>
          <a href="#_" className="mr-10 font-medium hover:text-gray-900">
            Artist
          </a>
        </nav>
        <div className="items-center h-full pl-6 mr-5">
          <Link
            href="/register"
            className="px-4 py-2 text-xs font-bold text-white uppercase transition-all duration-150 rounded shadow outline-none active:bg-teal-600 hover:shadow-md focus:outline-none ease"
            style={{
              backgroundColor: "#3901AA",
              padding: "1rem 1.6rem",
              borderRadius: "22px",
              color: "white",
              letterSpacing: '.05rem'
            }}
          >
            FREE REGISTER
          </Link>
        </div>
      </div>
    </header>
  );
}
