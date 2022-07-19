<template>
  <div class="home">
    <ele-table init-request :format="formatData" @onLoad="onLoad"  :column="column" index checkbox :data="data_1" :params="params_1" url="/name/" method="post">
      <template v-slot:operation="slot">
        <ele-button type="primary" @click="handleEdit(slot.data)">编辑</ele-button>
        <ele-button type="danger" @click="handleDelete(slot.data)">删除</ele-button>
        <ele-button type="success" @click="handleEdit(slot.data)">编辑</ele-button>
        <ele-button type="warning" @click="handleDelete(slot.data)">删除</ele-button>
      </template>
    </ele-table>
  </div>
</template>

<script>

export default {
  name: 'table',
  data () {
    return {
      column: [
        { label: '姓名', prop: 'name' },
        { label: '性别', prop: 'gender' },
        { label: '创建时间', prop: 'create_date' },
        { label: '操作', type: 'slot', slot_name: 'operation', prop: 'operation' }
      ],
      data_1: {
        name: 'jack'
      },
      params_1: {
        name: 'rose'
      }
    }
  },
  components: {
    eleButton: () => import('../components/button/index.vue'),
    eleTable: () => import('../components/table/index.vue')
  },
  methods: {
    handleEdit (row) {
      console.log(row)
    },
    handleDelete (row) {
      console.log(row)
    },
    onLoad (data) {
      console.log(data)
    },
    formatData (data) {
      const tableData = data.data
      tableData.forEach(item => {
        item.gender = item.gender === '男' ? 1 : 0
      })
      return tableData
    }
  }
}
</script>
