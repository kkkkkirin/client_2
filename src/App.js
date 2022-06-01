import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter } from 'react-router-dom';
import { Context } from '.';
import './App.css';
import AppRouter from './components/AppRouter'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { check } from './http/userApi';

const App = observer(() => {
  const { user } = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    check().then(data => {
      user.setUser(user)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <Container className='d-flex justify-content-between mt-3 mb-3'>
        <AppRouter />
      </Container>
      <Footer />
    </BrowserRouter>
  );
})

export default App;
