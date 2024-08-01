import React, { useEffect, useContext } from 'react';
import EmData from "./Context";
import "../Component/style.css";
import logo from "../Component/logo.jpg";

const Data = () => {
   const {setEmpData ,CurrentPage}=useContext(EmData);

    useEffect(() => {
        fetch(`https://dummyjson.com/users?page=${CurrentPage}&limit=${10}`)
        .then(response => response.json())
            .then(data => {
                console.log(data);
                if (data && data.users) {
                    setEmpData(prevData => [...prevData, ...data.users]); 
                } else {
                    console.error("Unexpected data format:", data);
                }
            })
            .catch(error => {
                alert(`Server error: ${error}`);
            });
    }, [setEmpData, CurrentPage]);

    return (
        <div className='data'>
            <img src={logo} alt="LoGO"></img>
        </div>
    );
}

export default Data;
