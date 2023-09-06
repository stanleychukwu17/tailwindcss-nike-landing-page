import {truckFast, shieldTick, support} from '../assets/icons/index.ts'

const whatIDo: {icon:string, title:string, content:string}[] = [
    {
        icon: truckFast,
        title:'Free shipping',
        content: 'Enjoy seamless shopping with our complimentary shipping service.'
    },
    {
        icon: shieldTick,
        title:'Secure Payment',
        content: 'Experience worry-free transactions with our secure payment options.'
    },
    {
        icon: support,
        title:'Love to help you',
        content: 'Our dedicated team is here to assist you every step of the way.'
    },
]

export default function Services() {
    return (
        <section className="w-full flex justify-between px-5 mb-28 max-xl:px-2 max-lg:flex-wrap max-lg:text-center">
            {whatIDo.map(item => {
                return (
                    <div className="px-10 max-xl:w-[350px] max-lg:mb-16 max-lg:w-full">
                        <div className="">
                            <img className='w-16 max-lg:m-auto' src={item.icon} alt="" />
                        </div>
                        <div className="text-2xl font-semibold py-5">{item.title}</div>
                        <div className="text-lg leading-relaxed">{item.content}</div>
                    </div>
                )
            })}
        </section>
    )
}