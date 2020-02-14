
import fireApp from './_firebase'

export default {
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('todos los campos son obligatorios')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = result.user
        newUser.displayName = data.nombre
        fireApp.auth().updateCurrentUser(newUser).catch(err => console.log(err))
      }).catch((err) => {
        console.table(err)
      }) // esta funcion es asincrona
    console.log(data)
  }
}
