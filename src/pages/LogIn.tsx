import './auth.css'
import { Link } from 'react-router-dom'
import { auth } from '../firebaseConfig'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

const action = () => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      // ...
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
}

const LogIn = () => {
  return (
    <div className="auth-container">
      <h2 className="auth-container--title">Login to your account</h2>
      <form method="get" className="auth-container--form">
        <label htmlFor="loginEmail">Email</label>
        <input type="text" id="loginEmail" name="loginEmail" />
        <label htmlFor="loginPassword">Password</label>
        <input type="password" id="loginPassword" name="loginPassword" />
        <button>Log In</button>
      </form>
      <span>
        Don't have an account yet ?{' '}
        <Link className="auth-container--link" to="/register">
          Sign up
        </Link>{' '}
        instead.
      </span>
    </div>
  )
}

export default LogIn
