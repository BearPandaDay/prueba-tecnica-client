export function Home() {
  return (
    <>
      <h3>Home</h3>
      <button onClick={()=> window.location.href = "/signup"}>SignUp</button>
      <button onClick={()=> window.location.href = "/signin"}>SignIn</button>
    </>
  )
}
