import React from "react";

function App() {
  return (
    <main className="bg-[url(/images/bg-main-mobile.png)] bg-cover bg-no-repeat min-h-screen md:bg-[url(/images/bg-main-tablet.png)] lg:bg-[url(/images/bg-main-desktop.png)]">
      <img
        src="images/bg-pattern-1.svg"
        className="hidden sm:block absolute right-0"
      />
      <div>
        <img src="/images/logo.svg" />
        <h1>We make your music sound extraordinary.</h1>
        <p>
          A system audio equalizer specifically designed for Android and iOS.
          Freely tune the way your music sounds with a professional grade
          parametric EQ & volume mixer. Control bass, mids, treble, gain
          control, reverb, and more!
        </p>
      </div>
      <div className="bg-black text-white relative flex flex-col justify-center items-center rounded-xl">
        <img src="/images/bg-pattern-2.svg" />
        <div className="w-[13.06075rem] h-[26.875rem] absolute top-[-6rem] mx-auto ">
          <img src="/images/illustration-app.png" />
        </div>
        <div className="bg-orang relative mt-[-2rem] rounded-xl">
          <h1>Premium EQ</h1>
          <p>
            Get expert-level control with a robust equalizer, volume mixer, and
            spatial audio. Take your listening experience to a whole new level
            and access all our incredible features!
          </p>
          <p>
            $4<span>/ month</span>
          </p>
          <button className="flex bg-black">
            <img src="/images/icon-apple.svg" />
            iOS Download
          </button>
          <button className="flex bg-white text-black mb-2">
            <img src="/images/icon-android.svg" />
            iOS Download
          </button>
        </div>
      </div>
      <div className="bg-white mb-8">
        <div>
          <img src="/images/logo.svg" />
          <p>
            All rights reserved © Equalizer 2021 Have any problems? Contact us
            via social media or email us at<span> equalizer@example.com</span>
          </p>
        </div>
        <div className="flex gap-3 ">
          <img src="/images/icon-facebook.svg" alt="facebook" />
          <img src="/images/icon-twitter.svg" alt="twitter" />
          <img src="/images/icon-instagram.svg" alt="instagram" />
        </div>
      </div>
    </main>
  );
}

export default App;
