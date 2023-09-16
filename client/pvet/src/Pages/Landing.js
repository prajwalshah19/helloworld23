import '../App.css'
import { useState } from 'react';
function Landing() {

  const [activity, setActivity] = useState("")
  const [loc, setLoc] = useState("")

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
    if(activity == "") {
      setLoc("")
    }
  };

  const handleLocationChange = (event) => {
    setLoc(event.target.value);

  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      
      
      <h1 class="text-7xl font-bold text-orange-950 text-center mb-3">Hello, </h1>
      <div className = "flex flex-col w-2/3 items-center justify-center">
      <input
        type="text"
        class="w-full border-2 border-orange-950 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-2"
        placeholder="What would you like to do this weekend?" 
        onChange={handleActivityChange}
      />
      {activity != "" ? 
      <input
        type="text"
        class="w-full border-2 border-orange-950 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none mb-2"
        placeholder= {"Where would you like to " + activity + "?"}
        onChange={handleLocationChange}
      />

      : <></>}
      {loc != "" && activity != "" ? 
      <button type="submit" className="bg-orange-950 text-white h-10 px-4 rounded-lg">Find Places</button>

      : <></>}



      </div>
    </div>
  );
}

export default Landing;
