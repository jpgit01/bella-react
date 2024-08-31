import MyCarousel from "../components/Carousel";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { AwardFill } from 'react-bootstrap-icons'
import { BagHeart } from 'react-bootstrap-icons'
import { Bell } from 'react-bootstrap-icons'
import { Box2Fill } from 'react-bootstrap-icons'

import Destacado from "../components/Destacado";

const HomePage = () => {

    return (
        <>
            <MyCarousel />
            <section>
                <Container>
                    <Row className="text-center mt-5 mb-5">
                        <Col>
                            <AwardFill size={80} className='p-3' />
                            <p>Elegancia Única: Vestidos sofisticados y de calidad. Siéntete como una reina.</p>
                        </Col>
                        <Col>
                            <BagHeart size={80} className='p-3' />
                            <p>Atención Personalizada: Asesoría para encontrar tu estilo. Tu satisfacción es clave.</p>
                        </Col>
                        <Col>
                            <Bell size={80} className='p-3' />
                            <p>Avisos Exclusivos: Notificaciones sobre ofertas y eventos. No te pierdas nuestras sorpresas.</p>
                        </Col>
                        <Col>
                            <Box2Fill size={80} className='p-3' />
                            <p>Entrega Puntual: Llegada a tiempo y bien empaquetada. Tu tranquilidad es nuestra meta.</p>
                        </Col>
                    </Row>
                </Container>


            </section>
            <section>
                <Container fluid className="bg-dark text-white ">
                    <Row className="pt-4 pb-3">
                        <Col className="mt-5 text-center mb-5"><h1>Casa de Novias Bella Isabella</h1></Col>
                        <Col>
                            <p>Donde cada vestido de novia es una obra de arte diseñada para realzar tu belleza y hacer de tu día especial un momento inolvidable. En nuestra tienda, combinamos elegancia y sofisticación para ofrecerte una experiencia de compra única, con atención personalizada y diseños exclusivos que reflejan tu estilo único. Permítenos ser parte de tu historia y ayudarte a encontrar el vestido perfecto que hará que tu boda sea verdaderamente mágica. ¡En Bella Isabella, tu sueño se convierte en realidad!</p>
                        </Col>
                    </Row>
                </Container>
                <Container className="mb-5">
                    <Row>
                        <h3 className="mt-5 text-center">Productos destacados</h3>
                    </Row>
                    <Row>
                        <Destacado />
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default HomePage;
