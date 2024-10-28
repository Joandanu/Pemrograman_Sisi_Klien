import { useState } from 'react'
import './App.css'

const[nama, setNama]= useState('');
const[nim, setNim]= useState('');

function Submit(event){
  setNama(event.target.value)
  setNim(event.target.value)
}

function App(){
  return <form action="">
    <input name="nama" value={nama} />
    <input type="text" value={nim} />
  </form>
}

export default App