import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutAC } from '../../Redux/actionCreators/authAC';

function Logout() {
  const history = useHistory();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(logoutAC());
    history.push('/');
  });
  return (<div></div>);
}
export default Logout;
