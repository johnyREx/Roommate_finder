import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faNotebook, faCog, faPowerOff } from '@fortawesome/free-solid-svg-icons';
import profile from '../images/profile-example.png';
import Popup from './Popup';
import CardPhoto from '../images/cardPhoto.webp';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownItem from 'react-bootstrap/DropdownItem';

const Navbar = () => {
  const [createAdvertButtonPopup, setCreateAdvertButtonPopup] = useState(false);
  const [open, setOpen] = useState(false);

  function DropdownMenuItem(props) {
    return (
      <li className='dropdownItem'>
        <FontAwesomeIcon icon={props.icon} className='dropdownIcon' />
        <span>{props.text}</span>
      </li>
    );
  }

  return (
    <>
      <header>
        <h3 className='logo'>Logo</h3>

        <nav className='navbar'>
          <a href='/#'>NAV1</a>
          <a href='/#'>NAV2</a>
          <a href='/#'>NAV3</a>
          <a href='/#'>NAV4</a>
        </nav>

        <div className='profile-field'>
          <button className='create-ad' onClick={() => setCreateAdvertButtonPopup(true)}>
            Create an advert
          </button>
          <Popup trigger={createAdvertButtonPopup}>
            <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='createCloseButtonContainer'>
                    <div className='createCloseButton' onClick={() => setCreateAdvertButtonPopup(false)}></div>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-6'>
                  <div className='createAdvertLeft'>
                    <div className='createAdvertImages'>
                      <img src={CardPhoto} alt='CardPhoto' />
                      <img src={CardPhoto} alt='CardPhoto' />
                      <div className='createAdvertVertical'></div>
                    </div>
                  </div>
                </div>
                <div className='col-sm-6'>
                  <form className='createAdvertInput'>
                    <input type='text' placeholder='Title' />
                    <input type='text' placeholder='City' />
                    <input type='text' placeholder='District' />
                    <input type='text' placeholder='Neighbourhood' />
                    <input type='text' placeholder='Rooms' />
                    <input type='text' placeholder='Floor Area' />
                    <input type='text' placeholder='Price' />
                    <input type='text' placeholder='Content' className='createAdvertContent' />
                  </form>
                </div>
              </div>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='createAdvertButtonContainer'>
                    <button className='createAdvertButton'>Create</button>
                  </div>
                </div>
              </div>
            </div>
          </Popup>

          <div className='menuTrigger' onClick={() => setOpen(!open)}>
            <img src={profile} className='profile-photo' alt='Profile' />
          </div>

          <div className={`dropdownMenu ${open ? 'active' : 'inactive'}`}>
            <ul>
              <DropdownItem>
                <Dropdown.Item>
                  <DropdownMenuItem icon={faBookmark} text={'Saved Ads'} />
                </Dropdown.Item>
              </DropdownItem>
              <DropdownItem>
                <Dropdown.Item>
                  <Link to='/myAdvert' style={{ color: '#000' }}>
                    <DropdownMenuItem icon={faNotebook} text={'My Ads'} />
                  </Link>
                </Dropdown.Item>
              </DropdownItem>
              <DropdownItem>
                <Dropdown.Item>
                  <Link to='/profile' style={{ color: '#000' }}>
                    <DropdownMenuItem icon={faCog} text={'Settings'} />
                  </Link>
                </Dropdown.Item>
              </DropdownItem>
              <DropdownItem>
                <Dropdown.Item>
                  <Link to='/login' style={{ color: '#000' }}>
                    <DropdownMenuItem icon={faPowerOff} text={'Log Out'} />
                  </Link>
                </Dropdown.Item>
              </DropdownItem>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
