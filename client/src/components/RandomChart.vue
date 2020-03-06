<template>
  <div>
    <el-row :gutter="40">
      <el-col :xs="12" :sm="12" :lg="6">
        <Line-chart :chartData="this.datacollection2"  />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <BarChart :chartData="this.datacollection" />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <horizontalBar :chartData="this.datacollection" />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6">
        <PieChart :chartData="this.datacollection" />
      </el-col>

    </el-row>
    <el-row :gutter="20">
      <el-col :xs="12" :sm="12" :md="12" :lg="10"  :offset="6">
        <el-card >
          <div >
            <Line-chart :chartData="this.datacollection2"   />
          </div>
        </el-card>
      </el-col>
     
    </el-row>
  </div>
</template>

<script>
  import LineChart from '../Charts/LineChart'
  import BarChart from '../Charts/BarChart'
  import PieChart from '../Charts/PieChart'
  import HorizontalBar from '../Charts/HorizontalBar'

  export default {
    components: {
      LineChart,
      BarChart,
      PieChart,
      HorizontalBar
    },
    data() {
      return {
        datacollection: {},
        datacollection2: {},
      
      }
    },
    mounted() {
      this.fillData()
    },
    methods: {
      fillData() {
        this.datacollection = {
          labels: ['deneme', 'deneme2'],
          datasets: [

            {
              label: 'Data One',
              backgroundColor: '#3498db',
              data: [50, 20]
            },
            {
              label: 'Data two',
              backgroundColor: '#f1c40f',
              data: [50, 20]
            },
            {
              label: 'Data three',
              backgroundColor: '#f1c40f',
              data: [10, 20]
            },
            {
              label: 'Data four',
              backgroundColor: '#f1c40f',
              data: [10, 20, 30, 40]
            }
          ]
        }
        this.datacollection2 = {
            labels: ['ocak', 'şubat ', 'mart', 'nisan', 'mayıs', 'haziran'],
            datasets: [{


              backgroundColor: '#525f7f',
              borderColor: '#1f8ef1',
              borderWidth: 2,
              borderDashOffset: 0.0,
              pointBackgroundColor: '#00d6b4',
              pointBorderColor: 'rgba(255,255,255,0)',
              pointHoverBackgroundColor: '#00d6b4',
              pointBorderWidth: 10,
              pointHoverRadius: 4,
              pointHoverBorderWidth: 15,
              pointRadius: 4,


              label: 'Götürülen Sipariş Sayısı',
              data: [10, 20, 40, 10, 90,20 ],

            }]
          }
          
      }
    }
  }
</script>

<style>

</style>