import Logo from "app/assets/images/BrandLogo.png";
import ZhaLogo from "app/assets/images/navigation logo.png";
import Navlogo from "app/assets/images/{logo}.png";
import { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';


export default function Header() {
  useEffect(() => {
    document
      .querySelector("#showMenu")
      .addEventListener("click", function (event) {
        document.querySelector("#mobileNav").classList.remove("hidden");
      });

    document
      .querySelector("#hideMenu")
      .addEventListener("click", function (event) {
        document.querySelector("#mobileNav").classList.add("hidden");
      });

    document.querySelectorAll("[toggleElement]").forEach((toggle) => {
      toggle.addEventListener("click", function (event) {
        console.log(toggle);
        const answerElement = toggle.querySelector("[answer]");
        const caretElement = toggle.querySelector("img");
        console.log(answerElement);
        if (answerElement.classList.contains("hidden")) {
          answerElement.classList.remove("hidden");
          caretElement.classList.add("rotate-90");
        } else {
          answerElement.classList.add("hidden");
          caretElement.classList.remove("rotate-90");
        }
      });
    });

    return () => {
      document
        .querySelector("#showMenu")
        .removeEventListener("click", function (event) {
          document.querySelector("#mobileNav").classList.remove("hidden");
        });

      document
        .querySelector("#hideMenu")
        .removeEventListener("click", function (event) {
          document.querySelector("#mobileNav").classList.add("hidden");
        });

      document.querySelectorAll("[toggleElement]").forEach((toggle) => {
        toggle.removeEventListener("click", function (event) {
          console.log(toggle);
          const answerElement = toggle.querySelector("[answer]");
          const caretElement = toggle.querySelector("img");
          console.log(answerElement);
          if (answerElement.classList.contains("hidden")) {
            answerElement.classList.remove("hidden");
            caretElement.classList.add("rotate-90");
          } else {
            answerElement.classList.add("hidden");
            caretElement.classList.remove("rotate-90");
          }
        });
      });
    };
  }, []);

  return (
    <>
      <nav className="fixed flex justify-between py-4 w-full lg:px-20 md:px-12 px-4 content-center bg-white z-10 shadow-md">
        <div className="flex items-center">
        {/* <a href="https://zhafoundation.in/">
          
          <img src={ZhaLogo} alt="Logo" className="w-20" />
        </a> */}
          <a href="/">
          
            <img src={Logo} alt="Logo" className="w-20" />
          </a>
          
        </div>
        <ul className="font-montserrat items-center hidden md:flex">
          <li className="growing-underline mx-3">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Home
            </NavLink>
        
            </li>

            <li className="growing-underline mx-3">
            <NavLink
              to="Education-Consultation"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Education Consultation
            </NavLink>
          </li>



            <li className="growing-underline mx-3">
            <NavLink
              to="Digital-marketing"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Digital Marketing
            </NavLink>
          </li>


          
          <li className="growing-underline mx-3">
            <NavLink
              to="capability-development"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Capability Development
            </NavLink>
          </li>

          


          <li className="growing-underline mx-3">
            <NavLink
              to="transformation-consultation"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Transformation Consultation
            </NavLink>
          </li>
          {/* <li className="growing-underline mx-3">
            <NavLink
              to="resources"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              Resources
            </NavLink>
          </li> */}
          <li className="group  relative dropdown  mx-3 cursor-pointer tracking-wide">
            <p className="growing-underline">
              <NavLink
                to="resources"
                className={({ isActive, isPending }) =>
                  isActive
                    ? "text-secondary-accent"
                    : isPending
                    ? "pending"
                    : ""
                }
              >
                Resources
              </NavLink>
            </p>
            <div className="group-hover:block dropdown-menu absolute hidden h-auto">
              <ul className="top-0 w-48 bg-white px-0 py-2.5 shadow-2xl">
                <li className="hover:bg-secondary-accent/20 py-2 px-4">
                  <a
                    href="/resources/blogs"
                    className="block hover:text-secondary-accent cursor-pointer"
                  >
                    Blogs
                  </a>
                </li>
                <li className="hover:bg-secondary-accent/20 py-2 px-4">
                  <a
                    href="/resources/surveys"
                    className="block hover:text-secondary-accent cursor-pointer"
                  >
                    Surveys
                  </a>
                </li>
                <hr className="mx-2" />
                <li className="hover:bg-secondary-accent/20 py-2 px-4">
                  <a
                    href="/resources/case-studies"
                    className="block hover:text-secondary-accent cursor-pointer"
                  >
                    Case Studies
                  </a>
                </li>
              </ul>
            </div>
          </li>

          <li className="growing-underline mx-3">
            <NavLink
              to="about-us"
              className={({ isActive, isPending }) =>
                isActive ? "text-secondary-accent" : isPending ? "pending" : ""
              }
            >
              About us
            </NavLink>
            {/* <a href="/about-us">About us</a> */}
          </li>
        </ul>
        <div className="font-montserrat hidden md:block">
          <Link to={`contact-us`}>
            <div className="py-2 px-2 pl-4 text-white bg-secondary-accent rounded-full flex items-center flex-row gap-2">
              Contact us
              <div className="h-full w-8 p-1 rounded-full bg-white/25 text-white flex items-center justify-center">
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
          </Link>
         
        </div>
        
        <div
          id="showMenu"
          className="md:hidden flex items-center cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-12 h-12"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </nav>
      <div
        id="mobileNav"
        className="hidden px-4 py-6 fixed top-0 left-0 h-full w-full bg-secondary z-20 animate-fade-in-down bg-white"
      >
        <div id="hideMenu" className="flex justify-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-16 h-16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <ul className="font-montserrat flex flex-col gap-4 mx-4 my-6 text-2xl">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/Education-Consultation">Education Consultation</a>
          </li>
          <li>
            <a href="/Digital-marketing">Digital Marketing</a>
          </li>
          
          <li>
            <a href="/capability-development"> Capability Development</a>
          </li>
          <li>
            <a href="/transformation-consultation">
              Transformation Consultation
            </a>
          </li>
          <li>
            <a href="/resources">Resources</a>
            <ul className="ml-4  flex flex-col gap-2 mt-2">
              <li>
                <a href="/resources/blogs">Blogs</a>
              </li>
              <li>
                <a href="/resources/surveys">Surveys</a>
              </li>
              <li>
                <a href="/resources/case-studies">Case Studies</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/about-us">About us</a>
          </li>
          <li>
            <a href="/contact-us">Contact us</a>
          </li>
         
        </ul>
       
      </div>
    </>
  );
}
