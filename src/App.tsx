import './index.css'
import Hero from './sections/Hero'
import Nav from './sections/Nav'
import PopularProducts from './sections/PopularProducts'

function App() {
    return (
        <main className="">
            <Nav />
            <section>
                <Hero />
                <PopularProducts />
            </section>
        </main>
    )
}

export default App