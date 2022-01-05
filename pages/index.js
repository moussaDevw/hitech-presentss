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
      <meta http-equiv="x-ua-compatible" content="IE=9" />
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
  <div class="content">
    <div class="container"  data-wow-duration="1s">
      <h1 class="wow fadeInUp">Aller plus loin. <span>Nous travaillons</span> en partenariat avec des personnes qui souhaitent <span>concevoir</span>, un avenir meilleur. </h1>
    </div>
  </div>
  <div class="arrow bounce"> <i class="fa fa-arrow-down fa-2x"></i> </div>
</section>
<section id="about-us-block">
  <div class="container">
    <div class="row"> 
      <div class="section-title text-center wow fadeInUp">
        <h2>Nous créons des sites Web mémorables qui vendent.</h2>
        {/* <a href="page.html">Mission brief</a> */}
        <p>Nous travaillons en partenariat avec des marques comme la vôtre pour créer des sites Web dont vos clients se souviendront, améliorer considérablement vos indicateurs clés et afficher votre marque avec fierté.</p>
      </div>

  <div class="row1-containers">
    <div class="boxs box-downs cyan">
      <h2>Logiciel</h2>
      <p>Avec cette révolution numérique en cours, toutes les entreprises passent à la digitalisation pour offrir les meilleurs services ou produits à leurs consommateurs.</p>
      <img class="imgs" src="https://assets.codepen.io/2301174/icon-supervisor.svg" alt="" />
    </div>

    <div class="boxs red">
      <h2>UX/UI DESIGN</h2>
      <p>De nos jours, pour créer tout type d’application, il est plus qu’indispensable de mettre l’utilisateur final au cœur du projet.</p>
      <img class="imgs" src="https://assets.codepen.io/2301174/icon-team-builder.svg" alt="" />
    </div>

    <div class="boxs box-downs blue">
      <h2>MARKETING DIGITAL</h2>
      <p>Nous accompagnons nos clients dans leurs projets marketing et de communication que ce soit pour, lancer un produit sur le marché, trouver des nouveaux clients etc.</p>
      <img class="imgs" src="https://assets.codepen.io/2301174/icon-calculator.svg" alt="" />
    </div>
  </div>
  <div class="row2-containers">
    <div class="boxs orange">
      <h3>INFOGÉRANCE / SUPPORT IT</h3>
      <p>Tout projet digital a besoin d’un support pour maintenir le produit à jour et apporter les corrections nécessaires en cas de dysfonctionnement à temps réel</p>
      <img class="imgs" src="https://assets.codepen.io/2301174/icon-karma.svg" alt="" />
    </div>
  </div>
    </div>
  </div>
