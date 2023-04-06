import Header01 from "./03header";
import CustomHooks from "./08 customHook";
import './login.css'
const Login = () => {

  const { handleInputChange, inps, error } = CustomHooks({ username: "" ,password : "" }, { usererror: " " ,passworderror : "" })
  
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
          <a href="#">
            <span></span>
           <span></span>
            <span></span>
            <span></span>
            Submit
          </a>
        </form>
      </div>
    </>
  );
};
export default Login;
