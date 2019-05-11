/*
 * @Description: table列表公共数据
 * @Author: liuting
 * @LastEditors: Please set LastEditors
 * @Date: 2019-05-05 15:18:47
 * @LastEditTime: 2019-05-11 10:45:45
 */
const list = {
  data() {
    return {
      ajaxUrlDNN: "",
      // 分页数据
      page: 1,
      rows: 10,
      total: 5,
      // 列表数据
      tableDataList: [],
      // 复选框
      multipleSelection: [],
    }
  },
  methods: {
    pageChange: function (pageNum) {
      // 点击某个分页按钮
      this.page = pageNum;
      this.searchList();
    },
    prevPageChange: function (pageNum) {
      // 点击分页的上一页
      this.page = pageNum;
      this.searchList();
    },
    nextPageChange: function (pageNum) {
      // 点击分页的下一页
      this.page = pageNum;
      this.searchList();
    },
    sizePageChange: function (rows) {
      // 改变每页条数时
      this.page = 1;
      this.rows = rows;
      this.searchList();
    },
    handleSelectionChange: function (arr) {
      //选择列
      this.multipleSelection = arr;
    },
    // 查询时间
    changeSearchTime: function (searchTime) {
      if (searchTime) {
        this.searchForm["startTime"] = this.dateFormatYYMMDD(searchTime[0]);
        this.searchForm["endTime"] = this.dateFormatYYMMDD(searchTime[1]);
      } else {
        this.searchForm["startTime"] = "";
        this.searchForm["endTime"] = "";
      }
      this.searchList();
    },
    dateFormatYYMMDD: function (date) { // 年月日插件值转换
      var val = date.getMonth() + 1;
      var monthVal = val < 10 ? '0' + val : '' + val;
      var yearVal = date.getFullYear();
      var val1 = date.getDate();
      var dayVal = val1 < 10 ? '0' + val1 : '' + val1;
      return yearVal + '-' + monthVal + '-' + dayVal;
    },
    // 时间格式化
    timeFormatter(row, type) {
      let dateStr = row[type.property];
      if (!dateStr) {
        return "";
      }
      return (
        dateStr.substr(0, 10)
        // dateStr.substr(0, 4) +
        // "/" +
        // dateStr.substr(4, 2) +
        // "/" +
        // dateStr.substr(6, 2)
        // +
        // ":" +
        // dateStr.substr(14, 2)
      );
    }
  },
  created() {
    // 这个生命周期是在使用组件的生命周期之前
    this.$nextTick().then(() => {
      // todo
    })
  }
}
export default list