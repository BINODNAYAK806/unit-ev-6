import { Button, Checkbox, FormControlLabel } from '@mui/material'
import React from 'react'
import "./Home.css";
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 
'react-router-dom'
import { getProfile, login } from '../redux/auth/action'
import { logout } from '../redux/auth/action'
import Userdetails from './Userdetails';
import  {TodoContext} from "./addtodo"
import { useContext } from "react";
import { addtodo,cleartodo,togglesubtodo,objectid } from '../redux/todo/action'
import { item } from './item';
const Home = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [products, setProducts] = React.useState([]);

 
  React.useEffect(() => {
    fetch(`http://localhost:3002/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);
    









  //  console.log(profileData)
    // const profileData = useSelector(state => state?.auth.profile)

  // React.useEffect(() => {
  //   (!token) ? <Navigate to='/login' /> :
  //   handleFetch()
  // }, [])
  
  const handleLogout = () => {
    dispatch(logout())
    dispatch(cleartodo())
    navigate('/signup')
  }
//   const base_url=process.env.REACT_APP_BASE_URL
  // const handleFetch = () => {
  //   fetch(`https://advtododb.herokuapp.com/tasks`).then((res) => res.json()).then((res) => setData(res))
  // }
  const token = useSelector(state => state?.auth.token)
  const profileData = useSelector(state => state?.auth.profile)
  console.log(profileData)
  const tododataa = useSelector(state => state?.todo.todo)
  const [tododata, setData] = React.useState(tododataa)
  console.log(tododata)
 
  const all=useSelector(state =>state?.todo.all)
  const personal=useSelector(state =>state?.todo.personal)
  const official=useSelector(state =>state?.todo.official)
  const other=useSelector(state =>state?.todo.other)

  // setData(tododata_redux)
  
//   data.forEach((e)=>{
// if(e.tag=="other"){
//     setother(other+1)
// }
// else if(e.tag=="personal"){
//     Setpersonal(personal+1)
// }
// else if(e.tag=="official"){
//     setOfficial(official+1)
// }
//   })
//   console.log(all)

const toggle=(ids,ido)=>{
  let newtodo=tododata.map(e => {
    
     return{...e,subTask:e.subTask.map(el=>{
if(el.id===ids){
  return{...el,status:!el.status}
  // console.log(!el.status)
}
else{
  return el
}
      })
    }
    
    
  })
  console.log(newtodo)
  // dispatch(cleartodo())
  // for(let i=0;i<newtodo.length;i++){
    // }
    // dispatch(addtodo(newtodo))
  setData(newtodo)
   
}
const gotoedit=(id)=>{
  localStorage.setItem("todoid",id)
  dispatch(objectid(id))
  navigate("/edittodo")
}

  return (
    (!token) ? <Navigate to='/login' /> : <div className='container_home'>
      <div className='profile_div'>
      



{products.map((elem)=>{return(<>
<h1>{elem.title}</h1>
<img src={elem.image}/>
<p>{elem.category}</p>
<p>{elem.price}</p>
</>)})}




</div>
</div>
  )
}

export default Home