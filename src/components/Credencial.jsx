import { useEffect } from 'react';

const Credencial = ( {alumno, setAlumno, eliminarAlumno} ) => {

    const {nombre, colegio, nivel, graGru, fechaNac, imgAlumno, id} = alumno;

    const handleEliminar = () =>{
        // console.log('Eliminar alumno ', id);
        const respuesta = confirm( '¿Estas seguro de desear eliminar el alumno?')

        if(respuesta === true){
            eliminarAlumno(id)
        }
    }

    useEffect(()=>{
        // console.log('Credencial generada con éxito');
    }, [alumno])

    return (
        <>
           <div className="text-left text-black text-xl mt-5 bg-white p-5 rounded-md shadow-md">
              <p className="font-bold uppercase gray text-gray-600">Nombre: 
              {' '}<span className=" font-normal normal-case">{nombre}</span></p>

              <p className="font-bold uppercase gray text-gray-600">Colegio: 
              {' '}<span className=" font-normal normal-case">{colegio}</span></p>
              
              <p className="font-bold uppercase gray text-gray-600">Nivel: 
              {' '}<span className=" font-normal normal-case">{nivel}</span></p>
              
              <p className="font-bold uppercase gray text-gray-600">Grado y Grupo: 
              {' '}<span className=" font-normal normal-case">{graGru}</span></p>
              
              <p className="font-bold uppercase gray text-gray-600">Fecha de nacimiento: 
              {' '}<span className=" font-normal normal-case">{fechaNac}</span></p>

              <p className="font-bold uppercase gray text-gray-600">Imagen: 
              {' '}<span className=" font-normal normal-case">{imgAlumno}</span></p>

            <div className="flex justify-between">
                <button
                  className="bg-gray-800 text-white rounded-lg text-center p-2 mt-5 
                  cursor-pointer uppercase font-bold px-6 shadow-md"  
                  type="button"
                  onClick={()=>setAlumno(alumno)}
                >
                    Editar
                </button>
                <button
                  className="bg-red-800 text-white rounded-lg text-center p-2 mt-5 
                  cursor-pointer uppercase font-bold px-6 shadow-md"  
                  type="button"
                  onClick={handleEliminar}
                //   value={}
                >
                    Eliminar
                </button>
            </div>

            </div>   
        </>
    )
}

export default Credencial
