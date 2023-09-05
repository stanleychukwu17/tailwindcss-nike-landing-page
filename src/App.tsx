import './index.css'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import PopularProducts from './sections/PopularProducts'
import SuperQuality from './sections/SuperQuality'

function App() {
    return (
        <main className="">
            <Nav />
            <section>
                <Hero />
                <PopularProducts />
                <SuperQuality />
            </section>
        </main>
    )
}

export default App