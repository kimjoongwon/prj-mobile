import{j as e,V as n,r as C}from"./iframe-DZiCWydc.js";import{u as V}from"./useTheme-DmX67AR3.js";import{T as E}from"./Text-Ct2hx8n9.js";import{I as r}from"./InputView.web-C3zGn3H6.js";import{I as o}from"./Ionicons-C1CJY6-4.js";import{T as j}from"./index-D_tP2JIZ.js";import"./preload-helper-Zf8nSx-t.js";import"./index-DbRQ8wOu.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";import"./index-BXMmz_RV.js";import"./index-DS8CYKj5.js";const w={none:void 0,mail:e.jsx(o,{name:"mail",size:16,color:"#666"}),eye:e.jsx(o,{name:"eye",size:16,color:"#666"}),search:e.jsx(o,{name:"search",size:16,color:"#666"}),person:e.jsx(o,{name:"person",size:16,color:"#666"}),lock:e.jsx(o,{name:"lock-closed",size:16,color:"#666"})},N={title:"Forms/Input",component:r,argTypes:{variant:{control:{type:"select"},options:["flat","bordered","underlined","faded"]},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"]},size:{control:{type:"select"},options:["sm","md","lg"]},labelPlacement:{control:{type:"select"},options:["inside","outside","outside-left"]},startIcon:{control:{type:"select"},options:["none","mail","search","person","lock"],mapping:w},endIcon:{control:{type:"select"},options:["none","eye","search"],mapping:w},isDisabled:{control:{type:"boolean"}},isReadOnly:{control:{type:"boolean"}},isInvalid:{control:{type:"boolean"}},isRequired:{control:{type:"boolean"}},isClearable:{control:{type:"boolean"}}},decorators:[(l,{args:a})=>e.jsx(n,{style:{padding:16},children:e.jsx(l,{args:{...a,startContent:a.startIcon||void 0,endContent:a.endIcon||void 0}})})]},s={args:{label:"Email",placeholder:"Enter your email",variant:"flat",color:"default",size:"md",labelPlacement:"inside"}},i={args:{label:"Flat Input",placeholder:"Enter text",variant:"flat",color:"primary",size:"md",labelPlacement:"inside"}},t={args:{label:"Bordered Input",placeholder:"Enter text",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside"}},d={args:{label:"Underlined Input",placeholder:"Enter text",variant:"underlined",color:"primary",size:"md",labelPlacement:"inside"}},c={args:{label:"Faded Input",placeholder:"Enter text",variant:"faded",color:"primary",size:"md",labelPlacement:"inside"}},m={args:{label:"Email",placeholder:"Enter your email",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",startIcon:"mail"}},p={args:{label:"Password",placeholder:"Enter your password",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",secureTextEntry:!0,endIcon:"eye"}},u={args:{label:"Search",placeholder:"Search something",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",isClearable:!0}},b={args:{label:"Outside Label",placeholder:"Enter text",variant:"bordered",color:"primary",size:"md",labelPlacement:"outside"}},y={args:{label:"Name",placeholder:"Enter your name",variant:"bordered",color:"primary",size:"md",labelPlacement:"outside-left"}},g={args:{label:"Required Field",placeholder:"This field is required",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",isRequired:!0}},h={args:{label:"Invalid Input",placeholder:"Enter text",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",isInvalid:!0,errorMessage:"This field is invalid"}},v={args:{label:"Username",placeholder:"Enter your username",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",description:"Username must be at least 3 characters long"}},z={args:{label:"Disabled Input",placeholder:"This input is disabled",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",isDisabled:!0,value:"Disabled value"}},P={args:{label:"Read Only Input",placeholder:"This input is read only",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside",isReadOnly:!0,value:"Read only value"}},x={render:()=>e.jsxs(n,{style:{gap:16},children:[e.jsx(r,{label:"Small Input",placeholder:"Small size",variant:"bordered",color:"primary",size:"sm",labelPlacement:"inside"}),e.jsx(r,{label:"Medium Input",placeholder:"Medium size",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Large Input",placeholder:"Large size",variant:"bordered",color:"primary",size:"lg",labelPlacement:"inside"})]}),args:{}},I={render:()=>e.jsxs(n,{style:{gap:16},children:[e.jsx(r,{label:"Default Color",placeholder:"Default color",variant:"bordered",color:"default",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Primary Color",placeholder:"Primary color",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Secondary Color",placeholder:"Secondary color",variant:"bordered",color:"secondary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Success Color",placeholder:"Success color",variant:"bordered",color:"success",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Warning Color",placeholder:"Warning color",variant:"bordered",color:"warning",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Danger Color",placeholder:"Danger color",variant:"bordered",color:"danger",size:"md",labelPlacement:"inside"})]}),args:{}},f={render:()=>e.jsxs(n,{style:{gap:16},children:[e.jsx(r,{label:"Flat Variant",placeholder:"Flat variant",variant:"flat",color:"primary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Bordered Variant",placeholder:"Bordered variant",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Underlined Variant",placeholder:"Underlined variant",variant:"underlined",color:"primary",size:"md",labelPlacement:"inside"}),e.jsx(r,{label:"Faded Variant",placeholder:"Faded variant",variant:"faded",color:"primary",size:"md",labelPlacement:"inside"})]}),args:{}},F=()=>{const l=C.useRef(null),{theme:a}=V();return e.jsxs(n,{style:{gap:16},children:[e.jsx(r,{ref:l,label:"Test Input",placeholder:"Click buttons to test focus",variant:"bordered",color:"primary",size:"md",labelPlacement:"inside"}),e.jsxs(n,{style:{flexDirection:"row",gap:10},children:[e.jsx(j,{style:{backgroundColor:a.colors.primary.DEFAULT,padding:12,borderRadius:8,flex:1},onPress:()=>l.current?.focus(),children:e.jsx(E,{style:{color:"white",textAlign:"center"},children:"Focus"})}),e.jsx(j,{style:{backgroundColor:a.colors.danger.DEFAULT,padding:12,borderRadius:8,flex:1},onPress:()=>l.current?.blur(),children:e.jsx(E,{style:{color:"white",textAlign:"center"},children:"Blur"})}),e.jsx(j,{style:{backgroundColor:a.colors.warning.DEFAULT,padding:12,borderRadius:8,flex:1},onPress:()=>l.current?.clear(),children:e.jsx(E,{style:{color:"white",textAlign:"center"},children:"Clear"})})]})]})},S={render:()=>e.jsx(F,{}),args:{}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'flat',
    color: 'default',
    size: 'md',
    labelPlacement: 'inside'
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Flat Input',
    placeholder: 'Enter text',
    variant: 'flat',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside'
  }
}`,...i.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Bordered Input',
    placeholder: 'Enter text',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside'
  }
}`,...t.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Underlined Input',
    placeholder: 'Enter text',
    variant: 'underlined',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Faded Input',
    placeholder: 'Enter text',
    variant: 'faded',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside'
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    startIcon: 'mail'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Password',
    placeholder: 'Enter your password',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    secureTextEntry: true,
    endIcon: 'eye'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Search',
    placeholder: 'Search something',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    isClearable: true
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Outside Label',
    placeholder: 'Enter text',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'outside'
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'outside-left'
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Required Field',
    placeholder: 'This field is required',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    isRequired: true
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Invalid Input',
    placeholder: 'Enter text',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    isInvalid: true,
    errorMessage: 'This field is invalid'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    description: 'Username must be at least 3 characters long'
  }
}`,...v.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Input',
    placeholder: 'This input is disabled',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    isDisabled: true,
    value: 'Disabled value'
  }
}`,...z.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Input',
    placeholder: 'This input is read only',
    variant: 'bordered',
    color: 'primary',
    size: 'md',
    labelPlacement: 'inside',
    isReadOnly: true,
    value: 'Read only value'
  }
}`,...P.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <InputView label="Small Input" placeholder="Small size" variant="bordered" color="primary" size="sm" labelPlacement="inside" />
            <InputView label="Medium Input" placeholder="Medium size" variant="bordered" color="primary" size="md" labelPlacement="inside" />
            <InputView label="Large Input" placeholder="Large size" variant="bordered" color="primary" size="lg" labelPlacement="inside" />
        </View>,
  args: {}
}`,...x.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <InputView label="Default Color" placeholder="Default color" variant="bordered" color="default" size="md" labelPlacement="inside" />
            <InputView label="Primary Color" placeholder="Primary color" variant="bordered" color="primary" size="md" labelPlacement="inside" />
            <InputView label="Secondary Color" placeholder="Secondary color" variant="bordered" color="secondary" size="md" labelPlacement="inside" />
            <InputView label="Success Color" placeholder="Success color" variant="bordered" color="success" size="md" labelPlacement="inside" />
            <InputView label="Warning Color" placeholder="Warning color" variant="bordered" color="warning" size="md" labelPlacement="inside" />
            <InputView label="Danger Color" placeholder="Danger color" variant="bordered" color="danger" size="md" labelPlacement="inside" />
        </View>,
  args: {}
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <View style={{
    gap: 16
  }}>
            <InputView label="Flat Variant" placeholder="Flat variant" variant="flat" color="primary" size="md" labelPlacement="inside" />
            <InputView label="Bordered Variant" placeholder="Bordered variant" variant="bordered" color="primary" size="md" labelPlacement="inside" />
            <InputView label="Underlined Variant" placeholder="Underlined variant" variant="underlined" color="primary" size="md" labelPlacement="inside" />
            <InputView label="Faded Variant" placeholder="Faded variant" variant="faded" color="primary" size="md" labelPlacement="inside" />
        </View>,
  args: {}
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <FocusTestComponent />,
  args: {}
}`,...S.parameters?.docs?.source}}};const _=["Default","Flat","Bordered","Underlined","Faded","WithStartContent","WithEndContent","Clearable","OutsideLabel","OutsideLeftLabel","Required","Invalid","WithDescription","Disabled","ReadOnly","Sizes","Colors","Variants","FocusTest"];export{t as Bordered,u as Clearable,I as Colors,s as Default,z as Disabled,c as Faded,i as Flat,S as FocusTest,h as Invalid,b as OutsideLabel,y as OutsideLeftLabel,P as ReadOnly,g as Required,x as Sizes,d as Underlined,f as Variants,v as WithDescription,p as WithEndContent,m as WithStartContent,_ as __namedExportsOrder,N as default};
