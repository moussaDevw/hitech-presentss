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
            <nav id="top-menu" class="navbar navbar-default navbar-fixed-top">
            <div class="container"> 
                <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button>
                <Link href="/">
                <a class="navbar-brand"><img src="img/logo-top.png" class="img-responsive" /><span>Hitech-present</span></a>
                </Link>
                 </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">  
                <a id="nav-icon"> <span></span> <span></span> <span></span> </a> 
                <ul id="nav-top" class="nav navbar-nav navbar-right">
                    <li><Link href="/"><a class="page-scroll">Acceuil</a></Link></li>
                    <li>
                        <Link href="/services"><a class="page-scroll">Services</a></Link>
                    </li>
                    <li>
                        <Link href="/agence-conseil">
                        <a class="page-scroll">Agence & Conseils</a>
                        </Link>
                    </li>
                    {/* <li><a href="contact.html" class="page-scroll">Contact</a></li> */}
                </ul>                 
               
        
                <nav class="bottom-nav">
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Pricing</a></li>
                    </ul>
                </nav>
                
                <ul class="social-link">
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                    <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                </ul>
            </div>
            </div> 
            </nav>
        </div>
    )
}
// // logo nav-iconAll rights reserved