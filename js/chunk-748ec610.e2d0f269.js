(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-748ec610"],{"08bc":function(t,e,s){"use strict";var i=s("8277"),a=s.n(i);a.a},1029:function(t,e,s){"use strict";var i=s("e468"),a=s.n(i);a.a},"2ebd":function(t,e,s){},"48cb":function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"Goods"},[s("van-notify",{attrs:{value:t.isDangerShow,type:"danger",color:"#ffe7e2"}},[s("span",[t._v("放回商品时，请把商品放回原位，以免产生扣款")])]),s("goods-list",{attrs:{goodsListArr:t.goodsListArr,finished:!0}}),s("total-price",{model:{value:t.showPanel,callback:function(e){t.showPanel=e},expression:"showPanel"}},[s("selected-goods-list",{attrs:{selectedList:t.goodsListArr},model:{value:t.showPanel,callback:function(e){t.showPanel=e},expression:"showPanel"}})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"GoodsList"},[s("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了"},on:{load:t.TouchLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.goodsListArr,(function(e){return s("van-cell",{key:e.id,staticClass:"GoodsList-cell"},[s("div",{staticClass:"GoodsList-item",class:{active:1==e.id}},[s("div",{staticClass:"item-left"},[s("van-image",{staticClass:"item-left-img",attrs:{width:"80px",height:"100px",fit:"cover",src:e.images},scopedSlots:t._u([{key:"loading",fn:function(){return[s("van-loading",{attrs:{type:"spinner",size:"20"}})]},proxy:!0}],null,!0)})],1),s("div",{staticClass:"item-middle"},[s("div",{staticClass:"name"},[t._v(t._s(e.title))]),s("div",{staticClass:"Price"},[t._v("价格:"+t._s(e.price)+"/千克")]),s("div",{staticClass:"stock"},[t._v("库存:"+t._s(e.stock)+"/千克")])]),s("div",{staticClass:"item-right"},[t._v("¥ "+t._s(e.price)+" 元")])])])})),1)],1)},n=[],c={name:"GoodsList",props:{finished:{type:Boolean,default:!1},goodsListArr:Array},data:function(){return{loading:!1}},components:{},created:function(){},methods:{TouchLoad:function(){}}},r=c,d=(s("ae68"),s("2877")),l=Object(d["a"])(r,o,n,!1,null,"9a36099c",null),u=l.exports,p=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"TotalPrice"},[i("div",{staticClass:"showconsole",on:{click:function(e){return t.$emit("input",!t.value)}}},[i("div",{staticClass:"left-img"},[i("div",{staticClass:"tag"},[i("van-tag",{attrs:{mark:"",type:"danger"}},[i("van-icon",{attrs:{name:"cross"}}),t._v("1 ")],1)],1),i("img",{attrs:{src:s("bb33"),alt:""}})]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.value,expression:"!value"}],staticClass:"middle"},[i("van-icon",{attrs:{name:"arrow-up"}}),i("span",[t._v("点击展开")])],1),t._m(0)]),t._t("default")],2)},m=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"right"},[t._v(" ¥ "),s("span",[t._v("17.00")]),t._v(" 元 ")])}],_={name:"TotalPrice",props:{value:{type:Boolean,default:!1}},data:function(){return{}},components:{},methods:{}},v=_,g=(s("08bc"),Object(d["a"])(v,p,m,!1,null,"ac880b66",null)),h=g.exports,f=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"SelectedGoodsList"},[s("van-action-sheet",{attrs:{value:t.value,title:"已选商品"},on:{input:function(e){return t.$emit("input",!1)}}},[s("div",{staticClass:"content"},[s("van-list",t._l(t.selectedList,(function(e){return s("van-cell",{directives:[{name:"show",rawName:"v-show",value:0!=t.total(e.price,e.measure_weight),expression:"total(item.price, item.measure_weight) != 0"}],key:e.id},[0!=t.total(e.price,e.measure_weight)?s("div",{staticClass:"item"},[s("div",{staticClass:"item-img"},[s("van-image",{staticClass:"img",attrs:{width:"80px",height:"54px",fit:"contain",src:e.images}})],1),s("div",{staticClass:"item-left"},[s("div",{staticClass:"title"},[t._v(t._s(e.title))]),s("div",{staticClass:"price"},[s("i",[t._v("￥")]),s("span",[t._v(t._s(e.price))]),s("i",[t._v("/kg")])])]),s("div",{staticClass:"total"},[s("div",{staticClass:"weight"},[t._v("重量:"+t._s(e.measure_weight)+"/kg")]),s("div",{staticClass:"count-price"},[t._v("总价：¥"+t._s(t.total(e.price,e.measure_weight)))])])]):t._e()])})),1)],1)])],1)},b=[],w=(s("b680"),{name:"SelectedGoodsList",props:{value:{type:Boolean,default:!1},selectedList:Array},data:function(){return{}},components:{},methods:{total:function(t,e){return(t*e).toFixed(2)}},computed:{}}),C=w,x=(s("c019"),Object(d["a"])(C,f,b,!1,null,"7609feb6",null)),k=x.exports,L={name:"Goods",data:function(){return{isDangerShow:!0,showPanel:!1,goodsListArr:[{id:37,door_id:5,number:1,title:"三文鱼",product_id:25,cost_price:700,price:7.5,stock:1.5,measure_type:2,measure_weight:500,status:1,update_time:"2020-08-06 09:32:18",add_time:"2020-07-18 11:31:56",product_name:"三文鱼",images:"http://test.zizhuxitong.com/data_api/public/uploads/product/25/5f126b4b80072.png"},{id:38,door_id:5,number:2,title:"淡水鸭",product_id:26,cost_price:800,price:8,stock:0,measure_type:1,measure_weight:0,status:1,update_time:"2020-08-06 09:32:18",add_time:"2020-07-18 11:32:43",product_name:"淡水鸭",images:"http://test.zizhuxitong.com/data_api/public/uploads/product/26/5f126b7520a36.png"},{id:39,door_id:5,number:3,title:"猪肉",product_id:27,cost_price:900,price:9,stock:0,measure_type:1,measure_weight:0,status:1,update_time:"2020-08-06 09:32:18",add_time:"2020-07-18 11:33:07",product_name:"猪肉",images:"http://test.zizhuxitong.com/data_api/public/uploads/product/27/5f126b9723158.png"},{id:40,door_id:5,number:4,title:"螃蟹",product_id:28,cost_price:1e3,price:10,stock:0,measure_type:1,measure_weight:0,status:1,update_time:"2020-08-06 09:32:18",add_time:"2020-07-18 11:33:32",product_name:"螃蟹",images:"http://test.zizhuxitong.com/data_api/public/uploads/product/28/5f126c2662b45.png"},{id:42,door_id:5,number:5,title:"皮皮虾",product_id:24,cost_price:600,price:6,stock:.183,measure_type:1,measure_weight:0,status:1,update_time:"2020-08-06 09:32:18",add_time:"2020-07-18 11:35:35",product_name:"皮皮虾",images:"http://test.zizhuxitong.com/data_api/public/uploads/product/24/5f126b2e65b73.png"}]}},components:{GoodsList:u,TotalPrice:h,SelectedGoodsList:k},methods:{},created:function(){console.log(this.$route)}},y=L,z=(s("1029"),Object(d["a"])(y,i,a,!1,null,"3c483556",null));e["default"]=z.exports},8277:function(t,e,s){},ae68:function(t,e,s){"use strict";var i=s("d2cc"),a=s.n(i);a.a},bb33:function(t,e,s){t.exports=s.p+"img/shopping.e2045b43.png"},c019:function(t,e,s){"use strict";var i=s("2ebd"),a=s.n(i);a.a},d2cc:function(t,e,s){},e468:function(t,e,s){}}]);
//# sourceMappingURL=chunk-748ec610.e2d0f269.js.map