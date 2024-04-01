import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit'
import React, { useState } from 'react'
import NavigationBar from '../../components/NavigationBar/NavigationBar';
import Footer from '../../components/Footer/Footer';
import SearchByAirport from '../../components/SearchByAirport/SearchByAirport';
import SearchByFlight from '../../components/SearchByFlight/SearchByFlight';
import ResultComponents from '../../components/resultComponent/ResultComponent';

function ResultPageAll() {

    const [hero, setHero] = useState(null);

    const handleHeroChange = (newHero) => {
        setHero(newHero);
    };

    return (

        <MDBContainer>
            <NavigationBar hero={hero} onHeroChange={handleHeroChange} />
            <MDBRow>
                <MDBCol className='d-flex justify-content-center'>
                    <ResultComponents />
                </MDBCol>
            </MDBRow>
            <div>
                <Footer />
            </div>
        </MDBContainer>
    )
}

export default ResultPageAll