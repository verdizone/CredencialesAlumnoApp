const Logica = () => {

    const year = new Date().getFullYear();
    const date = new Date().getDate();
    const day = new Date().getDay();
    const month = new Date().getMonth();
    
    const dia = {
        0: 'domingo', 
        1: 'lunes', 
        2: 'martes', 
        3: 'miércoles', 
        4: 'jueves', 
        5: 'viernes', 
        6: 'sàbado',         
    }
   
    const mes = {
        0: 'enero',
        1: 'febrero',
        2: 'marzo',
        3: 'abril',
        4: 'mayo',
        5: 'junio',
        6: 'julio',
        7: 'agosto',
        8: 'septiembre',
        9: 'octubre',
        10: 'noviembre',
        11: 'diciembre',
    }
    // console.log(year);
    // console.log(dia[`${day}`]);
    // console.log(mes[`${month}`]);
    // console.log(`Día ${date}`);
   
    const fechaDeHoy = `${dia[day]}, ${date} de ${mes[month]} de ${year}`;
    // console.log(fechaDeHoy.toLocaleUpperCase());


    return (
        <div>
            {/* <h1>Lógica</h1> */}
            {fechaDeHoy}
        </div>
    )
}

export default Logica
