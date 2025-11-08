import{S as w,j as e,V as p}from"./iframe-DZiCWydc.js";import{u as x}from"./useTheme-DmX67AR3.js";import{B as g}from"./Button-LyYxIoWq.js";import{D as L}from"./Divider-Chn3A8ZU.js";import{L as S}from"./Logo-o1VwnF8N.js";import{S as k}from"./ScrollView-DT84np_C.js";import{T as m}from"./Text-Ct2hx8n9.js";import{V as r}from"./View-BlDE62gu.js";import"./preload-helper-Zf8nSx-t.js";import"./index-D_tP2JIZ.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";import"./index-DS8CYKj5.js";import"./index-DbRQ8wOu.js";const i=({email:n,password:l,onLogin:c,onSignUp:d,onForgotPassword:u,onGoogleLogin:v,onAppleLogin:j,onKakaoLogin:V,onBack:T,style:f})=>{const{theme:y}=x(),o=h(y);return e.jsx(r,{style:o.container,children:e.jsxs(k,{variant:"default",style:[o.scrollView],contentContainerStyle:[o.content,f],keyboardShouldPersistTaps:"handled",children:[e.jsx(r,{style:o.logoSection,children:e.jsx(S,{size:"lg"})}),e.jsxs(r,{style:o.headerSection,children:[e.jsx(m,{variant:"h3",style:o.title,children:"로그인"}),e.jsx(m,{variant:"body1",color:"default",style:o.subtitle,children:"계정에 로그인하세요"})]}),e.jsx(r,{style:o.formSection,children:e.jsx(g,{variant:"solid",color:"primary",size:"lg",style:o.loginButton,onPress:()=>c?.(n,l,!1),children:"로그인"})}),e.jsx(L,{style:o.divider,children:"또는"}),e.jsxs(r,{style:o.linksSection,children:[e.jsx(g,{variant:"ghost",size:"md",onPress:d,style:o.linkButton,children:"회원가입"}),e.jsx(g,{variant:"ghost",size:"md",onPress:u,style:o.linkButton,children:"비밀번호 찾기"})]})]})})},h=n=>w.create({container:{flex:1,backgroundColor:n.colors.background},scrollView:{flex:1},content:{padding:24,paddingTop:20,paddingBottom:40},logoSection:{alignItems:"center",marginBottom:40},headerSection:{alignItems:"center",marginBottom:32},title:{marginBottom:8,color:n.colors.foreground},subtitle:{textAlign:"center",color:n.colors.default[600]},formSection:{marginBottom:24},loginButton:{marginTop:8},divider:{marginVertical:24},linksSection:{alignItems:"center",gap:8},linkButton:{marginVertical:4}});i.__docgenInfo={description:"",methods:[],displayName:"LoginScreenView",props:{email:{required:!0,tsType:{name:"string"},description:""},password:{required:!0,tsType:{name:"string"},description:""},onLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"(email: string, password: string, keepLoggedIn: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"email"},{type:{name:"string"},name:"password"},{type:{name:"boolean"},name:"keepLoggedIn"}],return:{name:"void"}}},description:""},onSignUp:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onForgotPassword:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onGoogleLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onAppleLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKakaoLogin:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onBack:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const E={title:"screens/LoginScreen",component:i,parameters:{layout:"fullscreen",docs:{description:{component:"완성된 로그인 스크린 컴포넌트입니다. 로그인 폼, 소셜 로그인, 링크 버튼들을 포함합니다."}}},argTypes:{onLogin:{action:"로그인",description:"로그인 버튼 클릭 시 호출되는 함수"},onSignUp:{action:"회원가입",description:"회원가입 버튼 클릭 시 호출되는 함수"},onForgotPassword:{action:"비밀번호 찾기",description:"비밀번호 찾기 버튼 클릭 시 호출되는 함수"},onGoogleLogin:{action:"구글 로그인",description:"구글 로그인 버튼 클릭 시 호출되는 함수"},onAppleLogin:{action:"애플 로그인",description:"애플 로그인 버튼 클릭 시 호출되는 함수"},onKakaoLogin:{action:"카카오 로그인",description:"카카오 로그인 버튼 클릭 시 호출되는 함수"}}},s={render:n=>e.jsx(p,{style:{flex:1,backgroundColor:"#ffffff"},children:e.jsx(i,{...n,email:"",password:""})})},t={render:n=>e.jsx(p,{style:{flex:1,backgroundColor:"#ffffff"},children:e.jsx(i,{...n,email:"",password:"",onLogin:(l,c,d)=>console.log("로그인:",{email:l,password:c,keepLoggedIn:d}),onSignUp:()=>console.log("회원가입"),onForgotPassword:()=>console.log("비밀번호 찾기"),onGoogleLogin:()=>console.log("구글 로그인"),onAppleLogin:()=>console.log("애플 로그인"),onKakaoLogin:()=>console.log("카카오 로그인")})})},a={args:{email:"",password:""},render:n=>e.jsx(p,{style:{flex:1,backgroundColor:"#ffffff"},children:e.jsx(i,{...n})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#ffffff'
  }}>
            <LoginScreenView {...args} email="" password="" />
        </View>
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#ffffff'
  }}>
            <LoginScreenView {...args} email="" password="" onLogin={(email, password, keepLoggedIn) => console.log('로그인:', {
      email,
      password,
      keepLoggedIn
    })} onSignUp={() => console.log('회원가입')} onForgotPassword={() => console.log('비밀번호 찾기')} onGoogleLogin={() => console.log('구글 로그인')} onAppleLogin={() => console.log('애플 로그인')} onKakaoLogin={() => console.log('카카오 로그인')} />
        </View>
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    email: '',
    password: ''
  },
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#ffffff'
  }}>
            <LoginScreenView {...args} />
        </View>
}`,...a.parameters?.docs?.source}}};const N=["기본","콜백함수포함","플레이그라운드"];export{N as __namedExportsOrder,E as default,s as 기본,t as 콜백함수포함,a as 플레이그라운드};
