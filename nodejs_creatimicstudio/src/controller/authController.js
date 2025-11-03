import authService from "../service/authService.js";

const handleLogin = async (req, res) => {
  try {
    let data = await authService.handleLogin(data);
    return res.status(200).json({
      EM: data.EM,
      EC: data.EC,
      DT: data.DT,
    });
  } catch (error) {
    console.error("Error in findCourseUserState2:", error);
    return res.status(500).json({
      EM: "Error from server",
      EC: -1,
      DT: "",
    });
  }
}

module.exports = {
    handleLogin
};
