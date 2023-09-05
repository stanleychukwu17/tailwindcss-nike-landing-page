import {shoe4, shoe5, shoe6, shoe7} from '../assets/images/index.ts'
import {star} from '../assets/icons/index.ts'

// the thumbnail images for the hero section
const thumbnailImages : {'id':number, 'src':string, ranking:number, title:string, prc:string}[] = [
    {'id':1, 'src':shoe4, ranking:4, title:'Nike Air Jordan-01', prc:'$200.20'},
    {'id':2, 'src':shoe5, ranking:4, title:'Nike Air Max Fly-01', prc:'$220.50'},
    {'id':3, 'src':shoe6, ranking:5, title:'Nike Air Jordan triple', prc:'$240.20'},
    {'id':3, 'src':shoe7, ranking:3, title:'Nike Air Supra Mixed', prc:'$310.20'},
]

// Props and Component for showing ranking
type ArrangeRankingProps = {
    ranking: number
}
const ArrangeRankingComp = ({ranking}: ArrangeRankingProps) => {
    const tempArray: number[] = []

    // fill up the array with the total ranking
    for (let i = 0; i < ranking; i++) {
        tempArray.push(i)
    }

    return (
        <div className="flex space-x-2">
            {tempArray.map(item => {
                return (
                    <div className="" key={item}>
                        <img src={star} alt="" />
                    </div>
                )
            })}
        </div>
    )
}


export default function PopularProducts() {
    return (
        <section className="padding-x my-40 max-lg:my-20 max-lg:mt-40">
            <div className="text-4xl font-semibold max-lg:text-center">Our <span className="coGreen"> Popular </span>Products</div>
            <div className="py-6 w-[600px] text-lg leading-relaxed max-lg:w-4/5 max-lg:text-center max-lg:m-auto">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</div>
            <div className="flex justify-between flex-wrap max-lg:justify-evenly">
                {thumbnailImages.map((item) => {
                    return (
                        <div className="max-lg:my-6" key={item.prc}>
                            <div  className="w-[320px] h-[320px] rounded-lg cursor-pointer" key={item.id}>
                                <img className='w-full h-full object-contain' src={item.src} alt="" />
                            </div>
                            <div className="pt-5">
                                <ArrangeRankingComp ranking={item.ranking} />
                            </div>
                            <div className="pt-4 text-xl font-bold tracking-wide">{item.title}</div>
                            <div className="pt-3 text-lg text-[#f23a83] font-semibold">{item.prc}</div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}