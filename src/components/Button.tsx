import {chevronRight} from '../assets/icons/index.ts'

export default function Button() {
    return (
        <button className="bg-coral-red py-3 px-6 rounded-full font-semibold">
            Shop now
            <img className='inline w-6 ml-3' src={chevronRight} alt=" right arrow" />
        </button>
    )
}