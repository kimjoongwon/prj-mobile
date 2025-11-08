import{S as de,r as u,j as t,R as O}from"./iframe-DZiCWydc.js";import{u as me}from"./useTheme-DmX67AR3.js";import"./preload-helper-Zf8nSx-t.js";const xe={sm:{radioSize:16,fontSize:14,iconSize:6,spacing:8,groupSpacing:12},md:{radioSize:20,fontSize:14,iconSize:8,spacing:10,groupSpacing:16},lg:{radioSize:24,fontSize:16,iconSize:10,spacing:12,groupSpacing:20}};de.create({container:{flexDirection:"column"},group:{flexDirection:"column"},horizontal:{flexDirection:"row",flexWrap:"wrap"},radioContainer:{flexDirection:"row",alignItems:"center",marginBottom:8},horizontalRadioContainer:{marginRight:16,marginBottom:8},radio:{alignItems:"center",justifyContent:"center",borderWidth:2,borderRadius:50},radioInner:{borderRadius:50},labelContainer:{flexDirection:"column",flex:1,justifyContent:"center"},groupLabel:{fontWeight:"600",marginBottom:8},radioLabel:{fontWeight:"400"},description:{fontSize:12,marginTop:4,opacity:.6},errorMessage:{fontSize:12,marginTop:4},requiredStar:{}});const o=({data:r,label:e,name:s,value:a,defaultValue:H,size:C="md",color:w="primary",orientation:R="vertical",isDisabled:T=!1,isRequired:q=!1,isInvalid:D=!1,description:G,errorMessage:V,keyExtractor:I,labelExtractor:U,valueExtractor:j,descriptionExtractor:$,disabledExtractor:K,onValueChange:M,style:W,groupStyle:L,labelStyle:P,optionLabelStyle:J,className:Q},X)=>{const{theme:p}=me(),[Y,F]=u.useState(H),x=a!==void 0?a:Y,c=u.useMemo(()=>xe[C],[C]),l=u.useMemo(()=>({label:(p.colors[D?"danger":w]||p.colors.default).DEFAULT,text:p.colors.foreground,description:p.colors.default[600],error:p.colors.danger.DEFAULT,border:p.colors.default[400]}),[w,D,p.colors]),B=u.useCallback((i,n,d)=>{a===void 0&&F(i),M?.(i,n,d)},[a,M]),Z=u.useMemo(()=>({display:"flex",flexDirection:"column",opacity:T?.5:1,...W}),[T,W]),ee=u.useMemo(()=>({display:"flex",flexDirection:R==="horizontal"?"row":"column",gap:`${c.groupSpacing}px`,flexWrap:R==="horizontal"?"wrap":"nowrap",...L}),[R,c.groupSpacing,L]),A=u.useMemo(()=>({fontWeight:"600",marginBottom:"8px",fontSize:`${c.fontSize+2}px`,color:l.label,...P}),[c.fontSize,l.label,P]),te=({item:i,index:n,isSelected:d,onPress:y})=>{const m=T||(K?.(i,n)??!1),N=`radio-${s}-${n}`,_=U(i,n),ne={display:"flex",alignItems:"center",marginBottom:"8px",cursor:m?"not-allowed":"pointer",opacity:m?.5:1},le={display:"flex",alignItems:"center",justifyContent:"center",width:`${c.radioSize}px`,height:`${c.radioSize}px`,borderRadius:"50%",border:`2px solid ${d?l.label:l.border}`,backgroundColor:"transparent",transition:"all 0.2s ease",flexShrink:0},se=d?{width:`${c.iconSize}px`,height:`${c.iconSize}px`,borderRadius:"50%",backgroundColor:l.label,transition:"all 0.2s ease"}:{width:0,height:0,backgroundColor:l.label,transition:"all 0.2s ease"},ce={display:"flex",flexDirection:"column",marginLeft:`${c.spacing}px`,flex:1},ue={fontSize:`${c.fontSize}px`,color:l.text,fontWeight:"400",...J},pe={fontSize:"12px",color:l.description,marginTop:"4px",opacity:.6};return t.jsxs("label",{style:ne,children:[t.jsx("input",{id:N,type:"radio",name:s,value:String(j(i,n)),checked:d,onChange:y,disabled:m,style:{display:"none"},"aria-label":_}),t.jsx("div",{style:le,children:t.jsx("div",{style:se})}),t.jsxs("div",{style:ce,children:[t.jsx("label",{htmlFor:N,style:ue,children:_}),$?.(i,n)&&t.jsx("div",{style:pe,children:$(i,n)})]})]})},ae=u.useCallback(()=>e?t.jsxs("label",{style:A,children:[e,q&&t.jsx("span",{style:{color:l.error},children:" *"})]}):null,[e,A,q,l.error]),re=u.useCallback(()=>r.map((i,n)=>{const d=I(i,n),y=j(i,n),m=x===y;return t.jsx(te,{item:i,index:n,isSelected:m,onPress:()=>B(y,i,n)},d)}),[r,I,j,x,B]),oe={fontSize:"12px",color:l.description,marginTop:"4px",opacity:.6},ie={fontSize:"12px",color:l.error,marginTop:"4px"};return O.useImperativeHandle(X,()=>({setValue:i=>{a===void 0&&F(i)},getValue:()=>x,focus:()=>{document.querySelector(`input[name="${s}"]:first-of-type`)?.focus()},blur:()=>{document.querySelector(`input[name="${s}"]:focus`)?.blur()}}),[a,x,s]),t.jsxs("div",{style:Z,className:Q,children:[ae(),t.jsx("div",{style:ee,children:re()}),G&&!V&&t.jsx("div",{style:oe,children:G}),V&&t.jsx("div",{style:ie,children:V})]})};o.displayName="RadioGroup";o.__docgenInfo={description:"",methods:[{name:"setValue",docblock:null,modifiers:[],params:[{name:"newValue",optional:!1,type:{name:"string"}}],returns:null},{name:"getValue",docblock:null,modifiers:[],params:[],returns:null},{name:"focus",docblock:null,modifiers:[],params:[],returns:null},{name:"blur",docblock:null,modifiers:[],params:[],returns:null}],displayName:"RadioGroup",props:{data:{required:!0,tsType:{name:"Array",elements:[{name:"T"}],raw:"T[]"},description:""},label:{required:!1,tsType:{name:"string"},description:""},name:{required:!1,tsType:{name:"string"},description:""},value:{required:!1,tsType:{name:"any"},description:""},defaultValue:{required:!1,tsType:{name:"any"},description:""},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'primary'",computed:!1}},orientation:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:"",defaultValue:{value:"'vertical'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},isInvalid:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:""},errorMessage:{required:!1,tsType:{name:"string"},description:""},keyExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},labelExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},valueExtractor:{required:!0,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => any",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"any"}}},description:""},descriptionExtractor:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => string",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"string"}}},description:""},disabledExtractor:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T, index: number) => boolean",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"boolean"}}},description:""},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any, item: T, index: number) => void",signature:{arguments:[{type:{name:"any"},name:"value"},{type:{name:"T"},name:"item"},{type:{name:"number"},name:"index"}],return:{name:"void"}}},description:""},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},groupStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},labelStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},optionLabelStyle:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};const ke={title:"Forms/RadioGroup",component:o,parameters:{layout:"centered",docs:{description:{component:"RadioGroup allows users to select a single option from a list of mutually exclusive options. Based on HeroUI design system with React Native animations."}}},argTypes:{data:{control:{type:"object"},description:"Array of data items for radio options"},size:{control:{type:"select"},options:["sm","md","lg"],description:"Size of the radio group"},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"],description:"Color scheme of the radio group"},orientation:{control:{type:"select"},options:["vertical","horizontal"],description:"Layout orientation"},value:{control:{type:"text"},description:"Controlled selected value"},defaultValue:{control:{type:"text"},description:"Default selected value (uncontrolled)"},isDisabled:{control:{type:"boolean"},description:"Disable the entire radio group"},isRequired:{control:{type:"boolean"},description:"Show required indicator"},isInvalid:{control:{type:"boolean"},description:"Show error state"},label:{control:{type:"text"},description:"Group label"},description:{control:{type:"text"},description:"Helper text description"},errorMessage:{control:{type:"text"},description:"Error message text"}},args:{label:"좋아하는 도시를 선택하세요",size:"md",color:"primary",orientation:"vertical",isDisabled:!1,isRequired:!1,isInvalid:!1,data:[{key:"seoul",text:"서울",value:"seoul"},{key:"busan",text:"부산",value:"busan"},{key:"incheon",text:"인천",value:"incheon"},{key:"daegu",text:"대구",value:"daegu"}]}},v={render:r=>t.jsx(o,{...r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value})},f={render:()=>{const r=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"}];return t.jsxs(t.Fragment,{children:[t.jsx(o,{label:"Small Size",size:"sm",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Medium Size",size:"md",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Large Size",size:"lg",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value})]})},parameters:{docs:{description:{story:"라디오 그룹은 sm, md, lg 세 가지 크기를 지원합니다."}}}},b={render:()=>{const r=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"}];return t.jsxs(t.Fragment,{children:[t.jsx(o,{label:"Default",color:"default",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Primary",color:"primary",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Secondary",color:"secondary",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Success",color:"success",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Warning",color:"warning",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"Danger",color:"danger",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value})]})},parameters:{docs:{description:{story:"다양한 색상 테마를 지원합니다."}}}},g={render:()=>{const r=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"},{key:"option3",text:"옵션 3",value:"option3"}];return t.jsxs(t.Fragment,{children:[t.jsx(o,{label:"세로 방향 (기본값)",orientation:"vertical",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value}),t.jsx(o,{label:"가로 방향",orientation:"horizontal",defaultValue:"option1",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value})]})},parameters:{docs:{description:{story:"세로 또는 가로 방향으로 라디오 버튼을 배치할 수 있습니다."}}}},k={render:()=>{const r=[{key:"standard",text:"일반 배송",value:"standard",description:"일반 배송 (2-3일 소요)"},{key:"express",text:"익일 배송",value:"express",description:"빠른 배송 (1일 소요)"},{key:"same-day",text:"당일 배송",value:"same-day",description:"당일 배송 (추가 요금)"}];return t.jsx(o,{label:"배송 방법 선택",description:"원하는 배송 방법을 선택해주세요.",defaultValue:"standard",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value,descriptionExtractor:e=>e.description})},parameters:{docs:{description:{story:"그룹과 개별 라디오에 설명 텍스트를 추가할 수 있습니다."}}}},E={render:()=>{const r=[{key:"option1",text:"선택된 옵션",value:"option1"},{key:"option2",text:"선택되지 않은 옵션",value:"option2"}],e=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"}],s=[{key:"option1",text:"활성화된 옵션",value:"option1"},{key:"option2",text:"비활성화된 옵션",value:"option2",isDisabled:!0}];return t.jsxs(t.Fragment,{children:[t.jsx(o,{label:"기본 상태",defaultValue:"option1",data:r,keyExtractor:a=>a.key,labelExtractor:a=>a.text,valueExtractor:a=>a.value}),t.jsx(o,{label:"비활성화된 그룹",isDisabled:!0,defaultValue:"option1",data:e,keyExtractor:a=>a.key,labelExtractor:a=>a.text,valueExtractor:a=>a.value}),t.jsx(o,{label:"개별 비활성화",defaultValue:"option1",data:s,keyExtractor:a=>a.key,labelExtractor:a=>a.text,valueExtractor:a=>a.value,disabledExtractor:a=>a.isDisabled||!1})]})},parameters:{docs:{description:{story:"라디오 그룹의 다양한 상태를 보여줍니다."}}}},S={render:()=>{const r=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"},{key:"option3",text:"옵션 3",value:"option3"}];return t.jsx(o,{label:"필수 선택 항목",isRequired:!0,isInvalid:!0,errorMessage:"하나의 옵션을 선택해주세요.",data:r,keyExtractor:e=>e.key,labelExtractor:e=>e.text,valueExtractor:e=>e.value})},parameters:{docs:{description:{story:"에러 상태와 필수 표시를 보여줍니다."}}}},ye=()=>{const[r,e]=O.useState("option1"),s=[{key:"option1",text:"옵션 1",value:"option1"},{key:"option2",text:"옵션 2",value:"option2"},{key:"option3",text:"옵션 3",value:"option3"}];return t.jsx(o,{label:"상호작용 예제",value:r,onValueChange:a=>e(a),description:`현재 선택된 값: ${r}`,data:s,keyExtractor:a=>a.key,labelExtractor:a=>a.text,valueExtractor:a=>a.value})},h={render:()=>t.jsx(ye,{}),parameters:{docs:{description:{story:"라디오 그룹을 클릭하여 상호작용을 테스트할 수 있습니다."}}}},ve=()=>{const[r,e]=O.useState(),s=[{key:"react",text:"React",value:"react"},{key:"vue",text:"Vue",value:"vue"},{key:"angular",text:"Angular",value:"angular"},{key:"svelte",text:"Svelte",value:"svelte"}];return t.jsx(o,{label:"제어된 라디오 그룹",value:r,onValueChange:a=>e(a),description:`선택된 값: ${r||"없음"}`,data:s,keyExtractor:a=>a.key,labelExtractor:a=>a.text,valueExtractor:a=>a.value})},z={render:()=>t.jsx(ve,{}),parameters:{docs:{description:{story:"외부 상태로 제어되는 라디오 그룹 예제입니다."}}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => <RadioGroup {...args}
  // @ts-ignore
  keyExtractor={item => item.key}
  // @ts-ignore
  labelExtractor={item => item.text}
  // @ts-ignore
  valueExtractor={item => item.value} />
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const sizeOptions = [{
      key: 'option1',
      text: '옵션 1',
      value: 'option1'
    }, {
      key: 'option2',
      text: '옵션 2',
      value: 'option2'
    }];
    return <>
                <RadioGroup label="Small Size" size="sm" defaultValue="option1" data={sizeOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Medium Size" size="md" defaultValue="option1" data={sizeOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Large Size" size="lg" defaultValue="option1" data={sizeOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
            </>;
  },
  parameters: {
    docs: {
      description: {
        story: '라디오 그룹은 sm, md, lg 세 가지 크기를 지원합니다.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const colorOptions = [{
      key: 'option1',
      text: '옵션 1',
      value: 'option1'
    }, {
      key: 'option2',
      text: '옵션 2',
      value: 'option2'
    }];
    return <>
                <RadioGroup label="Default" color="default" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Primary" color="primary" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Secondary" color="secondary" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Success" color="success" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Warning" color="warning" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="Danger" color="danger" defaultValue="option1" data={colorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
            </>;
  },
  parameters: {
    docs: {
      description: {
        story: '다양한 색상 테마를 지원합니다.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const orientationOptions = [{
      key: 'option1',
      text: '옵션 1',
      value: 'option1'
    }, {
      key: 'option2',
      text: '옵션 2',
      value: 'option2'
    }, {
      key: 'option3',
      text: '옵션 3',
      value: 'option3'
    }];
    return <>
                <RadioGroup label="세로 방향 (기본값)" orientation="vertical" defaultValue="option1" data={orientationOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="가로 방향" orientation="horizontal" defaultValue="option1" data={orientationOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
            </>;
  },
  parameters: {
    docs: {
      description: {
        story: '세로 또는 가로 방향으로 라디오 버튼을 배치할 수 있습니다.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const shippingOptions = [{
      key: 'standard',
      text: '일반 배송',
      value: 'standard',
      description: '일반 배송 (2-3일 소요)'
    }, {
      key: 'express',
      text: '익일 배송',
      value: 'express',
      description: '빠른 배송 (1일 소요)'
    }, {
      key: 'same-day',
      text: '당일 배송',
      value: 'same-day',
      description: '당일 배송 (추가 요금)'
    }];
    return <RadioGroup label="배송 방법 선택" description="원하는 배송 방법을 선택해주세요." defaultValue="standard" data={shippingOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} descriptionExtractor={item => item.description} />;
  },
  parameters: {
    docs: {
      description: {
        story: '그룹과 개별 라디오에 설명 텍스트를 추가할 수 있습니다.'
      }
    }
  }
}`,...k.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const basicOptions = [{
      key: 'option1',
      text: '선택된 옵션',
      value: 'option1'
    }, {
      key: 'option2',
      text: '선택되지 않은 옵션',
      value: 'option2'
    }];
    const disabledOptions = [{
      key: 'option1',
      text: '옵션 1',
      value: 'option1'
    }, {
      key: 'option2',
      text: '옵션 2',
      value: 'option2'
    }];
    const individualDisabledOptions = [{
      key: 'option1',
      text: '활성화된 옵션',
      value: 'option1'
    }, {
      key: 'option2',
      text: '비활성화된 옵션',
      value: 'option2',
      isDisabled: true
    }];
    return <>
                <RadioGroup label="기본 상태" defaultValue="option1" data={basicOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="비활성화된 그룹" isDisabled defaultValue="option1" data={disabledOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />
                <RadioGroup label="개별 비활성화" defaultValue="option1" data={individualDisabledOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} disabledExtractor={item => item.isDisabled || false} />
            </>;
  },
  parameters: {
    docs: {
      description: {
        story: '라디오 그룹의 다양한 상태를 보여줍니다.'
      }
    }
  }
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => {
    const errorOptions = [{
      key: 'option1',
      text: '옵션 1',
      value: 'option1'
    }, {
      key: 'option2',
      text: '옵션 2',
      value: 'option2'
    }, {
      key: 'option3',
      text: '옵션 3',
      value: 'option3'
    }];
    return <RadioGroup label="필수 선택 항목" isRequired isInvalid errorMessage="하나의 옵션을 선택해주세요." data={errorOptions} keyExtractor={item => item.key} labelExtractor={item => item.text} valueExtractor={item => item.value} />;
  },
  parameters: {
    docs: {
      description: {
        story: '에러 상태와 필수 표시를 보여줍니다.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <InteractiveExample />,
  parameters: {
    docs: {
      description: {
        story: '라디오 그룹을 클릭하여 상호작용을 테스트할 수 있습니다.'
      }
    }
  }
}`,...h.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <ControlledExampleComponent />,
  parameters: {
    docs: {
      description: {
        story: '외부 상태로 제어되는 라디오 그룹 예제입니다.'
      }
    }
  }
}`,...z.parameters?.docs?.source}}};const Ee=["Default","Sizes","Colors","Orientations","WithDescription","States","WithError","Interactive","ControlledExample"];export{b as Colors,z as ControlledExample,v as Default,h as Interactive,g as Orientations,f as Sizes,E as States,k as WithDescription,S as WithError,Ee as __namedExportsOrder,ke as default};
