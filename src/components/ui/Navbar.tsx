import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { startLogout } from '../../actions/auth';
import { ReducersState } from '../../reducers/rootReducer';

function Navbar() {
  const name = String(useSelector<ReducersState>(state => state.auth.name));
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(startLogout());
  };

  return (
    <div className="mb-4 navbar navbar-dark bg-dark">
      <span className="navbar-brand">{name}</span>

      <button className="btn btn-outline-danger" onClick={handleLogout}>
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
}

export default Navbar;
