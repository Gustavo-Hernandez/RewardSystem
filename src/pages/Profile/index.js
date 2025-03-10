import React, { useContext, useEffect } from 'react';
import QRCode from 'react-qr-code';
import { Button, Col, Row } from 'reactstrap';
import NavigationBar from '../../components/NavigationBar';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Context as AuthContext } from '../../context/AuthContext';
import { Context as UserContext } from '../../context/UserDataContext';

const Profile = ({ history }) => {
  const { signout } = useContext(AuthContext);

  const {
    query,
    state: { points, uid, email },
  } = useContext(UserContext);

  useEffect(() => {
    query();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <NavigationBar />
      <button
        onClick={history.goBack}
        style={{
          marginLeft: '50px',
          marginTop: '20px',
          display: 'flex',
          alignItems: 'center',
          color: 'inherit',
          textDecoration: 'none',
          background: 'none',
          border: 'none',
        }}
      >
        <FontAwesomeIcon size='3x' icon={faChevronLeft} />
        <h3 style={{ marginLeft: '15px' }}>Volver</h3>
      </button>
      <Row className='mt-5'>
        <Col sm={4} md={2} style={{ display: 'flex' }}>
          <div
            style={{
              border: '12px solid #1F53A1',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '280px',
              height: '280px',
              marginLeft: '25px',
            }}
          >
            <QRCode size={170} value={uid} />
          </div>
        </Col>
        <Col
          sm={6}
          md={9}
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginTop: '25px',
            marginLeft: '25px',
          }}
        >
          <Row>
            <h4>Correo: {email}</h4>
            <h4>Mis Puntos: {points}</h4>
          </Row>
          <Row>
            <h4>Última Visita Registrada: {'2/12/2020'}</h4>
          </Row>
          <Row>
            <Button
              onClick={signout}
              style={{ width: '150px', marginLeft: '12px', marginTop: '20px' }}
              className='btn btn-danger'
            >
              Cerrar Sesión
            </Button>
          </Row>
        </Col>
      </Row>
    </div>
  );
};
export default Profile;
