import { Form, Link } from 'react-router-dom'
import './auth.css'

const Register = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-container--title">Create an account</h2>
      <Form method="post" className="auth-container--form register">
        <label htmlFor="loginEmail">Email</label>
        <input type="text" id="loginEmail" name="loginEmail" />
        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="loginPassword" />

        <label htmlFor="cPassword">Confirm password</label>
        <input type="password" id="cPassword" name="cPassword" />

        <button>Register</button>
      </Form>
      <span>
        Already have an account ?{' '}
        <Link className="auth-container--link" to="/login">
          Log In
        </Link>
      </span>
    </div>
  )
}

export default Register
