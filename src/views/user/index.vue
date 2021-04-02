
<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="Имя:">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="Логин:">
        <el-input v-model="form.login" />
      </el-form-item>
      <el-form-item label="Роль">
        <el-select v-model="form.role" placeholder="Выбрать роль">
          <el-option label="Охранник" value="guard" />
          <el-option label="Начальник охраны" value="boss" />
        </el-select>
      </el-form-item>
      <el-button type="primary" @click="onSubmit">Изменить</el-button>
      <el-button @click="onCancel">Отмена</el-button>

    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import router from '@/router'
import { server } from '@/api/ip'
export default {
  data() {
    return {
      form: {
        id: Number(router.currentRoute.params.id),
        name: '',
        login: '',
        role: '',
        avatar_src: 'http://cdn.onlinewebfonts.com/svg/download_506139.png'
      }
    }
  },
  created() {
    request({
      url: server+'/user/getAll',
      method: 'get',
      headers: { 'Authorization': 'Bearer ' + getToken() }

    }).then(all => {
      for (let index = 0; index < all.length; index++) {
        if (all[index].id === Number(router.currentRoute.params.id)) {
          console.log('FIND')
          this.form = all[index]
          break
        }
      }
    })
  },
  methods: {
    onSubmit() {
      request({
        url: server+'/user/update',
        method: 'post',
        headers: { 'Authorization': 'Bearer ' + getToken() },
        data: this.form
      }).then(resp => {
        this.$message('Запрос выполнен!')
        this.$router.push('/guards/all')
      })
    },
    onCancel() {
      router.back()
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

