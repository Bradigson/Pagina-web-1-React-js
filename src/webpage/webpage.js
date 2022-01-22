import React from 'react';
import '../App.css';
import box3Img from './imgs/cdc-_N7I1JyPYJw-unsplash.jpg';
import baner5Img1 from './baner5Imgs/lucas-vasques-9vnACvX2748-unsplash.jpg';
import baner5Img2 from './baner5Imgs/national-cancer-institute-bM4MXYPY61U-unsplash.jpg';
import baner5Img3 from './baner5Imgs/olga-guryanova-s10jzFKGOLs-unsplash.jpg';
const Header = ()=>{
    return(
        <header className="header-mobile">
            <div className="header-mobile__content">
                <a href="#"><h1>Med<span className="text-info">i</span>ck<span className="text-info">BN</span></h1></a>
                <button className="btn btn-info btn-sm p-0 "><i className='bx bx-menu'></i></button>
            </div>
        </header>
    )
}


const Baner1 = ()=>{
    return(
        <div className="baner1">
            <article className="baner1-article">
                <section className="text-center barner1__section1">
                    <h3 className="text-info">MEDICAL</h3>
                    <h2 className="mb-5">Better Doctors.<br/>
                    Better Cares.
                    </h2>
                    <button className="btn btn-outline-light px-3 ">Read More</button>
                </section>
            </article>

        </div>
    )
}



const Baner2 = ()=>{
    return(
        <div className="baner-2 mt-5 p-3">
            <article className="baner2-article1">
                <section className="baner2-article1__section1">
                    <div className="baner2-article1-section1__div1">
                       <h3 className="text-info mb-2">ABOUT US</h3>
                       <h2 className="mb-3">Changing the way you receive healthcare</h2>
                    </div>
                    
                    <div>
                       <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere.Vivamus a ligula quam tesque et libero ut justo, ultrices in. Ut eu leo non..<br/>

                       Lorem ipsum dolor sit amet consectetur ipsum elit. Qui eligendi vitae sit.Ea ipsum sed consequuntur illum facere.</p>
                       <button id="btn-info" className="btn btn-info text-light px-4 py-2">Read More</button>
                    </div>
                </section>


                <section className="baner2-section2 mt-5">
                    <div className="baner2-section__box1">
                        <h3 className="text-info">EXTRAORDINARY SERVICES</h3>
                        <h2>Why You Should Choose Medick?.</h2>
                    </div>

                    <div className="baner2-section__box2 mt-4">
                        <div className="box2-boxchildren1">
                            <div className="box2-children1__i"><i className='bx bx-calendar text-center'></i></div>
                            <div>
                                <h2><a className="nav-link" href="#">10 Year Of Experience</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.</p>
                            </div>
                        </div>




                        <div className="box-children2 mt-4">
                            <div className="box2-children2__i"><i className='bx bxs-edit text-center'></i></div>
                            <div>
                                <h2><a className="nav-link" href="">Free Consultation</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.</p>
                            </div>
                        </div>




                        <div className="box-children3 mt-4">
                            <div className="box2-children3__i"><i className='bx bxs-shield text-center'></i></div>
                            <div>
                                <h2><a className="nav-link" href="">100% Guranteed</a></h2>
                                <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit.</p>
                            </div>
                        </div>

                        <div className="box3-img mt-5">
                            <img src={box3Img} alt=""/>
                        </div>


                    </div>

                </section>
            </article>
        </div>
    )
}




