import AsyncStorage from '@react-native-async-storage/async-storage';


const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log('Error storing data:', error);
  }
};



const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    // console.log(value);
    if (value !== null) {
      // value previously stored
      return JSON.parse(value);
    }
  } catch (error) {
    console.log('Error retrieving data:', error);
  }
}


const getUserToken = async () => {
  try {
    const data = await AsyncStorage.getItem('setUser');
    const userToken = JSON.parse(data).token;
    console.log('service: token :' + userToken);
    return userToken;
  } catch (error) {
    return null;
    console.log('Error retrieving data:', error);
  }

}



const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log('Error removing data:', error);
  }
};


const clearData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log('Error clearing data:', error);
  }
};


export { storeData, getData, getUserToken, removeData, clearData };