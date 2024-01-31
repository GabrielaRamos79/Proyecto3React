import React, { useState } from "react";
import "./proyecto3.css";
import { UserService } from "./userService";
import Imagen1 from "../img/logo.png";

const FormularioAlumnos = ({ onAgregarAlumno }) => {
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAgregarAlumno(alumno);
  };

  const agregarAlumno = (nuevoAlumno) => {
    setAlumnos([...alumnos, nuevoAlumno]);
  };

  console.log(FormularioAlumnos);

  async function getdata (){
    let usuarios = await UserService.getAllUsers ();
    setAlumnos(usuarios);

  }

  getdata();

  UserService.getAllUsers();
  /*async function nuevoAlumno() {
    let nuevoAlumno = await UserService.submitUser();
    nuevoAlumno = {
      nombre: "",
      apellido1: "",
      apellido2: "",
      email: "",
      telefono: ""
    };
  
    UserService.getAllUsers();
  }*/
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

          <button type="button">Añadir Alumno</button>
        </form>

        
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
            {alumnos.map((alumno, index) => (
              <tr key={index}>
                <td>{alumno.nombre}</td>
                <td>{alumno.apellido1}</td>
                <td>{alumno.apellido2}</td>
                <td>{alumno.telefono}</td>
              </tr>
            ))
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default FormularioAlumnos;
