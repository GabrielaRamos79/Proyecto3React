import React, { useState } from "react";
import "./proyecto3.css";
import { UserService } from "./userService";
import Imagen1 from "../img/logo.png";

// const FormularioAlumnos = ({ onAgregarAlumno }) => {
  const FormularioAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  const [alumno, setAlumno] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prevAlumno) => ({ ...prevAlumno, [name]: value }));
    // setUser({...user, [e.target.name]:e.target.value})
  };

  const handleRemoveUser = async (id) => {
    await UserService.deleteUser(id);
    setAlumnos((prevAlumnos) => {
      const updateAlumnos = prevAlumnos.filter((alumno) => alumno.id !== id);
      return updateAlumnos;
  });
  getdata();
};

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onAgregarAlumno(alumno);
  // };

  // const agregarAlumno = (nuevoAlumno) => {
  //   setAlumnos([...alumnos, nuevoAlumno]);
  // };

  // console.log(FormularioAlumnos);

  async function getdata (){
    let usuarios = await UserService.getAllUsers ();
    setAlumnos(usuarios);

  }

  getdata();

  //UserService.getAllUsers();
  async function handlerAddUserToList() {
    const newAlumno = {...alumno, id: Date.now() };
    await UserService.submitUser(newAlumno);
    setAlumno({
      nombre: "",
      apellido1: "",
      apellido2:"",
      email: "",
      telefono: ""
    });
  }
    // setAlumnos =({
    //   nombre: alumno.nombre,
    //   apellido1: alumno.apellido1,
    //   apellido2: alumno.apellido2,
    //   email: alumno.email,
    //   telefono: alumno.telefono
    // });
  
    //UserService.getAllUsers();
  
  /*function Proyecto3React() {*/

  return (
    <>
      <div className="navbar">
        <img src={Imagen1} alt="Imagen 1" className="logo" />

        <h1 className="titleNavbar">Arrabal School</h1>

        <button className="buttonNavbar">Añadir lista</button>
        <button className="buttonNavbar">Editar lista</button>
        <button className="buttonNavbar">Eliminar lista</button>
      </div>

      <div className="formulario">
        <form className="formalumnos">
          <label>
            Nombre:
            <input
              type="text"
              name="nombre"
              value={alumno.nombre}
              onChange={handleChange}
            />
          </label>

          <label>
            Apellido 1:
            <input
              type="text"
              name="apellido1"
              value={alumno.apellido1}
              onChange={handleChange}
            />
          </label>

          <label>
            Apellido 2:
            <input
              type="text"
              name="apellido2"
              value={alumno.apellido2}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={alumno.email}
              onChange={handleChange}
            />
          </label>

          <label>
            Teléfono:
            <input
              type="tel"
              name="telefono"
              value={alumno.telefono}
              onChange={handleChange}
            />
          </label>

          <button className="botonagregar" type="button" onClick={handlerAddUserToList}>Añadir Alumno</button>
        </form>

        <div className="tabla-container">
        <table className="listadoAlumnos">
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
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido1}</td>
                <td>{alumno.apellido2}</td>
                <td>{alumno.email}</td>
                <td>{alumno.telefono}</td>
                <td>
                <button className="botoneliminar" onClick={() => handleRemoveUser(alumno.id)}>Eliminar</button>
                </td>
              </tr>
            ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};

export default FormularioAlumnos;
