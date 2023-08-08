import React from 'react'
import portfolios from '../../assets/data/portfolios'

const Modal = ({ activeID, setShowModal }) => {
    const portfolio = portfolios.find(portfolio => portfolio.id === activeID)
    return (
        <div className='flex justify-center items-center w-full h-full fixed top-0 md:left-0 z-10 left-[-34px] bg-headingColor bg-opacity-40'>

            <div className="w-[80%] md:max-w-[600px] absolute md:w-full z-20 bg-white rounded-[8px] p-5">
                <div>
                    <figure>
                        <img className='rounded-[8px]' src={portfolio.imgUrl} alt="" />
                    </figure>
                </div>

                <div>
                    <h2 className='text-2xl text-headingColor font-[700] my-2'>{portfolio.title}</h2>
                    <p className='text-[15px] leading-7 text-smallTextColor'>{portfolio.description}</p>

                    <div className="mt-3 flex items-center gap-3 flex-wrap">
                        <h4 className="text-headingColor text-[18px] text-[600]">Technologies:</h4>

                        {
                            portfolio.technologies.map((item, index) => (
                                <span key={index} className='bg-gray-200 py-1 px-2 rounded-[5px] text-[14px] leading-0'>{item}</span>
                            ))
                        }
                    </div>

                    <a target='_blank' rel="noreferrer" href={portfolio.siteUrl}>
                        <button className='bg-primaryColor text-white py-2 px-4 my-8 rounded-[8px] font-[500] hover:bg-headingColor ease-in duration-300'>Live Site</button>
                    </a>
                </div>

                <button onClick={() => setShowModal(false)} className='w-[1.8rem] h-[1.8rem] bg-white absolute top-[1.7rem] right-[1.7rem] text-[25px] flex items-center justify-center rounded-[3px] leading-0 cursor-pointer'>&times;</button>
            </div>

        </div>
    )
}

export default Modal
