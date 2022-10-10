import React, {useState} from "react";
import { Link,useLocation } from "react-router-dom";
const Home = () => {
    const  data = {
        name: "Gayatri Gundavarapu",
        description : "This is Gayatri Gundavarapu from SE class. This is my second software engineering assigment."
    }
    const location = useLocation()
    if(location.state){
        if(location.state.data.data.name && location.state.data.data.description)
        {
            data.name = location.state.data.data.name
            data.description = location.state.data.data.description
        }
    }
   
    return (
        <div>
            <table>
                <tr>
                    <td>
                    <img src="https://picsum.photos/seed/picsum/200/300"/>
                    </td>
                    <td>
                    <label  style={{float: "left",fontSize: "40px", fontWeight: "bold"}}>{data.name}</label>
                    <label  style={{float: "left"}}>{data.description}</label>
                    </td>
                </tr>
            </table>
            <Link to="/updateinfo" state={{ data: {data} }} className="btn btn-primary">Edit Infomation</Link>
        </div>
    );
};
export default Home