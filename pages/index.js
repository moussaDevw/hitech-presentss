import Head from 'next/head'
import { useEffect } from 'react'
import { Footer } from '../components/Footer/Footer'
import { NavBar } from '../components/NavBar/NavBar'
import style_home from './home.module.css'

export default function Home() {
  useEffect(()=>{
    $(document).ready(function(){
      $('.hover').hover(function(){
        $(this).addClass('flip');
      },function(){
        $(this).removeClass('flip');
      });
    });
  },[])
  return (
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Acceuil</title>
      <meta name="description" content="" />
      <meta name="author" content="" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" type="text/css"  href="css/bootstrap.css" />
      <link rel="stylesheet" type="text/css" href="css/font-awesome.css" />
      <link href="css/owl.carousel.css" rel="stylesheet" media="screen" />
      <link href="css/owl.theme.css" rel="stylesheet" media="screen" />
      <link href="css/animate.css" rel="stylesheet" media="screen" />
      <link rel="stylesheet" type="text/css"  href="style.css" />
      <link rel="stylesheet" type="text/css"  href="flip.css" />
      <link href='https://fonts.googleapis.com/css?family=PT+Serif:400,400i,700|Montserrat:100,200,300,300i,400,500,600,700,800,900' rel='stylesheet' type='text/css' />
      </Head>

      <body>
      <NavBar />
<section id="home-banner">
  <div className="content">
    <div className="container"  data-wow-duration="1s">
      <h1 className="wow fadeInUp">Aller plus loin. <span>Nous travaillons</span> en partenariat avec des personnes qui souhaitent <span>concevoir</span>, un avenir meilleur. </h1>
    </div>
  </div>
  <div className="arrow bounce"> <i className="fa fa-arrow-down fa-2x"></i> </div>
</section>
<section id="about-us-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Nous créons des sites Web mémorables qui vendent.</h2>
        {/* <a href="page.html">Mission brief</a> */}
        <p>Nous travaillons en partenariat avec des marques comme la vôtre pour créer des sites Web dont vos clients se souviendront, améliorer considérablement vos indicateurs clés et afficher votre marque avec fierté.</p>
      </div>

  <div className="row1-containers">
    <div className="boxs box-downs cyan">
      <h2>Logiciel</h2>
      <p>Avec cette révolution numérique en cours, toutes les entreprises passent à la digitalisation pour offrir les meilleurs services ou produits à leurs consommateurs.</p>
      <img className="imgs" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div className="boxs red">
      <h2>UX/UI DESIGN</h2>
      <p>De nos jours, pour créer tout type d’application, il est plus qu’indispensable de mettre l’utilisateur final au cœur du projet.</p>
      <img className="imgs" src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div className="boxs box-downs blue">
      <h2>MARKETING DIGITAL</h2>
      <p>Nous accompagnons nos clients dans leurs projets marketing et de communication que ce soit pour, lancer un produit sur le marché, trouver des nouveaux clients etc.</p>
      <img className="imgs" src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div className="row2-containers">
    <div className="boxs orange">
      <h3>INFOGÉRANCE / SUPPORT IT</h3>
      <p>Tout projet digital a besoin d’un support pour maintenir le produit à jour et apporter les corrections nécessaires en cas de dysfonctionnement à temps réel</p>
      <img className="imgs" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
    </div>
  </div>
</section>
<section id="home-contact-block">
  <div className="container">
    <div className="row wow fadeInUp">
      <p>Augmentez les prospects, créez un site Web professionnel et soyez génial.</p>
      <a href="#">Nous Contacter</a> </div>
  </div>
</section>
<div className={style_home.blog_different}>
    <div className={style_home.blog_different_section}>
      <img src="./image/Blog_Post.jpg" className={style_home.img1} />
        <div className={style_home.blog_different_text1}>
            <h3>Nous sommes spécialisés .</h3>
            <p>Nous ne sommes pas des généralistes, nous ne vous proposons que ce que nous faisons le mieux : actifs de marque, conception UI/UX, développement full-stack et optimisation de la conversion.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
    <img src="./image/resultats.jpg" className={style_home.img2} />
          <div className={style_home.blog_different_text1}>
            <h3>Nous nous concentrons sur les résultats.</h3>
            <p>Nous nous soucions de l'impact de notre travail sur votre entreprise ou votre organisation, pas à quoi il ressemble dans notre portefeuille ou dans une vitrine de récompenses.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
          <img src="./image/limitont.jpg" className={style_home.img3} />
          <div className={style_home.blog_different_text1}>
            <h3>Nous sommes réactifs.</h3>
            <p>Nous limitons le nombre de clients que nous acceptons chaque année pour garantir à chacun une expérience client exceptionnelle. Attendez-vous à des réponses en heures, pas en jours.</p>
        </div>
    </div>
    <div className={style_home.blog_different_section}>
        <img src="./image/2978479.jpg" className={style_home.img4} />
          <div className={style_home.blog_different_text1}>
            <h3>Nous allons plus loin.</h3>
            <p>Nous considérons nos engagements comme des relations, et non comme des accords avec les fournisseurs. En plus de ce que nous produisons, nous éduquons également nos clients sur les meilleures pratiques numériques en cours de route.</p>
        </div>
    </div>
</div>
{/* <section id="our-work-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Our work</h2>
        <a href="portfolio.html">go to portfolio</a></div>
      <div className="clearfix"></div>
      <div className="works">
        <ul className="grid">
          <li>
            <figure><img src="img/01-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Codetowp branding</h6>
                  <hr />
                  <a href="#">Design</a>
                  <a href="#">brand</a>
                  <ul className="work-more">
                    <li>
                      <a href="img/01-screenshot.jpg"><i className="fa fa-search"></i></a>
                    </li>
                    <li>
                      <a href="portfolio-inner.html"><i className="fa fa-link"></i></a>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/02-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul className="work-more">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/03-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul className="work-more">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/04-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul className="work-more">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/05-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul className="work-more">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/06-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div className="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>
                  <a href="#">brand</a>
                  <ul className="work-more">
                    <li><a href="#"><i className="fa fa-search"></i></a></li>
                    <li><a href="#"><i className="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section> */}
{/* <section id="process-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>The process</h2>
      </div> 
      <div> 
        <ul className="nav nav-tabs">
            <li className="active"><a href="#concept" data-toggle="tab"><i className="fa fa-star-o"></i>
                <h5>01. Concept</h5>
                </a>
            </li>
            <li><a href="#prototype" data-toggle="tab"><i className="fa fa-copy"></i>
                <h5>02. Prototyping</h5>
                </a>
            </li>
            <li><a href="#design" data-toggle="tab"><i className="fa fa-laptop"></i>
                <h5>03. Design</h5>
                </a>
            </li>
            <li><a href="#development" data-toggle="tab"><i className="fa fa-code"></i>
                <h5>04. Development</h5>
                </a>
            </li>
        </ul>
        <div className="tab-content"> 
          <div id="concept" className="tab-pane active"> 
            <div className="col-md-5 process-img"> <img src="img/tab-1.jpg" className="img-responsive" /> </div> 
            <div className="col-md-7 process-content">
              <h6>Professional website design</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>
          <div id="prototype" className="tab-pane"> 
            <div className="col-md-5 process-img"> <img src="img/03-screenshot.jpg" className="img-responsive" /> </div> 
            <div className="col-md-7 process-content">
              <h6>Sketch like a PRO</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>
          <div id="design" className="tab-pane"> 
            <div className="col-md-5 process-img"> <img src="img/02-screenshot.jpg" className="img-responsive" /> </div> 
            <div className="col-md-7 process-content">
              <h6>Make the design</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>     
          <div id="development" className="tab-pane"> 
            <div className="col-md-5 process-img"> <img src="img/01-screenshot.jpg" className="img-responsive" /> </div> 
            <div className="col-md-7 process-content">
              <h6>Code like a star</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>            
          </div>		  
        </div>
      </div>
    </div>
  </div>
</section> */}
<section id="company-counter" >
  <div className="container">
    <div className="row text-center">
      <div className="col-md-12 wow fadeInDown">
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="c-block"><i className="fa fa-heart-o"></i><span className="counter">5</span>
            <p>Clients</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="c-block"><i className="fa fa-envelope-o"></i><span className="counter">10</span>
            <p>Leads</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="c-block"><i className="fa fa-folder-o"></i><span className="counter">4</span>
            <p>Websites</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-6 col-xs-12">
          <div className="c-block"><i className="fa fa-coffee"></i><span className="counter">21</span>
            <p>Coffee</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section id="testimonials-block" className="text-center">
  <div className="container">
    <div className="row">
      <div className="col-md-8 col-md-offset-2">
        <div id="testimonial" className="owl-carousel owl-theme">
          <div className="item"> <img src="img/team/01.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Dean Martin</strong> CEO Acme Inc.</p>
          </div>
          <div className="item"> <img src="img/team/02.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Rima Martin</strong> CEO Food Inc.</p>
          </div>
          <div className="item"> <img src="img/team/03.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Joe Martin</strong> CEO Chat Inc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* <section id="latest-news-block">
  <div className="container">
    <div className="row"> 
      <div className="section-title text-center wow fadeInUp">
        <h2>Latest news</h2>
        <a href="blog.html">See the blog</a></div>
      <article className="col-md-3 col-sm-6 col-xs-12">
        <header className="entry-header"> <a href="blog-post.html"><img src="img/04-screenshot.jpg" alt="image 1" /></a>
          <a href="blog-post.html"><h6>10 Incredible Quotes To Guide Your Life</h6></a>
           <a href="#">Web-design</a> , 
           <a href="#">Front-end</a> </header>
      </article>
      <article className="col-md-3 col-sm-6 col-xs-12">
        <header className="entry-header"> <img src="img/02-screenshot.jpg" alt="image 1" /> <a href="#">
          <h6>Responsive Website in 2017 – 
            Step by Step Guide</h6>
          </a> <a href="#">Web-design</a> </header>
      </article>
      <article className="col-md-3 col-sm-6 col-xs-12">
        <header className="entry-header"> <img src="img/03-screenshot.jpg" alt="image 1" /> <a href="#">
          <h6>10 Incredible Quotes To Guide Your Life</h6>
          </a> <a href="#">Web-design</a> , <a href="#">Front-end</a> </header>
      </article>
      <article className="col-md-3 col-sm-6 col-xs-12">
        <header className="entry-header"> <img src="img/01-screenshot.jpg" alt="image 1" /> <a href="#">
          <h6>HEADING 6 in use here</h6>
          </a> <a href="#">Web-design</a> </header>
      </article>
      
    </div>
  </div>
</section> */}
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
   
</script>
  <script>
  new WOW().init()
  </script>
</body>
    </div>
  )
}
{/* style= GRIT banner Our work 
Professional website design
*/}