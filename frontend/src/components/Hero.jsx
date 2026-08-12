import Banner from '../assets/hero.png'
const Hero = () => {
  return (
    <>
    <div className='bg-gradient-to-r from-orange-50 to-red-50 py-16 lg:py-16'>
		<div className='max-w-360 mx-auto lg:px-8 px-5'>
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
				{/* Left Column - Content */}
				<div className='flex flex-col justify-center space-y-6'>
					<div>
						<span className='text-orange-600 font-bold text-lg tracking-wider uppercase'>Welcome to XFoodie</span>
						<h1 className='text-4xl lg:text-5xl font-bold text-gray-900 mt-3 leading-tight'>
							Discover Delicious <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500'>Food Experience</span>
						</h1>
					</div>
					
					<p className='text-gray-600 text-lg leading-relaxed'>
						Explore a world of flavors with our carefully curated menu. From traditional favorites to modern delights, every dish is crafted with passion and the finest ingredients.
					</p>

					<div className='flex flex-col sm:flex-row gap-4 pt-4'>
						<button className='bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2'>
							<span>Order Now</span>
						
						</button>
						<button className='border-2 border-orange-500 text-orange-600 hover:bg-orange-50 font-semibold py-3 px-8 rounded-lg transition-all duration-300'>
							View Menu
						</button>
					</div>

					{/* Stats */}
					<div className='flex gap-8 pt-4'>
						<div>
							<p className='text-3xl font-bold text-orange-600'>500+</p>
							<p className='text-gray-600 text-sm'>Delicious Dishes</p>
						</div>
						<div>
							<p className='text-3xl font-bold text-red-500'>4.9★</p>
							<p className='text-gray-600 text-sm'>Customer Rating</p>
						</div>
						<div>
							<p className='text-3xl font-bold text-orange-600'>24/7</p>
							<p className='text-gray-600 text-sm'>Fast Delivery</p>
						</div>
					</div>
				</div>

				{/* Right Column - Image */}
				<div className='relative'>
					<div className='absolute -inset-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-2xl blur-xl opacity-30'></div>
					<img 
						src={Banner}
						alt="Delicious Food"
						className='relative max-h-130 rounded-2xl shadow-2xl w-full h-auto object-cover'
					/>
				</div>
			</div>
		</div>
	</div>
    </>
  )
}

export default Hero
