import Three from "app/assets/CaseStudyCovers/3.png";
import Four from "app/assets/CaseStudyCovers/4.png";
import Five from "app/assets/CaseStudyCovers/5.png";
import Six from "app/assets/CaseStudyCovers/6.png";
import Seven from "app/assets/CaseStudyCovers/7.png";
import Eight from "app/assets/CaseStudyCovers/8.png";

export default function Blogs() {
  return (
    <>
      <section className="flex flex-col justify-center pb-10 pt-32 px-4">
        <h1 className="mt-6 font-pt-serif text-4xl text-center font-bold text-primary-accent mb-2">
          Blogs and Articles
        </h1>
        <p className="font-montserrat text-center font-normal mb-10">
          Refer to the latest updates from our team and <br /> understand more
          abour career and life transformation.
        </p>

        {/* blog posts 2 row responsive grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-48">
          {[
            {
              title: "Learn form the Legend",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Three,
            },
            {
              title: "Expand businesses scalably",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Four,
            },
            {
              title: "Transformation begins here!",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Five,
            },
            {
              title: "Why tweet when you can rest?",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Six,
            },
            {
              title: "How every habit counts...",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Seven,
            },
            {
              title: "Internet <<<<<< Sleep",
              description: `Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them.`,
              coverImage: Eight,
            },
          ].map((post, index) => (
            <a href={`/resources/blogs/${index + 1}`} key={index}>
              <div className="mx-auto border flex flex-col justify-center items-stretch md:justify-center p-5 mt-10 w-full md:w-[500px] hover:shadow-2xl">
                <div className="flex flex-col justify-center items-center md:items-start">
                  <img
                    className="w-full h-[250px] object-cover"
                    src={post.coverImage}
                    alt="Blog Cover"
                  />
                </div>
                <div className="flex flex-col justify-between gap-2 h-auto inset-0">
                  <p className="font-montserrat text-2xl font-semibold text-black mt-2">
                    {post.title}
                  </p>
                  <p className="font-montserrat text-justify font-normal flex-1">
                    {post.description}
                  </p>
                  <div className="flex flex-row justify-between text-sm mt-2">
                    <p className="text-gray-400">28th March 2022</p>
                    <svg
                      className="w-3 h-3"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4.5001 2.39998C3.94314 2.39998 3.409 2.62122 3.01517 3.01505C2.62135 3.40888 2.4001 3.94302 2.4001 4.49998V13.5C2.4001 14.6592 3.3409 15.6 4.5001 15.6H13.5001C14.0571 15.6 14.5912 15.3787 14.985 14.9849C15.3788 14.5911 15.6001 14.0569 15.6001 13.5V11.1C15.6001 10.8613 15.6949 10.6324 15.8637 10.4636C16.0325 10.2948 16.2614 10.2 16.5001 10.2C16.7388 10.2 16.9677 10.2948 17.1365 10.4636C17.3053 10.6324 17.4001 10.8613 17.4001 11.1V13.5C17.4001 14.5343 16.9892 15.5263 16.2578 16.2577C15.5264 16.9891 14.5344 17.4 13.5001 17.4H4.5001C3.46575 17.4 2.47377 16.9891 1.74238 16.2577C1.01099 15.5263 0.600098 14.5343 0.600098 13.5V4.49998C0.600098 3.46563 1.01099 2.47365 1.74238 1.74226C2.47377 1.01087 3.46575 0.599976 4.5001 0.599976H6.9001C7.13879 0.599976 7.36771 0.694797 7.53649 0.863579C7.70528 1.03236 7.8001 1.26128 7.8001 1.49998C7.8001 1.73867 7.70528 1.96759 7.53649 2.13637C7.36771 2.30515 7.13879 2.39998 6.9001 2.39998H4.5001ZM9.6001 1.49998C9.6001 1.26128 9.69492 1.03236 9.8637 0.863579C10.0325 0.694797 10.2614 0.599976 10.5001 0.599976H16.5001C16.7388 0.599976 16.9677 0.694797 17.1365 0.863579C17.3053 1.03236 17.4001 1.26128 17.4001 1.49998V7.49998C17.4001 7.73867 17.3053 7.96759 17.1365 8.13637C16.9677 8.30515 16.7388 8.39998 16.5001 8.39998C16.2614 8.39998 16.0325 8.30515 15.8637 8.13637C15.6949 7.96759 15.6001 7.73867 15.6001 7.49998V3.67198L11.1361 8.13597C11.0537 8.2244 10.9543 8.29532 10.8439 8.34451C10.7335 8.3937 10.6144 8.42015 10.4935 8.42229C10.3727 8.42442 10.2526 8.40219 10.1406 8.35692C10.0285 8.31166 9.92671 8.24428 9.84125 8.15882C9.75579 8.07336 9.68841 7.97156 9.64315 7.85949C9.59788 7.74743 9.57565 7.62739 9.57779 7.50655C9.57992 7.38571 9.60637 7.26653 9.65556 7.15613C9.70475 7.04573 9.77567 6.94637 9.8641 6.86398L14.3281 2.39998H10.5001C10.2614 2.39998 10.0325 2.30515 9.8637 2.13637C9.69492 1.96759 9.6001 1.73867 9.6001 1.49998Z"
                        fill="black"
                        fill-opacity="0.25"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
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
