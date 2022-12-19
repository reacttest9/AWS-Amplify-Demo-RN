import {Dimensions} from 'react-native';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

export const getScreenWidth = (value: any) => {
  if (value) {
    let finalValue = (screenWidth * value) / 100;
    return finalValue;
  } else {
    return screenWidth;
  }
};

export const getScreenHeight = (value: any) => {
  if (value) {
    let finalValue = (screenHeight * value) / 100;
    return finalValue;
  } else {
    return screenHeight;
  }
};

export const getNumbersOnly = (value: any) => {
  return value.replace(/[^0-9]/g, '');
};

export const floatRegexCheck = (st: any) => {
  const regx1 = new RegExp("^0[0-9]+\\.?[0-9]*$"); // for finding numbers starting with 0
  let regx2 = new RegExp("([1-9]{1}[0-9]*\\.?[0-9]*)"); //if regx1 matches then this will remove 0s at the head. 
  if (!st.match(regx1)) { 
      regx2 = new RegExp("([0-9]*\\.?[0-9]*)"); //if number does not contain 0 at the head of string then standard decimal formatting takes place
  }
  st = st.match(regx2);
  if (st?.length > 0) {
      st = st[0];
  }
  return st;
}

export const verifypass = (password: any) => {
  if (password) {
    if (password.length >= 6) {
      return true;
    } else {
      // return toast.info({message: 'Password must be atleast 6 characters'});
    }
  } else {
    // return toast.info({message: 'Password is required'});
  }
};

export const verifyEmail = (text: any) => {
  if (text) {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) == false) {
      // return toast.info({message: 'Invalid email'});
    } else {
      return true;
    }
  } else {
    // return toast.info({message: 'Email is required'});
  }
};

export const verifyName = (name: any) => {
  if (name) {
    if (name.length < 3) {
      // return toast.info({message: 'Name must be atleast 3 characters'});
    } else {
      return true;
    }
  } else {
    // return toast.info({message: 'Name is required'});
  }
};

export const verifyPhone = (phone: any, phoneLength: any) => {
  if (phone) {
    if (phone.length === phoneLength) {
      return true;
    }
  } else {
    return false;
  }
  return false;
};

export const verifyConfirmPassword = (password: any, confirmPassword: any) => {
  if (confirmPassword === password) {
    return true;
  } else {
    // return toast.info({message: 'Password and confirm password must be same'});
  }
};

export const getValidUrl = (url: any) => {
  if (url.indexOf('http') === 0) {
    return true;
  } else {
    return false;
  }
};
