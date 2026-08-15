import Hero from "../modules/home-module/Hero"
import PopularCategories from "../modules/home-module/PopularCategories"
import PopularDishes from "../modules/home-module/PopularDishes"
const Home = () => {
    return (
        <div>
            <Hero />
            <PopularCategories title="Explore Popular Categories" />
            <PopularDishes title="Popular Dishes" />
        </div>
    )
}

export default Home
