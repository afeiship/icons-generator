module.exports = function() {
  var cmd = {};
  cmd.command = "favicon <prefix>";
  cmd.desc = "Prints: <prefix> name favicon";
  cmd.builder = {
    wow: {
      alias: "w",
      describe: "Say wow!",
      demand: false
    }
  };
  cmd.handler = function(argv) {
    console.log(argv);
    console.log("[say:]", argv.wow);
  };
  return cmd;
};
