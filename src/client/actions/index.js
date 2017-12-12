export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';
export const FETCH_ADMINS = 'FETCH_ADMINS';
export const CREATE_USER = 'CREATE_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const SEND_EMAIL = 'SEND_EMAIL';

export const fetchUsers = () => async (dispatch, getState, axios) => {
  const res = await axios.get('/users');
  dispatch({ type : FETCH_USERS, payload : res, });
};

export const fetchCurrentUser = () => async (dispatch, getState, axios) => {
  const res = await axios.get('/user/profile');
  dispatch({ type : FETCH_CURRENT_USER, payload : res, });
};

export const fetchAdmins = () => async (dispatch, getState, axios) => {
  try {
    const res = await axios.get('');
    dispatch({ type : FETCH_ADMINS, payload : res, });
  } catch (err) {
    console.log(err);
  }
};

export const createUser = (user) => async (dispatch, getState, axios) => {
  try {
    const res = await axios.post('/user/create', user);
    dispatch({ type : CREATE_USER, payload : res, });
  } catch (err) {
    console.log(err);
  }
};

export const sendEmail = (user) => async (dispatch, getState, axios) => {
  try {
    const res = await axios.post('/user/send', user);
    dispatch({ type : CREATE_USER, payload : res, });
  } catch (err) {
    console.log(err);
  }
};

export const loginUser = (user) => async (dispatch, getState, axios) => {
  try {
    const res = await axios.post('/auth/login', user);
    dispatch({ type : LOGIN_USER, payload : res, });
  } catch (err) {
    console.log(err);
  }
};