import React from 'react';
import { useSelector } from 'react-redux';

import { ReducersState } from '../../reducers/rootReducer';

function Navbar() {
  const name = String(useSelector<ReducersState>(state => state.auth.name));

  return (
    <div className="mb-4 navbar navbar-dark bg-dark">
      <span className="navbar-brand">{name}</span>

      <button className="btn btn-outline-danger">
        <i className="fas fa-sign-out-alt"></i>
        <span> Salir</span>
      </button>
    </div>
  );
}

export default Navbar;
