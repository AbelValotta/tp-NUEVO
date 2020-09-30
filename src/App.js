import React from 'react';

import './App.css';
import 'antd/dist/antd.css';
import { Avatar } from 'antd';
import { Rate } from 'antd';
import { Pagination } from 'antd';

import { Card, Col, Row } from 'antd';
import { Button } from 'antd';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;









function App() {
  return (
    <div className="App">
      <Layout className="layout">
    <Header>
      <div className="logo" />
      
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">
        <Avatar src="https://i.pinimg.com/originals/30/0e/58/300e58c8416a68dcfcf1761501348243.jpg" />
        
        
        </Menu.Item>
      
        
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px' }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        
        
      </Breadcrumb>
      <div className="site-layout-content">
      

      <header>


<p class="subsuelo">
</p>
</header>

<Pagination defaultCurrent={1} total={50} /> Pagina de inicio
<body>
<Rate allowHalf defaultValue={5} />
 <article>
<h1>Guia del juego</h1>
<video src= "https://lolstatic-a.akamaihd.net/frontpage/apps/prod/harbinger-l10-website/es-ar/production/es-ar/static/experience-720-d5afe06bd7f50d8078d0a7b635c726b2.webm" controls></video>
<img src= "http://tribecareview.es/wp-content/uploads/2018/01/League-Of-Legends-7.jpg"></img>
 </article>
  
<article >
	<h3>Elementos fundamentales del juego</h3>


  
	<article class="subbloque">
		<h4>Principios básicos del mapa y del juego</h4>
		<p>League of Legends está estructurado en 3 líneas, con 2 torres a derribar por carril y un nexo defendido por 3 torres exteriores (una por línea) que defienden en exclusiva 3 inhibidores (que al ser destruídos favorecen la creación de súbditos más fuertes (super minions, mucho más grandes y fuertes, empujando o en el argot, pusheando las líneas mucho más rápido hacia el nexo enemigo) por parte del equipo que lo destruye y 2 torretas (más dañinas que el resto) y que defienden exclusivamente el nexo de ser destruído, lo que significaría el final de la partida.
    Este concepto no ha cambiado desde la creación del juego y sigue siendo el más importante a la hora de ganar la partida. El movimiento de los compañeros y las diferentes estructuras pueden ser seguidos constantemente a través el mapa, y el de los enemigos queda limitado por la niebla de guerra (fog of war), para la que necesitaremos invertir nuestro oro en guardianes de visión y así posibilitarnos observar los movimientos del enemigo.
    </p>
    <p>El constante visionado del mapa para asistir a nuestros compañeros y/o anular a los enemigos es de vital importancia en el desarrollo de las partidas.</p>








	</article>
  <article class="subbloque">
		<h4>Roles de los personajes en el LoL</h4>
		<p>Los roles han venido predeterminados por el META fundamentalmente desde su creación: TOP (Carril superior), 
      JUNGLA (haciéndose cargo de los mounstros objetivo que la ocupan), MEDIO (carril intermedio) y BOT (carril inferior, normalmente ocupado 
      por 2 personajes).</p>
        <p>Como hemos comentado anteriormente, debido a las constantes actualizaciones de contenido y lo grande que es la comunidad de “invocadores” o “summoners” (jugadores), existen tutoriales e información en múltiples plataformas (youtube, mobafire,mobalitics, op.gg, reddit y los respectivos subreddit como summonerschool o los subreddit específicos de cada personaje del juego) presentando guías tanto para principiantes como expertos para actualizarse con facilidad a la carta sobre cada parche y la famosa estructuración por niveles (tier list) del impacto potencial de cada personaje en la partida en función de cada parche: God Tier- Nivel Dios (S), Strong -Fuerte (A), Good-Bueno (B), Average-Medio (C), Below Average- Bajo la media (D), Weak- Débil (E).</p>






	</article>
  <article class="subbloque">
		<h4>Runas</h4>
		<p>La mayor novedad de la temporada 8 del LoL en lo que a jugabilidad se refiere son las runas, es decir, lo que añadimos a nuestro personaje en el transcurso de la selección de campeones previa a la partida para adaptarlos a cada partida y determinar la forma en que los jugamos. Contamos con 5 árboles de runas primarios que pueden combinarse con un árbol secundario. Sin entrar en profundidad en las posibilidades y variantes, los árboles de runas son los siguientes:</p>
    <ul>
			<li><strong>Brujería:</strong>Habilidades potenciadas y manipulación de recursos</li>
			<li><strong>Valor:</strong> Durabilidad y control de masas</li>
			<li><strong>Inspiración:</strong>  Herramientas creativas y manipulación de las reglas</li>
			<li><strong>Dominación:</strong>Daño explosivo y acceso a objetivos</li>
			<li><strong>Precisión:</strong> Ataques mejorados y daño sostenido</li>	
		</ul>




	</article>
  
</article>

<img src= "http://tribecareview.es/wp-content/uploads/2018/01/League-Of-Legends-8.jpg"></img>

</body>
<p>Fuente: <a href="https://medlineplus.gov/spanish/benefitsofexercise.html">MedlinePlus</a></p>
      </div>
    </Content>
    <Footer style={{ color: 'black' , textAlign: 'center' }}><p>Juega Ya!! <a href="https://signup.las.leagueoflegends.com/es/signup/index#/">League of Legends</a></p></Footer>
  </Layout>,

    </div>
  );
}

export default App;
