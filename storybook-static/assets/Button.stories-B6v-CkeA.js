import{j as s}from"./iframe-DZiCWydc.js";import{B as e}from"./Button-LyYxIoWq.js";import"./preload-helper-Zf8nSx-t.js";import"./useTheme-DmX67AR3.js";import"./Text-Ct2hx8n9.js";import"./index-DbRQ8wOu.js";import"./index-D_tP2JIZ.js";import"./extends-CF3RwP-h.js";import"./index-BYoTIcwY.js";const E={title:"components/Button",component:e,parameters:{layout:"centered",docs:{description:{component:"테마를 지원하는 커스터마이즈 가능한 버튼 컴포넌트입니다."}}},argTypes:{variant:{control:{type:"select"},options:["solid","bordered","light","flat","faded","shadow","ghost"],description:"버튼의 시각적 스타일 변형"},color:{control:{type:"select"},options:["default","primary","secondary","success","warning","danger"],description:"버튼의 색상 테마"},size:{control:{type:"select"},options:["sm","md","lg"],description:"버튼의 크기"},radius:{control:{type:"select"},options:["none","sm","md","lg","full"],description:"버튼의 모서리 반지름"},isDisabled:{control:{type:"boolean"},description:"버튼 비활성화 여부"},isLoading:{control:{type:"boolean"},description:"버튼 로딩 상태 여부"},isIconOnly:{control:{type:"boolean"},description:"아이콘만 표시 여부"}}},a={args:{children:"버튼"},render:r=>s.jsx(e,{...r})},n={args:{children:"주요 버튼",color:"primary"},render:r=>s.jsx(e,{...r})},o={args:{children:"보조 버튼",color:"secondary",variant:"bordered"},render:r=>s.jsx(e,{...r})},c={args:{children:"삭제",color:"danger"},render:r=>s.jsx(e,{...r})},t={args:{children:"저장",color:"success"},render:r=>s.jsx(e,{...r})},i={args:{children:"주의",color:"warning"},render:r=>s.jsx(e,{...r})},d={args:{children:"로딩 중...",isLoading:!0,color:"primary"},render:r=>s.jsx(e,{...r})},l={args:{children:"비활성화된 버튼",isDisabled:!0},render:r=>s.jsx(e,{...r})},p={args:{children:"작은 버튼",size:"sm",color:"primary"},render:r=>s.jsx(e,{...r})},m={args:{children:"큰 버튼",size:"lg",color:"primary"},render:r=>s.jsx(e,{...r})},g={args:{children:"경계선 버튼",variant:"bordered",color:"primary"},render:r=>s.jsx(e,{...r})},u={args:{children:"밝은색 버튼",variant:"light",color:"primary"},render:r=>s.jsx(e,{...r})},h={args:{children:"플랫 버튼",variant:"flat",color:"primary"},render:r=>s.jsx(e,{...r})},y={args:{children:"페이드 버튼",variant:"faded",color:"primary"},render:r=>s.jsx(e,{...r})},x={args:{children:"그림자 버튼",variant:"shadow",color:"primary"},render:r=>s.jsx(e,{...r})},B={args:{children:"고스트 버튼",variant:"ghost",color:"primary"},render:r=>s.jsx(e,{...r})},j={args:{children:"❤️",isIconOnly:!0,color:"danger",variant:"light"},render:r=>s.jsx(e,{...r})},v={args:{children:"플레이그라운드 버튼",color:"primary",variant:"solid",size:"md",radius:"md",isDisabled:!1,isLoading:!1,isIconOnly:!1},render:r=>s.jsx(e,{...r})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    children: '버튼'
  },
  render: args => <Button {...args} />
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    children: '주요 버튼',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    children: '보조 버튼',
    color: 'secondary',
    variant: 'bordered'
  },
  render: args => <Button {...args} />
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    children: '삭제',
    color: 'danger'
  },
  render: args => <Button {...args} />
}`,...c.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    children: '저장',
    color: 'success'
  },
  render: args => <Button {...args} />
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    children: '주의',
    color: 'warning'
  },
  render: args => <Button {...args} />
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    children: '로딩 중...',
    isLoading: true,
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    children: '비활성화된 버튼',
    isDisabled: true
  },
  render: args => <Button {...args} />
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    children: '작은 버튼',
    size: 'sm',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    children: '큰 버튼',
    size: 'lg',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    children: '경계선 버튼',
    variant: 'bordered',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    children: '밝은색 버튼',
    variant: 'light',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    children: '플랫 버튼',
    variant: 'flat',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    children: '페이드 버튼',
    variant: 'faded',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    children: '그림자 버튼',
    variant: 'shadow',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    children: '고스트 버튼',
    variant: 'ghost',
    color: 'primary'
  },
  render: args => <Button {...args} />
}`,...B.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    children: '❤️',
    isIconOnly: true,
    color: 'danger',
    variant: 'light'
  },
  render: args => <Button {...args} />
}`,...j.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    children: '플레이그라운드 버튼',
    color: 'primary',
    variant: 'solid',
    size: 'md',
    radius: 'md',
    isDisabled: false,
    isLoading: false,
    isIconOnly: false
  },
  render: args => <Button {...args} />
}`,...v.parameters?.docs?.source}}};const _=["기본","주요","보조","위험","성공","경고","로딩","비활성화","작은크기","큰크기","경계선","밝은색","플랫","페이드","그림자","고스트","아이콘만","플레이그라운드"];export{_ as __namedExportsOrder,E as default,g as 경계선,i as 경고,B as 고스트,x as 그림자,a as 기본,d as 로딩,u as 밝은색,o as 보조,l as 비활성화,t as 성공,j as 아이콘만,c as 위험,p as 작은크기,n as 주요,m as 큰크기,y as 페이드,h as 플랫,v as 플레이그라운드};
