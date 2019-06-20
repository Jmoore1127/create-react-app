'use strict';

const prompt = require('prompt');

const schema = {
  properties: {
    useRedux: {
      type: 'boolean',
      message: 'Use redux?',
      default: false,
    },
  },
};

function getCustomOptions() {
  console.log();
  return new Promise((resolve, reject) => {
    prompt.colors = false;
    prompt.message = '-->';
    prompt.delimiter = '  ';

    prompt.start();
    prompt.get(schema, (err, result) => {
      if (err) {
        reject(err);
      }
      resolve(result);
    });
  });
}

module.exports = getCustomOptions;
