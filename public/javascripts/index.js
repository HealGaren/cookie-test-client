const queryString = new URLSearchParams(location.search);
const apiDomain = queryString.get('apiDomain') ?? window.location.host;
const cookieDomain = queryString.get('cookieDomain') ?? window.location.host;

axios.get(`https://${apiDomain}/api/environments`, {params: {domain: cookieDomain}}, {withCredentials: true});
