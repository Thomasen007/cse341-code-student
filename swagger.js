const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
      title: 'Contacts API',
    description: 'Description',
  },
  servers: [
    {
      url: "http://localhost:8080/",
      description: "local server"
    },
    {
      url: "https://api-doc-w04.onrender.com",
      description: "deployed server"
    }
  ],
  schemes: ['http']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);