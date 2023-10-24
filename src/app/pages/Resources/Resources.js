import FeedbackImage from "app/assets/icons/feedback.png";
import ReadingImage from "app/assets/icons/reading.png";
import SharingImage from "app/assets/icons/sharing.png";
import Landing from "app/assets/images/Resources.png";

export default function Resources() {
  return (
    <>
      <section className="flex flex-col items-center justify-center gap-4 px-6">
        <div className="h-screen flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:pl-24 md:pl-12 pl-4 bg-secondary">
          <div className="md:flex-1 md:mr-10 ">
            <div className="flex flex-col gap-2 py-12">
              <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
                Get correct Resources for yourself
              </h1>
              With our outstanding assets, we convene business and technology
              talent and leaders, invest in innovation in our training programs,
              and conduct research to understand and track changes in business
              and socio economic fraternity.
            </div>
          </div>
          <div className="hidden h-full md:flex justify-end w-2/3 relative">
            <img
              className="h-[100%] w-full object-cover"
              src={Landing}
              alt="Handshake"
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center gap-4 p-6 py-12">
        <h1 className="font-pt-serif text-4xl font-bold mb-0 text-primary-accent">
          What do we have in store for you?
        </h1>
        <p className="lg:w-1/2 text-center mb-2">
          To begin your tranformational journey, our team has a plethora of well
          researched and developed resources which will lead your way to the
          right directions. To know more, navigate below.
        </p>

        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-3 gap-10 px-6">
          {[
            {
              title: "Blogs",
              description: `Stay in touch with the latest updates from about businesses and transformation practises. `,
              image: FeedbackImage,
              href: "/resources/blogs",
            },
            {
              title: "Surveys",
              description: `Help us understand you better and get the right roadmap for your evolutionary journey. `,
              image: SharingImage,
              href: "/resources/surveys",
            },
            {
              title: "Case Studies",
              description: `Understand the pathways of different businesses and get access to a pool of knowledgeable sources. `,
              image: ReadingImage,
              href: "/resources/case-studies",
            },
          ].map(({ title, description, image, href }, i) => (
            <div
              key={i}
              className="w-full h-[280px] md:w-1/5 xl:w-1/6 lg:w-1/6 flex flex-col bg-white hover:shadow-lg p-3 rounded-md border border-[#B8DFF6]  shadow-lg"
            >
              <a href={href}>
                <div className="h-20 w-20 px-2.5 mb-4">
                  <img
                    className="h-full w-full object-contain"
                    src={image}
                    alt="Feedback"
                  />
                </div>

                <div className="pt-4 px-2.5 pb-2.5 mb-8">
                  <p className="pt-1 text-primary-accent uppercase text-xl font-bold">
                    {title}
                  </p>
                  <p className="pt-1 text-gray-600">{description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
