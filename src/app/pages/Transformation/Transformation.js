import One from "app/assets/BlogCovers/1.png";
import Two from "app/assets/BlogCovers/2.png";
import Three from "app/assets/BlogCovers/3.png";
import Landing from "app/assets/images/Transformation.png";

export default function TransformationConsultation() {
  return (
    <>
      <section className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
            How does&nbsp;
            <span className="relative bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              Transformation
              <div className="absolute inset-0 bottom-3 top-6 bg-primary-accent/20"></div>
            </span>
            <br /> help afterall?
          </h1>

          <p className="font-montserrat font-normal mb-7">
            It all starts with a strategy—without clear, big picture objectives
            and plans on how to get there, any business transformation is
            destined to fail. This strategy must also be apparent to downstream
            individuals to ensure nothing is lost in translation, as a business
            transformation’s steps and processes shouldn’t be left open to
            interpretation. How can it help you? Keep reading...
          </p>
        </div>
        <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <img src={Landing} alt="Macbook" />
        </div>
      </section>

      <section className="flex flex-col justify-center pt-6 pb-10">
        <p className="font-montserrat text-center uppercase font-semibold mb-2 text-zinc-800">
          Consultation Services
        </p>
        <h1 className="font-pt-serif text-4xl text-center font-bold text-primary-accent mb-2">
          Here’s How !
        </h1>

        {/* blog posts */}
        <div className="flex flex-col md:flex-col justify-center items-center md:items-start md:justify-between md:px-48 px-4">
          {[
            {
              title: "Strategy Consulting",
              description: `Strategy consulting is one of the most important types of business consulting, in which a consultant acts as an advisor to a firm by assisting it in developing and implementing a long-term blueprint or strategic plan. Such a plan aids in the establishment of the company’s long-term direction, as well as the creation of a map that outlines the company’s short-term direction to achieve all long-term objectives. Working with financial experts to ensure that projects are financially sustainable and successful, as well as that all plans can be realized with current resources and financial assets, is part of this process. `,
              coverImage: One,
            },
            {
              title: "Advisory Services",
              description: `Change management strategies that will ensure the success of your strategic transformation.
              Many organizations invest in enterprise technology systems only to realize that they don’t achieve their intended results. Integrating a change management strategy early in your initiative planning will significantly improve the success of your implementation.`,
              coverImage: Two,
            },
            {
              title: "IT Agile Transformation",
              description: `Agile transformation is the process of transitioning an entire organization to a nimble, reactive approach based on agile principles.
              This is a complete transformation of the entire organization and extends far beyond product development. The goal is to breathe new life into the organization by creating an environment that embraces creativity and innovation, empowering employees, and reducing unnecessary layers of management.
              The end result includes cross-functional or self-organized teams, a renewed focus on customer satisfaction, a reduction in processes and plans in favor of action, and increased levels of internal communication and information sharing.`,
              coverImage: Three,
            },
          ].map((post, index) => (
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start md:justify-between px-5 md:space-x-10 space-y-5 md:space-y-0 mt-10">
              <div className="flex flex-col justify-center items-center md:items-start">
                <img
                  className="w-[400px]"
                  src={post.coverImage}
                  alt="Blog Cover"
                />
              </div>
              <div className="flex-1">
                <p className="font-pt-serif text-2xl font-semibold text-black mt-2 mb-4">
                  {post.title}
                </p>
                <p className="font-montserrat text-justify font-normal">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-full lg:w-4/5 container mx-auto flex flex-row items-center justify-center py-12">
        <p className="text-2xl font-pt-serif text-primary-accent text-center">
          To get started on your Business Transformation, <br /> connect with
          us!
        </p>
      </section>
    </>
  );
}
