export async function load({ url }) {
    let par = url.searchParams.get('page')
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














// import { api } from './api';

// export const load = async ({ url }) => {
//     let par = url.searchParams.get('pag');
//     if (par < 1) par = 1;
//     console.log(par);
//     return fetch(url, {
// method,
//     headers: {
//     'Accept': 'application/json',
//         'app_id': '525b3b02',
//             'app_key': 'f3495bf7e7e8ead7edbc56a8f479d91e',
//                 'ResourceVersion': 'v4',
//                     "content-type": "application/json"
// }

//     })
//     const response = await api('GET', baseUrl);
//     if (response.status === 200) {
//         return {
//             data: { vluchten: await response.json(), pagina: par }
//         };
//     };
// };










// export async function load({ fetch, url }) {

//     let par = url.searchParams.get('pag')
//     if (par = '' || par < 1) par = 1;
//     const baseUrl = `https://api.schiphol.nl/public-flights/flights?page=${par}`;
//     const response = await fetch(baseUrl, {
//         method: 'get',
//         headers: {
//             Accept: 'application/json',
//             app_id: '525b3b02',
//             app_key: 'f3495bf7e7e8ead7edbc56a8f479d91e',
//             ResourceVersion: 'v4'
//         }
//     })
//     let vluchten = await response.json();
//     return ({ vluchten: vluchten, pagina: par })
// };

