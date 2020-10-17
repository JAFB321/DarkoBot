const fetch = require('node-fetch');
const { URLSearchParams } = require('url');

const DailyImage = async (fecha) => {
    const params = new URLSearchParams();
    const URL = 'https://api.nasa.gov/planetary/apod';
    params.append('api_key', process.env.NASA_API);

    const res = await fetch(`${URL}?${params.toString()}`);
    const data = await res.json();

    const { title, url, hdurl, explanation, date } = data;
    
    return {
        title, 
        url,
        hdurl,
        explanation,
        date
    };
}

exports.DailyImage = DailyImage;