</section>
<section id="home-contact-block">
  <div class="container">
    <div class="row wow fadeInUp">
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
  <div class="container">
    <div class="row"> 
      <div class="section-title text-center wow fadeInUp">
        <h2>Our work</h2>
        <a href="portfolio.html">go to portfolio</a></div>
      <div class="clearfix"></div>
      <div class="works">
        <ul class="grid">
          <li>
            <figure><img src="img/01-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Codetowp branding</h6>
                  <hr />
                  <a href="#">Design</a>
                  <a href="#">brand</a>
                  <ul class="work-more">
                    <li>
                      <a href="img/01-screenshot.jpg"><i class="fa fa-search"></i></a>
                    </li>
                    <li>
                      <a href="portfolio-inner.html"><i class="fa fa-link"></i></a>
                    </li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/02-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul class="work-more">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/03-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul class="work-more">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/04-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul class="work-more">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/05-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>/ <a href="#">brand</a>
                  <ul class="work-more">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
                  </ul>
                </div>
              </figcaption>
            </figure>
          </li>
          <li>
            <figure><img src="img/06-screenshot.jpg" alt="Screenshot 01" />
              <figcaption>
                <div class="caption-content">
                  <h6>Optimised For Design</h6>
                  <hr />
                  <a href="#">Design</a>
                  <a href="#">brand</a>
                  <ul class="work-more">
                    <li><a href="#"><i class="fa fa-search"></i></a></li>
                    <li><a href="#"><i class="fa fa-link"></i></a></li>
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
  <div class="container">
    <div class="row"> 
      <div class="section-title text-center wow fadeInUp">
        <h2>The process</h2>
      </div> 
      <div> 
        <ul class="nav nav-tabs">
            <li class="active"><a href="#concept" data-toggle="tab"><i class="fa fa-star-o"></i>
                <h5>01. Concept</h5>
                </a>
            </li>
            <li><a href="#prototype" data-toggle="tab"><i class="fa fa-copy"></i>
                <h5>02. Prototyping</h5>
                </a>
            </li>
            <li><a href="#design" data-toggle="tab"><i class="fa fa-laptop"></i>
                <h5>03. Design</h5>
                </a>
            </li>
            <li><a href="#development" data-toggle="tab"><i class="fa fa-code"></i>
                <h5>04. Development</h5>
                </a>
            </li>
        </ul>
        <div class="tab-content"> 
          <div id="concept" class="tab-pane active"> 
            <div class="col-md-5 process-img"> <img src="img/tab-1.jpg" class="img-responsive" /> </div> 
            <div class="col-md-7 process-content">
              <h6>Professional website design</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>
          <div id="prototype" class="tab-pane"> 
            <div class="col-md-5 process-img"> <img src="img/03-screenshot.jpg" class="img-responsive" /> </div> 
            <div class="col-md-7 process-content">
              <h6>Sketch like a PRO</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>
          <div id="design" class="tab-pane"> 
            <div class="col-md-5 process-img"> <img src="img/02-screenshot.jpg" class="img-responsive" /> </div> 
            <div class="col-md-7 process-content">
              <h6>Make the design</h6>
              <p>Apes and spider monkeys move theirbody from branch to branch by swaying hands, but most monkeys do not. They just run and jump from branch to branch.</p>
              <a href="#">Read More</a> </div>             
          </div>     
          <div id="development" class="tab-pane"> 
            <div class="col-md-5 process-img"> <img src="img/01-screenshot.jpg" class="img-responsive" /> </div> 
            <div class="col-md-7 process-content">
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
  <div class="container">
    <div class="row text-center">
      <div class="col-md-12 wow fadeInDown">
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="c-block"><i class="fa fa-heart-o"></i><span class="counter">5</span>
            <p>Clients</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="c-block"><i class="fa fa-envelope-o"></i><span class="counter">10</span>
            <p>Leads</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="c-block"><i class="fa fa-folder-o"></i><span class="counter">4</span>
            <p>Websites</p>
          </div>
        </div>
        <div class="col-md-3 col-sm-6 col-xs-12">
          <div class="c-block"><i class="fa fa-coffee"></i><span class="counter">21</span>
            <p>Coffee</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

{/* <section id="testimonials-block" class="text-center">
  <div class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <div id="testimonial" class="owl-carousel owl-theme">
          <div class="item"> <img src="img/team/01.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Dean Martin</strong> CEO Acme Inc.</p>
          </div>
          <div class="item"> <img src="img/team/02.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Rima Martin</strong> CEO Food Inc.</p>
          </div>
          <div class="item"> <img src="img/team/03.jpg" />
            <h5>This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
            <p><strong>Joe Martin</strong> CEO Chat Inc.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}
{/* <section id="latest-news-block">
  <div class="container">
    <div class="row"> 
      <div class="section-title text-center wow fadeInUp">
        <h2>Latest news</h2>
        <a href="blog.html">See the blog</a></div>
      <article class="col-md-3 col-sm-6 col-xs-12">
        <header class="entry-header"> <a href="blog-post.html"><img src="img/04-screenshot.jpg" alt="image 1" /></a>
          <a href="blog-post.html"><h6>10 Incredible Quotes To Guide Your Life</h6></a>
           <a href="#">Web-design</a> , 
           <a href="#">Front-end</a> </header>
      </article>
      <article class="col-md-3 col-sm-6 col-xs-12">
        <header class="entry-header"> <img src="img/02-screenshot.jpg" alt="image 1" /> <a href="#">
          <h6>Responsive Website in 2017 – 
            Step by Step Guide</h6>
          </a> <a href="#">Web-design</a> </header>
      </article>
      <article class="col-md-3 col-sm-6 col-xs-12">
        <header class="entry-header"> <img src="img/03-screenshot.jpg" alt="image 1" /> <a href="#">
          <h6>10 Incredible Quotes To Guide Your Life</h6>
          </a> <a href="#">Web-design</a> , <a href="#">Front-end</a> </header>
      </article>
      <article class="col-md-3 col-sm-6 col-xs-12">
        <header class="entry-header"> <img src="img/01-screenshot.jpg" alt="image 1" /> <a href="#">
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