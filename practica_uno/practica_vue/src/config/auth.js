import { auth } from './_firebase'
import router from '@/router'
export default {
  logOut () {
    auth.signOut()
    router.push({ name: 'login' })
  },
  checkUser () {
    let user = auth.currentUser
    if (user) {
      return user
    } return null
  },
  async login (data) {
    auth.signInWithEmailAndPassword(data.email, data.password).then(
      (result) => {
        console.log(result)
        router.push({ name: 'main' })
      }
    ).catch((err) => {
      console.log(err)
      //* Regresamos el error que se capture.
      return Promise.reject(err)
    })
  },
  async signUp (data) {
    if (data.nombre === '' || data.email === '' || data.password === '') {
      return alert('todos los campos son obligatorios')
    }
    auth.createUserWithEmailAndPassword(data.email, data.password)
      .then((result) => {
        let newUser = {
          displayName: data.nombre,
          email: result.user.email,
          uid: result.user.id
        }
        auth.updateCurrentUser(newUser).catch(err => console.table(err))
      }).catch((err) => {
        console.table(err)
      })
    console.log(data)
  },
  getUser () {
    return auth.currentUser
  }
}
