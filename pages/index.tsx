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
        #{props.name}
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
      <main className=" bg-gradient-to-b from-[#fff] to-[#fff] dark:from-[#e45c82] dark:via-[#07000A]  dark:to-[#0e0004]">
        <div></div>

        <div className=" z-100 fixed top-0 z-10 flex  w-full items-center justify-between  px-6 backdrop-blur dark:bg-black/50 md:px-12">
          {/* <Image src="/image/logo.png" alt="" width={90} height={60} /> */}
          <svg
            className="h-24 w-24 dark:text-white"
            viewBox="0 0 932 410"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M724.8 1.00002C695.067 5.66669 668.933 19.1334 648.133 40.2L638.267 50.2L630.933 43.5334C610.133 24.6 581.067 11.4 551.733 7.66669C545.6 7.00002 520.133 6.33335 495.067 6.33335H449.333L449.067 57.2667L448.667 108.333L428.133 57.2667L407.467 6.33335L376.933 6.60002L346.4 7.00002L289.867 147C258.667 223.933 232.933 288.333 232.533 289.933L231.733 293H267.067H302.4L304.533 287.267C305.733 284.2 310.4 271.4 315.067 259L323.467 236.333L376.933 235.933L430.267 235.667L431.733 239.267C439.467 258.733 449.333 287.133 449.333 289.8V293.267L501.067 292.6C557.333 291.933 564.8 291.133 586 283.133C603.733 276.333 624.267 263.267 635.867 251.133L640.4 246.467L648.667 254.867C685.867 293 742.533 305.8 794.133 287.533C814 280.467 826.667 272.867 841.2 259.133C855.2 245.667 865.467 229.533 873.067 208.333C876.4 199.4 876.533 197.4 877.067 164.6L877.467 130.333H810.8H744V155.667V181H776.8H809.733L808.933 188.2C807.867 198.6 803.867 206.6 795.333 215.533C782.533 229 765.733 235.133 744.933 234.067C734.8 233.533 732.133 232.867 722.267 227.933C700.933 217.4 684.533 194.467 679.2 167.667C673.067 136.6 682.8 101.4 703.2 80.7334C716 67.8 733.867 59.6667 749.333 59.6667C758.267 59.6667 772.933 63.1334 781.333 67.2667C788.267 70.6 803.867 84.8667 810 93.4L812.667 97L822 86.6C827.2 80.7334 836.933 69.9334 843.867 62.4667L856.533 48.7334L845.067 37.8C826.4 19.6667 805.2 8.46669 779.2 3.00002C766.8 0.333355 736 -0.733312 724.8 1.00002ZM545.2 68.3334C573.867 75.1334 597.067 99.8 603.467 130.333C606.267 143.667 605.333 165 601.333 177C594.667 197.133 580.533 214.733 564.267 223.4C553.6 229.133 538 233 525.733 233H516V149.667V66.3334H526.4C532 66.3334 540.533 67.2667 545.2 68.3334ZM392.4 137C400.133 157.133 406.8 174.733 407.333 175.933C408.267 178.2 406.267 178.333 377.467 178.333C360.533 178.333 346.667 177.933 346.667 177.4C346.667 174.6 376.8 98.6 377.467 99.4C378 99.9333 384.8 116.867 392.4 137Z"
              fill="currentColor"
            />
            <path
              d="M168 150.333V291.667H196H224V150.333V9.00001H196H168V150.333Z"
              fill="#E45C82"
            />
            <path
              d="M102.667 179.667V291.667H130H157.333V179.667V67.6667H130H102.667V179.667Z"
              fill="#E45C82"
            />
            <path
              d="M38.6667 206.333V291.667H66H93.3334V206.333V121H66H38.6667V206.333Z"
              fill="#E45C82"
            />
            <path
              d="M49.3242 409L42.9004 390.762H17.7891L11.3652 409H0L24.4375 343.055H36.3867L60.7793 409H49.3242ZM40.1152 381.508L33.8711 363.539C33.6315 362.76 33.2871 361.667 32.8379 360.26C32.3887 358.822 31.9395 357.37 31.4902 355.902C31.041 354.405 30.6667 353.147 30.3672 352.129C30.0677 353.357 29.6934 354.734 29.2441 356.262C28.8249 357.759 28.4056 359.167 27.9863 360.484C27.597 361.802 27.2975 362.82 27.0879 363.539L20.7988 381.508H40.1152ZM69.4492 409V343.324H80.2305V409H69.4492ZM152.375 409H139.123L106.959 356.576H106.555C106.674 358.343 106.779 360.215 106.869 362.191C106.989 364.168 107.079 366.204 107.139 368.301C107.229 370.397 107.303 372.523 107.363 374.68V409H97.5703V343.324H110.732L142.852 395.389H143.166C143.106 393.861 143.031 392.109 142.941 390.133C142.852 388.156 142.762 386.12 142.672 384.023C142.612 381.897 142.567 379.846 142.537 377.869V343.324H152.375V409ZM206.82 409H169.625V343.324H206.82V352.398H180.406V370.232H205.158V379.262H180.406V399.881H206.82V409ZM298.236 375.533C298.236 382.93 296.859 389.115 294.104 394.086C291.348 399.027 287.35 402.756 282.109 405.271C276.868 407.757 270.549 409 263.152 409H244.914V343.324H265.129C271.927 343.324 277.797 344.552 282.738 347.008C287.68 349.434 291.498 353.042 294.193 357.834C296.889 362.596 298.236 368.495 298.236 375.533ZM287.006 375.848C287.006 370.457 286.152 366.025 284.445 362.551C282.768 359.077 280.283 356.501 276.988 354.824C273.724 353.117 269.696 352.264 264.904 352.264H255.695V399.971H263.332C271.268 399.971 277.198 397.949 281.121 393.906C285.044 389.863 287.006 383.844 287.006 375.848ZM312.387 409V343.324H323.168V409H312.387ZM367.012 373.332H391.539V406.305C388.095 407.443 384.531 408.326 380.848 408.955C377.164 409.584 373.031 409.898 368.449 409.898C361.771 409.898 356.111 408.581 351.469 405.945C346.857 403.28 343.353 399.432 340.957 394.4C338.561 389.339 337.363 383.245 337.363 376.117C337.363 369.259 338.696 363.314 341.361 358.283C344.027 353.222 347.905 349.314 352.996 346.559C358.087 343.773 364.257 342.381 371.504 342.381C375.068 342.381 378.512 342.74 381.836 343.459C385.19 344.148 388.26 345.106 391.045 346.334L387.271 355.229C385.055 354.18 382.57 353.297 379.814 352.578C377.059 351.859 374.199 351.5 371.234 351.5C366.533 351.5 362.475 352.518 359.061 354.555C355.676 356.591 353.071 359.466 351.244 363.18C349.417 366.863 348.504 371.221 348.504 376.252C348.504 381.133 349.238 385.416 350.705 389.1C352.173 392.783 354.464 395.658 357.578 397.725C360.723 399.761 364.781 400.779 369.752 400.779C372.238 400.779 374.349 400.645 376.086 400.375C377.823 400.105 379.425 399.806 380.893 399.477V382.541H367.012V373.332ZM407.262 409V343.324H418.043V409H407.262ZM458.158 409H447.332V352.488H428.105V343.324H477.34V352.488H458.158V409ZM528.102 409L521.678 390.762H496.566L490.143 409H478.777L503.215 343.055H515.164L539.557 409H528.102ZM518.893 381.508L512.648 363.539C512.409 362.76 512.064 361.667 511.615 360.26C511.166 358.822 510.717 357.37 510.268 355.902C509.818 354.405 509.444 353.147 509.145 352.129C508.845 353.357 508.471 354.734 508.021 356.262C507.602 357.759 507.183 359.167 506.764 360.484C506.374 361.802 506.075 362.82 505.865 363.539L499.576 381.508H518.893ZM548.227 409V343.324H559.008V399.836H586.904V409H548.227ZM648.672 373.332H673.199V406.305C669.755 407.443 666.191 408.326 662.508 408.955C658.824 409.584 654.691 409.898 650.109 409.898C643.431 409.898 637.771 408.581 633.129 405.945C628.517 403.28 625.013 399.432 622.617 394.4C620.221 389.339 619.023 383.245 619.023 376.117C619.023 369.259 620.356 363.314 623.021 358.283C625.687 353.222 629.565 349.314 634.656 346.559C639.747 343.773 645.917 342.381 653.164 342.381C656.728 342.381 660.172 342.74 663.496 343.459C666.85 344.148 669.92 345.106 672.705 346.334L668.932 355.229C666.715 354.18 664.23 353.297 661.475 352.578C658.719 351.859 655.859 351.5 652.895 351.5C648.193 351.5 644.135 352.518 640.721 354.555C637.337 356.591 634.731 359.466 632.904 363.18C631.077 366.863 630.164 371.221 630.164 376.252C630.164 381.133 630.898 385.416 632.365 389.1C633.833 392.783 636.124 395.658 639.238 397.725C642.383 399.761 646.441 400.779 651.412 400.779C653.898 400.779 656.009 400.645 657.746 400.375C659.483 400.105 661.085 399.806 662.553 399.477V382.541H648.672V373.332ZM707.385 343.324C713.045 343.324 717.717 344.013 721.4 345.391C725.114 346.768 727.869 348.865 729.666 351.68C731.493 354.495 732.406 358.074 732.406 362.416C732.406 365.65 731.807 368.406 730.609 370.682C729.411 372.958 727.839 374.844 725.893 376.342C723.946 377.839 721.865 379.037 719.648 379.936L738.291 409H726.117L710.26 382.676H699.703V409H688.922V343.324H707.385ZM706.666 352.309H699.703V373.781H707.16C712.161 373.781 715.785 372.853 718.031 370.996C720.307 369.139 721.445 366.399 721.445 362.775C721.445 358.972 720.232 356.277 717.807 354.689C715.411 353.102 711.697 352.309 706.666 352.309ZM805.988 376.072C805.988 381.133 805.344 385.745 804.057 389.908C802.799 394.041 800.897 397.605 798.352 400.6C795.806 403.564 792.617 405.855 788.783 407.473C784.95 409.09 780.458 409.898 775.307 409.898C770.066 409.898 765.514 409.09 761.65 407.473C757.817 405.855 754.628 403.549 752.082 400.555C749.566 397.56 747.68 393.981 746.422 389.818C745.164 385.656 744.535 381.044 744.535 375.982C744.535 369.214 745.643 363.314 747.859 358.283C750.105 353.222 753.505 349.299 758.057 346.514C762.639 343.699 768.419 342.291 775.396 342.291C782.225 342.291 787.9 343.684 792.422 346.469C796.944 349.254 800.328 353.177 802.574 358.238C804.85 363.27 805.988 369.214 805.988 376.072ZM755.855 376.072C755.855 381.133 756.544 385.521 757.922 389.234C759.299 392.918 761.411 395.763 764.256 397.77C767.131 399.746 770.814 400.734 775.307 400.734C779.829 400.734 783.512 399.746 786.357 397.77C789.202 395.763 791.299 392.918 792.646 389.234C793.994 385.521 794.668 381.133 794.668 376.072C794.668 368.376 793.126 362.356 790.041 358.014C786.986 353.641 782.105 351.455 775.396 351.455C770.904 351.455 767.206 352.443 764.301 354.42C761.426 356.396 759.299 359.227 757.922 362.91C756.544 366.564 755.855 370.951 755.855 376.072ZM871.664 343.324V385.82C871.664 390.402 870.691 394.505 868.744 398.129C866.827 401.753 863.923 404.628 860.029 406.754C856.136 408.85 851.24 409.898 845.34 409.898C836.924 409.898 830.516 407.697 826.113 403.295C821.741 398.863 819.555 392.978 819.555 385.641V343.324H830.336V384.697C830.336 390.178 831.624 394.221 834.199 396.826C836.775 399.432 840.623 400.734 845.744 400.734C849.278 400.734 852.153 400.12 854.369 398.893C856.615 397.635 858.262 395.808 859.311 393.412C860.389 390.986 860.928 388.066 860.928 384.652V343.324H871.664ZM907.557 343.324C916.032 343.324 922.216 345.061 926.109 348.535C930.003 352.009 931.949 356.876 931.949 363.135C931.949 365.98 931.5 368.69 930.602 371.266C929.733 373.811 928.296 376.072 926.289 378.049C924.283 379.995 921.632 381.538 918.338 382.676C915.074 383.814 911.046 384.383 906.254 384.383H899.246V409H888.465V343.324H907.557ZM906.838 352.264H899.246V375.398H905.131C908.515 375.398 911.39 375.009 913.756 374.23C916.122 373.422 917.919 372.149 919.146 370.412C920.374 368.675 920.988 366.384 920.988 363.539C920.988 359.736 919.835 356.906 917.529 355.049C915.253 353.192 911.689 352.264 906.838 352.264Z"
              fill="currentColor"
            />
          </svg>

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
            <h1 className="text-center font-work text-3xl font-semibold uppercase text-slate-600 dark:text-white">
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
              <h1 className="text-center font-work text-3xl font-semibold dark:text-white">
                WHAT WE DO
              </h1>
              <h1 className="text-center text-3xl dark:text-white ">
                and we do it really well
              </h1>
              <h1 className="text-center text-slate-500 dark:text-white md:w-3/6 md:text-lg">
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
