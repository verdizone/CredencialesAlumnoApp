import Credencial from "./Credencial"

const Credenciales = ( {alumnos, setAlumno, eliminarAlumno} ) => {
    
    
    return (
        <div className="md:w-1/2 lg:w-3/5 mt-10 my-20 mx-5 text-center p-5 rounded-lg shadow-md">
            <h1 className="text-3xl mt-3">Administrar {' '}
            <span className="text-blue-400">Credenciales</span></h1>
            <div>
                {
                  alumnos.map( alumno => (
                        <Credencial 
                          alumno={alumno}
                          key={alumno.id}
                          setAlumno={setAlumno}
                          eliminarAlumno={eliminarAlumno}
                        
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Credenciales
