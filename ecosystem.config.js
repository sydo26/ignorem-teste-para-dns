module.exports = {
    apps : [{
      name: "testedns",
      script: "yarn",
      args: "start",
      env_production: {
        NODE_ENV: "production",
        PORT: '3000'
      }
    }]
}