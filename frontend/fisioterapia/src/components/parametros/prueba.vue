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