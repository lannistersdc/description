const controller = {
  get: (req, res) => {
    res.status(200).send('Hello from get');
  },
};

module.exports = controller;
