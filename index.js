const debug = require('debug')('systemic-aws-s3');
const { SecretsManager, SecretsManagerClient } = require('@aws-sdk/client-secrets-manager');
const path = require('path');

const commands = require('require-all')(path.resolve(__dirname, '/commands'));

let client = null;
let aggregatedSecretsManager = null;

module.exports = () => {
  const start = async ({ config }) => {
    debug('Initializing SecretsManagerClient');
    aggregatedSecretsManager = new SecretsManager(config);
    client = new SecretsManagerClient(config);

    return {
      client,
      commandExecutor: commands.commandExecutor(aggregatedSecretsManager)
    };
  };

  return {
    start
  };
};
