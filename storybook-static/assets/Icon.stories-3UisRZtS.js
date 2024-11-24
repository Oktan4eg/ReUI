import{j as n}from"./jsx-runtime-AgcCsxC8.js";import{q as o,A as b}from"./styled-components.browser.esm-79pm2G1e.js";import{I as i,i as c}from"./icon-YOwLkbd0.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const y=o.div`
  color: ${e=>e.theme.colors.fg.secondary};
  font-size: 10px;
`,j=o.h2`
  color: ${e=>e.theme.colors.fg.secondary};
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 24px;
`,k=o.li`
  color: ${e=>e.theme.colors.fg.primary};
  display: flex;
  background: ${e=>e.theme.colors.bg.low};
  border-radius: 16px;
  flex-direction: column;
  width: 120px;
  align-items: center;
  gap: 8px;
  padding: 16px;

  ${e=>e.minimal&&b`
      flex: none;
      min-width: auto;
      padding: 0;
      background: #fff;
      border: 1px solid #666;

      svg {
        display: block;
        margin-right: 0;
        width: 48px;
        height: 48px;
      }
    `};
`,I=o.ul`
  display: flex;
  flex-flow: row wrap;
  gap: 16px;
  list-style: none;
`,$={title:"Компоненты/Icon",component:i,parameters:{status:{type:"stable"},tags:["autodocs"]}},s={render:e=>n.jsxs(n.Fragment,{children:[n.jsxs(j,{children:[Object.keys(c).length," UI mono-icons"]}),n.jsx(I,{children:Object.keys(c).map(t=>n.jsxs(k,{children:[n.jsx(i,{iconName:t,...e}),n.jsx(y,{children:t})]},t))})]}),args:{size:24}},r={render:e=>n.jsxs(n.Fragment,{children:["this is an inline ",n.jsx(i,{...e})," icon (default)"]}),args:{iconName:"user","aria-label":"user",size:24}},a={render:e=>n.jsxs(n.Fragment,{children:["this is a block ",n.jsx(i,{...e})," icon"]}),args:{iconName:"chevronUp","aria-label":"Happy face",block:!0,size:24}};var l,m,p;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => <>
      <Heading>{Object.keys(icons).length} UI mono-icons</Heading>
      <List>
        {Object.keys(icons).map(key => <Item key={key}>
            <Icon iconName={key} {...args} />
            <Meta>{key}</Meta>
          </Item>)}
      </List>
    </>,
  args: {
    size: 24
  }
}`,...(p=(m=s.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,g,x;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => <>
      this is an inline <Icon {...args} /> icon (default)
    </>,
  args: {
    iconName: 'user',
    'aria-label': 'user',
    size: 24
  }
}`,...(x=(g=r.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,u,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
      this is a block <Icon {...args} /> icon
    </>,
  args: {
    iconName: 'chevronUp',
    'aria-label': 'Happy face',
    block: true,
    size: 24
  }
}`,...(f=(u=a.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const v=["withNames","InlinePlacement","BlockPlacement"];export{a as BlockPlacement,r as InlinePlacement,v as __namedExportsOrder,$ as default,s as withNames};
