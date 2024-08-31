import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Facebook } from 'react-bootstrap-icons';
import { Instagram } from 'react-bootstrap-icons';
import { TwitterX } from 'react-bootstrap-icons';
import { Whatsapp } from 'react-bootstrap-icons';

const Footer = () => {


    return (
        <>
            <footer className="bg-dark text-white ">
                <Container fluid className='pt-5 pb-5'>
                    <Row>
                        <Col md={8}>
                            <Whatsapp size={80} className='p-3' />
                           <p>+ 56 811 1118 888</p> 
                        </Col>
                        <Col md={4} className='text-center'>
                            <Facebook size={80} className='p-3' />
                            <Instagram size={80} className='p-3' />
                            <TwitterX size={80} className='p-3' />
                        </Col>
                    </Row>

                </Container>
            </footer>
        </>
    );
};
export default Footer;