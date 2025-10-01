
import ArrowRight from '../assets/Icons/ArrowRight.png'
import ProductSlider from "../Components/ProductSlider";


const Slider = () => {
    return (
        <main className="min-h-screen pt-16 px-5 md:px-10">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                {/* Left Text */}
                <div className="w-full md:w-2/5">
                    <h1 className="text-xl md:text-3xl lg:text-4xl font-bold font-serif">
                        New Collection
                    </h1>
                    <p className="mt-3 font-semibold text-gray-600 text-sm md:text-base leading-relaxed">
                        Elevate your dining experience with our range of stylish dining tables
                        and chairs, designed to make every mealtime gathering a memorable
                        occasion. Whether you prefer sleek and minimalist designs.
                    </p>
                </div>

                {/* Right CTA */}
                <div className="flex items-center gap-3 md:pr-8">
                    <h1 className="font-normal text-base md:text-lg">
                        <span className="bg-[#8DEB02] rounded-full px-4 py-2">All</span>{" "}
                        collection
                    </h1>
                    <a href="#">
                        <img
                            className="w-6 h-6 md:w-8 md:h-8"
                            src={ArrowRight}
                            alt="Arrow Right"
                        />
                    </a>
                </div>
            </div>

            {/* Slider Section */}
            <div className="mt-10 ">
                <ProductSlider />
            </div>
        </main>

    )
}

export default Slider
