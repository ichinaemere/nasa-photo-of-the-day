import React from "react";

const NASAPhotoCard = props => {




    return(
        <div>
            <h1>NASA Photo of The Day</h1>
            <h2>Title: {props.title} </h2>
            <h2>Date: {props.date} </h2>
            <img src={props.url}/>
            <p>Explanation: {props.explanation}</p>
        </div>
    );
};

export default NASAPhotoCard;