<template>
  <div class="app-container">
    <div class="search-inline">
      <el-row>
        <el-form inline label-width="85px" label-position="left">
          <el-col :lg="5" :xl="5" class="time-item">
            <el-form-item label="类型：">
              <el-select
                @change="changeSupDeptId"
                clearable
                filterable
                v-model="searchForm.supDeptId"
                size="small"
              >
                <el-option
                  v-for="item in supDeptIds"
                  :key="item.deptId"
                  :label="item.deptName"
                  :value="item.deptId"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :lg="8" :xl="8">
            <el-form-item label="起始日期：" class="datepicker">
              <el-date-picker
                v-model="searchTime"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                @change="changeSearchTime"
                size="small"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :lg="6" :xl="6">
            <el-form-item label="输入查询：">
              <el-input
                v-model="searchForm.user"
                clearable
                placeholder="请输入"
                size="small"
                class="search-input"
              >
                <el-button slot="append" @click="searchList">搜索</el-button>
              </el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
    </div>
    <div class="user-info">
      <span>昵称：张三</span>
      <span>级别：一级警员</span>
      <span>电话：13888888888</span>
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
        <template slot-scope="scope">{{scope.$index}}</template>
      </el-table-column>
      <el-table-column label="类型" align="center">
        <template slot-scope="scope">{{scope.row.type}}</template>
      </el-table-column>
      <el-table-column label="时间" width="250" align="center">
        <template slot-scope="scope">
          <span>{{scope.row.insTime}}</span>
        </template>
      </el-table-column>
      <el-table-column label="积分" width="110" align="center">
        <template slot-scope="scope">{{scope.row.points}}</template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="操作" width="200">
        <template slot-scope="scope">
          <span class="scope-text" @click="goDetails(scope.row.id,1)">详情</span>
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
import { queryUserPoints } from "@/api/integral";
import mixin from "@/views/mixin/table";
export default {
  mixins: [mixin],
  data() {
    return {
      listLoading: true,
      userInfo: {},
      searchForm: {},
      supDeptIds: [],
      searchTime: ""
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
  },
  methods: {
    searchList() {
      this.listLoading = true;
      this.setSearchList();
      queryUserPoints(this.searchForm).then(response => {
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
      this.searchForm["flag"] = "3";//1今天，2昨天，3所有
    },
    /**
     * 查看，编辑，新建
     * @param {*} state 状态0=新增，1=查看，2=编辑
     */
    goDetails(id, state) {
      this.$router.push({
        path: "/integral/detail",
        query: { state: state, id: id }
      });
    },    setCreated() {
      this.userInfo = this.$route.query;
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
</style>
