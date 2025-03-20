// modifican el state

    export const NewDataEmpresa = (state, entradas) => {
        state.DataEmpresa = "";
        state.DataEmpresa = [...state.DataEmpresa, ...entradas];
      };
