import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import Sidebar from './components/sidebar/Sidebar';
import Topbar from './components/topbar/Topbar'
import Home from './pages/home/Home'
import User from './pages/user/User';
import UserList from './pages/userlist/UserList';

const Container = styled.div`
display: flex;
`;

const App = () => {
  return (
    <div>
      <Topbar />
      <Container>
      <Sidebar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/users' element={<UserList />} />
        <Route path='/user/:Id' element={<User />} />
      </Routes>
      </Container>
      
      
    </div>
  )
}

export default App