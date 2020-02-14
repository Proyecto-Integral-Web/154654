
import fireApp from './_firebase'
export default {
  signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('todos los campos son obligatorios')
    }
    fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
      .then(result => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }
        // newUser.displayName = data.nombre

        fireApp.auth().updateCurrentUser(newUser).catch(err => console.table(err))
      }).catch((err) => {
        console.table(err)
      }) // esta funcion es asincrona
    console.log(data)
  }
}
