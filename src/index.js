const { resolve } = require('path');
const envkey = require('envkey/loader');

module.exports = function parcelEnvkeyPlugin (bundler) {
  bundler.on('buildStart', (entryPoints) => {
    const configPath = resolve(process.cwd(), 'envkey.config.js');

    let envkeyConfig = null;
    try {
      envkeyConfig = require(configPath);
    } catch (e) {
      console.error('A envkey.config.js file is required when using Envkey with Parcel');
      process.exit(1);
    }

    if (!envkeyConfig.permitted || !envkeyConfig.permitted.length) {
      throw new Error("'permitted' key required to specifiy vars whitelisted for client.");
    }

    envkey.load(envkeyConfig);
  });
};
