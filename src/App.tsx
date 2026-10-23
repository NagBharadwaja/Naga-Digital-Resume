import './App.css'
import { ResumePage } from './components/ResumePage'
import { useResume } from './hooks/useResume'

function App() {
  const { resume, error } = useResume();

  if (error) {
    return <main role="alert">{error}</main>
  }

  if (!resume) {
    return <main role="status" aria-live="polite">Loading resume...</main>
  }

  return <ResumePage resume={resume} />
}

export default App
