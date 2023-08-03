import React from 'react'
import frontendImg from '../../assets/images/front-end.png'
import backendImg from '../../assets/images/backend.png'
import database from '../../assets/images/database.png'
import others from '../../assets/images/others.jpg'

const Services = () => {
    return (
        <section id='services'>
            <div className="container lg:pt-5">
                <div className="text-center">
                    <h2 className='text-headingColor font-[800] text-[2.4rem] mb-3'>
                        Summary
                    </h2>
                    <p className='lg:max-w-[600px] lg:mx-auto text-headingColor font-[500] text-[16px] leading-5 text-justify'>Frontend React Developer with 1 years of experience creating dynamic and user-friendly web applications. Proficient in modern frontend technologies including React, JavaScript, HTML, and CSS, Tailwind css, Nextjs with a keen eye for design and usability. Demonstrated expertise in translating UI/UX wireframes into responsive, high-performance code. Strong collaboration skills, adept at working in Agile environments to deliver projects on time and within scope. Passionate about staying up-to-date with the latest web development trends and committed to delivering exceptional user experiences. Looking to contribute my skills and creativity to a dynamic team and drive the success of innovative projects.</p>
                </div>

                <div className="flex flex-col justify-center sm:py-12">
                    <div className="w-full py-3 px-2 sm:max-w-xl sm:mx-auto sm:px-0">
                        <div className="relative text-gray-700 antialiased text-sm font-semibold">

                            {/* ============vertical line running through the middle================ */}

                            <div className="hidden absolute w-1 sm:block bg-indigo-300 h-full left-1/2 transform -translate-x-1/2"></div>
                            {/* ============left card============ */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1200' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-1 group-hover:font-[600] text-xl group-hover:text-white'>Frontend Development</h3>

                                                <p className='text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] text-justify tracking-tight'>Here are the details of the skills I mentioned: HTML, CSS, Javascript, ES6, React.js, Next.js, Bootstrap, Tailwind css, Context API, React redux, Git, Github, OOPs. </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={frontendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ===========Right card========== */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-duration='1300' data-aos-delay='50' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:font-[600] text-xl group-hover:text-white'>Backend Development</h3>

                                                <p className='text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] text-justify tracking-tight'>Here are the basic knowledge skills I mentioned as a backend developer: Node.js, Express.js, JWT Token, MongoDB, RESTful API.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={backendImg} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* ui card */}
                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-start w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pr-8">
                                            <div data-aos='fade-right' data-aos-duration='1400' data-aos-delay='100' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:font-[600] text-xl group-hover:text-white'>Database</h3>

                                                <p className='text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] tracking-tight text-justify'>Here are the database knowledge skills I mentioned as a software developer: MongoDb, Mysql.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={database} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                            {/* right card again */}

                            <div className="mt-6 sm:mt-0 sm:mb-12">
                                <div className="flex items-center flex-col sm:flex-row">
                                    <div className="flex justify-end w-full mx-auto items-center">
                                        <div className="w-full sm:w-1/2 sm:pl-8">
                                            <div data-aos='fade-left' data-aos-duration='1500' data-aos-delay='150' className="bg-white p-4 rounded shadow group hover:bg-primaryColor cursor-pointer ease-in duration-150">
                                                <h3 className='text-primaryColor font-[700] mb-3 group-hover:font-[600] text-xl group-hover:text-white'>Others skills</h3>

                                                <p className='text-[14px] text-smallTextColor group-hover:text-white group-hover:font-[500] tracking-tight text-justify'>Here are the others knowledge skills I mentioned as a software developer: MS excel, Ms word, bugs fixing, and more then.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="rounded-full bg-primaryColor border-white border-4 w-10 h-10 absolute left-1/2 transform -translate-x-1/2 -translate-y-4 sm:translate-y-0 flex items-center justify-center">
                                        <figure>
                                            <img src={others} alt="" />
                                        </figure>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services
