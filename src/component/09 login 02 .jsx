import { useNavigate, Link, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";
import CustomHook from "./10 customhook 02 ";
import axios from "axios";
import "./login.css";
import Header01 from "./03header";
import { useEffect, useState } from "react";

const Login02 = () => {
  const [data, setData] = useState({});
  const [loadingStatus, setLoadingStatus] = useState(false);
  const [cookies, setCookie] = useCookies(["user"]);
  const navigate = useNavigate();

  const { handleInputChange, inps, error } = CustomHook(
    {},
    { usernameError: "", passwordError: "" }
  );
  useEffect(() => {}, []);

  let loginclick = (event) => {
    event.preventDefault();

    // const requestOptions = {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({username: inps.username,password: inps.password}),
    //   // body: JSON.stringify({ username: "parag",password:123 })
    // };
    fetch('https://justjayapi.000webhostapp.com/login?username='+inps.username+"&password="+inps.password)
    // fetch("https://justjayapi.000webhostapp.com/login?username=",requestOptions)
        //  fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
      // fetch("https://localhost/API/login", requestOptions)

      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        console.log(result.Data[0].role_id);
        console.log("result.id", result.id);
        if (result.Code == 1) {
          
          if (result.Data[0].role_id == 1) {
            console.log("inside if");
            navigate("/admin");
          } else {
            console.log("inside else");
            navigate("/");
          }
        } else {
          console.log("Invalid user");
        }
      });
    setCookie("name", "parag");

    

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


    // axios.get(`https://justjayapi.000webhostapp.com/login?username=${username}&password=${password}`)
    // .then(function (response) {
    //   //  handle success
    //    console.log(response);
    //    if (response.data.Code == 1) {
    //       dispatch(loginUsers({"email":email,"password":password}))
    //       console.log("inside success", response.data.Data[0].role_id);
    //       setCookie('userId', response.data.Data[0].id);
    //       setCookie('userName', response.data.Data[0].username);
    //       if (response.data.Data[0].role_id == 1) {
    //          navigate(`/admin`);
    //       } else {
    //          navigate(`/`);
    //       }
    //    } else {
    //       console.log("inside try again");
    //    }
    // })
    // .catch(function (error) {
    //    // handle error
    //    console.log(error);
    // })
    // .then(function () {
    //    // always executed
    // });



    // console.log(props);
  };

  return (
    <>
      <Header01 />

      <div className="login-box">
        <h2>Login</h2>
        <form>
          <div className="user-box">
            <input
              type="text"
              name="username"
              value={inps.username}
              required
              onChange={handleInputChange}
            />
            <label>Username</label>
            {/* {JSON.stringify(inps)}
                        {JSON.stringify(error.usererror)} */}
            <span> {error.usererror} </span>
          </div>
          <div className="user-box">
            <input
              type="password"
              name="password"
              value={inps.password}
              required
              onChange={handleInputChange}
            />
            <label>Password</label>
            <span> {error.passworderror} </span>
          </div>
          <br />
          <button onClick={loginclick}>Submit</button>
          {/* <a href="#">
            <span></span>
           <span></span>
            <span></span>
            <span></span>
            Submit
          </a> */}
          <Link to="/registration">Create new account</Link>
        </form>
      </div>
    </>
  );
};
export default Login02;
