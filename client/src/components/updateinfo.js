import React,{useState} from "react";
import { useLocation,useNavigate } from 'react-router-dom'
const UpdateInfo = (props)  => {
    const location = useLocation()
    const [data, setData] = useState(location.state.data.data)
    console.log(data);
    const navigate = useNavigate();
    const setNameFromUser = (e) => {
        data.name = e.target.value;
    }
    const setDescriptionFromUser = (e) => {
        console.log(e.target.value);
        data.description = e.target.value;
    }
    const routeChange = () => { 
        console.log(data);
        navigate('/',{state:{data:{data}}});
      }
    return (
        <div>
  <label>
    Full Name:
    <input type="text" name="name" defaultValue={data.name}  onChange = {setNameFromUser} />
  </label><br/>
  <label> <br/><br/>
    Description:
    <textarea name="description"  defaultValue={ data.description } onChange={setDescriptionFromUser}/>
  </label><br/><br/>
  <input type="submit" value="Save"  onClick={routeChange} className="btn btn-primary" />
  </div>
    );
};
export default UpdateInfo