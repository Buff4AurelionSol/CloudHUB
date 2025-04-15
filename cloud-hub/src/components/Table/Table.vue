<script setup lang="ts">
type Report = {
  id: string;
  estado: string;
  referencia: string;
  tipoReporte: string;
  montoTransaccionBs: string;
  montoUSD: string;
  tasa: string;
  contratos: string;
  cliente: string;
  rifCedula: string;
  bancoDestino: string;
  bancoOrigen: string;
  tipoTransaccion: string;
  fechaTransaccion: string;
  fechaReporte: string;
};

const reports: Report[] = [
  {
    id: 'R-416532',
    estado: 'Verificado',
    referencia: '13212321312',
    tipoReporte: 'MENSUALIDAD',
    montoTransaccionBs: '1.889,57Bs.',
    montoUSD: '26.66 $',
    tasa: '70.01',
    contratos: '1011346',
    cliente: 'SABRINA ANZOLIN CHIMERI',
    rifCedula: '9966700',
    bancoDestino: 'Banesco',
    bancoOrigen: 'Banesco',
    tipoTransaccion: 'TRANSFERENCIA',
    fechaTransaccion: '02/04/2025',
    fechaReporte: '2025-04-02 09:06:19',
  },
  {
    id: 'R-419560',
    estado: 'Verificado',
    referencia: '13212321312',
    tipoReporte: 'MENSUALIDAD',
    montoTransaccionBs: '1.889,57Bs.',
    montoUSD: '26.66 $',
    tasa: '70.01',
    contratos: '1011346',
    cliente: 'SABRINA ANZOLIN CHIMERI',
    rifCedula: '9966700',
    bancoDestino: 'Banesco',
    bancoOrigen: 'Banesco',
    tipoTransaccion: 'TRANSFERENCIA',
    fechaTransaccion: '02/04/2025',
    fechaReporte: '2025-04-02 09:06:19',
  },
  {
  id: 'R-421001',
  estado: 'Pendiente',
  referencia: '54637281923',
  tipoReporte: 'INSCRIPCIÓN',
  montoTransaccionBs: '3.250,00Bs.',
  montoUSD: '45.00 $',
  tasa: '72.22',
  contratos: '1012387',
  cliente: 'CARLOS PEREZ GOMEZ',
  rifCedula: '15894236',
  bancoDestino: 'Mercantil',
  bancoOrigen: 'BOD',
  tipoTransaccion: 'TRANSFERENCIA',
  fechaTransaccion: '03/04/2025',
  fechaReporte: '2025-04-03 10:20:15',
},
{
  id: 'R-421002',
  estado: 'Verificado',
  referencia: '67381209381',
  tipoReporte: 'RENOVACIÓN',
  montoTransaccionBs: '2.500,00Bs.',
  montoUSD: '34.72 $',
  tasa: '72.00',
  contratos: '1011478',
  cliente: 'MARIA FERNANDEZ TORREALBA',
  rifCedula: '20456239',
  bancoDestino: 'Banesco',
  bancoOrigen: 'Provincial',
  tipoTransaccion: 'PAGO MÓVIL',
  fechaTransaccion: '04/04/2025',
  fechaReporte: '2025-04-04 08:45:00',
},
{
  id: 'R-421003',
  estado: 'Rechazado',
  referencia: '91827364501',
  tipoReporte: 'MENSUALIDAD',
  montoTransaccionBs: '1.000,00Bs.',
  montoUSD: '13.89 $',
  tasa: '72.00',
  contratos: '1011347',
  cliente: 'JULIO MENDOZA RIVAS',
  rifCedula: '10928374',
  bancoDestino: 'BNC',
  bancoOrigen: 'Banesco',
  tipoTransaccion: 'TRANSFERENCIA',
  fechaTransaccion: '05/04/2025',
  fechaReporte: '2025-04-05 11:30:45',
},
{
  id: 'R-421004',
  estado: 'Verificado',
  referencia: '82736491029',
  tipoReporte: 'MENSUALIDAD',
  montoTransaccionBs: '2.350,00Bs.',
  montoUSD: '32.64 $',
  tasa: '72.00',
  contratos: '1011349',
  cliente: 'ISABEL ROMERO LOPEZ',
  rifCedula: '19582736',
  bancoDestino: 'Mercantil',
  bancoOrigen: 'Mercantil',
  tipoTransaccion: 'TRANSFERENCIA',
  fechaTransaccion: '05/04/2025',
  fechaReporte: '2025-04-05 15:10:09',
},
{
  id: 'R-421005',
  estado: 'Verificado',
  referencia: '10928374659',
  tipoReporte: 'RENOVACIÓN',
  montoTransaccionBs: '4.100,00Bs.',
  montoUSD: '56.94 $',
  tasa: '72.00',
  contratos: '1011350',
  cliente: 'RAFAEL URDANETA PEREZ',
  rifCedula: '10392847',
  bancoDestino: 'BOD',
  bancoOrigen: 'BOD',
  tipoTransaccion: 'TRANSFERENCIA',
  fechaTransaccion: '06/04/2025',
  fechaReporte: '2025-04-06 09:12:33',
},
{
  id: 'R-421006',
  estado: 'Pendiente',
  referencia: '91823746583',
  tipoReporte: 'MENSUALIDAD',
  montoTransaccionBs: '1.850,00Bs.',
  montoUSD: '25.69 $',
  tasa: '72.00',
  contratos: '1011351',
  cliente: 'LAURA GARCIA MENDEZ',
  rifCedula: '20918374',
  bancoDestino: 'Provincial',
  bancoOrigen: 'Mercantil',
  tipoTransaccion: 'PAGO MÓVIL',
  fechaTransaccion: '06/04/2025',
  fechaReporte: '2025-04-06 13:50:27',
},
{
  id: 'R-421007',
  estado: 'Verificado',
  referencia: '12345678901',
  tipoReporte: 'INSCRIPCIÓN',
  montoTransaccionBs: '2.800,00Bs.',
  montoUSD: '38.89 $',
  tasa: '72.00',
  contratos: '1011352',
  cliente: 'DANIELA CASTILLO LINARES',
  rifCedula: '21109457',
  bancoDestino: 'BNC',
  bancoOrigen: 'Venezolano de Crédito',
  tipoTransaccion: 'TRANSFERENCIA',
  fechaTransaccion: '07/04/2025',
  fechaReporte: '2025-04-07 10:08:00',
},
{
  id: 'R-421008',
  estado: 'Verificado',
  referencia: '23456789012',
  tipoReporte: 'MENSUALIDAD',
  montoTransaccionBs: '2.500,00Bs.',
  montoUSD: '34.72 $',
  tasa: '72.00',
  contratos: '1011353',
  cliente: 'ANDREA GONZALEZ PAEZ',
  rifCedula: '19837465',
  bancoDestino: 'Banesco',
  bancoOrigen: 'Banesco',
  tipoTransaccion: 'PAGO MÓVIL',
  fechaTransaccion: '07/04/2025',
  fechaReporte: '2025-04-07 14:22:44',
}

];
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
        <tr v-for="(report, index) in reports" :key="report.id">
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
