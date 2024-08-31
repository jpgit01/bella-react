import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import { useEffect, useState } from 'react';

function Destacado() {
  const [vestidosDestacados, setVestidosDestacados] = useState([]);

  useEffect(() => {
    fetch('/Colecciones.json') // Asegúrate de que la ruta sea correcta
      .then(response => response.json())
      .then(data => {
        // Filtra todos los vestidos destacados
        const destacados = data.colecciones.flatMap(co => 
          co.vestidos.filter(vestido => vestido.destacado)
        );
        setVestidosDestacados(destacados);
      })
      .catch(error => console.error('Error al cargar las colecciones:', error));
  }, []);

  const handleLikeToggle = (id) => {
    setVestidosDestacados(prevVestidos =>
      prevVestidos.map(vestido =>
        vestido.id === id
          ? { ...vestido, meGusta: !vestido.meGusta }
          : vestido
      )
    );
  };

  return (
    <div>
      <h1>Vestidos Destacados</h1>
      <div>
        {vestidosDestacados.map(vestido => (
          <div key={vestido.id} className='col-md-3'>
            <Card>
              <Card.Img
                variant="top"
                src={vestido.imagen}
                alt={vestido.nombre}
                className="img-fluid"
                style={{
                  cursor: 'pointer',
                  objectFit: 'cover',
                  width: '100%',
                  height: '600px',
                  display: 'block',
                }}
              />
              <Card.Body>
                <Card.Title>{vestido.nombre}</Card.Title>
                <Card.Text>{vestido.descripcion}</Card.Text>
                <Card.Text><p>Precio: ${vestido.precio}</p></Card.Text>
                <Card.Text><p>Estilos: {vestido.estilos.join(', ')}</p></Card.Text>
                <Card.Text><p>Colores: {vestido.colores.join(', ')}</p></Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Destacado;

