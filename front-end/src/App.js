import EditorDocument from "./EditorDocument";
import {
  BrowserRouter as Router,
  Routes,
  Navigate,
  Route
} from 'react-router-dom'
import {v4 as uuidV4} from 'uuid';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Navigate to={`/documents/${uuidV4()}`} />}></Route>
        <Route path="/documents/:id" element={<EditorDocument />}></Route>
      </Routes>
    </Router>
    );
}

export default App;
