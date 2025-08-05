import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FaGithub, FaLinkedin, FaInstagram, FaCoffee } from 'react-icons/fa';

function App() {

  const scrollToNextPage = () => {
    document.getElementById('about-me')?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <header className="navbar">
        <div className='navbar-inner'>
          <div className="nav-left">
            <a href="#page1">Yuanhan Yu</a>
            
            </div>
          <div className="nav-right">
            <a href="#about-me">About Me</a>
            <a href="#page2">Projects</a>
            <a href="#page1">Contact</a>
          </div>
        </div>
      </header>

      <section className='page1' id="page1">
        <div>
          <div className='portrait'>

            <img src="/portrait.jpg" />
              </div>
            <div className='hero'>
              <h1>Hi, my name is Yuanhan Yu/Alvin</h1>
              <p>A Software Engineer based in the U.S. Coding, program developing, and iced mocha!!! <FaCoffee size={20} color='#A9746E' /> </p>
              <div className='button'>
                <button onClick={scrollToNextPage}>Get to know Me!</button>

              </div>
            </div>


        

          <div className='sociallinks'>
            <FaGithub size={28} />
            <a href="https://github.com/AlvinYuyyh0208" target="_blank" className='github' >GitHub</a>
            <FaLinkedin size={28} />
            <a href="https://www.linkedin.com/in/yuanhan-yu-b27627295/" target="_blank" className='linkedin'>LinkedIn</a>
            <FaInstagram size={28} />
            <a href="https://www.instagram.com/alvin__yu0208?igsh=a2hwZzducTRnMDZy&utm_source=qr" target="_blank" className='ins'>Instagram</a>

          </div>
          <div className='emailme'>
              <a   href="https://mail.google.com/mail/?view=cm&fs=1&to=avilnyu@gmail.com"
  target="_blank"
  rel="noopener noreferrer">✉️ Email Me</a>
          </div>
        



        </div>
      </section>

      <div className='spacer'></div>


      <section className='about-me' id='about-me'>

{/* photo section */}

<div className='photo-gallery'>
  <img src="/p1.jpg" alt='photo 1' />
  <img src="/p2.jpg" alt='photo 2' />
  <img src="/p3.jpg" alt='photo 3' />
  <img src="/p4.jpg" alt='photo 4' />
  <img src="/p5.jpg" alt='photo 5' />
  <img src="/p6.jpg" alt='photo 6' />
   <img src="/p7.jpg" alt='photo 7' />
  <img src="/p8.jpg" alt='photo 8' />
  <img src="/p9.jpg" alt='photo 9' />
    <img src="/p10.jpg" alt='photo 10' />
  <img src="/p11.jpg" alt='photo 11' />
  <img src="/p12.jpg" alt='photo 12' />
  

</div>


        <div className='about-me-container'>
          <h1>I'm a passionate software enginner, I'm focusing on building friendly, responsive website.
            I specialize in React,TypeScript, HTML/CSS, API integration, data analysis.</h1>
           <p> In my past few years, I hold a bachelor's degree in Software Engineering from a university in China.
             I've worn many hats — I worked as a research assistant, led a team in a tech innovation competition, served in the student union, volunteered at a marathon, and even won two singing competitions.
              I also enjoy playing the piano and guitar.
          </p>
            <p> In 2023, I decided to step out of my comfort zone and moved to the U.S alone to pursue a master's degree in computer science.
              I have built my friend group, my career goal, my academic achievement in a completely new environment.
          </p>
              <p>I thrive on challengea, and love going on new adventures. I'm into travelling, food and music —— always seeking inspiration both in life and in code.
             </p>
              
              <h2>    ——— Unyielding will lead me out of the encirclement.</h2>
                 


            

        </div>

      </section>

        <div className='spacer'></div>

      {/* page 2 - experience */}
      <section className='page2' id='page2'>
        <div className="marquee-container">
          <div className="marquee-text">
            Research Methodologies &nbsp;·&nbsp; Data Visualization &nbsp;·&nbsp; Data Analysis &nbsp;·&nbsp; Teamwork & Collaboration &nbsp;·&nbsp; Technical Writing & Documentation &nbsp;·&nbsp; Software Development
          </div>
        </div>

        <h2 className='page2-title'>Experience</h2>

        {/* card 1 education */}
        <div className='card'>
          <p><strong>Tulane University</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05.2025 Graduated</p>
          <p>Master of Science in Computer Science</p>
          <p>Main Course: AI, machine learning, algorithm, data science, data visualization, computer architecture</p>
        </div>

        {/* card 2 cloud ix */}
        <div className='card'>
          <div className="tech-tags">
  <span>#Flutter</span>
  <span>#UI/UX</span>
  <span>#WebDev</span>
  <span>#SoftwareDev</span>
  <span>#React Native</span>
  <span>#TypeScript</span>
  <span>#HTML</span>
  <span>#CSS</span>
</div>

          <p><strong>Cloud IX.Inc</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2024-present</p>
          <p>New Orleans, LA, USA</p>
          <p><strong><i>Software Developer</i></strong></p>
          <p>
            <li>Developed user interfaces using Flutter for a confidential chatbot App connecting student survivors tosexualviolence resources on and off campus, which is trusted by 10+ universities</li>
            <li> Customized UI and interaction flow for improved accessibility and efficiency</li>
            <li>Developed the company's official website with over 15 responsive pages using React</li>
            <li>Integrated frontend and backend by connecting RESTful APIs</li>

            
          </p>
        </div>



        {/* card 3 data analyst */}
        <div className='card'>
           <div className="tech-tags">
  <span>#SAS</span>
  <span>#Data Analysis</span>
  
</div>
          <p><strong>Tulane University School of Public Health and Tropical Medicine</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;05.2024-05.2025</p>
          <p>New Orleans, LA, USA</p>


          <p><strong><i>Research Assistant/Data Analyst</i></strong></p>
          <p>
            <li>Managed and processed 6 diet datasets and files of Australian Longitudinal Study of Women's Health</li>
            <li>Analyzed the data of diet pattern and life style and how it effects woman pregnancy by generating data with
              more than 15,000 observations</li>
            <li>Developed and executed SAS to analyze variables that are related to pregnancy and get values</li>
            <li>Merged and integrated pregnancy datasets and diet datasets using SAS and got outcome flowcharts by
              showing 5000+ observations and values of health factors such as gestational diabetes mellitus, gestational
              hypertension and so on</li>
          </p>
        </div>



        {/* card 4 receptionist*/}
        <div className='card'>
           <div className="tech-tags">
  <span>#Management</span>
  <span>#Organization</span>
  <span>#Communication</span>
  
</div>
          <p><strong>Tulane University Fr eeman School of Business</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;09.2024-05.2025</p>
          <p>New Orleans, LA, USA</p>


          <p><strong><i>Receptionist</i></strong></p>
          <p>
            <li>Greeted and assisted multiple visitors</li>
            <li>Managed files and organized objects</li>
            <li>Managed phone calls and emails</li>
          </p>
        </div>



        {/* card 5 simd*/}
        <div className='card'>
          
   <div className="tech-tags">
  <span>#C++</span>
  <span>#Parallel Computing</span>
  <span>#SIMD</span>
  <span>#AVX Instruction</span>
  
</div>

          <p><strong>Application of Built-in Functions and Parallelization of Line Segment Intersection in SIMD</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;06.2022-07.2022</p>
          <p>Marquette University, Online</p>


          <p><strong><i>Research Assistant</i></strong></p>
          <p>
            <li>Used C++ for programming to calculate the intersection of line segments</li>
            <li>Converted scalar codes to SIMD codes with AVX instruction set</li>
            <li>Optimized the codes to make them shorter and more efficient by speeding up 30%; assigned random values to
              test code correctness</li>
            <li>Calculated the intersections of line segment sets with two polygons by function creation and code
              acceleration</li>
          </p>
        </div>



        {/* card 6 situp*/}
        <div className='card'>

             <div className="tech-tags">
  <span>#Image Recognition</span>
  <span>Python</span>
  <span>#Mediapipe</span>
  <span>#Openpose</span>
  <span>#Gesture Detection</span>
  <span>#OpenPose</span>
  
</div>
          <p><strong>Sit-up Counting Program with Image Recognition Technology</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10.2021-01.2022</p>
          <p>Shanghai Institute of Technology University, Shanghai, China</p>


          <p><strong><i>Research Assistant</i></strong></p>
          <p>
            <li>Analyzed the algorithms of the human skeleton and other key nodes and wrote the project codes with Python</li>
            <li>Conducted the gesture detection with the use of Mediapipe framework, Openpose, and Numpy systems</li>
            <li>Optimized the codes to complete the prone position detection through Openpose</li>
            <li>Successfully created a project which could count numbers ofsit-ups with high accuracy</li>
          </p>
        </div>


        {/* card 6 situp*/}
        <div className='card'>
   <div className="tech-tags">
  <span>#Network Protocols</span>
  <span>#Golang</span>
  <span>#Analysis</span>
  
</div>

          <p><strong>Shenzhen Tencent Computer System Co., Ltd.</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;07.2021-09.2021</p>
          <p>Guangdong, China</p>


          <p><strong><i>Intern of Backend Development</i></strong> PTA Project</p>
          <p>
            <li>Identified the WeSing app's common complaint from users- the switch of network statuses was not stable</li>
            <li>Analyzed the advantages and disadvantages of different network protocols, such as TCP and QUIC</li>
            <li>Established a QUIC alternate channel with an idempotent access method to improve the efficiency of request
              response</li>
            <li>Investigated users'demands, and carried out coding development with Golang and client-side testing</li>
          </p>
        </div>


        {/* card 7 smart car*/}
        <div className='card'>
   <div className="tech-tags">
  <span>#Internet of Things</span>
  <span>#ESP32</span>
  <span>#Arduino</span>
  
</div>

          <p><strong>Demo of a smart car with the Internet of Things - Fly Innovation Cup Competition.</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;03.2021-04.2021</p>
          <p>Shanghai, China</p>


          <p><strong><i>Group Leader</i></strong></p>
          <p>
            <li>Programmed the intelligent car's control operations ofthe light, door, and wheels by Arduino and App
              Inventor</li>
            <li>Responsible for the circuit building by using motors and steering gears and welding to ESP32</li>
            <li>Completed a remote-controlled car demo based on the Internet of Things technology with stable
              performance</li>
          </p>
        </div>


      </section>
    </>
  );
}

export default App;

