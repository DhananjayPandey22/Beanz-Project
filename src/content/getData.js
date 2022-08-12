async function getData(port, api, page) {
  const url = port + api + page;

  const resp = await fetch(url);

  return await resp.json();
}
export default getData;
