const createURLParams = (params) =>
  Object.keys(params)
    .map((param) =>
      params[param]
        ? encodeURIComponent(param) + '=' + encodeURIComponent(params[param])
        : null
    )
    .filter(Boolean)
    .join('&');

export default createURLParams;
