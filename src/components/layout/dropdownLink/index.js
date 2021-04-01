import React from 'react';
import { Link } from 'react-router-dom'
import AuthenServices from '../../../services/Authentication.Service'

export default function DropdownLink({ userName, name, removeAuthenticate }) {

  const handleClickLogout = (e) => {
    e.preventDefault()
    removeAuthenticate()
    AuthenServices.logout()
  }


  return (
    <>
      <li className="dropdown">
        <a href="/" data-toggle="dropdown" onClick={(e) => { e.preventDefault() }}>
          <span style={{ marginLeft: '2em', marginRight: '2em' }}><i className="fa fa-user mr-2"></i>{userName}</span>
        </a>
        <div className="dropdown-menu">
          <Link className="text-center" to="/" onClick={(e) => { e.preventDefault() }}>{name}</Link>
          <a className="dropdown-item" href={`https://dashboard-motel-room.web.app/login/${AuthenServices.getJwtAuthToken().substring(7)}`}><i className="fa fa-cog mr-2"></i>Dashboard</a>
          <Link to="/logout" onClick={handleClickLogout} className="dropdown-item"><i className="fa fa-sign-out mr-2"></i>Đăng xuất</Link>
        </div>
      </li>
    </>
  );
};