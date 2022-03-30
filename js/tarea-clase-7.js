document.querySelector("#enviar-carta").onclick = function (e) {
  e.preventDefault();
  const nombre = document.formulario.nombre.value;
  const ciudad = document.formulario.ciudad.value;
  const comportamiento = document.formulario.comportamiento.value;
  const descripcionRegalo = document.formulario["descripcion-regalo"].value;

  console.log(nombre);
  console.log(ciudad);
  console.log(comportamiento);
  console.log(descripcionRegalo);
};

function validarNombre(nombre) {
  if (nombre.length === 0) {
    return "Este campo debe tener al menos 1 caracter";
  }
  if (nombre.length >= 50) {
    return "Este campo debe tener menos de 50 caracteres";
  }
  return "";
}

function validarCiudad(ciudad) {
  if (ciudad.length === 0) {
    return "Debe seleccionar una ciudad";
  }
  return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
  if (descripcionRegalo.length === 0) {
    return "Este campo no puede estar vacío";
  }
  if (descripcionRegalo.length >= 100) {
    return "Debe contener menos de 100 caracteres";
  }
  return "";
}
