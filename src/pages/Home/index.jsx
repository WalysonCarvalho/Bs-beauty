import React, { useState, useEffect, useRef } from "react";
import { Container, Menu, Content, Div } from "./styles";
import { Header } from "../../Components/Header";
import { Footer } from "../../Components/Footer";
import { Button } from "../../Components/Button";
import { Brand } from "../../Components/Brand";
import img1 from "../../assets/WhatsApp Image 2024-09-13 at 14.56.07.jpeg";
import img2 from "../../assets/WhatsApp Image 2024-09-13 at 15.01.26.jpeg";
import img3 from "../../assets/WhatsApp Image 2024-09-13 at 15.08.12.jpeg";
import { FaHeart } from "react-icons/fa";

import { motion } from "framer-motion";
import foto1 from "../../assets/WhatsApp Image 2024-09-18 at 17.26.13 (1).jpeg";
import foto2 from "../../assets/WhatsApp Image 2024-09-18 at 17.26.13.jpeg";
import foto3 from "../../assets/WhatsApp Image 2024-09-18 at 17.26.14 (1).jpeg";
import foto4 from "../../assets/memphis.jpeg";
import foto5 from "../../assets/WhatsApp Image 2024-09-18 at 17.26.14.jpeg";

const images = [foto1, foto2, foto3, foto4, foto5];

export function Home() {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [animate, setAnimate] = useState(false);
  const locationRef = useRef(null);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  const handleLocalClick = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
      if (locationRef.current) {
        locationRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, 2500);
  };

  return (
    <Container>
      <Brand>
        <h1>
          BS <br /> BEAUTY <br /> <FaHeart />
        </h1>
      </Brand>
      <Header onLocalClick={handleLocalClick} />
      <Menu>
        <div>
          <h1>
            Transforme seu olhar
            <span className="brow"></span>
          </h1>
          <p>Sobrancelhas perfeitas, expressão única.</p>
          <Button
            href="https://api.whatsapp.com/send?phone=5521977350310&text=Olá,%20gostaria%20de%20mais%20informações!"
            label="Saiba mais"
          >
            SAIBA MAIS
          </Button>
        </div>
      </Menu>

      <Content>
        <div>
          <h1>Quem sou eu?</h1>
          <p>Conheça um pouco da minha história!</p>
        </div>
        <div>
          <div className="image-container">
            <img src={img1} alt="Beathriz Sorrindo" />
            <span>Apaixonada em transformar.</span>
          </div>
          <div className="image-container">
            <img src={img2} alt="Formatura Beathriz" />
            <span>Sempre alegre e feliz em conquistar meus objetivos.</span>
          </div>
          <div id="img3"className="image-container">
            <img src={img3} alt="Beathriz estudando" />
            <span>Sempre buscando me aperfeiçoar através dos estudos!</span>
          </div>
        </div>
      </Content>
      <Div
        id="location"
        className={animate ? "location-animation" : ""}
        ref={locationRef}
      >
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="salões de beleza" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Div>
      <Footer />
    </Container>
  );
}