const Baner3 = ()=>{
    return(
        <div className="mt-5">
            <article className="baner3-article1 px-4">
                <section>
                    <div className='text-center barner3-article-section__content'>
                        <h3 className="text-info">EXTRAORDINARY SERVICES</h3>
                        <h2 className='text-light'>Our Service</h2>
                    </div>
                    <div className="mt-4">
                        <div className="boxes-1">
                            <div className="i"><i className='bx bxl-99designs'></i></div>
                            <div><h3>Therapiya</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>





                        <div className="boxes-2 mt-5">
                            <div className="i-2"><i className='bx bxs-message-rounded'></i></div>
                            <div><h3>Dentistry</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>




                        <div className="boxes-3 mt-5">
                            <div className="i-3"><i className='bx bxs-tree'></i></div>
                            <div><h3>Virusology</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>





                        <div className="boxes-4 mt-5">
                            <div className="i-4"><i className='bx bxs-building-house' ></i></div>
                            <div><h3>Pharcomology</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>






                        <div className="boxes-5 mt-5">
                            <div className="i-5"><i className='bx bxs-heart' ></i></div>
                            <div><h3>Cardioloy</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>






                        <div className="boxes-6 mt-5">
                            <div className="i-6"><i className='bx bx-low-vision' ></i></div>
                            <div><h3>Eye Surgery</h3>
                            <p>Lorem ipsum dolor sit amet consectetur ipsum elit. Lorem ipsum dolor sit amet elit</p>
                            </div>

                        </div>

                    </div>

                    
                </section>
            </article>
        </div>
    )
}





class Baner4 extends React.Component{
    render(){
        return(
            <div className="baner4 mt-5">

                <article className="baner4__article1 px-4 py-4">
                    <section className="baner4-article1__section1 row row-cols-2 text-center">


                        <div className="baner4-article-section__box1">
                            <i className='bx bxs-user'></i>
                            <h2>1100</h2>
                            <p>Expert Doctors</p>
                        </div>

                        <div className="baner4-article-section__box2">
                            <i className='bx bx-laptop'></i>
                            <h2>1020</h2>
                            <p>Health Programs</p>
                        </div>

                        <div className="baner4-article-section__box3">
                            <i className='bx bx-laugh' ></i>
                            <h2>912</h2>
                            <p>Happy Clients</p>
                        </div>


                        <div className="baner4-article-section__box4">
                            <i className='bx bxs-wine' ></i>
                            <h2>80</h2>
                            <p>Success Meets</p>
                        </div>
                    </section>
                </article>
            </div>

        )
    }
}


const Baner5 = (props)=>{
    
    return(
        <div>
            <div className="container mt-5">
                <article>
                    <section className="baner5-section1 mb-5">
                        <h3 className="text-info text-center ">LATES NEWS</h3>
                        <h2 className="text-center text-light">Blogs Posts</h2>
                    </section>
                    <section>
                        <div className="baner5-section2__card1">
                            <div className="baner5-section2-card1__img mb-4">
                                <img src={baner5Img1} alt=""/>
                            </div>
                            <div >
                                <h4 className="text-info h4">Investigations</h4>
                                <h3 className="text-light">The Right Choice For Your Health Care Needs.</h3>
                                <div className="baner5-section2-card1__content"><span><i className='bx bx-user-check'></i>{props.admin}</span> <span><i className='bx bx-time'></i>{props.date}</span> <span><i className='bx bx-message-rounded' ></i>{props.usermessage}</span></div>
                            </div>
                        </div>



                        <div className="mt-5">
                            <div className="baner5-section2-card1__img mb-4">
                                <img src={baner5Img2} alt=""/>
                            </div>
                            <div >
                                <h4 className="text-info h4">Investigatiions</h4>
                                <h3 className="text-light">The Right Choice For Your Health Care Needs.</h3>
                                <div className="baner5-section2-card1__content"><span><i className='bx bx-user-check'></i>{props.admin2}</span> <span><i className='bx bx-time'></i>{props.date2}</span> <span><i className='bx bx-message-rounded' ></i>{props.usermessage2}</span></div>
                            </div>
                        </div>



                        <div className="mt-5 py-3">
                            <div className="baner5-section2-card1__img mb-4">
                                <img src={baner5Img3} alt=""/>
                            </div>
                            <div >
                                <h4 className="text-info h4">Investigatiions</h4>
                                <h3 className="text-light">The Right Choice For Your Health Care Needs.</h3>
                                <div className="baner5-section2-card1__content"><span><i className='bx bx-user-check'></i>{props.admin3}</span> <span><i className='bx bx-time'></i>{props.date3}</span> <span><i className='bx bx-message-rounded' ></i>{props.usermessage3}</span></div>
                            </div>
                        </div>
                    </section>
                </article>

            </div>
        </div>
    )
}






