import router from '@/router'
export default {
  setUser: ({ commit }, user) => {
    // * Recibimos la información y segun lo que ser recibe actualizamos el estado de nuesro sistema.
    commit('SET_LOGGED_IN', user !== null) // ? Si es diferente a null entonces esta iniciada la sesión.
    if (user) {
      commit('SET_USER', user) // ? Le agreagmos los datos a nuestro state en una mutación (./mutations)
      router.push({ name: 'profile' }).catch(err => console.log(err))
    } else {
      commit('SET_USER', null)
      commit('SET_LOGGED_IN', false)
      router.push({ name: 'login' }).catch(err => console.log(err))
    }
  }
}
