
function Header() {
    return(
        <div>
            <header className="header--body">
                <ul className="header--nav">
                    <li className="header--list">
                        <a href="#">
                            <span className="header--icon"><ion-icon name="home-outline"></ion-icon></span>
                            <span className="header--text">Home</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#">
                            <span className="header--icon"><ion-icon name="information-circle-outline"></ion-icon></span>
                            <span className="header--text">About</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#">
                            <span className="header--icon"><ion-icon name="construct-outline"></ion-icon></span>
                            <span className="header--text">Service</span>
                        </a>      
                    </li>
                    <li class="header--list">
                        <a href="#">
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
            <footer className="footer--body">
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

const Section = () => {
    return(
        <div>
            <section className="section--body">
            </section>
        </div>
    );
}



class Container extends React.Component{
    render(){ 
        return(
            <div>
                <Header />
                <Section />
                <Footer />
            </div>
        )
    }
}

ReactDOM.render(
    <Container />,
    document.getElementById("root")
)