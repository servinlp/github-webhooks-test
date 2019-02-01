module.exports = {
  apps : [{
    name: 'github-webhooks-test',
    script: 'server.js',

    watch: false,
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
