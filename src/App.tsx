import './index.css'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import PopularProducts from './sections/PopularProducts'
import Services from './sections/Services'
import SuperQuality from './sections/SuperQuality'
import SpecialOffer from './sections/SpecialOffer'

function App() {
    return (
        <main className="">
            <Nav />
            <section>
                <Hero />
                <PopularProducts />
                <SuperQuality />
                <Services />
                <SpecialOffer />
            </section>
        </main>
    )
}

export default App