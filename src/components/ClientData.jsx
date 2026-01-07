import "../assets/css/clients.css";
import client01 from "../assets/media/client01.png";
import client02 from "../assets/media/client02.png";
import client03 from "../assets/media/client03.png";
import client04 from "../assets/media/client04.jpeg";
import client05 from "../assets/media/client05.png";
import client06 from "../assets/media/client06.webp";
import client07 from "../assets/media/client07.png";
import client08 from "../assets/media/client08.jpeg";
import client09 from "../assets/media/client09.jpeg";

/* Just add logo file + name */
const clients = [
  { name: "Avon Tattoo Supply", logo: client01 },
  { name: "BigXTech", logo: client02 },
  { name: "Arqe Academy", logo: client03 },
  { name: "Zeno Conceal", logo: client04 },
  { name: "Raj Shah Photography", logo: client05 },
  { name: "Resonance", logo: client06 },
  { name: "SmartQR", logo: client07 },
  { name: "The Trade Tower", logo: client08 },
  { name: "Atmanirbhar Academy", logo: client09 },
];


export default function Clients() {
  return (
    <section className="clients-section">
      <div className="clients-header">
        <h2>Our <span>Clients</span></h2>
        <p>Brands that trust us for web and digital marketing solutions.</p>
      </div>

      <div className="clients-grid">
        {clients.map((client, index) => (
          <div className="client-card" key={index}>
            <img src={client.logo} alt={client.name} />
            <span>{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
