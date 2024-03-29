import React from "react";

function Figure() {
  return (
    <>
      <section className="text-gray-600 rounded-md bg-slate-50 mb-[-2rem] mt-[-2rem] z-10 w-[70rem] body-font">
        <div className="container px-2 py-24 mx-auto">
          <div className="flex gap-14 items-center flex-wrap justify-center -m-4">
            <div className="p-4 rounded-full bg-green-400 flex flex-wrap items-center justify-center  sm:w-auto">
              <div className="text-center flex flex-col md:flex-1 items-center justify-center w-[11rem] pt-[3rem] pb-[4rem]">
                <h2 className="title-font justify-center font-medium sm:text-4xl text-3xl text-white">
                  30K+
                </h2>
                <p className="font-bold text-white">LinkedIn Community</p>
              </div>
            </div>

            <div className="p-4 rounded-full bg-green-400 flex items-center justify-center  sm:w-auto">
              <div className="text-center flex flex-col items-center justify-center pt-[3rem] pb-[4rem]">
                <h2 className="title-font justify-center font-medium sm:text-4xl text-3xl text-white">
                  20K+
                </h2>
                <p className="font-bold text-white">Instagram Community</p>
              </div>
            </div>

            <div className="p-4 rounded-full bg-green-400 flex items-center justify-center  sm:w-auto">
              <div className="text-center flex flex-col items-center justify-center  pt-[3rem] pb-[4rem]">
                <h2 className="title-font justify-center font-medium sm:text-4xl text-3xl text-white">
                  20K+
                </h2>
                <p className="font-bold text-white">Telegram Community</p>
              </div>
            </div>

            <div className="p-4 rounded-full bg-green-400 flex items-center justify-center  sm:w-auto">
              <div className="text-center flex flex-col items-center justify-center  pt-[3rem] pb-[4rem]">
                <h2 className="title-font justify-center font-medium sm:text-4xl text-3xl text-white">
                  15K+
                </h2>
                <p className="font-bold text-white">Whatsapp Community</p>
              </div>
            </div>

            {/* Add more similar divs as needed */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Figure;
