// Creates new middleware using provided options
module.exports = function (axios, options) {
  return async function redirectRoute (req, res, next) {
    let redirects = [];
    let { headers, url, callback } = options
    Object.assign(axios.defaults, { headers: headers })
    let { code, data } = (await axios.get(url)).data
    // request to update the redirect list
    if (code === "200" && Array.isArray(data) && data.length) {
      redirects = callback(data)
    }

    // find the redirect if it exists where the from === the requested url
    const redirect = redirects.find(r => encodeURI(r.from) === req.url);

    if (!redirect) {
      return next()
    }

    // If it exists, redirect the page with a 301 response else carry on
    try {
      res.writeHead(redirect.code, { Location: redirect.to });
    } catch (error) {
      // Not passing the error as it's caused by URL that was user-provided so we
      // can't do anything about the error.
      return next()
    }

    res.end()
  }
}
