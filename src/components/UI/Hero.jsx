import React, { useState } from "react";
import heroImg from "../../assets/images/abhishek1.jpg";
import CountUp from "react-countup";
import Resume from "../Resume/Resume";
import Popup from "../Resume/Resume";
const Hero = () => {
    const [resume, setResume] = useState(false)

    const showResume = () => {
        setTimeout(() => {
            setResume(true)
        }, 2000);
    }
    return (
        <section className="pt-0 " id="about">
            <div className="container pt-14">
                <div className="md:flex items-center justify-center sm:flex-col md:flex-row">
                    {/*  ============ hero left content ============== */}
                    <div className="w-full md:basis-1/2">
                        <h5
                            data-aos="fade-right"
                            data-aos-durataion="1500"
                            className="text-headingColor font-[600] text-[16px] "
                        >
                            Hello welcome
                        </h5>
                        <h1
                            data-aos="fade-up"
                            data-aos-duration="1500"
                            className="text-headingColor font-[800] text-[1.8rem] sm:text-[40px] leading-[35px] sm:-[46px] mt-5"
                        >
                            I'm Abhishek Jadon <br /> Software Developer
                        </h1>

                        <div
                            data-aos="fade-up"
                            data-aos-duration="1800"
                            data-aos-delay="200"
                            className="flex items-center gap-6 mt-7"
                        >

                            <button onClick={showResume} className="bg-primaryColor text-white font-[500] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]">
                                <i class="ri-mail-line"></i>Hire me
                            </button>


                            <a
                                href="#portfolio"
                                className="text-smallTextColor font-[600] text-[16px] border-b border-solid border-smallTextColor"
                            >
                                See portfolio
                            </a>
                        </div>
                        <p
                            data-aos="fade-left"
                            data-aos-duration="1500"
                            className="flex gap-2 text-headingColor mt-10 font-[500] text-[14px] leading-5 sm:pl-14 tracking-tight text-justify sm:pr-10"
                        >
                            <span>
                                <i class="ri-apps-2-line"></i>
                            </span>
                            Highly skilled React Developer with a successful 6-month full-time internship as a frontend React Developer, followed by 6 months of professional experience as a full-time employee. Proficient in identifying web-based user interactions and implementing highly-responsive user interface components using React concepts. Expertise in translating designs and wireframes into high-quality code through JavaScript and ReactJS workflows. Adept at monitoring, optimizing frontend performance, and excels in troubleshooting and debugging to ensure enhanced overall performance.
                        </p>

                        <div className="flex items-center gap-9 mt-14">
                            <span className="text-smallTextColor text-[15px] font-[600]">
                                Follow me:
                            </span>
                            <span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.youtube.com/channel/UC2ql6nh_KpgYkULWr6baUdg?app=desktop&fbclid=PAAabtFg9jwJHsxgjIthv2eHDWATIwatc7CshX8lzlqOSqdqBzao8WAcyOIGU"
                                    className="text-smallTextColor text-[15px] font-[600]"
                                >
                                    <i class="ri-youtube-line"></i>
                                </a>
                            </span>

                            <span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://github.com/abhishekjadon66"
                                    className="text-smallTextColor text-[15px] font-[600]"
                                >
                                    <i class="ri-github-fill"></i>
                                </a>
                            </span>

                            <span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://www.facebook.com/"
                                    className="text-smallTextColor text-[15px] font-[600]"
                                >
                                    <i class="ri-facebook-line"></i>{" "}
                                </a>
                            </span>

                            <span>
                                <a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://instagram.com/sinhabhishekjadaun?igshid=MzNlNGNkZWQ4Mg=="
                                    className="text-smallTextColor text-[15px] font-[600]"
                                >
                                    <i class="ri-instagram-line"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                    {/*  ============ hero left end ============== */}

                    {/* ===============hero img==================== */}
                    <div className="basis-1/3 mt-10 sm:mt-0">
                        <figure>
                            <img
                                className="rounded-r-[170px] rounded-l-[170px] h-[28rem]"
                                src={heroImg}
                                alt=""
                            />
                        </figure>
                    </div>
                    {/* ===============hero img end==================== */}
                    {/* ===============hero content right==================== */}
                    <div className="md:basis-1/5 flex justify-between text-center mt-10 flex-wrap gap-3 md:mt-0 md:flex-col md:justify-end md:text-end">
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={1} duration={5} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                (Years of Experience with 6 months included internship)
                            </h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={100} duration={5} suffix="%" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Success Rate
                            </h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={2} duration={3} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Company are worked
                            </h4>
                        </div>
                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={1} duration={3} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                I am currently working on this SODE in this company
                            </h4>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-headingColor font-[700] text-[32px]">
                                <CountUp start={0} end={3} duration={5} suffix="+" />
                            </h2>
                            <h4 className="text-headingColor font-[600] text-[18px]">
                                Projects Completed
                            </h4>
                        </div>
                    </div>
                    {/* ===============hero content end==================== */}

                </div>
            </div>

            <Popup trigger={resume} setTrigger={setResume}>
                <Resume />
            </Popup>


        </section>
    );
};

export default Hero;
