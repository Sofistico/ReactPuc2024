import Rotas from "./rotas";
import firebase from "./Firebase";

firebase.firestore().collection("usuario").add({
  nome: "Eduardo",
  sobrenome: "Lino"
})

function App() {
  return (
    <Rotas />
  );
}

export default App;