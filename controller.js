// This is the only function that will be called by the endpoint.
function print(req, res) {
  res.send("Hello everyone!");
}

module.exports = print;
