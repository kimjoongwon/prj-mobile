import{S as N,j as e,V as o}from"./iframe-DZiCWydc.js";import{T as i}from"./Text-Ct2hx8n9.js";import{u as U}from"./useTheme-DmX67AR3.js";import{I as s}from"./Ionicons-C1CJY6-4.js";import{I as F}from"./index-DS6zS9sy.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DbRQ8wOu.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";import"./index-BXMmz_RV.js";import"./index-DS8CYKj5.js";const q={sm:{height:24,paddingHorizontal:8,fontSize:12,gap:4,avatarSize:16},md:{height:32,paddingHorizontal:12,fontSize:14,gap:6,avatarSize:20},lg:{height:40,paddingHorizontal:16,fontSize:16,gap:8,avatarSize:24}},B={none:0,sm:4,md:6,lg:8,full:999},l=N.create({chip:{flexDirection:"row",alignItems:"center",borderWidth:1,overflow:"hidden",alignSelf:"flex-start"},chipContent:{flexDirection:"row",alignItems:"center"},chipText:{fontWeight:"500"},startContent:{marginRight:6},endContent:{marginLeft:6},avatar:{borderRadius:999,overflow:"hidden",marginRight:6},shadowVariant:{shadowOffset:{width:0,height:2},shadowOpacity:.1,shadowRadius:4,elevation:2},disabled:{opacity:.5}}),r=({children:t,variant:v="solid",color:D="default",size:V="md",radius:T="full",isDisabled:I=!1,startContent:b,endContent:S,avatar:z,style:R})=>{const{theme:W}=U(),n=q[V],A=B[T],j=(()=>{const a=W.colors[D]||W.colors.default;switch(v){case"solid":return{backgroundColor:a.DEFAULT,borderColor:a.DEFAULT,textColor:a.foreground};case"bordered":return{backgroundColor:"transparent",borderColor:a.DEFAULT,textColor:a.DEFAULT};case"light":return{backgroundColor:a[100],borderColor:a[200],textColor:a[800]};case"flat":return{backgroundColor:a[100],borderColor:"transparent",textColor:a[800]};case"faded":return{backgroundColor:a[50],borderColor:a[300],textColor:a[700]};case"shadow":return{backgroundColor:a.DEFAULT,borderColor:a.DEFAULT,textColor:a.foreground};default:return{backgroundColor:a.DEFAULT,borderColor:a.DEFAULT,textColor:a.foreground}}})(),E={...l.chip,height:n.height,paddingHorizontal:n.paddingHorizontal,borderRadius:A,backgroundColor:j.backgroundColor,borderColor:j.borderColor,...v==="shadow"&&l.shadowVariant,...I&&l.disabled},k=()=>z?e.jsx(o,{style:[l.avatar,{width:n.avatarSize,height:n.avatarSize}],children:z}):b?e.jsx(o,{style:l.startContent,children:b}):null,L=()=>S?e.jsx(o,{style:l.endContent,children:S}):null;return e.jsxs(o,{style:[E,R],children:[k(),e.jsx(i,{style:[l.chipText,{color:j.textColor,fontSize:n.fontSize}],numberOfLines:1,children:t}),L()]})};r.__docgenInfo={description:"",methods:[],displayName:"Chip",props:{children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},variant:{required:!1,tsType:{name:"union",raw:"'solid' | 'bordered' | 'light' | 'flat' | 'faded' | 'shadow'",elements:[{name:"literal",value:"'solid'"},{name:"literal",value:"'bordered'"},{name:"literal",value:"'light'"},{name:"literal",value:"'flat'"},{name:"literal",value:"'faded'"},{name:"literal",value:"'shadow'"}]},description:"",defaultValue:{value:"'solid'",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'",elements:[{name:"literal",value:"'default'"},{name:"literal",value:"'primary'"},{name:"literal",value:"'secondary'"},{name:"literal",value:"'success'"},{name:"literal",value:"'warning'"},{name:"literal",value:"'danger'"}]},description:"",defaultValue:{value:"'default'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"",defaultValue:{value:"'md'",computed:!1}},radius:{required:!1,tsType:{name:"union",raw:"'none' | 'sm' | 'md' | 'lg' | 'full'",elements:[{name:"literal",value:"'none'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'full'"}]},description:"",defaultValue:{value:"'full'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},startContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},endContent:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},avatar:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""},style:{required:!1,tsType:{name:"ViewStyle"},description:""}}};const $={title:"components/Chip",component:r,parameters:{layout:"centered",docs:{description:{component:"모던한 디자인의 정적 Chip 컴포넌트입니다. 다양한 변형, 색상, 크기를 지원하며 UI 표시 역할만 합니다."}}},argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow"],description:"칩 변형"},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"],description:"칩 색상"},size:{control:{type:"select"},options:["sm","md","lg"],description:"칩 크기"},radius:{control:{type:"select"},options:["none","sm","md","lg","full"],description:"모서리 둥글기"},isDisabled:{control:{type:"boolean"},description:"비활성화 상태"},children:{control:{type:"text"},description:"칩 내용"}},decorators:[t=>e.jsx(o,{style:{padding:16,alignItems:"flex-start"},children:e.jsx(t,{})})]},c={args:{children:"Default Chip"}},d={render:t=>e.jsx(r,{...t,variant:"bordered",color:"danger",endContent:e.jsx(s,{name:"close",size:14,color:"#f31260"}),children:"With End Content"}),args:{}},p={render:t=>e.jsx(r,{...t,variant:"solid",color:"primary",startContent:e.jsx(s,{name:"star",size:16,color:"white"}),children:"With Icon"}),args:{}},h={render:t=>e.jsx(r,{...t,variant:"bordered",color:"secondary",endContent:e.jsx(s,{name:"arrow-forward",size:14,color:"#7828c8"}),children:"With End Icon"}),args:{}},m={render:t=>e.jsx(r,{...t,variant:"light",color:"success",avatar:e.jsx(F,{source:{uri:"https://i.pravatar.cc/40?img=1"},style:{width:20,height:20,borderRadius:10}}),children:"John Doe"}),args:{}},g={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"All Variants"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{variant:"solid",color:"primary",children:"Solid"}),e.jsx(r,{variant:"bordered",color:"primary",children:"Bordered"}),e.jsx(r,{variant:"light",color:"primary",children:"Light"}),e.jsx(r,{variant:"flat",color:"primary",children:"Flat"}),e.jsx(r,{variant:"faded",color:"primary",children:"Faded"}),e.jsx(r,{variant:"shadow",color:"primary",children:"Shadow"})]})]}),args:{}},u={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"All Colors"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{color:"default",children:"Default"}),e.jsx(r,{color:"primary",children:"Primary"}),e.jsx(r,{color:"secondary",children:"Secondary"}),e.jsx(r,{color:"success",children:"Success"}),e.jsx(r,{color:"warning",children:"Warning"}),e.jsx(r,{color:"danger",children:"Danger"})]})]}),args:{}},f={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"All Sizes"}),e.jsxs(o,{style:{flexDirection:"row",alignItems:"center",gap:8},children:[e.jsx(r,{size:"sm",color:"primary",children:"Small"}),e.jsx(r,{size:"md",color:"primary",children:"Medium"}),e.jsx(r,{size:"lg",color:"primary",children:"Large"})]})]}),args:{}},x={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"All Radius"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{radius:"none",color:"primary",children:"None"}),e.jsx(r,{radius:"sm",color:"primary",children:"Small"}),e.jsx(r,{radius:"md",color:"primary",children:"Medium"}),e.jsx(r,{radius:"lg",color:"primary",children:"Large"}),e.jsx(r,{radius:"full",color:"primary",children:"Full"})]})]}),args:{}},C={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"Content Examples"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{variant:"solid",color:"primary",children:"Solid Chip"}),e.jsx(r,{variant:"bordered",color:"danger",endContent:e.jsx(s,{name:"close",size:14,color:"#f31260"}),children:"With Close Icon"}),e.jsx(r,{variant:"light",color:"success",startContent:e.jsx(s,{name:"checkmark",size:14,color:"#17c964"}),children:"Success Status"}),e.jsx(r,{variant:"flat",color:"warning",avatar:e.jsx(o,{style:{width:16,height:16,backgroundColor:"#f5a524",borderRadius:8,justifyContent:"center",alignItems:"center"},children:e.jsx(i,{style:{color:"white",fontSize:10,fontWeight:"bold"},children:"!"})}),children:"Warning"})]})]}),args:{}},y={render:()=>e.jsxs(o,{style:{gap:16},children:[e.jsx(i,{style:{fontSize:18,fontWeight:"bold"},children:"Disabled States"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{isDisabled:!0,children:"Disabled"}),e.jsx(r,{isDisabled:!0,color:"primary",children:"Disabled Primary"}),e.jsx(r,{isDisabled:!0,color:"success",endContent:e.jsx(s,{name:"close",size:14,color:"#17c964"}),children:"Disabled with Icon"}),e.jsx(r,{isDisabled:!0,color:"danger",startContent:e.jsx(s,{name:"close",size:14,color:"#f31260"}),children:"Disabled Icon"})]})]}),args:{}},w={render:()=>e.jsxs(o,{style:{gap:24},children:[e.jsxs(o,{children:[e.jsx(i,{style:{fontSize:16,fontWeight:"600",marginBottom:8},children:"기술 스택"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:6},children:[e.jsx(r,{size:"sm",variant:"flat",color:"primary",children:"React Native"}),e.jsx(r,{size:"sm",variant:"flat",color:"secondary",children:"TypeScript"}),e.jsx(r,{size:"sm",variant:"flat",color:"success",children:"Node.js"}),e.jsx(r,{size:"sm",variant:"flat",color:"warning",children:"Expo"})]})]}),e.jsxs(o,{children:[e.jsx(i,{style:{fontSize:16,fontWeight:"600",marginBottom:8},children:"선택된 필터"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsx(r,{variant:"solid",color:"primary",endContent:e.jsx(s,{name:"close",size:14,color:"white"}),children:"React"}),e.jsx(r,{variant:"solid",color:"primary",endContent:e.jsx(s,{name:"close",size:14,color:"white"}),children:"Mobile"}),e.jsx(r,{variant:"solid",color:"primary",endContent:e.jsx(s,{name:"close",size:14,color:"white"}),children:"UI/UX"})]})]}),e.jsxs(o,{children:[e.jsx(i,{style:{fontSize:16,fontWeight:"600",marginBottom:8},children:"상태 표시"}),e.jsxs(o,{style:{flexDirection:"row",flexWrap:"wrap",gap:8},children:[e.jsxs(r,{variant:"light",color:"success",children:[e.jsx(i,{children:"● "}),"Active"]}),e.jsxs(r,{variant:"light",color:"warning",children:[e.jsx(i,{children:"● "}),"Pending"]}),e.jsxs(r,{variant:"light",color:"danger",children:[e.jsx(i,{children:"● "}),"Inactive"]}),e.jsxs(r,{variant:"light",color:"default",children:[e.jsx(i,{children:"● "}),"Unknown"]})]})]})]}),args:{}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: 'Default Chip'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} variant="bordered" color="danger" endContent={<Ionicons name="close" size={14} color="#f31260" />}>
            With End Content
        </Chip>,
  args: {}
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} variant="solid" color="primary" startContent={<Ionicons name="star" size={16} color="white" />}>
            With Icon
        </Chip>,
  args: {}
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} variant="bordered" color="secondary" endContent={<Ionicons name="arrow-forward" size={14} color="#7828c8" />}>
            With End Icon
        </Chip>,
  args: {}
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => <Chip {...args} variant="light" color="success" avatar={<Image source={{
    uri: 'https://i.pravatar.cc/40?img=1'
  }} style={{
    width: 20,
    height: 20,
    borderRadius: 10
  }} />}>
            John Doe
        </Chip>,
  args: {}
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>All Variants</Text>
            <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8
    }}>
                <Chip variant="solid" color="primary">
                    Solid
                </Chip>
                <Chip variant="bordered" color="primary">
                    Bordered
                </Chip>
                <Chip variant="light" color="primary">
                    Light
                </Chip>
                <Chip variant="flat" color="primary">
                    Flat
                </Chip>
                <Chip variant="faded" color="primary">
                    Faded
                </Chip>
                <Chip variant="shadow" color="primary">
                    Shadow
                </Chip>
            </View>
        </View>,
  args: {}
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>All Colors</Text>
            <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8
    }}>
                <Chip color="default">Default</Chip>
                <Chip color="primary">Primary</Chip>
                <Chip color="secondary">Secondary</Chip>
                <Chip color="success">Success</Chip>
                <Chip color="warning">Warning</Chip>
                <Chip color="danger">Danger</Chip>
            </View>
        </View>,
  args: {}
}`,...u.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>All Sizes</Text>
            <View style={{
      flexDirection: 'row',
      alignItems: 'center',
      gap: 8
    }}>
                <Chip size="sm" color="primary">
                    Small
                </Chip>
                <Chip size="md" color="primary">
                    Medium
                </Chip>
                <Chip size="lg" color="primary">
                    Large
                </Chip>
            </View>
        </View>,
  args: {}
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>All Radius</Text>
            <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8
    }}>
                <Chip radius="none" color="primary">
                    None
                </Chip>
                <Chip radius="sm" color="primary">
                    Small
                </Chip>
                <Chip radius="md" color="primary">
                    Medium
                </Chip>
                <Chip radius="lg" color="primary">
                    Large
                </Chip>
                <Chip radius="full" color="primary">
                    Full
                </Chip>
            </View>
        </View>,
  args: {}
}`,...x.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>Content Examples</Text>
            <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8
    }}>
                <Chip variant="solid" color="primary">
                    Solid Chip
                </Chip>
                <Chip variant="bordered" color="danger" endContent={<Ionicons name="close" size={14} color="#f31260" />}>
                    With Close Icon
                </Chip>
                <Chip variant="light" color="success" startContent={<Ionicons name="checkmark" size={14} color="#17c964" />}>
                    Success Status
                </Chip>
                <Chip variant="flat" color="warning" avatar={<View style={{
        width: 16,
        height: 16,
        backgroundColor: '#f5a524',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
                            <Text style={{
          color: 'white',
          fontSize: 10,
          fontWeight: 'bold'
        }}>
                                !
                            </Text>
                        </View>}>
                    Warning
                </Chip>
            </View>
        </View>,
  args: {}
}`,...C.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <Text style={{
      fontSize: 18,
      fontWeight: 'bold'
    }}>Disabled States</Text>
            <View style={{
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 8
    }}>
                <Chip isDisabled>Disabled</Chip>
                <Chip isDisabled color="primary">
                    Disabled Primary
                </Chip>
                <Chip isDisabled color="success" endContent={<Ionicons name="close" size={14} color="#17c964" />}>
                    Disabled with Icon
                </Chip>
                <Chip isDisabled color="danger" startContent={<Ionicons name="close" size={14} color="#f31260" />}>
                    Disabled Icon
                </Chip>
            </View>
        </View>,
  args: {}
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 24
  }}>
            <View>
                <Text style={{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
      }}>
                    기술 스택
                </Text>
                <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 6
      }}>
                    <Chip size="sm" variant="flat" color="primary">
                        React Native
                    </Chip>
                    <Chip size="sm" variant="flat" color="secondary">
                        TypeScript
                    </Chip>
                    <Chip size="sm" variant="flat" color="success">
                        Node.js
                    </Chip>
                    <Chip size="sm" variant="flat" color="warning">
                        Expo
                    </Chip>
                </View>
            </View>

            <View>
                <Text style={{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
      }}>
                    선택된 필터
                </Text>
                <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
      }}>
                    <Chip variant="solid" color="primary" endContent={<Ionicons name="close" size={14} color="white" />}>
                        React
                    </Chip>
                    <Chip variant="solid" color="primary" endContent={<Ionicons name="close" size={14} color="white" />}>
                        Mobile
                    </Chip>
                    <Chip variant="solid" color="primary" endContent={<Ionicons name="close" size={14} color="white" />}>
                        UI/UX
                    </Chip>
                </View>
            </View>

            <View>
                <Text style={{
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
      }}>
                    상태 표시
                </Text>
                <View style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 8
      }}>
                    <Chip variant="light" color="success">
                        <Text>● </Text>Active
                    </Chip>
                    <Chip variant="light" color="warning">
                        <Text>● </Text>Pending
                    </Chip>
                    <Chip variant="light" color="danger">
                        <Text>● </Text>Inactive
                    </Chip>
                    <Chip variant="light" color="default">
                        <Text>● </Text>Unknown
                    </Chip>
                </View>
            </View>
        </View>,
  args: {}
}`,...w.parameters?.docs?.source}}};const ee=["Default","WithEndContent","WithStartIcon","WithEndIcon","WithAvatar","AllVariants","AllColors","AllSizes","AllRadius","WithContentExamples","Disabled","RealWorldExamples"];export{u as AllColors,x as AllRadius,f as AllSizes,g as AllVariants,c as Default,y as Disabled,w as RealWorldExamples,m as WithAvatar,C as WithContentExamples,d as WithEndContent,h as WithEndIcon,p as WithStartIcon,ee as __namedExportsOrder,$ as default};
