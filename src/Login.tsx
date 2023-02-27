import React from 'react'

const Login = () => {
  const userAgent = navigator.userAgent;
  console.log(userAgent)

  if (userAgent.match(/Mozilla/)) {
    alert(userAgent)
  }

  return (
    <div>Login</div>
  )
}

export default Login
