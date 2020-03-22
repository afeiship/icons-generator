const fs = require('fs');
const sharp = require('sharp');
const defaults = {
  size: '16,19,32,38,48,64,96,128,256',
  prefix: 'icon-',
  output: './dist'
};

module.exports = function() {
  const cmd = {};
  cmd.command = 'chrome-extension';
  cmd.desc = 'Generate chrome extension images.';
  cmd.builder = {
    filename: {
      alias: 'f',
      describe: 'The icon filename.',
      demand: true
    },
    size: {
      alias: 's',
      describe: 'The sizes of icons.',
      demand: false
    },
    prefix: {
      alias: 'p',
      describe: 'The icon prefix name.',
      demand: false
    },
    output: {
      alias: 'o',
      describe: 'The icon output dir.',
      demand: false
    }
  };
  cmd.handler = function(argv) {
    const { size, prefix, filename, output } = Object.assign({}, defaults, argv);

    const sizes = size.split(',');

    sizes.forEach((item) => {
      const size = parseInt(item);
      sharp(filename)
        .resize(size)
        .png()
        .toBuffer()
        .then((res) => {
          fs.writeFileSync(`${output}/${prefix}${size}.png`, res);
        });
    });
  };
  return cmd;
};
