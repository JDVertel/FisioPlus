<template>
  <div>
    <h2>Configuracion de App</h2>
    usuarios tipos de citas empresa ( nombre - direccion - nit -telefono- email)
    profesionales y areas
    <div class="container-fluid">
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Usuarios del Sistema ({{ existeusuarios }})
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-8">
                  <h6>Usuarios registrados en el sistema</h6>
                </div>
                <div class="col-4">
                  <button class="btn btn-warning btn-sm" @click="btn_adduser">
                    + Nuevo
                  </button>
                </div>
              </div>
              <div class="container" v-if="this.form_user">
                <div>
                  <h6><strong>Registro de nuevo usuario</strong></h6>
                </div>
                <div class="row">
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="user_tipodoc"
                      >
                        <option value="" selected>
                          Seleccione Tipo de Doc
                        </option>
                        <option value="CC">Cedula</option>
                        <option value="TI">T Identidad</option>
                        <option value="PA">Pasaporte</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="# Documento"
                        v-model="user_numdoc"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Nombre"
                        v-model="user_nombre"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="user_rol"
                      >
                        <option value="">Seleccione Rol</option>
                        <option value="admin">Administrador</option>
                        <option value="registro">Registro</option>
                        <option value="prof">Profesional</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <h6>
                        <strong>Nota: </strong>Los nuevos usuarios se crean con
                        la contraseña <strong>12345</strong> al ingresar deberan
                        asignar una nueva
                      </h6>
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <button
                        class="btn btn-success btn-sm"
                        @click="adduser"
                        v-if="
                          this.user_tipodoc !== '' &&
                          this.user_numdoc !== '' &&
                          this.user_nombre !== '' &&
                          this.user_rol !== ''
                        "
                      >
                        Guardar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <table class="table table-sm">
                <thead>
                  <tr>
                    <th scope="col">Rol</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Documento</th>
                    <th scope="col">Estado</th>
                    <th>Opc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="user in datausuarios" :key="user.id">
                    <th>{{ user.rol }}</th>
                    <td>{{ user.nombre }}</td>
                    <td>{{ user.doc }}</td>
                    <td>{{ user.estado }}</td>
                    <td>
                      <button
                        class="btn btn-danger m-1 btn-sm"
                        @click="eliminaritemU(user.id)"
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                      <button class="btn btn-warning m-1 btn-sm">
                        <i class="bi bi-key"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- ----------------------------------- -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Profesionales ( {{ existeprofesionales }} )
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <div class="row">
                <div class="col-8">
                  <h6>Profesionales registrados en el sistema</h6>
                </div>
                <div class="col-4">
                  <button class="btn btn-warning btn-sm" @click="btn_addprof">
                    + Nuevo
                  </button>
                </div>
              </div>
              <div class="container" v-if="this.form_prof">
                <div><strong>Registro de profesionales</strong></div>
                <br />
                <div class="row">
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="pro_tipodoc"
                      >
                        <option value="">Seleccione Tipo de Doc</option>
                        <option value="CC">Cedula</option>
                        <option value="TI">T Identidad</option>
                        <option value="PA">Pasaporte</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="# Documento"
                        v-model="pro_numdoc"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder=" 1er Nombre"
                        v-model="pro_name1"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="2do Nombre"
                        v-model="pro_name2"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="1er Apellido"
                        v-model="pro_apell1"
                      />
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="2do Apellido"
                        v-model="pro_apell2"
                      />
                    </div>
                  </div>

                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email"
                        v-model="pro_correo"
                      />
                    </div>
                  </div>

                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="number"
                        class="form-control"
                        placeholder="#Celular"
                        v-model="pro_celular"
                      />
                    </div>
                  </div>

                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Reg Medico"
                        v-model="pro_reg_medico"
                      />
                    </div>
                  </div>

                  <div class="col-6 col-md-4">
                    <div class="mb-3">
                      <select
                        class="form-select"
                        aria-label="Default select example"
                        v-model="pro_tipo"
                      >
                        <option value="">Seleccione Tipo Profesional</option>
                        <option value="fisioterapia">Fisioterapia</option>
                        <option value="consulta">Consulta</option>
                        <option value="clases">Clases</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-6 col-md-4">
                    <button
                      class="btn btn-success btn-sm"
                      @click="addprof"
                      v-if="
                        this.pro_tipodoc !== '' &&
                        this.pro_numdoc !== '' &&
                        this.pro_name1 !== '' &&
                        this.pro_apell1 !== '' &&
                        this.pro_email !== '' &&
                        this.pro_celular !== '' &&
                        this.pro_reg_medico !== '' &&
                        this.pro_tipo !== '' &&
                        this.pro_correo !== ''
                      "
                    >
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
              <br />
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">tipo</th>
                    <th scope="col">nombre</th>
                    <th scope="col">cel</th>
                    <th scope="col">opc</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="prof in dataprofesionales" :key="prof.id">
                    <th>{{ prof.tipo }}</th>
                    <td>{{ prof.name1 }} {{ prof.apell1 }}</td>
                    <td>{{ prof.cel }}</td>
                    <td>
                      <button
                        class="btn btn-danger m-1 btn-sm"
                        @click="eliminaritemP(prof.id)"
                      >
                        <i class="bi bi-trash3-fill"></i>
                      </button>
                      <button class="btn btn-warning m-1 btn-sm">
                        <i class="bi bi-key"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <!-- ----------------------------------- -->
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Datos Empresa
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h2><strong>Datos Empresariales</strong></h2>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1"
                        >Nombre Ips</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Sin datos"
                        aria-label="nombreips"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1"
                        >Nit</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Sin datos"
                        aria-label="nit"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group mb-3">
                      <span class="input-group-text" id="basic-addon1"
                        >Direccion</span
                      >
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Sin datos"
                        aria-label="direccion"
                        aria-describedby="basic-addon1"
                      />
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group mb-3">
                      <input
                        type="file"
                        class="form-control"
                        id="inputGroupFile02"
                      />
                      <label class="input-group-text" for="inputGroupFile02"
                        >Upload Logo</label
                      >
                    </div>
                  </div>
                  <div>
                    <button type="button" class="btn btn-primary btn-sm">
                      Actualizar
                    </button>
                  </div>
                </div>
              </div>

              <br />
            </div>
          </div>
        </div>

        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse4"
              aria-expanded="false"
              aria-controls="collapse4"
            >
              Personalizar Informacion de Pagina
            </button>
          </h2>
          <div
            id="collapse4"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <h2><strong>Informacion de la Pagina</strong></h2>
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Quienes somos</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Mision</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">vision</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Nuestros Servicios </span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text"
                        >Nuestros Servicios Lm</span
                      >
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <br />
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Clases Rutinas </span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Clases Rutinas Lm</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Tienda Online </span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="input-group">
                      <span class="input-group-text">Tienda Online Lm</span>
                      <textarea
                        class="form-control"
                        aria-label="With textarea"
                        placeholder="Sin datos"
                      ></textarea>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="container mt-3">
                      <button type="button" class="btn btn-primary btn-sm">
                        Actualizar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse5"
              aria-expanded="false"
              aria-controls="collapse5"
            >
              Parametros funcionales
            </button>
          </h2>
          <div
            id="collapse5"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <nav>
              parametros
              </nav>
              <div class="tab-content" id="nav-tabContent">
       
                <!-- COMUNICACIONES -->
                <div
                  class="tab-pane fade"
                  id="nav-comunicaciones"
                  role="tabpanel"
                  aria-labelledby="nav-comunicaciones-tab"
                  tabindex="0"
                >
                  comunicaciones
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
    <router-link to="/dashboard">Home</router-link>
    <br />
    <br />
    <br />
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  data: () => ({
    form_user: false,
    form_prof: false,
  
    Datanewuser: [],
    DataDeleteU: [],
    /*  */
    Datanewprof: [],
    DataDeleteP: [],
    user_tipodoc: "",
    user_rol: "",
    pro_tipodoc: "",
    pro_tipo: "",
    formularioValidoU: false,
    formularioValidoP: false,
 

    /* ---------valores quemados ------- */
    paramsProfesionales: [
      {
        bd: "profesionales",
        parametro: "id_ips",
        valor: 1,
        rta: "setStateProfesionales",
      },
    ],

    paramsUsuarios: [
      {
        bd: "usuarios",
        parametro: "id_ips",
        valor: "1",
        rta: "setStateUsuarios",
      },
    ],
  }),

  /* --------------------------------------------------------------------------------------------------- */
  methods: {
    clearform_user() {
      this.user_tipodoc = "";
      this.user_numdoc = "";
      this.user_nombre = "";
      this.user_rol = "";
    },
    clearform_prof() {
      this.pro_tipodoc = "";
      this.pro_numdoc = "";
      this.pro_apell1 = "";
      this.pro_apell2 = "";
      this.pro_name1 = "";
      this.pro_name2 = "";
      this.pro_reg_medico = "";
      this.pro_celular = "";
      this.pro_correo = "";
      this.pro_tipo = "";
    },

    btn_adduser() {
      this.form_user = !this.form_user;
      console.log("ejecutandometodo add user", this.form_user);
      this.clearform_user();
    },

    btn_addprof() {
      this.form_prof = !this.form_prof;
      console.log("ejecutandometodo add prof", this.form_prof);
      this.clearform_prof();
    },
    btn_addtipocita() {
      this.form_tipocita = !this.form_tipocita;

      /*  this.clearform_user(); */
    },

    async adduser() {
      this.Datanewuser.push({
        estado: true,
        id_ips: "1",
        doc: this.user_tipodoc + this.user_numdoc,
        nombre: this.user_nombre,
        pass: "12345",
        rol: this.user_rol,
        bd: "usuarios",
      });
      try {
        this.btn_adduser();
        await this.createEntradaUser(this.Datanewuser[0]);
        this.Datanewuser = [];
        await this.getDatabyParam(this.paramsUsuarios);
        console.log("Usuario creado exitosamente.");
      } catch (error) {
        // Manejar errores (¡fundamental!)
        console.error("Error al crear el usuario:", error);
        // Aquí podrías mostrar un mensaje al usuario o tomar otras acciones
      }
    },

    async addprof() {
      this.Datanewprof.push({
        id_ips: "1",
        estado: true,
        doc: this.pro_tipodoc + this.pro_numdoc,
        name1: this.pro_name1,
        name2: this.pro_name2,
        apell1: this.pro_apell1,
        apell2: this.pro_apell2,
        cel: this.pro_celular,
        reg_medico: this.pro_reg_medico,
        tipo: this.pro_tipo,
        correo: this.pro_correo,
        pass: "12345",
        bd: "profesionales",
      });
      try {
        this.btn_addprof();
        await this.createEntradaProf(this.Datanewprof[0]);
        this.Datanewprof = [];
        await this.getDatabyParam(this.paramsProfesionales);
      } catch (error) {
        // Manejar errores (¡fundamental!)
        console.error("Error al crear el profesional:", error);
        // Aquí podrías mostrar un mensaje al usuario o tomar otras acciones
      }
    },

    /* _---------------------------------------------------------------------------- */

    async eliminaritemP(id) {
      console.log("eliminanfo prof" + id);
      this.DataDeleteP.push({
        id: id,
        bd: "profesionales",
      });
      try {
        await this.DeleteItem(this.DataDeleteP[0]);
        this.DataDeleteP = [];
        await this.getDatabyParam(this.paramsProfesionales);
      } catch (error) {
        // Manejar errores (¡fundamental!)
        console.error("Error al eliminar el registro", error);
        // Aquí podrías mostrar un mensaje al usuario o tomar otras acciones
      }
    },

    async eliminaritemU(id) {
      this.DataDeleteU.push({
        id: id,
        bd: "usuarios",
      });
      this.DeleteItem(this.DataDeleteU[0]);
      try {
        await this.getDatabyParam(this.paramsUsuarios);
        this.DataDeleteU = [];
        await this.getDatabyParam(this.paramsUsuarios);
      } catch (error) {
        // Manejar errores (¡fundamental!)
        console.error("Error al eliminar el registro", error);
        // Aquí podrías mostrar un mensaje al usuario o tomar otras acciones
      }
    },

    ...mapActions("Agendas", [
      "getDatabyParam",
      "createEntradaUser",
      "createEntradaProf",
      "DeleteItem",
    ]),
  },
  computed: {
    ...mapState("Agendas", [
      "dataprofesionales",
      "existeprofesionales",
      "datausuarios",
      "existeusuarios",
    ]),
  },

  created() {
    this.getDatabyParam(this.paramsProfesionales);
    this.getDatabyParam(this.paramsUsuarios);
  },
};
</script>
