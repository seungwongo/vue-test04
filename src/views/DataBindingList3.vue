<template>
  <div>
    <select v-model="selectedGender">
      <option value="">전체</option>
      <option value="male">남자</option>
      <option value="female">여자</option>
    </select>
    <input type="search" v-model="searchName" placeholder="Enter the name." />
    <button @click="getUserList">조회</button>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Company</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Gender</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="user._id" v-for="user in userList">
          <td>{{ user.name }}</td>
          <td>{{ user.company }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.phone }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// import ApiMixin from "../api.js";

export default {
  name: "",
  components: {},
  // mixins: [ApiMixin],
  data() {
    return {
      url: "https://b1e5b8ea-4ddb-49b8-9239-f62e6fea9a35.mock.pstmn.io/getUserList",
      userList: [],
      selectedGender: "",
      searchName: "",
    };
  },
  setup() {},
  created() {},
  mounted() {
    console.log("컴포넌트 mounted");
    // this.getUserList();
  },
  unmounted() {},
  methods: {
    async getUserList() {
      var users = (await this.$callAPI(this.url, "get", {})).data;

      if (this.selectedGender == "") {
        //성별 전체 선택
        if (this.searchName == "") {
          //이름 입력 안함
          this.userList = users; //전체 데이터
        } else {
          //이름 입력 함
          this.userList = users.filter(
            (u) =>
              u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1 //사용자 이름에서 입력한 이름을 포함하는 데이터
          );
        }
      } else {
        //성별을 남자 혹은 여자 선택한 경우
        if (this.searchName == "") {
          //이름 입력 안함
          this.userList = users.filter(
            (u) => u.gender == this.selectedGender //사용자 성별이 사용자가 선택한 성별에 맞는 데이터
          );
        } else {
          //이름 입력 함
          // this.userList = users.filter(
          //   (u) =>
          //     u.gender == this.selectedGender &&
          //     u.name.toLowerCase().indexOf(this.searchName.toLowerCase()) > -1 //성별과 이름을 조건 모두 만족하는 데이터
          // );

          var users2 = [];
          for (var user of userList) {
            if (
              user.gender == this.selectedGender &&
              user.name.toLowerCase.indexOf(this.searchName.toLowerCase()) > -1
            ) {
              users2.push(user);
            }
          }

          this.userList = users2;
        }
      }
    },
  },
};
</script>
<style scoped>
table {
  width: 100%;
}

table,
th,
td {
  border-collapse: collapse;
}

th,
td {
  border: 1px solid #222;
  padding: 10px;
}
</style>
