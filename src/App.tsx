
import Alert from './components/ui/Alert/Alert'

function App() {

  return (
    <>
    <div className="container">
      <Alert title='test' alert='success' description='test desc' />
      <Alert title='test' alert='warning' description='test desc' />
      <Alert title='test' alert='info' description='test desc' />
      <Alert title='test' alert='danger' description='test desc' />
    </div>
    </>
  )
}

export default App
