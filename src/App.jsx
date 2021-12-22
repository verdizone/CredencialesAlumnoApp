import { useState, useEffect } from 'react';

import Credenciales from './components/Credenciales';
import Formulario from './components/Formulario';
import Logica from './components/Logica'

import './App.css';

const App = () => {

  const [alumnos, setAlumnos] = useState([])
  const [alumno, setAlumno] = useState({})
  
  useEffect(()=>{
    const obtenerLS = () =>{
      const alumnosLS = JSON.parse( localStorage.getItem('alumnos') ) ?? [];
      setAlumnos(alumnosLS);
    }
    obtenerLS();
  }, [])

  useEffect(()=>{
    // console.log('Componente listo o cambió alumnos');
    localStorage.setItem('alumnos', JSON.stringify(alumnos));
  }, [alumnos])

  const eliminarAlumno = id =>{
    const alumnosActualizados = alumnos.filter(alumno => alumno.id !== id)
    setAlumnos(alumnosActualizados);
  }

  return (
    <div>
      
      <div className="md:flex bg-gray-800 text-white text-3xl p-4">
        <div
          className="md:text-left lg:text-left md:w-1/2 pl-4"
        >
          Credenciales App
        </div>
        <div 
          className="md:text-right lg:text-right text-sm uppercase md:w-1/2 p-4"
        >
          <Logica />
        </div>
      </div>
      
      <div className="container lg:mx-5 md:mx-auto mt-2 md:flex">
        <Formulario 
          alumnos={alumnos}
          setAlumnos={setAlumnos}
          alumno={alumno}
          setAlumno={setAlumno}
        />
        <Credenciales 
          alumnos={alumnos}
          setAlumno={setAlumno}
          eliminarAlumno={eliminarAlumno}

        />
      </div>
    </div>
  )
}

export default App
