import{j as r}from"./iframe-DZiCWydc.js";import{T as d}from"./Text-Ct2hx8n9.js";import{V as p}from"./View-BlDE62gu.js";import{S as n}from"./ScrollView-DT84np_C.js";import"./preload-helper-Zf8nSx-t.js";import"./useTheme-DmX67AR3.js";import"./index-DbRQ8wOu.js";import"./extends-CF3RwP-h.js";import"./index-DS8CYKj5.js";const v={title:"ui/ScrollView",component:n,parameters:{layout:"fullscreen"},argTypes:{variant:{control:{type:"select"},options:["default","content1","content2","content3","content4"]}}},t=()=>r.jsx(r.Fragment,{children:Array.from({length:20},(e,m)=>r.jsxs(p,{style:{padding:16,marginVertical:8,marginHorizontal:16,borderRadius:8,backgroundColor:"rgba(0, 111, 238, 0.1)"},children:[r.jsxs(d,{variant:"h6",children:["Item ",m+1]}),r.jsx(d,{variant:"body2",color:"default",children:"This is a demo content item to show the ScrollView component. It has enough content to demonstrate scrolling behavior."})]},m))}),o={render:e=>r.jsx(n,{...e,style:{flex:1},children:r.jsx(t,{})}),args:{variant:"default"}},a={render:e=>r.jsx(n,{...e,style:{flex:1},children:r.jsx(t,{})}),args:{variant:"content1"}},s={render:e=>r.jsx(n,{...e,style:{flex:1},children:r.jsx(t,{})}),args:{variant:"content2"}},l={render:e=>r.jsx(n,{...e,style:{flex:1},children:r.jsx(t,{})}),args:{variant:"content3"}},i={render:e=>r.jsx(n,{...e,style:{flex:1},children:r.jsx(t,{})}),args:{variant:"content4"}},c={render:e=>r.jsx(n,{...e,horizontal:!0,style:{flex:1},contentContainerStyle:{flexDirection:"row",padding:16},children:Array.from({length:10},(m,g)=>r.jsxs(p,{style:{width:200,height:150,padding:16,marginRight:16,borderRadius:8,backgroundColor:"rgba(0, 111, 238, 0.1)"},children:[r.jsxs(d,{variant:"h6",children:["Card ",g+1]}),r.jsx(d,{variant:"body2",color:"default",children:"Horizontal scrolling card content"})]},g))}),args:{variant:"default"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} style={{
    flex: 1
  }}>
            <DemoContent />
        </ScrollView>,
  args: {
    variant: 'default'
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} style={{
    flex: 1
  }}>
            <DemoContent />
        </ScrollView>,
  args: {
    variant: 'content1'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} style={{
    flex: 1
  }}>
            <DemoContent />
        </ScrollView>,
  args: {
    variant: 'content2'
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} style={{
    flex: 1
  }}>
            <DemoContent />
        </ScrollView>,
  args: {
    variant: 'content3'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} style={{
    flex: 1
  }}>
            <DemoContent />
        </ScrollView>,
  args: {
    variant: 'content4'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ScrollView {...args} horizontal style={{
    flex: 1
  }} contentContainerStyle={{
    flexDirection: 'row',
    padding: 16
  }}>
            {Array.from({
      length: 10
    }, (_, index) => <View key={index} style={{
      width: 200,
      height: 150,
      padding: 16,
      marginRight: 16,
      borderRadius: 8,
      backgroundColor: 'rgba(0, 111, 238, 0.1)'
    }}>
                    <Text variant="h6">Card {index + 1}</Text>
                    <Text variant="body2" color="default">
                        Horizontal scrolling card content
                    </Text>
                </View>)}
        </ScrollView>,
  args: {
    variant: 'default'
  }
}`,...c.parameters?.docs?.source}}};const V=["Default","Content1","Content2","Content3","Content4","WithHorizontalScrolling"];export{a as Content1,s as Content2,l as Content3,i as Content4,o as Default,c as WithHorizontalScrolling,V as __namedExportsOrder,v as default};
