import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { Heart, HeartFill } from 'react-bootstrap-icons';

function Colecciones() {
  const [colecciones, setColecciones] = useState([]);
  const [error, setError] = useState(null);
  const [selectedColeccion, setSelectedColeccion] = useState(null);
  const [selectedVestido, setSelectedVestido] = useState(null);
  const navigate = useNavigate(); // Inicializa useNavigate

  useEffect(() => {
    fetch('/Colecciones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setColecciones(data.colecciones || []);
      })
      .catch(error => {
        console.error('Error al cargar las colecciones:', error);
        setError(error.message);
      });
  }, []);

  const handleColeccionClick = (coleccion) => {
    navigate(`/coleccion/${coleccion.nombre}`); // Cambia la ruta al nombre de la colección
    setSelectedColeccion(coleccion);
    setSelectedVestido(null);
  };

  const handleVestidoClick = (vestido) => {
    navigate(`/coleccion/${selectedColeccion.nombre}/vestido/${vestido.id}`); // Cambia la ruta al nombre de la colección y el id del vestido
    setSelectedVestido(vestido);
  };

  const handleBackClick = () => {
    setSelectedVestido(null);
  };

  const handleBackToColeccionesClick = () => {
    navigate('/'); // Vuelve a la lista de colecciones
    setSelectedColeccion(null);
    setSelectedVestido(null);
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (selectedVestido) {
    return (
      <Container>
        <Button variant="secondary" onClick={handleBackClick} className="mb-3 mt-3">
          ← Volver a Vestidos
        </Button>
        <Modal show={true} onHide={handleBackClick} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>{selectedVestido.nombre}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={selectedVestido.imagen} alt={selectedVestido.nombre} className="img-fluid" />
            <p>{selectedVestido.descripcion}</p>
            <p>Precio: ${selectedVestido.precio}</p>
            <p>Estilos: {selectedVestido.estilos ? selectedVestido.estilos.join(', ') : 'N/A'}</p>
            <p>Colores: {selectedVestido.colores ? selectedVestido.colores.join(', ') : 'N/A'}</p>
            <Button
              variant="link"
              onClick={() => handleLikeToggle(selectedColeccion?.id, selectedVestido.id)}
              className="p-0"
            >
              {selectedVestido.meGusta ? (
                <HeartFill size={24} color="red" />
              ) : (
                <Heart size={24} color="gray" />
              )}
            </Button>
          </Modal.Body>
        </Modal>
        <h1>{selectedColeccion?.nombre}</h1>
        <p>{selectedColeccion?.descripcion}</p>
        <h3>Vestidos:</h3>
        <Row>
          {selectedColeccion?.vestidos?.map(vestido => (
            <Col xs={12} md={6} lg={4} key={vestido.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={vestido.imagen}
                  alt={vestido.nombre}
                  onClick={() => handleVestidoClick(vestido)}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '200px',
                    display: 'block',
                  }}
                />
                <Card.Body>
                  <Card.Title>{vestido.nombre}</Card.Title>
                  <Card.Text>{vestido.descripcion}</Card.Text>
                  <Card.Text>Precio: ${vestido.precio}</Card.Text>
                  <Card.Text>Estilos: {vestido.estilos ? vestido.estilos.join(', ') : 'N/A'}</Card.Text>
                  <Card.Text>Colores: {vestido.colores ? vestido.colores.join(', ') : 'N/A'}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  if (selectedColeccion) {
    return (
      <Container>
        <Button variant="secondary" onClick={handleBackToColeccionesClick} className="mb-3 mt-5">
          ← Volver a Colecciones
        </Button>
        <h1>{selectedColeccion.nombre}</h1>
        <p>{selectedColeccion.descripcion}</p>
        <h3>Vestidos:</h3>
        <Row>
          {selectedColeccion.vestidos.map(vestido => (
            <Col xs={12} md={6} lg={4} key={vestido.id} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={vestido.imagen}
                  alt={vestido.nombre}
                  onClick={() => handleVestidoClick(vestido)}
                  style={{
                    objectFit: 'cover',
                    width: '100%',
                    height: '200px',
                    display: 'block',
                  }}
                />
                <Card.Body>
                  <Card.Title>{vestido.nombre}</Card.Title>
                  <Card.Text>{vestido.descripcion}</Card.Text>
                  <Card.Text>Precio: ${vestido.precio}</Card.Text>
                  <Card.Text>Estilos: {vestido.estilos ? vestido.estilos.join(', ') : 'N/A'}</Card.Text>
                  <Card.Text>Colores: {vestido.colores ? vestido.colores.join(', ') : 'N/A'}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <h1>Colecciones y Vestidos</h1>
      <Row>
        {colecciones.map(coleccion => (
          <Col xs={12} md={6} lg={4} key={coleccion.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={coleccion.foto}
                alt={coleccion.nombre}
                className="img-fluid"
                onClick={() => handleColeccionClick(coleccion)}
                style={{ cursor: 'pointer' }}
              />
              <Card.Body>
                <Card.Title>{coleccion.nombre}</Card.Title>
                <Card.Text>{coleccion.descripcion}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Colecciones;