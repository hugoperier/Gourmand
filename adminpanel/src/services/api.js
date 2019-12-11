import { withConfiguration } from "./config";

export const fetcher = (root, verb) => (url, payload, lang = "fr") => { 
  return withConfiguration(config => {
    return fetch(`${config[root]}${url}`, {
      method: verb,
      headers: new Headers({
        "Content-Type": "application/json;charset=UTF-8",
        "Accept-Language": lang,
        
      }),
      body: payload !== undefined ? JSON.stringify(payload) : undefined
    }).then(result => {
      if (result.ok === false) return Promise.reject("error");
      try {
        return(result.json())
      } catch {
        console.log("Je sais pas pourquoi, ca a fail...")
      }
    });
  });
};

export const post = fetcher("serverUrl", "POST");

export const get = fetcher("serverUrl", "GET");

export const put = fetcher("serverUrl", "PUT");

export const fetchCraftablesItems = () => {
  return get(`craft`);
}

export const getCraftById = id => {
  return get(`receipe/${id}`);
};

export const getPricesByIdArray = (ids, server) => {
  return post(`valuesarray`, [ids, server])
}

export const getAllPlaces = () => {
  return get(`places`)
}

export const addPlaces = (payload) => {
  return post(`admin/addplace`, payload)
}