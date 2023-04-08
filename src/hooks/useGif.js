import axios from 'axios';
import React, { useEffect, useState } from 'react'



const useGif = (tag) => {

    const API_KEY = 'pu26s5P1GtE2VrEKEAMEqgb3M22JRcgb';
    const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

    const [gif, setGif]  = useState('')
    const [loading, setLoading] = useState(false)

    async function fetchData() {
    setLoading(true)
    const {data} = await axios.get(!tag ? url : `${url}&tag=${tag}`);
    const imageSource = data.data.images.fixed_height_downsampled.url;
    setGif(imageSource)
    setLoading(false)
    }

    useEffect( () => {
    fetchData('');
    }, []);

    return {gif, loading, fetchData};
}

export default useGif;