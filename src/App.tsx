import './App.css'
import './index.css'
import { useEffect, useState } from 'react'
function App() {
  const [imgASrc, setImgA] = useState('./src/assets/pressurewashA.jpeg')
  const [imgBSrc, setImgB] = useState('./src/assets/screenrepairA.jpeg')
  const [imgCSrc, setImgC] = useState('./src/assets/screenrepairB.jpeg')
  const [fade, setFade] = useState(false)
  useEffect(() => {
    // cycle through some images
    const images = [
      "./src/assets/pressurewashA.jpeg",
      "./src/assets/pressurewashB.jpeg",
      "./src/assets/pressurewashC.jpeg",
    ];
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      setImgA(images[i]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return(
    <>
    <nav className='bg-[#1E3A8A] p-4 text-white'>
      <h1>
        Landmark Pressure Washing and Screen Repair
      </h1>
    </nav>
    <div id="hero" className="h-screen p-24 bg-[url('./assets/tile.jpeg')] bg-repeat bg-[length:200px_200px] inset-0 ">
    <div id="imgDiv" className="grid grid-cols-3 grid-rows-2 gap-4  h-full">
    {/* Large main image taking 2 columns & 2 rows */}
      <img
        src={imgASrc}
        alt=""
        className={`row-span-3 col-span-2 w-[80%] h-[100%] object-cover rounded-xl transition-all duration-700 ease-in-out ${
          fade ? "opacity-0 scale-105" : "opacity-100 scale-100"
        }`}
      />

    {/* Right top image */}
    <img
      id="imgB"
      src={imgBSrc}
      alt=""
      className="w-full h-full object-cover rounded-2xl"
    />

    {/* Right bottom image */}
    <img
      id="imgC"
      src={imgCSrc}
      alt=""
      className="w-full h-full object-cover rounded-2xl"
    />
  </div>
</div>
    </>
  )
}

export default App
