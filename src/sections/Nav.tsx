import header_logo from '../assets/images/header-logo.svg'

export default function Nav() {
    return (
        <header className="relative padding-x py-4 flex justify-between items-center">
            <nav>
                <a href=""><img src={header_logo} alt="" /></a>
            </nav>
            <nav className='flex justify-evenly gap-10 font-medium'>
                <div className=""><a href="" className="">Home</a></div>
                <div className=""><a href="" className="">About us</a></div>
                <div className=""><a href="" className="">Products</a></div>
                <div className=""><a href="" className="">Contact us</a></div>
            </nav>
            <div className='font-semibold text-my-green text-sm bg-[#332d34] p-2.5 px-8 rounded-full tracking-wider'>
                Sign In
            </div>
        </header>
    )
}
