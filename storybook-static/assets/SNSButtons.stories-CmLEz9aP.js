import{j as e,S as y,V as o}from"./iframe-DZiCWydc.js";import{B as u}from"./Button-LyYxIoWq.js";import{V as S}from"./View-BlDE62gu.js";import"./preload-helper-Zf8nSx-t.js";import"./useTheme-DmX67AR3.js";import"./Text-Ct2hx8n9.js";import"./index-DbRQ8wOu.js";import"./index-D_tP2JIZ.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";const r=({onGooglePress:s,onApplePress:c,onKakaoPress:g,style:w,showGoogle:h=!0,showApple:m=!0,showKakao:f=!0})=>e.jsxs(S,{style:[a.container,w],children:[h&&e.jsx(u,{variant:"bordered",size:"lg",onPress:s,style:a.button,children:"Google로 로그인"}),m&&e.jsx(u,{variant:"solid",color:"default",size:"lg",onPress:c,style:a.appleButton,children:"Apple로 로그인"}),f&&e.jsx(u,{variant:"solid",size:"lg",onPress:g,style:a.kakaoButton,children:"카카오로 로그인"})]}),a=y.create({container:{gap:12,width:"100%"},button:{width:"100%"},appleButton:{width:"100%",backgroundColor:"#000000"},kakaoButton:{width:"100%",backgroundColor:"#FEE500"}});r.__docgenInfo={description:"",methods:[],displayName:"SNSButtons",props:{onGooglePress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onApplePress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onKakaoPress:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ViewStyle"},description:""},showGoogle:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showApple:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},showKakao:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}}}};const N={title:"components/ui/SNSButtons",component:r,parameters:{layout:"centered",docs:{description:{component:"소셜 로그인 버튼들을 표시하는 컴포넌트입니다."}}},argTypes:{showGoogle:{control:{type:"boolean"},description:"Google 로그인 버튼 표시 여부"},showApple:{control:{type:"boolean"},description:"Apple 로그인 버튼 표시 여부"},showKakao:{control:{type:"boolean"},description:"카카오 로그인 버튼 표시 여부"}}},n={args:{},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})},t={args:{showGoogle:!0,showApple:!1,showKakao:!1},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})},i={args:{showGoogle:!1,showApple:!0,showKakao:!1},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})},d={args:{showGoogle:!1,showApple:!1,showKakao:!0},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})},l={args:{showGoogle:!0,showApple:!0,showKakao:!1},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})},p={args:{showGoogle:!0,showApple:!0,showKakao:!0},render:s=>e.jsx(o,{style:{width:300,padding:20},children:e.jsx(r,{...s})})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    showGoogle: true,
    showApple: false,
    showKakao: false
  },
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    showGoogle: false,
    showApple: true,
    showKakao: false
  },
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    showGoogle: false,
    showApple: false,
    showKakao: true
  },
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    showGoogle: true,
    showApple: true,
    showKakao: false
  },
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    showGoogle: true,
    showApple: true,
    showKakao: true
  },
  render: args => <View style={{
    width: 300,
    padding: 20
  }}>
            <SNSButtons {...args} />
        </View>
}`,...p.parameters?.docs?.source}}};const T=["기본","구글만","애플만","카카오만","구글애플만","플레이그라운드"];export{T as __namedExportsOrder,N as default,t as 구글만,l as 구글애플만,n as 기본,i as 애플만,d as 카카오만,p as 플레이그라운드};
