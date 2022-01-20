import React from 'react';
import '../App.css';

const Header = ()=>{
    return(
        <header className="header-mobile">
            <div className="header-mobile__content">
                <a href="#"><h1>Med<span className="text-info">i</span>ck<span className="text-info">BN</span></h1></a>
                <button className="btn btn-info btn-sm p-0"><i className='bx bx-menu'></i></button>
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

class WebPage extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Baner1/>
              
            </div>
        )
    }
}

export default WebPage;