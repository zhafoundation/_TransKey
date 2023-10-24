import Handshake from "app/assets/images/Handshake.png";

export default function ContactUs() {
  return (
    <>
      <section className="pt-36 px-6 mx-auto container flex flex-col justify-center text-center">
        <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
          Get in touch with us <br /> for more information
        </h1>
        <p className="font-montserrat font-normal mb-7">
          If you need any help or have any questions, we will be here.
        </p>
      </section>
      <section className="absolute inset-x-0 z-[-1] md:mt-0 md:h-[600px] flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary bg-cover-contactus bg-cover bg-center"></section>
      <section className="mb-12 md:pt-52 flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <div className="flex flex-col gap-4">
            {[
              {
                title: "Questionnaire",
                href: "/questionnaire",
                content:
                  "You would have filled out the questionnaire at the beginning of your course. We will use that questionnaire to know more about you. If you feel that you want to refill that please use this link and fill it out as honestly as possible.",
              },
              {
                title: "Sharing Goals",
                href: "/sharing-goals",
                content:
                  "It is very important for us to know your goals and the transformation you seek. Please share them by clicking here in the format below by Oct 28th.",
              },
            ].map(({ title, content, href }, i) => (
              <div
                key={i}
                className="col-12 col-md-4 border shadow-md rounded-md p-4 flex flex-col gap-3 bg-white "
              >
                <h1 className="font-montserrat font-bold text-lg">{title}</h1>
                <p className="font-montserrat font-[14px] mb-3">{content}</p>
                <a href={href}>
                  <div className="w-52 py-2 px-2 pl-4 text-white bg-secondary-accent rounded-full flex items-center justify-between flex-row gap-2">
                    Take the Survey
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
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end w-1/2 relative"></div>
      </section>
      {/* row with five cards */}
      <section className="flex flex-col items-center justify-center gap-4 pl-6 bg-[#EBF2FA] w-full">
        <div className="flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:pl-48 md:pl-12 pl-4 bg-secondary w-full">
          <div className="md:flex-1 md:mr-10 lg:mr-20 mr-6">
            <div className="flex flex-col gap-2 py-12">
              <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
                Let’s Connect!
              </h1>
              <p className="font-montserrat font-normal mb-7">
                Fill up the contact form and someone from our team will contact
                you.
              </p>
              <input
                type="text"
                placeholder="Name"
                className="border border-primary-accent/40 rounded-md py-2.5 px-6"
              />
              <input
                type="email"
                name="email_id"
                id="email_id"
                placeholder="Email Address"
                className="border border-primary-accent/40 rounded-md py-2.5 px-6"
              />
              <input
                type="tel"
                name="phone"
                id="phone"
                placeholder="Contact Number"
                className="border border-primary-accent/40 rounded-md py-2.5 px-6"
              />
              <textarea
                name="address"
                id="address"
                cols="30"
                rows="10"
                placeholder="Enter your message"
                className="border border-primary-accent/40 rounded-md py-2.5 px-6 resize-none"
              ></textarea>
              <button
                type="submit"
                className="bg-primary-accent rounded-md py-2.5 px-6 flex text-white w-1/3 text-center justify-center"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="hidden h-full md:flex justify-end w-1/2 relative">
            <img
              src={Handshake}
              alt="Handshake"
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
