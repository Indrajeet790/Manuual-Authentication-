// render the sign up page
module.exports.signUp = function (req, resp) {
  return resp.render("user_sign_up", {
    title: "Codeial | Sign Up",
  });
};

// render the sign in page
module.exports.signIn = function (req, resp) {
  return resp.render("user_sign_in", {
    title: "Codieal | Sign In",
  });
};
