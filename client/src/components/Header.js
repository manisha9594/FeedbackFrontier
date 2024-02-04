import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'; // Import Link

function Header({ auth }) {
  const renderContent = () => {
    switch (auth) {
      case null:
        return; // Optionally, you can return undefined or null explicitly here
      case false:
        return <li><Link to="/auth/google">Login with Google</Link></li>; // Use Link for routing
      default:
        return <li><Link to="/api/logout">Logout</Link></li>; // Fixed to use Link, removed extra 'a' attribute
    }
  };

  return (
    <nav>
      <div className="nav-wrapper">
        <Link to={auth ? '/surveys' : '/'} className="left brand-logo">EmailFinder</Link> {/* Assuming you want to link this to the homepage */}
        <ul className="right">
          {renderContent()}
        </ul>
      </div>
    </nav>
  );
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
