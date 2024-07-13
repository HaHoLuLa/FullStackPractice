import { Routes, Route } from 'react-router-dom'
import Counter from './Counter.tsx'

function App() {
    return (
        <Routes>
            <Route path="/counter" element={<Counter />} />
        </Routes>
    )
}

export default App
