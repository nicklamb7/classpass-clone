import React from 'react';
import './Header.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';
import CardGiftcardRoundedIcon from '@material-ui/icons/CardGiftcardRounded';

function Header() {
    return (
        <header className="header">
            <section className="header__top-section">
                <img src="https://cdn9.classpass.com/dist/22cd358caa3a3af7175f2362441d94cd.svg" alt="" className="header__logo" />
                <form>
                    <div className="header__search-wrapper">
                        <SearchIcon />
                        <input type="text" placeholder="Find a studio or activity" className="header__search-keyword" name="search-bar" />
                    </div>
                    <RoomIcon />
                    <input type="text" placeholder="London" className="header__search-location" name="search-bar-location"/>
                    
                </form>
                <div className="header__links">
                    <ul>
                        <li className="header__links-active">
                            <CardGiftcardRoundedIcon />
                            Gifts
                        </li>
                        <li>
                            Videos
                        </li>
                        <li>
                            Upcoming
                        </li>
                        <li>
                            Get 10 credits
                        </li>
                        <li>
                            20 credits
                        </li>
                    </ul>
                </div>
                <div  className="header__profile-wrapper">
                    <div className="header__profile-icon">
                       <strong>N </strong>
                    </div>     
                    <ExpandMoreIcon />              
                </div>
            </section>
            <section className="header__bottom-section">
                <button className="header__first-filter">
                    All categories
                    <ExpandMoreIcon />  
                </button>
                <button>
                    Livestream
                    <ExpandMoreIcon />  
                </button>
                <button>
                    Activities
                    <ExpandMoreIcon />  
                </button>
                <button>
                    Sun, Jul 4
                    <ExpandMoreIcon />  
                </button>
                <button>
                    Any time
                    <ExpandMoreIcon />  
                </button>
                <button>
                    More
                    <ExpandMoreIcon />  
                </button>
            </section>
        </header>
    )
}

export default Header
