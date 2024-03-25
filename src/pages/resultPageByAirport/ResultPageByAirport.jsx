import React, { useState } from 'react'
import AirportLists from '../../components/AirportLists/AirportLists'
import { MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SearchByFlight from '../../components/SearchByFlight/SearchByFlight'
import SearchByAirport from '../../components/SearchByAirport/SearchByAirport'


function ResultPageByAirport() {

    const [hero, setHero] = useState(null);

    const handleHeroChange = (newHero) => {
        setHero(newHero);
    };


    return (
        <MDBContainer>
            <NavigationBar hero={hero} onHeroChange={handleHeroChange} />
            <MDBCol className='d-flex justify-content-center'>
                {hero === 1 ? <SearchByAirport /> : hero === 2 ? <SearchByFlight /> : <AirportLists />}
            </MDBCol>
            <div>
                <Footer />
            </div>
        </MDBContainer>
    )
}

export default ResultPageByAirport