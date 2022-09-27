const parse = require('@alilc/lowcode-material-parser').default;
const path = require('path');

(async () => {
  const options = {
    entry: path.resolve(__dirname, './colorful-text.tsx'),
    accesser: 'local',
  };

  const actual = await parse(options);
  console.log(JSON.stringify(actual, null, 2));
})();