export default function Questionaire() {
  return (
    <>
      <section className="flex flex-col justify-center pt-32 px-4">
        <h1 className="mt-6 font-montserrat uppercase text-base text-center font-bold text-black mb-2">
          Self Awareness Questionnaire
        </h1>
        <p className="font-montserrat text-center font-normal mb-10">
          Introspect your life journey. We will use that questionnaire <br/>
          to know more about you. If you feel that you want to refill that<br/>
          please fill this out as honestly as possible.
        </p>
      </section>
      <section className="flex items-center justify-center md:py-12 md:px-24">
        {/* <section className="bg-gray-200 h-[auto] w-full flex justify-center p-12"> */}
        <iframe
          id="questionnaire_iframe"
          onLoad={(e) => {
            e.target.style.height =
              e.target.contentWindow.document.body.scrollHeight + "px";
          }}
          title="Questionnaire"
          src="https://docs.google.com/forms/d/e/1FAIpQLSdUDUoI5p8T4PTY1WCvCL4pkho5yGT-6epKtNGKNzM2gQouxg/viewform?embedded=true"
          width="100%"
          height="1600"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
        >
          Loading…
        </iframe>
        {/* </section> */}
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
