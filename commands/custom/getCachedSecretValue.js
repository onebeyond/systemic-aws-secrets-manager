const cachedValues = []

const getCachedSecretValue = client => async ({ SecretId, expirationMilisecondsTime = 3600 }) => {
  const { value, lastRetrieveTime } = cachedValues[SecretId] || { value: null, lastRetrieveTime: 0 }
  const nowDateMiliseconds = Date.now()
  const valueHasExpired = (nowDateMiliseconds - lastRetrieveTime) > expirationMilisecondsTime

  if (valueHasExpired) {
    const newValueResponse = await client.getSecretValue({ SecretId });
    const newDecodedValue = decodeSecretValue(newValueResponse)
    cachedValues[SecretId] = { value: newDecodedValue, lastRetrieveTime: Date.now() }
    return newDecodedValue
  } else {
    return value
  }
};

const decodeSecretValue = response => {
  if ('SecretBinary' in response) {
    const buff = Buffer.from(response.SecretBinary, 'utf8');
    return buff.toString('ascii');
  }
  return response.SecretString;
}

module.exports = getCachedSecretValue;
