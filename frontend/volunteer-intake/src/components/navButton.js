import React from 'react';

function NavButton() {
    return (
        <button style={styles.button}>Next</button>)
}

export default NavButton;

const styles = {
    button:{
        backgroundColor:"var(--primary-color)",
        color:"grey",
        padding:"10px",
        borderRadius:"5px",
        border:"none",
        cursor:"pointer",
    }
}