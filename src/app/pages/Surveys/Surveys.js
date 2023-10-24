export default function Surveys() {
  return (
    <>
      <section className="pt-32 pb-20 md:mt-0 md:h-full flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <section className="w-full lg:w-4/5  container mx-auto flex flex-col items-center justify-center px-6 pt-12">
          <p className="font-montserrat text-center uppercase font-semibold mb-2 text-zinc-800">
            Strategy Creation
          </p>
          <h1 className="font-pt-serif text-4xl text-center font-bold text-primary-accent mb-2">
            Well-crafted strategy can take an <br /> organisation to new heights
          </h1>
        </section>
      </section>
      <section className="absolute inset-x-0 z-[-1] md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary bg-cover-survey bg-cover bg-center"></section>
      <section className="mb-12 md:pt-52 flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <div className="flex md:flex-row flex-col  gap-4 ">
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
                className={`w-[450px] gap-3  ${i !== 0 ? "pt-48" : ""}`}
                key={i}
              >
                <div className="bg-white border shadow-md rounded-md p-4 flex flex-col gap-3">
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
              </div>
            ))}
          </div>
        </div>
        <div className="hidden md:flex justify-end w-1/2 relative"></div>
      </section>
    </>
  );
}
