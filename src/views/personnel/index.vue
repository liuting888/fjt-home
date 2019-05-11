<template>
  <div class="app-container">
    <div class="fj-search-inline">
      <el-row>
        <el-form inline label-width="85px" label-position="left">
          <el-col :lg="5" :xl="5" class="time-item">
            <el-form-item label="地区：">
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
                v-model="searchForm.keyword"
                clearable
                placeholder="请输入"
                size="small"
                class="search-input"
              >
                <el-button slot="append" type="primary" @click="searchList">搜索</el-button>
              </el-input>
            </el-form-item>
          </el-col>
        </el-form>
      </el-row>
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
      <el-table-column prop="nickName" label="昵称" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="gender" label="性别" align="center">
        <template slot-scope="scope">
          <span>
            {{parseInt( scope.row.gender) === 0 ? '未知' : parseInt( scope.row.gender) === 1 ?'男' : parseInt( scope.row.gender) === 2 ?'女'
            : '未知'}}
          </span>
        </template>
      </el-table-column>
      <el-table-column prop="city" label="地区" show-overflow-tooltip align="center"></el-table-column>
      <el-table-column prop="age" label="年龄" align="center"></el-table-column>
      <el-table-column prop="phone" label="手机号码" align="center"></el-table-column>
      <el-table-column prop="insTime" label="第一次登录时间" :formatter="timeFormatter" align="center"></el-table-column>
      <el-table-column prop="lastLoginTime" label="最近一次登录时间" :formatter="timeFormatter" align="center"></el-table-column>
      <el-table-column align="center" label="操作" width="200">
        <template slot-scope="scope">
          <span class="scope-text" @click="goDetails(scope.row.id,1)">详情</span>
          <!-- <span class="scope-text" @click="goDetails(scope.row.id,1)">编辑</span> -->
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
import { getList } from "@/api/personnel";
import mixin from "@/views/mixin/table";
export default {
  mixins: [mixin],
  data() {
    return {
      tableDataList: null,
      listLoading: true,
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
    this.searchList();
  },
  methods: {
    searchList() {
      this.listLoading = true;
      this.setSearchList();
      getList(this.searchForm).then(response => {
        this.tableDataList = response.list;
        this.total = response.total;
        this.listLoading = false;
      });
    },
    // 设置获取列表参数
    setSearchList: function() {
      this.searchForm["page"] = this.page;
      this.searchForm["rows"] = this.rows;
    },
    /**
     * 查看，编辑，新建
     * @param {*} state 状态0=新增，1=查看，2=编辑
     */
    goDetails(id, state) {
      this.$router.push({
        path: "/personnel/detail",
        query: { state: state, id: id }
      });
    }
  }
};
</script>
