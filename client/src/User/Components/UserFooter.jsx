import React from 'react';
import { FaEnvelope, FaPhone, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const footerStyle = {
  backgroundColor: 'khaki',
  padding: '40px 0',
  color: 'black',
};

const containerStyle = {
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 20px',
};

const contentStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(4, 1fr)',
  gridGap: '30px',
};

const sectionStyle = {
  marginBottom: '30px',
};

const headingStyle = {
  fontSize: '30px',
  marginBottom: '10px',
  color: 'black',
};

const textStyle = {
  lineHeight: '1.5',
};

const listStyle = {
  listStyle: 'none',
  padding: 0,
};

const listItemStyle = {
  marginBottom: '10px',
};

const linkStyle = {
  color: 'black',
  textDecoration: 'none',
};

const iconStyle = {
  marginRight: '30px',
};

const socialIconStyle = {
  fontSize: '26px',
  marginRight: '30px',
  color: 'Black',
};




const bottomStyle = {
  marginTop: '30px',
  textAlign: 'center',
  borderTop: '1px solid #ccc',
  paddingTop: '20px',
  color: 'grey',
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div style={contentStyle}>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Links</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Home</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>About</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Products</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>Sign Up</a></li>
            </ul>
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Brands</h3>
            <ul style={listStyle}>
              
              <li style={listItemStyle}><a href="#" style={linkStyle}></a>Samyang</li>
              <li style={listItemStyle}><a href="#" style={linkStyle}></a>MAMA</li>
              <li style={listItemStyle}><a href="#" style={linkStyle}></a>INDOMIE</li>
              <li style={listItemStyle}><a href="#" style={linkStyle}></a>CHUNGDIN</li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>OYAKATO</a></li>
              <li style={listItemStyle}><a href="#" style={linkStyle}>KNORR</a></li>
            </ul>
          </div>
         
          <div style={sectionStyle}>
            <h3 style={headingStyle}>About Us</h3>
            <p style={textStyle}>All of us at K-RAMEN want to empower and inspire our customers to find their own style and be their own unique and beautiful selves! Our goal is to be the world’s biggest marketplace for Asian and Asia-inspired Food products. We believe that by helping customers conveniently and reliably find what they want, K-RAMEN is the go-to and most-trusted destination online for Asian Food products.         </p>
         
          </div>
          <div style={sectionStyle}>
            <h3 style={headingStyle}>Contact Us</h3>
            <p style={textStyle}>
              <FaEnvelope style={iconStyle} />
              Email: info@example.com
            </p>
            <p style={textStyle}>
    <FaPhone style={iconStyle} />
    Phone: 123-456-7890
    <div>
        <a href="#" style={socialIconStyle}><FaInstagram /></a>
        <a href="#" style={socialIconStyle}><FaFacebook /></a>
        <a href="#" style={socialIconStyle}><FaTwitter /></a>
    </div>
</p>

          </div>
        </div>
        <div style={bottomStyle} >
          <p>&copy; 2023 K-RAMEN. All rights reserved.</p>
          <p>Terms of Service | Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;