import {chevronRight} from '../assets/icons/index.ts'

type buttonProps = {
    showICon?: 'hide'|'show'
}

export default function Button({showICon}: buttonProps) {
    const icon = showICon || 'show'

    return (
        <button className="bg-coral-red py-3 px-6 rounded-full font-semibold">
            Shop now
            {icon === 'show' && (
                <img className='inline w-6 ml-3' src={chevronRight} alt=" right arrow" />
            )}
        </button>
    )
}