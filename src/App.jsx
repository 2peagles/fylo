import { Hero } from './components/Hero'
import "./styles/App.scss"
import { Footer } from './components/Footer'
import { Grid } from './components/Grid'
import { Productive } from './components/Productive'
import { Testimonials } from './components/Testimonials'
import { Form } from './components/Form'

function App() {

  return (
    <div className="App">
      <Hero />
      <Grid />
      <Productive />
      <Testimonials />
      <Form />
      <Footer />
    </div>
  )
}

export default App
