import{j as d}from"./jsx-runtime-AgcCsxC8.js";import{q as u}from"./styled-components.browser.esm-79pm2G1e.js";const m=u.button`
  border: 1px solid transparent;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  box-shadow: none;
  cursor: pointer;
  padding: unset;
  background: unset;
  font-size: unset;
  gap: 8;
  transition: all 250ms ease;
  &:focus-visible {
    box-shadow: 0px 0px 0px 2px ${e=>e.theme.colors.bg.page},
      0px 0px 0px 4px ${e=>e.theme.colors.lead.primary};
  }
  ${e=>e.size==="lg"&&`
    border-radius: 12px;
    padding: 10px 16px;
    font-size: 16px;
    line-height: 20px;
    font-weight: 20px;
    min-width: 120px;
    `}

  ${e=>e.size==="md"&&`
        border-radius: 10px;
        padding: 8px 12px;
        font-size: 12px;
        line-height: 16px;
        font-weight: 16px;
        min-width: 96px;
        `}
  ${e=>e.size==="sm"&&`
        border-radius: 8px;
        padding: 6px 8px;
        font-size: 10px;
        line-height: 12px;
        font-weight: 12px;
        min-width: 72px;
        `}

	${e=>e.appearance==="filled"&&e.color&&`       &:enabled {
            background: ${e.inverse?e.theme.colors[e.color].inverse.primary:e.theme.colors[e.color].primary};
            color: ${e.inverse?e.theme.colors[e.color].inverse.contrast:e.theme.colors[e.color].contrast};
            border-color: transparent;
            } 

            &:hover {
            background: ${e.inverse?e.theme.colors[e.color].inverse.hover:e.theme.colors[e.color].hover};
            }

            &:active {
            background: ${e.inverse?e.theme.colors[e.color].inverse.active:e.theme.colors[e.color].active};
            }
        `}

   
	
        ${e=>e.appearance==="outlined"&&e.color&&`
            &:enabled {
            background: transparent;
            color: ${e.inverse?e.theme.colors[e.color].inverse.primary:e.theme.colors[e.color].primary};
            border-color: ${e.inverse?e.theme.colors[e.color].inverse.primary:e.theme.colors[e.color].primary};
            } 

            &:hover {
            background: ${e.inverse?e.theme.colors[e.color].inverse.contrast:e.theme.colors[e.color].contrast};
            }

            &:active {
            background: ${e.inverse?e.theme.colors[e.color].hover:e.theme.colors[e.color].inverse.hover};
            }
        `}

        
        ${e=>e.appearance==="tonal"&&e.color&&`       &:enabled {
            background: ${e.inverse?e.theme.colors[e.color].inverse.contrast:e.theme.colors[e.color].contrast};
            color: ${e.inverse?e.theme.colors[e.color].contrast:e.theme.colors[e.color].inverse.contrast};
            border-color: transparent;
            } 

            &:hover {
            background: ${e.inverse?e.theme.colors[e.color].hover:e.theme.colors[e.color].inverse.hover};
            }

            &:active {
            background: ${e.inverse?e.theme.colors[e.color].active:e.theme.colors[e.color].inverse.active};
            }
        `}


${e=>e.appearance==="linked"&&e.color&&`       &:enabled {
            background: transparent;
            color: ${e.inverse?e.theme.colors[e.color].inverse.primary:e.theme.colors[e.color].primary};
            border-color: transparent;
            } 

            &:hover {
            background: ${e.inverse?e.theme.colors[e.color].inverse.contrast:e.theme.colors[e.color].contrast};
            }

            &:active {
            background: ${e.inverse?e.theme.colors[e.color].hover:e.theme.colors[e.color].inverse.hover};
            }
        `}

       


    ${e=>e.disabled&&`
            cursor: default;
            &:disabled, &:active, &:hover {
            color: #ffffff;
            background: #bababa;
            border-color: #bababa;
            }
    `}
`,o=({appearance:e,color:r="lead",inverse:n=!1,size:t="md",label:c="Button",disabled:i,iconAfter:a,iconBefore:l,onClick:v})=>d.jsxs(m,{appearance:e,size:t,inverse:n,disabled:i,color:r,children:[l||null,c,a||null]});try{o.displayName="Button",o.__docgenInfo={description:"",displayName:"Button",props:{label:{defaultValue:{value:"Button"},description:"",name:"label",required:!1,type:{name:"string"}},color:{defaultValue:{value:"lead"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"neutral"'},{value:'"lead"'},{value:'"distuctive"'},{value:'"info"'},{value:'"warning"'}]}},inverse:{defaultValue:{value:"false"},description:"",name:"inverse",required:!1,type:{name:"boolean"}},appearance:{defaultValue:null,description:"",name:"appearance",required:!0,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'},{value:'"linked"'},{value:'"tonal"'}]}},size:{defaultValue:{value:"md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"lg"'},{value:'"md"'},{value:'"sm"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},iconBefore:{defaultValue:null,description:"",name:"iconBefore",required:!1,type:{name:"ReactNode"}},iconAfter:{defaultValue:null,description:"",name:"iconAfter",required:!1,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"MouseEventHandler"}}}}}catch{}export{o as B};
