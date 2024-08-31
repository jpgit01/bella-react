import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function DetalleColeccion() {
  const { nombre } = useParams();
  const [coleccion, setColeccion] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/Colecciones.json')
      .then(response => response.json())
      .then(data => {
        const coleccion = data.colecciones.find(c => c.nombre === nombre);
        if (coleccion) {
          setColeccion(coleccion);
        } else {
          setError('Colección no encontrada');
        }
      })
      .catch(error => {
        console.error('Error al cargar la colección:', error);
        setError('Error al cargar la colección');
      });
  }, [nombre]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coleccion) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <h1>{coleccion.nombre}</h1>
      <p>{coleccion.descripcion}</p>
      <h3>Vestidos:</h3>
      <Row>
        {coleccion.vestidos.map(vestido => (
          <Col xs={12} md={6} lg={4} key={vestido.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={vestido.imagen}
                alt={vestido.nombre}
                style={{ objectFit: 'cover', width: '100%', height: '200px', display: 'block' }}
              />
              <Card.Body>
                <Card.Title>{vestido.nombre}</Card.Title>
                <Card.Text>{vestido.descripcion}</Card.Text>
                <Card.Text>Precio: ${vestido.precio}</Card.Text>
                <Card.Text>Estilos: {vestido.estilos ? vestido.estilos.join(', ') : 'N/A'}</Card.Text>
                <Card.Text>Colores: {vestido.colores ? vestido.colores.join(', ') : 'N/A'}</Card.Text>
                <Link to={`/coleccion/${coleccion.nombre}/vestido/${vestido.id}`}>Ver detalles del vestido</Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default DetalleColeccion;
