<template>
  <div>
    <el-row :gutter="20" style="margin-top:50px">
      <el-col :span="12" :offset="6">
        <el-form ref="form" :model="file" label-width="120px">
          <el-form-item label="Dosya Adı">
            <el-input v-model="file.name"></el-input>
          </el-form-item>

          <el-form-item label="Dosya">
            <input type="file" @change="onFileSelected" />

            <el-button
              style="margin-left: 10px;"
              size="small"
              type="success"
              @click="onUpload"
            >Clouda Yükle</el-button>

            <div class="el-upload__tip" slot="tip">jpg/png files with a size less than 500kb</div>
          </el-form-item>

          <el-form-item>
            <el-progress
              :text-inside="true"
              :stroke-width="24"
              :percentage="file.status"
              status="success"
            ></el-progress>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file: {
        name: "",
        selectedFile: null,
        status: 0
      }
    };
  },
  methods: {
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
    },
    onUpload() {
      const url = "http://localhost:4000/api/user/file";
      const fd = new FormData();
      fd.append("audio", this.selectedFile, this.selectedFile.name);
      axios
        .post(url, fd, {
          onUploadProgress: uploadEvent => {
            const status = Math.round(
              (uploadEvent.loaded / uploadEvent.total) * 100
            );
            if (status === 100) {
              this.$notify({
                title: "Success",
                message: "Başarıyla Clouda Yüklendi",
                type: "success"
              });
            }
            this.file.status = status;
            console.log(
              "upload progress" +
                Math.round((uploadEvent.loaded / uploadEvent.total) * 100) +
                "%"
            );
          }
        })
        .then(res => {
          console.log(res);
        });
    }
  }
};
</script>

<style>
</style>