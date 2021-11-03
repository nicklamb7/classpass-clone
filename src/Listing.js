import React from 'react';
import './Listing.css';
import Sessions from './Sessions';

function Listing() {
    return (
        <div className="listing">
            <div className="listing__left">
                <div className="listing__tabs">
                    <div>
                        <p className="active">Sessions</p>
                    </div>
                    <p>Studios</p>
                </div>
                <ul>
                    <Sessions 
                        time="6:30 AM" 
                        length="180 min" 
                        name="STUDIO - Mysore Style Ashtanga Self Practice"
                        instructor="Agi Gazda"
                        rating="4.7"
                        reviews="5000+" 
                        location="The Life Centre · Islington
                        Highbury / Islington
                        Yoga" 
                        credits="5 credits"
                    />
                    <Sessions 
                        time="6:30 AM" 
                        length="120 min" 
                        name="ASHTANGA YOGA MYSORE - Self Practice"
                        instructor="Meg Willett"
                        rating="4.9"
                        reviews="82" 
                        location="Light Centre · Belgravia
                        Belgravia
                        Yoga" 
                        credits="5 credits"
                    />
                    <Sessions 
                        time="6:30 AM" 
                        length="60 min" 
                        name="Putney Power Flow - In Studio"
                        instructor="AZoshia"
                        rating="4.7"
                        reviews="5000+" 
                        location="The House of Yoga
                        Putney
                        Yoga" 
                        credits="8 credits"
                    />
                    <Sessions 
                        time="6:30 AM" 
                        length="60 min" 
                        name="FG 60"
                        instructor="Nic Doc"
                        rating="5.0"
                        reviews="1" 
                        location="Indee Hot Yoga
                        Hemel Hempstead
                        Yoga" 
                        credits="5 credits"
                    />
                    <Sessions 
                        time="6:45 AM" 
                        length="90 min" 
                        name="Bikram Yoga"
                        instructor="Antonia"
                        rating="4.7"
                        reviews="5000+" 
                        location="Bikram Yoga London · London Bridge
                        Gerrards Cross
                        Yoga" 
                        credits="6 credits"
                    />                    
                    <Sessions 
                        time="7:00 AM" 
                        length="45 min" 
                        name="Sunrise Flow"
                        instructor="Olivia Franklin"
                        rating="5.0"
                        reviews="5000+" 
                        location="TAura Organics Yoga & Pilates
                        East Village
                        Yoga" 
                        credits="5 credits"
                    />
                    <Sessions 
                        time="7:00 AM" 
                        length="60 min" 
                        name="LIGHT FLOW 60"
                        instructor="Claira Vaughan"
                        rating="4.8"
                        reviews="5000+" 
                        location="Hot Yoga Brixton
                        Brixton
                        Yoga" 
                        credits="7 credits"
                    />
                    <Sessions 
                        time="7:00 AM" 
                        length="60 min" 
                        name="Vinyasa Yoga"
                        instructor="Danielle Willemsen"
                        rating="4.8"
                        reviews="5000+" 
                        location="KXU
                        Chelsea
                        Yoga" 
                        credits="17 credits"
                    />
                    <Sessions 
                        time="6:30 AM" 
                        length="180 min" 
                        name="STUDIO - Mysore Style Ashtanga Self Practice"
                        instructor="Agi Gazda"
                        rating="4.7"
                        reviews="5000+" 
                        location="The Life Centre · Islington
                        Highbury / Islington
                        Yoga" 
                        credits="5 credits"
                    />
                </ul>
            </div>
            <div className="listing__right">
                
            </div>
        </div>
    )
}

export default Listing
