import React, { useEffect, useState } from 'react';

function Header() {


  return (
    <div style={styles.header}>
      <h1>Volunteer Intake Form</h1>

        <div style={styles.subheader}>
            <p>Representing over 30 cultural and lingusitic groups, the MCHB team of 140 Health Brokers (community health workers) have devleivered responsive programs and services to Edmonton's ethoncultural communities for more than 25 years. Supporting the social fabric of our city, the MCHB has achieved significant outcomes reflected in its stellar reputation, progressive track record and position of community leadership
            </p>
            <p>This survey will allow us to access your backgrounds, skill sets and find a role that would best suit your needs. Once enrolled, the possibility to float between different roles would be considered if you want to diversify and grow
            </p>
            <p>For any questions, please contact Arlyn at arlyn@mchb.org (or whoever we chose to have the email for)</p>

        </div>

    </div>
  );
}

export default Header;

const styles = {
    header: {
        backgroundColor: 'white',
        textAlign: 'center',
        fontSize: '30px',
        color: 'black',
    },

    subheader: {
        backgroundColor: ' light green',
        textAlign: 'left',
        fontSize: '15px',
        color: 'black',
        padding: '40px',
        borderRadius: '10px',
    }

}
