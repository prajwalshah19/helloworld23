import '../App.css'
import { useState } from 'react';
function LocCard(props) {

return (
<body class="flex sm:flex-col h-full w-auto">
<div class="flex-col w-full h-full bg-white m-4 rounded-lg" >
  <div class="mx-auto max-w-7xl px-6">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900 text-4xl">{props.name}</h2>
      <a href="https://www.google.com">
            <button type="button" className="bg-clear border-white text-center text-black h-10 px-4 rounded-lg">View on Maps</button>
      </a>
      <p class="leading-8 text-gray-600"></p>
    </div>
    <div class="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 mt-16 pt-16 lg:mx-0 lg:max-w-none ">
      <article class="flex mt-0 max-w-xl flex-col items-start justify-between">
          <div class="mt-0 text-gray-500">Current Weather</div>
          <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">Marketing</a>
        <div class="group relative">
          <h3 class="mt-0 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span class="absolute inset-0"></span>
              <p class="text-black m-2">{props.description}</p>
            </a>
          </h3>
          <p class="mt-5 line-clamp-3 leading-6 text-gray-600">Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.</p>
        </div>
        </article>
        </div>
    </div>
</div>
</body>
)
}
export default LocCard;