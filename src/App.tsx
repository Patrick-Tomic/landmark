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
    <nav className='bg-[#1E3A8A] p-4 h-[20vh] text-white flex items-center justify-center sticky top-0 z-50'>
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
<div id='about' className='flex justify-center  items-center h-screen flex-col'>
        <h1 className='text-4xl font-bold mb-[5vh] underline'>
          About Us
        </h1>
        <p className='w-1/2 text-lg'>
          Based in Tampa, Florida, we are a trusted pressure washing and screen repair company proudly serving Zephyrhills, Wesley Chapel, Land O’ Lakes, Lutz,
          and surrounding areas. With years of hands-on experience in Maine, we’ve brought our expertise down south to deliver top-quality services to Florida
          homeowners and businesses.
        </p>

</div>
<div id='services' className='bg-gray-100 h-screen grid grid-cols-2 items-center p-24 w-full gap-8'>
        <h1 className='text-4xl font-bold mb-[5vh] col-span-2 underline text-center'>
          Our Services
        </h1>
<div className='h-full'>
        <h2 className='text-2xl font-semibold mb-4'>
          Pressure Washing Services:
        </h2>
        <ul className='list-disc list-inside text-lg space-y-4'>
           <ol className='list-decimal list-inside'>
            <li>
              Driveways and sidewalks
            </li>
            <li>
              House exteriors 
            </li>
            <li>
              Decks and patios
            </li>
            <li>
              Fences
            </li>
            <li>
              Roof cleaning
            </li>
            <li>
              Pool areas
            </li>
           </ol>
  <li>Paver sealing
    <ul className='list-disc list-inside ml-6'>
      <li>High gloss</li>
      <li>Semi-gloss</li>
      <li>Matte</li>
    </ul>
  </li>
          </ul>
</div>
<div className='h-full'>
        <h2 className='text-2xl font-semibold mb-4 mt-8'>
          Screen Repair Services:
        </h2>
        <ul className='list-disc list-inside text-lg space-y-4'>
           <ol className='list-decimal list-inside'>
            <li>
              Screen door repair and replacement
            </li>
            <li>
              Window screen repair and replacement
            </li>
            <li>
              Patio and lanai screen enclosures
            </li>
            <li>
              Custom screen solutions
            </li>
           </ol>
          </ul>
</div>
<h1 className='text-2xl font-bold mb-[5vh] w-[50vw]  col-span-2 underline text-center'>
        Call Us Today for a Free Estimate! or Contact Us for to Schedule an In Person Quote!
</h1>
</div>
    </>
  )
}

export default App
