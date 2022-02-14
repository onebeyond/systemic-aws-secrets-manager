const debug = require('debug')('systemic-aws-s3');
const { SecretsManagerClient } = require('@aws-sdk/client-secrets-manager');

let client = null;

module.exports = () => {
  const start = async ({ config }) => {
    debug('Initializing SecretsManagerClient');
    client = new SecretsManagerClient(config);

    return {
      client
    };
  };

  return {
    start
  };
};
