import { Button, Checkbox, FormControlLabel, FormGroup, FormLabel, Radio, RadioGroup, TextareaAutosize, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import { logout } from '../redux/auth/action'
// import SubTask from './SubTask'
import "./summary.css"
import { addtodo,incofficial,incother,incpersonal,togglesubtodo,cleartodo } from '../redux/todo/action'

const Summary = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()




 
  const profileData = useSelector(state => state?.auth.profile)
  const token = useSelector(state => state?.auth.token)

  useEffect(() => {
    (!profileData) ? <Navigate to='/login' /> : console.log(profileData)
    //  handleFetch();
  }, [])

//   console.log(title,state,tag ,desc)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(cleartodo())
    navigate('/signup')
  }
 
//   console.log(tododata)


    const all=useSelector(state =>state?.todo.all)
    const personal=useSelector(state =>state?.todo.personal)
    const official=useSelector(state =>state?.todo.official)
    const other=useSelector(state =>state?.todo.other)
    const done=useSelector(state =>state?.todo.done)
    const todo_count=useSelector(state =>state?.todo.todo_count)
    const progress=useSelector(state =>state?.todo.progress)

  return (
    (!token) ? <Navigate to='/login' /> : <div className='addtodocontainer'>
     
<div >


</div>
    </div>
    
  )
}

export default Summary

