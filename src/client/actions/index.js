export const FETCH_USERS = 'FETCH_USERS';

export const fetchUsers = () => async (dispatch, getState, axios) => {
  const res = await axios.get('/users');

  dispatch({
    type    : FETCH_USERS,
    payload : res,
  })
};