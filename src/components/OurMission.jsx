
import "../assets/css/about.css";
import "../assets/css/service.css";

const Mission = [
    {
        title: "Strategy-driven design & development",
        data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda asperiores laborum expedita non ad nesciunt "
    },
    {
        title: "Performance-focused digital marketing",
        data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda asperiores laborum expedita non ad nesciunt ."
    },
    {
        title: "Clean, scalable, and modern code",
        data : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus assumenda asperiores laborum expedita non"
    }
]
export function OurMission() {
  return (
    <section className="about-section dark">
      <h2>Our Mission</h2>

      <p className="mission-desc">
        At Dk Developers, our mission goes beyond creating websites. We partner
        with businesses to build strong digital foundations, combine strategy
        with creativity, and deliver solutions that perform consistently in a
        competitive digital landscape.
      </p>
         <div className="services-grid">
        {Mission.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.data}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
