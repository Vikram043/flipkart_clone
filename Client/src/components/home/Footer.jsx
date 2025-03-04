import React from 'react';

const footerStyle = {
  backgroundColor: 'white',
  padding: '20px 0',
};

const footerContainerStyle = {
  display: 'flex',
  justifyContent: 'space-around',
  maxWidth: '1200px',
  margin: '0 auto',
};

const footerSectionStyle = {
  marginRight: '20px',
};

const footerSectionTitleStyle = {
  fontSize: '18px',
  fontWeight: 'bold',
  marginBottom: '10px',
};

const footerLinksStyle = {
  listStyle: 'none',
  padding: '0',
};

const footerLinkStyle = {
  color: '#333',
  textDecoration: 'none',
};

const FooterContactSection = () => {
  return (
    <div className="footer-contact" style={footerSectionStyle}>
      <h4 style={footerSectionTitleStyle}>Contact Us</h4>
      <p>Email: contact@flipkart.com</p>
      <p>Phone: 123-456-7890</p>
      <p>Address: 123 Shopping Street, City, Country</p>
    </div>
  );
};

const FooterLinksSection = ({ title, links }) => {
  return (
    <div className="footer-section" style={footerSectionStyle}>
      <h4 style={footerSectionTitleStyle}>{title}</h4>
      <ul className="footer-links" style={footerLinksStyle}>
        {links.map((link, index) => (
          <li key={index}>
            <a href={link.url} style={footerLinkStyle}>{link.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  const aboutLinks = [
    { label: 'About Us', url: '/about' },
    { label: 'Our Team', url: '/team' },
    // ... more links
  ];

  const customerServiceLinks = [
    { label: 'Flipkart Internet Private Limited'},
    { label: 'Buildings Alyssa, Begonia'},
    { label: 'Bengaluru, 560103'},
    { label: 'Karnataka, India'},
    { label: 'CIN: U51109KA2012PTC066107'},
    { label: 'Telephone: 044-45614700'}

  ];

  // More section links...

  return (
    <footer className="footer" style={footerStyle}>
      <div className="footer-container" style={footerContainerStyle}>
        <FooterContactSection />
        <FooterLinksSection title="ABOUT" links={aboutLinks} />
        <FooterLinksSection title="CONSUMER POLICY" links={aboutLinks} />
        <FooterLinksSection title="Registered Office Address" links={customerServiceLinks} />
        {/* Render more FooterLinksSections */}
      </div>
    </footer>
  );
};

export default Footer;
