/**
 * The simplest example of writing and reading a tag from a PLC
 */

const PLC = require("../index");

const comm = new PLC("192.168.100.174");

comm
  .connect()
  .then(() => {
    return comm.write("_IO_EM_DO_01", false).then(() => {
      return comm.read("_IO_EM_DO_01").then(console.log);
    });
  })
  .catch(console.error);

comm.on("connect", () => {
  console.log("PLC connected successful! ");
});

comm.on("connect_error", e => {
  console.log("Fail to connect PLC!");
});

comm.on("disconnect", reason => {
  console.log("PLC disconnected reason:", reason);
});