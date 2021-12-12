import React from "react";

const TextBox = ({message}) =>
{
    const userBox = {
        width: "20vw",
        border: ".1rem",
        borderRadius: "1rem",
        padding: ".8rem .8rem",
        backgroundColor:"#D3D3D3",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        marginTop: ".5rem",
        marginBottom: ".5rem",
        marginLeft: ".5rem",
        color:"black"
    }

    const personBox = {
        width: "20vw",
        border: ".1rem",
        borderRadius: "1rem",
        padding: ".8rem .8rem",
        backgroundColor: "#90EE90",
        boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)",
        marginTop: ".5rem",
        marginBottom: ".5rem",
        marginLeft: "25vw"
    }

    const time = {
        fontSize: ".7rem",
        marginLeft: "16vw",
        marginTop: ".4rem"
    }

    return(
        <div style={message.to==='userName' ? userBox: personBox}>
            <p >{message.body}</p>
            <p style={time} >{message.time}</p>
        </div>
    )
}

export default TextBox