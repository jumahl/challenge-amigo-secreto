const amigos = new Set();

function agregarAmigo() {
  const nombre = document.getElementById("amigo").value.trim();
  if (nombre) {
    if (!amigos.has(nombre)) {
      amigos.add(nombre);
      document.getElementById("amigo").value = "";
      mostrarAmigos();
    } else {
      alert("El nombre ya está en la lista");
    }
  } else {
    alert("Por favor, inserta un nombre");
  }
}

function mostrarAmigos() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  limpiarResultado();
  amigos.forEach(nombre => {
    const item = document.createElement("li");
    item.textContent = nombre;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.size) {
    const index = Math.floor(Math.random() * amigos.size);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    const arrayAmigos = Array.from(amigos);
    const item = document.createElement("li");
    item.textContent = `Tu amigo secreto es: ${arrayAmigos[index]}`;
    limpiarLista();
    resultado.appendChild(item);
  } else {
    alert("No hay amigos en la lista para sortear");
  }
}

function limpiarLista() {
  document.getElementById("listaAmigos").innerHTML = "";
  amigos.clear();
}

function limpiarResultado() {
  document.getElementById("resultado").innerHTML = "";
}