import { Fragment } from "react/cjs/react.production.min"

export const Footer = ()=>{
    return(
        <Fragment>
            <footer id="bottom-footer">
                <div className="container">
                    <div className="row wow fadeInUp">
                    <div className="col-md-4 col-sm-4 col-xs-12"> 
                        <p className="copyright">© 2022 <a href="https://dcrazed.com/">HITECH-PRESENT</a>. All rights reserved</p>
                    </div>
                    
                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <nav className="bottom-nav">
                        <ul>
                            <li><a href="#">Acceuil</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Pricing</a></li>
                        </ul>
                        </nav>
                    </div>

                    <div className="col-md-4 col-sm-4 col-xs-12">
                        <ul className="social-link">
                        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                        <li><a href="#"><i className="fa fa-instagram"></i></a></li>
                        <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </footer>
        </Fragment>
    )
}