<script setup>
    import { computed} from 'vue';
    import { reports } from '../consts/const';

    const props = defineProps({
      indexState:{
        type: Number,
      },
      filters:{
        type: Array,
        default: () => []
      },
      transactions:{
        type: Array,
        default: () => []
      },
      orderBy:{
        type: String
      }
    })
    
    const sortedAndFilteredData = computed(() => {
      console.log('Ordenando por:', props.orderBy); 
     
      
    
      let data = reports.slice(0, props.indexState).filter(report => 
        props.transactions.length === 0 || 
        props.transactions.includes('TODOS') || 
        props.transactions.includes(report.tipoTransaccion)
      );


      switch (props.orderBy) {
        case 'Por defecto':
          return data;
        case 'Referencia':
          return [...data].sort((a, b) => a.referencia.localeCompare(b.referencia));

          case 'Monto bs':
            console.log("Ordernar por monto")
          return


        default:
          return data;
      }
    });





</script>

<template>
  <div class="table-container">
    <table class="styled-table">
      <thead>
        <tr>
          <th>#</th>
          <th>ID</th>
          <th>ESTADO</th>
          <th>REFERENCIA</th>
          <th>TIPO REPORTE</th>
          <th>TIPO TRANSACCIÓN</th>
          <th>MONTO TRANSACCIÓN</th>
          <th>MONTO USD</th>
          <th>TASA</th>
          <th>CONTRATOS</th>
          <th>CLIENTES</th>
          <th>RIF/CEDULA</th>
          <th>BANCO ORIGEN</th>
          <th>BANCO DESTINO</th>
          <th>FECHA TRANSACCIÓN</th>
          <th>FECHA REPORTE</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(report, index) in sortedAndFilteredData" :key="index">

            <td>{{ index + 1 }}</td>
            <td>{{ report.id }}</td>
            <td>{{ report.estado }}</td>
            <td>{{ report.referencia }}</td>
            <td>{{ report.tipoReporte }}</td>
            <td>{{ report.tipoTransaccion }}</td>
            <td>{{ report.montoTransaccionBs }}</td>
            <td>{{ report.montoUSD }}</td>  
            <td>{{ report.tasa }}</td>
            <td>{{ report.contratos }}</td>
            <td>{{ report.cliente }}</td>
            <td>{{ report.rifCedula }}</td>
            <td>{{ report.bancoOrigen }}</td>
            <td>{{ report.bancoDestino }}</td>
            <td>{{ report.fechaTransaccion }}</td>
            <td>{{ report.fechaReporte }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style>
.table-container {
  padding: 20px;
  overflow-x: auto;
}

.styled-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  font-size: 13px;
}

.styled-table thead {
  background-color: #f3f3f3;
}

.styled-table th,
.styled-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.styled-table th {
  background-color: #007acc;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
}

.styled-table tbody tr:nth-child(even) {
  background-color: #f9f9f9;
}

.styled-table tbody tr:hover {
  background-color: #eef6ff;
}
</style>
