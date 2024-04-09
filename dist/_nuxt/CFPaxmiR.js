import{L as x,r as d,d as m,v as _,x as s,y as i,B as r,t as v,M as p,N as g,O as w,_ as U}from"./BKHz9Ayw.js";const k=async(t,a)=>$fetch("/user",{method:"POST",body:{id:t,password:a}}).catch(n=>n.data),B=x("user",()=>{const t=d(void 0);return{user:t,getUserData:async(n,u)=>{const o=await k(n,u);if("message"in o){alert(o.message);return}t.value=o}}}),D=m({__name:"ViewUser",props:{user:{type:Object,required:!0}},setup(t){return(a,n)=>(v(),_("div",null,[s("p",null,"名前: "+i(t.user.name),1),r(),s("p",null,"メールアドレス: "+i(t.user.email),1),r(),s("p",null,"権限: "+i(t.user.type),1)]))}}),I=["value"],S=["value"],b={class:"button-wrapper"},N=m({__name:"index",setup(t){const a=B(),n=d(void 0),u=d(void 0),o=l=>{const e=l.target;n.value=e==null?void 0:e.value},f=l=>{const e=l.target;u.value=e==null?void 0:e.value},y=async()=>{n.value===void 0||u.value===void 0||await a.getUserData(n.value,u.value)};return(l,e)=>(v(),_("div",null,[s("p",null,[r(`
      ID
      `),s("input",{value:n.value,onInput:e[0]||(e[0]=c=>o(c))},null,40,I)]),r(),s("p",null,[r(`
      パスワード
      `),s("input",{value:u.value,onInput:e[1]||(e[1]=c=>f(c))},null,40,S)]),r(),s("div",b,[s("button",{onClick:e[2]||(e[2]=c=>y())},`
        確認
      `)]),r(),p(a).user!==void 0?(v(),g(D,{key:0,user:p(a).user},null,8,["user"])):w("",!0)]))}}),C=U(N,[["__scopeId","data-v-7a7adafc"]]);export{C as default};
