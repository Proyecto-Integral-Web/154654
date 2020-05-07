<template >
  <!--Container nos da un ancho maximo de 1140px-->
  <div :style="{'background-color':'#fefcfd', 'background-size': 'cover', 'height':'88.7vh'}">
    <div class="container">
      <div
        class="card"
        style="border-color: #ffebeb"
      >
        <div class="row">
          <div class="col-4-lg col-12-md col-12-xs datos">
            <div class="infoUsuario">
              <img
                class="profilePhoto mx-auto rounded-circle"
                :src="user.photo"
              />

              <label class="mx-auto usuarioNombre">{{user.nombre}}</label>
              <br>
              <br>
              <button
                class="btn btn-edit"
                @click="Perfil"
              > <img
                  src="@/assets/logo.png"
                  width="40px"
                > Editar perfil</button>
              <br>
              <br>
              <button
                class="btn btn-logout"
                @click="logout"
              >Log Out</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>
