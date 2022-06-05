import React from "react";
import Konami from "react-konami-code";

export default function KonamiCode(props) {
  const easterEgg = () => {
    alert("Omg, you found me!");
  };

  return (
    <Konami action={easterEgg}>
      <div
        className="min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
        id="modal-id"
      >
        <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
        <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
          <div className="content">
            <div className="text-center space-x-4 md:block">
              <p className="text-black">
                If you're seeing this, you've found a easter egg on my webpage!
              </p>
              <p className="text-black">
                That means you win a nice discount code for my online courses
              </p>
              <p className="text-black">The code is:</p>
              <p className="text-black">{props.courseKey}</p>
              <br />
              <p className="text-black">Reload the page to close this modal.</p>
            </div>
          </div>
        </div>
      </div>
    </Konami>
  );
}
