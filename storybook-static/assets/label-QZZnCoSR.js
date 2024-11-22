import{j as n}from"./jsx-runtime-AgcCsxC8.js";import{q as t}from"./styled-components.browser.esm-79pm2G1e.js";const s=t.label`
  display: flex;
  align-items: center;
  width: 100%;

  span.input-label {
    color: ${e=>e.theme.colors.fg.primary};
  }

  span {
    display: block;

    margin: 0;
  }

  ${e=>e.input&&`      
            flex-direction: column;
            align-items: flex-start;
            span.input-alert {

                }
            span.input-label {

                margin-left: 0;
            }
 
            
    `};

  ${e=>e.danger&&`      
            span.input-alert {

            }
               
    `};

  ${e=>e.success&&`      
            span.input-alert {

            }
               
    `};

  ${e=>e.disabled&&`      
            span.input-label {
     
            }
            
    `};

  ${e=>e.fontWeight==="regular"&&`      
            span.input-label {
     
            color: red;
            }
       
    `};
`,a=(e,{fontWeight:l})=>n.jsx(s,{htmlFor:e.htmlFor,className:e.className,input:e.input,danger:e.danger,success:e.success,disabled:e.disabled,fontWeight:l,children:e.children});try{a.displayName="Label",a.__docgenInfo={description:"",displayName:"Label",props:{htmlFor:{defaultValue:null,description:"",name:"htmlFor",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fontWeight:{defaultValue:null,description:"",name:"fontWeight",required:!1,type:{name:"enum",value:[{value:'"regular"'},{value:'"semiBold"'}]}},className:{defaultValue:null,description:"Allow to apply custom classes to component",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{a as L};
