import header_logo from '../assets/images/header-logo.svg'
import hamburger from '../assets/icons/hamburger.svg'

export default function Nav() {
    return (
        <header className="relative padding-x py-4 flex justify-between items-center">
            <nav className='max-md:w-28'>
                <a href=""><img src={header_logo} alt="" /></a>
            </nav>
            <nav className='flex justify-evenly gap-12 font-medium max-md:hidden max-lg:text-sm max-lg:gap-10'>
                <div><a href="">Home</a></div>
                <div><a href="">About us</a></div>
                <div><a href="">Products</a></div>
                <div><a href="">Contact us</a></div>
            </nav>
            <div className='font-semibold text-my-green text-sm bg-[#332d34] p-2.5 px-8 rounded-full tracking-wider max-md:hidden'>
                Sign In
            </div>
            <div className="w-7 hidden max-md:block">
                <img src={hamburger} alt="" className=""/>
            </div>
        </header>
    )
}
