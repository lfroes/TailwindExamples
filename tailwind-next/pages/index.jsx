import { useEffect, useState } from "react";
import Head from "next/head";
import Image from "next/image";

import mainBanner from "../public/banner.png";

export default function Home() {
  const [darkMode, setMode] = useState(false);

  useEffect(() => {
    if (!darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [darkMode]);

  return (
    <>
      <Head>
        <title>Next Js + Tailwind</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800;900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <div className="w-full h-[100vh] bg-trndy-primary dark:bg-trndy-secondary">
        <div className="flex justify-between">
          <div className="p-6 font-montserrat text-trndy-brown dark:text-trndy-primary font-extrabold uppercase text-2xl md:text-5xl lg:text-3xl">
            TRNDY
          </div>
          <div className="p-7 xl:p-10">
            <div className="flex items-center justify-center w-full mb-12">
              <label
                htmlFor="toggle"
                className="flex items-center cursor-pointer"
              >
                <div className="relative">
                  <input
                    type="checkbox"
                    id="toggle"
                    className="sr-only"
                    value={darkMode}
                    onChange={() => setMode(!darkMode)}
                  />
                  <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-trndy-secondary dark:bg-trndy-primary w-6 h-6 rounded-full transition"></div>
                </div>
                <div className="ml-3 text-gray-700 dark:text-trndy-primary font-medium">
                  {!darkMode ? "Light Mode" : "Dark Mode"}
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="hidden xl:flex xl:flex-col xl:w-1/2 xl:mt-10">
            <Image
              src={mainBanner}
              alt="main-banner"
              width={2500}
              height={1400}
            />
          </div>
          <div className="flex flex-col w-full md:justify-center xl:w-1/2">
            <h1 className="font-montserrat text-4xl text-center text-trndy-gray dark:text-trndy-primary font-extrabold mt-10 md:text-6xl md:mt-32">
              Óculos novos em um estalar de dedos!
            </h1>
            <p className="text-trndy-gray dark:text-trndy-primary  font-montserrat font-medium text-center mt-8 text-xl m-10 md:text-2xl md:mt-16 ">
              Compre óculos dos mais variados com a TRNDY
            </p>
            <div className="flex justify-center">
              <button className="btn-primary">Peça Agora</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
