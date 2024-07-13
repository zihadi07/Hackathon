import {
  faFacebookF,
  faInstagramSquare,
  faLinkedinIn,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const styles = {
  footer: {
    backgroundColor: "#00A3FF",
    padding: "40px 0",
    borderTop: "1px solid #e9ecef",
    borderRadius: "30px 30px 0 0",
    marginTop: "30px",
  },

  Container: {
    maxWidth: "1200px",
    margin: "auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  footerSection: {
    flex: "1",
    minWidth: "250px",
    margin: "20px",
  },

  footerSectionH4: {
    marginBottom: "20px",
  },

  footerSectionP: {
    fontSize: "14px",
    color: "white",
  },

  footerSectionUl: {
    listStyle: "none",
    padding: "0",
  },

  footerSectionUlLi: {
    marginBottom: "10px",
  },

  footerSectionUlLiA: {
    textDecoration: "none",
    color: "white",
  },

  socialIconsA: {
    marginRight: "10px",
  },
  socialIconsDiv: {
    width: "33px",
    height: "33px",
  },

  socialIconsImg: {
    width: "100%",
    height: "auto",
  },

  footerBottom: {
    textAlign: "center",
    marginTop: "20px",
    fontSize: "14px",
    color: "white",
  },
};
const Footer = () => {
  return (
    <div>
      <footer style={styles.footer} className="mx-8 text-white">
        <div style={styles.Container}>
          <div style={styles.footerSection}>
            <h4
              style={styles.footerSectionH4}
              className="font-semibold text-lg"
            >
              About Us
            </h4>
            <p style={styles.footerSectionP}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non
              magna erat. Curabitur et facilisis quam.
            </p>
          </div>

          <div style={styles.footerSection}>
            <h4
              style={styles.footerSectionH4}
              className="font-semibold text-lg"
            >
              Quick Links
            </h4>
            <ul style={styles.footerSectionUl}>
              <li style={styles.footerSectionUlLi}>
                <a
                  style={styles.footerSectionUlLiA}
                  className="hover:underline"
                  href="#home"
                >
                  Home
                </a>
              </li>
              <li style={styles.footerSectionUlLi}>
                <a
                  style={styles.footerSectionUlLiA}
                  className="hover:underline"
                  href="#about"
                >
                  About
                </a>
              </li>
              <li style={styles.footerSectionUlLi}>
                <a
                  style={styles.footerSectionUlLiA}
                  className="hover:underline"
                  href="#services"
                >
                  Services
                </a>
              </li>
              <li style={styles.footerSectionUlLi}>
                <a
                  style={styles.footerSectionUlLiA}
                  className="hover:underline"
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div style={styles.footerSection}>
            <h4
              style={styles.footerSectionH4}
              className="font-semibold text-lg"
            >
              Contact Us
            </h4>
            <p style={styles.footerSectionP}>
              1234 Street Name, City, State 56789
            </p>
            <p style={styles.footerSectionP}>Email: info@example.com</p>
            <p style={styles.footerSectionP}>Phone: (123) 456-7890</p>
          </div>

          <div style={styles.footerSection}>
            <h4
              style={styles.footerSectionH4}
              className="font-semibold text-lg"
            >
              Follow Us
            </h4>
            <div className="flex w-32 justify-between">
              <div style={styles.socialIconsDiv}>
                <a
                  style={styles.socialIconsA}
                  className="hover:underline"
                  href="#facebook"
                >
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </div>
              <div style={styles.socialIconsDiv}>
                <a
                  style={styles.socialIconsA}
                  className="hover:underline"
                  href="#twitter"
                >
                  <FontAwesomeIcon icon={faInstagramSquare} />
                </a>
              </div>
              <div style={styles.socialIconsDiv}>
                <a
                  style={styles.socialIconsA}
                  className="hover:underline"
                  href="#instagram"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
              </div>
              <div style={styles.socialIconsDiv}>
                <a
                  style={styles.socialIconsA}
                  className="hover:underline"
                  href="#linkedin"
                >
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div style={styles.footerBottom}>
          <p>&copy; 2024 Your Company Name. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
