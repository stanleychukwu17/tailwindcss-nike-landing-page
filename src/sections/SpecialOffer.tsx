import {offer} from '../assets/images/index.ts'
import Button from '../components/Button.tsx'

export default function SpecialOffer() {
    return (
        <section className="flex justify-between mb-40 padding-x max-lg:flex-col">
            <div className="w-2/4 max-lg:w-full">
                <img className='rounded-lg' src={offer} alt="" />
            </div>
            <div className="hidden max-lg:block text-center mt-10">
                <Button />
            </div>
            <div className="w-2/5 mt-6 max-lg:w-full max-lg:text-center max-lg:mb-10">
                <header className="text-[65px] font-semibold leading-tight [word-spacing:5px] tracking-wide max-lg:text-4xl max-lg:font-bold">
                    We have <span className="coGreen">Special offers</span> for you!
                </header>
                <div className="text-xl leading-normal max-lg:text-lg max-lg:leading-relaxed">
                    <p className='mt-9'>Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled value that sets us apart.</p>
                    <p className='mt-9'>Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                </div>
                <div className="mt-12 flex space-x-10 max-lg:hidden">
                    <div className="">
                        <Button textShow='View details' showICon='hide' />
                    </div>
                    <div className="">
                        <Button textShow='Learn more' showICon='hide' bgColor='white' border='1px solid #000' />
                    </div>
                </div>
            </div>
        </section>
    )
}