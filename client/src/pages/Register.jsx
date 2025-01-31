import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisterAndLoginPage'
import { FormRow, Logo } from '../components'

const Register = () => {
  return (
    <>
      <Wrapper>
        <form className="form">
          <Logo />
          <h4>Register</h4>

          <FormRow type="text" name="name" defaultValue="jack" />

          <FormRow
            type="text"
            lastName="lastName"
            labelText="last name"
            defaultValue="sparrow"
          />
          <FormRow
            type="text"
            name="location"
            labelText="Location"
            defaultValue="USA"
          />
          <FormRow
            type="email"
            name="email"
            labelText="Email"
            defaultValue="test@email.com"
          />
          <FormRow
            type="password"
            name="password"
            labelText="Password"
            defaultValue="secret"
          />

          <button type="submit" className="btn btn-block">
            Submit
          </button>
        </form>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </Wrapper>
    </>
  )
}
export default Register
