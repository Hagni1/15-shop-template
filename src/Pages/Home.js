import { Link } from 'react-router-dom';
import '../styles/Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <>
        <header className="home">
            <h1>find your style</h1>
        </header>
            
        <main className='mainHome'>
                <Link to='/tshirt'>
                    <section className='mainSection mainSection-left'>
                        <img src={require('../images/t-shirts.jpg')} alt="t-shirts" />
                        <h3>T-shirty</h3>
                    </section>
                </Link>
                <Link to='/shirts'>
                    <section className='mainSection mainSection-right'>
                        <h3>Koszule & Bluzki</h3>
                        <img src={require('../images/shirts.jpg')} alt="shirts" />
                    </section>
                </Link>
                <Link to='pants'>
                    <section className='mainSection mainSection-left'>
                        <img src={require('../images/pants.jpg')} alt="pants" />
                        <h3>Spodnie</h3>
                    </section>
                </Link>
                <Link to='hoodies'>
                    <section className='mainSection mainSection-right'>
                        <h3>Bluzy</h3>
                        <img src={require('../images/hoodies.jpg')} alt="hoodies" />
                    </section>
                </Link>
                <Link to='skirts'>
                    <section className='mainSection mainSection-left'>
                        <img src={require('../images/skirts.jpg')} alt="skirts" />
                        <h3>Sukienki i spódnice</h3>
                    </section>
                </Link>
                <Link to='jackets'>
                    <section className='mainSection mainSection-right'>
                        <h3>Kurtki i marynarki</h3>
                        <img src={require('../images/jackets.jpg')} alt="jackets" />
                    </section>
                </Link>
            </main>
            <div className='contact'>
                <h3>Zapraszamy do naszego sklepu stacjonarnego</h3>
                <p><FontAwesomeIcon icon={faPhone} />
                    +48 123 456 789</p>
                <p> <FontAwesomeIcon icon={faEnvelopeOpen} />
                    kontakt@fashion.com</p>
                <p>Poznań Ul.Przemysłowa 3/9 </p>
                <iframe title='google maps' src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11579.761517740983!2d16.92056949082126!3d52.400423506932086!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47045bcae5ba8f31%3A0x5e8d65ba26f1523!2sNowy%20Rynek!5e0!3m2!1spl!2spl!4v1648391139028!5m2!1spl!2spl"></iframe>
            </div>
            <footer>
                <img src={require('../images/logo.png')} alt="logo" />

            </footer>
        </>
        
    );
}
 
export default Home;