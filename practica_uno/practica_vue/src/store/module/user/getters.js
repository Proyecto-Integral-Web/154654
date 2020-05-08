export default {
  getUser: state => ({ uid: state.user.uid, displayName: state.user.displayName, email: state.user.email, photoURL: state.user.photoURL, metadata: state.user.metadata }), // ? En un getter transformamos el estado para ser utilizado en nuestro componente y views.
  logged: state => state.logged
}
