const Error = ( {msjErr} ) => {
    return (
        <div className="bg-red-800 text-white text-base mb-3 
        rounded-lg shadow-md p-4 text-center font-bold uppercase
        animate-pulse">
           <p>{msjErr}</p>
        </div>
    )
}

export default Error
