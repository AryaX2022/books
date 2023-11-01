import{r as D,M,N as A,q as O,O as R,P as H,g as v,Q as L,R as j,y as E,S as K,m as N}from"./entry.cea0bdbc.js";const T=()=>null;function W(...n){const a=typeof n[n.length-1]=="string"?n.pop():void 0;typeof n[0]!="string"&&n.unshift(a);let[r,t,e={}]=n;if(typeof r!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof t!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");e.server=e.server??!0,e.default=e.default??T,e.lazy=e.lazy??!1,e.immediate=e.immediate??!0;const s=H(),c=()=>s.isHydrating?s.payload.data[r]:s.static.data[r],f=()=>c()!==void 0;(!s._asyncData[r]||!e.immediate)&&(s._asyncData[r]={data:D(c()??e.default()),pending:D(!f()),error:M(s.payload._errors,r),status:D("idle")});const i={...s._asyncData[r]};i.refresh=i.execute=(o={})=>{if(s._asyncDataPromises[r]){if(o.dedupe===!1)return s._asyncDataPromises[r];s._asyncDataPromises[r].cancelled=!0}if((o._initial||s.isHydrating&&o._initial!==!1)&&f())return c();i.pending.value=!0,i.status.value="pending";const p=new Promise((l,y)=>{try{l(t(s))}catch(b){y(b)}}).then(l=>{if(p.cancelled)return s._asyncDataPromises[r];let y=l;e.transform&&(y=e.transform(l)),e.pick&&(y=$(y,e.pick)),i.data.value=y,i.error.value=null,i.status.value="success"}).catch(l=>{if(p.cancelled)return s._asyncDataPromises[r];i.error.value=l,i.data.value=v(e.default()),i.status.value="error"}).finally(()=>{p.cancelled||(i.pending.value=!1,s.payload.data[r]=i.data.value,i.error.value&&(s.payload._errors[r]=L(i.error.value)),delete s._asyncDataPromises[r])});return s._asyncDataPromises[r]=p,s._asyncDataPromises[r]};const u=()=>i.refresh({_initial:!0}),h=e.server!==!1&&s.payload.serverRendered;{const o=j();if(o&&!o._nuxtOnBeforeMountCbs){o._nuxtOnBeforeMountCbs=[];const l=o._nuxtOnBeforeMountCbs;o&&(A(()=>{l.forEach(y=>{y()}),l.splice(0,l.length)}),O(()=>l.splice(0,l.length)))}h&&s.isHydrating&&f()?(i.pending.value=!1,i.status.value=i.error.value?"error":"success"):o&&(s.payload.serverRendered&&s.isHydrating||e.lazy)&&e.immediate?o._nuxtOnBeforeMountCbs.push(u):e.immediate&&u(),e.watch&&R(e.watch,()=>i.refresh());const p=s.hook("app:data:refresh",l=>{if(!l||l.includes(r))return i.refresh()});o&&O(p)}const d=Promise.resolve(s._asyncDataPromises[r]).then(()=>i);return Object.assign(d,i),d}function $(n,a){const r={};for(const t of a)r[t]=n[t];return r}const z=Object.freeze({ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1,excludeKeys:void 0,excludeValues:void 0,replacer:void 0});function q(n,a){a?a={...z,...a}:a=z;const r=F(a);return r.dispatch(n),r.toString()}const J=Object.freeze(["prototype","__proto__","constructor"]);function F(n){let a="",r=new Map;const t=e=>{a+=e};return{toString(){return a},getContext(){return r},dispatch(e){return n.replacer&&(e=n.replacer(e)),this[e===null?"null":typeof e](e)},object(e){if(e&&typeof e.toJSON=="function")return this.object(e.toJSON());const s=Object.prototype.toString.call(e);let c="";const f=s.length;f<10?c="unknown:["+s+"]":c=s.slice(8,f-1),c=c.toLowerCase();let i=null;if((i=r.get(e))===void 0)r.set(e,r.size);else return this.dispatch("[CIRCULAR:"+i+"]");if(typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(e))return t("buffer:"),t(e.toString("utf8"));if(c!=="object"&&c!=="function"&&c!=="asyncfunction")this[c]?this[c](e):n.ignoreUnknown||this.unkown(e,c);else{let u=Object.keys(e);n.unorderedObjects&&(u=u.sort());let h=[];n.respectType!==!1&&!C(e)&&(h=J),n.excludeKeys&&(u=u.filter(o=>!n.excludeKeys(o)),h=h.filter(o=>!n.excludeKeys(o))),t("object:"+(u.length+h.length)+":");const d=o=>{this.dispatch(o),t(":"),n.excludeValues||this.dispatch(e[o]),t(",")};for(const o of u)d(o);for(const o of h)d(o)}},array(e,s){if(s=s===void 0?n.unorderedArrays!==!1:s,t("array:"+e.length+":"),!s||e.length<=1){for(const i of e)this.dispatch(i);return}const c=new Map,f=e.map(i=>{const u=F(n);u.dispatch(i);for(const[h,d]of u.getContext())c.set(h,d);return u.toString()});return r=c,f.sort(),this.array(f,!1)},date(e){return t("date:"+e.toJSON())},symbol(e){return t("symbol:"+e.toString())},unkown(e,s){if(t(s),!!e&&(t(":"),e&&typeof e.entries=="function"))return this.array(Array.from(e.entries()),!0)},error(e){return t("error:"+e.toString())},boolean(e){return t("bool:"+e)},string(e){t("string:"+e.length+":"),t(e)},function(e){t("fn:"),C(e)?this.dispatch("[native]"):this.dispatch(e.toString()),n.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(e.name)),n.respectFunctionProperties&&this.object(e)},number(e){return t("number:"+e)},xml(e){return t("xml:"+e.toString())},null(){return t("Null")},undefined(){return t("Undefined")},regexp(e){return t("regex:"+e.toString())},uint8array(e){return t("uint8array:"),this.dispatch(Array.prototype.slice.call(e))},uint8clampedarray(e){return t("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(e))},int8array(e){return t("int8array:"),this.dispatch(Array.prototype.slice.call(e))},uint16array(e){return t("uint16array:"),this.dispatch(Array.prototype.slice.call(e))},int16array(e){return t("int16array:"),this.dispatch(Array.prototype.slice.call(e))},uint32array(e){return t("uint32array:"),this.dispatch(Array.prototype.slice.call(e))},int32array(e){return t("int32array:"),this.dispatch(Array.prototype.slice.call(e))},float32array(e){return t("float32array:"),this.dispatch(Array.prototype.slice.call(e))},float64array(e){return t("float64array:"),this.dispatch(Array.prototype.slice.call(e))},arraybuffer(e){return t("arraybuffer:"),this.dispatch(new Uint8Array(e))},url(e){return t("url:"+e.toString())},map(e){t("map:");const s=[...e];return this.array(s,n.unorderedSets!==!1)},set(e){t("set:");const s=[...e];return this.array(s,n.unorderedSets!==!1)},file(e){return t("file:"),this.dispatch([e.name,e.size,e.type,e.lastModfied])},blob(){if(n.ignoreUnknown)return t("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},domwindow(){return t("domwindow")},bigint(e){return t("bigint:"+e.toString())},process(){return t("process")},timer(){return t("timer")},pipe(){return t("pipe")},tcp(){return t("tcp")},udp(){return t("udp")},tty(){return t("tty")},statwatcher(){return t("statwatcher")},securecontext(){return t("securecontext")},connection(){return t("connection")},zlib(){return t("zlib")},context(){return t("context")},nodescript(){return t("nodescript")},httpparser(){return t("httpparser")},dataview(){return t("dataview")},signal(){return t("signal")},fsevent(){return t("fsevent")},tlswrap(){return t("tlswrap")}}}const U="[native code] }",I=U.length;function C(n){return typeof n!="function"?!1:Function.prototype.toString.call(n).slice(-I)===U}class _{constructor(a,r){a=this.words=a||[],this.sigBytes=r===void 0?a.length*4:r}toString(a){return(a||V).stringify(this)}concat(a){if(this.clamp(),this.sigBytes%4)for(let r=0;r<a.sigBytes;r++){const t=a.words[r>>>2]>>>24-r%4*8&255;this.words[this.sigBytes+r>>>2]|=t<<24-(this.sigBytes+r)%4*8}else for(let r=0;r<a.sigBytes;r+=4)this.words[this.sigBytes+r>>>2]=a.words[r>>>2];return this.sigBytes+=a.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new _([...this.words])}}const V={stringify(n){const a=[];for(let r=0;r<n.sigBytes;r++){const t=n.words[r>>>2]>>>24-r%4*8&255;a.push((t>>>4).toString(16),(t&15).toString(16))}return a.join("")}},G={stringify(n){const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",r=[];for(let t=0;t<n.sigBytes;t+=3){const e=n.words[t>>>2]>>>24-t%4*8&255,s=n.words[t+1>>>2]>>>24-(t+1)%4*8&255,c=n.words[t+2>>>2]>>>24-(t+2)%4*8&255,f=e<<16|s<<8|c;for(let i=0;i<4&&t*8+i*6<n.sigBytes*8;i++)r.push(a.charAt(f>>>6*(3-i)&63))}return r.join("")}},Q={parse(n){const a=n.length,r=[];for(let t=0;t<a;t++)r[t>>>2]|=(n.charCodeAt(t)&255)<<24-t%4*8;return new _(r,a)}},X={parse(n){return Q.parse(unescape(encodeURIComponent(n)))}};class Y{constructor(){this._data=new _,this._nDataBytes=0,this._minBufferSize=0,this.blockSize=512/32}reset(){this._data=new _,this._nDataBytes=0}_append(a){typeof a=="string"&&(a=X.parse(a)),this._data.concat(a),this._nDataBytes+=a.sigBytes}_doProcessBlock(a,r){}_process(a){let r,t=this._data.sigBytes/(this.blockSize*4);a?t=Math.ceil(t):t=Math.max((t|0)-this._minBufferSize,0);const e=t*this.blockSize,s=Math.min(e*4,this._data.sigBytes);if(e){for(let c=0;c<e;c+=this.blockSize)this._doProcessBlock(this._data.words,c);r=this._data.words.splice(0,e),this._data.sigBytes-=s}return new _(r,s)}}class Z extends Y{update(a){return this._append(a),this._process(),this}finalize(a){a&&this._append(a)}}const P=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],tt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],w=[];class et extends Z{constructor(){super(...arguments),this._hash=new _([...P])}reset(){super.reset(),this._hash=new _([...P])}_doProcessBlock(a,r){const t=this._hash.words;let e=t[0],s=t[1],c=t[2],f=t[3],i=t[4],u=t[5],h=t[6],d=t[7];for(let o=0;o<64;o++){if(o<16)w[o]=a[r+o]|0;else{const B=w[o-15],S=(B<<25|B>>>7)^(B<<14|B>>>18)^B>>>3,g=w[o-2],k=(g<<15|g>>>17)^(g<<13|g>>>19)^g>>>10;w[o]=S+w[o-7]+k+w[o-16]}const p=i&u^~i&h,l=e&s^e&c^s&c,y=(e<<30|e>>>2)^(e<<19|e>>>13)^(e<<10|e>>>22),b=(i<<26|i>>>6)^(i<<21|i>>>11)^(i<<7|i>>>25),x=d+b+p+tt[o]+w[o],m=y+l;d=h,h=u,u=i,i=f+x|0,f=c,c=s,s=e,e=x+m|0}t[0]=t[0]+e|0,t[1]=t[1]+s|0,t[2]=t[2]+c|0,t[3]=t[3]+f|0,t[4]=t[4]+i|0,t[5]=t[5]+u|0,t[6]=t[6]+h|0,t[7]=t[7]+d|0}finalize(a){super.finalize(a);const r=this._nDataBytes*8,t=this._data.sigBytes*8;return this._data.words[t>>>5]|=128<<24-t%32,this._data.words[(t+64>>>9<<4)+14]=Math.floor(r/4294967296),this._data.words[(t+64>>>9<<4)+15]=r,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function rt(n){return new et().finalize(n).toString(G)}function st(n,a={}){const r=typeof n=="string"?n:q(n,a);return rt(r).slice(0,10)}function nt(n,a,r){var S;const[t={},e]=typeof a=="string"?[{},a]:[a,r],s=E(()=>{let g=n;return typeof g=="function"&&(g=g()),v(g)}),c=t.key||st([e,((S=v(t.method))==null?void 0:S.toUpperCase())||"GET",v(t.baseURL),typeof s.value=="string"?s.value:"",v(t.params||t.query)]);if(!c||typeof c!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+c);if(!n)throw new Error("[nuxt] [useFetch] request is missing.");const f=c===e?"$f"+c:c;if(!t.baseURL&&typeof s.value=="string"&&s.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:i,lazy:u,default:h,transform:d,pick:o,watch:p,immediate:l,...y}=t,b=K({...y,cache:typeof t.cache=="boolean"?void 0:t.cache}),x={server:i,lazy:u,default:h,transform:d,pick:o,immediate:l,watch:p===!1?[]:[b,s,...p||[]]};let m;return W(f,()=>{var k;return(k=m==null?void 0:m.abort)==null||k.call(m),m=typeof AbortController<"u"?new AbortController:{},typeof s.value=="string"&&s.value.startsWith("/"),(t.$fetch||globalThis.$fetch)(s.value,{signal:m.signal,...b})},x)}const it=(n,a)=>{const r=N();let t={};return Object.keys(r.user).length>0&&(t={accesstoken:r.user.token}),nt(n,{baseURL:"https://gitzoco.domcloud.io",...a,headers:t},"$pLJOpmWEpt")};export{nt as a,it as u};
