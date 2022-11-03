
import React,{useState} from 'react'
import'./Header.css'
function Header() {
    const [options, setOptions] = useState({adult: 1,children: 0,room: 1,tent: 0,});
        const handleOption = (name, operation) => {
        setOptions((prev) => {
        return {
            ...prev,
            [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
        });
    };
    return (
        <div className='header'>
            <div className="hsearch">
                <br/>
                <span className="check">
                    <label className='Cblabel font-black text-xl text-blue-900'>Tick the box for new booking:</label>
                    <input type="checkbox" id="ck" className='Cbinput mx-2' defaultChecked="false" ></input>
                </span><br /><br />
                <span className="Name">
                    <label className='Nmlabel font-bold'>Name:</label>
                    <input  type="text"  className='Nminput mx-2'></input>
                </span> &nbsp;&nbsp;&nbsp;&nbsp;
                <span className="Phone">
                    <label className='Pnlabel font-bold'>Phone:</label>
                    <input type="tel" className='Pinput mx-2' placeholder="888 888 8888" pattern="[0-9]{3} [0-9]{3} [0-9]{4}" maxlength="12"  title="Ten digits code" required/>
                </span> &nbsp;&nbsp;&nbsp;&nbsp; 
                <span className="Refer">
                    <label className='Nmlabel font-bold'>Reference:</label>
                    <input type="text" className='Rfinput mx-2'></input>
                </span><br />
                <div className="optionText inline-block p-3">
                    <label className='Nmlabel font-bold'>Adult:</label>
                    <button disabled={options.adult <= 1} 
                        className="cm rounded-circle bg-white mx-2 px-2"onClick={() => handleOption("adult", "d")}> -
                    </button>
                    <span className="cp rounded-circle p-0 m-0">{options.adult} </span>
                    <button
                    className="cp rounded-circle bg-white mx-2 px-2" onClick={() => handleOption("adult", "i")}>+
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Nmlabel font-bold'>Children:</label>
                    <button disabled={options.children <= 0} 
                        className="cm rounded-circle bg-white mx-2 px-2"onClick={() => handleOption("children", "d")}> -
                    </button>
                    <span className="cp rounded-circle p-0 m-0">{options.children} </span>
                    <button
                    className="cp rounded-circle bg-white mx-2 px-2" onClick={() => handleOption("children", "i")}>+
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Nmlabel font-bold'>Room:</label>
                    <button disabled={options.room <= 0} 
                        className="cm rounded-circle bg-white mx-2 px-2"onClick={() => handleOption("room", "d")}> -
                    </button>
                    <span className="cp rounded-circle p-0 m-0">{options.room} </span>
                    <button
                    className="cp rounded-circle bg-white mx-2 px-2" onClick={() => handleOption("room", "i")}>+
                    </button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Nmlabel font-bold'>Tent:</label>
                    <button disabled={options.tent <= 0} 
                        className="cm rounded-circle bg-white mx-2 px-2"onClick={() => handleOption("tent", "d")}> -
                    </button>
                    <span className="cp rounded-circle p-0 m-0">{options.tent} </span>
                    <button
                    className="cp rounded-circle bg-white mx-2 px-2" onClick={() => handleOption("tent", "i")}>+
                    </button><br />
                </div>
                <br />
                <span className="check">
                    <label className='Cblabel '>Dormitory:</label>
                    <input type="checkbox" className='Cbinput mx-2'></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Cblabel '>Trekking:</label>
                    <input type="checkbox" className='Cbinput mx-2'></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Cblabel '>Barbeque:</label>
                    <input type="checkbox" className='Cbinput mx-2'></input>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <label className='Cblabel '>Food:</label>
                    <input type="checkbox" defaultChecked="true" className='Cbinput mx-2'></input>
                </span><br />
                <div className='Date p-2'>
                    <span className="Sdate">
                        <label className='dtlabel font-bold'>Checkin:</label>
                        <input type="date" className='dtinput bg-transparent px-2'></input>
                    </span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="Edate">
                        <label className='dtlabel font-bold'>Checkout:</label>
                        <input type="date" className='dtinput bg-transparent px-2'></input>
                    </span>
                </div>
            </div>
            <br/>
            <button className="navButton drop-shadow-sm" >Submit</button>
        </div>
    )
}

export default Header