import React from "react";
import './styles/App.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";
import article1Img from "./assets/images/xmen.png"
import article2Img from "./assets/images/img2.png"
import article3Img from "./assets/images/flixlandia.png"

import { Counter } from "./components/Counter/Counter";
class App extends React.Component {

  render(){
    return (
    <>
      <Navbar />

      <section id="articles">
        <Article title="Xmen 97" 
        provider="Sinopse da série+" 
        description="A trama acompanha o bando de mutantes que usam seus dons extraordinários para proteger um mundo que os odeia e os teme', 
        enquanto se deparam com um novo futuro perigoso e inesperado."
        thumbnail={article1Img}
        />
        <Article title="Xmen 97 - Lembre-se Disso" 
        provider="Sinopse do quinto episódio" 
        description="A equipe vai a Genosha como convidada da ONU 
        enquanto uma entrevista ameaça expor os seus segredos." 
        thumbnail={article2Img}
        />
        <Article title="Xmen 97 - O Início da Libertação Mutante" 
        provider="Sinopese do segundo episódio"
        description="Magneto é levado a julgamento pela ONU e um grupo
        anti-mutantes testa sua determinação."
        thumbnail={article3Img}/>

        <Counter />
      </section>
      </>
    );
  }
}

export default App;
