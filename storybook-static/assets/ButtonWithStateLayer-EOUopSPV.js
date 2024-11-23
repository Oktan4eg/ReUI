import{j as r}from"./jsx-runtime-AgcCsxC8.js";import{q as o}from"./styled-components.browser.esm-79pm2G1e.js";const s=o.div`
  // color: inherit;
  background: color-mix(in srgb, currentColor 0%, transparent);
  &:hover {
    background: color-mix(in srgb, currentColor 30%, transparent);
  }
  &:active {
    background: color-mix(in srgb, currentColor 40%, transparent);
  }

  // border: 1px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;

  font-size: unset;
  transition: all 250ms ease;

  ${e=>e.size==="lg"&&`
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;   
    `}
  ${e=>e.size==="lg"&&`
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;   
    `}

  ${e=>e.size==="md"&&`
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 16px;
    `}
  ${e=>e.size==="sm"&&`
        border-radius: 8px;
        padding: 6px 8px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 12px;
    `}
`,p=o.button`
  border: 0px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;
  background: unset;
  font-size: unset;
  // color: inherit;
  gap: 8;
  border-radius: inherit;

  ${e=>e.color==="neutral"&&"background:grey;"}
  ${e=>e.color==="lead"&&"background:purple;"}
${e=>e.color==="success"&&"background:green;"}
${e=>e.color==="distuctive"&&"background:red;"}
${e=>e.color==="info"&&"background:blue;"}
${e=>e.color==="warning"&&"background:orange;"}

  ${e=>e.appearance==="filled"&&"color:white;"}
  ${e=>e.appearance==="outlined"&&`background: transparent;
    outline: 1px solid currentColor;
    color: inherit;
    `}
  ${e=>e.appearance==="ghosty"&&`background: color-mix(in srgb, currentColor 10%, transparent);
    color: green;
    `}
  ${e=>e.appearance==="linked"&&`background: transparent;
    color: green;
    `}
`,t=({appearance:e="filled",color:i="lead",size:l="md",label:d="Buttonsd",disabled:u,iconAfter:n,iconBefore:a})=>r.jsx(r.Fragment,{children:r.jsx(p,{disabled:u,color:i,appearance:e,children:r.jsxs(s,{size:l,children:[a||null,d,n||null]})})});try{t.displayName="ButtonWithStateLayer",t.__docgenInfo={description:"",displayName:"ButtonWithStateLayer",props:{appearance:{defaultValue:{value:"filled"},description:"",name:"appearance",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"ghosty"'},{value:'"linked"'}]}},color:{defaultValue:{value:"lead"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"neutral"'},{value:'"lead"'},{value:'"distuctive"'},{value:'"info"'},{value:'"warning"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"",name:"iconAfter",required:!1,type:{name:"ReactNode"}},label:{defaultValue:{value:"Buttonsd"},description:"",name:"label",required:!1,type:{name:"string"}}}}}catch{}export{t as B};
