import Heading from '../common/Heading'
import { WHO_USES_FRISPES_DATA_LIST } from '../common/Helper'

const WhoUsesFrispes = () => {
    return (
        <section className='py-4'>
            <div className="container">
                <Heading className='text-deep-blue text-center'>Who uses Frispes?</Heading>
                <p className='md:mt-6 sm:mt-3 mt-2 font-lato text-light-gray font-medium text-lg text-center'>Big brands, small bussiness, new startuo and inividuals</p>
                <div className="md:mt-14 sm:mt-10 mt-7 xl:-mx-8 h-[67px] overflow-x-scroll xl:flex xl:items-center xl:overflow-x-visible">
                    <div className="w-[1175px] flex group justify-between items-center">
                        {WHO_USES_FRISPES_DATA_LIST.map((items, index) => (
                            <a key={index} href={items.URL} target='_blank' rel="noreferrer" className={`transition-slow group-hover:grayscale w-full hover:!filter-none ${index === 0 || index === 2 ? "max-w-[120px]" : index === 1 ? "max-w-[180px]" : index === 3 ? "max-w-[170px]" : index === 4 ? "max-w-[145px]" : "max-w-[107px]"}`}><img src={items.image} alt={items.image} className='w-full' /></a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhoUsesFrispes