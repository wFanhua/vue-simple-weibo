export const awaitWrap = promise => promise
  .then(data => [null, data])
  .catch(error => [error, null]);
