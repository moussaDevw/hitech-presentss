import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { Jquery } from "../jquery/Jquery"

export  const NavBar = ()=>{
    const router = useRouter()
    const forceReload = ()=>{
        router.reload()
    }
    useEffect(()=>{
        jQuery(document).ready(function( $ ) {
            $('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        });
    },[])
    return(
        <div>
            <Jquery />
            <nav id="top-menu" className="navbar navbar-default navbar-fixed-top">
            <div className="container"> 
                <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span className="sr-only">Toggle navigation</span> <span className="icon-bar"></span> <span className="icon-bar"></span> <span className="icon-bar"></span></button>
                <Link href="/">
                <a className="navbar-brand"><img src="img/logo-top.png" className="img-responsive" /><span>Hitech-present</span></a>
                </Link>
                 </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
                <a id="nav-icon"> <span></span> <span></span> <span></span> </a> 
                <ul id="nav-top" className="nav navbar-nav navbar-right">
                    <li><Link href="/"><a className="page-scroll">Acceuil</a></Link></li>
                    <li>
                        <Link href="/services"><a className="page-scroll">Services</a></Link>
                    </li>
                    <li>
                        <Link href="/agence-conseil">
                        <a className="page-scroll">Agence & Conseils</a>
                        </Link>
                    </li>
                    {/* <li><a href="contact.html" className="page-scroll">Contact</a></li> */}
                </ul>                 
               
        
                <nav className="bottom-nav">
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </nav>
                
                <ul className="social-link">
                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
            </div> 
            </nav>
        </div>
    )
}
// // logo nav-iconAll rights reserved