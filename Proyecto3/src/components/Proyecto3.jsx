import React, { useState, useEffect } from "react";
import "./proyecto3.css";
import { UserService } from "./userService";
import Swal from "sweetalert2";
import Imagen1 from "../img/logo.png";
import Imagen2 from "../img/pre.png";

const FormularioAlumnos = () => {
  const [alumnos, setAlumnos] = useState([]);

  const [alumno, setAlumno] = useState({
    nombre: "",
    apellido1: "",
    apellido2: "",
    email: "",
    telefono: "",
  });

  const [listaName, setListaName] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAlumno((prevAlumno) => ({ ...prevAlumno, [name]: value }));
  };

  const handleRemoveUser = async (id) => {
    await UserService.deleteUser(id);
    setAlumnos((prevAlumnos) => {
      const updateAlumnos = prevAlumnos.filter((alumno) => alumno.id !== id);
      return updateAlumnos;
    });
    getdata();
  };

  async function handleDeleteUser(id) {
    try {
      await UserService.deleteUser(id);
      getData();
    } catch (error) {
      console.log("Hubo un error al eliminar  el usuario: ", error);
    }
  }

  //deleteUser();

  async function getdata() {
    let usuarios = await UserService.getAllUsers();
    setAlumnos(usuarios);
  }

  getdata();

  //UserService.getAllUsers();
  async function handlerAddUserToList() {
    if (
      !alumno.nombre ||
      !alumno.apellido1 ||
      !alumno.apellido2 ||
      !alumno.email ||
      !alumno.telefono
    ) {
      Swal.fire({
        icon: "error",
        title: "Error al agregar alumno",
        text: "Por favor, completa todos los campos antes de añadir al alumno.",
      });
      return;
    }

    const newAlumno = { ...alumno, id: Date.now() };

    try {
      await UserService.submitUser(newAlumno);
      Swal.fire({
        icon: "sucess",
        title: "Alumno añadido con éxito!",
        showConfirmButton: false,
        timer: 1500,
      });
      setAlumno({
        nombre: "",
        apellido1: "",
        apellido2: "",
        email: "",
        telefono: "",
      });
    } catch (error) {
      console.error("Error al agregar alumno:", error);
      Swal.fire({
        icon: "error",
        title: "Error al agregar alumno",
        text: "Revisa los campos y vuelve a intentarlo",
      });
    }
  }

  return (
    <>
      <div className="navbar">
        <img src={Imagen1} alt="Imagen 1" className="logo" />

        <h1 className="titleNavbar">Arrabal School</h1>

        <button className="buttonNavbar">Añadir lista</button>
        <button className="buttonNavbar">Editar lista</button>
        <button className="buttonNavbar">Eliminar lista</button>

        <img src={Imagen2} alt="Imagen 2" className="settings" />
      </div>

      <label className="titleList">
        Nombre de la lista:
        <input type="text" name="listaName" value={listaName} onChange={handleChange}/>
      </label>
      
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

          <button
            className="botonagregar"
            type="button"
            onClick={handlerAddUserToList}
          >
            Añadir Alumno
          </button>
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
                    <button
                      className="botoneliminar"
                      type="button"
                      onClick={handleRemoveUser}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormularioAlumnos;
