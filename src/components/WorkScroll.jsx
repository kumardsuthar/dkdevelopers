import React from "react";
import "../assets/css/scrollstack.css";
import img01 from "../assets/media/pro01.png";
import img03 from "../assets/media/pro03.png";
import img04 from "../assets/media/pro04.png";
import img05 from "../assets/media/pro05.png";
import img06 from "../assets/media/pro06.png";
import img07 from "../assets/media/pro07.png";

function WorkScroll() {
  return (
    <>
      <div className="stackHeader">
        <div>
          <h1>
            Work That Drives <span>Results</span>
          </h1>
          <p>
            From websites to marketing campaigns, these projects highlight how
            we help brands grow online.
          </p>
        </div>
      </div>
      <main>
     <ul id="cards">
             <li class="card" id="card-1">
               <div class="card-content">
                 <div>
                   <h2> ZenoConceal</h2>
                   <p>
                     A clean and simple online tool that lets users hide, blur, or
                     mask sensitive text and images. Designed for quick demos and
                     safe content sharing.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                     <span>jQuery</span>
                     <span>PHP</span>
                     <span>MySQL</span>
                   </div>
                   {/* link */}
                   <a href="https://zenoconceal.com/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                   <img src={img01} alt="card-one" />
                 </figure>
               </div>
             </li>
   
             <li class="card" id="card-3">
               <div class="card-content">
                 <div>
                   <h2>BigXTech — IT Services & Product Company</h2>
                   <p>
                     A fully responsive company website with service pages, product
                     listings, business overview, and custom UI elements for
                     startup branding.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                     <span>jQuery</span>
                     <span>PHP</span>
                     <span>MySQL</span>
                   </div>
                   {/* link */}
                   <a href="https://bigxtech.com/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                   <img src={img03} alt="card Two" />
                 </figure>
               </div>
             </li>
   
             <li class="card" id="card-1">
               <div class="card-content">
                 <div>
                   <h2>SmartQR Tech — QR Generator Platform</h2>
                   <p>
                     A fast and modern QR code generator where users can create
                     dynamic and static QR codes. Includes real-time preview,
                     download options, and custom styling features.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                    <span>E-mail JS</span>
            
                   </div>
                   {/* link */}
                   <a href="https://smartqrtech.com/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                     <img src={img04} alt="card Three" />
                 </figure>
               </div>
             </li>
   
             <li class="card" id="card-3">
               <div class="card-content">
                 <div>
                   <h2>AtmanirbharAcademy — Learning Platform</h2>
                   <p>
                  An educational platform offering courses, student resources, and instant form submissions. Designed with clean UI and optimized performance.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                     <span>PHP</span>
                     <span>MySQL</span>
                   </div>
                   {/* link */}
                   <a href="https://atmanirbharacademy.com/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                   <img src={img05} alt="card Four" />
                 </figure>
               </div>
             </li>
   
             <li class="card" id="card-1">
               <div class="card-content">
                 <div>
                   <h2>Avon Tattoo Supply</h2>
                   <p>
                  A complete e-commerce website for tattoo supplies with product listings, categories, and secure checkout. Built with modern design and smooth user experience.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                     <span>PHP</span>
                     <span>MySQL</span>
                     <span>E-mail JS</span>
                     <span>Swiper JS</span>
                     <span>Font Awesome</span>
   
                   </div>
                   {/* link */}
                   <a href="https://avon-tattoo-supply.com/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                   <img src={img06} alt="card Five" />
                 </figure>
               </div>
             </li>
   
             <li class="card" id="card-3">
               <div class="card-content">
                 <div>
                   <h2>Arqe Academy</h2>
                   <p>
                   A modern educational platform featuring course listings, student resources, and instant inquiry forms. Designed with a clean, user-friendly interface and optimized for quick navigation.
                   </p>
                   <div className="badge">
                     <span>HTML</span>
                     <span>CSS</span>
                     <span>JavaScript</span>
                     <span>Bootstrap</span>
                     <span>Google SpreadSheet</span>
   
                   </div>
                   {/* link */}
                   <a href="https://arqeacademy.in/" target="_blank" className="dark-cta">View Project</a>
                 </div>
                 <figure>
                   <img src={img07} alt="card Five" />
                 </figure>
               </div>
             </li>
           </ul>
      </main>
    </>
  );
}

export default WorkScroll;
