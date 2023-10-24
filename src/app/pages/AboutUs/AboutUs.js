import CardIconOne from "app/assets/aboutus-card-icons/1.png";
import CardIconTwo from "app/assets/aboutus-card-icons/2.png";
import CardIconThree from "app/assets/aboutus-card-icons/3.png";
import CardIconFour from "app/assets/aboutus-card-icons/4.png";
import Dots from "app/assets/artifacts/bg-about-us.png";
import One from "app/assets/AvatarsAboutUs/1.png";
import Two from "app/assets/AvatarsAboutUs/2.png";
import Three from "app/assets/AvatarsAboutUs/3.png";
import Four from "app/assets/AvatarsAboutUs/4.png";
import Five from "app/assets/AvatarsAboutUs/5.png";
import Six from "app/assets/AvatarsAboutUs/6.png";
import Seven from "app/assets/AvatarsAboutUs/7.png";
import Landing from "app/assets/images/AboutUs1.png";
import Landing3 from "app/assets/images/AboutUs2.png";

export default function AboutUs() {
  return (
    <>
      <section className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
            We stand behind strong and&nbsp;
            <br />
            <span className="relative bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              impactful organisations
              <div className="absolute inset-0 bottom-3 top-6 bg-primary-accent/20"></div>
            </span>
          </h1>

          <p className="font-montserrat font-normal mb-7">
            We endeavor to successfully partner with organizations in the vision
            of empowering the most critical and valuable assets of the
            organizations. We employ dialogue, teaching, and research, both
            directly and in close partnership with key organizations and
            individuals with allied interests.
          </p>
          <div className="font-montserrat flex justify-center md:justify-start gap-4">
            <div className="flex flex-col shadow-md py-4 px-6 rounded-lg">
              <h1 className="text-4xl font-montserrat text-primary-accent font-bold">
                23+
              </h1>
              <p className="text-black font-semibold">Organizations</p>
            </div>
            <div className="flex flex-col shadow-md py-4 px-6 rounded-lg">
              <h1 className="text-4xl font-montserrat text-primary-accent font-bold">
                50+
              </h1>
              <p className="text-black font-semibold">Consultations</p>
            </div>
          </div>
        </div>
        <div className="relative flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <img src={Landing} alt="Macbook" />
          <img
            className="absolute bottom-36 right-36 z-[-1]"
            src={Dots}
            alt="Macbook"
          />
        </div>
      </section>

      {/* row with five cards */}
      <section className="flex flex-col items-center justify-center gap-4 px-6 py-10 bg-[#EBF2FA] ">
        <p className="font-montserrat uppercase font-semibold mb-0 text-zinc-800">
          Our Values
        </p>
        <h1 className="font-pt-serif text-4xl text-center font-bold mb-7 text-primary-accent">
          What we value is <br /> what we deliver
        </h1>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-3 gap-10 px-6">
          {[
            {
              title: "Integrity",
              description: `Tell the truth. Be impeccable in your word.
              Our actions reflect our values. We treat everyone with respect and
              honesty.`,
              icon: CardIconOne,
            },
            {
              title: "Accountability",
              description: `We do what we say. Be results driven. We make and deliver on our
              commitments. We are responsible stewards of the company’s resources.
              Be an owner.`,
              icon: CardIconTwo,
            },
            {
              title: "Agility",
              description: `We are responsive to our clients’ and employee needs. We continually
                adjust direction and process to accommodate changes.`,
              icon: CardIconThree,
            },
            {
              title: "Courage",
              description: `Groups and individuals have the mental and moral strength to venture
              “outside the box.” Ask the hard questions. Make the hard decisions.`,
              icon: CardIconFour,
            },
          ].map(({ title, description, icon }, i) => (
            <div
              key={i}
              className="w-full h-[320px] md:w-1/5 xl:w-1/6 lg:w-1/6 flex flex-col bg-white hover:shadow-lg p-3 rounded-md border border-[#B8DFF6]"
            >
              <a href="#">
                <div className="h-12 w-auto px-2.5 mb-6">
                  <img src={icon} alt="Card Icon" className="h-full w-auto" />
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
      <section className="px-6 flex flex-col justify-center pt-6 pb-10">
        <div className="px-6 md:px-52">
          <p className="text-center font-montserrat uppercase font-semibold mb-0 text-zinc-800">
            Our Team
          </p>
          <h1 className="text-center font-pt-serif text-4xl font-bold text-primary-accent mb-2">
            We are innovative Business and <br /> Life Transformation experts
          </h1>
        </div>
        <div className="flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary py-10">
          <div className="md:flex-1 md:mr-10 ">
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Questionnaire",
                  content: `We build Professionals who consistently abide by their commitment
              towards work, their belief in teamwork and excelling in their chosen fields. We also transform the institution capabilities for the corporate world
              wherein they demonstrate their innovative ideas, industry standard processes & solutions and use their skills to the best advantage, however challenging might be situation. 
              `,
                },
                {
                  title: "Sharing Goals",
                  content: `We convene business and technology talent and leaders, invest in
                   innovation in our training programs, and conduct research to understand
                   and track changes in business and socio economic fraternity.`,
                },
              ].map(({ title, content }, i) => (
                <div
                  key={i}
                  className="col-12 col-md-4 rounded-md p-4 flex flex-col gap-3"
                >
                  <p className="font-montserrat font-[14px] mb-3">{content}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex justify-end w-1/2 relative">
            <div className=" w-64 bg-white absolute bottom-12 left-12">
              <div className="flex flex-col shadow-md py-4 px-6 rounded-lg">
                <h1 className="text-4xl font-montserrat text-primary-accent font-bold">
                  Karki A.
                </h1>
                <p className="text-black font-semibold">Transformation Coach</p>
              </div>
            </div>
            <img height={300} width={380} src={Landing3} alt="Macbook" />
          </div>
        </div>
      </section>

      <section className="mx-auto container w-full flex flex-row flex-wrap justify-center px-12">
        {[
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: One,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Two,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Three,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Four,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Five,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Six,
          },
          {
            name: "Roger Federers",
            designation: "Lead Guide",
            image: Seven,
          },
        ].map(({ name, designation, image }, i) => (
          <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col justify-center text-center p-12 px-14">
            <img className="rounded-full" src={image} alt="Macbook" />
            <h1 className="text-primary-accent font-semibold mt-4">{name}</h1>
            <p className="text-black font-semibold">{designation}</p>
          </div>
        ))}
      </section>

      <section className="w-full lg:w-4/5 container mx-auto flex flex-row items-center py-12">
        <div className="w-1/3 flex items-center justify-center">
          <svg
            viewBox="0 0 155 155"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-24 w-24"
          >
            <path
              d="M123.742 96.2644C123.248 94.5735 123.624 92.7886 124.775 91.45C134.639 80.1068 139.195 65.5697 137.668 50.4924C135.108 25.5515 115.17 5.44847 90.2758 2.70075C74.7288 0.986351 59.8159 5.73029 48.2614 16.0871C36.9652 26.2091 30.4598 40.6523 30.3424 55.8L17.6606 82.3614C16.8621 84.0288 16.8386 85.9545 17.5902 87.622C18.3417 89.3129 19.7742 90.5811 21.5356 91.1212L32.0568 94.2917V118.763C32.0568 123.507 35.9083 127.358 40.6523 127.358H60.1212C62.3288 127.358 64.3015 128.767 65.0061 130.858L72.0045 151.501C72.2394 152.229 72.9205 152.675 73.625 152.675C73.8129 152.675 74.0008 152.652 74.1886 152.581C75.0811 152.276 75.5742 151.289 75.2689 150.397L68.2705 129.777C67.0962 126.278 63.8083 123.93 60.1212 123.93H40.6523C37.8106 123.93 35.4856 121.605 35.4856 118.763V93C35.4856 92.2485 34.9924 91.5674 34.2644 91.3561L22.522 87.8098C21.7235 87.575 21.0659 86.9879 20.7371 86.2129C20.4083 85.4379 20.4083 84.5689 20.7841 83.8174L33.6303 56.9038C33.7477 56.6689 33.7947 56.4106 33.7947 56.1523C33.7947 41.85 39.9008 28.1583 50.5629 18.6235C61.3659 8.94771 75.3159 4.48559 89.9 6.10605C113.22 8.68938 131.867 27.5007 134.263 50.8447C135.719 64.9591 131.421 78.5803 122.192 89.1954C120.266 91.403 119.608 94.4326 120.454 97.2507L128.744 125.221C129.002 126.137 129.965 126.654 130.881 126.372C131.797 126.114 132.314 125.151 132.032 124.235L123.742 96.2644Z"
              fill="#1376BC"
              fill-opacity="0.3"
            />
            <path
              d="M73.6015 24.4947L71.9576 27.7122C71.5348 28.5576 71.8636 29.5909 72.7091 30.0372C72.9674 30.1546 73.2258 30.225 73.4841 30.225C74.1182 30.225 74.7053 29.8728 75.0106 29.2856L78.4864 22.4515C78.9091 21.6061 78.5803 20.5728 77.7348 20.1265L70.9242 16.6273C70.0788 16.2046 69.0455 16.5334 68.5992 17.3788C68.1765 18.2243 68.5053 19.2576 69.3508 19.7038L72.4038 21.2538C58.3598 26.4205 48.8485 39.7834 48.8485 55.119C48.8485 58.6417 49.3417 62.094 50.328 65.3819C50.5394 66.1334 51.2439 66.6031 51.972 66.6031C52.1364 66.6031 52.3008 66.5796 52.4651 66.5326C53.3811 66.2508 53.8977 65.3114 53.6159 64.3955C52.747 61.4129 52.2773 58.2894 52.2773 55.119C52.3242 41.2629 60.8962 29.1917 73.6015 24.4947ZM108.735 77.6175C102.488 84.1932 94.0803 87.8099 85.0152 87.8099C77.3356 87.8099 70.1258 85.1796 64.325 80.3887L67.7773 80.2712C68.7167 80.2478 69.4682 79.4493 69.4447 78.4864C69.4212 77.547 68.6227 76.772 67.6598 76.819L59.9803 77.0773C59.5341 77.1008 59.0879 77.2887 58.7826 77.6175C58.4773 77.9462 58.3129 78.3925 58.3129 78.8622L58.5712 86.5417C58.5947 87.4811 59.3697 88.2091 60.2856 88.2091C60.3091 88.2091 60.3326 88.2091 60.3561 88.2091C61.2955 88.1856 62.047 87.3872 62.0235 86.4243L61.9061 82.8546C68.3409 88.2091 76.5371 91.2387 85.0152 91.2387C95.0197 91.2387 104.343 87.2228 111.224 79.9659C111.882 79.2849 111.858 78.1811 111.154 77.5235C110.473 76.9129 109.392 76.9364 108.735 77.6175ZM125.714 59.6985C125.174 58.9235 124.117 58.7122 123.319 59.2288L120.665 61.0137C120.97 59.0879 121.158 57.1152 121.158 55.119C121.158 38.3273 109.768 23.8841 93.4462 19.9621C92.5538 19.7508 91.5909 20.3144 91.3795 21.2538C91.1682 22.1697 91.7318 23.1091 92.6477 23.3205C107.42 26.8667 117.706 39.9478 117.706 55.119C117.706 57.0447 117.518 58.947 117.189 60.8023L115.029 57.6084C114.489 56.8334 113.432 56.622 112.633 57.1387C111.835 57.6788 111.647 58.7356 112.164 59.5341L116.461 65.8985C116.79 66.3917 117.33 66.65 117.894 66.65C118.223 66.65 118.552 66.5561 118.857 66.3447L125.221 62.047C126.043 61.5538 126.255 60.497 125.714 59.6985Z"
              fill="#1376BC"
              fill-opacity="0.3"
            />
            <path
              d="M67.4955 43.2825C62.6811 48.4022 62.9629 56.7628 68.1061 61.9295L81.7977 75.6212C82.6902 76.5136 83.8644 77.0068 85.1326 77.0068C86.4008 77.0068 87.575 76.5136 88.4674 75.6212L102.183 61.9295C107.349 56.7628 107.631 48.4022 102.793 43.2825C100.327 40.6757 96.9924 39.1962 93.4227 39.1492C90.3227 39.0788 87.5045 40.0886 85.1561 41.9204C82.8076 40.0886 79.8955 39.0788 76.8894 39.1492C73.2962 39.1962 69.9614 40.6522 67.4955 43.2825ZM77.0773 42.578C79.6606 42.578 82.103 43.5878 83.9349 45.4197C84.2636 45.7484 84.6864 45.9128 85.1561 45.9128C85.6023 45.9128 86.0485 45.725 86.3773 45.4197C88.2561 43.5409 90.722 42.5075 93.3758 42.578C96.0295 42.625 98.472 43.7053 100.304 45.631C103.85 49.4121 103.615 55.6121 99.7636 59.4871L86.0485 73.2022C85.5788 73.6719 84.7333 73.6719 84.2636 73.2022L70.572 59.5106C66.7205 55.6591 66.4621 49.4356 70.0318 45.6545C71.8402 43.7288 74.3061 42.6484 76.9599 42.6015C76.9833 42.578 77.0303 42.578 77.0773 42.578Z"
              fill="#1376BC"
              fill-opacity="0.3"
            />
          </svg>
        </div>
        <p className="text-2xl font-pt-serif text-primary-accent text-center pr-6">
          The only way you survive is you continually transform <br /> into a
          valueable thing. That makes your organization <br /> to grow with
          scaling profits.
        </p>
      </section>
    </>
  );
}
