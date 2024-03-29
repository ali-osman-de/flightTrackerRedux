import { MDBCol, MDBContainer } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import NavigationBar from '../../components/NavigationBar/NavigationBar'
import SearchByAirport from '../../components/SearchByAirport/SearchByAirport';
import SearchByFlight from '../../components/SearchByFlight/SearchByFlight';

function ResultPageByAirline() {

    const [hero, setHero] = useState(null);

    const handleHeroChange = (newHero) => {
        setHero(newHero);
    };



    return (
        <>
            <MDBContainer>
                <NavigationBar hero={hero} onHeroChange={handleHeroChange} />
                <MDBCol className='d-flex justify-content-center'>
                    {hero === 1 ? <SearchByAirport /> : hero === 2 ? <SearchByFlight /> : <>hello</>}
                </MDBCol>
                <div>
                    <Footer />
                </div>
            </MDBContainer>

        </>
    )
}

export default ResultPageByAirline