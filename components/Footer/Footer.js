import { Fragment } from "react/cjs/react.production.min"

export const Footer = ()=>{
    return(
        <Fragment>
            <footer id="bottom-footer">
                <div class="container">
                    <div class="row wow fadeInUp">
                    <div class="col-md-4 col-sm-4 col-xs-12"> 
                        <p class="copyright">© 2022 <a href="https://dcrazed.com/">HITECH-PRESENT</a>. All rights reserved</p>
                    </div>
                    
                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <nav class="bottom-nav">
                        <ul>
                            <li><a href="#">Acceuil</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                        </nav>
                    </div>

                    <div class="col-md-4 col-sm-4 col-xs-12">
                        <ul class="social-link">
                        <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}