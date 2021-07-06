<template>
  <div>
    <h2>메뉴</h2>
    <div class="container">
      <button
        class="menu"
        @click="
          menu.isSelected = true;
          menu.qty++;
        "
        :key="menu.menuId"
        v-for="menu in menus"
      >
        {{ menu.menuName }}({{ menu.price }}원)
      </button>
    </div>
    <h2>선택한 메뉴</h2>
    <div class="container bg-primary">
      <table style="width: 100%">
        <thead>
          <tr>
            <th>메뉴명</th>
            <th>가격</th>
            <th>수량</th>
            <th>합계</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr
            :key="menu.menuId"
            v-for="menu in menus.filter((m) => m.isSelected)"
          >
            <td>{{ menu.menuName }}</td>
            <td>{{ menu.price }}</td>
            <td>
              <input type="number" v-model="menu.qty" style="width: 50px" />
            </td>
            <td>{{ menu.price * menu.qty }}</td>
            <td>
              <button
                @click="
                  menu.isSelected = false;
                  menu.qty = 0;
                "
              >
                삭제
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3" style="text-align: right">합계</td>
            <td>
              <strong>{{ total }}</strong>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
    <h2>제휴/할인카드/쿠폰</h2>
    <div id="divDiscount" class="container">
      <div>
        <select v-model.number="selectedCredit">
          <option value="0">신용카드를 선택하세요</option>
          <option
            :value="card.discount"
            :key="card.cardId"
            v-for="card in creditCards.filter((c) => c.cardType == 'CREDIT')"
          >
            {{ card.cardName }}
          </option>
        </select>
      </div>
      <div>
        <select v-model.number="selectedTelecom">
          <option value="0">통신사카드를 선택하세요</option>
          <option
            :value="card.discount"
            :key="card.cardId"
            v-for="card in creditCards.filter((c) => c.cardType == 'TELECOM')"
          >
            {{ card.cardName }}
          </option>
        </select>
      </div>
      <div>
        <select v-model.number="selectedPoint">
          <option value="0">포인트 결재를 선택하세요</option>
          <option
            :value="card.discount"
            :key="card.cardId"
            v-for="card in creditCards.filter((c) => c.cardType == 'POINT')"
          >
            {{ card.cardName }}
          </option>
        </select>
      </div>
      <div>
        <select v-model.number="selectedCashbag">
          <option value="0">OK캐시백을 선택하세요</option>
          <option
            :value="card.discount"
            :key="card.cardId"
            v-for="card in creditCards.filter((c) => c.cardType == 'OKCASHBAG')"
          >
            {{ card.cardName }}
          </option>
        </select>
      </div>
      <div>
        <select v-model="selectedCouponId">
          <option value="">할인쿠폰을 선택하세요</option>
          <option
            :value="coupon.couponId"
            :key="coupon.couponId"
            v-for="coupon in coupons"
          >
            {{ coupon.title }}
          </option>
        </select>
      </div>
    </div>
    <div style="padding: 10px; text-align: center">
      <button class="btn-cal" @click="calculateAmount">결제 금액 계산</button>
    </div>
    <div v-show="realTotal > 0">
      <h2>
        최종 결재 금액: <strong>{{ realTotal }}원</strong>
      </h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "",
  components: {},
  data() {
    return {
      menus: [
        {
          menuId: 1,
          menuName: "무제한 샐러드바",
          price: 25000,
        },
        {
          menuId: 2,
          menuName: "안심 스테이크(150g)",
          price: 35500,
        },
        {
          menuId: 3,
          menuName: "립아이 스테이크(220g)",
          price: 22500,
        },
        {
          menuId: 4,
          menuName: "채끝 등심 스테이크(210g)",
          price: 30500,
        },
        {
          menuId: 5,
          menuName: "자몽에이드",
          price: 6500,
        },
        {
          menuId: 6,
          menuName: "애플망고에이드",
          price: 6500,
        },
        {
          menuId: 7,
          menuName: "생맥주",
          price: 400,
        },
      ],
      creditCards: [
        {
          cardId: 1,
          cardType: "CREDIT",
          cardName: "CJ ONE 삼성카드",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 2,
          cardType: "CREDIT",
          cardName: "CJ ONE 신한카드",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 3,
          cardType: "CREDIT",
          cardName: "The CJ 카드",
          discount: 22,
          discountType: "%",
        },
        {
          cardId: 4,
          cardType: "CREDIT",
          cardName: "삼성 6 V4카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 5,
          cardType: "CREDIT",
          cardName: "신한 Lady카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 6,
          cardType: "CREDIT",
          cardName: "삼성 SFC",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 7,
          cardType: "CREDIT",
          cardName: "삼성 S클라스",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 8,
          cardType: "CREDIT",
          cardName: "하나 Yes OK Saver",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 9,
          cardType: "CREDIT",
          cardName: "홈플러스 하나줄리엣카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 10,
          cardType: "CREDIT",
          cardName: "하나 줄리엣카드 & Yes 4u shopping",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 11,
          cardType: "CREDIT",
          cardName: "KB Star",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 12,
          cardType: "CREDIT",
          cardName: "이마트 KB카드",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 13,
          cardType: "TELECOM",
          cardName: "KT 멤버십 일반 할인",
          discount: 5,
          discountType: "%",
        },
        {
          cardId: 14,
          cardType: "TELECOM",
          cardName: "KT 멤버십 VIP 할인",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 15,
          cardType: "TELECOM",
          cardName: "T 멤버십 실버 할인",
          discount: 5,
          discountType: "%",
        },
        {
          cardId: 16,
          cardType: "TELECOM",
          cardName: "T 멤버십 VIP/골드 할인",
          discount: 15,
          discountType: "%",
        },
        {
          cardId: 17,
          cardType: "OKCASHBAG",
          cardName: "OK캐시백",
          discount: 30,
          discountType: "%",
        },
        {
          cardId: 18,
          cardType: "POINT",
          cardName: "BC Top 포인트",
          discount: 100,
          discountType: "%",
        },
        {
          cardId: 19,
          cardType: "POINT",
          cardName: "기아멤버스 카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 20,
          cardType: "POINT",
          cardName: "삼성카드 포인트",
          discount: 100,
          discountType: "%",
        },
        {
          cardId: 21,
          cardType: "POINT",
          cardName: "현대카드 M",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 22,
          cardType: "POINT",
          cardName: "신한 Hi-Point 카드",
          discount: 20,
          discountType: "%",
        },
        {
          cardId: 23,
          cardType: "POINT",
          cardName: "블루멤버스 카드",
          discount: 20,
          discountType: "%",
        },
      ],
      coupons: [
        {
          couponId: 1,
          title: "5% 할인쿠폰(중복할인 가능)",
          discount: 5,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 2,
          title: "10% 할인쿠폰(중복할인 가능)",
          discount: 10,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 3,
          title: "15% 할인쿠폰(중복할인 가능)",
          discount: 15,
          doubleDiscount: true,
          discountType: "%",
        },
        {
          couponId: 4,
          title: "5000 할인쿠폰(중복할인 가능)",
          discount: 5000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 5,
          title: "10,000 할인쿠폰(중복할인 가능)",
          discount: 10000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 6,
          title: "20,000 할인쿠폰(중복할인 가능)",
          discount: 20000,
          doubleDiscount: true,
          discountType: "",
        },
        {
          couponId: 7,
          title: "5% 할인쿠폰(중복할인 불가능)",
          discount: 5,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 8,
          title: "10% 할인쿠폰(중복할인 불가능)",
          discount: 10,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 9,
          title: "15% 할인쿠폰(중복할인 불가능)",
          discount: 15,
          doubleDiscount: false,
          discountType: "%",
        },
        {
          couponId: 10,
          title: "5000 할인쿠폰(중복할인 불가능)",
          discount: 5000,
          doubleDiscount: false,
          discountType: "",
        },
        {
          couponId: 11,
          title: "10,000 할인쿠폰(중복할인 불가능)",
          discount: 10000,
          doubleDiscount: false,
          discountType: "",
        },
        {
          couponId: 12,
          title: "20,000 할인쿠폰(중복할인 불가능)",
          discount: 20000,
          doubleDiscount: false,
          discountType: "",
        },
      ],
      selectedCredit: 0,
      selectedTelecom: 0,
      selectedPoint: 0,
      selectedCashbag: 0,
      selectedCouponId: "",
      realTotal: 0,
    };
  },
  computed: {
    total() {
      // return this.menus
      //   .filter((m) => m.isSelected)
      //   .reduce((t, o) => t + o.price * o.qty, 0);
      var sum = 0;
      for (var menu of this.menus) {
        if (menu.isSelected) {
          sum += menu.price * menu.qty;
        }
      }

      return sum;
    },
  },
  setup() {},
  created() {
    this.menus = this.menus.map((m) => {
      return {
        menuId: m.menuId,
        menuName: m.menuName,
        price: m.price,
        qty: 0,
        isSelected: false,
      };
    });
    console.table(this.menus);
  },
  mounted() {},
  unmounted() {},
  methods: {
    calculateAmount() {
      let realTotal = this.total;
      let couponDiscount = 0;
      if (this.selectedCouponId != "") {
        let coupon = this.coupons.filter(
          (c) => c.couponId == this.selectedCouponId
        )[0];
        if (coupon.doubleDiscount) {
          if (coupon.discountType == "%") {
            couponDiscount = this.total * (coupon.discount / 100);
          } else {
            couponDiscount = coupon.discount;
          }

          realTotal -= couponDiscount;
          realTotal -= this.getCardDiscount(realTotal);
        } else {
          let cardDiscount = this.getCardDiscount(realTotal);
          if (cardDiscount >= couponDiscount) {
            realTotal -= cardDiscount;
          } else {
            realTotal -= couponDiscount;
          }
        }
      } else {
        realTotal -= this.getCardDiscount(realTotal);
      }

      this.realTotal = realTotal;
    },
    getCardDiscount(amount) {
      if (
        amount == 0 ||
        (this.selectedCredit == 0 &&
          this.selectedTelecom == 0 &&
          this.selectedPoint == 0 &&
          this.selectedCashbag == 0)
      ) {
        return 0;
      }

      return (
        amount *
        (Math.max(
          this.selectedCredit,
          this.selectedTelecom,
          this.selectedPoint,
          this.selectedCashbag
        ) /
          100)
      );
    },
  },
};
</script>
<style scoped>
* {
  box-sizing: border-box;
}

button.menu {
  padding: 5px;
  margin: 5px;
  background-color: aquamarine;
  border-radius: 10px;
  font-size: large;
}

.container {
  border: 1px solid #222;
  background-color: aliceblue;
  padding: 20px;
  margin-bottom: 10px;
}

.bg-primary {
  background-color: beige !important;
}

.bg-secondary {
  background-color: bisque !important;
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

select {
  font-size: large;
  width: 100%;
  padding: 5px;
  margin-bottom: 5px;
}

.btn-cal {
  font-size: large;
  padding: 15px;
  background-color: blueviolet;
  color: white;
  border-radius: 10px;
}
</style>
