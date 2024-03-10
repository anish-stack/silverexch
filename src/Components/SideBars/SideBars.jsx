import { useState } from "react"
import { Link } from "react-router-dom"

const SideBars = () => {
  const [open, setopen] = useState(true)
  const [opens, setopens] = useState(false)

  const HandleOpen = () => {
    setopen(!open)
    setopens(false)

  }
  const HandleOpens = () => {
    setopens(!opens)
    setopen(false)

  }
  return (
    <div className="w-full px-2 py-1 bg-[#CCCCCC] h-full mx-auto">
      <div className="menu  relative  w-full mt-[-2px]">
        <div className=" bg-[#04A1A6] border-b-2 cursor-pointer py-2 flex items-center justify-between" onClick={HandleOpen}>
          <h2 className="px-2 font-bold text-white"  >Others</h2>
          {open ? (
            <span><i className="ri-arrow-drop-down-line px-2 text-3xl "></i></span>
          ) : (
            <span><i className="ri-arrow-drop-up-line px-2 text-3xl "></i></span>
          )}
        </div>
        <div
          className={`w-full absolute   border-b-[1px] px-2 bg-[#BBBBBB] flex-col min-h-[70vh] ${open ? "flex" : 'hidden'
            } transition-all duration-500 ease-in-out opacity-${open ? '100' : '0'} transform-${open ? 'translate-y-0' : 'translate-y-full'}`}
        >           <Link to="/tembo-casino" className="mb-2 border-b-[1px] border-[#ACACAC]  text-white hover:text-gray-300">
            <span className="animate-blink border-[#ACACAC] mb-2 text-black text-sm ">Tembo Casino</span>
          </Link>
          <Link to="/live-casino" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Live Casino</Link>
          <Link to="/slot-game" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Slot Game</Link>
          <Link to="/race-20-20" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Race 20-20</Link>
          <Link to="/casino-queen" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Casino Queen</Link>
          <Link to="/dragon-tiger" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Dragon Tiger</Link>
          <Link to="/sports-casino" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Sports Casino</Link>
          <Link to="/andar-bahar" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Andar Bahar</Link>
          <Link to="/bollywood-casino" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Bollywood Casino</Link>
          <Link to="/casino-war" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Casino War</Link>
          <Link to="/worli" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Worli</Link>
          <Link to="/lottery" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Lottery</Link>
          <Link to="/3-cards-judgement" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">3 Cards Judgement</Link>
          <Link to="/binary" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Binary</Link>
          <Link to="/virtual-sports" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Virtual Sports</Link>
          <Link to="/cricket-casino" className=" border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Cricket Casino</Link>
        </div>
        <div className={` bg-[#04A1A6] cursor-pointer py-2 flex items-center justify-between ${open ? 'main-link':''}`} onClick={HandleOpens}>
          <h2 className="px-2 font-bold text-white"  >All Sports</h2>
          {opens ? (
            <span><i className="ri-arrow-drop-down-line px-2 text-3xl "></i></span>
          ) : (
            <span><i className="ri-arrow-drop-up-line px-2 text-3xl "></i></span>
          )}
        </div>
        <div className={`w-full absolute border-2 px-2  bg-[#BBBBBB]  flex-col min-h-[100%] ${opens ? "flex" : 'hidden'}  `}>
        <Link to="/football" className="mb-2 text-white hover:text-gray-300">
    <span className="animate-blink border-[#ACACAC] mb-2 text-black text-sm">Football</span>
  </Link>
  <Link to="/tennis" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Tennis</Link>
  <Link to="/cricket" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Cricket</Link>
  <Link to="/esoccer" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Esoccer</Link>
  <Link to="/ice-hockey" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Ice Hockey</Link>
  <Link to="/volleyball" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Volleyball</Link>
  <Link to="/politics" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Politics</Link>
  <Link to="/basketball" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Basketball</Link>
  <Link to="/table-tennis" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Table Tennis</Link>
  <Link to="/darts" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Darts</Link>
  <Link to="/badminton" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Badminton</Link>
  <Link to="/kabaddi" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Kabaddi</Link>
  <Link to="/boxing" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Boxing</Link>
  <Link to="/mixed-martial-arts" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Mixed Martial Arts</Link>
  <Link to="/american-football" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">American Football</Link>
  <Link to="/motor-sport" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Motor Sport</Link>
  <Link to="/boat-racing" className="border-b-[1px] border-[#ACACAC] mb-2 text-black text-sm hover:text-gray-300">Boat Racing</Link>
        </div>

      </div>
    </div>
  )
}

export default SideBars