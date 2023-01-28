const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
      title: 'Contacts API',
    description: 'This is a demonstration of MongoDB CRUD or Create, Read, Update, and Delete. The main features are listed below.',
  },
  servers: [
    {
      url: "https://localhost:8080/",
      description: "local server"
    },
    {
      url: "https://api-doc-w04.onrender.com",
      description: "deployed server"
    }
  ],
  host:'api-doc-w04.onrender.com',
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);