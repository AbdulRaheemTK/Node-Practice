import jsonwebtoken from "jsonwebtoken";

const generateToken = (_id) => {
  return jsonwebtoken.sign({ _id }, process.env.JWT_SECRET, {
    expiresIn: "5h",
  });
};

export default generateToken;
