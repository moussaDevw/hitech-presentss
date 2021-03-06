import Head from 'next/head'
import { NavBar } from '../components/NavBar/NavBar'
import { Footer } from '../components/Footer/Footer'
import style_contact from './styleContact.module.css'

export default function Contact() {
  return (
    <div>
      <Head>
      <meta charset="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="IE=9" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Contact</title>
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

      <body>
      <NavBar />
      <div id="page-banner">
        <div className="content  wow fdeInUp">
            <div className="container ">
            <h1>Contact</h1>
            </div>
        </div>
    </div>
    <div id="page-body">
  <div className="container-fluid">
  <div className={style_contact.blog_contact}>
      <section>
        <h2 className={style_contact.title_info}>Laissez-nous vos informations</h2>
          <form>
            <div className={style_contact.form_contact}>
              <label>Votre nom complet</label>
              <input type='text' placeholder='nom' />
            </div>
            <div className={style_contact.form_contact}>
              <label>Votre nom complet</label>
              <input type='text' placeholder='nom' />
            </div>
            <div className={style_contact.form_contact}>
              <label>Votre nom complet</label>
              <input type='text' placeholder='nom' />
            </div>
            <div className={style_contact.form_contact}>
              <label>Votre nom complet</label>
              <textarea>

              </textarea>
            </div>
          </form>
      </section> 
      <aside> 
        <h2 className={style_contact.title_info}>Informations de contact</h2>
        <div className={style_contact.info_details}>
            <div>
              <address>
                <h4>Pays</h4>
                <p>S??n??gal</p>
              </address>
              <address>
                <h4>Ville</h4>
                <p>Dakar</p>
              </address>
              <address>
                <h4>rue</h4>
                <p>Ouakam</p>
              </address>
            </div>
            <div>
            <address>
                <h4>Email:</h4>
                <p>hitech@hitech-present.com</p>
              </address>
              <address>
                <h4>Linkedin</h4>
                <p>Dakar</p>
              </address>
              <address>
                <h4>Instagram</h4>
                <p>Ouakam</p>
              </address>
            </div>
            <div>
            <address>
                <h4>service d'assistance</h4>
                <p>76 567 61 69</p>
              </address>
              <address>
                <h4>num??ro</h4>
                <p>78 010 54 26</p>
              </address>
              <address>
                <h4>rue</h4>
                <p>Ouakam</p>
              </address>
            </div>
        </div>
      </aside>
  </div>
  </div>
</div>
    <section id="company-counter" >
    <div className="container">
        <div className="row text-center">
        <div className="col-md-12 wow fadeInDown">
            <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="c-block"><i className="fa fa-heart-o"></i><span className="counter">10</span>
                <p>Clients</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="c-block"><i className="fa fa-envelope-o"></i><span className="counter">456</span>
                <p>Leads</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="c-block"><i className="fa fa-folder-o"></i><span className="counter">4</span>
                <p>Websites</p>
            </div>
            </div>
            <div className="col-md-3 col-sm-6 col-xs-12">
            <div className="c-block"><i className="fa fa-coffee"></i><span className="counter">456</span>
                <p>Coffee</p>
            </div>
            </div>
        </div>
        </div>
    </div>
    </section>
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
