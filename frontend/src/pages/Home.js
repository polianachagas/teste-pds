import Carousel from '../layout/Carousel.jsx';
import '../styles/Home.css';
import React from 'react'

export default function Home() {
  return (
    <div className='container'>

      <div className='comida-container'>
          <h2 style={{ textAlign: "center" }}>Nossa comida</h2>
          <Carousel />
      </div>

      <div className='historia-container'>
        <img src='restaurante.jpg' className='historia-img'/>

        <div className='text-historia'>
            <p>
              Nascemos da vontade de trazer para o seu dia a dia o sabor do almoço de domingo.
              Cozinhamos em pequenos lotes, com ingredientes frescos de produtores locais.
            </p>

            <ul>
              <li>✔️ Pratos do dia sempre frescos</li>
              <li>✔️ Opções vegetarianas</li>
              <li>✔️ Entrega no bairro</li>
            </ul>
        </div>
      </div>

      <div className="hour-container">
        <h2 className="hour-title">Horários & Localização</h2>

        <div className="info-hour">
          <div>
            <h4>Horário</h4>
            <p>Seg–Sex: 11h–15h • Sáb: 11h–16h</p>
          </div>
          <div>
            <h4>Endereço</h4>
            <p>Rua das Mangueiras, 123 • Centro</p>
          </div>
          <div>
            <h4>Contato</h4>
            <p>(11) 99999-9999</p>
          </div>
        </div>
      </div>

      <footer className="home_footer">
          <p>© {new Date().getFullYear()} Sabor de Casa • Feito com ❤</p>
      </footer>
    </div>
  )
}
