import React, {useState, useContext, useEffect} from 'react';

import AlertContext from "../context/alert/AlertContext";
import AuthContext from "../context/auth/AuthContext";

const Register = props => {

    const [user, setUser] = useState({
                                         name: "",
                                         email: "",
                                         password: "",
                                         password2: ""
                                     });
    const {name, email, password, password2} = user;

    const alertContext = useContext(AlertContext);
    const authContext = useContext(AuthContext);

    const {setAlert} = alertContext;
    const {register, error, isAuthenticated} = authContext;
    useEffect(() => {
        if (isAuthenticated) {
            props.history.push("/");
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated, props.history]); // Dependency _> when the error isAuthenticated or props.history is changed

    const onChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    };

    const onSubmit = e => {
        e.preventDefault();

        if (password !== password2) {
            setAlert("Password do not match", "danger")
        } else {
            register({
                         name,
                         username:email,
                         password
                     });
        }
    };

    return (
      <div className="form-container">
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-2 col-form-label">Name</label>
            <div className="col-sm-10">
              <input className="form-control" id type="name" name="name" value={name} autoComplete="name"
                     required onChange={onChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="email" className="col-sm-2 col-form-label">Email</label>
            <div className="col-sm-10">
              <input className="form-control" id type="email" name="email" value={email} autoComplete="email"
                     required onChange={onChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password" className="col-sm-2 col-form-label">Password</label>
            <div className="col-sm-10">
              <input className="form-control" id type="password" name="password" value={password} autoComplete="password"
                     required onChange={onChange}/>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="password2" className="col-sm-2 col-form-label">Confirm Password</label>
            <div className="col-sm-10">
              <input className="form-control" id type="password" name="password2" value={password2} autoComplete="password"
                     required onChange={onChange}/>
            </div>
          </div>
          <input type="submit" value="Register" className="btn btn-primary btn-block"/>
        </form>
    </div>
    );
};

export default Register;
