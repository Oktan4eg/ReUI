import{j as a}from"./jsx-runtime-AgcCsxC8.js";import{q as l,$ as d,L as s}from"./styled-components.browser.esm-79pm2G1e.js";import"./placeholder-togEZjIH.js";import"./button02-z1flLYS0.js";import"./ButtonWithStateLayer-EOUopSPV.js";import"./icon-YOwLkbd0.js";import"./checkbox-yUc3Ex4H.js";import{L as c}from"./label-QZZnCoSR.js";import"./radio-QzLij_ya.js";import"./toggle-Jck4scsC.js";import"./index-XiNr8FW2.js";import"./_commonjsHelpers-5-cIlDoe.js";const p=l.div`
  display: flex;
  width: ${r=>r.size};
  height: ${r=>r.size};
  align-items: center;
  justify-content: center;

  & > .dsa-spinner {
    display: block;
    box-sizing: border-box;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    border: 8px solid;

    ${r=>r.size==="16px"&&`
        border-width: 1px;
        `}

    ${r=>r.size==="24px"&&`
        border-width: 2px;
        `}
        
        ${r=>r.size==="32px"&&`
        border-width: 2px;
        `}${r=>r.size==="64px"&&`
        border-width: 4px;
        `}
        
        
		border-color: ${r=>r.theme.colors.fg.primary} transparent;
    animation: dsa-spinner 1.2s linear infinite;
  }

  @keyframes dsa-spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`,t=({size:r="64px"})=>a.jsx(p,{size:r,children:a.jsx("div",{className:"dsa-spinner"})});try{t.displayName="Spinner",t.__docgenInfo={description:"",displayName:"Spinner",props:{size:{defaultValue:{value:"64px"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"16px"'},{value:'"24px"'},{value:'"32px"'},{value:'"64px"'}]}}}}}catch{}const g=l.input`
  box-sizing: border-box;
  display: block;
  width: 100%;
  margin: 0;
  border-radius: 16;
  outline: 0;

  border: 1 solid red;

  color: red;
  background-color: red;
  padding: 7;

  &::placeholder {
  }

  &:hover {
  }
  &:focus {
  }

  ${r=>r.disabled&&`
        &::placeholder {
        color: red;
        }
         color: red;
         background-color: grey;
         border-color: grey;
         &:hover {    
            background-color: blue;
            border-color: blue;
            box-shadow: none;
    }
    `}

  ${r=>r.danger&&` 
        border-color: ${r.theme.colors.fg.primary};
        &:focus {
        border-color: ${r.theme.colors.fg.primary};
        }
         &:hover {
            border-color: ${r.theme.colors.fg.primary};      
    }
    `}
    
    ${r=>r.success&&`       
         border-color: ${r.theme.colors.fg.primary};
         &:hover {
            border-color: ${r.theme.colors.fg.primary};       
    }
        &:focus {
        border-color: ${r.theme.colors.fg.primary};
        }
    `}
`,n=r=>a.jsxs(c,{htmlFor:r.id,input:r.input,danger:r.danger,success:r.success,disabled:r.disabled,children:[a.jsx("span",{className:"input-label",children:r.label}),a.jsx(g,{className:r.className,type:r.type,name:r.name,onChange:r.onChange,disabled:r.disabled,danger:r.danger,success:r.success,placeholder:r.placeholder,value:r.value,defaultValue:r.defaultValue}),r.alert&&a.jsx("span",{className:"input-alert",children:r.alert})]});try{n.displayName="TextInput",n.__docgenInfo={description:"",displayName:"TextInput",props:{disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},danger:{defaultValue:null,description:"",name:"danger",required:!1,type:{name:"boolean"}},success:{defaultValue:null,description:"",name:"success",required:!1,type:{name:"boolean"}},loading:{defaultValue:null,description:"",name:"loading",required:!1,type:{name:"boolean"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},alert:{defaultValue:null,description:"",name:"alert",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"",name:"defaultValue",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},input:{defaultValue:null,description:"",name:"input",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<HTMLInputElement>"}},className:{defaultValue:null,description:"Allow apply custom classes to component",name:"className",required:!1,type:{name:"string"}}}}}catch{}const e={opacity:{4:"0A",8:"29",12:"1F",16:"14",20:"32",24:"3D",32:"52",40:"66"},blue:{0:"#151a32",5:"#1a203d",10:"#1f2851",15:"#212b59",20:"#29367a",30:"#3146af",40:"#3e55cc",50:"#4f69e8",60:"#6f84ec",70:"#899bf0",80:"#a0adee",85:"#b6c0f7",90:"#c9d1f8",95:"#e3e8fc",100:"#f1f3fd"},neutral:{0:"#000000",4:"#141414",6:"#1a1a1a",8:"#1f1f1f",10:"#262626",12:"#2e2e2e",20:"#333333",24:"#3d3d3d",30:"#4d4d4d",40:"#666666",50:"#808080",60:"#999999",70:"#b2b2b2",80:"#cccccc",88:"#dbdbdb",90:"#e5e5e5",92:"#ebebeb",94:"#f0f0f0",96:"#f5f5f5",98:"#fafafa",100:"#ffffff"},green:{0:"#132018",5:"#1b2d21",10:"#24422f",15:"#2b5038",20:"#325d41",30:"#356e4a",40:"#3c7c53",50:"#47855e",60:"#59a678",70:"#70c292",80:"#94d1ae",85:"#a9dabe",90:"#b7e1ca",95:"#dbf0e5",100:"#edf7f2"},yellow:{0:"#331a00",5:"#472500",10:"#663b00",15:"#7a4700",20:"#a36200",30:"#b87100",40:"#d1952e",50:"#eab03e",60:"#eec463",70:"#f1d27e",80:"#f3d991",85:"#f6e2ac",90:"#fbedc5",95:"#FDF3D8",100:"#FEF7E7"},red:{0:"#221113",5:"#321518",10:"#4a1c21",15:"#592227",20:"#792a32",30:"#9b313b",40:"#c9404d",50:"#e0525f",60:"#ef6c79",70:"#f17e89",80:"#f3919a",85:"#f6acb4",90:"#fbc5cb",95:"#fee1e5",100:"#fff0f1"},orange:{0:"#2b1408",5:"#3b1c0c",10:"#532913",15:"#633117",20:"#834421",30:"#ad531f",40:"#ce6117",50:"#ee7f2f",60:"#f69651",70:"#f8ad78",80:"#fcc49c",85:"#fdd0b0",90:"#ffe1cc",95:"#FFEDE0",100:"#FEF6E7"},purple:{0:"#1E162C",5:"#261A3D",10:"#301F51",15:"#342259",20:"#452A79",30:"#5D36AB",40:"#713FD5",50:"#8450EC",60:"#936CEF",70:"#A787F2",80:"#BBA3F5",85:"#C9B6F7",90:"#D6C6FB",95:"#E9E1FE",100:"#F4F0FF"},__whiteAlpha:"hsla(0,0%,100%,0.1)",__focus:"hsla(227,100%,88%,0.6)"},o={colors:{fg:{primary:e.neutral[8],secondary:e.neutral[24],tertiary:e.neutral[50],disabled:e.neutral[8]+e.opacity[4],muted:e.neutral[8]+e.opacity[24],ghosty:e.neutral[8]+e.opacity[12],inverse:{primary:e.neutral[96],secondary:e.neutral[70],tertiary:e.neutral[50],disabled:e.neutral[96]+e.opacity[4],muted:e.neutral[96]+e.opacity[24],ghosty:e.neutral[96]+e.opacity[12]}},bg:{page:e.neutral[98],low:e.neutral[92],mid:e.neutral[96],hight:e.neutral[100],disabled:e.neutral[98]+e.opacity[12],inverse:{page:e.neutral[8],low:e.neutral[8],mid:e.neutral[12],hight:e.neutral[20],disabled:e.neutral[50]+e.opacity[12]}},surface:{lowest:e.neutral[92],low:e.neutral[94],mid:e.neutral[96],hight:e.neutral[98],hightest:e.neutral[100]},neutral:{primary:e.neutral[24],secondary:e.neutral[40],tertiary:e.neutral[80],hover:e.neutral[30],active:e.neutral[24],contrast:e.neutral[90],inverse:{primary:e.neutral[100],secondary:e.neutral[90],tertiary:e.neutral[80],hover:e.neutral[88],active:e.neutral[70],contrast:e.neutral[10]}},lead:{primary:e.purple[50],secondary:e.purple[60],tertiary:e.purple[80],hover:e.purple[40],active:e.purple[30],contrast:e.purple[95],inverse:{primary:e.purple[90],secondary:e.purple[95],tertiary:e.purple[100],hover:e.purple[85],active:e.purple[80],contrast:e.purple[10]}},success:{primary:e.green[50],secondary:e.green[60],tertiary:e.green[80],hover:e.green[40],active:e.green[30],contrast:e.green[95],inverse:{primary:e.green[90],secondary:e.green[95],tertiary:e.green[100],hover:e.green[85],active:e.green[80],contrast:e.green[10]}},distuctive:{primary:e.red[50],secondary:e.red[60],tertiary:e.red[80],hover:e.red[40],active:e.red[30],contrast:e.red[95],inverse:{primary:e.red[90],secondary:e.red[95],tertiary:e.red[100],hover:e.red[85],active:e.red[80],contrast:e.red[10]}},info:{primary:e.blue[50],secondary:e.blue[60],tertiary:e.blue[80],hover:e.blue[40],active:e.blue[30],contrast:e.blue[95],inverse:{primary:e.blue[90],secondary:e.blue[95],tertiary:e.blue[100],hover:e.blue[85],active:e.blue[80],contrast:e.blue[10]}},warning:{primary:e.orange[50],secondary:e.orange[60],tertiary:e.orange[80],hover:e.orange[40],active:e.orange[30],contrast:e.orange[95],inverse:{primary:e.orange[90],secondary:e.orange[95],tertiary:e.orange[100],hover:e.orange[85],active:e.orange[80],contrast:e.orange[10]}},link:{},focus:{inner:e.purple[50],outer:e.purple[50]},shadow:{neutral:{hghtest:e.neutral[50],hght:e.neutral[50],mid:e.neutral[50],low:e.neutral[50],lowest:e.neutral[50]},accent:{hghtest:e.purple[50],hght:e.purple[50],mid:e.purple[50],low:e.purple[50],lowest:e.purple[50]}},utility:{transparent:"transparent"}},spacing:{fixed:{},comp:{gap:{},padding:{}},group:{gap:{},padding:{}}},shadows:{},typography:{},cornerRadius:{},zIndices:{},animation:{}},y={...o,colors:{fg:{primary:e.neutral[96],secondary:e.neutral[80],tertiary:e.neutral[70],disabled:e.neutral[96]+e.opacity[4],muted:e.neutral[96]+e.opacity[24],ghosty:e.neutral[96]+e.opacity[12],inverse:{primary:e.neutral[8],secondary:e.neutral[24],tertiary:e.neutral[40],disabled:e.neutral[50]+e.opacity[4],muted:e.neutral[50]+e.opacity[24],ghosty:e.neutral[50]+e.opacity[12]}},bg:{page:e.neutral[8],low:e.neutral[12],mid:e.neutral[20],hight:e.neutral[100],disabled:e.neutral[98]+e.opacity[12],inverse:{page:e.neutral[96],low:e.neutral[80],mid:e.neutral[70],hight:e.neutral[60],disabled:e.neutral[50]+e.opacity[12]}},surface:{lowest:e.neutral[92],low:e.neutral[94],mid:e.neutral[96],hight:e.neutral[98],hightest:e.neutral[100]},neutral:{primary:e.neutral[100],secondary:e.neutral[90],tertiary:e.neutral[80],hover:e.neutral[80],active:e.neutral[70],contrast:e.neutral[12],inverse:{primary:e.neutral[12],secondary:e.neutral[40],tertiary:e.neutral[60],hover:e.neutral[24],active:e.neutral[20],contrast:e.neutral[92]}},lead:{primary:e.purple[60],secondary:e.purple[50],tertiary:e.purple[40],hover:e.purple[70],active:e.purple[60],contrast:e.purple[10],inverse:{primary:e.purple[15],secondary:e.purple[10],tertiary:e.purple[5],hover:e.purple[20],active:e.purple[15],contrast:e.purple[95]}},success:{primary:e.green[60],secondary:e.green[50],tertiary:e.green[40],hover:e.green[70],active:e.green[60],contrast:e.green[10],inverse:{primary:e.green[15],secondary:e.green[10],tertiary:e.green[5],hover:e.green[20],active:e.green[15],contrast:e.green[95]}},distuctive:{primary:e.red[60],secondary:e.red[50],tertiary:e.red[40],hover:e.red[70],active:e.red[60],contrast:e.red[10],inverse:{primary:e.red[15],secondary:e.red[10],tertiary:e.red[5],hover:e.red[20],active:e.red[15],contrast:e.red[95]}},info:{primary:e.blue[60],secondary:e.blue[50],tertiary:e.blue[40],hover:e.blue[70],active:e.blue[60],contrast:e.blue[10],inverse:{primary:e.blue[15],secondary:e.blue[10],tertiary:e.blue[5],hover:e.blue[20],active:e.blue[15],contrast:e.blue[95]}},warning:{primary:e.orange[60],secondary:e.orange[50],tertiary:e.orange[40],hover:e.orange[70],active:e.orange[60],contrast:e.orange[10],inverse:{primary:e.orange[15],secondary:e.orange[10],tertiary:e.orange[5],hover:e.orange[20],active:e.orange[15],contrast:e.orange[95]}},link:{},focus:{inner:e.purple[50],outer:e.purple[50]},shadow:{neutral:{hghtest:e.neutral[50],hght:e.neutral[50],mid:e.neutral[50],low:e.neutral[50],lowest:e.neutral[50]},accent:{hghtest:e.purple[50],hght:e.purple[50],mid:e.purple[50],low:e.purple[50],lowest:e.purple[50]}},utility:{transparent:"transparent"}},spacing:{fixed:{},comp:{gap:{},padding:{}},group:{gap:{},padding:{}}},shadows:{},typography:{},cornerRadius:{},zIndices:{},animation:{}},m=d`

    *, *::before, *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

	body {
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
            -webkit-tap-highlight-color: transparent;
            -webkit-overflow-scrolling: touch;

            font-family: sans-serif;
            background: ${r=>r.theme.colors.bg.page};
            }
            `,E={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},status:{statuses:{released:{background:"#0000ff",color:"#ffffff",description:"This component is stable and released"}}}},globalTypes:{theme:{description:"Global theme for components",defaultValue:"light",toolbar:{title:"Theme",icon:"circlehollow",items:[{value:"light",title:"Светлая тема",icon:"circlehollow"},{value:"dark",title:"Темная тема",icon:"circle"}],dynamicTitle:!0}}}},z=[(r,i)=>{const u=i.globals.theme==="dark"?y:o;return a.jsxs(s,{theme:u,children:[a.jsx(m,{}),a.jsx(r,{})]})}];export{z as decorators,E as default};
