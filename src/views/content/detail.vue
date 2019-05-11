<template>
  <div class="app-container">
    <div class="search-inline">
      <div class="title-box">
        <h4>基本信息</h4>
      </div>
      <el-form :model="ruleForm" class="form-area">
        <!-- 基本信息 -->
        <div class="form-info">
          <el-row :gutter="40">
            <el-col :span="8">
              <el-form-item label="姓名:">
                <el-input
                  v-model="ruleForm.nickName"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="级别:">
                <el-select
                  :disabled="isDisabled"
                  v-model="ruleForm.stage"
                  :placeholder="isDisabled?'':'请选择'"
                >
                  <el-option
                    v-for="item in politicList"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="地区:">
                <el-select
                  :disabled="isDisabled"
                  v-model="ruleForm.city"
                  :placeholder="isDisabled?'':'请选择'"
                >
                  <el-option
                    v-for="item in educationList"
                    :key="item.id"
                    :label="item.value"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="8">
              <el-form-item label="总点击量:">
                <el-input
                  v-model="ruleForm.readNum"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="发布时间:">
                <el-input
                  v-model="ruleForm.insTime"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所属类别:">
                <el-input
                  v-model="ruleForm.artTypeDes"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </div>
      </el-form>
    </div>
    <div class="title-box">
      <h4>内容</h4>
    </div>
    <div class="comment">
      <!-- <p>时间：2019/03/22 15:22</p>
      <p>卡尔Karl：非法违法未暗黑风往北发微博分别为阿卡丽发文案来访问所发生的发生大发发</p>-->
      <p>时间：{{ruleForm.updTime}}</p>
      <p>{{ruleForm.nickName}}：{{ruleForm.content}}</p>
    </div>
    <div class="title-box last-title-box">
      <h4>评论</h4>
    </div>
    <div class="comment" v-for="(item,index) in list" :key="index">
      <!-- <p>时间：2019/03/22 15:22</p>
      <p>卡尔Karl：非法违法未暗黑风往北发微博分别为阿卡丽发文案来访问所发生的发生大发发</p>-->
      <p>时间：{{item.updTime}}</p>
      <p>{{item.nickName}}：{{item.content}}</p>
    </div>
    <div class="footer">
      <el-button type="primary" @click="pickArticle">设为精选</el-button>
      <el-button type="danger" @click="delArticle">删 除</el-button>
    </div>
  </div>
</template>

<script>
import {
  queryArticleComments,
  handpickArticle,
  deleteComment
} from "@/api/content";
export default {
  data() {
    return {
      list: null,
      listLoading: true,
      userId: "", //用户ID
      ruleForm: {},
      userList: {},
      isDisabled: true,
      politicList: [],
      educationList: []
      // items: ["a", "b", "c"]
    };
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  created() {
    // this.fetchData();
  },
  mounted() {
    // this.setCreated();
    // this.searchList();
  },
  methods: {
    //获取评论
    searchList() {
      queryArticleComments({
        artId: "",
        flag: "1"
      }).then(response => {
        console.log(response);
        this.list = response.list;
      });
    },
    //设置精选
    pickArticle() {
      let vm = this;
      handpickArticle({
        handpick: "0",
        userId: vm.userId,
        id: vm.ruleForm.id
      }).then(response => {
        console.log(response);
        // this.list = response.list;
        this.$router.push({
          path: "/content/index"
        });
      });
    },
    //删除评论操作
    delArticle() {
      let vm = this;
      deleteComment({
        // handpick: "",
        userId: vm.userId,
        id: vm.ruleForm.id
      }).then(response => {
        console.log(response);
        // this.list = response.list;
        this.$router.push({
          path: "/content/index"
        });
      });
    },
    setCreated() {
      this.ruleForm = this.$route.query;
      this.userList = JSON.parse(localStorage.getItem("content-info"));
      this.userId = JSON.parse(localStorage.getItem("Admin-Token")).id;
      // this.userInfo.state == 1
      //   ? (this.isDisabled = true)
      //   : (this.isDisabled = false);
    }
  }
};
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
.user-info {
  margin-bottom: 10px;
  span {
    margin-right: 40px;
    color: #606266;
    font-weight: 600;
  }
}
.title-box {
  padding-bottom: 10px;
  padding-left: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
}
.last-title-box {
  padding-top: 20px;
}
.form-area {
  margin: 10px 0;
  .form-info {
    display: inline-block;
    width: 90%;
    margin-left: 10px;
    .el-form-item {
      .el-form-item__content {
        .el-input {
          width: 70%;
        }
        .el-select {
          width: 70%;
        }
      }
    }
  }
}
.comment {
  padding: 10px;
  p {
    padding: 4px;
  }
}
</style>
<style>
.form-area .el-input.is-disabled .el-input__inner {
  cursor: auto;
  background-color: #fff;
  color: rgba(0, 0, 0, 0.9);
  border: 0;
}
.form-area .el-input.is-disabled .el-input__suffix {
  display: none;
}
.form-area .el-form-item .el-form-item__label {
  width: 80px;
}
.footer {
  text-align: center;
  padding: 20px;
}
</style>
