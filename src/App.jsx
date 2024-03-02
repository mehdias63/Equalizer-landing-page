import React from "react";

function App() {
  return (
    <main className="bg-[url(/images/bg-main-mobile.png)] bg-cover bg-no-repeat min-h-screen md:bg-[url(/images/bg-main-tablet.png)] lg:bg-[url(/images/bg-main-desktop.png)] font-ibm relative max-w-[90rem] lg:px-[10rem]">
      <img
        src="images/bg-pattern-1.svg"
        className="hidden sm:block absolute sm:right-[-2rem] lg:right-0 max-w-[12.5rem] lg:max-w-[16rem]"
      />
      <div className="p-6">
        <img src="/images/logo.svg" className="pt-10 lg:pt-6" />
        <div className="text-black">
          <h1 className="text-[2.5rem] md:text-[4rem] lg:text-[5.5rem] font-bold leading-[3rem] md:leading-[4rem] lg:leading-[5.5rem] tracking-[-0.02844rem] md:tracking-[-0.04544rem] lg:tracking-[-0.0625rem] pt-16 pr-20 sm:pr-52 lg:pr-14">
            We make your music sound extraordinary.
          </h1>
          <p className="text-base md:text-lg lg:text-xl leading-[1.625rem] md:leading-7 lg:leading-[ 2.125rem] pt-4 pb-[10.38rem] sm:pr-48 ">
            A system audio equalizer specifically designed for Android and iOS.
            Freely tune the way your music sounds with a professional grade
            parametric EQ & volume mixer. Control bass, mids, treble, gain
            control, reverb, and more!
          </p>
        </div>
      </div>
      <div className="bg-black text-white relative flex flex-col items-center rounded-xl sm:h-[37.5rem]">
        <img src="/images/bg-pattern-2.svg" className="sm:mt-[-4rem]" />
        <div className="w-[13.06075rem] h-[26.875rem] sm:w-[16.88788rem] sm:h-[34.75rem] absolute top-[-8rem] sm:mr-[20rem] ">
          <img src="/images/illustration-app.png" />
        </div>
      </div>
      <div className="bg-orang relative mt-[-2rem] rounded-xl text-white mx-auto sm:max-w-[24.9375rem] lg:max-w-[27.875rem] p-9 md:p-12 lg:p-[3.38rem] sm:ml-[12rem] sm:mt-[-28rem] md:ml-[15.5rem] lg:ml-auto">
        <h1 className="text-[2rem] lg:text-[2.5rem] font-bold leading-10 lg:leading-[3.25rem] py-4">
          Premium EQ
        </h1>
        <p className="text-lg lg:text-xl leading-7 lg:leading-[2.125rem]">
          Get expert-level control with a robust equalizer, volume mixer, and
          spatial audio. Take your listening experience to a whole new level and
          access all our incredible features!
        </p>
        <p className="text-[4.0625rem] font-bold leading-[3.25rem] pb-4 pt-6">
          $4
          <span className="text-xl leading-8 tracking-[-0.0125rem]">
            / month
          </span>
        </p>
        <button className="flex items-center justify-center h-[3.85rem] gap-2 text-lg font-bold leading-8 bg-black w-full rounded-xl mx-2 my-6 tracking-[-0.01125rem]">
          <img src="/images/icon-apple.svg" />
          iOS Download
        </button>
        <button className="flex items-center justify-center gap-2 text-lg font-bold bg-white text-black w-full h-[3.85rem] leading-8 tracking-[-0.01125rem] rounded-xl m-2">
          <img src="/images/icon-android.svg" />
          Android Download
        </button>
      </div>
      <div className="bg-white mb-16 p-6">
        <div>
          <img src="/images/logo.svg" className="pt-12 pb-8" />
          <p className="pb-8 text-black text-base leading-[1.625rem]">
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at
            <span className="font-bold"> equalizer@example.com</span>
          </p>
        </div>
        <div className="flex gap-3 pt-2 ">
          <img src="/images/icon-facebook.svg" alt="facebook" />
          <img src="/images/icon-twitter.svg" alt="twitter" />
          <img src="/images/icon-instagram.svg" alt="instagram" />
        </div>
      </div>
    </main>
  );
}

export default App;
