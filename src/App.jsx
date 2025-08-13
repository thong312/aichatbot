import { Route, Routes } from 'react-router-dom';
import MainLayout from './layout/mainlayout';
import Chat from './pages/chat';

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Chat />} />
      </Route>
    </Routes>
  );
}

export default App;
