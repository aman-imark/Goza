
// const yourSiteUrl: string =  'https://jsonplaceholder.typicode.com';
// // const baseUrl: string = this.yourSiteUrl + '/api';
// const baseUrl: string = 'https://jsonplaceholder.typicode.com';


const yourSiteUrl: string =  'https://firstclass.customerdevsites.com';
const baseUrl: string = yourSiteUrl + '/api';


export const postApiCall = async (endpoint, data, bearerToken) => {
  console.log(baseUrl+endpoint, data, bearerToken);
    let nativeHeaders;
    if(bearerToken === '') {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'application/json', 
           'Access-Control-Allow-Origin': '*',
           'Authorization': `Bearer ${bearerToken}`
        };
    }


  try {
    const response = await fetch(baseUrl+endpoint, {
      method: 'POST',
      headers: nativeHeaders,
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
    console.log(responseData);
  } catch (error) {
    return error;
    console.error(error);
  }
};


export const postApiCallForm = async (endpoint, data, bearerToken) => {
  console.log(baseUrl+endpoint, data, bearerToken);
    let nativeHeaders;
    if(bearerToken === '') {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Content-Type': 'multipart/form-data', 
           'Access-Control-Allow-Origin': '*',
           'Authorization': `Bearer ${bearerToken}`
        };
    }


  try {
    const response = await fetch(baseUrl+endpoint, {
      method: 'POST',
      headers: nativeHeaders,
      body: JSON.stringify(data)
    });

    const responseData = await response.json();
    return responseData;
    console.log(responseData);
  } catch (error) {
    return error;
    console.error(error);
  }
};


export const getApiCall =  async (endpoint, bearerToken) => {
  console.log(baseUrl+endpoint, bearerToken);
  let nativeHeaders;
    if(bearerToken === '') {
        nativeHeaders = {
           'Access-Control-Allow-Origin': '*', 
        };
    }else {
        nativeHeaders = {
           'Access-Control-Allow-Origin': '*',
           'Authorization': `Bearer ${bearerToken}`
        };
    }


  try {
    const response = await fetch(baseUrl+endpoint, {
      method: 'GET',
      headers: nativeHeaders,
    });

    const responseData = await response.json();
    return responseData;
    console.log(responseData);
  } catch (error) {
    return error;
    console.error(error);
  }

}; 



