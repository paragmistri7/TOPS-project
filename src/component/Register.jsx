import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import CustomHooks02 from "./10 customhook 02 ";
import axios from 'axios';
import './login.css'
import Header01 from "./03header";
const Register = () => {

  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate()
    
  const { handleInputChange, inps, error } = CustomHooks02({ username: "" ,password : "" }, { usererror: " " ,passworderror : "" })
  
    const loginclick = (event) => {
        event.preventDefault() 

        const requestoption =  {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ username: inps.username, password : inps.password ,body : "" })
        }
        fetch('https://jsonplaceholder.typicode.com/posts' ,requestoption)
        .then((response) => response.json())
            .then((result) => {
              console.log(result);
              
              if (result.id == 101) {
                navigate("/login02")
              } else {
                navigate("/")
              }
            })
      setCookie("name", "parag")
      
      // axios.post('https://jsonplaceholder.typicode.com/posts')
      //     .then(function (result) {
      //       console.log(result);
      //       // console.log(result.data[1].userId);
      //       // console.log(result.Data[0].role_id);
      //       setCookie('loginStatus',true);
      //       setCookie('userid',result.data.Data[0].id);
      //       if (result.data[1].userId == 1) {
      //         navigate("/admin")
      //       } else {
      //         navigate("/")
      //       }
      //     }).catch(function (error) {
      //       console.log(error);
      //     });
    }
    
    return (
      

      <>
        <Header01 />
        
      <div className="login-box">
        <h2>Login</h2>
        <form  >
          <div className="user-box">
            <input type="text" name="username" value={inps.username}  required  onChange={handleInputChange}  />
                        <label>Username</label>
                        {/* {JSON.stringify(inps)}
                        {JSON.stringify(error.usererror)} */}
                    <span> {error.usererror}  </span>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={inps.password}  required  onChange={handleInputChange}  />
              <label>Password</label>
              <span> {error.passworderror}  </span>
              
                    </div>
                    <br />
                    <button onClick={loginclick} >Submit</button>
          {/* <a href="#">
            <span></span>
           <span></span>
            <span></span>
            <span></span>
            Submit
          </a> */}
           
        </form>
        </div>
        
    </>
  );
};
export default Register;
