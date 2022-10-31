import React from "react"

export default function Map(props) {
    const styles = {
        backgroundColor: props.isHeld ? "black" : "white"
    } 
    return (
        <div className="radio--buttons">
            <div 
                className="input--button" 
                style={styles}
                onClick={props.holdPoint}
                ></div>
        </div>
        
    )
}