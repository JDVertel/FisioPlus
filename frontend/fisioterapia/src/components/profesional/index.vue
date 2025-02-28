<template>
    <div class="container-fluid">

        <!--  pagina de profesional
    llegan ( idprofesional - id_ips- tipoagenda)
    se cargan de entrada citas del profesional en el dia actual
    renderiza tabla y cada registro debe tener el campo de asistir y opcion de llenar hc usar el store de AUTH para registro y el de HC Para el resto de hc -->

        <div class="card w-100 mt-3 mb-3">
            <div class="card-body">
                <h5 class="card-title centrado">Agenda del Dia </h5>
                <div class="row">
                    <div class="col-2">
                        <img src="..." class="img-thumbnail centrado" alt="...">
                    </div>
                    <div class="col-10">

                        <p>profesional: Ramon jose vertel </p>

                        <div class="row">
                            <div class="col-6 col-md-3">
                                <p>Servicio: consulta </p>
                            </div>
                            <div class="col-6 col-md-3">
                                <p>Fecha: {{ this.fechaHoy }} </p>
                            </div>
                            <div class="col-6 col-md-3">
                                <p>Ips: rehabilitacion erika jasmin </p>
                            </div>
                            <div class="col-6 col-md-3">
                                <p>Nit: 123456 </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="card w-100 mb-3">
            <div class="card-body">
                <h5 class="card-title">Citas</h5>
                <p class="card-text">Pacientes Agendados el dia de hoy </p>

                <table class="table table-striped table-sm ">
                    <thead class="table-dark">
                        <tr>
                            <th scope="col">Hora</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Celular</th>
                            <th scope="col">Asistencia</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cita in this.CitasAgendadas" :key="cita.id">
                            <td>{{ cita.hora }}</td>
                            <td>{{ cita.paciente }}</td>
                            <td>{{ cita.telpaciente }} </td>
                            <td><button type="button" class="btn btn-danger btn-sm"
                                    @click="ActualizaEstadoCita('NO', cita)">X</button>
                                <router-link :to="{ name: 'hc', params: { idpaciente: cita.numdoc } }">
                                    <button type="button" class="btn btn-primary btn-sm"
                                        @click="ActualizaEstadoCita('SI', cita)">OK</button>
                                </router-link>
                                <!-- 

      @click="$router.push({ name: 'somewhere', state: { myData } })"
 -->

                            </td>
                        </tr>

                    </tbody>
                </table>
                <!--             <a href="#" class="btn btn-primary">Button</a> -->
            </div>
        </div>

        <p class="d-inline-flex gap-1">
            <a class="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
                aria-expanded="false" aria-controls="collapseExample">
                Historial diario
            </a>

        </p>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <caption>Citas Asistidas del dia </caption>
                <table class="table table-striped table-sm ">
                    <thead class="table-info">
                        <tr>
                            <th scope="col">Hora</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cita in this.CitasAsistidas" :key="cita.id">
                            <td>{{ cita.hora }}</td>
                            <td>{{ cita.paciente }}</td>
                            <td>{{ cita.telpaciente }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="card card-body">
                <caption>Citas NO Asistdas del dia </caption>
                <table class="table table-striped table-sm ">

                    <thead class="table-danger">
                        <tr>
                            <th scope="col">Hora</th>
                            <th scope="col">Paciente</th>
                            <th scope="col">Celular</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="cita in this.CitasNOAsistidas" :key="cita.id">
                            <td>{{ cita.hora }}</td>
                            <td>{{ cita.paciente }}</td>
                            <td>{{ cita.telpaciente }}</td>

                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <br>
    <br>

</template>

<script>
import {
    mapActions,
    mapState
} from 'vuex';
import moment from "moment";

export default {
    components: {

    },
    data: () => ({
        fechaHoy: "",
        idIPS: "1",
        idProfesional: "",
        idAgenda: "",
        ParamsActualizarCita: "",
        CitasAsistidas: [],
        CitasNOAsistidas: [],
        CitasAgendadas: [],
        /* ------------------------------ */
        paramsGetAllcitas: [],

    }),
    methods: {
        ...mapActions('Agendas', ['getDatabyParam', 'updateReserva']),
        async GetAllCitasDia() {
            this.paramsGetAllcitas = [{
                bd: "citas",
                parametro: "fecha",
                valor: this.fechaHoy,
                rta: "setStateCitas",
            }]
            await this.getDatabyParam(this.paramsGetAllcitas)

            this.CitasAsistidas = this.dataCitas.filter(cita => cita.estado == "SI");
            this.CitasNOAsistidas = this.dataCitas.filter(cita => cita.estado == "NO");
            this.CitasAgendadas = this.dataCitas.filter(cita => cita.estado == "0");

        },

        fijarfechadia() {
            const ListAgendas = this.diaformatedfecha;
            this.fechaHoy = ListAgendas;
        },

        async ActualizaEstadoCita(rta, Dcita) {
            this.ParamsActualizarCita = [{
                id: Dcita.id,
                estado: rta,
                fecha: Dcita.fecha,
                hora: Dcita.hora,
                id_agenda: Dcita.id_agenda,
                idprofesional: Dcita.idprofesional,
                numdoc: Dcita.numdoc,
                paciente: Dcita.paciente,
                telpaciente: Dcita.telpaciente,
                tip: Dcita.tipo,
                bd: "citas",
            }];

            if (rta == "SI") {
                console.log("cita asistida");
            } else {
                console.log("cita no asistida");
            };

            await this.updateReserva(this.ParamsActualizarCita[0])
            this.GetAllCitasDia();
        }

    },
    computed: {
        ...mapState('Agendas', ['dataCitas',]),
        /*     ...mapState('Auth', []),

 */
        diaformatedfecha() {
            return moment(new Date).format('YYYY-MM-DD');
        },

    },

    created() {
        this.fijarfechadia();
        this.GetAllCitasDia();
    }
}
</script>
