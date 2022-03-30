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

function probarValidarCiudad() {}
