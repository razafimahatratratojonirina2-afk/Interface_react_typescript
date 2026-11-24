//import { Mail } from 'lucide-react';
import './App.css';
import Hero from './sections/Hero';
import Chiffre from './sections/Chiffre';
import ChoixImage from './components/ChoixImage';
import A_Propos from './sections/A_propos';
import Action from './sections/Action';
import Citation from './sections/Citation';
//import SendEmail from './components/SendEmail';
import Contact from './sections/Contact';
import Galerie from './sections/Galerie';
import CodHerBus from './sections/CodHerBus';
import Steaminist from './sections/Steaminist';
import ContactButton from './components/ContactButton';
import GirlsCanCode from './sections/GirlsCanCode';
export default function App() {
  return (
    <>
      <nav className="container-fluid">
        <div className="logo">
          <ChoixImage
            personne={{ image: 'AFF (2).png' }}
            alt="Logo de l'association Flamingo"
            priority
          />
          <p>
            Association <span>Flamingo </span>
          </p>
        </div>
        <ul>
          <li>
            <a href="#apropos">A propos </a>
          </li>
          <li>
            <a href="#nos_action">Nos actions</a>
          </li>
          <li>
            <a href="#CodherBus">codHer-Bus</a>
          </li>
          <li>
            <a href="#galerie">Galerie</a>
          </li>
          <li>
            <a href="#apropos">Valeurs</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="contact">
          <a href="#contact">
            <ContactButton
              to='randriamampiononatsiory@gmail.com'
              subject=''
              body=''
              label='Nous contacter'
            />
          </a>
        </div>
      </nav>

      <article>
        <div id="Hero">
          <Hero />
        </div>
        <div id="chiffres">
          <Chiffre />
        </div>
        <div id="apropos">
          <A_Propos />
        </div>
        <div id="nos_action">
          <Action />
        </div>
        <div id="citation">
          <Citation />
        </div>
        <div id="CodherBus">
          <CodHerBus />
        </div>
        <div id="steamnist">
          <Steaminist />
        </div>
        <div id="girls-can-code">
          <GirlsCanCode />
        </div>
        <div id="galerie">
          <Galerie />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </article>
    </>
  );
}
