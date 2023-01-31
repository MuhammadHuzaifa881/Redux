import React from 'react'
import {useDispatch } from 'react-redux'
import {  increment } from '../Redux/counterSlice'
import HomeScreen from './HomeScreen'
export default function Home2() {
    
    const dispatch = useDispatch()
  return (
    <>
    <button className='Button-Adj' aria-label="Increment value"
          onClick={() => dispatch(increment())}>Increment</button>
          
    </>
  )
}
