import { Container } from "./styles";
import { FaPhone } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";


export function Footer() {
  return (
    <Container>
      <div>
        <FaPhone />
        <span>(21) 9 7735-0310</span>

        <FaInstagram />
        <span>@beathrizsilva.beuty</span>

        <FaMapMarkerAlt />
        <span>
          {" "}
          R. Srg. Raimundo Nonato, 899
        </span>
      </div>
    </Container>
  );
}
