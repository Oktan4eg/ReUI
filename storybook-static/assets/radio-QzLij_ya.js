import{j as a}from"./jsx-runtime-AgcCsxC8.js";import{q as o}from"./styled-components.browser.esm-79pm2G1e.js";import{L as n}from"./label-QZZnCoSR.js";const t=o.input`
  appearance: none;
  position: relative;
  cursor: pointer;
  display: block;
  margin: 0px 8px 0px 0px;
  padding: 0;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  outline: 2px solid ${e=>e.theme.colors.lead.primary};
  transition: all 250ms ease;

  &:before {
    content: '';
    display: block;
    border-radius: 24px;
    position: absolute;
    height: 0px;
    width: 0px;
    background: ${e=>e.theme.colors.lead.primary};
    opacity: 0;
    top: 8px;
    left: 8px;
    transition: all 250ms ease;
  }
  &:checked {
    background-color: ${e=>e.theme.colors.lead.primary};
    outline: 10px solid ${e=>e.theme.colors.lead.primary};
    outline-offset: -8px;
    background-color: ${e=>e.theme.colors.lead.primary};
  }
  &:hover::before {
    width: 32px;
    height: 32px;
    background: ${e=>e.theme.colors.lead.primary};
    opacity: 0.16;
    top: -8px;
    left: -8px;
  }
  &:active::before {
    width: 32px;
    height: 32px;
    background: ${e=>e.theme.colors.lead.primary};
    opacity: 0.24;
    top: -8px;
    left: -8px;
  }
  &:after {
    content: '';
    background-color: ${e=>e.theme.colors.fg.inverse.primary};
    border-radius: 50%;
    position: absolute;
    width: -8px;
    height: -8px;
  }
  &:checked::after {
    content: '';

    border-radius: 50%;
    position: absolute;
    width: 10px;
    height: 10px;
    top: 3px;
    left: 3px;
  }
  ${e=>e.disabled&&`
         border-color: #a5a5a5;
         cursor: not-allowed;
         &:hover {
            border-color: #8e8d8d;
            box-shadow: none;
    }
    
    &:checked {
        background-color: #858585;       
        border-color: #797979;
    }
    `}

  ${e=>e.danger&&`
         border-color: #ff7171;
         &:hover {
            border-color: #ff8484; 
         
    }
    
    &:checked::after {
        background-color: #ff6969;
    }
    `}
    
     ${e=>e.success&&`
         border-color: #9fff7c;
         &:hover {
            border-color: #7eff82; 
         
    }
    
    &:checked::after {
        background-color: #00ff37;
    }
    `}
`,l=(e,{fontWeight:r})=>a.jsxs(n,{htmlFor:e.id,input:e.input,danger:e.danger,disabled:e.disabled,fontWeight:r,children:[a.jsx(t,{checked:e.checked,disabled:e.disabled,danger:e.danger,success:e.success,name:e.name,type:"radio",id:e.id,onChange:e.onChange,className:e.className}),a.jsx("span",{className:"input-label",children:e.label})]});try{l.displayName="Radio",l.__docgenInfo={description:"",displayName:"Radio",props:{checked:{defaultValue:null,description:"",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Allow applying custom classes to component",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{l as R};
