const errorHandlerMiddleware = async (err, req, res, next) => {
  if (err.message) {
    return res.status(err.status).json({ success: false, error: err })
  }
  return res.status(500).json({ success: false, error: 'Something went wrong, please try again.' })
}

module.exports = errorHandlerMiddleware
