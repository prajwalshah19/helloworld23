import '../App.css'
import { useState } from 'react';
function LocCard() {

    return (
        <div class="flex-col lg:w-1/3 md:w-full w-full bg-orange-950 m-4 rounded-lg" >
            <div class = "flex items-center">
                <h1 class="text-5xl font-bold text-white mb-3 m-2">Location</h1>
                <button type="submit" className="bg-clear border-white text-white h-10 px-4 rounded-lg" >See on Maps</button>
            </div>
            <p class="text-white m-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

        </div>
    )
    }

export default LocCard;