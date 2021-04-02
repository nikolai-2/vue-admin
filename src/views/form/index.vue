
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
      <el-button type="primary" @click="onSubmit">Создать</el-button>
      <el-button @click="onCancel">Cancel</el-button>

    </el-form>
  </div>
</template>

<script>
import request from '@/utils/request'
import { getToken } from '@/utils/auth'
import { server } from '@/api/ip'
export default {
  data() {
    return {
      form: {
        name: '',
        login: '',
        role: '',
        avatar_src: 'http://cdn.onlinewebfonts.com/svg/download_506139.png'
      }
    }
  },
  methods: {
    onSubmit() {
      request({
        url: server+'/user/create',
        method: 'post',
        headers: { 'Authorization': 'Bearer ' + getToken() },
        data: this.form
      }).then(resp => {
        this.$message('Охранник создан!')
        this.$router.push('/guards/all')
      })
    },
    onCancel() {
      this.$router.push('/guards/all')
    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

