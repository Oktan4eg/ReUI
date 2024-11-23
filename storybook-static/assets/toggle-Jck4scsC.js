import{j as l}from"./jsx-runtime-AgcCsxC8.js";import{q as n}from"./styled-components.browser.esm-79pm2G1e.js";import{L as t}from"./label-QZZnCoSR.js";const o=n.input`
  ${e=>e.color&&`
  width: 56px;
  height: 32px;
  margin: 0;
  position: relative;
  display: block;
  cursor: pointer;
  appearance: none;
  outline: 2px solid ${e.theme.colors.lead.primary};
  transition: all 250ms ease-in;
  border-radius: 32px;

  &:before,
  &:after {
    position: absolute;
    display: block;
    content: '';
    border-radius: 32px;
    top: 0;
  }

  &:before {
    margin: 16px;
    opacity: 0;
    width: 0px;
    height: 0px;
    transition: all 250ms ease-in;
    outline: ${e.theme.colors.lead.contrast};
  }

  &:after {
    margin: 6px;
    width: 20px;
    height: 20px;
    transform: translate(0px);
    background-color: ${e.theme.colors.lead.primary}; // цвет хендла
    transition: all 250ms ease-out;
  }
  &:enabled {
    &:hover {
      /* background-color: ${e.theme.colors.lead.contrast}; // фон трека */
      &:after {
        /* background-color: ${e.theme.colors.lead.primary}; // ховер хендла */
      }
      &:before {
        margin: -8px;
        width: 48px;
        height: 48px;
        transition: all 250ms ease-out;
        opacity: 0.24;
        background-color: ${e.theme.colors.lead.primary}; // ховер вокруг хендла
      }
    }
    &:active {
      &:after {
        margin: 2px;
        transition: all 150ms ease-out;
        width: 28px;
        height: 28px;
      }
    }
  }
  &:checked {
    outline: 2px solid ${e.theme.colors.lead.primary};
    background-color: ${e.theme.colors.lead.primary};

    &:after {
      transform: translate(32px);
      margin: 2px 0px 0px -6px;
      transition: all 250ms ease-out;
      width: 28px;
      height: 28px;
      background-color: ${e.theme.colors.lead.contrast};
    }
    &:hover {
      transition: all 250ms ease-out;
      &:after {
        /* background-color: ${e.theme.colors.lead.primary}; */
      }
      /* background-color: ${e.theme.colors.lead.contrast}; // фон трека */
      &:before {
        margin: -8px 0px 0px 16px;
        width: 48px;
        height: 48px;
        transition: all 250ms ease-out;
        opacity: 0.24;
        background-color: ${e.theme.colors.lead.tertiary}; // ховер вокруг хендла
      }
    }
    &:active {
      &:after {
        transform: translate(32px);
        margin: 0px 0px 0px -8px;
        transition: all 150ms ease-out;
        width: 32px;
        height: 32px;
      }
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px red;
  }
  
`}
  ${e=>e.disabled&&`
        cursor: not-allowed;
        &:before {
            background-color: grey;
        }
         &:hover {
            &:before {
                background-color: grey;
            }
    }
        &:after {
            box-shadow: none;
            background-color: grey;
        }
         &:checked {
            &:hover {
                &:before {
                    background-color: grey;
                }
            }
         &:before {
            background-color: grey;
         }
         &:after {
            box-shadow: none;
        }
    }    
    
    `}
`,r=({color:e="lead",...a})=>l.jsxs(t,{htmlFor:a.id,input:a.input,danger:a.danger,disabled:a.disabled,children:[l.jsx(o,{checked:a.checked,color:e,disabled:a.disabled,danger:a.danger,success:a.success,name:a.name,type:a.type,id:a.id,onChange:a.onChange,className:a.className}),l.jsx("span",{className:"input-label",children:a.label})]});try{r.displayName="Toggle",r.__docgenInfo={description:"",displayName:"Toggle",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"lead"},description:"",name:"color",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"neutral"'},{value:'"inverse"'},{value:'"lead"'},{value:'"distuctive"'},{value:'"info"'},{value:'"warning"'}]}},className:{defaultValue:null,description:"Allow apply custom classes to component",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{r as T};
