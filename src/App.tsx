import './App.css';
import { BrowserRouter } from 'react-router';
import { WebRouter } from './router/WebRouter';
import { AuthProvider } from "./contexts";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <WebRouter />
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App;
