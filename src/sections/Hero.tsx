import chevron_right from '../assets/icons/chevron-right.svg'

export default function Hero() {
    return (
        <section className="relative padding-x py-5 text-base">
            <div className="">
                <div className="pt-12">Our summer collection</div>
                <header className="text-8xl font-source3sans font-medium py-5 leading-[1.25]">
                    <p>The new arrival</p>
                    <p><span className='text-coral-red'>Nike</span> shoes</p>
                </header>
                <div className="w-1/4 text-sm py-4">
                    Discover stylish nike arrivals, quality comfort, and innovation for your active life
                </div>
                <div className="py-4">
                    <button className="bg-coral-red py-3 px-6 rounded-full text-white font-medium">
                        Shop now
                        <img className='inline w-6 ml-2' src={chevron_right} alt=" right arrow" />
                    </button>
                </div>
                <div className="">
                    statistics
                </div>
            </div>
            <div className=""></div>
        </section>
    )
}