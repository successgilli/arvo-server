export default (err, req, res, next) => {
    const { status, message } = err;

    return res.status(status || 500).json({
        status: status || 500,
        message: message || 'something went wong'
    })
  }
