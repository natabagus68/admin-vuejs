import{_ as d,a as u,r as c,o as p,c as b,b as e,g as m,k as o,v as r,i as h,w as x}from"./index-e84eaf86.js";const f={data(){return{username:"",email:"",password:"",phone:"",address:""}},methods:{onSubmit:async function(){try{await u({method:"post",url:"https://server-kfc-deploy-production.up.railway.app/register",data:{username:this.username,email:this.email,password:this.password,phone:this.phone,address:this.address}}),this.$router.push("/")}catch(a){console.log(a)}}}},w={class:"container mx-auto px-4 h-full"},_={class:"flex content-center items-center justify-center h-full"},y={class:"w-full lg:w-6/12 px-4"},v={class:"relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0"},g=e("div",{class:"rounded-t mb-0 px-6 py-6"},[e("div",{class:"text-center mb-3"},[e("h6",{class:"text-blueGray-500 text-sm font-bold"},"Sign up")]),e("hr",{class:"mt-6 border-b-1 border-blueGray-300"})],-1),G={class:"flex-auto px-4 lg:px-10 py-10 pt-0"},k=e("div",{class:"text-blueGray-400 text-center mb-3 font-bold"},null,-1),V={class:"relative w-full mb-3"},q=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," Name ",-1),F={class:"relative w-full mb-3"},U=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," Email ",-1),C={class:"relative w-full mb-3"},N=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," Password ",-1),S={class:"relative w-full mb-3"},B=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," Phone ",-1),E={class:"relative w-full mb-3"},P=e("label",{class:"block uppercase text-blueGray-600 text-xs font-bold mb-2",htmlFor:"grid-password"}," address ",-1),A=e("div",{class:"text-center mt-6"},[e("button",{class:"bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-1/2 ease-linear transition-all duration-150",type:"submit"}," Create Account ")],-1),M={class:"flex flex-wrap mt-6 relative"},j={class:"w-full text-right"},D=e("small",null,"Have an Account",-1);function H(a,s,R,T,l,n){const i=c("router-link");return p(),b("div",w,[e("div",_,[e("div",y,[e("div",v,[g,e("div",G,[k,e("form",{onClick:s[5]||(s[5]=m((...t)=>n.onSubmit&&n.onSubmit(...t),["prevent"]))},[e("div",V,[q,o(e("input",{type:"email",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Name","onUpdate:modelValue":s[0]||(s[0]=t=>l.username=t),required:""},null,512),[[r,l.username]])]),e("div",F,[U,o(e("input",{type:"email",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Email","onUpdate:modelValue":s[1]||(s[1]=t=>l.email=t),required:""},null,512),[[r,l.email]])]),e("div",C,[N,o(e("input",{type:"password",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"Password","onUpdate:modelValue":s[2]||(s[2]=t=>l.password=t),required:""},null,512),[[r,l.password]])]),e("div",S,[B,o(e("input",{type:"tel",class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150",placeholder:"0821 9728 ...","onUpdate:modelValue":s[3]||(s[3]=t=>l.phone=t),required:""},null,512),[[r,l.phone]])]),e("div",E,[P,o(e("textarea",{class:"border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150","onUpdate:modelValue":s[4]||(s[4]=t=>l.address=t),rows:"5",col:"4",required:""},`
                `,512),[[r,l.address]])]),A])])]),e("div",M,[e("div",j,[h(i,{to:"/login",class:"text-blueGray-200"},{default:x(()=>[D]),_:1})])])])])])}const I=d(f,[["render",H]]);export{I as default};
