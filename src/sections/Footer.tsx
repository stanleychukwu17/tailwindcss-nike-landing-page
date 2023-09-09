import {facebook, twitter, instagram} from '../assets/icons/index.ts'
import {footerLogo} from '../assets/images/index.ts'

const side1 = {
    title: 'Products',
    links: ['Air Force 1', 'Air Max 1', 'Air Jordan 1', 'Air Force 2', 'Nike Waffle Racer', 'Nike Corteva']
}

type SideType = typeof side1;

const side2: SideType = {
    title: 'Help',
    links: ['About us', 'FAQs', 'How it works', 'Privacy policy', 'Payment policy']
}

const side3: SideType = {
    title: 'Get in touch',
    links: ['Customer@nike.com', '+44 205 578 102 655']
}




type H1CompProps = {
    info: SideType
}

const H1Comp = ({info} : H1CompProps) => {
    return (
        <div className="">
            <div className="text-2xl font-semibold">{info.title}</div>
            <div className="mt-5">
                {info.links.map(item => {
                    return (
                        <div className="my-3 cursor-pointer text-white-400 hover:text-slate-gray">{item}</div>
                    )
                })}
            </div>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className='bg-black text-white padding-x py-12'>
            <div className="flex justify-between">
                <div className="w-[400px]">
                    <div className="">
                        <img className='w-40' src={footerLogo} alt="" />
                    </div>
                    <div className="py-7 text-base tracking-wide">Get shoes ready for the new term at your nearest Nike store. Find Your perfect Size In Store. Get Rewards</div>
                    <div className="flex space-x-4 py-1">
                        <div className="bg-white p-3 rounded-full"><img src={facebook} alt="" /></div>
                        <div className="bg-white p-3 rounded-full"><img src={twitter} alt="" /></div>
                        <div className="bg-white p-3 rounded-full"><img src={instagram} alt="" /></div>
                    </div>
                </div>
                <div className="">
                    <H1Comp info={side1} />
                </div>
                <div className="">
                    <H1Comp info={side2} />
                </div>
                <div className="mr-28">
                    <H1Comp info={side3} />
                </div>
            </div>
            <div className="flex justify-between pr-10">
                <div className="cursor-pointer text-white-400 hover:text-slate-gray">Copyright. All rights reserved.</div>
                <div className="cursor-pointer text-white-400 hover:text-slate-gray">Terms & Conditions</div>
            </div>
        </footer>
    )
}