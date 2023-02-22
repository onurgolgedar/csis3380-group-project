function Header() {
    return(
        <div>
            <header className="header--body">
                <ul className="header--nav">
                    <li className="header--list">
                        <a href="#sectionHome">
                            <span className="header--icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="header--text">Home</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#sectionAbout">
                            <span className="header--icon"><ion-icon name="information-circle-outline"></ion-icon></span>
                            <span className="header--text">About</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#sectionService">
                            <span className="header--icon"><ion-icon name="construct-outline"></ion-icon></span>
                            <span className="header--text">Service</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#footer">
                            <span className="header--icon"><ion-icon name="call-outline"></ion-icon></span>
                            <span className="header--text">Contact</span>
                        </a>      
                    </li>
                </ul>
            </header>
        </div>
    );
}

const Footer = () => {
    return(
        <div>
            <footer className="footer--body" id="footer">
                <ul className="footer--links">
                    <li className="footer--team">
                        <span className="footer--icon"><ion-icon name="people-outline"></ion-icon></span>
                        <span className="footer-teammember">
                            <a href="#">
                                <span className="footer--smallicon"><ion-icon name="person-outline"></ion-icon></span>
                                <span className="footer--text"> Onur Gölgedar </span>
                            </a>
                            <a href="#">
                                <span className="footer--smallicon"><ion-icon name="person-outline"></ion-icon></span>
                                <span className="footer--text"> Jerry Pena Alfaro </span>
                            </a>
                            <a href="#">
                                <span className="footer--smallicon"><ion-icon name="person-outline"></ion-icon></span>
                                <span className="footer--text"> Lovepreet Singh </span>
                            </a>
                        </span>    
                    </li>
                </ul>
            </footer>
        </div>
    );
}

const SectionAbout = () => {
    return(
        <div>
            <section className="sectionAbout--body" id="sectionAbout">
                <div className="sectionAbout--mainText">
                    <h2>.about<span>Us</span></h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis a aliquid quia dolorem officiis enim dicta soluta temporibus ipsam, 
                    accusamus laudantium nihil, eum commodi est iusto eaque sed repellendus. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est autem rerum enim odit, 
                    non sint voluptate temporibus sed, cumque itaque tempore incidunt eum doloribus odio reiciendis, 
                    maiores saepe corporis magni?</p>
                </div>
                <div className="sectionAbout--teamContent">
                    <div className="sectionAbout--boxContent">
                        <div className="sectionAbout--iconContent"><ion-icon name="ribbon"></ion-icon></div>
                        <h3> Onur Gölgedar </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis iusto facilis dolores nisi 
                        culpa reiciendis minus sapiente ad delectus, distinctio quas quod, totam suscipit? Porro id 
                        maxime sint totam!</p>
                        <a href="#" className="sectionAbout--links">See More</a>
                    </div>
                    <div className="sectionAbout--boxContent">
                        <div className="sectionAbout--iconContent"><ion-icon name="ribbon"></ion-icon></div>
                        <h3> Jerry Pena Alfaro </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis iusto facilis dolores nisi 
                        culpa reiciendis minus sapiente ad delectus, distinctio quas quod, totam suscipit? Porro id 
                        maxime sint totam!</p>
                        <a href="#" className="sectionAbout--links">See More</a>
                    </div>
                    <div className="sectionAbout--boxContent">
                        <div className="sectionAbout--iconContent"><ion-icon name="ribbon"></ion-icon></div>
                        <h3> Lovepreet Singh </h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non debitis iusto facilis dolores nisi 
                        culpa reiciendis minus sapiente ad delectus, distinctio quas quod, totam suscipit? Porro id 
                        maxime sint totam!</p>
                        <a href="#" className="sectionAbout--links">See More</a>
                    </div>
                </div>
            </section>
        </div>
    );
}

const SectionHome = () => {
    return(
        <div>
            <section className="sectionHome--body" id="sectionHome">
                <div className="sectionHome--mainText">
                    <h1>.react<span>Project</span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero perferendis a aliquid quia dolorem officiis enim dicta soluta temporibus ipsam, accusamus laudantium nihil, eum commodi est iusto eaque sed repellendus. 
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est autem rerum enim odit, 
                    non sint voluptate temporibus sed, cumque itaque tempore incidunt eum doloribus odio reiciendis, 
                    maiores saepe corporis magni?</p>
                </div>
                <div className="sectionHome--mainButton">
                    <a href="#sectionService">Explore... </a>
                </div>   
            </section> 
        </div>
    );
}


class Container extends React.Component{
    render(){ 
        return(
            <div>
                <Header />
                <SectionHome />
                <SectionAbout />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById("root")
)