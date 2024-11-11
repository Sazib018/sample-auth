import { useState } from 'react'
import './App.css'
import { getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'
import app from './components/Firebase/firebase.utils'




function App() {
  const [stateUser, setStateUser] = useState(null)

  const auth = getAuth(app)
  const googleProvider = new GoogleAuthProvider();
  const gitHubProvider = new GithubAuthProvider();


/*   google sign in button */
  const handelGoogleButton = () => {
    signInWithPopup(auth, googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setStateUser(user)
    })
    .catch(err => console.log(err)
    )
}


/*   google sign in button */
  const handelGoogleSignOut =() =>{
    signOut(auth)
    .then(res => {
      console.log(res);
      setStateUser(null)
    })
    .catch(err => console.log(err)
    )
  }



  /*   git hub  log in button */
  const handelGitHubLogIn =() =>{
    signInWithPopup(auth, gitHubProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
      setStateUser(user)
    })
    .catch(err => console.log(err)
    )
  }


  return (
    <>

      <h1>Sample Auth</h1>

      <button onClick={handelGoogleButton}>Google signIn</button>
      <button onClick={handelGoogleSignOut}>Google SignOut</button>

      <button onClick={handelGitHubLogIn}>GitHub LogIn</button>

      <button>Log In</button>

      {
        stateUser &&
        <>
          <h1>Name:{stateUser.displayName}</h1>
          <h2>Email:{stateUser.email}</h2>
          <img src={stateUser.photoURL} alt="" />
        </>
      }

    </>
  )
}

export default App
