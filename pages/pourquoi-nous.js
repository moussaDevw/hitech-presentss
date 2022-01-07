import Head from 'next/head'
import Link from "next/link"
import style_home from './home.module.css'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
export default function WhyWe(){
    return(
        <div>
      <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Pourquoi nous</title>
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

      <body className="single">
        <NavBar />
<div id="Blog-post"> 
  <header className="entry-header">
    <div className="content  wow fadeInUp">
      <div className="container "> 
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href="/"><a>Acceuil</a></Link> </li>
          <li className="breadcrumb-item active">Pourquoi nous</li>
        </ol>
        <h3>Pourquoi HITECH-PRESENT ?</h3>
        <hr />
        </div>
    </div>
    <div className="arrow bounce"> <i className="fa fa-arrow-down fa-2x"></i> </div>
  </header>
  <div id="page-body">
  <div className="container">
  <div className="row  wow fdeInUp"> 
    <div className="col-md-12 col-sm-12 col-xs-12 page-block" style={{backgroundColor:'black'}} > 
      <h2 className="text-center text-white">Des victoires mémorables, à chaque fois.</h2>
    </div>
      <div className="clearfix"></div>
    </div>
    <div className="row d-flex justify-content-between" style={{backgroundColor:'black'}}> 
    <aside className="col-md-6 col-sm-6" style={{padding:0}} > 
        <section className="col-md-12">
         <h5 className='text-white'>Nous aidons les entreprises, grandes et petites, à découvrir ce qui les rend uniques et à les canaliser dans une expérience mémorable qui surpasse et surpasse leurs concurrents en ligne.</h5>
        </section> 
      </aside>
      <div className="col-md-6 col-sm-6 col-xs-12"   > 
        <div className="col-md-12">
            <h5 className='text-white'>Nous gardons notre processus simple, transparent et axé sur le client. Nous évitons les mots à la mode et les conneries – nous dépensons notre énergie plutôt à nous concentrer sur la création d'expériences utilisateur de premier ordre qui se traduisent par des choses qui comptent.</h5>
        </div>
      </div>
    </div>
  </div>
</div>
  <section id="about-us-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Nous créons des sites portfolio pour les cabinets de conseil qui se démarquent et communiquent clairement .</h2>
        {/* <a href="page.html">Mission brief</a> */}
      </div>
    </div>
  </div>
</section>
  <div className={style_home.blog_different}>
    <div className={style_home.blog_different_section}>
        <div className={style_home.blog_different_text1}>
            <h3>Le service le plus réactif et le plus amical que vous ayez probablement jamais eu .</h3>
            <p>Les clients nous embauchent en fonction de notre mérite - ils nous aiment pour notre accessibilité. Nous nous efforçons d'être incroyablement réactifs à vos besoins afin que vous ne vous sentiez jamais ignoré et que vous vous sentiez toujours pris en charge.</p>
        </div>
        <img src="./image/resultats.jpg" className={style_home.img1} />
    </div>
    <div className={style_home.blog_different_section}>
    <img src="./image/6502420.jpg" className={style_home.img2} />
          <div className={style_home.blog_different_text1}>
            <h3>Vous êtes fier de votre marque. Maintenant, vous serez fier de votre site Web .</h3>
            <p>Vous avez construit une marque incroyable - votre nouveau site Web le reflétera et le fera même passer au niveau supérieur. Chaque élément de votre nouveau site s'alignera parfaitement avec la voix et les valeurs de votre marque. (Découvrez-vous toujours votre marque ? Nous pouvons également vous aider.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
          <div className={style_home.blog_different_text1}>
            <h3>Des résultats massifs qui comptent vraiment .</h3>
            <p>
            Vous avez des objectifs financiers à atteindre. Nous comprenons tout à fait cela. C'est pourquoi nous nous concentrons sur et améliorons considérablement les mesures qui comptent : les conversions, les ventes et l'engagement. Dites-nous vos KPI et nous vous créerons un site Web qui les fera sortir du parc.
            </p>
        </div>
        <img src="./image/3156627.jpg" className={style_home.img3} />
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