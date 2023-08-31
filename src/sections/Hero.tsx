import chevron_right from '../assets/icons/chevron-right.svg'

export default function Hero() {
    return (
        <section className="relative padding-x py-5 text-base">
            <div className="">
                <div className="pt-12 text-lg text-coral-red font-medium">Our summer collection</div>
                <header className="text-8xl font-bold py-5 leading-[1.05] tracking-normal word-spacing-2">
                    <p>The new arrival</p>
                    <p><span className='text-coral-red'>Nike</span> shoes</p>
                </header>
                <div className="w-1/3 text-lg py-4 word-spacing-1 tracking-wide">
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