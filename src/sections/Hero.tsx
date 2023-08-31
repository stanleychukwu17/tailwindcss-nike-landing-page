import chevron_right from '../assets/icons/chevron-right.svg'
import {bigShoe1} from '../assets/images/index.ts'

const statShow: {stat:string, info:string}[] = [
    { stat: '1k+', info:'Brands'},
    { stat: '500+', info:'Shops'},
    { stat: '250k+', info:'Customers'}
]

export default function Hero() {
    return (
        <section className="relative padding-x py-5 text-base">
            <div className="">
                <div className="pt-12 text-lg text-[#e84118] font-semibold">Our summer collection</div>
                <header className="text-8xl font-bold py-5 leading-[1.05] tracking-normal word-spacing-2 capitalize">
                    <p>The new arrival</p>
                    <p><span className='text-coral-red'>Nike</span> shoes</p>
                </header>
                <div className="w-1/3 text-lg py-4 word-spacing-1 tracking-wide">
                    Discover stylish nike arrivals, quality comfort, and innovation for your active life
                </div>
                <div className="py-4">
                    <button className="bg-coral-red py-3 px-6 rounded-full font-semibold">
                        Shop now
                        <img className='inline w-6 ml-3' src={chevron_right} alt=" right arrow" />
                    </button>
                </div>
                <div className="flex justify-between w-1/4 pt-2">
                    {statShow.map((item) => {
                        return (
                            <div className="">
                                <div className="py-3 text-2xl font-semibold">{item.stat}</div>
                                <div className="">{item.info}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className="bg-gray-600">
                <img src={bigShoe1} alt="" />
            </div>
        </section>
    )
}