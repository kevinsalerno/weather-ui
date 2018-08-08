export function appendQueryString(queryString, param, value) {
    if (queryString)
      return (queryString.length <= 1) ? `${queryString}${param}=${value}` : `&${queryString}${param}=${value}`;
  }