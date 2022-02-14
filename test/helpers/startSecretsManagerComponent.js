const initSecretsManager = require('../../index');
const secretsManagerComponent = initSecretsManager();

const startSecretsManagerComponent = config => secretsManagerComponent.start(config);

module.exports = {
  startSecretsManagerComponent
}
