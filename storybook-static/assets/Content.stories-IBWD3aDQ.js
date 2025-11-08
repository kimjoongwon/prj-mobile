import{S as h,j as e,V as g}from"./iframe-DZiCWydc.js";import{B as V}from"./Button-LyYxIoWq.js";import{T as C}from"./Text-Ct2hx8n9.js";import{u as j}from"./useTheme-DmX67AR3.js";import"./preload-helper-Zf8nSx-t.js";import"./index-D_tP2JIZ.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";import"./index-DbRQ8wOu.js";var s=()=>{};function o(){return null}o.setBackgroundColor=s;o.setBarStyle=s;o.setHidden=s;o.setNetworkActivityIndicatorVisible=s;o.setTranslucent=s;const b=h.create({container:{flex:1},safeAreaContainer:{flex:1}}),r=({children:t,statusBarStyle:y="auto",backgroundColor:i,style:x,...f})=>{const{theme:B,isDark:k}=j(),S=i||B.colors.background,w=()=>y==="auto"?k?"light-content":"dark-content":y;return e.jsxs(g,{style:[b.container,{backgroundColor:S},x],...f,children:[e.jsx(o,{barStyle:w(),backgroundColor:S}),t]})};r.__docgenInfo={description:"",methods:[],displayName:"ContentView",props:{children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},statusBarStyle:{required:!1,tsType:{name:"union",raw:"'light-content' | 'dark-content' | 'auto'",elements:[{name:"literal",value:"'light-content'"},{name:"literal",value:"'dark-content'"},{name:"literal",value:"'auto'"}]},description:"",defaultValue:{value:"'auto'",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const E={title:"Container/Content",component:r,parameters:{layout:"fullscreen",docs:{description:{component:"Content 전체를 감싸는 컨테이너 컴포넌트입니다. 다크/라이트 모드에 따라 배경색이 자동으로 설정되며, SafeAreaView와 StatusBar를 제어할 수 있습니다."}}},argTypes:{statusBarStyle:{control:{type:"select"},options:["light-content","dark-content","auto"],description:"StatusBar 스타일"},backgroundColor:{control:{type:"color"},description:"커스텀 배경색 (선택사항)"}},args:{statusBarStyle:"auto"}},a=()=>e.jsxs(g,{style:n.content,children:[e.jsx(C,{variant:"h2",style:n.title,children:"Content 데모"}),e.jsx(C,{variant:"body1",style:n.description,children:"이 컨테이너는 테마에 따라 배경색이 자동으로 변경됩니다."}),e.jsx(V,{variant:"solid",color:"primary",style:n.button,children:"버튼 예제"})]}),c={render:t=>e.jsx(r,{...t,children:e.jsx(a,{})})},d={render:t=>e.jsx(r,{...t,children:e.jsx(a,{})}),parameters:{docs:{description:{story:"SafeArea를 사용하지 않는 버전입니다."}}}},l={args:{statusBarStyle:"light-content"},render:t=>e.jsx(r,{...t,children:e.jsx(a,{})}),parameters:{docs:{description:{story:"StatusBar 스타일을 light-content로 고정합니다."}}}},u={args:{statusBarStyle:"dark-content"},render:t=>e.jsx(r,{...t,children:e.jsx(a,{})}),parameters:{docs:{description:{story:"StatusBar 스타일을 dark-content로 고정합니다."}}}},m={args:{backgroundColor:"#e3f2fd"},render:t=>e.jsx(r,{...t,children:e.jsx(a,{})}),parameters:{docs:{description:{story:"커스텀 배경색을 사용하는 예제입니다."}}}},p={render:t=>e.jsx(r,{...t,children:e.jsx(g,{style:n.scrollContent,children:Array.from({length:20},(y,i)=>e.jsx(g,{style:n.scrollItem,children:e.jsxs(C,{variant:"body1",children:["스크롤 아이템 ",i+1]})},i))})}),parameters:{docs:{description:{story:"스크롤 가능한 콘텐츠와 함께 사용하는 예제입니다."}}}},n=h.create({content:{flex:1,justifyContent:"center",alignItems:"center",padding:20},title:{textAlign:"center",marginBottom:16},description:{textAlign:"center",marginBottom:24,paddingHorizontal:20},button:{marginTop:16},scrollContent:{padding:20},scrollItem:{padding:16,marginBottom:8,borderRadius:8,backgroundColor:"rgba(0, 0, 0, 0.05)"}});c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <ContentView {...args}>
            <DemoContent />
        </ContentView>
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <ContentView {...args}>
            <DemoContent />
        </ContentView>,
  parameters: {
    docs: {
      description: {
        story: 'SafeArea를 사용하지 않는 버전입니다.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    statusBarStyle: 'light-content'
  },
  render: args => <ContentView {...args}>
            <DemoContent />
        </ContentView>,
  parameters: {
    docs: {
      description: {
        story: 'StatusBar 스타일을 light-content로 고정합니다.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    statusBarStyle: 'dark-content'
  },
  render: args => <ContentView {...args}>
            <DemoContent />
        </ContentView>,
  parameters: {
    docs: {
      description: {
        story: 'StatusBar 스타일을 dark-content로 고정합니다.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    backgroundColor: '#e3f2fd'
  },
  render: args => <ContentView {...args}>
            <DemoContent />
        </ContentView>,
  parameters: {
    docs: {
      description: {
        story: '커스텀 배경색을 사용하는 예제입니다.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <ContentView {...args}>
            <View style={demoStyles.scrollContent}>
                {Array.from({
        length: 20
      }, (_, index) =>
      // biome-ignore lint/suspicious/noArrayIndexKey: demo content with static list
      <View key={index} style={demoStyles.scrollItem}>
                        <Text variant="body1">스크롤 아이템 {index + 1}</Text>
                    </View>)}
            </View>
        </ContentView>,
  parameters: {
    docs: {
      description: {
        story: '스크롤 가능한 콘텐츠와 함께 사용하는 예제입니다.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const H=["Default","WithoutSafeArea","LightStatusBar","DarkStatusBar","CustomBackground","ScrollableContent"];export{m as CustomBackground,u as DarkStatusBar,c as Default,l as LightStatusBar,p as ScrollableContent,d as WithoutSafeArea,H as __namedExportsOrder,E as default};
