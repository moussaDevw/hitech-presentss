import Head from 'next/head'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import style_home from './home.module.css'
import Link from 'next/link'
export default function agenceConseil(){
    return(
        <div>
      <Head>
      <meta charset="utf-8" />
      <meta http-equiv="x-ua-compatible" content="IE=9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Agence & conseils</title>
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css"  href="css/bootstrap.css" />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
      <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
      <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
      <link href="css/animate.css" rel="stylesheet" media="screen" />
      <link rel="stylesheet" type="text/css"  href="style.css" />
      <link href='https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Montserrat:100,200,300,300i,400,500,600,700,800,900' rel='stylesheet' type='text/css' />
      </Head>

      <body class="single">
        <NavBar />

<div id="Blog-post"> 
  <header class="entry-header">
    <div class="content  wow fadeInUp">
      <div class="container "> 
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><Link href="/"><a>Home</a></Link> </li>
          <li class="breadcrumb-item active">Agence & conseils</li>
        </ol>
        <h3>CONCEPTION ET DÉVELOPPEMENT DE SITES WEB POUR LES AGENCES ET LES CONSULTANTS</h3>
        <hr />
        </div>
    </div>
    <div class="arrow bounce"> <i class="fa fa-arrow-down fa-2x"></i> </div>
  </header>
  <section id="about-us-block">
  <div class="container">
    <div class="row"> 
      <div class="section-title text-center wow fadeInUp">
        <h2>Nous créons des sites portfolio pour les cabinets de conseil qui se démarquent et communiquent clairement .</h2>
        {/* <a href="page.html">Mission brief</a> */}
      </div>
    </div>
  </div>
</section>
  <div className={style_home.blog_different}>
    <div className={style_home.blog_different_section}>
    <img src="./image/3545757.jpg" className={style_home.img1} />
        <div className={style_home.blog_different_text1}>
            <h3>Votre travail ou service présenté de la manière la plus efficace possible.</h3>
            <p>Ce que vous avez accompli et ce que vous faites est précieux. Nous vous aiderons à communiquer cela aux clients potentiels de manière efficace.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
    <img src="./image/limitont.jpg" className={style_home.img2} />
          <div className={style_home.blog_different_text1}>
            <h3>Conçu pour répondre aux exigences de votre entreprise en pleine croissance.</h3>
            <p>Votre entreprise est en pleine croissance et votre industrie est en constante évolution. Nos thèmes personnalisés sont conçus pour évoluer avec les exigences de votre entreprise.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
          <img src="./image/3918929.jpg" className={style_home.img3} />
          <div className={style_home.blog_different_text1}>
            <h3>Un design qui vous différencie sur un marché concurrentiel.</h3>
            <p>Ce que vous avez accompli et ce que vous faites est précieux. Nous vous aiderons à communiquer cela aux clients potentiels de manière efficace.</p>
        </div>
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
</body>
    </div>
    )
}

// style=