<template>
  <div id="load">
    <el-upload
      class="upload-demo"
      drag
      action="#"
      multiple>
      <!-- <button id="btn">点击上传乐曲</button> -->
    </el-upload>
    <button id="btn">点击上传乐曲</button>
    <!-- <el-button>点击上传乐曲</el-button> -->
</div>
</template>

<script>
export default {
  name: 'upload'
}
</script>

<style scoped lang="less">
#load{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .upload-demo{
    height: 50vh;
/deep/.el-upload{
    // position: relative;
    .el-upload-dragger{
      width: 60vw;
      height: 50vh;
      border: 8px dashed rgb(88, 86, 86);
      transition: border 0.3;
      &:hover{
        border-color: rgb(0,102,204);
      }
    }
  }
}
#btn{
  display: block;
  margin-top: 14px;
  background-color: #3b70fc;
  color: #fff;
  text-align: center;
  line-height: 2.4;
  padding: 20px 12px;
  background: #3b70fc;
  border-radius: 12px;
  color: #fff;
  display: flex;
  align-items: center;
  z-index: 1;
  transition: all .3s ease 0s;
  // cursor: pointer;
  height: 40px;
  width: 200px;
  border-radius: 20px;
  justify-content: center;
  span{
    padding-left: 10px;
    color: #fff;
  }
  .fa{
    font-size: 1.3rem;
    margin-right: 10px;
  }
  &:hover{
    background-color: #ff7242;
    padding: 20px 12px;
    // background: #3b70fc;
    border-radius: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    z-index: 1;
    transition: all .3s ease 0s;
    // cursor: pointer;
    height: 40px;
    width: 200px;
    border-radius: 20px;
    justify-content: center;
  }
}
}
</style>
