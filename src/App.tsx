import './App.css'
import './index.css'
import logo from './assets/logo.png'
import { useEffect, useState } from 'react'
export default function App() {
  const [imgASrc, setImgA] = useState('./src/assets/SRA.jpg')
  const [imgBSrc, setImgB] = useState('./src/assets/pair1A.jpg')
  const [imgCSrc, setImgC] = useState('./src/assets/pair1B.jpg')
  useEffect(() => {
    // cycle through some images
    const images = [
      "./src/assets/SRA.jpg",
      "./src/assets/SRB.jpg",
      "./src/assets/SRC.jpg",
      "./src/assets/SRD.jpg",
      "./src/assets/SRE.jpg",
      "./src/assets/SRF.jpg",

    ];
    const before = [
      './src/assets/pair1A.jpg',
      './src/assets/pair2A.jpg',
      './src/assets/pair3A.jpg',
      './src/assets/pair4A.jpg',
      './src/assets/pair5A.jpg',
      './src/assets/pair6A.jpg',
    ]
    const after = [
      './src/assets/pair1B.jpg',
      './src/assets/pair2B.jpg',
      './src/assets/pair3B.jpg',
      './src/assets/pair4B.jpg',
      './src/assets/pair5B.jpg',
      './src/assets/pair6B.jpg',
    ]
    let i = 0;
    const interval = setInterval(() => {
      i = (i + 1) % images.length;
      setImgA(images[i]);
      setImgB(before[i]);
      setImgC(after[i]);
    }, 8000);
    return () => clearInterval(interval);
  }, []);
  return(
    <>
    <nav className='bg-[#E53E3E] p-4 h-[10vh] text-white flex items-center justify-around sticky top-0 z-50'>
     <img className='w-[5vw]' src={logo} alt="" />
      <a href='#top'>
        Landmark Pressure Washing and Screen Repair
      </a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#contact">Contact</a>
    </nav>
    <div id="hero" className="h-screen p-24 bg-[url('./assets/tile.jpeg')] bg-repeat bg-[length:200px_200px] inset-0 ">
    <div id="imgDiv" className="grid grid-cols-3 grid-rows-2 gap-4  h-full">
    {/* Large main image taking 2 columns & 2 rows */}
      <img id='imgA'
        src={imgASrc}
        alt=""
        className={`row-span-3 col-span-2 w-[80%] h-[100%] object-cover rounded-xl transition-all duration-700 ease-in-out 
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
<div id='about' className='flex justify-center  items-center h-screen'>
        <div className='items-center flex w-[150vw] flex-col'>
        <h1 className='text-5xl font-bold mb-[5vh] underline'>
          About Us
        </h1>
        <p id='aboutP' className='w-1/2 text-2xl'>
          Based in Tampa, Florida, we are a trusted pressure washing and screen repair company proudly serving Zephyrhills, Wesley Chapel, Land O’ Lakes, Lutz,
          and surrounding areas. With years of hands-on experience in Maine, we’ve brought our expertise down south to deliver top-quality services to Florida
          homeowners and businesses.
        </p>
 </div>
  <div className="w-full h-[400px]">
<div className="w-full h-[400px]">
<iframe src="https://www.google.com/maps/d/embed?mid=15KuvHlVat02CnO-mMU2jRvzLyfBR1QM&ehbc=2E312F&noprof=1" width="640" height="480"></iframe>
</div>
</div> 

</div>
<div id='services' className='bg-gray-100  flex flex-col items-center p-24 w-full gap-8'>
        <h1 className='text-4xl font-bold mb-[5vh] col-span-2 underline text-center'>
          Landmark Services
        </h1>
        <p className='w-[50vw] text-xl'>
          Landmark Pressure Washing & Screen Repair provides reliable, high-quality exterior cleaning 
          and screen enclosure services for homes and businesses. We specialize in driveways, sidewalks,
           lanais, siding, fences, and paver sealing—restoring surfaces to a bright, like-new finish—along
           with professional screen repair to keep enclosures looking clean and functional. With attention
            to detail and professional equipment, Landmark delivers fast, safe, and affordable results you can count on.
        </p>
        <div className='flex justify-center'>
<div className='h-full mr-[10vw] '>
        <h2 className='text-2xl font-semibold mb-4'>
          Pressure Washing Services
        </h2>
        <ul className='list-disc list-inside text-lg space-y-4'>
           <ol className='list-decimal list-inside'>
            <li id='option'>    
                 Driveways and sidewalks 
                 </li>  
              <p>
                Remove mold, dirt, and tire marks for a bright, like-new look.
              </p>
             <ul className='list-disc list-inside ml-6'>
              <li>
                Eco-safe Detergent
              </li>
              <li>
                Fast Drying
              </li>
             </ul>
            <li id='option'>
              House exteriors 
            </li>
            <p>
            Gentle wash that cleans without damaging surfaces.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                HOA-friendly results
              </li>
              <li>
                Protect your investment
              </li>
            </ul>
            <li id='option'>
              Decks and patios
            </li>
            <p>
              Restores color and removes mildew safely.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Wood and composite safe
              </li>
              <li>
                Prevents slipping hazards
              </li>
            </ul>
            <li id='option'>
              Fences
            </li>
            <p>
            Revives wood or vinyl for a clean, uniform finish.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Extends fence life
              </li>
              <li>
                Enhances curb appeal
              </li>
            </ul>
            <li id='option'>
              Gutter Cleaning
            </li>
            <p>
            Removes staining and restores white finishes.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>Protects your investment
              </li>
              <li>
                removes mold and mildew
              </li>
            </ul>
            <li id='option'>
              Pool areas
            </li>
            <p className='w-[20vw]'>
              Removes mildew, dirt, and buildup for a clean, safe poolside surface.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Slip-resistant cleaning
              </li>
              <li>
                Enhances pool area aesthetics
              </li>
            </ul>
           </ol>
  <li id='option'>Paver sealing</li>
    <p>
      Protects color and adds long-lasting shine.
    </p>
    <h1 id='option'>
      Finish options:
    </h1>
    <ul className='list-disc list-inside ml-6'>
      <li>High gloss</li>
      <li>Semi-gloss</li>
      <li>Matte</li>
    </ul>
  
          </ul>
</div>
<div className='h-full '>
        <h2 className='text-2xl font-semibold mb-4 mt-8'>
          Screen Repair Services:
        </h2>
        <ul className='list-disc list-inside text-lg space-y-4'>
           <ol className='list-decimal list-inside'>
            <li id='option'>
              Screen door repair and replacement
            </li>
            <p>
              Restores smooth operation and tight mesh.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Variety of mesh options
              </li>
              <li>
                Durable frames
              </li>
            </ul>
            <li id='option'>
              Window screen repair and replacement
            </li>
            <p className='w-[25vw]'>
              Fixes tears, replaces worn screens, and restores smooth operation for a secure, polished look.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Professional-grade Materials
              </li>
              <li>
                Quick Repair and Installation
              </li>
            </ul>
            <li id='option'>
              Patio and lanai screen enclosures
            </li>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Full enclosure repair
              </li>
              <li>
                Professional-grade Materials
              </li>
              <li>
                Extends Screen Lifespan
              </li>
            </ul>
            <li id='option'>
              Custom screen solutions
            </li>
            <p className='w-[25vw]'>
              Tailor-made screens for windows, doors, and enclosures—designed to fit perfectly and enhance durability.
            </p>
            <ul className='list-disc list-inside ml-6'>
              <li>
                Custom sizes and shapes
              </li>
              <li>
                Enhances home appearance
              </li>
              <li>
                Keeps insects and Debris out
              </li>
            </ul>
 </ol>
 </ul>
</div>
</div>
</div>
<div id='contact' className='bg-[#1E3A8A] flex flex-col justify-around items-center h-[40vh]'>
  <h1 className='text-5xl text-white'>
    Contact us Now!
  </h1>
  <div className='flex justify-around  w-full'>
         <a href="tel:+2074791570" 
   className="bg-red-600 text-white px-[50px] py-[25px] text-2xl rounded-lg font-semibold hover:bg-red-700 transition">
  Call Now For a Quote Today!
</a>
 <a href="mailto:tmlegos@gmail.com" 
   className="bg-red-600 text-white px-[50px] py-[25px] text-2xl rounded-lg font-semibold hover:bg-red-700 transition">
  Email us for further information
</a>
</div>
</div>
</>
  )
}
