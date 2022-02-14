const { startSecretsManagerComponent } = require('../helpers/startSecretsManagerComponent')
const localstackConfig = require('../fixtures/localstackConfig')
// eslint-disable-next-line no-unused-vars
let secretsManager;

describe('Systemic Secret Value - get cached secret value', () => {
  beforeAll(async () => {
    secretsManager = await startSecretsManagerComponent(localstackConfig);
  });

  it.todo('should return the value from calling the aws api')
  it.todo('should return the cached value')
  it.todo('should return the cached value')
})
