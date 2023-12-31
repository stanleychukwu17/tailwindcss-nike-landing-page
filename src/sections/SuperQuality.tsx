import {shoe8} from '../assets/images/index.ts'
import Button from '../components/Button.tsx'

export default function SuperQuality() {
    return (
        <section className="flex justify-between mb-40 padding-x max-lg:flex-col">
            <div className="w-2/5 mt-4 max-lg:w-full max-lg:text-center max-lg:mb-10">
                <header className="text-[65px] font-semibold leading-tight [word-spacing:5px] tracking-wide max-lg:text-4xl max-lg:font-bold">
                    We Provide You <span className="coGreen">Super Quality</span> Shoes
                </header>
                <div className="text-xl leading-normal max-lg:text-lg max-lg:leading-relaxed">
                    <p className='mt-7'>Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your experience, providing you with unmatched quality, innovation, and a touch of elegance.</p>
                    <p className='mt-7'>Our dedication to detail and excellence ensures your satisfaction</p>
                </div>
                <div className="mt-10 max-lg:hidden">
                    <Button />
                </div>
            </div>
            <div className="w-2/4 max-lg:w-full">
                <img className='rounded-lg' src={shoe8} alt="" />
            </div>
            <div className="hidden max-lg:block text-center mt-10">
                <Button />
            </div>
        </section>
    )
}