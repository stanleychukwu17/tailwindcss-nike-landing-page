import {shoe4, shoe5, shoe6, shoe7} from '../assets/images/index.ts'

// the thumbnail images for the hero section
const thumbnailImages : {'id':number, 'src':string}[] = [
    {'id':1, 'src':shoe4},
    {'id':2, 'src':shoe5},
    {'id':3, 'src':shoe6},
    {'id':3, 'src':shoe7},
]

export default function PopularProducts() {
    return (
        <section className="padding-x mt-40">
            <div className="text-4xl font-semibold">Our <span className="coGreen"> Popular </span>Products</div>
            <div className="py-6 w-[600px] text-lg leading-relaxed">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</div>
            <div className="">

                {thumbnailImages.map((item) => {
                    return (
                        <div className="">
                            <div  className="thumb w-[300px] h-[300px] bg-[#efeff0] border-2 rounded-lg p-1 hover:border-[#a3a0a9] cursor-pointer" key={item.id}>
                                <img className='w-full h-full object-contain' src={item.src} alt="" />
                            </div>
                            <div className="">ranking</div>
                            <div className="">item title</div>
                            <div className="">item price</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}