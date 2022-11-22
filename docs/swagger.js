const swaggerDocumentation = {
  openapi: '3.0.0',
  info: {
    tittle: 'Epic Mail',
    version: '1.0',
    description: 'This is the documentation page to Epic mail api',
  },
  servers: [
    {
      url: 'http://127.0.0.1:8080',
      description: 'local dev',
    },
    {
      url: '',
      description: 'Production dev',
    },
  ],

  tags: [
    {
      name: 'Donations',
      description: 'Donation routes',
    },
    {
      name: 'Intentions',
      description: 'Intentions routes',
    },
    {
      name: 'Feedback',
      description: 'feedback routes',
    },
  ],

  paths: {},
};
module.exports = swaggerDocumentation;
