const errorHandler = (error, req, res, next) => {
  let code = 500
  let message = "Internal server error"

  if (error.name == 'SequelizeValidationError' || error.name == 'SequelizeUniqueConstraintError') {
    error = error.errors[0].message
    code = 400
    message = error
  } else if (error.name == "invalidLogin" ) {
    code = 401
    message = "Invalid email/password"
  } else if (error.name == "invalidToken" || error.name == 'JsonWebTokenError') {
    code = 401
    message = "Invalid token"
  } else if (error.name == "forbidden") {
    code = 403
    message = "You are not authorized"
  } else if (error.name == "notFound") {
    code = 404
    message = "Error not found"
  } else if (error.name == "noEmail") {
    code = 400
    message = "Email is required"
  } else if (error.name == "noPassword") {
    code = 400
    message = "Password is required"
  }

  res.status(code).json({message})
}

module.exports = errorHandler