import { AiOutlineClose } from "react-icons/ai";
import { GoDotFill } from "react-icons/go";
import "./Resume.css";
import React from "react";
const PopUp = (props) => {
  return props.trigger ? (
    <>
      <div className="popup overflow-auto touch-auto relative z-10">
        <div className="md:w-[50%] w-[22rem] relative md:top-36  pb-11 pt-20 top-72 right-9 md:right-0">
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1500"
            className="bg-white drop-shadow-2xl md:min-h-[50vh] min-w-full rounded-xl"
          >
            <span className="absolute md:top-2 md:left-2 text-gray-600 md:text-lg text-sm">
              <a href="Abhishek.pdf" download="Abhishek_jadon_resume.pdf">
                <button
                  onClick={() => props.setTrigger(false)}
                  className="bg-blue-500 shadow-lg hover:bg-blue-900 focus:bg-blue-300 rounded-lg uppercase text-black md:text-base  md:px-2 px-0  border-0 outline-none"
                >
                  <i class="ri-arrow-down-circle-line"></i>
                  <span>Resume</span>
                </button>
              </a>
            </span>
            <h3 className="text-blue-500 font-[600] text-lg text-center tracking-tight leading-5">
              Abhishek Jadon
            </h3>
            <p className="text-center text-xs space-x-1 ">
              <span>jadonabhishek332@gmail.com</span>
              <span className="border-2 border-r-0 border-gray-500"></span>
              <span>(+91)-8964893164</span>
            </p>
            <hr />
            <div className="popup-inner text-black relative">
              <span className="absolute -top-7 right-0 text-gray-600 text-lg">
                <button onClick={() => props.setTrigger(false)}>
                  <AiOutlineClose />
                </button>
                {props.children}
              </span>

              {/* Section another -1   */}
              <div className="leading-4">
                <h3 className="text-blue-500 uppercase">Expreince</h3>
                <div className="mt-1 ml-5">
                  <p className="text-gray-900 text-[13px]">
                    <span>
                      <i class="ri-apps-line"></i>
                    </span>
                    <span>
                      React developer ►Edutra technology, Noida, India (Jul 2022
                      - Sep 2022)
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Performed a pivotal role in research and testing to
                      enhance the performance of existing systems, resulting in
                      a remarkable 33% improvement in system efficiency.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Wrote application interface code via JavaScript, following
                      Next.js and Bootstrap workflows, effectively translating
                      designs and wireframes into high-quality code.
                    </span>
                  </p>
                </div>
              </div>

              {/* Section another - 2 */}
              <div className="leading-4 mt-3 ml-5">
                <div className="mt-1">
                  <p className="text-gray-900 text-[13px]">
                    <span>
                      <i class="ri-apps-line"></i>
                    </span>
                    <span>
                      React developer ►Cognicode IT Solutions, Gwalior, India
                      (Sep 2022 - Mar 2023)
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Designed and developed multiple web pages using HTML, CSS,
                      and JavaScript.
                    </span>
                  </p>

                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Implemented user-friendly features to enhance the overall
                      user experience.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Optimized web design for smartphones, improving mobile
                      user engagement.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Developed dynamic web applications using React.js and
                      Next.js.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Leveraged Node.js and Express.js to handle server-side
                      functionality.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Conducted MongoDB optimization to improve website
                      responsiveness and reduce database costs by 10%.
                    </span>
                  </p>
                </div>
              </div>

              {/* Section another - 3 */}
              <div className="leading-4 mt-5">
                <h3 className="text-blue-500 uppercase">education</h3>

                <div className="mt-1 ml-5">
                  <p className="text-gray-900 text-[13px]">
                    <span>
                      <i class="ri-apps-line"></i>
                    </span>
                    <span className="tracking-tight text-justify">
                      B.Sc. in PCM ►Jiwaji University Gwalior, Gwalior May 2019
                      - June 2022 (Jiwaji University is one of the leading
                      universities in India.)
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Achieved a CGPA of 8.1 out of 10.0, demonstrating
                      consistent academic excellence throughout the course.
                    </span>
                  </p>
                </div>
                <div className="mt-2 ml-5">
                  <p className="text-gray-900 text-[13px]">
                    <span>
                      <i class="ri-apps-line"></i>
                    </span>
                    <span className="tracking-tight text-justify">
                      Diploma in computer application ►Makhanlal Chaturvedi
                      National University, Bhopal (May 2020 - Jun 2021)
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Makhanlal Chaturvedi National University of Journalism and
                      Communication, also known as Makhanlal Chaturvedi
                      Rashtriya Patrakarita Evam Sanchar Vishwavidyalaya or in
                      short Makhanlal University, is a public university in
                      Bhopal, Madhya Pradesh, India.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px] text-blue-600">
                      Percentage: 80%
                    </span>
                  </p>
                </div>
                <div className="mt-2 ml-5">
                  <p className="text-gray-900 text-[13px]">
                    <span>
                      <i class="ri-apps-line"></i>
                    </span>
                    <span className="tracking-tight text-justify">
                      Higher secondary(12th) with PCM ► R.V.S. Public school
                      Porsa, Porsa (Jun 2018 - June 2019)
                    </span>
                  </p>

                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px] text-blue-600">
                      Percentage: 66%.
                    </span>
                  </p>
                </div>
              </div>

              {/* Section this certificate */}
              <div className="leading-4 mt-5">
                <h3 className="text-blue-500 uppercase">CERTIFICATIONS </h3>
                <div className="mt-1 ml-5">
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Completed a full-time React certification internship in
                      Noida in July 2022.
                    </span>
                  </p>

                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Completed Frontend Developer Certification from Udemy in
                      July 2022.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Proficient in utilizing HTML, CSS, JavaScript, React.js,
                      and jQuery for web development.
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">
                      Strong grasp of web development technologies, including
                      HTML, CSS, JavaScript, React.js, and jQuery by W3Schools.
                    </span>
                  </p>
                </div>
              </div>

              {/* Section this Skills */}
              <div className="leading-4 mt-5">
                <h3 className="text-blue-500 uppercase">Skills</h3>
                <div className="mt-1 ml-5">
                  <p className="flex items-center mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[14px] text-black">Language:</span>
                    <span className="text-[12px] ml-1">Javascript, Java</span>
                  </p>

                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[14px] text-black">
                      Web Technologies:
                    </span>
                    <span className="text-[12px] ml-1">
                      HTML, CSS, Javascript, Context API, React Redux,{" "}
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[14px] text-black">
                      Frameworks & Library:
                    </span>
                    <span className="text-[12px] ml-1">
                      React.js, Next.js, Tailwind CSS,
                    </span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[14px] text-black">Database:</span>
                    <span className="text-[12px] ml-1">MySql,MongoDB</span>
                  </p>
                </div>
              </div>

              {/* Section this Hobbies */}
              <div className="leading-4 mt-5">
                <h3 className="text-blue-500 uppercase">Hobbies</h3>
                <div className="mt-1 ml-5">
                  <p className="flex items-center mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    {" "}
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>
                    <span className="text-[12px]">Coding</span>
                  </p>

                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>

                    <span className="text-[12px]">Music</span>
                  </p>
                  <p className="flex mt-1 leading-3 tracking-tight text-justify text-gray-700">
                    <span className="text-[10px]">
                      <GoDotFill />
                    </span>

                    <span className="text-[12px]">Cricket</span>
                  </p>
                </div>
              </div>

              {/* Section this social links */}
              <div className="flex items-center justify-between flex-wrap mt-5 md:ml-20">
                <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/abhishekjadon66"
                    className="text-smallTextColor text-[15px] font-[600]"
                  >
                    <i class="ri-github-fill"></i>
                    <span className="text-xs">@abhishekjadon66</span>
                  </a>
                </span>

                <span className="ml-28">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.linkedin.com/feed/"
                    className="text-smallTextColor text-[15px] font-[600]"
                  >
                    <i class="ri-linkedin-box-line"></i>
                    <span className="text-xs">AbhishekJadon</span>
                  </a>
                </span>

                <div />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    ""
  );
};

export default PopUp;
