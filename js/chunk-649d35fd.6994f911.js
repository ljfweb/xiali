(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-649d35fd","chunk-3db98b18"],{"162b":function(s,t,a){},"1dde":function(s,t,a){var e=a("d039"),i=a("b622"),r=a("2d00"),d=i("species");s.exports=function(s){return r>=51||!e((function(){var t=[],a=t.constructor={};return a[d]=function(){return{foo:1}},1!==t[s](Boolean).foo}))}},7984:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[a("div",{staticClass:"nav_wrap"},[a("p",{on:{click:function(t){return s.$router.push("/my")}}},[s._v(" < ")]),a("p",[s._v("---")])]),a("van-address-list",{attrs:{list:s.list,"disabled-list":s.disabledList,"disabled-text":"以下地址超出配送范围","default-tag-text":"默认"},on:{click:function(t){return s.turnorder()},add:s.onAdd,edit:s.onEdit,"click-item":s.changeadress},model:{value:s.chosenAddressId,callback:function(t){s.chosenAddressId=t},expression:"chosenAddressId"}})],1)},i=[],r=(a("d81d"),a("b0c0"),{name:"adress",data:function(){return{addressData:[],chosenAddressId:"1",list:[],disabledList:[{id:"3",name:"王五",tel:"1320000000",address:"浙江省杭州市滨江区江南大道 15 号"}]}},methods:{turnorder:function(){console.log(88888888888)},onAdd:function(){this.$router.push("/plusaddress")},onEdit:function(s){console.log(s),this.$router.push({name:"plusaddress",params:{raid:s.id}})},changeadress:function(s,t){console.log(this.addressData[t]),this.$emit("getdata",!1,this.addressData[t])}},created:function(){var s=this;this.axios.post("https://api.ymduo.com/Address/addresslists",this.$qs.stringify({uid:956519})).then((function(t){console.log(t);var a=t.data.result.data;s.addressData=t.data.result.data,console.log(s.addressData);var e=a.map((function(s){var t="";return t="1"==s.def,{id:s.id,tel:s.phone,address:s.address,name:s.name,isDefault:t}}));s.list=e}))}}),d=r,n=(a("ea27"),a("2877")),o=Object(n["a"])(d,e,i,!1,null,"4667d420",null);t["default"]=o.exports},bb2c:function(s,t,a){"use strict";var e=a("162b"),i=a.n(e);i.a},d81d:function(s,t,a){"use strict";var e=a("23e7"),i=a("b727").map,r=a("1dde"),d=a("ae40"),n=r("map"),o=d("map");e({target:"Array",proto:!0,forced:!n||!o},{map:function(s){return i(this,s,arguments.length>1?arguments[1]:void 0)}})},dbf5:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",[s.addressFlag?s._e():a("div",[a("van-nav-bar",{attrs:{title:"订单确认","left-text":"返回","right-text":"按钮","left-arrow":""},on:{"click-left":s.onClickLeft,"click-right":s.onClickRight}}),a("div",{staticClass:"address",on:{click:function(t){s.addressFlag=!0}}},[a("div",{staticClass:"name_phone"},[a("h2",[s._v(s._s(s.adress_list.name))]),a("span",[s._v(s._s(s.adress_list.phone))])]),a("div",{staticClass:"address_info"},[s._v(s._s(s.adress_list.address))])]),s._l(s.orderlist,(function(t,e){return a("div",{key:e,staticClass:"shop"},[a("div",{staticClass:"shop_title"},[a("h2",[s._v(" "+s._s(t.shop[0].shop_name)+" ")])]),a("div",{staticClass:"order_list"},s._l(t.shop,(function(t,e){return a("div",{key:e,staticClass:"order_one"},[a("img",{attrs:{src:t.image}}),a("div",{staticClass:"goods_info"},[a("div",{staticClass:"pname van-multi-ellipsis--l2"},[s._v(" "+s._s(t.goods_name)+" ")]),a("div",{staticClass:"sku"},[s._v("i7 1060 16g")]),a("div",{staticClass:"price"},[a("span",[s._v(s._s(t.price))]),a("span",[s._v("x"+s._s(t.goods_num))])])])])})),0)])})),a("div",{staticClass:"countpirce"},[a("div",[a("span",[s._v(" 商品金额 ：")]),a("span",[s._v(" "+s._s(Number(s.count_price)-Number(s.count_freight)))])]),a("div",[a("span",[s._v(" 运费 ：")]),s._v(" "),a("span",[s._v(" "+s._s(s.count_freight))])]),a("div",[s._v("实付金额："+s._s(s.count_price))])]),a("div",{staticClass:"btn_wrap"},[a("van-button",{attrs:{round:"",type:"success"}},[s._v("货到付款")]),a("van-button",{attrs:{round:"",type:"primary"},on:{click:s.turnchoosePay}},[s._v("在线支付")])],1)],2),s.addressFlag?a("address-com",{on:{getdata:s.getaddress}}):s._e()],1)},i=[],r=a("7984"),d={name:"order",components:{addressCom:r["default"]},data:function(){return{cartid:"",orderlist:[],count_price:0,count_freight:0,adress_list:{},addressFlag:!1}},created:function(){var s=this;console.log(8888888888888),this.$route.params.flag||(this.$store.commit("initAddress"),this.adress_list=this.$store.state.address),this.cartid=this.$route.params.cartid,this.axios({url:"https://api.ymduo.com/order/order_confirm",method:"post",data:this.$qs.stringify({userid:956519,cart_id:this.cartid,use_balance:0,use_integral:0,use_auction_integral:0,is_pei:0,pf:1,ymVoucher:"",address_id:""})}).then((function(t){console.log(t),"202"==t.data.code&&(s.$Toast.fail(t.data.msg),s.$router.push("/cart")),s.orderlist=t.data.result.data.info,s.count_price=t.data.result.data.count_price,s.count_freight=t.data.result.data.count_freight}))},methods:{getaddress:function(s,t){this.addressFlag=s,this.adress_list=t},onClickLeft:function(){this.$router.go(-1)},turnchoosePay:function(){this.$router.push({name:"choosePay",params:{cartid:this.cartid,addressid:this.adress_list.id}})},onClickRight:function(){},turnaddress:function(){this.$router.push("/address")}}},n=d,o=(a("bb2c"),a("2877")),c=Object(o["a"])(n,e,i,!1,null,"b4fa2b92",null);t["default"]=c.exports},e8cc:function(s,t,a){},ea27:function(s,t,a){"use strict";var e=a("e8cc"),i=a.n(e);i.a}}]);
//# sourceMappingURL=chunk-649d35fd.6994f911.js.map