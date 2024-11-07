import User from "../models/user.model.js";

export const getUsersForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password"); // all users exclude me

    return res.status(200).json(filteredUsers);
  } catch (error) {
    console.log("Error in getUsersForSideBar: ", error.message);
    return res.status(500).json({ error: "Internal server error." });
  }
};

export const getMessages = async (req, res) => {
  try {
  } catch (error) {
    console.log("Error in getMessages controller: ", error.message);
    return res.status(500).json({ error: "Internal server error." });
  }
};
