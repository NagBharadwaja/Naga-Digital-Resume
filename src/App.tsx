import './App.css'
import { resume } from './data/resume'
import { ResumePage } from './components/ResumePage'

function App() {
  return <ResumePage resume={resume} />
}

export default App
