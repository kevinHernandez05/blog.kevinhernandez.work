import React, { useEffect, useState } from "react";

const Card = (props) => {
  return (
    <div class="container sm:px-32 md:px-42 xl:px-64 py-24 mx-auto">
      {/*  loading card mockup
      
        <div class="p-4">
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden">
          <div class="lg:h-48 bg-gray-400 md:h-36 w-full object-cover object-center"></div>
          <div class="p-6">
            <h1 class="w-1/2 mb-4 h-6 animate-pulse bg-gray-500"></h1>
            <p class="leading-relaxed mb-3 w-full h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-2/3 h-3 animate-pulse bg-gray-400"></p>
            <p class="leading-relaxed mb-3 w-1/2 h-3 animate-pulse bg-gray-400"></p>
            <div class="flex items-center flex-wrap ">
              <a class="bg-indigo-300 h-4 animate-pulse mt-2 w-32 inline-flex items-center md:mb-2 lg:mb-0"></a>
              <span class="bg-indigo-300 w-16 mt-2 h-4 animate-pulse mr-3 px-2 inline-flex items-center ml-auto leading-none text-sm pr-5 py-1"></span>
            </div>
          </div>
        </div>
      </div> */}

      <div class="p-4" key={1}>
        <div class="h-full border-2 border-gray-200 rounded-lg overflow-hidden grid-cols-1 lg:grid-cols-2">
          {/* <img
            class="h-full w-full object-cover object-center"
            src="https://camo.githubusercontent.com/cc42c1358f33e518bb1f3353bd1ce7984940b49635943a409cd45521c9c6ca8e/68747470733a2f2f63646e2d696d616765732d312e6d656469756d2e636f6d2f6d61782f3830302f302a566661486b57627144757068725171582e6a7067"
            alt="Proyecto"
          ></img> */}
          <div class="p-6">
            <p class="leading-relaxed mb-3">How to Dockerize a Deno app 👀 </p>
            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
              #Yes #No
            </h1>
            <h1 class="tracking-widest text-lg title-font font-medium text-gray-500 mb-1">
              Recently, I was in Developer Communities Whatsapp's groups talking
              about new technologies, many of them were telling me about a new
              one created by the creator of Node.js… Wait… what was its name
              again? Deno? Wha...
            </h1>
            <div class="flex items-center flex-wrap ">
              <p class="text-gray-500 inline-flex items-center text-lg">
                not url at the moment.
              </p>
              <span class="text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300">
                jun, 12t; 2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
