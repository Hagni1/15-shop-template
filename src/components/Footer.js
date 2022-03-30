import { faEnvelopeOpen } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.scss'
const Footer = () => {
    return ( 
      <footer>
        <div className='footerWrapper'>
                  <p>
        <FontAwesomeIcon icon={faPhone} />
        +48 123 456 789
      </p>
            <img src={require('../images/logo.png')} alt="logo" />
            <p>
        {" "}
        <FontAwesomeIcon icon={faEnvelopeOpen} />
        contact@fashion.com
      </p>
        </div>
        <p>© 2022 Design & Developed by Kamil Suchocki . All rights reserved.</p>

    </footer>
     );
}
 
export default Footer;