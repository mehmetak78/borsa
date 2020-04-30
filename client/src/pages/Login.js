import React, {useState, useContext, useEffect} from 'react';


import AuthContext from "../context/auth/AuthContext";

const Login = props => {

    const [user, setUser] = useState({
                                         email: "",
                                         password: "",
                                     });
    const {email, password} = user;

    const authContext = useContext(AuthContext);

    const {login, error,  isAuthenticated} = authContext;
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/home");
        }
    // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]); // Dependency _> when the error isAuthenticated or props.history is changed

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();
        login({
                  username:email,
                  password
              });
    };

    return (
      <div className="form-container">
        <h1>Account Login</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input class="form-control" id type="email" name="email" value={email} autoComplete="email" required onChange={onChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input class="form-control" id type="password" name="password" value={password} autoComplete="password" required onChange={onChange}/>
            </div>
          </div>
          <input type="submit" value="Login" className="btn btn-primary btn-block"/>
        </form>
    </div>
    );
};

export default Login;
