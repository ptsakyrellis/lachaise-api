## Synopsis

This small node.js API connects to a MongoDB database to display a list and informations about the main monuments in the Père-Lachaise cemetary in Paris. 

The data comes from www.data.gouv.fr/fr/datasets/monuments-et-tombes-de-personnalites-du-cimetiere-du-pere-lachaise-openstreetmap-wikipedia-wikimedia/  

This data has been published on the data.gouv.fr website and is provided as a JSON array of monuments objects. The data includes precise location of the monument, biographical insight, pictures.  

You can test the API live here : https://stark-headland-5347.herokuapp.com/api/

## Motivation

Motivation for this API was to experiment the way to quickly code a small API with node.js.

## Installation

To get this API up and running, you should have a mongoDB collection containing the data.  	 

1. Clone this repository

    git clone https://github.com/ptsakyrellis/lachaise-api.git    

2. Copy the file : 

    /app/config/db.example.js   

to

    /app/config/db.js   

and replace the content with the desired values. 

3. In a terminal :

    npm install   

    npm start    

4. Access the API at IP:8080/api 

## API Reference

All responses are using the JSON format. 

    /api/monuments

List all the monuments

    /api/monuments/:id

List the infos of the referenced monument

## License

Copyright (c) 2015 Philippe Tsakyrellis  
API Licensed under the MIT license.  
Database under the Open Data Commons Open Database License.  
