import Image from "next/image";
import { Switch } from "@headlessui/react";
import { useState } from "react";

export default function Home() {
  const [enabled, setEnabled] = useState(true);
  function ThemeSwitch() {
    return (
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className={`${
          enabled ? "bg-gray-300" : "bg-pink-800"
        } relative inline-flex h-9 w-16 items-center rounded-full`}
      >
        <span
          className={`${
            enabled ? "translate-x-9" : "translate-x-2"
          } flex h-6 w-6 transform items-center justify-center rounded-full bg-white transition`}
        >
          {enabled ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-5 w-5 text-pink-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="h-5 w-5 text-pink-600"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </span>
      </Switch>
    );
  }

  function Achieve(props: { num: number; title: string; icon: JSX.Element }) {
    return (
      <div className="flex items-center justify-center space-x-4">
        <div className="flex items-center justify-center rounded-r-full bg-pink-50 p-5 dark:bg-gray-700/40">
          {props.icon}
        </div>

        <div className="flex flex-col items-center space-y-4">
          <h1 className="text-4xl font-bold text-pink-600 dark:text-white">
            {props.num}+
          </h1>
          <h1 className="font-jose text-2xl dark:text-white">{props.title}</h1>
        </div>
      </div>
    );
  }

  function Chips(props: { name: string }) {
    return (
      <span className=" flex items-center justify-center rounded-full border border-pink-200 bg-gray-100/70 px-2.5 py-2 text-xs dark:bg-transparent dark:text-white md:text-base">
        {props.name}
      </span>
    );
  }

  function Cards(props: { name: string; icon: JSX.Element; dec: string }) {
    return (
      <div className="flex flex-col  items-center justify-center space-y-4 bg-white bg-transparent  p-12 shadow-pink-300/20 hover:shadow-2xl dark:hover:shadow-pink-400">
        {props.icon}
        <h1 className="text-2xl dark:text-white">{props.name}</h1>
        <h1 className="text-center text-slate-500 dark:text-white">
          {props.dec}
        </h1>
      </div>
    );
  }

  function Card(props: { name: string; icon: JSX.Element; dec: string }) {
    return (
      <div className="flex flex-col  justify-center space-y-4 bg-white bg-transparent  p-12 shadow-2xl shadow-pink-300/30 dark:hover:shadow-pink-400">
        {props.icon}

        <h1 className="text-2xl dark:text-white">{props.name}</h1>
        <h1 className="text-slate-500 dark:text-white">{props.dec}</h1>
      </div>
    );
  }

  return (
    <div
      className={`${enabled ? "" : "dark"} relative h-auto overflow-x-hidden`}
    >
      <main className=" bg-gradient-to-b from-[#fff] to-[#fff] dark:from-[#1A0B29] dark:via-[#07000A]  dark:to-[#241731]">
        <div></div>

        <div className=" z-100 fixed top-0 z-10 flex  w-full items-center justify-between py-2 px-6 dark:bg-black/50 md:px-12 backdrop-blur">
          <Image src="/image/logo.png" alt="" width={90} height={60} />
          <ThemeSwitch />
        </div>
        {/* <div className="absolute top-0 right-0 bg-red-400 z-0 h-[616px] w-[616px] backdrop-opacity-40 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 "></div> */}
        <div className="BackgroundGlow_glow2__5Nj0b BackgroundGlow_glow__OIbSB "></div>
        <div className="BackgroundGlow_radar__oFQmz"></div>

        <div className="pt-48 lg:px-48">
          <div className="p-12">
            <div className="py-8">
              <h1 className="font-cardo  text-5xl leading-[56px] dark:text-white sm:text-[64px] sm:font-light sm:leading-[72px]">
                Building application to <br></br>empower community.
              </h1>
            </div>

            <p className="max-w-[650px] border-t py-8 text-xl dark:text-white">
              A partner who can help you take advantage of marketing
              opportunities across a variety of channels in real time.
            </p>
          </div>
          <div className="h-auto py-12 px-4 md:p-12 ">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-center text-3xl dark:text-white">
                We are all that you need
              </h1>
              <div className="grid grid-cols-3 items-center  gap-2 overflow-auto md:grid-cols-4 md:gap-4">
                <Chips name="strategy" />
                <Chips name="digital marketing" />
                <Chips name="content" />
                <Chips name="creativity" />
                <Chips name="digitalstrategy" />
                <Chips name="business" />
                <Chips name="technology" />
                <Chips name="growth" />
              </div>
            </div>

            <div className="mt-24 grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 xl:grid-cols-3 ">
              <Cards
                name="Growth"
                dec="We don't just provide solutions, we love to grow businesses"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />

              <Cards
                name="Current Technologies"
                dec="We use current technologies to stay credible and consistent."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
                    />
                  </svg>
                }
              />

              <Cards
                name="Full Support"
                dec="Our work is centered on providing full support to our clients."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                    />
                  </svg>
                }
              />

              <Cards
                name="Unique Design"
                dec="We don't just love to grow businesses, we love to set them apart."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                }
              />

              <Cards
                name="Ontime Project"
                dec="At Aine Digital Group, time is a resource we do not waste."
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className=" h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                }
              />
              <Cards
                name="Customer Experience"
                dec="We are known for our best customer experience, did they tell you?"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="h-auto w-full py-12 ">
            <h1 className="text-center text-3xl dark:text-white">
              Our Achivements
            </h1>
            <div className="grid w-full grid-cols-1 gap-12 py-12 md:grid-cols-3">
              <Achieve
                title="Clients"
                num={14}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 text-pink-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                    />
                  </svg>
                }
              />
              <Achieve
                title="Projects"
                num={38}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 text-pink-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                    />
                  </svg>
                }
              />
              <Achieve
                title="Feedbacks"
                num={40}
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="w-1o h-10 text-pink-700 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                }
              />
            </div>
          </div>

          <div className="py-12">
            <div className="flex flex-col items-center justify-center space-y-4">
              <h1 className="text-center text-3xl dark:text-white ">
                What we do
              </h1>
              <h1 className="text-center md:w-3/6 md:text-lg text-slate-500 dark:text-white">
                We are a group of content creators, branding professionals and
                digital marketing specialists that provide branding, digital
                marketing and content development services.
              </h1>
            </div>
            <div className="mt-12 grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-8 xl:grid-cols-3 ">
              <Card
                name="Business Branding"
                dec="We help buinesses create a strong and smart perception of its products or services in the customer's mind. From brand development strategy,brand design,brand style guide to rebranding already established businesses"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                }
              />
              <Card
                name="Content Development"
                dec="We help businesses create digital content to be expressed through any selected digital channel. From blog posts, articles,email newsletters,social media content,print collateral,website copy,white papers to E-books"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
                    />
                  </svg>
                }
              />
              <Card
                name="Digital Marketing"
                dec="We help businesses use selected digital channels to market products and services in order to reach consumers. From SEO, SEM, email marketing, social media marketing, SMS marketing to google business marketing"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-12 w-12 dark:text-white"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                    />
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
