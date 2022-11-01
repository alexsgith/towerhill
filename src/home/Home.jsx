import React from "react";
import Header from "./header/Header";
import Navbar from "./navbar/Navbar";
function Home() {
   
    return (
        <div className='home block' >
            <Navbar /><br />
            <Header />
        </div>
    );
}
export default Home;