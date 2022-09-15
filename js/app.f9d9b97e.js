(function(){var e={9417:function(e){const t=e=>Math.round(100*e)/100,a=function({amount:e,yearlyRate:a,period:r,numYearlyPayments:n}){const o=parseFloat(e);if("number"!==typeof e||isNaN(o)||o<0)return console.log(`calculatePayment: amount ${e} is invalid`),0;const l=parseFloat(a);if("number"!==typeof a||isNaN(l)||l<=0||l>1)return console.log(`calculatePayment: yearlyRate ${a} is invalid`),0;const u=parseInt(r);if("number"!==typeof r||isNaN(u)||u<1||u>30)return console.log(`calculatePayment: period ${r} is invalid`),0;const i=parseInt(n);if("number"!==typeof n||i<=0)return console.log(`calculatePayment: numYearlyPayments ${n} is invalid`),0;const m=l/i,s=i*u,c=(1+m)**s,d=o*m*c/(c-1);return t(d)},r=function({payment:e,initalAmount:a,yearlyRate:r,period:n,numYearlyPayments:o}){const l=r/o,u=o*n,i=[];let m=a,s=0;for(let c=0;c<u;c++){const a=t(e-m*l),r=t(e-a);m-=t(a),s+=t(r),i.push({period:c+1,principalPayment:a,interestPayment:r,principalBalance:t(m),interestPaid:t(s)})}return i};e.exports={round:t,calculatePayment:a,calculateAmortizationSchedule:r}},323:function(e){const t=e=>{const t=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2});return t.format(e)};e.exports={formatCurrency:t}},5705:function(e,t,a){"use strict";var r=a(9242),n=a(3396),o=a(7718),l=a(3369),u=a(6824),i=a(8521),m=a(9271);const s=(0,n._)("h1",null,"Mortgage Calculator",-1);function c(e,t,a,r,c,d){const f=(0,n.up)("FormComponent"),p=(0,n.up)("DonutChart"),y=(0,n.up)("SummaryComponent"),h=(0,n.up)("ScheduleTable");return(0,n.wg)(),(0,n.j4)(o.q,null,{default:(0,n.w5)((()=>[(0,n.Wm)(m.O,null,{default:(0,n.w5)((()=>[(0,n.Wm)(l.K,{class:"main-content"},{default:(0,n.w5)((()=>[(0,n.Wm)(u.o,{class:"text-center"},{default:(0,n.w5)((()=>[(0,n.Wm)(i.D,{cols:"12"},{default:(0,n.w5)((()=>[s])),_:1}),(0,n.Wm)(i.D,{sm:"12",md:"7"},{default:(0,n.w5)((()=>[(0,n.Wm)(f)])),_:1}),(0,n.Wm)(i.D,{sm:"12",md:"5"},{default:(0,n.w5)((()=>[(0,n.Wm)(p)])),_:1}),(0,n.Wm)(i.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(y)])),_:1}),(0,n.Wm)(i.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(h)])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var d=a(870),f=a(1243),p=a(6353),y=a(9671),h=a(5869);const v=(0,n.Uk)("Calculate "),b=(0,n.Uk)(" Invalid Input ");function g(e,t,a,r,o,m){return(0,n.wg)(),(0,n.iD)("form",null,[(0,n.Wm)(l.K,null,{default:(0,n.w5)((()=>[(0,n.Wm)(u.o,{"no-gutters":""},{default:(0,n.w5)((()=>[(0,n.Wm)(i.D,{cols:"12"},{default:(0,n.w5)((()=>[(0,n.Wm)(h.h,{modelValue:e.amount,"onUpdate:modelValue":t[0]||(t[0]=t=>e.amount=t),label:"Mortgage Amount",variant:"outlined",required:"","hide-details":"auto",rules:[e=>!!e||"Amount is required",e=>parseFloat(e)>0||"Amount must be greater than 0"]},null,8,["modelValue","rules"]),(0,n.Wm)(p.R,{color:"#3c89ff",modelValue:e.amount,"onUpdate:modelValue":t[1]||(t[1]=t=>e.amount=t),min:0,max:1e6,step:1e4,"thumb-label":""},null,8,["modelValue"])])),_:1})])),_:1}),(0,n.Wm)(u.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.D,{cols:"12",md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(h.h,{modelValue:e.rate,"onUpdate:modelValue":t[2]||(t[2]=t=>e.rate=t),label:"Interest Rate",type:"number",variant:"outlined",suffix:"%",required:"","hide-details":"auto",rules:[e=>!!e||"Rate is required",e=>parseFloat(e)>0||"Rate must be greater than 0",e=>parseFloat(e)<100||"Rate must be less than 100"]},null,8,["modelValue","rules"]),(0,n.Wm)(p.R,{color:"#3c89ff",modelValue:e.rate,"onUpdate:modelValue":t[3]||(t[3]=t=>e.rate=t),min:0,max:100,step:1,"thumb-label":""},null,8,["modelValue"])])),_:1}),(0,n.Wm)(i.D,{cols:"12",md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.r,{modelValue:e.term,"onUpdate:modelValue":t[4]||(t[4]=t=>e.term=t),items:e.terms,"item-title":"label",label:"Term",required:"",variant:"outlined"},null,8,["modelValue","items"])])),_:1})])),_:1}),(0,n.Wm)(u.o,null,{default:(0,n.w5)((()=>[(0,n.Wm)(i.D,{cols:"12",md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.r,{modelValue:e.period,"onUpdate:modelValue":t[5]||(t[5]=t=>e.period=t),items:e.periods,"item-title":"label",label:"Amortization Period",required:"",variant:"outlined"},null,8,["modelValue","items"])])),_:1}),(0,n.Wm)(i.D,{cols:"12",md:"6"},{default:(0,n.w5)((()=>[(0,n.Wm)(f.r,{modelValue:e.frequency,"onUpdate:modelValue":t[6]||(t[6]=t=>e.frequency=t),items:e.frequencies,"item-title":"label",label:"Frequency",required:"",variant:"outlined"},null,8,["modelValue","items"])])),_:1}),(0,n.Wm)(i.D,{cols:"12",class:"d-flex justify-end"},{default:(0,n.w5)((()=>[(0,n.Wm)(d.T,{color:"#3c89ff",variant:"outlined",onClick:m.onSubmit},{default:(0,n.w5)((()=>[v])),_:1},8,["onClick"])])),_:1})])),_:1})])),_:1}),(0,n.Wm)(y.v,{modelValue:e.hasError,"onUpdate:modelValue":t[7]||(t[7]=t=>e.hasError=t),color:"error"},{default:(0,n.w5)((()=>[b])),_:1},8,["modelValue"])])}var w=a(7139),_=a(9417),P={name:"FormComponent",data:()=>({amount:1e5,rate:5,period:25,periods:null,frequency:12,frequencies:[{value:52,label:"Weekly"},{value:26,label:"Bi-Weekly"},{value:24,label:"Semi-Monthly"},{value:12,label:"Monthly"}],term:5,terms:null,hasError:!1}),computed:{},created(){this.terms=this.generateTerms(10),this.periods=this.generatePeriods(6)},methods:{...(0,w.nv)(["updateSchedule","updateSummary"]),generateTerms(e){const t=Array(e).fill(0).map(((e,t)=>({value:t+1,label:`${t+1} Years`})));return t[0].label="1 Year",t},generatePeriods(e){const t=Array(e).fill(0).map(((e,t)=>{const a=5*(t+1);return{value:a,label:`${a} Years`}}));return t},onSubmit(){const e=parseFloat(this.amount),t=parseFloat(this.rate),a=parseInt(this.period),r=parseInt(this.frequency),n=parseInt(this.term);return isNaN(e)||isNaN(t)||isNaN(a)||isNaN(r)||isNaN(n)||e<0||!(0<t&&t<100)?(console.error("Invalid input"),void(this.hasError=!0)):void this.calculateMortgage({amount:e,rate:t,period:a,frequency:r,term:n})},calculateMortgage({amount:e,rate:t,period:a,frequency:r,term:n}){const o=parseFloat(t)/100,l=parseInt(r),u=(0,_.calculatePayment)({amount:e,yearlyRate:o,period:a,numYearlyPayments:l});if(0===u)return console.error("Invalid input"),void(this.hasError=!0);const i=(0,_.calculateAmortizationSchedule)({payment:u,initalAmount:e,yearlyRate:o,period:a,numYearlyPayments:l});this.updateSchedule({schedule:i});const m=l*a,s=(0,_.round)(i[i.length-1].interestPaid),c=n*l,d=i[c-1],f=e-d.principalBalance,p=d.interestPaid,y=f+p,h={amount:e,period:a,totalPayments:m,yearlyPayments:l,payment:u,totalInterest:s,totalPaid:(0,_.round)(e+s),term:{period:n,payments:c,principalPaid:f,interestPaid:p,totalPaid:y,balance:d.principalBalance}};this.updateSummary({summary:h})}}},W=a(89);const S=(0,W.Z)(P,[["render",g]]);var k=S,z=a(2268);const x={key:0},O=(0,n._)("h4",null,"Regular Payment",-1),V={class:"mb-4"},C=(0,n.Uk)(" Total Paid ");function D(e,t,a,r,o,l){const u=(0,n.up)("vc-donut");return e.summary?((0,n.wg)(),(0,n.iD)("div",x,[O,(0,n._)("h2",V,(0,z.zw)(l.format(e.summary.payment)),1),(0,n.Wm)(u,{background:"white",size:300,thickness:30,"has-legend":"","legend-placement":"bottom",sections:l.sections,total:l.total},{default:(0,n.w5)((()=>[C,(0,n._)("h4",null,(0,z.zw)(l.format(l.total)),1)])),_:1},8,["sections","total"])])):(0,n.kq)("",!0)}var q=a(323),j={name:"DonutChart",data(){return{}},computed:{...(0,w.Se)(["summary"]),sections(){return this.summary?[{label:`${this.format(this.summary.totalInterest)} Interest`,value:this.summary.totalInterest,color:"#f64e00"},{label:`${this.format(this.summary.amount)} Loan`,value:this.summary.amount,color:"#3c89ff"}]:[]},total(){return this.summary?this.summary.totalPaid:0}},methods:{format(e){return(0,q.formatCurrency)(e)}}};const N=(0,W.Z)(j,[["render",D]]);var I=N,T=a(4413);const A={key:0,class:"mb-2 text-left"},F=(0,n._)("thead",null,[(0,n._)("tr",null,[(0,n._)("th",{class:"text-left"},"Period"),(0,n._)("th",{class:"text-right"},"Principal Payment"),(0,n._)("th",{class:"text-right"},"Interest Payment"),(0,n._)("th",{class:"text-right"},"Total Payment"),(0,n._)("th",{class:"text-right"},"Interest Paid"),(0,n._)("th",{class:"text-right"},"Principal Balance")])],-1),R={class:"text-left"},M={class:"text-right"},U={class:"text-right"},E={class:"text-right"},Y={class:"text-right"},$={class:"text-right"};function B(e,t,a,r,o,l){return(0,n.wg)(),(0,n.iD)(n.HY,null,[e.schedule.length>0?((0,n.wg)(),(0,n.iD)("h2",A,"Payment Schedule")):(0,n.kq)("",!0),e.schedule.length>0?((0,n.wg)(),(0,n.j4)(T.Y,{key:1},{default:(0,n.w5)((()=>[F,(0,n._)("tbody",null,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(e.schedule,(e=>((0,n.wg)(),(0,n.iD)("tr",{key:e.period},[(0,n._)("td",R,(0,z.zw)(e.period),1),(0,n._)("td",M,(0,z.zw)(l.format(e.principalPayment)),1),(0,n._)("td",U,(0,z.zw)(l.format(e.interestPayment)),1),(0,n._)("td",E,(0,z.zw)(l.format(e.principalPayment+e.interestPayment)),1),(0,n._)("td",Y,(0,z.zw)(l.format(e.interestPaid)),1),(0,n._)("td",$,(0,z.zw)(l.format(e.principalBalance)),1)])))),128))])])),_:1})):(0,n.kq)("",!0)],64)}var Z={name:"ScheduleTable",props:{},data:()=>({}),computed:{...(0,w.Se)(["schedule"])},methods:{format(e){return(0,q.formatCurrency)(e)}}};const K=(0,W.Z)(Z,[["render",B]]);var L=K;const H={key:0,class:"text-left"},G=(0,n._)("h2",{class:"mb-2"},"Mortgage Summary",-1),J={class:"ml-8 mb-2"},Q={class:"ml-8 mb-2"},X={class:"ml-8"};function ee(e,t,a,r,o,l){return e.summary?((0,n.wg)(),(0,n.iD)("div",H,[G,(0,n._)("h4",null,"Over the "+(0,z.zw)(e.summary.period)+"-year amortization period, you will:",1),(0,n._)("ul",J,[(0,n._)("li",null," have made "+(0,z.zw)(e.summary.totalPayments)+" payments ("+(0,z.zw)(e.summary.yearlyPayments)+"x per year) payments of "+(0,z.zw)(l.format(e.summary.payment))+". ",1),(0,n._)("li",null," have paid "+(0,z.zw)(l.format(e.summary.amount))+" in principal, "+(0,z.zw)(l.format(e.summary.totalInterest))+" in interest, for a total of "+(0,z.zw)(l.format(e.summary.totalPaid))+". ",1)]),(0,n._)("h4",null,"Over the "+(0,z.zw)(l.term.period)+"-year term, you will:",1),(0,n._)("ul",Q,[(0,n._)("li",null," have made "+(0,z.zw)(l.term.payments)+" payments ("+(0,z.zw)(e.summary.yearlyPayments)+"x per year) payments of "+(0,z.zw)(l.format(e.summary.payment))+". ",1),(0,n._)("li",null," have paid "+(0,z.zw)(l.format(l.term.principalPaid))+" in principal, "+(0,z.zw)(l.format(l.term.interestPaid))+" in interest, for a total of "+(0,z.zw)(l.format(l.term.totalPaid))+". ",1)]),(0,n._)("h4",null,"At the end of your "+(0,z.zw)(l.term.period)+"-year term, you will:",1),(0,n._)("ul",X,[(0,n._)("li",null,"have a balance of "+(0,z.zw)(l.format(l.term.balance))+".",1)])])):(0,n.kq)("",!0)}var te={name:"SummaryComponent",props:{},data:()=>({}),computed:{...(0,w.Se)(["summary"]),term(){return this.summary.term}},methods:{format(e){return(0,q.formatCurrency)(e)}}};const ae=(0,W.Z)(te,[["render",ee]]);var re=ae,ne={name:"App",components:{FormComponent:k,DonutChart:I,ScheduleTable:L,SummaryComponent:re},data:()=>({})};const oe=(0,W.Z)(ne,[["render",c]]);var le=oe,ue=(0,w.MT)({state:{schedule:[],summary:{period:25,yearlyPayments:12,payment:584.59,amount:1e5,totalPayments:300,totalInterest:75377.05,totalPaid:175377.05,term:{period:5,payments:60,principalPaid:11419.82,interestPaid:23655.58,totalPaid:5075.4,balance:88580.18}}},getters:{schedule:e=>e.schedule,summary:e=>e.summary},mutations:{setSchedule(e,{schedule:t}){e.schedule=t},setSummary(e,{summary:t}){e.summary=t}},actions:{updateSchedule({commit:e},{schedule:t}){e("setSchedule",{schedule:t})},updateSummary({commit:e},{summary:t}){e("setSummary",{summary:t})}},modules:{}}),ie=(a(9773),a(8685)),me=(0,ie.Rd)(),se=a(3),ce=a.n(se);async function de(){const e=await a.e(461).then(a.t.bind(a,3657,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}de(),(0,r.ri)(le).use(ue).use(me).use(ce()).mount("#app")}},t={};function a(r){var n=t[r];if(void 0!==n)return n.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,a),o.exports}a.m=e,function(){var e=[];a.O=function(t,r,n,o){if(!r){var l=1/0;for(s=0;s<e.length;s++){r=e[s][0],n=e[s][1],o=e[s][2];for(var u=!0,i=0;i<r.length;i++)(!1&o||l>=o)&&Object.keys(a.O).every((function(e){return a.O[e](r[i])}))?r.splice(i--,1):(u=!1,o<l&&(l=o));if(u){e.splice(s--,1);var m=n();void 0!==m&&(t=m)}}return t}o=o||0;for(var s=e.length;s>0&&e[s-1][2]>o;s--)e[s]=e[s-1];e[s]=[r,n,o]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){var e,t=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};a.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"===typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"===typeof r.then)return r}var o=Object.create(null);a.r(o);var l={};e=e||[null,t({}),t([]),t(t)];for(var u=2&n&&r;"object"==typeof u&&!~e.indexOf(u);u=t(u))Object.getOwnPropertyNames(u).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},a.d(o,l),o}}(),function(){a.d=function(e,t){for(var r in t)a.o(t,r)&&!a.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){a.f={},a.e=function(e){return Promise.all(Object.keys(a.f).reduce((function(t,r){return a.f[r](e,t),t}),[]))}}(),function(){a.u=function(e){return"js/webfontloader.3c3b6a31.js"}}(),function(){a.miniCssF=function(e){}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="mortgage-calculator:";a.l=function(r,n,o,l){if(e[r])e[r].push(n);else{var u,i;if(void 0!==o)for(var m=document.getElementsByTagName("script"),s=0;s<m.length;s++){var c=m[s];if(c.getAttribute("src")==r||c.getAttribute("data-webpack")==t+o){u=c;break}}u||(i=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,a.nc&&u.setAttribute("nonce",a.nc),u.setAttribute("data-webpack",t+o),u.src=r),e[r]=[n];var d=function(t,a){u.onerror=u.onload=null,clearTimeout(f);var n=e[r];if(delete e[r],u.parentNode&&u.parentNode.removeChild(u),n&&n.forEach((function(e){return e(a)})),t)return t(a)},f=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),i&&document.head.appendChild(u)}}}(),function(){a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){a.p="/mortgage-calculator/"}(),function(){var e={143:0};a.f.j=function(t,r){var n=a.o(e,t)?e[t]:void 0;if(0!==n)if(n)r.push(n[2]);else{var o=new Promise((function(a,r){n=e[t]=[a,r]}));r.push(n[2]=o);var l=a.p+a.u(t),u=new Error,i=function(r){if(a.o(e,t)&&(n=e[t],0!==n&&(e[t]=void 0),n)){var o=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;u.message="Loading chunk "+t+" failed.\n("+o+": "+l+")",u.name="ChunkLoadError",u.type=o,u.request=l,n[1](u)}};a.l(l,i,"chunk-"+t,t)}},a.O.j=function(t){return 0===e[t]};var t=function(t,r){var n,o,l=r[0],u=r[1],i=r[2],m=0;if(l.some((function(t){return 0!==e[t]}))){for(n in u)a.o(u,n)&&(a.m[n]=u[n]);if(i)var s=i(a)}for(t&&t(r);m<l.length;m++)o=l[m],a.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return a.O(s)},r=self["webpackChunkmortgage_calculator"]=self["webpackChunkmortgage_calculator"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=a.O(void 0,[998],(function(){return a(5705)}));r=a.O(r)})();
//# sourceMappingURL=app.f9d9b97e.js.map