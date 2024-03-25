import React, { useState } from 'react';
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import { MDBContainer, MDBCol } from 'mdb-react-ui-kit';
import SearchByFlight from '../../components/SearchByFlight/SearchByFlight';
import "./LandingPage.css";
import SearchByAirport from '../../components/SearchByAirport/SearchByAirport';
import NewsComponent from '../../components/NewsComponent/NewsComponent';
import Footer from '../../components/Footer/Footer';


function LandingPage() {
    const [hero, setHero] = useState(null);

    const handleHeroChange = (newHero) => {
        setHero(newHero);
    };


    return (
        <>
            <MDBContainer>
                <NavigationBar hero={hero} onHeroChange={handleHeroChange} />

                <MDBCol className='columnFlight'>
                    {hero === 1 ? <SearchByAirport /> : <SearchByFlight />}
                </MDBCol>
                <div className='d-flex-xxl-row'>
                    <NewsComponent />
                </div>
                <div>
                    <Footer />
                </div>
            </MDBContainer>
        </>
    );
}

export default LandingPage;
