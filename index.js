const PORT = 3000;

const express = require('express');
const cheerio = require('cheerio');
const axios = require('axios');
const { response } = require('express');


const app = express();

URL = 'https://www.configuroweb.com/';

axios(URL)
    .then(response =>{

        const html = response.data;
        const $ = cheerio.load(html)
        const articles = []
        $('.entry-title', html).each(function(){
            const titulo = $(this).text()
            const url = $(this).find('a').attr('href')
            articles.push({
                titulo,
                url
            })
        })

        console.log(articles)

    }).catch(err => console.log(err))



app.listen(PORT, ()=>console.log('Ejecutando el script desde el puerto 3000'));
