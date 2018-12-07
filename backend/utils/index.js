const crypto = require('crypto');

module.exports = {
  base64UrlEncode: (string) => {
    return Buffer.from(string).toString("base64");
  },
  hash: (message, key) => {
    return crypto.createHmac("sha256", Buffer.from(key, "utf8")).update(message).digest().toString('base64');
  }
}