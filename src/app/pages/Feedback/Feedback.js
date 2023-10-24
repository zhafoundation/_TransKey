export default function Feedback() {
  return (
    <>
      <section className="flex flex-col justify-center pt-32 px-4">
        <h1 className="mt-6 font-montserrat uppercase text-base text-center font-bold text-black mb-2">
          Feedback
        </h1>
        <p className="font-montserrat text-center font-normal mb-10">
          We thank you for trusting TransKey with your development <br /> goals
          and growth. We would to hear your feedback about <br /> our services
          so that we can get better every time.
        </p>
      </section>
      <section className="inset-x-0 z-[-1] md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary bg-feedback bg-cover bg-center"></section>
      <section className="flex items-center justify-center md:py-12 md:px-24">
        <section className="bg-gray-200 h-[700px] w-full flex justify-center p-12">
          Google forms
        </section>
      </section>
      {/* <section className="w-full lg:w-4/5 container mx-auto flex flex-row items-center justify-center py-12">
        <p className="text-2xl font-pt-serif text-primary-accent text-center">
          To get started on your Business Transformation, <br /> connect with
          us!
        </p>
      </section> */}
    </>
  );
}
