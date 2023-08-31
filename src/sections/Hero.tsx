import { useCallback, useEffect, useState } from 'react'
import chevron_right from '../assets/icons/chevron-right.svg'
import {bigShoe1, bigShoe2, bigShoe3} from '../assets/images/index.ts'

// carries the information for stats of the product
const statShow: {stat:string, info:string}[] = [
    { stat: '1k+', info:'Brands'},
    { stat: '500+', info:'Shops'},
    { stat: '250k+', info:'Customers'}
]

// the thumbnail images for the hero section
const thumbnailImages : {'id':number, 'src':string}[] = [
    {'id':1, 'src':bigShoe1},
    {'id':2, 'src':bigShoe2},
    {'id':3, 'src':bigShoe3}
]

export default function Hero() {
    const [img4Hero, setImg4Hero] = useState<string>('')

    const updateHeroImg = useCallback((newImg:string, id:number) => {
        const activeElement = document.querySelector(`div[data-sid="thumb${id}"]`)
        const allElements = document.querySelector('.thumbActive') as HTMLElement
        // .()

        // remove the active 
        allElements?.classList.remove('thumbActive')
        activeElement?.classList.add('thumbActive')

        setImg4Hero(newImg)
    }, [])

    useEffect(() => {
        updateHeroImg(thumbnailImages[0].src, thumbnailImages[0].id)
    }, [])

    return (
        <section className="flex relative padding-x py-5 text-base max-lg:flex-col">
            <div className="relative z-10 max-lg:text-center">
                <div className="pt-12 text-lg text-[#7f8fa6] font-semibold">Our summer collection</div>
                <header className="text-8xl font-bold py-5 leading-[1.05] tracking-normal word-spacing-2 capitalize max-lg:w-[98%] max-lg:text-[5.8rem]">
                    <p>The new arrival</p>
                    <p><span className='coGreen'>Nike</span> shoes</p>
                </header>
                <div className="w-3/4 text-lg py-4 word-spacing-1 tracking-wide leading-relaxed max-lg:m-auto">
                    Discover stylish nike arrivals, quality comfort, and innovation for your active life
                </div>
                <div className="py-4">
                    <button className="bg-coral-red py-3 px-6 rounded-full font-semibold">
                        Shop now
                        <img className='inline w-6 ml-3' src={chevron_right} alt=" right arrow" />
                    </button>
                </div>
                <div className="flex justify-between w-8/12 pt-2 max-lg:w-[95%]">
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
            <div className="relative max-lg:mt-14">
                <div className="Abs_background"></div>
                <div className="flex justify-center items-center relative z-10 h-[510px]">
                    <img className='w-3/4' src={img4Hero} alt="" />
                </div>
                <div className="relative z-10 flex justify-center space-x-4">
                    {thumbnailImages.map((item) => {
                        const sid = `thumb${item.id}`

                        return (
                            <div 
                                data-sid={sid}
                                className="thumb w-36 h-36 bg-[#efeff0] border-2 rounded-lg p-1 hover:border-[#a3a0a9] cursor-pointer"
                                key={item.id}
                                onClick={() => { updateHeroImg(item.src, item.id) }}
                            >
                                <img className='w-full h-full object-contain' src={item.src} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}