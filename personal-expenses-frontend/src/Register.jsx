import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:8080/"
}) 

function Register() {

    api.post("/auth/register", {
      "login":"test",
      "password":"test",
      "role":"ADMIN",
      "email":"email@gmail.com"
    }).then((response) => {
      console.log((response))
    })

  return (
    <>
      <div>
        {/* <form>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Password" />
          <input type="text" placeholder="Admin or User" />
          <input type="email" placeholder="Email" />
          <input type="button" value="Enviar" />
        </form> */}
      </div>
    </>
  )
}

export default Register
