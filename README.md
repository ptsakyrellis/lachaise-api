## Synopsis

This small node.js API connects to a MongoDB database to display a list and informations about the main monuments in the Père-Lachaise cemetary in Paris. 

The data comes from [https://www.data.gouv.fr/fr/datasets/monuments-et-tombes-de-personnalites-du-cimetiere-du-pere-lachaise-openstreetmap-wikipedia-wikimedia/]

## Motivation

Motivation for this API was to experiment the way to quickly code a small API with node.js.

## API Reference

All responses are using the JSON format. 

    /api/monuments

List all the monuments

    /api/monuments/id

List the infos of the referenced monument

## License

Copyright (c) 2015 Philippe Tsakyrellis
API Licensed under the MIT license.
Database under the Open Data Commons Open Database License.