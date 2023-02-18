const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Pharmacy API',
    description: 'This is the API for a backend pharmacy system.'
  },
  host: 'pharmacy-validation-check.onrender.com',
  schemes: ['https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);