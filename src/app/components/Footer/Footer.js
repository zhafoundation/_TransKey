import LogoWhite from "app/assets/images/transkeylogo.png";
import Navlogo from "app/assets/images/{logo}.png";

export default function Footer() {
  return (
    <footer className="bg-primary-accent text-white bottom-0 left-0 flex flex-col w-full gap-8 px-8 py-16 md:gap-12">
      <div className="flex flex-col items-center gap-8 md:justify-between md:flex-row">
        <div className="flex flex-col gap-2">
          <p className="text-3xl font-bold font-pt-serif">
            Share your feedback by <br /> filling our Survey
          </p>
        </div>
        <div className="flex flex-col gap-4 xsm:flex-row md:p-0">
          <div className="w-52 py-2 px-2 pl-4 text-white bg-white/40 rounded-full flex items-center justify-between flex-row gap-2">
            Take the Survey
            <div className="h-full w-8 p-1 rounded-full bg-secondary-accent/80 text-white flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px m-auto border-b border-gray-400/40"></div>
      <div className="grid grid-cols-2 gap-8 2xsm:grid-cols-2  md:grid-cols-5 ">
        <div className="flex flex-1 flex-col gap-6 w-full col-span-6 md:col-span-2">
        <div className="flex items-center w-80">
        {/* <img src={Navlogo} alt="Logo"/> */}
        </div>
          <div className="flex items-center w-full">
          
            <img src={LogoWhite} alt="Logo" width={200} />
          </div>
          <p className="pr-5">
            We identify, mould and transform resources in consonance with the
            values and culture of each uniquely modeled organization.
          </p>
        </div>
        <div className="w-full flex-1 col-span-3">
          <div className="flex-1 flex flex-row md:justify-end w-full  gap-4 p-2 social-wrapper mb-4">
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
              <img
                src="https://img.icons8.com/material/24/000000/twitter--v2.png"
                alt="Facebook"
              />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
              <img
                src="https://img.icons8.com/material/24/000000/instagram-new--v1.png"
                alt="Instagram"
              />
            </div>
            <div className="h-10 w-10 flex items-center justify-center rounded-full bg-white">
              <img
                src="https://img.icons8.com/material/24/000000/twitter--v2.png"
                alt="twitter "
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-1 md:grid-cols-4">
            <div className="flex flex-col gap-6">
              <label className="text-white font-semibold pb-1 uppercase">
                Contact Info
              </label>
              <ul className="flex flex-col gap-2">
                <li>+91 7305359417</li>
                <li>info@transkeyconsulting.com</li>
                <br/>
                <label className="text-white font-semibold pb-1 uppercase">
                Overseas Office:
              </label>
                <li>Juniper way, Romford, London, United Kingdom</li>
               <br/>
                <label className="text-white font-semibold pb-1 uppercase">
                Offshore Office:
              </label>
                <li>Bhel Nagar, Medavakkam, Chennai, Tamilnadu, India</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <label className="text-white font-semibold pb-1 uppercase">
                Our services
              </label>
              <ul className="flex flex-col gap-2">
                <li>Capability Development</li>
                <li>Transformation Consulting</li>
                <li>IT Agile Transfornation</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <label className="text-white font-semibold pb-1 uppercase">
                Quick Links
              </label>
              <ul className="flex flex-col gap-2">
                <li>Home </li>
                <li>About us</li>
                <li>Contact us</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <label className="text-white font-semibold pb-1 uppercase">
                Resources
              </label>
              <ul className="flex flex-col gap-2">
                <li>Survey </li>
                <li>Blog Posts</li>
                <li>Case Studies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-px m-auto border-b border-gray-400/40"></div>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between text-white/50">
        <div>© 2022 Transkey India, All rights reserved </div>
        <div className="flex gap-4 p-2 rounded-md social-wrapper">
          Privacy Policy and T&C
        </div>
      </div>
    </footer>
  );
}
