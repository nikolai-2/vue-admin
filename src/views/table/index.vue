let counter = 0
<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
      align="center"
    >
      <el-table-column align="center" label="ID" width="65">
        <template slot-scope="scope">
          {{ scope.row.id }}
        </template>
      </el-table-column>
      <el-table-column label="Имя" width="500" align="center">
        <template slot-scope="scope">
          <span @click.prevent="goTo(scope.row.id)">{{ scope.row.name }}</span>
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="Login" width="210" align="center">
        <template slot-scope="scope">
          {{ scope.row.login }}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="Роль" width="200">
        <template slot-scope="scope">
          {{ scope.row.role }}
        </template>
      </el-table-column>
      <el-table-column>
        <template slot-scope="scope">
          <img src="http://cdn.onlinewebfonts.com/svg/img_171060.png" height="18" width="18" @click="goTo(scope.row.id)">
        </template>
      </el-table-column>
    </el-table>
    <g-button-wave color="primary" size="button--size-m" @click="toNew()">Добавить</g-button-wave>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {

  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList().then(response => {
        this.list = response
        this.listLoading = false
      })
    },
    goTo(id) {
      this.$router.push('/user/' + id)
    },
    toNew() {
      this.$router.push('/form/index')
    }

  }
}
</script>
