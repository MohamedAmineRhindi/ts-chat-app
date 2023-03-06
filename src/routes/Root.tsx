import React from 'react'
import './root.css'
import { Link } from 'react-router-dom'
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth'
import { auth } from '../firebaseConfig'

export async function loader() {
  const user = await auth.currentUser
  return user ? user : null
}

export const Root = () => {
  return (
    <div className="container">
      <div className="home-container">
        <h1>Dandy's chat app</h1>
        <Link to="/login" className="home-container--link">
          Log In
        </Link>
        <Link to="/register" className="home-container--link">
          Register
        </Link>
        <Link to="/user" className="home-container--link">
          User
        </Link>
        <a
          href="https://github.com/MohamedAmineRhindi/dandy-chat-app"
          className="home-container--a"
          target="_blank"
          rel="noreferrer"
        >
          github repository
        </a>
      </div>
    </div>
  )
}
