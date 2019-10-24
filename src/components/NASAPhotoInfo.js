import React, { useState, useEffect } from "react";
import axios from "axios";
import NASAPhotoCard from "./NASAPhotoCard.js";

export default function NASAPhotoInfo(){

    const [photoData, setPhotoData] = useState([]);

    useEffect(()=> {
        axios.get(`https://api.nasa.gov/planetary/apod?api_key=DiV6Dc0hJ58lBFPqxDtaJ3SFBbNZGcZRIKJDtp5h`)
        .then(response => {
            console.log(response.data);
            setPhotoData(response.data);
        })
        .catch(error => {
            console.log("the data was not returned", error)
        })
    }, []);

    return(
        <div>

         <NASAPhotoCard title={photoData.title}
            date={photoData.date} explanation={photoData.explanation} imgURL={photoData.url}/>
        </div>

    );
}