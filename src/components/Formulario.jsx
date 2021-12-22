import { useState, useEffect } from "react";
import Error from "./Error";

const Formulario = ( {alumnos, setAlumnos, alumno, setAlumno} ) => {

  const [nombre, setNombre] = useState('')
  const [colegio, setColegio] = useState('')
  const [nivel, setNivel] = useState('')
  const [graGru, setGraGru] = useState('')
  const [fechaNac, setFechaNac] = useState('')
  const [imgAlumno, setImgAlumno] = useState('')

  const [error, setError] = useState(false)


  useEffect(()=>{
    if ( Object.keys(alumno).length > 0 ){
      // console.log('Edición activada!');
      setNombre(alumno.nombre);
      setColegio(alumno.colegio);
      setNivel(alumno.nivel);
      setGraGru(alumno.graGru);
      setFechaNac(alumno.fechaNac);
      // setImgAlumno(alumno.imgAlumno);


    }
  },[alumno])

  const generarId = () => {
    const fecha = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2);
    return fecha + random;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e);

    //Validar los campos
    if([nombre, colegio, nivel, graGru, fechaNac, imgAlumno].includes('')){
      setError(true);
      return;
    }
    setError(false);
    setNombre('')
    setColegio('')
    setNivel('')
    setFechaNac('')
    setGraGru('')
    setImgAlumno('')


    const objetoAlumno = {
      nombre, 
      colegio, 
      nivel, 
      graGru, 
      fechaNac, 
      imgAlumno,
      // id:generarId(),
    }

    if( alumno.id ){
      // console.log('Editandolo...');
      objetoAlumno.id = alumno.id;
     /*  console.log(objetoAlumno);  //Es el actualizado
      console.log(alumno);        //Es la version anterior */

      const alumnosActualizados = alumnos.map(alumnoState=>(
        alumnoState.id === alumno.id ? objetoAlumno : alumnoState
      ))
      setAlumnos(alumnosActualizados)
      setAlumno({})

    }else{
      // console.log('Nuevo Registro');
      objetoAlumno.id = generarId();
      setAlumnos([...alumnos, objetoAlumno])
    }



  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mt-10 my-20 mx-5 text-center p-5 rounded-lg">
      <h1 className="text-3xl mt-3">Generar {' '}
      <span className="text-blue-400">Credencial</span></h1>

      <div className="text-left text-black text-xl mt-5">
        <form 
          className="bg-white p-5 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          {
            error && <Error msjErr="Todos los campos son obligatorios"/>
          }

         <div>
          <label 
            className="block text-gray-600 uppercase font-bold"
            htmlFor="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Nombre del alumno"
              className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
              value={nombre}
              onChange={e=>(setNombre(e.target.value))}
          />
         </div>


         <div>
          <label 
            className="block text-gray-600 uppercase font-bold"
            htmlFor="colegio">Colegio</label>
            <select 
              name="colegio" 
              id="colegio"
              className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
              value={colegio}
              onChange={e=>(setColegio(e.target.value))}
            >
                <option value="">---</option>
                <option value="Albatros">Albatros</option>
                <option value="Tecnoalbatros">Tecnoalbatros</option>                
            </select>
         </div>

          <div>
            <label 
              className="block text-gray-600 uppercase font-bold"
              htmlFor="nivel">Nivel</label>
              <select 
                name="nivel" 
                id="nivel"
                className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
                value={nivel}
                onChange={e=>(setNivel(e.target.value))}
              >
                  <option value="">---</option>
                  <option value="Kinder">Kinder</option>
                  <option value="Primaria">Primaria</option>
                  <option value="Secundaria">Secundaria</option>
              </select>
          </div>

          <div>
            <label 
              className="block text-gray-600 uppercase font-bold"
              htmlFor="graGru">Grado y Grupo</label>
              <select 
                name="graGru" 
                id="graGru"
                className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
                value={graGru}
                onChange={e=>(setGraGru(e.target.value))}
              >
                  <option value="">---</option>
                  {/* Preescolar */}
                  <option value="K1A">K1A</option>
                  <option value="K1B">K1B</option>
                  <option value="K1C">K1C</option>
                  <option value="K2A">K2A</option>
                  <option value="K2B">K2B</option>
                  <option value="K2C">K2C</option>
                  <option value="K3A">K3A</option>
                  <option value="K3B">K3B</option>
                  <option value="K3C">K3C</option>
                  {/* Primaria Baja */}
                  <option value="P1A">P1A</option>
                  <option value="P1B">P1B</option>
                  <option value="P1C">P1C</option>
                  <option value="P2A">P2A</option>
                  <option value="P2B">P2B</option>
                  <option value="P2C">P2C</option>
                  <option value="P3A">P3A</option>
                  <option value="P3B">P3B</option>
                  <option value="P3C">P3C</option>
                  {/* Primaria Alta */}
                  <option value="P4A">P4A</option>
                  <option value="P4B">P4B</option>
                  <option value="P4C">P4C</option>
                  <option value="P5A">P5A</option>
                  <option value="P5B">P5B</option>
                  <option value="P5C">P5C</option>
                  <option value="P6A">P6A</option>
                  <option value="P6B">P6B</option>
                  <option value="P6C">P6C</option>
                  {/* Secundaria */}
                  <option value="S1A">S1A</option>
                  <option value="S1B">S1B</option>
                  <option value="S1C">S1C</option>
                  <option value="S2A">S2A</option>
                  <option value="S2B">S2B</option>
                  <option value="S2C">S2C</option>
                  <option value="S3A">S3A</option>
                  <option value="S3B">S3B</option>
                  <option value="S3C">S3C</option>
              </select>
          </div>

            <div>
              <label 
                className="block text-gray-600 uppercase font-bold"
                htmlFor="fechaNac">Fecha de Nacimiento</label>
                <input 
                  type="date" 
                  id="fechaNac" 
                  className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
                  value={fechaNac}
                  onChange={e=>(setFechaNac(e.target.value))}
              />
            </div>

            <div>
              <label 
                className="block text-gray-600 uppercase font-bold"
                htmlFor="imgAlumno">Imagen:</label>
              <input 
                className="border-2 w-full mt-2 mb-2 placeholder-gray-400 text-base p-2 rounded-md"
                type="file" 
                id="imgAlumno" 
                name="imgAlumno" 
                accept="image/*"
                value={imgAlumno}
                onChange={e=>(setImgAlumno(e.target.value))}
              />
            </div>
            <div>
              <input 
                type="submit" 
                value={alumno.id ? 'Editar Alumno' : 'Agregar Alumno'} 
                className="border-2 w-full mt-5 mb-3 rounded-lg p-4 uppercase font-bold text-xl 
                text-gray-600 hover:text-gray-200 hover:bg-gray-800 cursor-pointer 
                transition-colors"  
              />
            </div>

        </form>
        
      </div>
    </div>
  );
};

export default Formulario;
