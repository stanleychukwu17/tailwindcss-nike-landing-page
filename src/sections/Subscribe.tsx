import Button from '../components/Button.tsx'

export default function Subscribe() {
    return (
        <section className="flex justify-between items-center padding-x py-5 mb-10 bg-white max-lg:flex-wrap max-lg:text-center">
            <div className="w-[450px] text-4xl font-semibold tracking-wide leading-relaxed max-lg:mb-5 max-lg:leading-normal max-lg:w-full ">
                Sign Up for Updates & Newsletter
            </div>
            <div className="mr-5 max-lg:w-full max-lg:my-2 max-lg:mx-0" >
                <div className="flex justify-between items-center py-5 pl-8 pr-2 border rounded-full max-lg:w-[400px] max-lg:m-auto">
                    <div className="">
                        <input className='w-[400px] focus:outline-none max-lg:w-[230px]' type="email" placeholder="please enter your email"/>
                    </div>
                    <div className="">
                        <Button textShow='Sign up' showICon='hide' />
                    </div>
                </div>
            </div>
        </section>
    )
}