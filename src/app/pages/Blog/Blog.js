import One from "app/assets/BlogCovers/blog1.png";
import { useState } from "react";
import { useParams } from "react-router-dom";

const blogs = [
  {
    id: 1,
    title: "How every habit counts...",
    description: `Many people want to change some aspect of their lives. Others prefer to transform their lives by making significant, lasting changes.
    Transforming your life involves going beyond the way you live, co-creating a better life for yourself, and changing the way you live. You do this by using your thoughts, visualization, words, faith, actions, or a combination of them. You use them to change some of what is happening within you and in your life, to co-create what you truly desire, and to live differently. This process begins from within and results in significant changes in you and your life. As you change, your life will also change. You will have a better life. Your better life can be your best life ever -- the life of your dreams. If you are going through a major challenge or several challenges, they may seem to go on forever, but as day always follows night, so too your breakthrough will follow your challenges if you follow some of the advice presented. 
    <br/>
    <br/>
    1. Build and maintain a strong burning desire
    Desire is the driving force that propels us to achieve our goals. If you are serious about transforming your life, you can set this as one of your major goals. However, to achieve this goal, you must have a strong desire that is like a fire lit within you and you must maintain this strong desire until your life is transformed.
    <br/>
    <br/>
    2. Engage in transformative learning
    Transformative learning is about changing how you think and the thoughts you think. It involves changing your perspective and acting from a new, more empowering perspective. As the apostle Paul noted, "Do not conform any longer to the pattern of this world, but be transformed by the renewing of your mind." (Rom. 12:2) Transformative learning is one of the best ways to renew your mind and transform your life.
    <br/>
    <br/>
    3. Change your self-concept
    Have you ever asked yourself, "Who am I?" You are not your name. You are not your job title. You are not your body. You live in a body. What do you think about yourself? For many, these are deep questions. There is a tendency to believe who others tell us we are and this can limit us. Spend some time finding out who you really are and then change the concept you have of yourself to that of the real you. When you do this, you will change, and when you change your life will also change.
    <br/>
    <br/>
    4. Understand some basics of the co-creation process
    You may have heard others say that you create your reality. Really? We do not create anything. We are co-creator and we bring things into existence together with God and others. We co-create both good and undesirable things and events for ourselves and others. If you understand some basics of the co-creation process, this will help you to transform your life.`,
    coverImage: One,
    date: "28th March 2022",
    author: "John Doe",
  },
];

const getBlog = (id) => {
  return blogs.find((blog) => blog.id == id);
};

export default function Blog() {
  const [blog, setBlog] = useState(getBlog(useParams().id ?? "1"));

  return (
    <>
      <section className="flex flex-col justify-center pt-32 px-4">
        <h1 className="mt-6 font-pt-serif text-4xl text-center font-bold text-primary-accent mb-2">
          {blog.title}
        </h1>
        <div className="flex justify-between items-center md:px-24 text-sm">
          <p className="font-montserrat text-center mb-10">
            Posted on {blog.date}
          </p>
          <p className="font-montserrat text-center mb-10">
            Written By {blog.author}
          </p>
        </div>
        <img src={blog.coverImage} alt="" className="md:mx-24" />
        <p
          className="md:px-24 text-justify py-8"
          dangerouslySetInnerHTML={{
            __html: blog.description,
          }}
        ></p>
      </section>
    </>
  );
}
