import{j as a}from"./jsx-runtime-AgcCsxC8.js";import{q as r}from"./styled-components.browser.esm-79pm2G1e.js";import{L as o}from"./label-QZZnCoSR.js";const n=r.input`
  appearance: none;
  position: relative;
  cursor: pointer;
  display: block;
  margin: 0px 8px 0px 0px;
  padding: 0px;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  outline: 2px solid ${e=>e.theme.colors.lead.primary};
  transition: all 250ms ease;

  &:before {
    content: '';
    /* display: block; */
    border-radius: 24px;
    position: absolute;
    width: 0px;
    height: 0px;
    background: ${e=>e.theme.colors.lead.inverse.primary};
    opacity: 0;
    top: 6px;
    left: 6px;
    transition: all 250ms ease;
  }
  &:checked {
    border-color: ${e=>e.theme.colors.lead.primary};
    outline: 10px solid ${e=>e.theme.colors.lead.primary};
    outline-offset: -8px;
    background-color: ${e=>e.theme.colors.lead.primary};
  }
  &:hover::before {
    content: '';
    /* display: block; */
    border-radius: 24px;
    position: absolute;
    width: 32px;
    height: 32px;
    background: ${e=>e.theme.colors.lead.primary};
    opacity: 0.16;
    top: -8px;
    left: -8px;
  }
  &:active::before {
    content: '';
    opacity: 0.24;
  }
  /* <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M17.0856 5.25972C16.7393 4.91343 16.1779 4.91343 15.8316 5.25972L8.08359 13.0077L5.33433 10.2584C4.98403 9.90815 4.42035 9.89473 4.05379 10.228C3.6617 10.5844 3.64714 11.1963 4.02183 11.5709L7.63878 15.1879C7.88398 15.4331 8.2819 15.4318 8.52551 15.185L17.0896 6.50969C17.4321 6.16276 17.4303 5.60443 17.0856 5.25972Z" fill="#E9E1FE"/>
</svg> */
  /* background-image: url('icon.svg'); */
  /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='000000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); */

  &:checked::after {
    content: '';
    /* background-image: url('icon.svg'); */
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
    /* background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23000' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 10l3 3l6-6'/%3e%3c/svg%3e"); */
    /* display: block; */
    /* border-radius: 2px; */
    /* stroke: ${e=>e.theme.colors.fg.primary}; */
    position: absolute;
    width: 20px;
    height: 20px;
    /* color: ${e=>e.theme.colors.fg.primary}; */
    top: -2px;
    left: -2px;
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
`,l=e=>a.jsxs(o,{htmlFor:e.id,input:e.input,danger:e.danger,disabled:e.disabled,children:[a.jsx(n,{className:e.className,checked:e.checked,disabled:e.disabled,danger:e.danger,success:e.success,name:e.name,type:"checkbox",onChange:e.onChange}),a.jsx("span",{className:"input-label",children:e.label})]});try{l.displayName="Checkbox",l.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:null,description:"if `true` change checkbox on check",name:"checked",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Allow to add classes to component",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}}}}}catch{}export{l as C};
