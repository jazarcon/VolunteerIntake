import React from "react";

function ProgressBar( {currentPage} ) {
    let page = 0;
    const totalPages = 7;

    if (currentPage === "Contact Information") {                page=1;    
    } else if (currentPage === "Motivation") {                  page=2;     
    } else if (currentPage === "Skills Assessment") {           page=3;
    } else if (currentPage === "Interest Assessment") {         page=4;
    } else if (currentPage === "Availability") {                page=5;
    } else if (currentPage === "Police Information Check") {    page=6;
    } else if (currentPage === "Health and Safety") {           page=7;
    }

    const progress = (page / totalPages) * 100;

    return (
        <div style={styles.container}>
            <div style={styles.bar}>
                <div style={{ ...styles.progress, width: `${progress}%` }}>
                    {/* <span style={styles.text}>{`${Math.round(progress)}%`}</span> */}
                </div>
            </div>
        </div>
    )
}

export default ProgressBar;

const styles = {
    container:{
        display:"flex",
        justifyContent:"center",
        marginTop:"20px",
    },
    bar: {
        width: "100%",
        backgroundColor: "#e0e0e0",
        borderRadius: "5px",
        overflow: "hidden",
        position: "relative",
    },
    progress: {
        height: "20px",
        backgroundColor: "#23a93a",
        borderRadius: "5px 0 0 5px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
    },
    text: {
        padding: "0 10px",
        width: "100%",
        justifyContent: "center",
        color: "#fff",
        fontWeight: "bold",
    }
}