class Baner6 extends React.Component{
    render(){
        return(
            <div className="baner5-contenedor px-4 mt-5 pb-4">
                <article>
                    <section className="px-1 py-3">

                       <div className="text-center text-light">
                           <h3 className="text-info ">FREE APPOINTMENT</h3>
                           <h2>Make an Appointment</h2>
                           <p>
                           We believe in providing the best possible care to all our existing patients and welcomenew patients to sample.<br/>

                           Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio adipisicing.
                           </p>
                           <button className="btn btn-info text-light form-button">Contact Us</button>
                       </div>
                    </section>

                    

                    <section className="mt-5">

                    
                        <div>
                            <form className="form col">
                                <input
                                type="text"
                                placeholder="Full Name"
                                className="form-control mt-3"
                                name=""
                                />
                                <input
                                type="email"
                                placeholder="Enter Email"
                                className="form-control mt-3"
                                name=""
                                />
                                <input
                                type="text"
                                placeholder="Enter Phone Number"
                                className="form-control mt-3"
                                name=""
                                />
                                <input
                                type="date"
                                placeholder="mm/dd/yyyy"
                                className="form-control mt-3 date"
                                name=""
                                />
                                <div className="mt-4">
                                    <button className="btn btn-info text-light form-button px-4 py-3">Boook Appointment</button>
                                </div>
                                 
                            </form>
                        </div>
                    

                    </section>
                </article>
            </div>
        )
    }
}




const Footer = ()=>{
    return(
        <div className="py-4 mt-5">
            <footer>
                <div className="text-light px-4">
                    <h2>MedickBN</h2>
                    <p>Lorem ipsum dolor sit amet,Ea consequuntur illum facere aperiam sequi optio adipisicing.</p>
                    <span><i className='bx bxs-phone'></i> +(21) 255 999 8888</span><br/>
                    <span><i className='bx bx-mail-send'></i>medick@gmail.com</span>
                </div>

                <div className="row row-col-2">
                    <div className="col">
                        <ul className="ul">
                            <li><h2>History</h2></li>
                            <li><a href="">About Us</a></li>
                            <li><a href="">Blog Post</a></li>
                            <li><a href="">Departments</a></li>
                            <li><a href="">Carrers</a></li>
                            <li><a href="">Team</a></li>
                            <li><a href="">Contact Us</a></li>
                        </ul>
                    </div>


                    <div className="col">
                        <ul className="ul">
                            <li><h2>Useful Link</h2></li>
                            <li><a href="">Terms of service</a></li>
                            <li><a href="">Privacy Policy</a></li>
                            <li><a href="">Documentation</a></li>
                            <li><a href="">Support</a></li>
                            <li><a href="">Components</a></li>
                            <li><a href="">Cahngelog</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Subscribe to our Newsletter</h2>
                        <p>Enter your email and receive the latest news, updates and special offers from us.</p>
                    </div>
                </div>

            </footer>
        </div>
    )
}
class WebPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Baner1/>
                <Baner2/>
                <Baner3/>
                <Baner4/>
                <Baner5 admin="by Admin" date="Jan 22, 2021" usermessage="3" admin2="by Admin" date2="Jan 24, 2021" usermessage2="3" admin3="by Admin" date3="Jan 28, 2021" usermessage3="3"/>
                 <Baner6/>
                 <Footer/>
            </div>
        )
    }
}

export default WebPage;






//Efecto escroll para header (Codigo JS)
window.addEventListener("scroll",()=>{
    let header = document.querySelector('.header-mobile');
    header.classList.toggle("sticky", window.scrollY >0);
})