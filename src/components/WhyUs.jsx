
import "../assets/css/about.css";
import CardImg from '../assets/media/cardimg01.svg'
import CardImg02 from '../assets/media/cardimg02.svg'
import CardImg03 from '../assets/media/cardimg03.svg'


export function WhyUs() {
  return (
    <section className="about-section">
      <h2>What Sets <span>Us Apart</span></h2>

      {/* <ul className="about-list">
        <li>Strategy-driven design & development</li>
        <li>Performance-focused digital marketing</li>
        <li>Clean, scalable, and modern code</li>
        <li>Transparent communication</li>
        <li>Long-term growth mindset</li>
      </ul> */}
 <section className="img-grid-section">
      <div className="img-grid">

        <div className="img-card landscape">
          <img src={CardImg} alt="" />
        </div>

        <div className="img-card portrait">
          <img src={CardImg02} alt="" />
        </div>

        <div className="img-card landscape">
          <img src={CardImg03} alt="" />
        </div>



      </div>
    </section>

    </section>
  );
}
