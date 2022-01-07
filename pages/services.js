import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'

export default function Services() {
  
  const [selected, setSelected] = useState('soutenir')

  return (
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>nos services</title>
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css"  href="css/bootstrap.css" />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
      <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
      <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
      <link href="css/animate.css" rel="stylesheet" media="screen" />
      <link rel="stylesheet" type="text/css"  href="style.css" />
      <link rel="stylesheet" type="text/css"  href="montre.css" />
      <link href='https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Montserrat:100,200,300,300i,400,500,600,700,800,900' rel='stylesheet' type='text/css' />
      </Head>
      <body className="page">
        <NavBar />
      <div id="page-banner">
        <div className="content  wow fdeInUp">
          <div className="container ">
            <h1>Nous créons des expériences numériques de pointe.</h1>
          </div>
        </div>
      </div>
      <section id="about-us-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Vous avez bâti une entreprise incroyable. Nous veillons à ce que les gens s'en souviennent.</h2>
        {/* <a href="page.html">Mission brief</a> */}
        <p>
        Nous aidons les entreprises comme la vôtre à définir ce qui les rend uniques et à en faire une expérience en ligne de premier ordre. Ces expériences stimulent la croissance en ligne et améliorent finalement le résultat net.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="about-us-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Ce que nous faisons.</h2>
        {/* <a href="page.html">Mission brief</a> */}
        <p>
        Vous méritez mieux qu'une option unique. Les capacités de notre agence se concentrent sur une chose : la création de sites Web leaders du secteur. Vous trouverez ci-dessous une brève liste des domaines où nous excellons.
        </p>
      </div>
    </div>
  </div>
</section>
      {/* <svg width="200" height="200" viewBox="-100 -100 200 200">
  <circle className="minute_marker" r="90" pathLength="60" />
  <circle className="hour_marker" r="90" pathLength="60" />
  <text id="text" className="text" x="45" y="5"></text>

  <g id="hour_hand">
    <line className="hand" x1="0" y1="0" x2="0" y2="-50" />
    <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-50" />
  </g>

  <g id="minute_hand">
    <line className="hand" x1="0" y1="0" x2="0" y2="-80" />
    <line className="hand hand--thick" x1="0" y1="-12" x2="0" y2="-80" />
  </g>

  <g id="second_hand">
    <line className="hand hand--second" x1="0" y1="12" x2="0" y2="-80" />
  </g>

  <circle className="center" r="3" />
      </svg> */}
<div className="containers">
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/design_128.png?raw=true" />
                    <h3>Conception</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <ul className="text-danger">
                      <li>Direction créative</li>
                      <li>Guides de marque</li>
                      <li>Prototypes</li>
                      <li>UI/UX & Web Design</li>
                      <li>Création d'actifs visuels</li>
                      <li>Motion Design</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/code_128.png?raw=true" />
                    <h3>Code</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <ul className="text-danger">
                      <li>Conception de l'architecture système</li>
                      <li>Développement full-stack</li>
                      <li>Intégrations tierces Optimisation des performances</li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                    <img src="https://github.com/Jhonierpc/WebDevelopment/blob/master/CSS%20Card%20Hover%20Effects/img/launch_128.png?raw=true" />
                    <h3>Launch</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                <ul className="text-danger">
                      <li>Analyse et recherche</li>
                      <li>Ateliers interactifs</li>
                      <li>Stratégie de marque</li>
                      <li>Stratégie de contenu</li>
                      <li>Stratégie numérique</li>
                      <li>Optimisation de conversion</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div id="page-body">
  <div className="container">
    <div className="row  wow fdeInUp"> 
    <aside className="col-md-2 col-sm-5" style={{padding:0}} > 
        <section className="widget widget_categories  wow fdeInUp">
          <ul >
            <li ><a onClick={()=>setSelected('construire')}> Construire</a> </li>
            <li><a onClick={()=>setSelected('grandir')}> Grandir </a></li>
            <li ><a onClick={()=>setSelected('soutenir')}> Soutenir </a> </li>
          </ul>
        </section> 
      </aside>
      <div className="col-md-6 col-sm-7 col-xs-12 page-block"> 
          {
              selected === 'construire' && 
              (
                  <div className="text-danger">
                      <h3>QU'EST-CE QUE LA CONSTRUCTION ?</h3>
                      <p>Construire est une approche de base axée sur la refonte et la réingénierie complètes de votre site Web existant.</p>
                      <h3>CONSTRUISEZ UN AJUSTEMENT PARFAIT SI...</h3>
                      <ul>
                          <li>Vous avez récemment subi un changement de marque, ou prévoyez de subir un changement de marque</li>
                          <li>Votre site Web actuel rencontre de nombreux problèmes techniques</li>
                          <li>Votre site Web actuel est obsolète depuis plus de 5 ans</li>
                      </ul>
                      <h3>QU'EST-CE QUE CELA COMPREND?</h3>
                      <p>Un atelier de lancement numérique ou en personne, planification stratégique, conception UI/UX, rédaction, référencement sur site, création d'actifs, développement Web full-stack, intégration CMS, intégrations tierces et contrôle qualité interne.</p>
                  </div>
              )
          }
          {
              selected === 'grandir' && 
              (
                  <div className="text-danger">
                      <h3>QU'EST-CE QUI GRANDIR ?</h3>
                      <p>Grandir est une approche stratégique rapide axée sur la réalisation de vos objectifs avec un site Web existant.</p>
                      <h3>GRANDIR EST UN BON CHOIX SI...</h3>
                      <ul>
                          <li>Vous êtes principalement satisfait de votre site Web actuel mais souhaitez mieux atteindre des objectifs spécifiques</li>
                          <li>Vous avez besoin de résultats à court terme</li>
                          <li>Les revenus de votre entreprise sont étroitement liés aux performances du site Web</li>
                      </ul>
                  </div>
              )
          }
          {
              selected === 'soutenir' && 
              (
                  <div className="text-danger">
                      <h3>QU'EST-CE QUE L'ASSISTANCE ?</h3>
                      <p>L'assistance est une approche systématique, proactive et réactive pour garantir que votre site Web est sain et sécurisé.</p>
                      <h3>LE SUPPORT EST SUPER SI…</h3>
                      <ul>
                          <li>Vous êtes satisfait de votre site Web actuel mais n'avez pas la bande passante pour le suivre</li>
                          <li>Vous n'avez pas de personnel technique en interne</li>
                          <li>Votre site Web nécessite des mises à jour de contenu périodiques, mais pas constantes</li>
                      </ul>
                      <h3>QU'EST-CE QUE CELA COMPREND?</h3>
                      <p>Audits mensuels des performances du site Web, développement Web complet, sauvegardes quotidiennes, mises à jour fréquentes du système, contrôle qualité en interne et rapports mensuels.</p>
                  </div>
              )
          }
        <div className="clearfix"></div>
      </div>
      <div className="col-md-4 col-sm-7 col-xs-12 page-block "   > 
      <div style={{backgroundColor:'black', textAlign:'center'}}>
            <h3>CE À QUOI VOUS DEVEZ VOUS ATTENDRE</h3>
            <p className="text-danger">Un gestionnaire de compte sur appel, situé dans le pays</p>
            <p className="text-white">Un site web sécurisé et toujours à jour</p>
            <p className="text-white">Un investissement de 5000 FCFA/mois ou plus</p>
          </div>
        <div className="clearfix"></div>
      </div>
      <div className="clearfix"></div>
    </div>
  </div>
</div>
    <Footer />
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script> 
<script type="text/javascript" src="js/bootstrap.js"></script> 
<script type="text/javascript" src="js/SmoothScroll.js"></script> 
<script type="text/javascript" src="js/jquery.isotope.js"></script> 
<script src="js/owl.carousel.js"></script> 
<script src="js/jquery.waypoints.min.js"></script> 

<script type="text/javascript" src="js/main.js"></script> 
<script src="js/wow.min.js"></script> 
<script>
new WOW().init();
</script> 
<script>
    {/* jQuery(document).ready(function( $ ) {
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });
    }); */}
</script>
</body>
    </div>
  )
}
{/* style= GRIT banner Our work 
Professional website design
 style= #about-us-block */}