

// Define the API endpoint URL
const USER_DETAILS_API_URL = "https://firstclass.customerdevsites.com/api/profile";


export const getUserDetails = async (token) => {

    // console.log('Service :  ' + token);
    const nativeHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${token}`
    };


  try {
    const response = await fetch(USER_DETAILS_API_URL, {
      method: 'GET',
      headers: nativeHeaders,
    });

    const responseData = await response.json();
    // console.log(responseData);
    const userData = responseData.data;
    console.log(userData);
    return userData;
  } catch (error) {
    return null;
    console.error(error);
  }

};

