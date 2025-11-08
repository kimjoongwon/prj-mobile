import{j as e,V as c}from"./iframe-DZiCWydc.js";import{T as r}from"./Text-Ct2hx8n9.js";import{C as s}from"./Card-CuhmWded.js";import"./preload-helper-Zf8nSx-t.js";import"./useTheme-DmX67AR3.js";import"./index-DbRQ8wOu.js";const f={title:"components/Card",component:s,parameters:{layout:"centered",docs:{description:{component:"content1 배경을 사용하는 간단한 카드 컨테이너 컴포넌트입니다."}}},argTypes:{padding:{control:{type:"select"},options:["sm","md","lg"],description:"Card의 내부 패딩"}},decorators:[n=>e.jsx(c,{style:{padding:16},children:e.jsx(n,{})})]},a={args:{padding:"md"},render:n=>e.jsx(s,{...n,children:e.jsx(r,{style:{fontSize:16},children:"기본 Card"})})},t={args:{padding:"sm"},render:n=>e.jsx(s,{...n,children:e.jsx(r,{style:{fontSize:16},children:"작은 패딩"})})},d={args:{padding:"lg"},render:n=>e.jsx(s,{...n,children:e.jsx(r,{style:{fontSize:16},children:"큰 패딩"})})},o={args:{padding:"md"},render:n=>e.jsxs(s,{...n,children:[e.jsx(r,{style:{fontSize:18,fontWeight:"bold",marginBottom:8},children:"카드 제목"}),e.jsx(r,{style:{fontSize:14,lineHeight:20,color:"#666"},children:"content1 배경을 사용하는 간단한 Card 컴포넌트입니다."})]})},i={render:()=>e.jsxs(c,{style:{gap:16},children:[e.jsx(s,{padding:"sm",children:e.jsx(r,{style:{fontSize:14},children:"작은 패딩 (sm)"})}),e.jsx(s,{padding:"md",children:e.jsx(r,{style:{fontSize:14},children:"기본 패딩 (md)"})}),e.jsx(s,{padding:"lg",children:e.jsx(r,{style:{fontSize:14},children:"큰 패딩 (lg)"})})]}),args:{}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'md'
  },
  render: args => <Card {...args}>
            <Text style={{
      fontSize: 16
    }}>기본 Card</Text>
        </Card>
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'sm'
  },
  render: args => <Card {...args}>
            <Text style={{
      fontSize: 16
    }}>작은 패딩</Text>
        </Card>
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'lg'
  },
  render: args => <Card {...args}>
            <Text style={{
      fontSize: 16
    }}>큰 패딩</Text>
        </Card>
}`,...d.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    padding: 'md'
  },
  render: args => <Card {...args}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8
    }}>
                카드 제목
            </Text>
            <Text style={{
      fontSize: 14,
      lineHeight: 20,
      color: '#666'
    }}>
                content1 배경을 사용하는 간단한 Card 컴포넌트입니다.
            </Text>
        </Card>
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Card padding="sm">
                <Text style={{
        fontSize: 14
      }}>작은 패딩 (sm)</Text>
            </Card>
            <Card padding="md">
                <Text style={{
        fontSize: 14
      }}>기본 패딩 (md)</Text>
            </Card>
            <Card padding="lg">
                <Text style={{
        fontSize: 14
      }}>큰 패딩 (lg)</Text>
            </Card>
        </View>,
  args: {}
}`,...i.parameters?.docs?.source}}};const h=["Default","SmallPadding","LargePadding","WithContent","PaddingComparison"];export{a as Default,d as LargePadding,i as PaddingComparison,t as SmallPadding,o as WithContent,h as __namedExportsOrder,f as default};
