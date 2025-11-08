import{b as d,j as o,V as p,S as m,T as l}from"./iframe-DZiCWydc.js";import{u as h}from"./useTheme-DmX67AR3.js";import{T as u}from"./index-D_tP2JIZ.js";import{I as y}from"./Ionicons-C1CJY6-4.js";import"./preload-helper-Zf8nSx-t.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";import"./index-DbRQ8wOu.js";import"./index-BXMmz_RV.js";import"./index-DS8CYKj5.js";const n=d(({style:s})=>{const{isDark:a,toggleTheme:c,theme:e}=h();return o.jsx(p,{style:[i.container,s],children:o.jsx(u,{style:[i.button,{backgroundColor:a?e.colors.content2.DEFAULT:e.colors.content1.DEFAULT,borderColor:e.colors.default[300]}],onPress:c,activeOpacity:.7,children:o.jsx(y,{name:a?"sunny":"moon",size:20,color:a?e.colors.warning.DEFAULT:e.colors.primary.DEFAULT})})})});n.displayName="DarkModeSwitch";const i=m.create({container:{},button:{width:44,height:44,borderRadius:22,justifyContent:"center",alignItems:"center",borderWidth:1,shadowColor:"#000",shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4,elevation:3}});n.__docgenInfo={description:"",methods:[],displayName:"DarkModeSwitch",props:{style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const C={title:"UI/DarkModeSwitch",component:n,decorators:[s=>o.jsx(l,{children:o.jsx(s,{})})],parameters:{layout:"centered",docs:{description:{component:"다크/라이트 모드를 전환할 수 있는 토글 스위치 컴포넌트입니다. 스토리북에서만 자동으로 표시되며, 앱에서는 수동으로 배치해야 합니다."}}},argTypes:{style:{description:"추가적인 스타일 설정을 위한 ViewStyle 객체",control:{type:"object"}}}},t={args:{}},r={args:{style:{top:20,right:20}},parameters:{docs:{description:{story:"커스텀 스타일을 적용한 DarkModeSwitch입니다."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    style: {
      top: 20,
      right: 20
    }
  },
  parameters: {
    docs: {
      description: {
        story: '커스텀 스타일을 적용한 DarkModeSwitch입니다.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};const E=["Default","WithCustomStyle"];export{t as Default,r as WithCustomStyle,E as __namedExportsOrder,C as default};
