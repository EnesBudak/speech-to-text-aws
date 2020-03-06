<template>
  <el-table
    :data="tableData.filter(data => !search || data.date.toLowerCase().includes(search.toLowerCase()))"
    style="width: 100%">
    <div>
         
    </div>
    <el-table-column
      label="Date"
      prop="date">
    </el-table-column>
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      label="Adres"
      prop="address">
    </el-table-column>
    <el-table-column
      align="right">
      <template slot="header" slot-scope="scobe">
         
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"
          @click="handleSearch(scobe.row)"/>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="primary"
          @click="handleEdit(scope.$index, scope.row)">Düzenle</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Sil</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Morgan',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Jessy',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        search: '',
      }
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    },
  }
</script>