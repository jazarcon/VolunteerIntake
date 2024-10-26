import React, { useEffect, useState } from 'react';

function Header() {
  return (
    <div style={styles.header}>
      <div style={styles.headerContent}>
        <img src={require('./MCHB logo.png')} alt="MCHB Logo" style={styles.logo} />
        <h1>Volunteer Intake Form</h1>
      </div>
      <div style={styles.subheader}>
        <p>The MCHB team has suppored Edmonton's diverse communities for 25+ years. 
        </p>
        <p>
          For any questions, please contact us at volunteer@mchb.org
        </p>
      </div>
    </div>
  );
}

export default Header;

const styles = {
  header: {
    padding: '10px',
    backgroundColor: '#f8f9fa', // Example background color
  },
  headerContent: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    padding: '10px',
  },
  logo: {
    height: '100px',
    marginRight: '20px',
  },
  subheader: {
    marginTop: '20px',
    backgroundColor: '#23a93a', //     --tertiary-color: #23a93a;
    padding: '10px',
    borderRadius: '10px',
    color: 'white',
  },
};