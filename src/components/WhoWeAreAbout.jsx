
import "../assets/css/about.css";
import AboutImg from '../assets/media/abhero.jpg'
export default function WhoWeAreAbout() {
  return (
    <section className="about-section">
      <img src={AboutImg} alt="About Hero Sec" className="img-fluid"/>
      <h2>Who We Are</h2>

      <p className="about-lead">
        A digital-first team helping businesses build visibility, engagement, and
        long-term growth.
      </p>

      <p>
      At Dk Developers, we are a digital-first web and digital marketing agency focused on helping businesses build a powerful online presence, attract the right audience, and achieve long-term, sustainable growth. We specialize in modern website design and development, SEO optimization, and performance-driven digital marketing strategies that are tailored to real business goals. Our approach combines clean, scalable code, user-focused design, and data-backed marketing campaigns to ensure every project delivers measurable results. From crafting fast, responsive, and conversion-optimized websites to executing targeted SEO, social media, and paid marketing campaigns, we work closely with brands to improve visibility, engagement, and lead generation. We believe in transparent communication, strategic planning, and building digital solutions that not only look great but also perform consistently in a competitive online landscape. Our mission is simple — to partner with businesses, understand their challenges, and create digital experiences that drive growth, credibility, and long-term success.
      </p>
    </section>
  );
}
