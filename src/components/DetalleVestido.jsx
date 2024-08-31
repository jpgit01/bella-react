import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function DetalleVestido() {
  const { nombre, id } = useParams();
  const [coleccion, setColeccion] = useState(null);
  const [vestido, setVestido] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Hook para navegación

  useEffect(() => {
    fetch('/Colecciones.json')
      .then(response => response.json())
      .then(data => {
        const coleccion = data.colecciones.find(c => c.nombre === nombre);
        if (coleccion) {
          setColeccion(coleccion);
          const vestido = coleccion.vestidos.find(v => v.id === id);
          if (vestido) {
            setVestido(vestido);
          } else {
            setError('Vestido no encontrado');
          }
        } else {
          setError('Colección no encontrada');
        }
      })
      .catch(error => {
        console.error('Error al cargar el vestido:', error);
        setError('Error al cargar el vestido');
      });
  }, [nombre, id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!vestido || !coleccion) {
    return <div>Cargando...</div>;
  }

  return (
    <Container>
      <Button
        variant="secondary"
        onClick={() => navigate(`/coleccion/${coleccion.nombre}`)} // Navega a la colección
        className="mb-3 mt-3"
      >
        ← Volver a Colección {coleccion.nombre}
      </Button>
      <h1>{vestido.nombre}</h1>
      <img src={vestido.imagen} alt={vestido.nombre} className="img-fluid" />
      <p>{vestido.descripcion}</p>
      <p>Precio: ${vestido.precio}</p>
      <p>Estilos: {vestido.estilos ? vestido.estilos.join(', ') : 'N/A'}</p>
      <p>Colores: {vestido.colores ? vestido.colores.join(', ') : 'N/A'}</p>
    </Container>
  );
}

export default DetalleVestido;
