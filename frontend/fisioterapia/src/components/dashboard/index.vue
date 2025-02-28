<template>
  <Menu />

  <h6 class="display-5 text-center">Menu FisioterapiApp</h6>

  <!--  -->

  <!--  -->
  <div class="container">
    <div class="row">
      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/dotty/80/overtime.png"
                alt="overtime"
              />
            </div>

            <div class="col-8">
              <div>
                <router-link
                  :to="{ name: 'reservas', params: { id_user: this.id_user } }"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Reservas</h3>
                    <p style="color: black">Reserva de citas a pacientes</p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado">
              <h1 class="display-5">5</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="50"
                height="50"
                src="https://img.icons8.com/ios/50/calendar--v1.png"
                alt="calendar--v1"
              />
            </div>

            <div class="col-8">
              <div>
                <router-link to="/agendas"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Agendas</h3>
                    <p style="color: black">Gestión de agendas del sistema</p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado">
              <h1 class="display-5">5</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="55"
                height="55"
                src="https://img.icons8.com/dotty/80/sell.png"
                alt="sell"
              />
            </div>
            <div class="col-8">
              <div>
                <router-link to="/vitrina"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Vitrina</h3>
                    <p style="color: black">Gestión de productos y servicios</p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado" v-if="cant">
              <h1 class="display-5">{{ cant }}</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/ios/50/money--v1.png"
                alt="money--v1"
              />
            </div>
            <div class="col-8">
              <div>
                <router-link to="/ventas"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Ventas</h3>
                    <p style="color: black">Registro de ventas de productos</p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado">
              <h1 class="display-5">9</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/wired/64/hospital-room.png"
                alt="hospital-room"
              />
            </div>
            <div class="col-8">
              <div>
                <router-link to="/buscar_hc"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Historia clinica</h3>
                    <p style="color: black">
                      Registro digital de las actividades
                    </p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado">
              <div class="display-5">5</div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6">
        <div class="container cmenu">
          <div class="row">
            <div class="col-2 centrado">
              <img
                width="48"
                height="48"
                src="https://img.icons8.com/wired/64/settings.png"
                alt="settings"
              />
            </div>
            <div class="col-8">
              <div>
                <router-link to="/parametros"
                  ><a class="nav-link-menu" aria-current="page">
                    <h3 style="color: black">Configuracion</h3>
                    <p style="color: black">Gestión del sistema</p>
                  </a></router-link
                >
              </div>
            </div>
            <div class="col-2 centrado">
              <h1 class="display-5">9</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <br />
  <!-- <div class="container">
    <br>
    <h4>stores</h4> <br>
    <hr>
    <hr>
    store de auth :>
    {{ auth }} {{ id_ips }} {{ id_user }} {{ rol }} {{ info }}
    <hr>
    store de vitrina
    {{ cant }}
    <hr>

</div> -->
</template>

<script>
import { mapGetters, mapState, mapActions } from "vuex";

export default {
  components: {},
  data: () => ({}),

  computed: {
    ...mapState("vitrina", ["cant"]),
    ...mapState("Auth", ["auth", "id_ips", "id_user", "rol", "info"]),
    /*         ...mapState('Agendas',['dataprofesionales','dataCitas']) */
  },

  methods: {
    ...mapActions("vitrina", ["load_Vitrina"]),
    /*         ...mapActions('Agendas', ['getDatabyParam', 'loadProfesionales', 'getDataByRangoSuperior', 'createEntradaCitaNueva', 'getDatarCitasFecha', 'getDataUsersbyParam', 'DeleteItem']), */

    /*     BuscarProfesionales() {
                this.paramsProfesionales = [{
                    bd: "profesionales",
                    parametro: "id_ips",
                    valor: this.id_ips,
                    rta: "setStateProfesionales"
                }]
                this.getDataUsersbyParam(this.paramsProfesionales);

            },

            filtarFechas() {
                const fecha = this.fechahoy()
                this.paramsFechasCitas = [{
                    bd: "agendas",
                    parametro: "fecha",
                    valor: fecha,
                    rta: "setStateCitas"
                }]
                this.getDataByRangoSuperior(this.paramsFechasCitas);

            },

            fechahoy() {
                const date = new Date();
                const options = {
                    year: 'numeric',
                    month: '2-digit',
                    day: '2-digit'
                };
                const formatter = new Intl.DateTimeFormat('es-ES', options);
                const formattedDate = formatter.format(date);
                return formattedDate
            }, */
  },

  created() {
    this.load_Vitrina();
    /*         this.BuscarProfesionales()
                this.filtarFechas() */
  },
};
</script>
