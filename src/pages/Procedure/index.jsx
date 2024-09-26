import { useState, useRef } from "react";
import { Container, Menu, Brand, Header } from "./styles";
import { Footer } from "../../Components/Footer";
import { Button } from "../../Components/Button";
import { FaHeart } from "react-icons/fa";
import { motion } from "framer-motion";

import labiosImg1 from "../../assets/procedimentos/Labial-1-WhatsApp Image 2024-09-19 at 00.45.34.jpeg";
import labiosImg2 from "../../assets/procedimentos/Labial-2-WhatsApp Image 2024-09-17 at 14.54.20.jpeg";

import browImg1 from "../../assets/procedimentos/Brow-1-WhatsApp Image 2024-09-19 at 00.44.11.jpeg";
import browImg2 from "../../assets/procedimentos/Brow-2-WhatsApp Image 2024-09-17 at 14.51.46.jpeg";

import designImg1 from "../../assets/procedimentos/Henna-1-WhatsApp Image 2024-09-17 at 14.53.48.jpeg";
import designImg2 from "../../assets/procedimentos/Henna-2-WhatsApp Image 2024-09-19 at 00.42.56.jpeg";

import designHennaImg1 from "../../assets/procedimentos/henna-3-WhatsApp Image 2024-09-19 at 00.42 (3).jpeg";
import designHennaImg2 from "../../assets/procedimentos/henna-4-WhatsApp Image 2024-09-19 at 00.42 (2).jpeg";

const ProcedureImg = {
  Lábios: [labiosImg1, labiosImg2],
  "Brow Lamination": [browImg1, browImg2],
  Design: [designImg1, designImg2],
  "Design e Henna": [designHennaImg1, designHennaImg2],
};



export function Procedure() {
  const [selectedProcedure, setSelectedProcedure] = useState(null);
  const [fade, setFade] = useState(false);

  const container_button =useRef(null);

  const handClick = (e) =>{
    e.preventDefault()
    console.log(container_button.current)
  }

  const handleClick = (procedure) => {
    setFade(true);
    setTimeout(() => {
      setSelectedProcedure(procedure);
      setFade(false);
    }, 500);
  };

  return (
    <Container>
      <Brand>
        <h1>
          BS <br /> BEAUTY <br /> <FaHeart />
        </h1>
      </Brand>
      <Header>
        <ul>
          <a
            href="https://api.whatsapp.com/send?phone=5521977350310&text=Olá,%20gostaria%20de%20mais%20informações!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button title="Contato">Contato</button>
          </a>
        </ul>
        <ul>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <button title="Procedimentos">Procedimentos</button>
          </a>
        </ul>
        <ul>
          <a href="/">
            <button title="Home">Home</button>
          </a>
        </ul>
      </Header>
      <Menu>
        <div>
          <h1 className="title">
            Meus Procedimentos
            <span className="brow"></span>
          </h1>
        </div>

        <div className="container_button" ref={container_button}>
          <Button label="Lábios" onClick={() => handleClick("Lábios")} />
          <Button
            label="Brow Lamination"
            onClick={() => handleClick("Brow Lamination")}
          />
          <Button label="Design" onClick={() => handleClick("Design")} />
          <Button
            label="Design e Henna"
            onClick={() => handleClick("Design e Henna")}
          />
        </div>

        {selectedProcedure && (
          <div className="procedure-image">
            {ProcedureImg[selectedProcedure].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${selectedProcedure} ${index + 1}`}
                style={{ opacity: fade ? 0.5 : 1, transition: "opacity 0.5s" }}
              />
            ))}
          </div>
        )}

        <section id="beneficios" className="benefits">
          <h2>Por que escolher o BS Beauty?</h2>
          <ul>
            <li>Resultados naturais e duradouros</li>
            <li>Técnicas modernas e seguras</li>
            <li>Profissional altamente treinada</li>
            <li>Produtos de alta qualidade</li>
            <li>Ambiente acolhedor e higiênico</li>
            <li>Atendimento personalizado</li>
            <li>Economia de tempo no seu dia a dia</li>
            <li>Aumento da autoestima</li>
          </ul>
          <a
            href="https://api.whatsapp.com/send?phone=5521977350310&text=Olá,%20gostaria%20de%20mais%20informações!"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
          >
            Mude seu olhar
          </a>
        </section>
      </Menu>

      <Footer />
    </Container>
  );
}
