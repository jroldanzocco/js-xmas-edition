function probarValidarNombre() {
  console.assert(
    validarNombre("") === "Este campo debe tener al menos 1 caracter",
    "validarUsuario no validó que el nombre no este vacío"
  );
  console.assert(
    validarNombre("11111111111111111111111111111111111111111111111111") ===
      "Este campo debe tener menos de 50 caracteres",
    "validarNombre no valido que el nombre sea menor a 50 caracteres"
  );

  console.assert(
    validarNombre("Fabricio") === "",
    "Validar nombre falló con un nombre válido"
  );
}

probarValidarNombre();

function probarValidarCiudad() {
  console.assert(
    validarCiudad("Buenos Aires") === "",
    "ValidarCiudad falló con un nombre de ciudad válido"
  );
  console.assert(
    validarCiudad("") === "Debe seleccionar una ciudad",
    "ValidarCiudad no valido en un campo vacío"
  );
}

function probarValidarDescripcionRegalo() {
  console.assert(
    validarDescripcionRegalo(
      "1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    ) === "Debe contener menos de 100 caracteres",
    "ValidarDescripcionRegalo no valído que el campo contenga menos de 100 caracteres"
  );
  console.assert(
    validarDescripcionRegalo("") === "Este campo no puede estar vacío",
    "validarDescripcionRegalo no pudo validar que el campo no debe estar vacio"
  );
}
console.assert(
  validarDescripcionRegalo("chocolates") === "",
  "validarDescripcionRegalo fallo con una descripcion de regalo válida"
);
probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();
