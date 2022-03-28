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
}

probarValidarNombre();
