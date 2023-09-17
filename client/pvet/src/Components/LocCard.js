import '../App.css'
import { useState } from 'react';
function LocCard(props) {

const viewMaps = `https://www.google.com/maps/search/${props.name}`

return (
<body class="flex sm:flex-col h-full w-auto">
<div class="flex-col w-full h-full bg-white m-4 rounded-lg" >
  <div class="mx-auto max-w-7xl px-6">
    <div class="mx-auto max-w-2xl">
      <h2 class="text-3xl font-bold mt-4 tracking-tight text-gray-900 text-4xl">{props.name}</h2>
      <a href={viewMaps}>
            <button type="button" className="bg-clear border-white text-center text-black h-10 px-4 rounded-lg">View on Maps</button>
      </a>
      <p class="leading-8 text-gray-600"></p>
    </div>
    <div class="mx-auto mt-2 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-10 mt-16 pt-16 lg:mx-0 lg:max-w-none ">
      <article class="flex mt-0 max-w-xl flex-col items-start justify-between">
        <div class="group relative">
          <h3 class="mt-0 font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href="#">
              <span class="absolute inset-0"></span>
              <p class="text-black m-2">{props.description}</p>
            </a>
          </h3>
        </div>
        </article>
        </div>
    </div>
</div>
</body>
)
}
export default LocCard;