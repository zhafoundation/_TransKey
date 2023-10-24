import AWSLogo from "app/assets/BrandLogos/aws.png";
import LookaLogo from "app/assets/BrandLogos/looka.png";
import ViberLogo from "app/assets/BrandLogos/viber.png";
import VTLogo from "app/assets/BrandLogos/VT.png";
import WikitechLogo from "app/assets/BrandLogos/wikitech.png";
import WixLogo from "app/assets/BrandLogos/Wix.png";
import CardIconOne from "app/assets/homepage-card-icons/1.png";
import CardIconTwo from "app/assets/homepage-card-icons/2.png";
import CardIconThree from "app/assets/homepage-card-icons/3.png";
import CardIconFour from "app/assets/homepage-card-icons/4.png";
import CardIconFive from "app/assets/homepage-card-icons/5.png";
import Landing from "app/assets/images/Landing.png";
import Landing2 from "app/assets/images/Landing2.png";
import Landing3 from "app/assets/images/Landing3.png";
import UserLanding from "app/assets/images/UserLanding.png";

export default function Homepage() {
  return (
    <>
      <section className="pt-32 md:mt-0 md:h-screen flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
        <div className="md:flex-1 md:mr-10">
          <h1 className="font-pt-serif text-4xl font-bold mb-7 text-primary-accent">
            <span className="relative bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
              Transformation
              <div className="absolute inset-0 bottom-3 top-6 bg-primary-accent/20"></div>
            </span>
            &nbsp;is the key
            <br /> to unlock the Creativity
          </h1>

          <p className="font-montserrat font-normal mb-7">
            Our objective is to identify, mould and transform resources in
            consonance with the values and culture of each uniquely modeled
            organization. Thus delivering to your needs as – a Change Catalyst,
            Culture Binder, Skill Multiplier, Innovator, Benchmarker, Motivator,
            Knowledge Manager, and Expert Consultant.
          </p>
          <div className="font-montserrat flex justify-center md:justify-start">
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
          </div>
        </div>
        <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
          <img src={Landing} alt="Macbook" />
        </div>
      </section>

      <section className="flex flex-col gap-4 px-6 mb-14">
        <div className="font-montserrat text-xl text-center">
          Companies growing worldwide with TransKey
        </div>
        <ul className="flex flex-wrap justify-center items-center gap-8">
          <li>
            <img src={ViberLogo} alt="" />
          </li>
          <li>
            <img src={WixLogo} alt="" />
          </li>
          <li>
            <img src={WikitechLogo} alt="" />
          </li>
          <li>
            <img src={VTLogo} alt="" />
          </li>
          <li>
            <img src={AWSLogo} alt="" />
          </li>
          <li>
            <img src={LookaLogo} alt="" />
          </li>
        </ul>
      </section>
      <section className="flex flex-col justify-center pt-6 pb-10">
        <p className="font-montserrat text-center uppercase font-semibold mb-0 text-zinc-800">
          Our Services
        </p>
        <h1 className="font-pt-serif text-4xl text-center font-bold text-primary-accent mb-2">
          <span className="relative bg-underline1 bg-left-bottom bg-no-repeat pb-2 bg-100%">
            Maximize
            <div className="absolute inset-0 bottom-3 top-6 bg-primary-accent/20"></div>
          </span>
          &nbsp;the value of <br /> your organisation
        </h1>
        <div className="flex flex-col justify-center text-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
          <div className="flex justify-around md:block mt-8 md:mt-0 md:flex-1">
            <img src={Landing2} alt="Macbook" />
          </div>
          <div className="md:flex-1 md:mr-10">
            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Business Strategy Development",
                  description:
                    "We are innovative business solution experts and can help your organization to Assess, Evaluate, Implement, Transform and evolve the strategy that’s right for your business.",
                },
                {
                  title: "Capability Development",
                  description:
                    "Our multiphase team of consultants, who are highly experienced and specialize in the industry / sectors that they serve .",
                },
                {
                  title: "Transformation Consulting",
                  description:
                    "We continually evaluate new innovations, capabilities and assist our clients invest in new development for maximizing their profits.",
                },
              ].map(({ title, description }) => (
                <div className="flex flex-row gap-4 text-start">
                  <div className="h-14 w-14 px-2.5 flex items-center rounded-full mb-8 bg-primary-accent">
                    <svg
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-10 w-10 text-white"
                    >
                      <path
                        d="M33.5938 21.2184L28.6884 20.5075L26.4956 16.0631C26.4325 15.9357 26.3351 15.8285 26.2143 15.7535C26.0936 15.6786 25.9542 15.6389 25.8121 15.6389C25.67 15.6389 25.5306 15.6786 25.4099 15.7535C25.2891 15.8285 25.1917 15.9357 25.1286 16.0631L22.9359 20.5055L18.0304 21.2164C17.8898 21.237 17.7579 21.2964 17.6493 21.3881C17.5408 21.4797 17.4601 21.5999 17.4162 21.735C17.3724 21.8701 17.3672 22.0148 17.4012 22.1527C17.4353 22.2906 17.5072 22.4162 17.6089 22.5154L21.1575 25.9746L20.3196 30.8597C20.2944 31.0007 20.3094 31.1459 20.3629 31.2787C20.4164 31.4114 20.5062 31.5265 20.6221 31.6106C20.738 31.6946 20.8752 31.7443 21.018 31.754C21.1609 31.7637 21.3035 31.7329 21.4297 31.6651L25.8172 29.3587L30.2047 31.6651C30.3305 31.7313 30.4723 31.7608 30.6141 31.7506C30.7559 31.7403 30.8919 31.6905 31.0069 31.6069C31.1219 31.5233 31.2112 31.4093 31.2647 31.2776C31.3182 31.1459 31.3338 31.0019 31.3097 30.8618L30.4687 25.9766L34.0173 22.5174C34.4673 22.0969 34.2062 21.2926 33.5938 21.2184ZM29.1159 25.1651C29.0277 25.2515 28.9618 25.358 28.9238 25.4755C28.8857 25.5929 28.8768 25.7178 28.8976 25.8395L29.5415 29.5973L26.1666 27.8281C26.057 27.7702 25.935 27.7399 25.8111 27.7399C25.6872 27.7399 25.5652 27.7702 25.4556 27.8281L22.0807 29.6024L22.7246 25.8446C22.7454 25.7229 22.7364 25.598 22.6984 25.4805C22.6604 25.3631 22.5944 25.2566 22.5062 25.1702L19.7752 22.5093L23.5493 21.9608C23.6715 21.943 23.7875 21.8956 23.8873 21.8229C23.9871 21.7502 24.0677 21.6543 24.1221 21.5434L25.8101 18.1238L27.498 21.5434C27.5525 21.6543 27.6331 21.7502 27.7329 21.8229C27.8327 21.8956 27.9487 21.943 28.0709 21.9608L31.8449 22.5093L29.1159 25.1651Z"
                        fill="white"
                      />
                      <path
                        d="M40.0583 34.4206C38.9949 34.7253 37.4268 35.1985 35.8312 35.6891C35.8436 35.6428 35.862 35.5984 35.8861 35.5571L36.0648 35.2524C36.1362 35.1305 36.2525 35.0416 36.3888 35.0046C37.573 34.6846 39.4174 34.3576 39.4357 34.3546C39.6753 34.3046 39.9016 34.2046 40.0998 34.0609C40.298 33.9172 40.4635 33.7332 40.5854 33.521C40.7073 33.3088 40.783 33.0732 40.8073 32.8296C40.8316 32.5861 40.8041 32.3401 40.7266 32.108L39.6358 28.8702C39.6228 28.8317 39.6211 28.7904 39.6308 28.751C39.6405 28.7116 39.6613 28.6758 39.6906 28.6478L42.1748 26.3047C42.9101 25.6385 42.8919 24.3801 42.1312 23.7392L39.5677 21.4805C39.5374 21.4537 39.5154 21.4188 39.5042 21.38C39.4931 21.3411 39.4933 21.2999 39.5048 21.2611L40.4869 17.9878C40.556 17.7565 40.5762 17.5133 40.5461 17.2737C40.516 17.0342 40.4363 16.8036 40.312 16.5966C40.1878 16.3896 40.0217 16.2107 39.8245 16.0715C39.6273 15.9323 39.4032 15.8357 39.1666 15.7879L35.815 15.1146C35.7752 15.1064 35.7386 15.087 35.7095 15.0588C35.6804 15.0306 35.6599 14.9946 35.6505 14.9551L34.8644 11.6299C34.6562 10.66 33.5552 10.0466 32.6209 10.3848L29.3851 11.4766C29.3466 11.4891 29.3055 11.4905 29.2663 11.4806C29.2271 11.4707 29.1915 11.45 29.1637 11.4207L26.8206 8.93752C26.6549 8.76196 26.4543 8.62289 26.2318 8.52919C26.0093 8.43549 25.7697 8.38921 25.5282 8.39332C25.2868 8.39743 25.0489 8.45183 24.8297 8.55305C24.6105 8.65428 24.4148 8.80009 24.2551 8.98119L21.9964 11.5446C21.9697 11.5753 21.9347 11.5976 21.8955 11.6088C21.8564 11.62 21.8149 11.6196 21.776 11.6076L18.5037 10.6265C18.2724 10.557 18.0291 10.5366 17.7894 10.5666C17.5498 10.5965 17.319 10.6762 17.112 10.8005C16.9049 10.9248 16.726 11.091 16.5869 11.2883C16.4477 11.4857 16.3513 11.71 16.3038 11.9468L15.6294 15.2984C15.6215 15.338 15.6024 15.3744 15.5743 15.4034C15.5462 15.4324 15.5103 15.4527 15.471 15.4619L12.1458 16.248C11.9117 16.3037 11.6916 16.4075 11.4997 16.5529C11.3078 16.6982 11.1483 16.8819 11.0312 17.0922C10.9141 17.3025 10.842 17.5349 10.8195 17.7746C10.7971 18.0143 10.8247 18.256 10.9007 18.4844L11.9915 21.7222C12.0044 21.7607 12.0061 21.8022 11.9962 21.8416C11.9863 21.881 11.9652 21.9168 11.9356 21.9446L9.4453 24.2887C8.70999 24.9529 8.72827 26.2184 9.48897 26.8542L12.0524 29.1119C12.0876 29.1454 12.1114 29.1891 12.1205 29.2368C12.1296 29.2845 12.1236 29.3339 12.1032 29.378L11.4562 32.1598C9.64333 32.4829 7.8887 33.0744 6.25015 33.9148C6.16245 33.9629 6.0851 34.0279 6.02251 34.1059C5.95992 34.184 5.91331 34.2736 5.88534 34.3696C5.85738 34.4657 5.84861 34.5663 5.85954 34.6657C5.87046 34.7652 5.90086 34.8615 5.94901 34.9492C5.99716 35.0369 6.06211 35.1142 6.14015 35.1768C6.21819 35.2394 6.3078 35.286 6.40385 35.314C6.49991 35.342 6.60053 35.3507 6.69997 35.3398C6.79941 35.3289 6.89573 35.2985 6.98343 35.2503C7.02405 35.228 11.0459 33.0546 15.343 33.4963C17.6231 33.731 18.9323 34.5739 20.088 35.3184C20.9493 35.8729 21.7638 36.397 22.7998 36.5534C27.5163 37.2643 29.1911 37.7518 29.1982 39.0924C29.2114 39.8704 27.6504 40.2096 24.2501 39.6947C22.9871 39.4896 21.7361 39.2167 20.5024 38.8771C20.3086 38.8228 20.1011 38.8473 19.9254 38.9455C19.7496 39.0436 19.6198 39.2073 19.5644 39.4008C19.509 39.5943 19.5324 39.8019 19.6296 39.9782C19.7267 40.1545 19.8897 40.2852 20.083 40.3417C21.778 40.7672 30.9359 43.3499 30.7125 38.8741C32.4208 38.3358 37.9234 36.6113 40.4757 35.8821C42.3851 35.3458 43.3591 36.1451 41.926 37.2552C40.4818 38.4546 26.6987 45.4726 24.9894 45.1852C18.4894 45.2055 6.94788 41.8265 6.83515 41.793C6.64134 41.7359 6.43279 41.7581 6.25537 41.8548C6.07795 41.9514 5.94619 42.1146 5.88909 42.3084C5.83199 42.5022 5.85421 42.7108 5.95087 42.8882C6.04753 43.0656 6.21072 43.1974 6.40452 43.2545C6.43397 43.2626 9.38843 44.132 13.1239 44.981C18.1716 46.1317 22.1091 46.7076 24.9945 46.7076C28.0983 46.6985 40.9591 39.841 42.8218 38.4861C43.9745 37.6482 44.4234 36.4173 43.939 35.425C43.5023 34.5313 42.25 33.7939 40.0583 34.4206ZM23.0303 35.0462C22.3194 34.9396 21.6988 34.5384 20.9168 34.0377C18.6378 32.4219 15.8525 31.6822 13.0721 31.9546L13.586 29.7436C13.6747 29.4287 13.6728 29.0952 13.5805 28.7813C13.4881 28.4674 13.3091 28.186 13.064 27.9693L10.4995 25.7106C10.4775 25.6908 10.46 25.6666 10.4479 25.6395C10.4359 25.6125 10.4297 25.5832 10.4297 25.5537C10.4297 25.5241 10.4359 25.4948 10.4479 25.4678C10.46 25.4408 10.4775 25.4165 10.4995 25.3967L12.9807 23.0547C13.222 22.8269 13.3931 22.5347 13.4738 22.2127C13.5544 21.8908 13.5412 21.5525 13.4357 21.2378L12.3439 17.9999C12.3343 17.972 12.3307 17.9423 12.3334 17.9128C12.336 17.8834 12.3447 17.8548 12.3591 17.829C12.3735 17.8031 12.3931 17.7806 12.4167 17.7628C12.4403 17.745 12.4674 17.7324 12.4962 17.7257L15.8214 16.9396C16.1444 16.863 16.4387 16.6954 16.6694 16.4567C16.9002 16.2181 17.0577 15.9183 17.1234 15.5929L17.7968 12.2414C17.8027 12.2125 17.8146 12.1851 17.8317 12.1611C17.8488 12.137 17.8706 12.1167 17.8959 12.1016C17.9212 12.0864 17.9494 12.0766 17.9787 12.0729C18.0079 12.0692 18.0376 12.0715 18.0659 12.0799L21.3393 13.062C21.6573 13.1566 21.9957 13.1584 22.3147 13.0671C22.6337 12.9759 22.9201 12.7955 23.14 12.5471L25.3977 9.98362C25.417 9.96106 25.441 9.943 25.468 9.93072C25.4951 9.91844 25.5244 9.91222 25.5541 9.91252C25.5835 9.91239 25.6125 9.91817 25.6396 9.92951C25.6666 9.94085 25.6911 9.95753 25.7116 9.97854L28.0546 12.4658C28.2827 12.7068 28.5749 12.8775 28.8968 12.958C29.2187 13.0384 29.5569 13.0251 29.8716 12.9198L33.1094 11.828C33.1374 11.8187 33.167 11.8154 33.1963 11.8182C33.2256 11.8209 33.2541 11.8297 33.2799 11.8441C33.3056 11.8584 33.3282 11.8779 33.346 11.9013C33.3639 11.9248 33.3767 11.9517 33.3836 11.9803L34.1697 15.3055C34.2466 15.6284 34.4142 15.9225 34.6528 16.1532C34.8915 16.3839 35.1911 16.5416 35.5164 16.6075L38.868 17.2819C38.8974 17.2875 38.9252 17.2994 38.9494 17.317C38.9736 17.3346 38.9937 17.3573 39.0081 17.3835C39.0238 17.4085 39.0338 17.4366 39.0375 17.4659C39.0412 17.4952 39.0384 17.5249 39.0294 17.5531L38.0453 20.8203C37.9506 21.1383 37.9487 21.4768 38.04 21.7958C38.1312 22.1149 38.3117 22.4012 38.5602 22.621L41.1247 24.8828C41.147 24.9022 41.1649 24.926 41.1774 24.9528C41.1898 24.9795 41.1965 25.0086 41.197 25.0381C41.1975 25.0676 41.1917 25.0969 41.1801 25.124C41.1686 25.1512 41.1514 25.1756 41.1298 25.1956L38.6435 27.5397C38.402 27.7674 38.2307 28.0596 38.1499 28.3815C38.0691 28.7035 38.0821 29.0419 38.1875 29.3567L39.2793 32.5945C39.2889 32.6224 39.2925 32.652 39.2898 32.6814C39.2872 32.7108 39.2784 32.7393 39.2641 32.7651C39.2375 32.8138 39.1931 32.8502 39.1401 32.8667C38.8862 32.9124 37.1698 33.2221 35.9917 33.541C35.4737 33.6814 35.0307 34.018 34.7567 34.4795L34.579 34.7781C34.3336 35.1929 34.2379 35.6794 34.3078 36.1563C32.5548 36.6996 30.9623 37.1993 30.2037 37.438C29.0976 35.9592 26.3321 35.5469 23.0303 35.0462ZM24.7467 4.83541V7.06268C24.7812 8.07018 26.2356 8.07119 26.2701 7.06268V4.83541C26.2356 3.82791 24.7812 3.8269 24.7467 4.83541Z"
                        fill="white"
                      />
                      <path
                        d="M20.7126 7.35923C20.616 7.38515 20.5254 7.42986 20.446 7.4908C20.3667 7.55174 20.3001 7.62772 20.2501 7.71439C20.2001 7.80107 20.1677 7.89674 20.1547 7.99595C20.1417 8.09516 20.1484 8.19596 20.1743 8.29259L20.6923 10.2223C20.9889 11.1902 22.3915 10.8073 22.164 9.82719L21.646 7.89751C21.6201 7.80087 21.5754 7.71028 21.5144 7.63092C21.4535 7.55157 21.3775 7.48499 21.2908 7.43501C21.2041 7.38502 21.1085 7.3526 21.0093 7.3396C20.9101 7.32659 20.8093 7.33326 20.7126 7.35923ZM12.4678 12.3013C12.397 12.372 12.3409 12.456 12.3025 12.5484C12.2642 12.6409 12.2445 12.74 12.2445 12.84C12.2445 12.9401 12.2642 13.0392 12.3025 13.1317C12.3409 13.2241 12.397 13.3081 12.4678 13.3788L13.8815 14.7926C14.6189 15.4812 15.6467 14.4534 14.9591 13.715L13.5443 12.3013C13.4737 12.2305 13.3898 12.1744 13.2974 12.1361C13.2051 12.0978 13.1061 12.0781 13.0061 12.0781C12.9061 12.0781 12.8071 12.0978 12.7147 12.1361C12.6223 12.1744 12.5384 12.2305 12.4678 12.3013ZM7.79693 20.7045C7.74606 20.8991 7.77421 21.1059 7.87524 21.2798C7.97628 21.4537 8.14199 21.5806 8.33622 21.6328L10.2659 22.1508C11.2429 22.3793 11.6289 20.9767 10.66 20.6791L8.73029 20.1612C8.63332 20.1354 8.53223 20.1291 8.43281 20.1425C8.33338 20.1559 8.23758 20.1887 8.15088 20.2392C8.06418 20.2897 7.98828 20.3568 7.92755 20.4366C7.86681 20.5165 7.82242 20.6075 7.79693 20.7045ZM7.63747 30.5784C7.69006 30.7735 7.81787 30.9397 7.99285 31.0406C8.16783 31.1415 8.37569 31.1689 8.57083 31.1167L10.7036 30.5449C11.6675 30.2504 11.2927 28.8448 10.3086 29.0733L8.17575 29.6461C8.07915 29.6719 7.98859 29.7165 7.90924 29.7774C7.82989 29.8382 7.76332 29.9141 7.71332 30.0007C7.66333 30.0873 7.6309 30.1829 7.61788 30.282C7.60487 30.3811 7.61152 30.4819 7.63747 30.5784ZM40.4218 28.8184C40.3959 28.9149 40.3892 29.0157 40.4023 29.1148C40.4153 29.2139 40.4477 29.3095 40.4977 29.3961C40.5477 29.4827 40.6143 29.5586 40.6936 29.6195C40.773 29.6803 40.8635 29.7249 40.9601 29.7507L42.8898 30.2687C43.8668 30.4972 44.2528 29.0946 43.2839 28.797L41.3542 28.2791C41.159 28.227 40.9512 28.2545 40.7764 28.3557C40.6015 28.4568 40.474 28.6232 40.4218 28.8184ZM42.7365 19.5792L40.8068 20.0972C39.9516 20.342 40.1243 21.582 41.0038 21.5942C41.0505 21.6349 43.0351 21.0671 43.1366 21.0509C44.0954 20.7563 43.7196 19.3517 42.7365 19.5792ZM36.7747 14.5864C36.9769 14.5867 37.1708 14.5067 37.314 14.364L38.7278 12.9492C38.8005 12.8789 38.8585 12.7948 38.8984 12.7019C38.9382 12.6089 38.9592 12.509 38.96 12.4078C38.9609 12.3067 38.9416 12.2064 38.9032 12.1128C38.8649 12.0192 38.8083 11.9342 38.7367 11.8627C38.6652 11.7912 38.5801 11.7347 38.4865 11.6965C38.3928 11.6582 38.2925 11.639 38.1914 11.6399C38.0902 11.6408 37.9903 11.6619 37.8974 11.7018C37.8045 11.7418 37.7204 11.7999 37.6502 11.8727L36.2365 13.2864C35.7551 13.7546 36.1115 14.5986 36.7747 14.5864ZM29.3922 7.7411L28.8742 9.67079C28.8219 9.86594 28.8493 10.0739 28.9504 10.2488C29.0514 10.4237 29.2178 10.5514 29.413 10.6036C29.6081 10.6559 29.816 10.6285 29.991 10.5274C30.1659 10.4264 30.2936 10.26 30.3458 10.0649L30.8638 8.13516C31.0913 7.15305 29.6867 6.77524 29.3922 7.7411ZM16.4724 10.4081C17.0401 10.4224 17.4322 9.75407 17.1315 9.26555L16.0143 7.33587C15.9643 7.24917 15.8977 7.17318 15.8183 7.11223C15.739 7.05127 15.6484 7.00655 15.5517 6.98062C15.455 6.95468 15.3542 6.94804 15.255 6.96107C15.1557 6.9741 15.06 7.00655 14.9733 7.05657C14.8866 7.10659 14.8106 7.17319 14.7497 7.25257C14.6887 7.33195 14.644 7.42257 14.6181 7.51923C14.5921 7.6159 14.5855 7.71673 14.5985 7.81596C14.6116 7.9152 14.644 8.01089 14.694 8.09759L15.8112 10.0273C15.8781 10.1434 15.9745 10.2397 16.0906 10.3066C16.2067 10.3735 16.3384 10.4085 16.4724 10.4081ZM10.3187 15.7422L8.38904 14.625C7.49935 14.1507 6.77114 15.4101 7.62732 15.9453L9.557 17.0625C9.67281 17.1293 9.80419 17.1643 9.93786 17.1641C10.7026 17.1641 10.9931 16.1322 10.3187 15.7422ZM8.4195 25.5206C8.4195 25.3186 8.33925 25.1249 8.1964 24.982C8.05355 24.8392 7.85981 24.7589 7.65779 24.7589H5.43052C4.422 24.7934 4.422 26.2468 5.43052 26.2824H7.65779C7.85981 26.2824 8.05355 26.2021 8.1964 26.0592C8.33925 25.9164 8.4195 25.7227 8.4195 25.5206ZM46.1936 24.1516H43.9664C42.9589 24.1861 42.9579 25.6405 43.9664 25.675H46.1936C47.2011 25.6405 47.2022 24.1871 46.1936 24.1516ZM43.9765 14.3823C43.9265 14.2956 43.8598 14.2197 43.7804 14.1588C43.701 14.0979 43.6104 14.0533 43.5137 14.0274C43.417 14.0016 43.3162 13.9951 43.217 14.0082C43.1178 14.0213 43.0221 14.0539 42.9355 14.104L41.0058 15.2212C40.1486 15.7584 40.8809 17.0148 41.7676 16.5415L43.6972 15.4243C43.7841 15.3743 43.8603 15.3077 43.9213 15.2282C43.9824 15.1488 44.0272 15.0581 44.0532 14.9613C44.0791 14.8645 44.0857 14.7635 44.0725 14.6641C44.0594 14.5648 44.0268 14.469 43.9765 14.3823ZM35.0807 7.03321L33.9635 8.9629C33.6639 9.45141 34.0559 10.1197 34.6226 10.1055C34.7565 10.1058 34.888 10.0707 35.0039 10.0038C35.1198 9.93694 35.216 9.84062 35.2828 9.72462L36.4 7.79493C36.8743 6.90626 35.6149 6.17704 35.0807 7.03321Z"
                        fill="white"
                      />
                    </svg>
                  </div>
                  <div className="col-12 col-md-6">
                    <h1 className="font-montserrat font-bold text-xl">
                      {title}
                    </h1>
                    <p className="font-montserrat font-[14px]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* row with five cards */}
      <section className="flex flex-col items-center justify-center gap-4 px-6 py-10 bg-[#EBF2FA] ">
        <p className="font-montserrat uppercase font-semibold mb-0 text-zinc-800">
          Our Methods
        </p>
        <h1 className="font-pt-serif text-4xl text-center font-bold mb-7 text-primary-accent">
          Consulting and <br /> Transformation Processes
        </h1>
        <div className="w-full container mx-auto flex flex-wrap items-center justify-center mt-0 py-3 gap-10 px-6">
          {[
            {
              title: "Discovery",
              description: "Pathfinder & Assess",
              icon: CardIconOne,
            },
            {
              title: "Design Thinking",
              description: "Solution, Working Agreement & Roadmap",
              icon: CardIconTwo,
            },
            {
              title: "Planning",
              description:
                "Structure, Identify Focus groups, Setup Governance, Prepare & Readiness",
              icon: CardIconThree,
            },
            {
              title: "Implementation",
              description: "Train & Launch, Coach & Motivate, Evaluate.",
              icon: CardIconFour,
            },
            {
              title: "Improvement",
              description: "Adapt, Measure & Track",
              icon: CardIconFive,
            },
          ].map(({ title, description, icon }, i) => (
            <div
              key={i}
              className="w-full h-[300px] md:w-1/5 xl:w-1/6 lg:w-1/6 flex flex-col bg-white hover:shadow-lg p-3 rounded-md border border-[#B8DFF6]"
            >
              <a href="#">
                <div className="h-12 w-auto px-2.5 mb-6">
                  <img src={icon} alt="Card Icon" className="h-full w-auto" />
                </div>

                <div className="pt-4 px-2.5 pb-2.5 mb-8">
                  <p className="text-left text-primary-accent uppercase">
                    Phase {i + 1}:
                  </p>
                  <p className="pt-1  text-xl font-bold">{title}</p>
                  <p className="pt-1 text-gray-600">{description}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="px-6 flex flex-col justify-center pt-6 pb-10">
        <div className="px-6 md:px-52">
          <p className="font-montserrat uppercase font-semibold mb-0 text-zinc-800">
            Key next steps
          </p>
          <h1 className="font-pt-serif text-4xl font-bold text-primary-accent mb-2">
            Get started with your <br /> Evoulutionary Journey Now!
          </h1>
        </div>
        <div className="flex flex-col justify-center md:text-left md:flex-row md:justify-between md:items-center lg:px-48 md:px-12 px-4 bg-secondary">
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
                  className="col-12 col-md-4 border rounded-md p-4 flex flex-col gap-3"
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
          <div className="hidden md:flex justify-end w-1/2 relative">
            <div className="h-64 w-64 bg-white rounded-full absolute -top-12 left-12">
              <img src={UserLanding} alt="" />
            </div>
            <img height={300} width={380} src={Landing3} alt="Macbook" />
          </div>
        </div>
      </section>
    </>
  );
}
