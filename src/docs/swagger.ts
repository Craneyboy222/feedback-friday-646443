import swaggerJSDoc from 'swagger-jsdoc';

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Enterprise Application API',
      version: '1.0.0',
      description: 'API documentation for the enterprise application',
    },
    servers: [
      {
        url: 'https://api.yourapplication.com/v1',
      },
    ],
  },
  apis: ['./src/routes/*.js'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;