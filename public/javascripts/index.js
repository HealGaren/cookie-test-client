const queryString = new URLSearchParams(location.search);
const apiDomain = queryString.get('apiDomain') ?? window.location.host;
const cookieDomain = queryString.get('cookieDomain') ?? window.location.host;

axios.get(`https://${apiDomain}/api/environments`, {params: {cookieDomain, allowOriginDomain: window.location.host}}, {withCredentials: true});
