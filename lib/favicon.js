const fs = require('fs');
const sharp = require('sharp');
const toIco = require('to-ico');
const defaults = {
  size: '16,32',
  output: './dist'
};

module.exports = function() {
  var cmd = {};
  cmd.command = 'favicon';
  cmd.desc = 'Prints: Icons name favicon';
  cmd.builder = {
    filename: {
      alias: 'f',
      describe: 'The input filename.',
      demand: true
    },
    size: {
      alias: 's',
      describe: 'The sizes of icons.',
      demand: false
    },
    output: {
      alias: 'o',
      describe: 'The icon output dir.',
      demand: false
    }
  };
  cmd.handler = function(argv) {
    const { size, filename, output } = Object.assign({}, defaults, argv);
    const sizes = size.split(',').map((item) => parseInt(item, 10));

    sharp(filename)
      .png()
      .toBuffer()
      .then((buff) => {
        toIco([buff], {
          sizes,
          resize: true
        }).then((res) => {
          fs.writeFileSync(`${output}/favicon.ico`, res);
        });
      });
  };
  return cmd;
};
