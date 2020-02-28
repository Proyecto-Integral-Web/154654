
import fireApp from './_firebase'
import router from '@/router'
export default {
  logOut () {
    fireApp.auth().signOut()
    router.push({ name: 'login' })
  },
  async checkUser () {
    let user = fireApp.auth().currentUser
    if (user) {
      return user
    } return null
  },
  async login (data) {
    await fireApp.auth().signInWithEmailAndPassword(data.email, data.password).then(
      (result) => {
        console.log(result)
        router.push({ name: 'profile' })
      }
    ).catch((err) => {
      console.log(err)
      //* Regresamos el error que se capture.
      return Promise.reject(err)
    })
  },
  async signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      // return alert('todos los campos son obligatorios')
      document.getElementById('alert-campos').style.display = 'block'
    } else {
      document.getElementById('alert-campos').style.display = 'none'
    }
    await fireApp.auth().createUserWithEmailAndPassword(data.email, data.password)
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
        return Promise.reject(err)
      }) // esta funcion es asincrona
    console.log(data)
  }
}
