// acciones asyncronas  que llaman a mutaciones 

/* export const myAction = async({commit})=>{

}  */

/* --------------------------DATOSEMPRESA--------------------- */

/* crear */
export const createDataEmpresa = async ({ commit }, entradas) => {
    const { id_ips, nombre,nit,direccion,celular,wsp,logo } = entradas;
    const DataToSave = {
      id_ips,
      nombre,
      nit,
      direccion,
      celular,
      wsp,
      logo
    };
     console.log("ok", DataToSave);
    const Ruta = `/datos_empresas.json`;
    //servicio
    const { data } = await firebase_api.post(Ruta, DataToSave);
    //agregamos el id al array para subirlo al strore
    DataToSave.id = data.name;
    //se llama a la mutacion y s epasa el array como
    commit("NewDataEmpresa", DataToSave);
  };
  
  /* actualizar store */
  export const updateDataEmpresa = async({commit},entradas)=>{
    const { x,y}=entradas;
    const DataToSave={
  
    };
  }
  