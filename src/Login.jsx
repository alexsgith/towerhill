import './login.css'
function Login() {
    const passw="1234"
    function getPass()
    {
       if(document.querySelector('input').value === passw)
        {
            window.alert("correct")
        }
        else{ window.alert("Wrong Password")}
    }
    return (
        <div className='name'>
          <h2 className='font-bold text-[#1d3d6a] justify-center'>Welcome to Towerhill</h2>  
          <br />
            <div className= 'box bg-white drop-shadow-lg rounded-lg' >
                <img src='./images/logo.png' alt="logo"></img><br /><br />
                <label for="psw">Password</label><br />
                <input className=' pwd rounded-lg bg-[#61dafb] text-center' type="password" id="psw" name="psw" required></input><br /> 
                <button className='btn w-40 bg-[#61dafb] shadow-lg shadow-[#cbf1fb] hover:shadow-teal-500 ' onClick={getPass}>Submit</button>
            </div> 
        </div>
    );
}
export default Login;