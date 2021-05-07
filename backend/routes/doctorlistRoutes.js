const express = require("express");
const router = express.Router();
const {
  getDoctorlists,
  getDoctorlistById,
} = require("../controller/doctorlistControllers");

router.get("/", getDoctorlists);
router.get("/:id", getDoctorlistById);

module.exports = router;



