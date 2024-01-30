import React, { useState } from 'react';
import './proyecto3.css'
import Imagen1 from '../img/logo.png';


const FormularioAlumnos = ({ onAgregarAlumno }) => {

    const [alumno, setAlumno] = useState({
        nombre: '',
        apellido1: '',
        apellido2: '',
        email: '',
        telefono: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAlumno((prevAlumno) => ({ ...prevAlumno, [name]: value }));
    };

     const handleSubmit = (e) => {
        e.preventDefault();
        onAgregarAlumno(alumno);
        setAlumno({
            nombre: '',
            apellido1: '',
            apellido2: '',
            email: '',
            telefono: '',
        });
     };
};

const TableAlumnos = ({ alumnos }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido 1</th>
                    <th>Apellido 2</th>
                    <th>Email</th>
                    <th>Telefono</th>
                </tr>
            </thead>

            <tbody>
                {alumnos.map((alumno) => (
                    <tr key={index}>
                        <td>{alumno.nombre}</td>
                        <td>{alumno.apellido1}</td>
                        <td>{alumno.apellido2}</td>
                        <td>{alumno.telefono}</td>
                    </tr>
                    ))}
            </tbody>
            </table>
    );
};

const Proyecto3 = () => {
    const [alumnos, setAlumnos] = useState([]);

    const agregarAlumno = (nuevoAlumno) => {
        setAlumnos([...alumnos, nuevoAlumno]);
    };
};

function Proyecto3() {

    return (
        <>
        <div className='navbar'>

        <img src={Imagen1} alt='Imagen 1' className='logo' />

        <h1 className='titleNavbar'>Arrabal School</h1>

        <button className="buttonNavbar">Añadir lista</button>
        <button className="buttonNavbar">Editar lista</button>
        <button className="buttonNavbar">Eliminar lista</button>

        </div>

        <FormularioAlumnos onAgregarAlumno={agregarAlumno} />
        <form onSubmit={handleSubmit}>
            <label>
                Nombre:
                <input type="text" name="nombre" value={alumno.nombre} onChange={handleChange} />
            </label>
            
            <label>
                Apellido 1:
                <input type="text" name="apellido1" value={alumno.apellido1} onChange={handleChange} />
            </label>

            <label>
                Apellido 2:
                <input type="text" name="apellido2" value={alumno.apellido2} onChange={handleChange} />
            </label>

            <label>
                Email:
                <input type="email" name="email" value={alumno.email} onChange={handleChange} />
            </label>

            <label>
                Teléfono:
                <input type="tel" name="telefono" value={alumno.telefono} onChange={handleChange} />
            </label>

            <button type="submit">Añadir Alumno</button>
        </form>
        
        {/* Mostrar los alumnos */}
        <TableAlumnos alumnos={alumnos} />
       
        </>
    )


}

export default Proyecto3;