/*! Copyright 2025 Adobe
All Rights Reserved. */
import{jsx as A,jsxs as q}from"@dropins/tools/preact-jsx-runtime.js";import{useRef as g,useState as B,useCallback as S,useEffect as k}from"@dropins/tools/preact-hooks.js";import{initReCaptcha as j}from"@dropins/tools/recaptcha.js";import{useText as v}from"@dropins/tools/i18n.js";import{memo as m}from"@dropins/tools/preact-compat.js";import{Field as y,Input as z,Picker as w,InputDate as K,Checkbox as V,TextArea as Y}from"@dropins/tools/components.js";import{classes as Q,Slot as J}from"@dropins/tools/lib.js";var f=(r=>(r.REQUIRED_FIELD_ERROR="requiredFieldError",r.NUMERIC_ERROR="numericError",r.ALPHA_NUM_WITH_SPACES_ERROR="alphaNumWithSpacesError",r.ALPHA_NUMERIC_ERROR="alphaNumericError",r.ALPHA_ERROR="alphaError",r.EMAIL_ERROR="emailError",r.DATE_ERROR="dateError",r.DATE_RANGE_ERROR="dateRangeError",r.DATE_MAX_ERROR="dateMaxError",r.DATE_MIN_ERROR="dateMinError",r.URL_ERROR="urlError",r.LENGTH_TEXT_ERROR="lengthTextError",r))(f||{});const M="/",rr=r=>{const e=v(r),t=Object.entries(e).filter(([u,l])=>l===null&&Object.values(f).includes(u)).map(([u])=>u),a=t.reduce((u,l)=>(u[l]=`Auth.FormText.${l}`,u),{}),o=v(a);return{...e,...t.reduce((u,l)=>(u[l]=o[l],u),{})}},er=r=>r.reduce((e,{customUpperCode:t,required:a,defaultValue:o})=>(a&&t&&(e.initialData[t]=o||"",e.errorList[t]=""),e),{initialData:{},errorList:{}}),tr=r=>r.reduce((e,t)=>({...e,[t.name]:t.value}),{}),ar=r=>/^\d+$/.test(r),nr=r=>/^[a-zA-Z0-9\s]+$/.test(r),or=r=>/^[a-zA-Z0-9]+$/.test(r),ur=r=>/^[a-zA-Z]+$/.test(r),lr=r=>/^[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+(\.[a-z0-9,!\#\$%&'\*\+\/=\?\^_`\{\|\}~-]+)*@([a-z0-9-]+\.)+[a-z]{2,}$/i.test(r),sr=r=>/^\d{4}-\d{2}-\d{2}$/.test(r)&&!isNaN(Date.parse(r)),cr=(r,e,t)=>{const a=new Date(r).getTime()/1e3;return!(isNaN(a)||a<0||typeof e<"u"&&a<e||typeof t<"u"&&a>t)},L=r=>{if(!r||r.trim()==="")return"";const e=parseInt(r,10);if(!isNaN(e)){const o=new Date(e*1e3);return isNaN(o.getTime())?"":o.toISOString().split("T")[0]}const t=new Date(r);if(isNaN(t.getTime()))return"";const a=parseInt(r.split("-")[1],10);return a>12||a<1?"":t.toISOString().split("T")[0]},dr=r=>/^(https?|ftp):\/\/(([A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))(\.[A-Z0-9]([A-Z0-9_-]*[A-Z0-9]|))*)(:(\d+))?(\/[A-Z0-9~](([A-Z0-9_~-]|\.)*[A-Z0-9~]|))*\/?(.*)?$/i.test(r),Er=(r,e,t)=>{const a=r.length;return a>=e&&a<=t},P=(r,e,t,a)=>{var G,H;const{requiredFieldError:o,lengthTextError:u,numericError:l,alphaNumWithSpacesError:s,alphaNumericError:p,alphaError:_,emailError:O,dateError:I,urlError:D,dateRangeError:b,dateMaxError:d,dateMinError:c}=t,n=e==null?void 0:e.customUpperCode,E={[n]:""};if(a[n]&&delete a[n],e!=null&&e.required&&(!r||r==="false"))return{[n]:`${f.REQUIRED_FIELD_ERROR}${M}${o}`};if(!(e!=null&&e.required)&&!r||!((G=e==null?void 0:e.validateRules)!=null&&G.length))return E;const T=tr(e==null?void 0:e.validateRules),i=T.MIN_TEXT_LENGTH??1,$=T.MAX_TEXT_LENGTH??255,R=T.DATE_RANGE_MIN,h=T.DATE_RANGE_MAX;if(!Er(r,+i,+$)&&!(R||h)){const N=u.replace("{min}",i).replace("{max}",$);return{[n]:`${f.LENGTH_TEXT_ERROR}${M}${N}`}}if(!cr(r,+R,+h)&&(R||h)){if(R&&R){const N=b.replace("{min}",L(R)).replace("{max}",L(h));return{[n]:`${f.DATE_RANGE_ERROR}${M}${N}`}}if(typeof R>"u"&&typeof h<"u"){const N=d.replace("{max}",L(h));return{[n]:`${f.DATE_MAX_ERROR}${M}${N}`}}if(typeof h>"u"&&typeof R<"u"){const N=c.replace("{min}",L(R));return{[n]:`${f.DATE_MIN_ERROR}${M}${N}`}}}const C={numeric:{validate:ar,error:`${f.NUMERIC_ERROR}${M}${l}`},"alphanum-with-spaces":{validate:nr,error:`${f.ALPHA_NUM_WITH_SPACES_ERROR}${M}${s}`},alphanumeric:{validate:or,error:`${f.ALPHA_NUMERIC_ERROR}${M}${p}`},alpha:{validate:ur,error:`${f.ALPHA_ERROR}${M}${_}`},email:{validate:lr,error:`${f.EMAIL_ERROR}${M}${O}`},date:{validate:sr,error:`${f.DATE_ERROR}${M}${I}`},url:{validate:dr,error:`${f.URL_ERROR}${M}${D}`}}[T.INPUT_VALIDATION];return C&&!C.validate(r)&&!((H=a[n])!=null&&H.length)?{[n]:C.error}:E},Rr=["auth-reset-password-form__buttons--signin","auth-sign-up-form-buttons--signin","auth-sign-in-form__button--forgot","auth-sign-in-form__button--signup"],hr=({fieldsConfig:r,onSubmit:e})=>{const t=rr({requiredFieldError:"Auth.FormText.requiredFieldError.default",lengthTextError:"Auth.FormText.lengthTextError.default",numericError:"Auth.FormText.numericError.default",alphaNumWithSpacesError:"Account.FormText.alphaNumWithSpacesError.default",alphaNumericError:"Auth.FormText.alphaNumericError.default",alphaError:"Auth.FormText.alphaError.default",emailError:"Auth.FormText.emailError.default",dateError:"Auth.FormText.dateError.default",dateRangeError:"Auth.FormText.dateRangeError.default",dateMaxError:"Auth.FormText.dateMaxError.default",dateMinError:"Auth.FormText.dateMinError.default",urlError:"Auth.FormText.urlError.default"}),a=g(null),o=g(!1),[u,l]=B({}),[s,p]=B({}),_=S(()=>{let d=!0;const c={...s};let n=null;for(const[E,T]of Object.entries(u)){const i=r==null?void 0:r.find(R=>{var h;return(h=R==null?void 0:R.customUpperCode)==null?void 0:h.includes(E)}),$=P(T.toString(),i,t,c);$[E]&&(Object.assign(c,$),d=!1),n||(n=Object.keys(c).find(R=>c[R])??null)}if(p(c),n&&a.current){const E=a.current.elements.namedItem(n);E==null||E.focus()}return d},[s,r,u,t]);k(()=>{if(r!=null&&r.length){const{initialData:d,errorList:c}=er(r);l(n=>({...d,...n})),p(c)}},[JSON.stringify(r)]);const O=S(async d=>{const c=d.target,n=!Rr.some(E=>c.classList.contains(E));!o.current&&n&&(await j(0),o.current=!0)},[]),I=S(d=>{const{name:c,value:n,type:E,checked:T}=d==null?void 0:d.target,i=E==="checkbox"?T:n;l(h=>({...h,[c]:i}));const $=r==null?void 0:r.find(h=>{var F;return(F=h==null?void 0:h.customUpperCode)==null?void 0:F.includes(c)});let R={...s};if($){const h=P(i.toString(),$,t,R);h&&Object.assign(R,h),p(R)}},[r,s,t]),D=S(d=>{const{name:c,value:n,type:E,checked:T}=d==null?void 0:d.target,i=E==="checkbox"?T:n,$=r==null?void 0:r.find(R=>R.customUpperCode===c);if($){const R={...s},h=P(i.toString(),$,t,R);h&&Object.assign(R,h),p(R)}},[s,r,t]),b=S(d=>{d.preventDefault();const c=_();e==null||e(d,c)},[_,e]);return{formData:u,errors:s,formRef:a,handleChange:I,handleBlur:D,handleSubmit:b,handleFocus:O}};var x=(r=>(r.BOOLEAN="BOOLEAN",r.DATE="DATE",r.DATETIME="DATETIME",r.DROPDOWN="DROPDOWN",r.FILE="FILE",r.GALLERY="GALLERY",r.HIDDEN="HIDDEN",r.IMAGE="IMAGE",r.MEDIA_IMAGE="MEDIA_IMAGE",r.MULTILINE="MULTILINE",r.MULTISELECT="MULTISELECT",r.PRICE="PRICE",r.SELECT="SELECT",r.TEXT="TEXT",r.TEXTAREA="TEXTAREA",r.UNDEFINED="UNDEFINED",r.VISUAL="VISUAL",r.WEIGHT="WEIGHT",r.EMPTY="",r))(x||{});const Z=r=>{const e={errorKey:"",defaultErrorMessage:""};if(!r)return e;const t=r.indexOf(M);return t===-1?e:{errorKey:r.substring(0,t).trim(),defaultErrorMessage:r.substring(t+M.length).trim()}},U=m(({item:r,errorConfig:e,className:t,itemClassName:a,loading:o,children:u})=>{const{errorKey:l,defaultErrorMessage:s}=Z(e),p=v(`Auth.FormText.${l}.${r.code}`)[r.code];let _="";return s.length&&(_=p||s),A(y,{error:_,className:Q([a,`${a}--${r.id}`,[`${a}--${r.id}-hidden`,r.isHidden],r.className]),"data-testid":`${t}--${r.id}`,disabled:o||r.disabled,children:u},r.id)}),X=m(({item:r,valueMessage:e,errorConfig:t,onBlur:a,onChange:o,onFocus:u,className:l,itemClassName:s,loading:p})=>A(U,{item:r,errorConfig:t,className:l,itemClassName:s,loading:p,children:A(z,{type:"text",name:r.customUpperCode,value:e??r.defaultValue,placeholder:r.label,floatingLabel:`${r.label} ${r.required?"*":""}`,autocomplete:r.autocomplete,onBlur:a,onChange:o,onFocus:u})})),W=m(({item:r,valueMessage:e,errorConfig:t,onBlur:a,onChange:o,className:u,itemClassName:l,loading:s})=>{var _;const p=(_=r.options.find(O=>O.isDefault))==null?void 0:_.value;return A(U,{item:r,errorConfig:t,className:u,itemClassName:l,loading:s,children:A(w,{name:r.customUpperCode,floatingLabel:`${r.label} ${r.required?"*":""}`,placeholder:r.label,"aria-label":r.label,options:r.options,onBlur:a,handleSelect:o,defaultValue:p??e??r.defaultValue,value:p??e??r.defaultValue})})}),pr=m(({item:r,valueMessage:e,errorConfig:t,onBlur:a,onChange:o,className:u,itemClassName:l,loading:s})=>A(U,{item:r,errorConfig:t,className:u,itemClassName:l,loading:s,children:A(K,{type:"text",name:r.customUpperCode,value:e||r.defaultValue,placeholder:r.label,floatingLabel:`${r.label} ${r.required?"*":""}`,onBlur:a,onChange:o,disabled:s||r.disabled})})),Ar=m(({item:r,valueMessage:e,errorConfig:t,onBlur:a,onChange:o,className:u,itemClassName:l,loading:s})=>A(U,{item:r,errorConfig:t,className:u,itemClassName:l,loading:s,children:A(V,{name:r.customUpperCode,checked:e||r.defaultValue,placeholder:r.label,label:`${r.label} ${r.required?"*":""}`,onBlur:a,onChange:o})})),Tr=m(({item:r,valueMessage:e,errorConfig:t,onBlur:a,onChange:o,className:u,itemClassName:l,loading:s})=>A(U,{item:r,errorConfig:t,className:u,itemClassName:l,loading:s,children:A(Y,{name:r.customUpperCode,value:e??r.defaultValue,label:`${r.label} ${r.required?"*":""}`,onBlur:a,onChange:o})})),$r=({slots:r,item:e,handleOnChange:t,handleOnBlur:a,handleOnFocus:o,errorConfig:u,errors:l})=>{const{errorKey:s,defaultErrorMessage:p}=Z(u),_=v(`Auth.FormText.${s}.${e.code}`)[e.code];let O="";p.length&&(O=_||p);const I={inputName:e.customUpperCode,handleOnChange:t,handleOnBlur:a,handleOnFocus:o,errorMessage:O,errors:l,config:e};return A(J,{"data-testid":`signUpFormInput_${e.code}`,name:`SignUpFormInput_${e.code}`,slot:r==null?void 0:r[`SignUpFormInput_${e.code}`],context:I},e.id)},Nr=m(({slots:r,name:e,loading:t,children:a,className:o="defaultForm",fieldsConfig:u=[],onSubmit:l,...s})=>{const{formData:p,errors:_,formRef:O,handleChange:I,handleBlur:D,handleSubmit:b,handleFocus:d}=hr({onSubmit:l,fieldsConfig:u}),c=`${o}__field`;return q("form",{className:o,onSubmit:b,name:e,ref:O,onFocus:d,...s,children:[u.map(n=>{const E=_==null?void 0:_[n.customUpperCode],T=p==null?void 0:p[n.customUpperCode],i=!!(r!=null&&r[`SignUpFormInput_${n.code}`]),$=A($r,{slots:r,item:n,handleOnChange:I,handleOnBlur:D,handleOnFocus:d,errorConfig:E,errors:_});switch(n.fieldType){case x.TEXT:return i?$:n.options.length?A(W,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,onFocus:d,itemClassName:c,className:o,loading:t}):A(X,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,onFocus:d,itemClassName:c,className:o,loading:t});case x.MULTILINE:return i?$:A(X,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,onFocus:d,itemClassName:c,className:o,loading:t});case x.SELECT:return i?$:A(W,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,itemClassName:c,className:o,loading:t});case x.DATE:return i?$:A(pr,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,itemClassName:c,className:o,loading:t});case x.BOOLEAN:return i?$:A(Ar,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,itemClassName:c,className:o,loading:t});case x.TEXTAREA:return i?$:A(Tr,{item:n,valueMessage:T,errorConfig:E,onBlur:D,onChange:I,itemClassName:c,className:o,loading:t});default:return null}}),a]})});export{Nr as F,rr as u};
