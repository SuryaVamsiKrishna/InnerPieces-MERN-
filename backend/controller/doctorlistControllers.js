const Doctorlist = require("../models/Doctorlist");

const getDoctorlists = async (req, res) => {
  try {
    const doctorlists = await Doctorlist.find({});
    res.json(doctorlists);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getDoctorlistById = async (req, res) => {
  try {
    const doctorlist = await Doctorlist.findById(req.params.id);

    res.json(doctorlist);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

module.exports = {
  getDoctorlists,
  getDoctorlistById,
};
