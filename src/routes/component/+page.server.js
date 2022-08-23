export async function load({ url }) {
    let par = url.searchParams.get('page');
    if (!par || par < 0) par = 0;
    const baseUrl = `https://api.schiphol.nl/public-flights/flights?page=${par}`;
    const response = await api('get', baseUrl)
    return { vluchten: response.json(), pagina: par }

}


function api(method, url, data) {
    return fetch(url, {
        method,
        headers: {
            'Accept': 'application/json',
            'app_id': '525b3b02',
            'app_key': 'f3495bf7e7e8ead7edbc56a8f479d91e',
            'ResourceVersion': 'v4',
            "content-type": "application/json"
        },
        body: data
    })
}
