[![Maintainability](https://api.codeclimate.com/v1/badges/86ff1ad4ab2cdb73669c/maintainability)](https://codeclimate.com/github/onebeyond/systemic-aws-secrets-manager/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/86ff1ad4ab2cdb73669c/test_coverage)](https://codeclimate.com/github/onebeyond/systemic-aws-secrets-manager/test_coverage)

# Systemic AWS S3

A [Systemic](https://guidesmiths.github.io/systemic/#/) component for the [AWS SecretsManager SDK v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/index.html).

## How to use it

### Configuration

A typical, simple configuration looks like this:

```json
{
  "region": "us-east-1",
  "credentials": {
    "secretAccessKey": "test",
    "accessKeyId": "test"
  }
}
```

[Here](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/classes/secretsmanager.html) you can find the complete configuration interface of SecretsmManager class constructor that set the region, credentials and other options.

### Initialize the component

As with any other [Systemic component](https://guidesmiths.github.io/systemic/#/?id=components), you can run it with the `start` method:

```js
const initAWSSecretsManager = require('systemic-aws-secrets-manager');
const { start } = initAWSSecretsManager();

const api = await start({ config }); // configuration similar to the one above
```

### Call the API commands

As the AWS API has dozens of commands, intead of having one wrapper for each of them, the component exposes one single command `commandExecutor` that can be used to call any of the commands exposed by the api:

For example, to list all the objects in a specific bucket:

```js
const getSecretValueConfig = {
  commandParams: { SecretId: secretId },
  commandName: 'getSecretValue'
}
const res = await api.commandExecutor(getSecretValueConfig);
```

You can check all the available commands [here](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/clients/client-secrets-manager/classes/secretsmanager.html).

### Custom commands

In the future, this component will also expose some custom commands not supported by the official API.

## Guide for developers

### How to test it

You can test the whole test suite running one of these commands:

```bash
# all tests will be executed once
npm run test

# tests will be executed every time code changes (useful when coding)
npm run test:watch
```

In case that you want to just execute a certain test case, you can also use these scripts to up / tear down the infra.

```bash
npm run infra:up
npm run infra:down
```
