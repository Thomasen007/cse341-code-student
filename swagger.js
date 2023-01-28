const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
      title: 'Contacts API',
    description: 'This is a demonstration of MongoDB CRUD or Create, Read, Update, and Delete. The main features are listed below.',
  },
  host:'https://api-doc-w04.onrender.com/',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);