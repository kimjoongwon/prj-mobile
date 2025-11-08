import{r as b,S as w,j as e,V as r,P as I}from"./iframe-DZiCWydc.js";import{T as s}from"./Text-Ct2hx8n9.js";import{u as P}from"./useTheme-DmX67AR3.js";import{B as j}from"./Button-LyYxIoWq.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DbRQ8wOu.js";import"./index-D_tP2JIZ.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";const C=b.createContext(null);w.create({fill:{flex:1}});const k="No safe area value available. Make sure you are rendering `<SafeAreaProvider>` at the top of your app.";function H(){const t=b.useContext(C);if(t==null)throw new Error(k);return t}C.Consumer;const n=({title:t,subtitle:l,variant:h="default",leftAction:o,rightAction:i,centerContent:v,style:T})=>{const{theme:V}=P(),S=H(),a=W(V,S.top),A=[a.container,h==="transparent"&&a.transparent,h==="elevated"&&a.elevated,T];return e.jsx(r,{style:A,children:e.jsxs(r,{style:a.content,children:[e.jsx(r,{style:a.leftSection,children:o&&e.jsx(j,{variant:o.variant||"ghost",color:o.color||"default",size:"sm",onPress:o.onPress,children:o.title})}),e.jsx(r,{style:a.centerSection,children:v||e.jsxs(r,{style:a.titleContainer,children:[t&&e.jsx(s,{variant:"h6",style:a.title,numberOfLines:1,children:t}),l&&e.jsx(s,{variant:"caption",color:"default",style:a.subtitle,numberOfLines:1,children:l})]})}),e.jsx(r,{style:a.rightSection,children:i&&e.jsx(j,{variant:i.variant||"ghost",color:i.color||"default",size:"sm",onPress:i.onPress,children:i.title})})]})})},W=(t,l)=>w.create({container:{backgroundColor:t.colors.background,paddingTop:l,borderBottomWidth:1,borderBottomColor:t.colors.default[200]},transparent:{backgroundColor:"transparent",borderBottomWidth:0,position:"absolute",top:0,left:0,right:0,zIndex:1e3},elevated:{...I.select({ios:{shadowColor:t.colors.overlay,shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4},android:{elevation:4}})},content:{flexDirection:"row",alignItems:"center",height:56,paddingHorizontal:16},leftSection:{flex:1,alignItems:"flex-start"},centerSection:{flex:2,alignItems:"center"},rightSection:{flex:1,alignItems:"flex-end"},titleContainer:{alignItems:"center"},title:{fontWeight:"600",textAlign:"center"},subtitle:{textAlign:"center",marginTop:2}});n.__docgenInfo={description:"",methods:[],displayName:"Header",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'default' | 'transparent' | 'elevated'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'transparent'"},{name:"literal",value:"'elevated'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},leftAction:{required:!1,tsType:{name:"HeaderAction"},description:""},rightAction:{required:!1,tsType:{name:"HeaderAction"},description:""},centerContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ViewStyle"},description:""},showStatusBar:{required:!1,tsType:{name:"boolean"},description:""},statusBarStyle:{required:!1,tsType:{name:"union",raw:"'auto' | 'inverted' | 'light' | 'dark'",elements:[{name:"literal",value:"'auto'"},{name:"literal",value:"'inverted'"},{name:"literal",value:"'light'"},{name:"literal",value:"'dark'"}]},description:""}},composes:["NativeStackHeaderProps"]};const L={title:"ui/Header",component:n,parameters:{layout:"fullscreen"},argTypes:{variant:{control:{type:"select"},options:["default","transparent","elevated"]},statusBarStyle:{control:{type:"select"},options:["auto","light","dark","inverted"]}}},c={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"기본 헤더 예시"})})]}),args:{title:"기본 헤더"}},d={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"제목과 부제목이 있는 헤더"})})]}),args:{title:"메인 제목",subtitle:"부제목 텍스트"}},g={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"왼쪽 버튼이 있는 헤더"})})]}),args:{title:"페이지 제목",leftAction:{title:"뒤로",onPress:()=>console.log("뒤로 가기"),variant:"ghost"}}},f={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"오른쪽 버튼이 있는 헤더"})})]}),args:{title:"설정",rightAction:{title:"저장",onPress:()=>console.log("저장하기"),variant:"solid",color:"primary"}}},u={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"양쪽 버튼이 모두 있는 헤더"})})]}),args:{title:"편집",leftAction:{title:"취소",onPress:()=>console.log("취소"),variant:"ghost"},rightAction:{title:"완료",onPress:()=>console.log("완료"),variant:"solid",color:"primary"}}},x={render:t=>e.jsxs(r,{style:{flex:1},children:[e.jsx(r,{style:{position:"absolute",top:0,left:0,right:0,bottom:0,backgroundColor:"#4a90e2",justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"h4",style:{color:"white"},children:"배경 컨텐츠"})}),e.jsx(n,{...t})]}),args:{title:"투명 헤더",variant:"transparent",leftAction:{title:"뒤로",onPress:()=>console.log("뒤로 가기"),variant:"ghost"},rightAction:{title:"공유",onPress:()=>console.log("공유하기"),variant:"ghost"}}},m={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"그림자가 있는 헤더"})})]}),args:{title:"그림자 헤더",variant:"elevated",rightAction:{title:"메뉴",onPress:()=>console.log("메뉴"),variant:"ghost"}}},y={render:t=>e.jsxs(r,{style:{flex:1,backgroundColor:"#f5f5f5"},children:[e.jsx(n,{...t,centerContent:e.jsxs(r,{style:{alignItems:"center"},children:[e.jsx(s,{variant:"h6",style:{color:"#4a90e2"},children:"커스텀 제목"}),e.jsx(s,{variant:"caption",color:"default",children:"특별한 스타일"})]})}),e.jsx(r,{style:{flex:1,justifyContent:"center",alignItems:"center"},children:e.jsx(s,{variant:"body1",children:"커스텀 중앙 컨텐츠가 있는 헤더"})})]}),args:{leftAction:{title:"뒤로",onPress:()=>console.log("뒤로 가기"),variant:"ghost"}}},p={render:t=>e.jsxs(r,{style:{flex:1},children:[e.jsx(n,{...t}),e.jsxs(r,{style:{flex:1,justifyContent:"center",alignItems:"center",padding:20},children:[e.jsx(s,{variant:"body1",style:{textAlign:"center",marginBottom:16},children:"다크모드 토글을 사용해서 테마 변경을 테스트해보세요."}),e.jsx(s,{variant:"caption",color:"default",style:{textAlign:"center"},children:"헤더의 배경, 텍스트, 그림자가 자동으로 변경됩니다."})]})]}),args:{title:"다크모드 테스트",subtitle:"테마 변경 확인",variant:"elevated",leftAction:{title:"뒤로",onPress:()=>console.log("뒤로 가기"),variant:"ghost"},rightAction:{title:"설정",onPress:()=>console.log("설정"),variant:"ghost"}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">기본 헤더 예시</Text>
            </View>
        </View>,
  args: {
    title: '기본 헤더'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">제목과 부제목이 있는 헤더</Text>
            </View>
        </View>,
  args: {
    title: '메인 제목',
    subtitle: '부제목 텍스트'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">왼쪽 버튼이 있는 헤더</Text>
            </View>
        </View>,
  args: {
    title: '페이지 제목',
    leftAction: {
      title: '뒤로',
      onPress: () => console.log('뒤로 가기'),
      variant: 'ghost'
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">오른쪽 버튼이 있는 헤더</Text>
            </View>
        </View>,
  args: {
    title: '설정',
    rightAction: {
      title: '저장',
      onPress: () => console.log('저장하기'),
      variant: 'solid',
      color: 'primary'
    }
  }
}`,...f.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">양쪽 버튼이 모두 있는 헤더</Text>
            </View>
        </View>,
  args: {
    title: '편집',
    leftAction: {
      title: '취소',
      onPress: () => console.log('취소'),
      variant: 'ghost'
    },
    rightAction: {
      title: '완료',
      onPress: () => console.log('완료'),
      variant: 'solid',
      color: 'primary'
    }
  }
}`,...u.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1
  }}>
            <View style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#4a90e2',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="h4" style={{
        color: 'white'
      }}>
                    배경 컨텐츠
                </Text>
            </View>
            <Header {...args} />
        </View>,
  args: {
    title: '투명 헤더',
    variant: 'transparent',
    leftAction: {
      title: '뒤로',
      onPress: () => console.log('뒤로 가기'),
      variant: 'ghost'
    },
    rightAction: {
      title: '공유',
      onPress: () => console.log('공유하기'),
      variant: 'ghost'
    }
  }
}`,...x.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">그림자가 있는 헤더</Text>
            </View>
        </View>,
  args: {
    title: '그림자 헤더',
    variant: 'elevated',
    rightAction: {
      title: '메뉴',
      onPress: () => console.log('메뉴'),
      variant: 'ghost'
    }
  }
}`,...m.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1,
    backgroundColor: '#f5f5f5'
  }}>
            <Header {...args} centerContent={<View style={{
      alignItems: 'center'
    }}>
                        <Text variant="h6" style={{
        color: '#4a90e2'
      }}>
                            커스텀 제목
                        </Text>
                        <Text variant="caption" color="default">
                            특별한 스타일
                        </Text>
                    </View>} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
                <Text variant="body1">커스텀 중앙 컨텐츠가 있는 헤더</Text>
            </View>
        </View>,
  args: {
    leftAction: {
      title: '뒤로',
      onPress: () => console.log('뒤로 가기'),
      variant: 'ghost'
    }
  }
}`,...y.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <View style={{
    flex: 1
  }}>
            <Header {...args} />
            <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20
    }}>
                <Text variant="body1" style={{
        textAlign: 'center',
        marginBottom: 16
      }}>
                    다크모드 토글을 사용해서 테마 변경을 테스트해보세요.
                </Text>
                <Text variant="caption" color="default" style={{
        textAlign: 'center'
      }}>
                    헤더의 배경, 텍스트, 그림자가 자동으로 변경됩니다.
                </Text>
            </View>
        </View>,
  args: {
    title: '다크모드 테스트',
    subtitle: '테마 변경 확인',
    variant: 'elevated',
    leftAction: {
      title: '뒤로',
      onPress: () => console.log('뒤로 가기'),
      variant: 'ghost'
    },
    rightAction: {
      title: '설정',
      onPress: () => console.log('설정'),
      variant: 'ghost'
    }
  }
}`,...p.parameters?.docs?.source}}};const M=["Default","WithSubtitle","WithLeftAction","WithRightAction","WithBothActions","Transparent","Elevated","WithCustomCenter","DarkModeTest"];export{p as DarkModeTest,c as Default,m as Elevated,x as Transparent,u as WithBothActions,y as WithCustomCenter,g as WithLeftAction,f as WithRightAction,d as WithSubtitle,M as __namedExportsOrder,L as default};
