class helloController {
  async index(req, res) {
    return res.json({ msg: "hello venus" });
  }
}

export default new helloController();
