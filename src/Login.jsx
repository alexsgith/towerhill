import './login.css'
function Login() {
    return (
        <div >
            <img src='./images/logo.png'></img><br></br>
            <h2> Welcome to towerhill</h2><br />
            <h3>please authorize yourself</h3><br />
            <label for="psw">Password</label>
            <input type="password" id="psw" name="psw" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required></input><br />
            <input type="submit" value="Submit"></input>
        </div> 
    );
}
export default Login;