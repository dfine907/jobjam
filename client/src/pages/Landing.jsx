
import Wrapper from '../assets/wrappers/LandingPage'
import goodnews from '../assets/images/goodnews.svg'
import main from '../assets/images/main.svg'
import { Logo } from '../components'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
        
      </nav>
      <div className="container page">
        <div className="info">

          <h1>Job <span>tracking</span> App </h1>
          <p>
          Introducing <span style={{ color: '#2bb1bc' }}><strong>JobJam</strong> </span>, the ultimate app for organizing your job search! Track monthly applications, monitor pending responses, and stay on top of interviews with ease. Gain valuable insights through dynamic stats and charts, helping you stay consistent and focused as you work toward your next opportunity!
          </p>
          <Link to="/register" className="btn register-link">Register</Link>
          <Link to="/login" className="btn">Login / Demo User</Link>
        </div>

        <img src={goodnews} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  )
}

export default Landing
