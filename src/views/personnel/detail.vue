<template>
  <div class="app-container">
    <div class="search-inline">
      <div class="title-box">
        <h4>基本信息</h4>
      </div>
      <el-form :model="ruleForm" class="form-area">
        <div class="info-img">
          <!-- <img
            :src="ruleForm.photo?ajaxUrlDNN+'/getRecruitPhoto?photo='+ruleForm.photo:'static/images/recruit-people.svg'"
            alt="个人照片"
          >-->
          <img v-if="isDisabled" src="./../../images/logo.png" alt="个人照片">
          <el-upload
            v-else
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
          >
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </div>
        <!-- 基本信息 -->
        <div class="form-info">
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="姓名:">
                <el-input
                  v-model="ruleForm.nickName"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年龄:">
                <el-input
                  v-model="ruleForm.age"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
              <el-form-item label="电话:">
                <el-input
                  v-model="ruleForm.phone"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
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
          </el-row>
          <el-row :gutter="40">
            <el-col :span="12">
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
            <el-col :span="12">
              <el-form-item label="积分:">
                <el-input
                  v-model="ruleForm.points"
                  :disabled="isDisabled"
                  :placeholder="isDisabled?'':'请输入'"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-button v-if="userInfo.state==0" type="primary" @click="setdateUser">保 存</el-button>
        </div>
      </el-form>
    </div>
    <div class="title-box">
      <h4>发帖记录</h4>
    </div>
    <el-table
      :data="tableDataList"
      v-loading="listLoading"
      element-loading-text="数据加载中..."
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="序号" width="95">
        <template slot-scope="scope">{{scope.$index+1}}</template>
      </el-table-column>
      <el-table-column prop="insTime" label="时间" :formatter="timeFormatter" align="center"></el-table-column>
      <el-table-column label="类别" prop="artType" align="center">
        <!-- <template slot-scope="scope">
                    <span>{{parseInt( scope.row.handpick) === 2 ? '精选' : '普通'}}</span>
        </template>-->
      </el-table-column>
      <el-table-column label="简述" prop="content" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="commentNum" label="回复" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="status" label="状态" align="center">
        <template slot-scope="scope">
          <span>
            {{parseInt( scope.row.status) === 0 ? '取消' : parseInt( scope.row.status) === 1 ?'发布' : parseInt( scope.row.status) === 2 ?'删除'
            : ''}}
          </span>
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <span class="scope-text" @click="goDetails(scope.row.id,1)">详情</span>
          <span class="scope-text" @click="delDetails(scope.row.id)">删除</span>
        </template>
      </el-table-column>
    </el-table>
    <div class="page_wrap">
      <el-pagination
        :current-page="page"
        :page-sizes="[10,20,30]"
        :page-size="rows"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @current-change="pageChange"
        @prev-click="prevPageChange"
        @next-click="nextPageChange"
        @size-change="sizePageChange"
        v-if="total > 0"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import { queryArticles, queryOneUser } from "@/api/personnel";
import mixin from "@/views/mixin/table";
export default {
  mixins: [mixin],
  data() {
    return {
      list: null,
      listLoading: true,
      userInfo: {},
      ruleForm: {},
      searchForm: {},
      isDisabled: true,
      politicList: [],
      educationList: [],
      imageUrl: ""
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
    this.setCreated();
    this.searchList();
    this.getUserList();
  },
  methods: {
    searchList() {
      this.listLoading = true;
      this.setSearchList();
      queryArticles(this.searchForm).then(response => {
        this.tableDataList = response.list;
        this.total = response.total;
        this.listLoading = false;
      });
    },
    // 设置获取列表参数
    setSearchList: function() {
      this.searchForm["page"] = this.page;
      this.searchForm["rows"] = this.rows;
      this.searchForm["userId"] = this.userInfo.id;
    },
    //获取用户信息
    getUserList() {
      queryOneUser({ userId: this.userInfo.id }).then(response => {
        console.log(response);
        this.ruleForm = response.user;
      });
    },
    //删除文章
    delDetails(id) {
      deleteArticle({ id: id, userId: this.userInfo.id }).then(response => {
        console.log(response);
      });
    },
    //修改用户信息
    setdateUser() {
      updateUser(this.ruleForm).then(response => {
        console.log(response);
      });
    },
    /**
     * 查看，编辑，新建
     * @param {*} state 状态0=新增，1=查看，2=编辑
     */
    goDetails(id, state) {
      this.$router.push({
        path: "/content/detail",
        query: { state: state, id: id }
      });
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg" || file.type === "image/png";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 或者 PNG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    },
    //删除文章
    delDetails(id) {},
    setCreated() {
      this.userInfo = this.$route.query;
      this.userInfo.state == 1
        ? (this.isDisabled = true)
        : (this.isDisabled = false);
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
.form-area {
  margin: 10px 0;
  .info-img {
    display: inline-block;
    width: 150px;
    height: 178px;
    margin: 0 4%;
    vertical-align: top;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .form-info {
    display: inline-block;
    width: 60%;
    margin-left: 6%;
    .el-form-item {
      .el-form-item__content {
        .el-input {
          width: 80%;
        }
        .el-select {
          width: 80%;
        }
      }
    }
  }
  .el-button--primary {
    float: right;
    margin-right: 52px;
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
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 150px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 150px;
  height: 178px;
  display: block;
}
</style>
