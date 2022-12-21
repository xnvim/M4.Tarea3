//Arreglo con paises iniciales
const paises = [
  {
    nombre: "Guatemala",
    bandera: "https://bit.ly/3Bwr2rm",
    capital: "Ciudad de Guatemala",
    idioma_oficial: "Español",
    moneda: "Quetzal"
  },
  {
    nombre: "Argentina",
    bandera: "https://bit.ly/3BEJC0y",
    capital: "Buenos Aires",
    idioma_oficial: "Español",
    moneda: "Peso"
  },
  {
    nombre: "Francia",
    bandera: "https://bit.ly/3HFZ7t5",
    capital: "Paris",
    idioma_oficial: "Frances",
    moneda: "Euro"
  },
  {
    nombre: "El Salvador",
    bandera: "https://bit.ly/3uRN5F6",
    capital: "San Salvador",
    idioma_oficial: "Español",
    moneda: "Dolar"
  },
  {
    nombre: "Honduras",
    bandera: "https://bit.ly/3UWcrMM",
    capital: "Tegucigalpa",
    idioma_oficial: "Español",
    moneda: "Lempira"
  }
];

agregarMonitores();

//funcion para agregar listeners a los botones
function agregarMonitores() {
  document.getElementById('mostrarPaises').addEventListener('click', mostrarPaises);
  document.getElementById('agregarPais').addEventListener('click', agregarPais);
}


//funcion que mostrara las paises en la pagina
function mostrarPaises() {
  let contenido = '';
  for(let pais of  paises){
    contenido +=
    `
    <div class="col col-lg-12">
      <table class="table table-dark p-2 text-center">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Capital</th>
            <th>Idioma</th>
            <th>Moneda</th>
          </tr>
        </thead>
        <tbody>
          <tr">
            <td>${pais.nombre}</td>
            <td>${pais.capital}</td>
            <td>${pais.idioma_oficial}</td>
            <td>${pais.moneda}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="4">
              <img src="${pais.bandera}" alt="bandera, ${pais.nombre}">
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    `;
  }
  document.getElementById('paises').innerHTML = contenido;
}

//funcion que permite agregar un pais al arreglo
function agregarPais() {
  let validacion = true;
  let nuevoPais = {
    nombre: "",
    bandera: "",
    capital: "",
    idioma_oficial: "",
    moneda: ""
  };

  /* capturas */
  nuevoPais.nombre = prompt('INGRESE EL NOMBRE DEL PAÍS:');
  nuevoPais.bandera = prompt('INGRESE LA BANDERA DEL PAÍS (URL):');
  nuevoPais.capital = prompt('INGRESE LA CAPITAL DEL PAÍS:');
  nuevoPais.idioma_oficial = prompt('INGRESE EL IDIOMA OFICIAL DEL PAÍS:');
  nuevoPais.moneda = prompt('INGRESE LA MONEDA DEL PAÍS:');

  /* validación */
  for(let propiedad in nuevoPais){
    if((nuevoPais[propiedad] == '') || (nuevoPais[propiedad] == null)){
      validacion = false;
      break;
    }
  }
  if(validacion){
    paises.unshift(nuevoPais);
    mostrarPaises();
  }
}
