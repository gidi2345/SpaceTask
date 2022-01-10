
//todo: move to env
//import {NetllifyRequestBodyInterface} from "../types/netllifyRequestBody.interface";

const netlifyUrl =
  'https://angry-stonebraker-21425c.netlify.app/.netlify/functions/';

const netlifyRequest = (netlifyFunctionName, body, getData) => {
  fetch(`${netlifyUrl}${netlifyFunctionName}`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
    .then(response => response.json())
    .then(json => {
      getData(json);
      console.log(json);
      return json;
    })
    .catch(error => {
      console.error(error);
    });
};

export default netlifyRequest;
