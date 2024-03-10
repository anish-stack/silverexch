import { Link } from 'react-router-dom'
import './Header.css'
import { useEffect, useState } from 'react'
import Downheader from './Downheader'
const Header = () => {
    const [showdrop, setShowDrop] = useState(false)
    const [showMenu, setshowMenu] = useState(false)

    const hanldeSignOut = () => {
        sessionStorage.removeItem('auth')
        window.location.href = "/"
    }
    const handleMenuOpen = () => {
        setshowMenu(!showMenu)
    }
    const handleOpen = () => {
        setShowDrop(!showdrop)
    }
    const handleonClose = () => {
        setShowDrop(false)
        setshowMenu(false)
    }
    const [showDropHeader, setShowDropHeader] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth > 1080;
            setShowDropHeader(isMobile);
        };

        // Initial check and event listener for window resize
        handleResize();
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    return (
        <div className='w-full   bg-[#04A1A6] shadow-lg'>
            <div className="w-full flex items-center justify-between">
                <Link to="/" className='logo-side p-2'>
                    <img src="https://dzm0kbaskt4pv.cloudfront.net/v16/static/themes/silverexch.com/front/logo.png" className='w-[210px] h-20' alt="logo" />
                </Link>
                <div className='nav '>
                    <nav className='navbar'>
                        <ul className='list flex items-center gap-4'>
                            <li>
                                <div className='Serach-Input w-[700px]'>
                                    <input
                                        className='rounded-md px-2 py-2 w-full focus:outline-2 focus:outline-red-400'
                                        type=""
                                        name="search"
                                        value=""
                                        placeholder='Search Here ...'
                                    />
                                </div>
                            </li>


                            <div className={`navs ${showMenu ? 'flexs' : ''} `}>

                                <li onClick={handleonClose} className='text-xl font-bold cursor-pointer transition-all duration-150 text-white hover:text-black'><Link to="/Rules">Rules</Link></li>
                                <li onClick={handleonClose} className='text-xl font-bold cursor-pointer transition-all duration-150 text-white hover:text-black'><Link to="/Balence" >Balance : 0</Link></li>
                                <li className='text-xl relative user font-bold cursor-pointer transition-all duration-150  hover:text-black'>
                                    <div className='user-info' onClick={handleOpen} >
                                        <h2 className='user-id'>2277D <span><i className="ri-arrow-drop-down-fill text-2xl text-black "></i></span></h2>
                                    </div>
                                    <div className={`user-drop shadow-xl bg-green-400  p-2 min-w-[200px] fixed ${showdrop ? 'show' : ''} `}>
                                        <ul className='flex p-2 flex-col gap-2'>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Account-Statement">Account Statement</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Profit-Loss-Report">Profit Loss Report</Link></li>

                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Bet-History">Bet History</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Unsetteled-Bet">Unsetteled Bet</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Casino-Report-History">Casino Report History</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Set-Button-Values">Set Button Values</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Security-Auth-Verification">Security Auth Verification</Link></li>
                                            <li onClick={handleonClose} className='text-black hover:underline text-sm'><Link to="/Change-Password">Change Password</Link></li>
                                            <div onClick={hanldeSignOut} className='signout'>
                                                <li className='text-black mt-1 text-sm'><Link>Signout</Link></li>

                                            </div>

                                        </ul>
                                    </div>
                                </li>
                            </div>
                            <li className='text-xl font-bold block lg:hidden xl:hidden cursor-pointer transition-all duration-150 text-white hover:text-black' onClick={handleMenuOpen} ><Link  ><i className="ri-menu-line"></i></Link></li>


                        </ul>
                    </nav>
                </div>

            </div>
            <marquee>
                Check out our new advanced and updated version D247 for best gaming experience with new multiple games and much more. Ask your agent for ID.
            </marquee>
            {showDropHeader && <Downheader />}
        </div>
    )
}

export default Header