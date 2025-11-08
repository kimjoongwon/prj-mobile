import{j as e,V as t}from"./iframe-DZiCWydc.js";import{D as n}from"./Divider-Chn3A8ZU.js";import"./preload-helper-Zf8nSx-t.js";import"./useTheme-DmX67AR3.js";import"./Text-Ct2hx8n9.js";import"./index-DbRQ8wOu.js";const j={title:"components/ui/Divider",component:n,parameters:{layout:"centered",docs:{description:{component:"구분선을 표시하는 컴포넌트입니다. 텍스트가 포함된 구분선도 지원합니다."}}},argTypes:{orientation:{control:{type:"select"},options:["horizontal","vertical"],description:"구분선의 방향"},variant:{control:{type:"select"},options:["default","subtle","strong"],description:"구분선의 스타일 변형"},thickness:{control:{type:"number",min:1,max:10},description:"구분선의 두께"},margin:{control:{type:"number",min:0,max:50},description:"구분선의 마진"}}},s={args:{},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},i={args:{children:"또는"},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},a={args:{orientation:"vertical"},render:r=>e.jsxs(t,{style:{width:300,height:100,flexDirection:"row",alignItems:"center"},children:[e.jsx(t,{style:{flex:1,height:50,backgroundColor:"#f0f0f0"}}),e.jsx(n,{...r}),e.jsx(t,{style:{flex:1,height:50,backgroundColor:"#f0f0f0"}})]})},o={args:{thickness:3},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},c={args:{color:"#2196f3"},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},d={args:{variant:"subtle"},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},g={args:{variant:"strong"},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})},l={args:{children:"다크모드 대응"},render:r=>e.jsxs(t,{style:{width:300,height:200,justifyContent:"space-around",padding:20},children:[e.jsx(n,{...r,variant:"subtle"}),e.jsx(n,{...r,variant:"default"}),e.jsx(n,{...r,variant:"strong"})]})},h={args:{orientation:"horizontal",variant:"default",thickness:1,margin:16},render:r=>e.jsx(t,{style:{width:300,height:100,justifyContent:"center"},children:e.jsx(n,{...r})})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {},
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: '또는'
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...i.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    flexDirection: 'row',
    alignItems: 'center'
  }}>
            <View style={{
      flex: 1,
      height: 50,
      backgroundColor: '#f0f0f0'
    }} />
            <Divider {...args} />
            <View style={{
      flex: 1,
      height: 50,
      backgroundColor: '#f0f0f0'
    }} />
        </View>
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    thickness: 3
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    color: '#2196f3'
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'subtle'
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'strong'
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...g.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: '다크모드 대응'
  },
  render: args => <View style={{
    width: 300,
    height: 200,
    justifyContent: 'space-around',
    padding: 20
  }}>
            <Divider {...args} variant="subtle" />
            <Divider {...args} variant="default" />
            <Divider {...args} variant="strong" />
        </View>
}`,...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    variant: 'default',
    thickness: 1,
    margin: 16
  },
  render: args => <View style={{
    width: 300,
    height: 100,
    justifyContent: 'center'
  }}>
            <Divider {...args} />
        </View>
}`,...h.parameters?.docs?.source}}};const x=["기본","텍스트포함","세로구분선","두꺼운선","색상변경","Subtle변형","Strong변형","다크모드테스트","플레이그라운드"];export{g as Strong변형,d as Subtle변형,x as __namedExportsOrder,j as default,s as 기본,l as 다크모드테스트,o as 두꺼운선,c as 색상변경,a as 세로구분선,i as 텍스트포함,h as 플레이그라운드};
