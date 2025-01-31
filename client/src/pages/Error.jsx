import { Link, useRouteError } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ErrorPage'
import img from '../assets/images/not-found.svg'

const Error = () => {
  const error = useRouteError()
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <h3>Page not found</h3>
          <img src={img} alt="not found" />
          <h3> Heavens to Betsy! Page Not found!</h3>
          <p>Sorry. We can't find that page you're looking for</p>
          <Link to="/dashboard">Back to Home</Link>
        </div>
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <div>
        <h3> Oops! Something went wrong</h3>
      </div>
    </Wrapper>
  )
}
export default Error
