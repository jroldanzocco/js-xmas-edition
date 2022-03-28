function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "validarNombre() no funciono con un string vacio"
  );

  console.assert(
    validarNombre("111111111111111111111111111111111111111111111111111") ===
      "Este campo debe tener menos de 50 caracteres",
    "validarNombre no valido que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Fabricio") === "",
    "validarnombre falló con un nombre correcto"
  );
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "validarCiudad no funciono con un nombre de ciudad válido"
  );
  console.assert(
    validarCiudad(" ") === "El campo ciudad no puede estar vacio",
    "validarCiudad no mostró un error cuando la ciudad es vacía"
  );
}

probarValidarCiudad();

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo("") === "El campo no puede estar vacio",
    "validarDescripcionRegalo() no funciona si esta vacío"
  );
}
