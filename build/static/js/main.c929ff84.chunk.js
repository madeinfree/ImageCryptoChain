(this["webpackJsonpimage-crypto-chain"]=this["webpackJsonpimage-crypto-chain"]||[]).push([[0],{152:function(e,t,a){e.exports=a.p+"static/media/james-sutton-FqaybX9ZiOU-unsplash.4905e1cf.jpg"},154:function(e,t,a){e.exports=a(378)},159:function(e,t,a){},164:function(e,t,a){},199:function(e,t){},220:function(e,t){},222:function(e,t){},286:function(e,t){},333:function(e,t){function a(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}a.keys=function(){return[]},a.resolve=a,e.exports=a,a.id=333},378:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),o=a(146),l=a.n(o),i=(a(159),a(38)),s=a.n(i),u=a(147),m=a(39),p=a(153),d=a(76),g=a(78),f=a(149),b=a.n(f),y=(a(164),a(150)),h=a.n(y),E=a(151),v=a.n(E),w=a(152),N=a.n(w),A=[{constant:!1,inputs:[{internalType:"string",name:"_md5",type:"string"},{internalType:"string",name:"_comment",type:"string"}],name:"setImage",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!0,inputs:[{internalType:"string",name:"_md5",type:"string"}],name:"getImage",outputs:[{internalType:"string",name:"message",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"}];var x=function(){var e=c.a.useState("*"),t=Object(m.a)(e,2),a=t[0],r=t[1],o=c.a.useState(""),l=Object(m.a)(o,2),i=l[0],f=l[1],y=c.a.useState(""),E=Object(m.a)(y,2),w=E[0],x=E[1],C=c.a.useState(""),I=Object(m.a)(C,2),k=I[0],O=I[1],j="You are the image owner."===k;return c.a.useEffect((function(){if(window.ethereum){n=new v.a(window.ethereum);try{window.ethereum.enable().then(function(){var e=Object(u.a)(s.a.mark((function e(t){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.length>0&&x(t[0]);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(e){console.log(e)}}}),[]),""===w?c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement("div",{className:"spinner-grow",role:"status"},c.a.createElement("span",{className:"sr-only"},"Loading...")),"Please Connect ",c.a.createElement("a",{href:"https://metamask.io/"},"MetaMask"))):c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(b.a,null,"ContractAddress\uff1a0xe108b9e88dA1e0eEfaAb298aD98f5568a3001d5E"),c.a.createElement("img",{style:{position:"absolute",opacity:.4,minWidth:"100%",height:"100%"},alt:"cover image",src:N.a}),"*"===a&&c.a.createElement("h1",{style:{}},"Choose And Protect Your Image Now ",c.a.createElement(d.a,{icon:g.b})),"*"===a?c.a.createElement(p.a,{onDrop:function(e){var t=new FileReader;t.onload=function(e){var t=e.target.result;r(h.a.MD5(t).toString())};var a=new Blob(e),n=URL.createObjectURL(a);f(n),t.readAsBinaryString(a)}},(function(e){var t=e.getRootProps,a=e.getInputProps;return c.a.createElement("div",Object.assign({style:{zIndex:1,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",margin:"0 auto",color:"black",width:200,height:200,background:"white",borderRadius:15}},t()),c.a.createElement("input",a()),c.a.createElement(d.a,{size:"5x",icon:g.a}))})):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container"},""!==k&&c.a.createElement("div",{className:"alert ".concat(j?"alert-success":"alert-danger"),role:"alert"},c.a.createElement("h4",{className:"alert-heading"},"Valid Result"),c.a.createElement("p",null,j?"Congratulations ! ":"Oops ! ",k),!j&&c.a.createElement("hr",null),!j&&c.a.createElement("p",{className:"mb-0"},"Looks bad, do you forget to upload your image ?")),c.a.createElement("div",{style:{zIndex:1,display:"flex",justifyContent:"center",alignItems:"center"},className:"row"},c.a.createElement("div",{className:"col-6"},c.a.createElement("h3",null,"MD5: ",a),c.a.createElement("div",null,c.a.createElement("img",{className:"img-thumbnail",alt:"",src:i}))),c.a.createElement("div",{style:{textAlign:"left"},className:"col-4"},c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return function(e,t,a){try{new e.eth.Contract(A,"0xe108b9e88dA1e0eEfaAb298aD98f5568a3001d5E").methods.setImage(a,"This image is protect by Image Contract Protector").send({from:t}).then((function(e){return alert("Success")}))}catch(n){console.log(n)}}(n,w,a)},type:"button",className:"btn btn-outline-primary"},"Protect to chain")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return function(e,t,a,n){new e.eth.Contract(A,"0xe108b9e88dA1e0eEfaAb298aD98f5568a3001d5E").methods.getImage(a).call({from:t}).then((function(e){n(e)}))}(n,w,a,O)},type:"button",className:"btn btn-outline-info"},"Valid Image")),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){r("*"),O("")},type:"button",className:"btn btn-outline-danger"},"Remove"))))))))};l.a.render(c.a.createElement(x,null),document.getElementById("root"))}},[[154,1,2]]]);
//# sourceMappingURL=main.c929ff84.chunk.js.map