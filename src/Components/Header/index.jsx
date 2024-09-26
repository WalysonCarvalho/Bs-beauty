import React from 'react';
import { Container } from './styles';
import { Link } from 'react-router-dom';

export function Header({ onLocalClick }) {
  return (
    <Container>
      <ul>
        <Link
          to="https://api.whatsapp.com/send?phone=5521977350310&text=Olá,%20gostaria%20de%20mais%20informações!"
          
          rel="noopener noreferrer"
        >
          <button title="Contato">Contato</button>
        </Link>
      </ul>
      <ul>
        <Link to="/Procedure">
          <button title="Procedimentos">Procedimentos</button>
        </Link>
      </ul>
      <ul>
        <Link onClick={onLocalClick} style={{ cursor: 'pointer' }}>
          <button title="Local">Local</button>
        </Link>
      </ul>
    </Container>
  );
}
