var Hc=Object.defineProperty;var Vc=(i,e,t)=>e in i?Hc(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var X=(i,e,t)=>Vc(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ua="169",Gc=0,Ba=1,Wc=2,Ko=1,Xc=2,hn=3,wn=0,Ct=1,Jt=2,yn=0,mi=1,za=2,ka=3,Ha=4,qc=5,zn=100,$c=101,Yc=102,Kc=103,Zc=104,jc=200,Jc=201,Qc=202,el=203,br=204,Tr=205,tl=206,nl=207,il=208,sl=209,rl=210,al=211,ol=212,cl=213,ll=214,wr=0,Ar=1,Rr=2,vi=3,Cr=4,Pr=5,Lr=6,Dr=7,fa=0,hl=1,dl=2,En=0,ul=1,fl=2,pl=3,ml=4,gl=5,_l=6,vl=7,Zo=300,xi=301,Mi=302,Ir=303,Ur=304,Is=306,Nr=1e3,Hn=1001,Fr=1002,Rt=1003,xl=1004,Ji=1005,Xt=1006,ks=1007,Vn=1008,fn=1009,jo=1010,Jo=1011,ki=1012,pa=1013,Xn=1014,en=1015,Gi=1016,ma=1017,ga=1018,Si=1020,Qo=35902,ec=1021,tc=1022,$t=1023,nc=1024,ic=1025,gi=1026,yi=1027,_a=1028,va=1029,sc=1030,xa=1031,Ma=1033,Ss=33776,ys=33777,Es=33778,bs=33779,Or=35840,Br=35841,zr=35842,kr=35843,Hr=36196,Vr=37492,Gr=37496,Wr=37808,Xr=37809,qr=37810,$r=37811,Yr=37812,Kr=37813,Zr=37814,jr=37815,Jr=37816,Qr=37817,ea=37818,ta=37819,na=37820,ia=37821,Ts=36492,sa=36494,ra=36495,rc=36283,aa=36284,oa=36285,ca=36286,Ml=3200,Sl=3201,Sa=0,yl=1,Sn="",Wt="srgb",Cn="srgb-linear",ya="display-p3",Us="display-p3-linear",Rs="linear",st="srgb",Cs="rec709",Ps="p3",Jn=7680,Va=519,El=512,bl=513,Tl=514,ac=515,wl=516,Al=517,Rl=518,Cl=519,Ga=35044,Wa="300 es",dn=2e3,Ls=2001;class bi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const _t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,la=180/Math.PI;function Wi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(_t[i&255]+_t[i>>8&255]+_t[i>>16&255]+_t[i>>24&255]+"-"+_t[e&255]+_t[e>>8&255]+"-"+_t[e>>16&15|64]+_t[e>>24&255]+"-"+_t[t&63|128]+_t[t>>8&255]+"-"+_t[t>>16&255]+_t[t>>24&255]+_t[n&255]+_t[n>>8&255]+_t[n>>16&255]+_t[n>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function Pl(i,e){return(i%e+e)%e}function Vs(i,e,t){return(1-t)*i+t*e}function Ci(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function wt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Fe{constructor(e=0,t=0){Fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,s,r,a,o,c,l){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l)}set(e,t,n,s,r,a,o,c,l){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],h=n[4],p=n[7],u=n[2],m=n[5],g=n[8],v=s[0],d=s[3],f=s[6],M=s[1],x=s[4],E=s[7],C=s[2],w=s[5],T=s[8];return r[0]=a*v+o*M+c*C,r[3]=a*d+o*x+c*w,r[6]=a*f+o*E+c*T,r[1]=l*v+h*M+p*C,r[4]=l*d+h*x+p*w,r[7]=l*f+h*E+p*T,r[2]=u*v+m*M+g*C,r[5]=u*d+m*x+g*w,r[8]=u*f+m*E+g*T,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-n*r*h+n*o*c+s*r*l-s*a*c}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=h*a-o*l,u=o*c-h*r,m=l*r-a*c,g=t*p+n*u+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=p*v,e[1]=(s*l-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=u*v,e[4]=(h*t-s*c)*v,e[5]=(s*r-o*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Gs.makeScale(e,t)),this}rotate(e){return this.premultiply(Gs.makeRotation(-e)),this}translate(e,t){return this.premultiply(Gs.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Gs=new Ue;function oc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ds(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Ll(){const i=Ds("canvas");return i.style.display="block",i}const Xa={};function ws(i){i in Xa||(Xa[i]=!0,console.warn(i))}function Dl(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Il(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Ul(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const qa=new Ue().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),$a=new Ue().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Pi={[Cn]:{transfer:Rs,primaries:Cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Wt]:{transfer:st,primaries:Cs,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Us]:{transfer:Rs,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3($a),fromReference:i=>i.applyMatrix3(qa)},[ya]:{transfer:st,primaries:Ps,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3($a),fromReference:i=>i.applyMatrix3(qa).convertLinearToSRGB()}},Nl=new Set([Cn,Us]),Ze={enabled:!0,_workingColorSpace:Cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Nl.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Pi[e].toReference,s=Pi[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Pi[i].primaries},getTransfer:function(i){return i===Sn?Rs:Pi[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Pi[e].luminanceCoefficients)}};function _i(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ws(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Qn;class Fl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qn===void 0&&(Qn=Ds("canvas")),Qn.width=e.width,Qn.height=e.height;const n=Qn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=_i(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(_i(t[n]/255)*255):t[n]=_i(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ol=0;class cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ol++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Xs(s[a].image)):r.push(Xs(s[a]))}else r=Xs(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Xs(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bl=0;class Et extends bi{constructor(e=Et.DEFAULT_IMAGE,t=Et.DEFAULT_MAPPING,n=Hn,s=Hn,r=Xt,a=Vn,o=$t,c=fn,l=Et.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bl++}),this.uuid=Wi(),this.name="",this.source=new cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Fe(0,0),this.repeat=new Fe(1,1),this.center=new Fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zo)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Nr:e.x=e.x-Math.floor(e.x);break;case Hn:e.x=e.x<0?0:1;break;case Fr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Nr:e.y=e.y-Math.floor(e.y);break;case Hn:e.y=e.y<0?0:1;break;case Fr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Et.DEFAULT_IMAGE=null;Et.DEFAULT_MAPPING=Zo;Et.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,n=0,s=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const c=e.elements,l=c[0],h=c[4],p=c[8],u=c[1],m=c[5],g=c[9],v=c[2],d=c[6],f=c[10];if(Math.abs(h-u)<.01&&Math.abs(p-v)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+u)<.1&&Math.abs(p+v)<.1&&Math.abs(g+d)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,E=(m+1)/2,C=(f+1)/2,w=(h+u)/4,T=(p+v)/4,R=(g+d)/4;return x>E&&x>C?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=w/n,r=T/n):E>C?E<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(E),n=w/s,r=R/s):C<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(C),n=T/r,s=R/r),this.set(n,s,r,t),this}let M=Math.sqrt((d-g)*(d-g)+(p-v)*(p-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(d-g)/M,this.y=(p-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zl extends bi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Xt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Et(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends zl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class lc extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class kl extends Et{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Rt,this.minFilter=Rt,this.wrapR=Hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ti{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let c=n[s+0],l=n[s+1],h=n[s+2],p=n[s+3];const u=r[a+0],m=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p;return}if(o===1){e[t+0]=u,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(p!==v||c!==u||l!==m||h!==g){let d=1-o;const f=c*u+l*m+h*g+p*v,M=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const C=Math.sqrt(x),w=Math.atan2(C,f*M);d=Math.sin(d*w)/C,o=Math.sin(o*w)/C}const E=o*M;if(c=c*d+u*E,l=l*d+m*E,h=h*d+g*E,p=p*d+v*E,d===1-o){const C=1/Math.sqrt(c*c+l*l+h*h+p*p);c*=C,l*=C,h*=C,p*=C}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=p}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],c=n[s+1],l=n[s+2],h=n[s+3],p=r[a],u=r[a+1],m=r[a+2],g=r[a+3];return e[t]=o*g+h*p+c*m-l*u,e[t+1]=c*g+h*u+l*p-o*m,e[t+2]=l*g+h*m+o*u-c*p,e[t+3]=h*g-o*p-c*u-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),h=o(s/2),p=o(r/2),u=c(n/2),m=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*p+l*m*g,this._y=l*m*p-u*h*g,this._z=l*h*g+u*m*p,this._w=l*h*p-u*m*g;break;case"YXZ":this._x=u*h*p+l*m*g,this._y=l*m*p-u*h*g,this._z=l*h*g-u*m*p,this._w=l*h*p+u*m*g;break;case"ZXY":this._x=u*h*p-l*m*g,this._y=l*m*p+u*h*g,this._z=l*h*g+u*m*p,this._w=l*h*p-u*m*g;break;case"ZYX":this._x=u*h*p-l*m*g,this._y=l*m*p+u*h*g,this._z=l*h*g-u*m*p,this._w=l*h*p+u*m*g;break;case"YZX":this._x=u*h*p+l*m*g,this._y=l*m*p+u*h*g,this._z=l*h*g-u*m*p,this._w=l*h*p-u*m*g;break;case"XZY":this._x=u*h*p-l*m*g,this._y=l*m*p-u*h*g,this._z=l*h*g+u*m*p,this._w=l*h*p+u*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],p=t[10],u=n+o+p;if(u>0){const m=.5/Math.sqrt(u+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(a-s)*m}else if(n>o&&n>p){const m=2*Math.sqrt(1+n-o-p);this._w=(h-c)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+l)/m}else if(o>p){const m=2*Math.sqrt(1+o-n-p);this._w=(r-l)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+p-n-o);this._w=(a-s)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-n*l,this._z=r*h+a*l+n*c-s*o,this._w=a*h-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const c=1-o*o;if(c<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*n+t*this._x,this._y=m*s+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,o),p=Math.sin((1-t)*h)/l,u=Math.sin(t*h)/l;return this._w=a*p+this._w*u,this._x=n*p+this._x*u,this._y=s*p+this._y*u,this._z=r*p+this._z*u,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ya.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ya.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*n),h=2*(o*t-r*s),p=2*(r*n-a*t);return this.x=t+c*l+a*p-o*h,this.y=n+c*h+o*l-r*p,this.z=s+c*p+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return qs.copy(this).projectOnVector(e),this.sub(qs)}reflect(e){return this.sub(qs.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const qs=new z,Ya=new Ti;class Yn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Ht.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Ht.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Ht.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Ht):Ht.fromBufferAttribute(r,a),Ht.applyMatrix4(e.matrixWorld),this.expandByPoint(Ht);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Qi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Qi.copy(n.boundingBox)),Qi.applyMatrix4(e.matrixWorld),this.union(Qi)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ht),Ht.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Li),es.subVectors(this.max,Li),ei.subVectors(e.a,Li),ti.subVectors(e.b,Li),ni.subVectors(e.c,Li),mn.subVectors(ti,ei),gn.subVectors(ni,ti),Ln.subVectors(ei,ni);let t=[0,-mn.z,mn.y,0,-gn.z,gn.y,0,-Ln.z,Ln.y,mn.z,0,-mn.x,gn.z,0,-gn.x,Ln.z,0,-Ln.x,-mn.y,mn.x,0,-gn.y,gn.x,0,-Ln.y,Ln.x,0];return!$s(t,ei,ti,ni,es)||(t=[1,0,0,0,1,0,0,0,1],!$s(t,ei,ti,ni,es))?!1:(ts.crossVectors(mn,gn),t=[ts.x,ts.y,ts.z],$s(t,ei,ti,ni,es))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ht).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ht).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const sn=[new z,new z,new z,new z,new z,new z,new z,new z],Ht=new z,Qi=new Yn,ei=new z,ti=new z,ni=new z,mn=new z,gn=new z,Ln=new z,Li=new z,es=new z,ts=new z,Dn=new z;function $s(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Dn.fromArray(i,r);const o=s.x*Math.abs(Dn.x)+s.y*Math.abs(Dn.y)+s.z*Math.abs(Dn.z),c=e.dot(Dn),l=t.dot(Dn),h=n.dot(Dn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}const Hl=new Yn,Di=new z,Ys=new z;class Xi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Hl.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Di.subVectors(e,this.center);const t=Di.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Di,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ys.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Di.copy(e.center).add(Ys)),this.expandByPoint(Di.copy(e.center).sub(Ys))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const rn=new z,Ks=new z,ns=new z,_n=new z,Zs=new z,is=new z,js=new z;class Vl{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,rn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=rn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(rn.copy(this.origin).addScaledVector(this.direction,t),rn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ks.copy(e).add(t).multiplyScalar(.5),ns.copy(t).sub(e).normalize(),_n.copy(this.origin).sub(Ks);const r=e.distanceTo(t)*.5,a=-this.direction.dot(ns),o=_n.dot(this.direction),c=-_n.dot(ns),l=_n.lengthSq(),h=Math.abs(1-a*a);let p,u,m,g;if(h>0)if(p=a*c-o,u=a*o-c,g=r*h,p>=0)if(u>=-g)if(u<=g){const v=1/h;p*=v,u*=v,m=p*(p+a*u+2*o)+u*(a*p+u+2*c)+l}else u=r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u=-r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;else u<=-g?(p=Math.max(0,-(-a*r+o)),u=p>0?-r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l):u<=g?(p=0,u=Math.min(Math.max(-r,-c),r),m=u*(u+2*c)+l):(p=Math.max(0,-(a*r+o)),u=p>0?r:Math.min(Math.max(-r,-c),r),m=-p*p+u*(u+2*c)+l);else u=a>0?-r:r,p=Math.max(0,-(a*u+o)),m=-p*p+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,p),s&&s.copy(Ks).addScaledVector(ns,u),m}intersectSphere(e,t){rn.subVectors(e.center,this.origin);const n=rn.dot(this.direction),s=rn.dot(rn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,c;const l=1/this.direction.x,h=1/this.direction.y,p=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),p>=0?(o=(e.min.z-u.z)*p,c=(e.max.z-u.z)*p):(o=(e.max.z-u.z)*p,c=(e.min.z-u.z)*p),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,rn)!==null}intersectTriangle(e,t,n,s,r){Zs.subVectors(t,e),is.subVectors(n,e),js.crossVectors(Zs,is);let a=this.direction.dot(js),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;_n.subVectors(this.origin,e);const c=o*this.direction.dot(is.crossVectors(_n,is));if(c<0)return null;const l=o*this.direction.dot(Zs.cross(_n));if(l<0||c+l>a)return null;const h=-o*_n.dot(js);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class tt{constructor(e,t,n,s,r,a,o,c,l,h,p,u,m,g,v,d){tt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,c,l,h,p,u,m,g,v,d)}set(e,t,n,s,r,a,o,c,l,h,p,u,m,g,v,d){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=a,f[9]=o,f[13]=c,f[2]=l,f[6]=h,f[10]=p,f[14]=u,f[3]=m,f[7]=g,f[11]=v,f[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new tt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/ii.setFromMatrixColumn(e,0).length(),r=1/ii.setFromMatrixColumn(e,1).length(),a=1/ii.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),p=Math.sin(r);if(e.order==="XYZ"){const u=a*h,m=a*p,g=o*h,v=o*p;t[0]=c*h,t[4]=-c*p,t[8]=l,t[1]=m+g*l,t[5]=u-v*l,t[9]=-o*c,t[2]=v-u*l,t[6]=g+m*l,t[10]=a*c}else if(e.order==="YXZ"){const u=c*h,m=c*p,g=l*h,v=l*p;t[0]=u+v*o,t[4]=g*o-m,t[8]=a*l,t[1]=a*p,t[5]=a*h,t[9]=-o,t[2]=m*o-g,t[6]=v+u*o,t[10]=a*c}else if(e.order==="ZXY"){const u=c*h,m=c*p,g=l*h,v=l*p;t[0]=u-v*o,t[4]=-a*p,t[8]=g+m*o,t[1]=m+g*o,t[5]=a*h,t[9]=v-u*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const u=a*h,m=a*p,g=o*h,v=o*p;t[0]=c*h,t[4]=g*l-m,t[8]=u*l+v,t[1]=c*p,t[5]=v*l+u,t[9]=m*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const u=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=v-u*p,t[8]=g*p+m,t[1]=p,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=m*p+g,t[10]=u-v*p}else if(e.order==="XZY"){const u=a*c,m=a*l,g=o*c,v=o*l;t[0]=c*h,t[4]=-p,t[8]=l*h,t[1]=u*p+v,t[5]=a*h,t[9]=m*p-g,t[2]=g*p-m,t[6]=o*h,t[10]=v*p+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Gl,e,Wl)}lookAt(e,t,n){const s=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),vn.crossVectors(n,It),vn.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),vn.crossVectors(n,It)),vn.normalize(),ss.crossVectors(It,vn),s[0]=vn.x,s[4]=ss.x,s[8]=It.x,s[1]=vn.y,s[5]=ss.y,s[9]=It.y,s[2]=vn.z,s[6]=ss.z,s[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],h=n[1],p=n[5],u=n[9],m=n[13],g=n[2],v=n[6],d=n[10],f=n[14],M=n[3],x=n[7],E=n[11],C=n[15],w=s[0],T=s[4],R=s[8],k=s[12],_=s[1],y=s[5],F=s[9],N=s[13],P=s[2],B=s[6],O=s[10],$=s[14],G=s[3],ne=s[7],re=s[11],de=s[15];return r[0]=a*w+o*_+c*P+l*G,r[4]=a*T+o*y+c*B+l*ne,r[8]=a*R+o*F+c*O+l*re,r[12]=a*k+o*N+c*$+l*de,r[1]=h*w+p*_+u*P+m*G,r[5]=h*T+p*y+u*B+m*ne,r[9]=h*R+p*F+u*O+m*re,r[13]=h*k+p*N+u*$+m*de,r[2]=g*w+v*_+d*P+f*G,r[6]=g*T+v*y+d*B+f*ne,r[10]=g*R+v*F+d*O+f*re,r[14]=g*k+v*N+d*$+f*de,r[3]=M*w+x*_+E*P+C*G,r[7]=M*T+x*y+E*B+C*ne,r[11]=M*R+x*F+E*O+C*re,r[15]=M*k+x*N+E*$+C*de,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],p=e[6],u=e[10],m=e[14],g=e[3],v=e[7],d=e[11],f=e[15];return g*(+r*c*p-s*l*p-r*o*u+n*l*u+s*o*m-n*c*m)+v*(+t*c*m-t*l*u+r*a*u-s*a*m+s*l*h-r*c*h)+d*(+t*l*p-t*o*m-r*a*p+n*a*m+r*o*h-n*l*h)+f*(-s*o*h-t*c*p+t*o*u+s*a*p-n*a*u+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],p=e[9],u=e[10],m=e[11],g=e[12],v=e[13],d=e[14],f=e[15],M=p*d*l-v*u*l+v*c*m-o*d*m-p*c*f+o*u*f,x=g*u*l-h*d*l-g*c*m+a*d*m+h*c*f-a*u*f,E=h*v*l-g*p*l+g*o*m-a*v*m-h*o*f+a*p*f,C=g*p*c-h*v*c-g*o*u+a*v*u+h*o*d-a*p*d,w=t*M+n*x+s*E+r*C;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(v*u*r-p*d*r-v*s*m+n*d*m+p*s*f-n*u*f)*T,e[2]=(o*d*r-v*c*r+v*s*l-n*d*l-o*s*f+n*c*f)*T,e[3]=(p*c*r-o*u*r-p*s*l+n*u*l+o*s*m-n*c*m)*T,e[4]=x*T,e[5]=(h*d*r-g*u*r+g*s*m-t*d*m-h*s*f+t*u*f)*T,e[6]=(g*c*r-a*d*r-g*s*l+t*d*l+a*s*f-t*c*f)*T,e[7]=(a*u*r-h*c*r+h*s*l-t*u*l-a*s*m+t*c*m)*T,e[8]=E*T,e[9]=(g*p*r-h*v*r-g*n*m+t*v*m+h*n*f-t*p*f)*T,e[10]=(a*v*r-g*o*r+g*n*l-t*v*l-a*n*f+t*o*f)*T,e[11]=(h*o*r-a*p*r-h*n*l+t*p*l+a*n*m-t*o*m)*T,e[12]=C*T,e[13]=(h*v*s-g*p*s+g*n*u-t*v*u-h*n*d+t*p*d)*T,e[14]=(g*o*s-a*v*s-g*n*c+t*v*c+a*n*d-t*o*d)*T,e[15]=(a*p*s-h*o*s+h*n*c-t*p*c-a*n*u+t*o*u)*T,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+n,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,p=o+o,u=r*l,m=r*h,g=r*p,v=a*h,d=a*p,f=o*p,M=c*l,x=c*h,E=c*p,C=n.x,w=n.y,T=n.z;return s[0]=(1-(v+f))*C,s[1]=(m+E)*C,s[2]=(g-x)*C,s[3]=0,s[4]=(m-E)*w,s[5]=(1-(u+f))*w,s[6]=(d+M)*w,s[7]=0,s[8]=(g+x)*T,s[9]=(d-M)*T,s[10]=(1-(u+v))*T,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=ii.set(s[0],s[1],s[2]).length();const a=ii.set(s[4],s[5],s[6]).length(),o=ii.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],Vt.copy(this);const l=1/r,h=1/a,p=1/o;return Vt.elements[0]*=l,Vt.elements[1]*=l,Vt.elements[2]*=l,Vt.elements[4]*=h,Vt.elements[5]*=h,Vt.elements[6]*=h,Vt.elements[8]*=p,Vt.elements[9]*=p,Vt.elements[10]*=p,t.setFromRotationMatrix(Vt),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=dn){const c=this.elements,l=2*r/(t-e),h=2*r/(n-s),p=(t+e)/(t-e),u=(n+s)/(n-s);let m,g;if(o===dn)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ls)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=l,c[4]=0,c[8]=p,c[12]=0,c[1]=0,c[5]=h,c[9]=u,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=dn){const c=this.elements,l=1/(t-e),h=1/(n-s),p=1/(a-r),u=(t+e)*l,m=(n+s)*h;let g,v;if(o===dn)g=(a+r)*p,v=-2*p;else if(o===Ls)g=r*p,v=-1*p;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-u,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ii=new z,Vt=new tt,Gl=new z(0,0,0),Wl=new z(1,1,1),vn=new z,ss=new z,It=new z,Ka=new tt,Za=new Ti;class Yt{constructor(e=0,t=0,n=0,s=Yt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],p=s[2],u=s[6],m=s[10];switch(t){case"XYZ":this._y=Math.asin(At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-p,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-p,m),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(u,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-p,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Ka.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ka,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Za.setFromEuler(this),this.setFromQuaternion(Za,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yt.DEFAULT_ORDER="XYZ";class hc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Xl=0;const ja=new z,si=new Ti,an=new tt,rs=new z,Ii=new z,ql=new z,$l=new Ti,Ja=new z(1,0,0),Qa=new z(0,1,0),eo=new z(0,0,1),to={type:"added"},Yl={type:"removed"},ri={type:"childadded",child:null},Js={type:"childremoved",child:null};class gt extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xl++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=gt.DEFAULT_UP.clone();const e=new z,t=new Yt,n=new Ti,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Ue}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.multiply(si),this}rotateOnWorldAxis(e,t){return si.setFromAxisAngle(e,t),this.quaternion.premultiply(si),this}rotateX(e){return this.rotateOnAxis(Ja,e)}rotateY(e){return this.rotateOnAxis(Qa,e)}rotateZ(e){return this.rotateOnAxis(eo,e)}translateOnAxis(e,t){return ja.copy(e).applyQuaternion(this.quaternion),this.position.add(ja.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ja,e)}translateY(e){return this.translateOnAxis(Qa,e)}translateZ(e){return this.translateOnAxis(eo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(an.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?rs.copy(e):rs.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ii.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?an.lookAt(Ii,rs,this.up):an.lookAt(rs,Ii,this.up),this.quaternion.setFromRotationMatrix(an),s&&(an.extractRotation(s.matrixWorld),si.setFromRotationMatrix(an),this.quaternion.premultiply(si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(to),ri.child=e,this.dispatchEvent(ri),ri.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yl),Js.child=e,this.dispatchEvent(Js),Js.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),an.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),an.multiply(e.parent.matrixWorld)),e.applyMatrix4(an),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(to),ri.child=e,this.dispatchEvent(ri),ri.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,e,ql),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ii,$l,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const p=c[l];r(e.shapes,p)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];s.animations.push(r(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),p=a(e.shapes),u=a(e.skeletons),m=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),p.length>0&&(n.shapes=p),u.length>0&&(n.skeletons=u),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const c=[];for(const l in o){const h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}gt.DEFAULT_UP=new z(0,1,0);gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Gt=new z,on=new z,Qs=new z,cn=new z,ai=new z,oi=new z,no=new z,er=new z,tr=new z,nr=new z,ir=new ot,sr=new ot,rr=new ot;class qt{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Gt.subVectors(e,t),s.cross(Gt);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Gt.subVectors(s,t),on.subVectors(n,t),Qs.subVectors(e,t);const a=Gt.dot(Gt),o=Gt.dot(on),c=Gt.dot(Qs),l=on.dot(on),h=on.dot(Qs),p=a*l-o*o;if(p===0)return r.set(0,0,0),null;const u=1/p,m=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,cn)===null?!1:cn.x>=0&&cn.y>=0&&cn.x+cn.y<=1}static getInterpolation(e,t,n,s,r,a,o,c){return this.getBarycoord(e,t,n,s,cn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,cn.x),c.addScaledVector(a,cn.y),c.addScaledVector(o,cn.z),c)}static getInterpolatedAttribute(e,t,n,s,r,a){return ir.setScalar(0),sr.setScalar(0),rr.setScalar(0),ir.fromBufferAttribute(e,t),sr.fromBufferAttribute(e,n),rr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ir,r.x),a.addScaledVector(sr,r.y),a.addScaledVector(rr,r.z),a}static isFrontFacing(e,t,n,s){return Gt.subVectors(n,t),on.subVectors(e,t),Gt.cross(on).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Gt.subVectors(this.c,this.b),on.subVectors(this.a,this.b),Gt.cross(on).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return qt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return qt.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return qt.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return qt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return qt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;ai.subVectors(s,n),oi.subVectors(r,n),er.subVectors(e,n);const c=ai.dot(er),l=oi.dot(er);if(c<=0&&l<=0)return t.copy(n);tr.subVectors(e,s);const h=ai.dot(tr),p=oi.dot(tr);if(h>=0&&p<=h)return t.copy(s);const u=c*p-h*l;if(u<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(n).addScaledVector(ai,a);nr.subVectors(e,r);const m=ai.dot(nr),g=oi.dot(nr);if(g>=0&&m<=g)return t.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(oi,o);const d=h*g-m*p;if(d<=0&&p-h>=0&&m-g>=0)return no.subVectors(r,s),o=(p-h)/(p-h+(m-g)),t.copy(s).addScaledVector(no,o);const f=1/(d+v+u);return a=v*f,o=u*f,t.copy(n).addScaledVector(ai,a).addScaledVector(oi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},xn={h:0,s:0,l:0},as={h:0,s:0,l:0};function ar(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ze.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Ze.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ze.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Ze.workingColorSpace){if(e=Pl(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=ar(a,r,e+1/3),this.g=ar(a,r,e),this.b=ar(a,r,e-1/3)}return Ze.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=dc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_i(e.r),this.g=_i(e.g),this.b=_i(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Ze.fromWorkingColorSpace(vt.copy(this),e),Math.round(At(vt.r*255,0,255))*65536+Math.round(At(vt.g*255,0,255))*256+Math.round(At(vt.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ze.workingColorSpace){Ze.fromWorkingColorSpace(vt.copy(this),t);const n=vt.r,s=vt.g,r=vt.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let c,l;const h=(o+a)/2;if(o===a)c=0,l=0;else{const p=a-o;switch(l=h<=.5?p/(a+o):p/(2-a-o),a){case n:c=(s-r)/p+(s<r?6:0);break;case s:c=(r-n)/p+2;break;case r:c=(n-s)/p+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ze.workingColorSpace){return Ze.fromWorkingColorSpace(vt.copy(this),t),e.r=vt.r,e.g=vt.g,e.b=vt.b,e}getStyle(e=Wt){Ze.fromWorkingColorSpace(vt.copy(this),e);const t=vt.r,n=vt.g,s=vt.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(xn),this.setHSL(xn.h+e,xn.s+t,xn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(xn),e.getHSL(as);const n=Vs(xn.h,as.h,t),s=Vs(xn.s,as.s,t),r=Vs(xn.l,as.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const vt=new Pe;Pe.NAMES=dc;let Kl=0;class wi extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kl++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=mi,this.side=wn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=br,this.blendDst=Tr,this.blendEquation=zn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=vi,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Va,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Jn,this.stencilZFail=Jn,this.stencilZPass=Jn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==mi&&(n.blending=this.blending),this.side!==wn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==br&&(n.blendSrc=this.blendSrc),this.blendDst!==Tr&&(n.blendDst=this.blendDst),this.blendEquation!==zn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vi&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Va&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Jn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Jn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Jn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const c=r[o];delete c.metadata,a.push(c)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qi extends wi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ht=new z,os=new Fe;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ga,this.updateRanges=[],this.gpuType=en,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)os.fromBufferAttribute(this,t),os.applyMatrix3(e),this.setXY(t,os.x,os.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ci(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ci(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ci(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ci(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ci(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),s=wt(s,this.array),r=wt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ga&&(e.usage=this.usage),e}}class uc extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class fc extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class St extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Zl=0;const Ot=new tt,or=new gt,ci=new z,Ut=new Yn,Ui=new Yn,pt=new z;class zt extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Zl++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(oc(e)?fc:uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return or.lookAt(e),or.updateMatrix(),this.applyMatrix4(or.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ci).negate(),this.translate(ci.x,ci.y,ci.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(Ut.min,Ui.min),Ut.expandByPoint(pt),pt.addVectors(Ut.max,Ui.max),Ut.expandByPoint(pt)):(Ut.expandByPoint(Ui.min),Ut.expandByPoint(Ui.max))}Ut.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)pt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(pt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)pt.fromBufferAttribute(o,l),c&&(ci.fromBufferAttribute(e,l),pt.add(ci)),s=Math.max(s,n.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],c=[];for(let R=0;R<n.count;R++)o[R]=new z,c[R]=new z;const l=new z,h=new z,p=new z,u=new Fe,m=new Fe,g=new Fe,v=new z,d=new z;function f(R,k,_){l.fromBufferAttribute(n,R),h.fromBufferAttribute(n,k),p.fromBufferAttribute(n,_),u.fromBufferAttribute(r,R),m.fromBufferAttribute(r,k),g.fromBufferAttribute(r,_),h.sub(l),p.sub(l),m.sub(u),g.sub(u);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(p,-m.y).multiplyScalar(y),d.copy(p).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(y),o[R].add(v),o[k].add(v),o[_].add(v),c[R].add(d),c[k].add(d),c[_].add(d))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let R=0,k=M.length;R<k;++R){const _=M[R],y=_.start,F=_.count;for(let N=y,P=y+F;N<P;N+=3)f(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const x=new z,E=new z,C=new z,w=new z;function T(R){C.fromBufferAttribute(s,R),w.copy(C);const k=o[R];x.copy(k),x.sub(C.multiplyScalar(C.dot(k))).normalize(),E.crossVectors(w,k);const y=E.dot(c[R])<0?-1:1;a.setXYZW(R,x.x,x.y,x.z,y)}for(let R=0,k=M.length;R<k;++R){const _=M[R],y=_.start,F=_.count;for(let N=y,P=y+F;N<P;N+=3)T(e.getX(N+0)),T(e.getX(N+1)),T(e.getX(N+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,m=n.count;u<m;u++)n.setXYZ(u,0,0,0);const s=new z,r=new z,a=new z,o=new z,c=new z,l=new z,h=new z,p=new z;if(e)for(let u=0,m=e.count;u<m;u+=3){const g=e.getX(u+0),v=e.getX(u+1),d=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,d),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,d),o.add(h),c.add(h),l.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(d,l.x,l.y,l.z)}else for(let u=0,m=t.count;u<m;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),p.subVectors(s,r),h.cross(p),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,c){const l=o.array,h=o.itemSize,p=o.normalized,u=new l.constructor(c.length*h);let m=0,g=0;for(let v=0,d=c.length;v<d;v++){o.isInterleavedBufferAttribute?m=c[v]*o.data.stride+o.offset:m=c[v]*h;for(let f=0;f<h;f++)u[g++]=l[m++]}return new Nt(u,h,p)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new zt,n=this.index.array,s=this.attributes;for(const o in s){const c=s[o],l=e(c,n);t.setAttribute(o,l)}const r=this.morphAttributes;for(const o in r){const c=[],l=r[o];for(let h=0,p=l.length;h<p;h++){const u=l[h],m=e(u,n);c.push(m)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const s={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let p=0,u=l.length;p<u;p++){const m=l[p];h.push(m.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const l in s){const h=s[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],p=r[l];for(let u=0,m=p.length;u<m;u++)h.push(p[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,h=a.length;l<h;l++){const p=a[l];this.addGroup(p.start,p.count,p.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const io=new tt,In=new Vl,cs=new Xi,so=new z,ls=new z,hs=new z,ds=new z,cr=new z,us=new z,ro=new z,fs=new z;class $e extends gt{constructor(e=new zt,t=new qi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){us.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=o[c],p=r[c];h!==0&&(cr.fromBufferAttribute(p,e),a?us.addScaledVector(cr,h):us.addScaledVector(cr.sub(t),h))}t.add(us)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),In.copy(e.ray).recast(e.near),!(cs.containsPoint(In.origin)===!1&&(In.intersectSphere(cs,so)===null||In.origin.distanceToSquared(so)>(e.far-e.near)**2))&&(io.copy(r).invert(),In.copy(e.ray).applyMatrix4(io),!(n.boundingBox!==null&&In.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,In)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,p=r.attributes.normal,u=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const d=u[g],f=a[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let E=M,C=x;E<C;E+=3){const w=o.getX(E),T=o.getX(E+1),R=o.getX(E+2);s=ps(this,f,e,n,l,h,p,w,T,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(o.count,m.start+m.count);for(let d=g,f=v;d<f;d+=3){const M=o.getX(d),x=o.getX(d+1),E=o.getX(d+2);s=ps(this,a,e,n,l,h,p,M,x,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){const d=u[g],f=a[d.materialIndex],M=Math.max(d.start,m.start),x=Math.min(c.count,Math.min(d.start+d.count,m.start+m.count));for(let E=M,C=x;E<C;E+=3){const w=E,T=E+1,R=E+2;s=ps(this,f,e,n,l,h,p,w,T,R),s&&(s.faceIndex=Math.floor(E/3),s.face.materialIndex=d.materialIndex,t.push(s))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let d=g,f=v;d<f;d+=3){const M=d,x=d+1,E=d+2;s=ps(this,a,e,n,l,h,p,M,x,E),s&&(s.faceIndex=Math.floor(d/3),t.push(s))}}}}function jl(i,e,t,n,s,r,a,o){let c;if(e.side===Ct?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,e.side===wn,o),c===null)return null;fs.copy(o),fs.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(fs);return l<t.near||l>t.far?null:{distance:l,point:fs.clone(),object:i}}function ps(i,e,t,n,s,r,a,o,c,l){i.getVertexPosition(o,ls),i.getVertexPosition(c,hs),i.getVertexPosition(l,ds);const h=jl(i,e,t,n,ls,hs,ds,ro);if(h){const p=new z;qt.getBarycoord(ro,ls,hs,ds,p),s&&(h.uv=qt.getInterpolatedAttribute(s,o,c,l,p,new Fe)),r&&(h.uv1=qt.getInterpolatedAttribute(r,o,c,l,p,new Fe)),a&&(h.normal=qt.getInterpolatedAttribute(a,o,c,l,p,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const u={a:o,b:c,c:l,normal:new z,materialIndex:0};qt.getNormal(ls,hs,ds,u.normal),h.face=u,h.barycoord=p}return h}class Kn extends zt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const c=[],l=[],h=[],p=[];let u=0,m=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(p,2));function g(v,d,f,M,x,E,C,w,T,R,k){const _=E/T,y=C/R,F=E/2,N=C/2,P=w/2,B=T+1,O=R+1;let $=0,G=0;const ne=new z;for(let re=0;re<O;re++){const de=re*y-N;for(let Ne=0;Ne<B;Ne++){const Xe=Ne*_-F;ne[v]=Xe*M,ne[d]=de*x,ne[f]=P,l.push(ne.x,ne.y,ne.z),ne[v]=0,ne[d]=0,ne[f]=w>0?1:-1,h.push(ne.x,ne.y,ne.z),p.push(Ne/T),p.push(1-re/R),$+=1}}for(let re=0;re<R;re++)for(let de=0;de<T;de++){const Ne=u+de+B*re,Xe=u+de+B*(re+1),Y=u+(de+1)+B*(re+1),Q=u+(de+1)+B*re;c.push(Ne,Xe,Q),c.push(Xe,Y,Q),G+=6}o.addGroup(m,G,k),m+=G,u+=$}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ei(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function yt(i){const e={};for(let t=0;t<i.length;t++){const n=Ei(i[t]);for(const s in n)e[s]=n[s]}return e}function Jl(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function pc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ze.workingColorSpace}const Ql={clone:Ei,merge:yt};var eh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,th=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class An extends wi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=eh,this.fragmentShader=th,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ei(e.uniforms),this.uniformsGroups=Jl(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class mc extends gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=dn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new z,ao=new Fe,oo=new Fe;class Bt extends mc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-e/Mn.z)}getViewSize(e,t){return this.getViewBounds(e,ao,oo),t.subVectors(oo,ao)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,t-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const li=-90,hi=1;class nh extends gt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Bt(li,hi,e,t);s.layers=this.layers,this.add(s);const r=new Bt(li,hi,e,t);r.layers=this.layers,this.add(r);const a=new Bt(li,hi,e,t);a.layers=this.layers,this.add(a);const o=new Bt(li,hi,e,t);o.layers=this.layers,this.add(o);const c=new Bt(li,hi,e,t);c.layers=this.layers,this.add(c);const l=new Bt(li,hi,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,c]=t;for(const l of t)this.remove(l);if(e===dn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,c,l,h]=this.children,p=e.getRenderTarget(),u=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,c),e.setRenderTarget(n,4,s),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(p,u,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class gc extends Et{constructor(e,t,n,s,r,a,o,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:xi,super(e,t,n,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ih extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new gc(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Xt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Kn(5,5,5),r=new An({name:"CubemapFromEquirect",uniforms:Ei(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ct,blending:yn});r.uniforms.tEquirect.value=t;const a=new $e(s,r),o=t.minFilter;return t.minFilter===Vn&&(t.minFilter=Xt),new nh(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}const lr=new z,sh=new z,rh=new Ue;class On{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=lr.subVectors(n,t).cross(sh.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(lr),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||rh.getNormalMatrix(e),s=this.coplanarPoint(lr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Un=new Xi,ms=new z;class Ea{constructor(e=new On,t=new On,n=new On,s=new On,r=new On,a=new On){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=dn){const n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],c=s[3],l=s[4],h=s[5],p=s[6],u=s[7],m=s[8],g=s[9],v=s[10],d=s[11],f=s[12],M=s[13],x=s[14],E=s[15];if(n[0].setComponents(c-r,u-l,d-m,E-f).normalize(),n[1].setComponents(c+r,u+l,d+m,E+f).normalize(),n[2].setComponents(c+a,u+h,d+g,E+M).normalize(),n[3].setComponents(c-a,u-h,d-g,E-M).normalize(),n[4].setComponents(c-o,u-p,d-v,E-x).normalize(),t===dn)n[5].setComponents(c+o,u+p,d+v,E+x).normalize();else if(t===Ls)n[5].setComponents(o,p,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Un.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Un.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Un)}intersectsSprite(e){return Un.center.set(0,0,0),Un.radius=.7071067811865476,Un.applyMatrix4(e.matrixWorld),this.intersectsSphere(Un)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ms.x=s.normal.x>0?e.max.x:e.min.x,ms.y=s.normal.y>0?e.max.y:e.min.y,ms.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ms)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function _c(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function ah(i){const e=new WeakMap;function t(o,c){const l=o.array,h=o.usage,p=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),o.onUploadCallback();let m;if(l instanceof Float32Array)m=i.FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=i.SHORT;else if(l instanceof Uint32Array)m=i.UNSIGNED_INT;else if(l instanceof Int32Array)m=i.INT;else if(l instanceof Int8Array)m=i.BYTE;else if(l instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:p}}function n(o,c,l){const h=c.array,p=c.updateRanges;if(i.bindBuffer(l,o),p.length===0)i.bufferSubData(l,0,h);else{p.sort((m,g)=>m.start-g.start);let u=0;for(let m=1;m<p.length;m++){const g=p[u],v=p[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,p[u]=v)}p.length=u+1;for(let m=0,g=p.length;m<g;m++){const v=p[m];i.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(i.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}class Ai extends zt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),c=Math.floor(s),l=o+1,h=c+1,p=e/o,u=t/c,m=[],g=[],v=[],d=[];for(let f=0;f<h;f++){const M=f*u-a;for(let x=0;x<l;x++){const E=x*p-r;g.push(E,-M,0),v.push(0,0,1),d.push(x/o),d.push(1-f/c)}}for(let f=0;f<c;f++)for(let M=0;M<o;M++){const x=M+l*f,E=M+l*(f+1),C=M+1+l*(f+1),w=M+1+l*f;m.push(x,E,w),m.push(E,C,w)}this.setIndex(m),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(v,3)),this.setAttribute("uv",new St(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ai(e.width,e.height,e.widthSegments,e.heightSegments)}}var oh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ch=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,lh=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hh=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dh=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,uh=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fh=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ph=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mh=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,gh=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_h=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vh=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,xh=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Mh=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Sh=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yh=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Eh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,bh=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Th=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wh=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ah=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Rh=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ch=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Ph=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lh=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Dh=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ih=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Uh=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Nh=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fh=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Oh="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bh=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,kh=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Hh=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Vh=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gh=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Wh=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xh=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qh=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$h=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yh=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Kh=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zh=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jh=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Jh=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Qh=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ed=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,td=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,rd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ad=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,od=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dd=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,md=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,gd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_d=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,vd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Md=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Td=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ad=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Rd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Cd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Pd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ld=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Id=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ud=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Fd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Od=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,zd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,kd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Hd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Vd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Wd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Xd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,$d=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Zd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Jd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,eu=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tu=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,nu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,iu=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,su=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ru=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const au=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ou=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lu=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,du=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fu=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,pu=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,mu=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,gu=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_u=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vu=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,xu=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Mu=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Su=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yu=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Eu=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bu=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Tu=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wu=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Au=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ru=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cu=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pu=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Lu=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Du=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iu=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uu=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Nu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fu=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ou=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Bu=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,zu=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ie={alphahash_fragment:oh,alphahash_pars_fragment:ch,alphamap_fragment:lh,alphamap_pars_fragment:hh,alphatest_fragment:dh,alphatest_pars_fragment:uh,aomap_fragment:fh,aomap_pars_fragment:ph,batching_pars_vertex:mh,batching_vertex:gh,begin_vertex:_h,beginnormal_vertex:vh,bsdfs:xh,iridescence_fragment:Mh,bumpmap_pars_fragment:Sh,clipping_planes_fragment:yh,clipping_planes_pars_fragment:Eh,clipping_planes_pars_vertex:bh,clipping_planes_vertex:Th,color_fragment:wh,color_pars_fragment:Ah,color_pars_vertex:Rh,color_vertex:Ch,common:Ph,cube_uv_reflection_fragment:Lh,defaultnormal_vertex:Dh,displacementmap_pars_vertex:Ih,displacementmap_vertex:Uh,emissivemap_fragment:Nh,emissivemap_pars_fragment:Fh,colorspace_fragment:Oh,colorspace_pars_fragment:Bh,envmap_fragment:zh,envmap_common_pars_fragment:kh,envmap_pars_fragment:Hh,envmap_pars_vertex:Vh,envmap_physical_pars_fragment:Qh,envmap_vertex:Gh,fog_vertex:Wh,fog_pars_vertex:Xh,fog_fragment:qh,fog_pars_fragment:$h,gradientmap_pars_fragment:Yh,lightmap_pars_fragment:Kh,lights_lambert_fragment:Zh,lights_lambert_pars_fragment:jh,lights_pars_begin:Jh,lights_toon_fragment:ed,lights_toon_pars_fragment:td,lights_phong_fragment:nd,lights_phong_pars_fragment:id,lights_physical_fragment:sd,lights_physical_pars_fragment:rd,lights_fragment_begin:ad,lights_fragment_maps:od,lights_fragment_end:cd,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:hd,logdepthbuf_pars_vertex:dd,logdepthbuf_vertex:ud,map_fragment:fd,map_pars_fragment:pd,map_particle_fragment:md,map_particle_pars_fragment:gd,metalnessmap_fragment:_d,metalnessmap_pars_fragment:vd,morphinstance_vertex:xd,morphcolor_vertex:Md,morphnormal_vertex:Sd,morphtarget_pars_vertex:yd,morphtarget_vertex:Ed,normal_fragment_begin:bd,normal_fragment_maps:Td,normal_pars_fragment:wd,normal_pars_vertex:Ad,normal_vertex:Rd,normalmap_pars_fragment:Cd,clearcoat_normal_fragment_begin:Pd,clearcoat_normal_fragment_maps:Ld,clearcoat_pars_fragment:Dd,iridescence_pars_fragment:Id,opaque_fragment:Ud,packing:Nd,premultiplied_alpha_fragment:Fd,project_vertex:Od,dithering_fragment:Bd,dithering_pars_fragment:zd,roughnessmap_fragment:kd,roughnessmap_pars_fragment:Hd,shadowmap_pars_fragment:Vd,shadowmap_pars_vertex:Gd,shadowmap_vertex:Wd,shadowmask_pars_fragment:Xd,skinbase_vertex:qd,skinning_pars_vertex:$d,skinning_vertex:Yd,skinnormal_vertex:Kd,specularmap_fragment:Zd,specularmap_pars_fragment:jd,tonemapping_fragment:Jd,tonemapping_pars_fragment:Qd,transmission_fragment:eu,transmission_pars_fragment:tu,uv_pars_fragment:nu,uv_pars_vertex:iu,uv_vertex:su,worldpos_vertex:ru,background_vert:au,background_frag:ou,backgroundCube_vert:cu,backgroundCube_frag:lu,cube_vert:hu,cube_frag:du,depth_vert:uu,depth_frag:fu,distanceRGBA_vert:pu,distanceRGBA_frag:mu,equirect_vert:gu,equirect_frag:_u,linedashed_vert:vu,linedashed_frag:xu,meshbasic_vert:Mu,meshbasic_frag:Su,meshlambert_vert:yu,meshlambert_frag:Eu,meshmatcap_vert:bu,meshmatcap_frag:Tu,meshnormal_vert:wu,meshnormal_frag:Au,meshphong_vert:Ru,meshphong_frag:Cu,meshphysical_vert:Pu,meshphysical_frag:Lu,meshtoon_vert:Du,meshtoon_frag:Iu,points_vert:Uu,points_frag:Nu,shadow_vert:Fu,shadow_frag:Ou,sprite_vert:Bu,sprite_frag:zu},ie={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new Fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Fe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},jt={basic:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.fog]),vertexShader:Ie.meshbasic_vert,fragmentShader:Ie.meshbasic_frag},lambert:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ie.meshlambert_vert,fragmentShader:Ie.meshlambert_frag},phong:{uniforms:yt([ie.common,ie.specularmap,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:Ie.meshphong_vert,fragmentShader:Ie.meshphong_frag},standard:{uniforms:yt([ie.common,ie.envmap,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.roughnessmap,ie.metalnessmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag},toon:{uniforms:yt([ie.common,ie.aomap,ie.lightmap,ie.emissivemap,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.gradientmap,ie.fog,ie.lights,{emissive:{value:new Pe(0)}}]),vertexShader:Ie.meshtoon_vert,fragmentShader:Ie.meshtoon_frag},matcap:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,ie.fog,{matcap:{value:null}}]),vertexShader:Ie.meshmatcap_vert,fragmentShader:Ie.meshmatcap_frag},points:{uniforms:yt([ie.points,ie.fog]),vertexShader:Ie.points_vert,fragmentShader:Ie.points_frag},dashed:{uniforms:yt([ie.common,ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ie.linedashed_vert,fragmentShader:Ie.linedashed_frag},depth:{uniforms:yt([ie.common,ie.displacementmap]),vertexShader:Ie.depth_vert,fragmentShader:Ie.depth_frag},normal:{uniforms:yt([ie.common,ie.bumpmap,ie.normalmap,ie.displacementmap,{opacity:{value:1}}]),vertexShader:Ie.meshnormal_vert,fragmentShader:Ie.meshnormal_frag},sprite:{uniforms:yt([ie.sprite,ie.fog]),vertexShader:Ie.sprite_vert,fragmentShader:Ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ie.background_vert,fragmentShader:Ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Ie.backgroundCube_vert,fragmentShader:Ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ie.cube_vert,fragmentShader:Ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ie.equirect_vert,fragmentShader:Ie.equirect_frag},distanceRGBA:{uniforms:yt([ie.common,ie.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ie.distanceRGBA_vert,fragmentShader:Ie.distanceRGBA_frag},shadow:{uniforms:yt([ie.lights,ie.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:Ie.shadow_vert,fragmentShader:Ie.shadow_frag}};jt.physical={uniforms:yt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new Fe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new Fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new Fe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Ie.meshphysical_vert,fragmentShader:Ie.meshphysical_frag};const gs={r:0,b:0,g:0},Nn=new Yt,ku=new tt;function Hu(i,e,t,n,s,r,a){const o=new Pe(0);let c=r===!0?0:1,l,h,p=null,u=0,m=null;function g(M){let x=M.isScene===!0?M.background:null;return x&&x.isTexture&&(x=(M.backgroundBlurriness>0?t:e).get(x)),x}function v(M){let x=!1;const E=g(M);E===null?f(o,c):E&&E.isColor&&(f(E,1),x=!0);const C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,a):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(M,x){const E=g(x);E&&(E.isCubeTexture||E.mapping===Is)?(h===void 0&&(h=new $e(new Kn(1,1,1),new An({name:"BackgroundCubeMaterial",uniforms:Ei(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Ct,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,w,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Nn.copy(x.backgroundRotation),Nn.x*=-1,Nn.y*=-1,Nn.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Nn.y*=-1,Nn.z*=-1),h.material.uniforms.envMap.value=E,h.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(ku.makeRotationFromEuler(Nn)),h.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,(p!==E||u!==E.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,p=E,u=E.version,m=i.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):E&&E.isTexture&&(l===void 0&&(l=new $e(new Ai(2,2),new An({name:"BackgroundMaterial",uniforms:Ei(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:wn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=E,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=Ze.getTransfer(E.colorSpace)!==st,E.matrixAutoUpdate===!0&&E.updateMatrix(),l.material.uniforms.uvTransform.value.copy(E.matrix),(p!==E||u!==E.version||m!==i.toneMapping)&&(l.material.needsUpdate=!0,p=E,u=E.version,m=i.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null))}function f(M,x){M.getRGB(gs,pc(i)),n.buffers.color.setClear(gs.r,gs.g,gs.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(M,x=1){o.set(M),c=x,f(o,c)},getClearAlpha:function(){return c},setClearAlpha:function(M){c=M,f(o,c)},render:v,addToRenderList:d}}function Vu(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(_,y,F,N,P){let B=!1;const O=p(N,F,y);r!==O&&(r=O,l(r.object)),B=m(_,N,F,P),B&&g(_,N,F,P),P!==null&&e.update(P,i.ELEMENT_ARRAY_BUFFER),(B||a)&&(a=!1,E(_,y,F,N),P!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(P).buffer))}function c(){return i.createVertexArray()}function l(_){return i.bindVertexArray(_)}function h(_){return i.deleteVertexArray(_)}function p(_,y,F){const N=F.wireframe===!0;let P=n[_.id];P===void 0&&(P={},n[_.id]=P);let B=P[y.id];B===void 0&&(B={},P[y.id]=B);let O=B[N];return O===void 0&&(O=u(c()),B[N]=O),O}function u(_){const y=[],F=[],N=[];for(let P=0;P<t;P++)y[P]=0,F[P]=0,N[P]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:F,attributeDivisors:N,object:_,attributes:{},index:null}}function m(_,y,F,N){const P=r.attributes,B=y.attributes;let O=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){const re=P[G];let de=B[G];if(de===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(de=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(de=_.instanceColor)),re===void 0||re.attribute!==de||de&&re.data!==de.data)return!0;O++}return r.attributesNum!==O||r.index!==N}function g(_,y,F,N){const P={},B=y.attributes;let O=0;const $=F.getAttributes();for(const G in $)if($[G].location>=0){let re=B[G];re===void 0&&(G==="instanceMatrix"&&_.instanceMatrix&&(re=_.instanceMatrix),G==="instanceColor"&&_.instanceColor&&(re=_.instanceColor));const de={};de.attribute=re,re&&re.data&&(de.data=re.data),P[G]=de,O++}r.attributes=P,r.attributesNum=O,r.index=N}function v(){const _=r.newAttributes;for(let y=0,F=_.length;y<F;y++)_[y]=0}function d(_){f(_,0)}function f(_,y){const F=r.newAttributes,N=r.enabledAttributes,P=r.attributeDivisors;F[_]=1,N[_]===0&&(i.enableVertexAttribArray(_),N[_]=1),P[_]!==y&&(i.vertexAttribDivisor(_,y),P[_]=y)}function M(){const _=r.newAttributes,y=r.enabledAttributes;for(let F=0,N=y.length;F<N;F++)y[F]!==_[F]&&(i.disableVertexAttribArray(F),y[F]=0)}function x(_,y,F,N,P,B,O){O===!0?i.vertexAttribIPointer(_,y,F,P,B):i.vertexAttribPointer(_,y,F,N,P,B)}function E(_,y,F,N){v();const P=N.attributes,B=F.getAttributes(),O=y.defaultAttributeValues;for(const $ in B){const G=B[$];if(G.location>=0){let ne=P[$];if(ne===void 0&&($==="instanceMatrix"&&_.instanceMatrix&&(ne=_.instanceMatrix),$==="instanceColor"&&_.instanceColor&&(ne=_.instanceColor)),ne!==void 0){const re=ne.normalized,de=ne.itemSize,Ne=e.get(ne);if(Ne===void 0)continue;const Xe=Ne.buffer,Y=Ne.type,Q=Ne.bytesPerElement,ge=Y===i.INT||Y===i.UNSIGNED_INT||ne.gpuType===pa;if(ne.isInterleavedBufferAttribute){const ue=ne.data,Le=ue.stride,Ee=ne.offset;if(ue.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)f(G.location+ze,ue.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ze=0;ze<G.locationSize;ze++)d(G.location+ze);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ze=0;ze<G.locationSize;ze++)x(G.location+ze,de/G.locationSize,Y,re,Le*Q,(Ee+de/G.locationSize*ze)*Q,ge)}else{if(ne.isInstancedBufferAttribute){for(let ue=0;ue<G.locationSize;ue++)f(G.location+ue,ne.meshPerAttribute);_.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let ue=0;ue<G.locationSize;ue++)d(G.location+ue);i.bindBuffer(i.ARRAY_BUFFER,Xe);for(let ue=0;ue<G.locationSize;ue++)x(G.location+ue,de/G.locationSize,Y,re,de*Q,de/G.locationSize*ue*Q,ge)}}else if(O!==void 0){const re=O[$];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv(G.location,re);break;case 3:i.vertexAttrib3fv(G.location,re);break;case 4:i.vertexAttrib4fv(G.location,re);break;default:i.vertexAttrib1fv(G.location,re)}}}}M()}function C(){R();for(const _ in n){const y=n[_];for(const F in y){const N=y[F];for(const P in N)h(N[P].object),delete N[P];delete y[F]}delete n[_]}}function w(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const F in y){const N=y[F];for(const P in N)h(N[P].object),delete N[P];delete y[F]}delete n[_.id]}function T(_){for(const y in n){const F=n[y];if(F[_.id]===void 0)continue;const N=F[_.id];for(const P in N)h(N[P].object),delete N[P];delete F[_.id]}}function R(){k(),a=!0,r!==s&&(r=s,l(r.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:R,resetDefaultState:k,dispose:C,releaseStatesOfGeometry:w,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:d,disableUnusedAttributes:M}}function Gu(i,e,t){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),t.update(h,n,1)}function a(l,h,p){p!==0&&(i.drawArraysInstanced(n,l,h,p),t.update(h,n,p))}function o(l,h,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,p);let m=0;for(let g=0;g<p;g++)m+=h[g];t.update(m,n,1)}function c(l,h,p,u){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)a(l[g],h[g],u[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,h,0,u,0,p);let g=0;for(let v=0;v<p;v++)g+=h[v];for(let v=0;v<u.length;v++)t.update(g,n,u[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=c}function Wu(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(T){return!(T!==$t&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const R=T===Gi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==fn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==en&&!R)}function c(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);const p=t.logarithmicDepthBuffer===!0,u=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(u===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),M=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),E=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),C=g>0,w=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:p,reverseDepthBuffer:u,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:d,maxAttributes:f,maxVertexUniforms:M,maxVaryings:x,maxFragmentUniforms:E,vertexTextures:C,maxSamples:w}}function Xu(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new On,o=new Ue,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(p,u){const m=p.length!==0||u||n!==0||s;return s=u,n=p.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(p,u){t=h(p,u,0)},this.setState=function(p,u,m){const g=p.clippingPlanes,v=p.clipIntersection,d=p.clipShadows,f=i.get(p);if(!s||g===null||g.length===0||r&&!d)r?h(null):l();else{const M=r?0:n,x=M*4;let E=f.clippingState||null;c.value=E,E=h(g,u,x,m);for(let C=0;C!==x;++C)E[C]=t[C];f.clippingState=E,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(p,u,m,g){const v=p!==null?p.length:0;let d=null;if(v!==0){if(d=c.value,g!==!0||d===null){const f=m+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(d===null||d.length<f)&&(d=new Float32Array(f));for(let x=0,E=m;x!==v;++x,E+=4)a.copy(p[x]).applyMatrix4(M,o),a.normal.toArray(d,E),d[E+3]=a.constant}c.value=d,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,d}}function qu(i){let e=new WeakMap;function t(a,o){return o===Ir?a.mapping=xi:o===Ur&&(a.mapping=Mi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Ir||o===Ur)if(e.has(a)){const c=e.get(a).texture;return t(c,a.mapping)}else{const c=a.image;if(c&&c.height>0){const l=new ih(c.height);return l.fromEquirectangularTexture(i,a),e.set(a,l),a.addEventListener("dispose",s),t(l.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const c=e.get(o);c!==void 0&&(e.delete(o),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vc extends mc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,c=s-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const pi=4,co=[.125,.215,.35,.446,.526,.582],kn=20,hr=new vc,lo=new Pe;let dr=null,ur=0,fr=0,pr=!1;const Bn=(1+Math.sqrt(5))/2,di=1/Bn,ho=[new z(-Bn,di,0),new z(Bn,di,0),new z(-di,0,Bn),new z(di,0,Bn),new z(0,Bn,-di),new z(0,Bn,di),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class uo{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){dr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(dr,ur,fr),this._renderer.xr.enabled=pr,e.scissorTest=!1,_s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xi||e.mapping===Mi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),dr=this._renderer.getRenderTarget(),ur=this._renderer.getActiveCubeFace(),fr=this._renderer.getActiveMipmapLevel(),pr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Xt,minFilter:Xt,generateMipmaps:!1,type:Gi,format:$t,colorSpace:Cn,depthBuffer:!1},s=fo(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fo(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=$u(r)),this._blurMaterial=Yu(r,e,t)}return s}_compileMaterial(e){const t=new $e(this._lodPlanes[0],e);this._renderer.compile(t,hr)}_sceneToCubeUV(e,t,n,s){const o=new Bt(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,p=h.autoClear,u=h.toneMapping;h.getClearColor(lo),h.toneMapping=En,h.autoClear=!1;const m=new qi({name:"PMREM.Background",side:Ct,depthWrite:!1,depthTest:!1}),g=new $e(new Kn,m);let v=!1;const d=e.background;d?d.isColor&&(m.color.copy(d),e.background=null,v=!0):(m.color.copy(lo),v=!0);for(let f=0;f<6;f++){const M=f%3;M===0?(o.up.set(0,c[f],0),o.lookAt(l[f],0,0)):M===1?(o.up.set(0,0,c[f]),o.lookAt(0,l[f],0)):(o.up.set(0,c[f],0),o.lookAt(0,0,l[f]));const x=this._cubeSize;_s(s,M*x,f>2?x:0,x,x),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=p,e.background=d}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===xi||e.mapping===Mi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=mo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=po());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new $e(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;const c=this._cubeSize;_s(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,hr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=ho[(s-r-1)%ho.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){const c=this._renderer,l=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,p=new $e(this._lodPlanes[s],l),u=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*kn-1),v=r/g,d=isFinite(r)?1+Math.floor(h*v):kn;d>kn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${kn}`);const f=[];let M=0;for(let T=0;T<kn;++T){const R=T/v,k=Math.exp(-R*R/2);f.push(k),T===0?M+=k:T<d&&(M+=2*k)}for(let T=0;T<f.length;T++)f[T]=f[T]/M;u.envMap.value=e.texture,u.samples.value=d,u.weights.value=f,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:x}=this;u.dTheta.value=g,u.mipInt.value=x-n;const E=this._sizeLods[s],C=3*E*(s>x-pi?s-x+pi:0),w=4*(this._cubeSize-E);_s(t,C,w,3*E,2*E),c.setRenderTarget(t),c.render(p,hr)}}function $u(i){const e=[],t=[],n=[];let s=i;const r=i-pi+1+co.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);t.push(o);let c=1/o;a>i-pi?c=co[a-i+pi-1]:a===0&&(c=0),n.push(c);const l=1/(o-2),h=-l,p=1+l,u=[h,h,p,h,p,p,h,h,p,p,h,p],m=6,g=6,v=3,d=2,f=1,M=new Float32Array(v*g*m),x=new Float32Array(d*g*m),E=new Float32Array(f*g*m);for(let w=0;w<m;w++){const T=w%3*2/3-1,R=w>2?0:-1,k=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];M.set(k,v*g*w),x.set(u,d*g*w);const _=[w,w,w,w,w,w];E.set(_,f*g*w)}const C=new zt;C.setAttribute("position",new Nt(M,v)),C.setAttribute("uv",new Nt(x,d)),C.setAttribute("faceIndex",new Nt(E,f)),e.push(C),s>pi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fo(i,e,t){const n=new qn(i,e,t);return n.texture.mapping=Is,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _s(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function Yu(i,e,t){const n=new Float32Array(kn),s=new z(0,1,0);return new An({name:"SphericalGaussianBlur",defines:{n:kn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function po(){return new An({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function mo(){return new An({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ba(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function ba(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Ku(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const c=o.mapping,l=c===Ir||c===Ur,h=c===xi||c===Mi;if(l||h){let p=e.get(o);const u=p!==void 0?p.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return t===null&&(t=new uo(i)),p=l?t.fromEquirectangular(o,p):t.fromCubemap(o,p),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),p.texture;if(p!==void 0)return p.texture;{const m=o.image;return l&&m&&m.height>0||h&&m&&s(m)?(t===null&&(t=new uo(i)),p=l?t.fromEquirectangular(o):t.fromCubemap(o),p.texture.pmremVersion=o.pmremVersion,e.set(o,p),o.addEventListener("dispose",r),p.texture):null}}}return o}function s(o){let c=0;const l=6;for(let h=0;h<l;h++)o[h]!==void 0&&c++;return c===l}function r(o){const c=o.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function Zu(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&ws("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ju(i,e,t,n){const s={},r=new WeakMap;function a(p){const u=p.target;u.index!==null&&e.remove(u.index);for(const g in u.attributes)e.remove(u.attributes[g]);for(const g in u.morphAttributes){const v=u.morphAttributes[g];for(let d=0,f=v.length;d<f;d++)e.remove(v[d])}u.removeEventListener("dispose",a),delete s[u.id];const m=r.get(u);m&&(e.remove(m),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(p,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,t.memory.geometries++),u}function c(p){const u=p.attributes;for(const g in u)e.update(u[g],i.ARRAY_BUFFER);const m=p.morphAttributes;for(const g in m){const v=m[g];for(let d=0,f=v.length;d<f;d++)e.update(v[d],i.ARRAY_BUFFER)}}function l(p){const u=[],m=p.index,g=p.attributes.position;let v=0;if(m!==null){const M=m.array;v=m.version;for(let x=0,E=M.length;x<E;x+=3){const C=M[x+0],w=M[x+1],T=M[x+2];u.push(C,w,w,T,T,C)}}else if(g!==void 0){const M=g.array;v=g.version;for(let x=0,E=M.length/3-1;x<E;x+=3){const C=x+0,w=x+1,T=x+2;u.push(C,w,w,T,T,C)}}else return;const d=new(oc(u)?fc:uc)(u,1);d.version=v;const f=r.get(p);f&&e.remove(f),r.set(p,d)}function h(p){const u=r.get(p);if(u){const m=p.index;m!==null&&u.version<m.version&&l(p)}else l(p);return r.get(p)}return{get:o,update:c,getWireframeAttribute:h}}function Ju(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,m){i.drawElements(n,m,r,u*a),t.update(m,n,1)}function l(u,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,u*a,g),t.update(m,n,g))}function h(u,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,u,0,g);let d=0;for(let f=0;f<g;f++)d+=m[f];t.update(d,n,1)}function p(u,m,g,v){if(g===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<u.length;f++)l(u[f]/a,m[f],v[f]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,u,0,v,0,g);let f=0;for(let M=0;M<g;M++)f+=m[M];for(let M=0;M<v.length;M++)t.update(f,n,v[M])}}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=p}function Qu(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function ef(i,e,t){const n=new WeakMap,s=new ot;function r(a,o,c){const l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,p=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==p){let _=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",_)};var m=_;u!==void 0&&u.texture.dispose();const g=o.morphAttributes.position!==void 0,v=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,f=o.morphAttributes.position||[],M=o.morphAttributes.normal||[],x=o.morphAttributes.color||[];let E=0;g===!0&&(E=1),v===!0&&(E=2),d===!0&&(E=3);let C=o.attributes.position.count*E,w=1;C>e.maxTextureSize&&(w=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const T=new Float32Array(C*w*4*p),R=new lc(T,C,w,p);R.type=en,R.needsUpdate=!0;const k=E*4;for(let y=0;y<p;y++){const F=f[y],N=M[y],P=x[y],B=C*w*4*y;for(let O=0;O<F.count;O++){const $=O*k;g===!0&&(s.fromBufferAttribute(F,O),T[B+$+0]=s.x,T[B+$+1]=s.y,T[B+$+2]=s.z,T[B+$+3]=0),v===!0&&(s.fromBufferAttribute(N,O),T[B+$+4]=s.x,T[B+$+5]=s.y,T[B+$+6]=s.z,T[B+$+7]=0),d===!0&&(s.fromBufferAttribute(P,O),T[B+$+8]=s.x,T[B+$+9]=s.y,T[B+$+10]=s.z,T[B+$+11]=P.itemSize===4?s.w:1)}}u={count:p,texture:R,size:new Fe(C,w)},n.set(o,u),o.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let g=0;for(let d=0;d<l.length;d++)g+=l[d];const v=o.morphTargetsRelative?1:1-g;c.getUniforms().setValue(i,"morphTargetBaseInfluence",v),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function tf(i,e,t,n){let s=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,p=e.get(c,h);if(s.get(p)!==l&&(e.update(p),s.set(p,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",o)===!1&&c.addEventListener("dispose",o),s.get(c)!==l&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){const u=c.skeleton;s.get(u)!==l&&(u.update(),s.set(u,l))}return p}function a(){s=new WeakMap}function o(c){const l=c.target;l.removeEventListener("dispose",o),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:a}}class xc extends Et{constructor(e,t,n,s,r,a,o,c,l,h=gi){if(h!==gi&&h!==yi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===gi&&(n=Xn),n===void 0&&h===yi&&(n=Si),super(null,s,r,a,o,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Rt,this.minFilter=c!==void 0?c:Rt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Mc=new Et,go=new xc(1,1),Sc=new lc,yc=new kl,Ec=new gc,_o=[],vo=[],xo=new Float32Array(16),Mo=new Float32Array(9),So=new Float32Array(4);function Ri(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=_o[s];if(r===void 0&&(r=new Float32Array(s),_o[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ut(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ns(i,e){let t=vo[e];t===void 0&&(t=new Int32Array(e),vo[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function nf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function sf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function rf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function af(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function of(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;So.set(n),i.uniformMatrix2fv(this.addr,!1,So),ft(t,n)}}function cf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;Mo.set(n),i.uniformMatrix3fv(this.addr,!1,Mo),ft(t,n)}}function lf(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(ut(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,n))return;xo.set(n),i.uniformMatrix4fv(this.addr,!1,xo),ft(t,n)}}function hf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function df(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function uf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function ff(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function pf(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function mf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function gf(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function _f(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function vf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(go.compareFunction=ac,r=go):r=Mc,t.setTexture2D(e||r,s)}function xf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||yc,s)}function Mf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Ec,s)}function Sf(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Sc,s)}function yf(i){switch(i){case 5126:return nf;case 35664:return sf;case 35665:return rf;case 35666:return af;case 35674:return of;case 35675:return cf;case 35676:return lf;case 5124:case 35670:return hf;case 35667:case 35671:return df;case 35668:case 35672:return uf;case 35669:case 35673:return ff;case 5125:return pf;case 36294:return mf;case 36295:return gf;case 36296:return _f;case 35678:case 36198:case 36298:case 36306:case 35682:return vf;case 35679:case 36299:case 36307:return xf;case 35680:case 36300:case 36308:case 36293:return Mf;case 36289:case 36303:case 36311:case 36292:return Sf}}function Ef(i,e){i.uniform1fv(this.addr,e)}function bf(i,e){const t=Ri(e,this.size,2);i.uniform2fv(this.addr,t)}function Tf(i,e){const t=Ri(e,this.size,3);i.uniform3fv(this.addr,t)}function wf(i,e){const t=Ri(e,this.size,4);i.uniform4fv(this.addr,t)}function Af(i,e){const t=Ri(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Rf(i,e){const t=Ri(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Cf(i,e){const t=Ri(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Pf(i,e){i.uniform1iv(this.addr,e)}function Lf(i,e){i.uniform2iv(this.addr,e)}function Df(i,e){i.uniform3iv(this.addr,e)}function If(i,e){i.uniform4iv(this.addr,e)}function Uf(i,e){i.uniform1uiv(this.addr,e)}function Nf(i,e){i.uniform2uiv(this.addr,e)}function Ff(i,e){i.uniform3uiv(this.addr,e)}function Of(i,e){i.uniform4uiv(this.addr,e)}function Bf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Mc,r[a])}function zf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||yc,r[a])}function kf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Ec,r[a])}function Hf(i,e,t){const n=this.cache,s=e.length,r=Ns(t,s);ut(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Sc,r[a])}function Vf(i){switch(i){case 5126:return Ef;case 35664:return bf;case 35665:return Tf;case 35666:return wf;case 35674:return Af;case 35675:return Rf;case 35676:return Cf;case 5124:case 35670:return Pf;case 35667:case 35671:return Lf;case 35668:case 35672:return Df;case 35669:case 35673:return If;case 5125:return Uf;case 36294:return Nf;case 36295:return Ff;case 36296:return Of;case 35678:case 36198:case 36298:case 36306:case 35682:return Bf;case 35679:case 36299:case 36307:return zf;case 35680:case 36300:case 36308:case 36293:return kf;case 36289:case 36303:case 36311:case 36292:return Hf}}class Gf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yf(t.type)}}class Wf{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Vf(t.type)}}class Xf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const mr=/(\w+)(\])?(\[|\.)?/g;function yo(i,e){i.seq.push(e),i.map[e.id]=e}function qf(i,e,t){const n=i.name,s=n.length;for(mr.lastIndex=0;;){const r=mr.exec(n),a=mr.lastIndex;let o=r[1];const c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){yo(t,l===void 0?new Gf(o,i,e):new Wf(o,i,e));break}else{let p=t.map[o];p===void 0&&(p=new Xf(o),yo(t,p)),t=p}}}class As{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);qf(r,a,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Eo(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const $f=37297;let Yf=0;function Kf(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Zf(i){const e=Ze.getPrimaries(Ze.workingColorSpace),t=Ze.getPrimaries(i);let n;switch(e===t?n="":e===Ps&&t===Cs?n="LinearDisplayP3ToLinearSRGB":e===Cs&&t===Ps&&(n="LinearSRGBToLinearDisplayP3"),i){case Cn:case Us:return[n,"LinearTransferOETF"];case Wt:case ya:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function bo(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Kf(i.getShaderSource(e),a)}else return s}function jf(i,e){const t=Zf(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Jf(i,e){let t;switch(e){case ul:t="Linear";break;case fl:t="Reinhard";break;case pl:t="Cineon";break;case ml:t="ACESFilmic";break;case _l:t="AgX";break;case vl:t="Neutral";break;case gl:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const vs=new z;function Qf(){Ze.getLuminanceCoefficients(vs);const i=vs.x.toFixed(4),e=vs.y.toFixed(4),t=vs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ep(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bi).join(`
`)}function tp(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function np(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Bi(i){return i!==""}function To(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function wo(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ip=/^[ \t]*#include +<([\w\d./]+)>/gm;function ha(i){return i.replace(ip,rp)}const sp=new Map;function rp(i,e){let t=Ie[e];if(t===void 0){const n=sp.get(e);if(n!==void 0)t=Ie[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ha(t)}const ap=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ao(i){return i.replace(ap,op)}function op(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ro(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function cp(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ko?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xc?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(e="SHADOWMAP_TYPE_VSM"),e}function lp(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xi:case Mi:e="ENVMAP_TYPE_CUBE";break;case Is:e="ENVMAP_TYPE_CUBE_UV";break}return e}function hp(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Mi:e="ENVMAP_MODE_REFRACTION";break}return e}function dp(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case fa:e="ENVMAP_BLENDING_MULTIPLY";break;case hl:e="ENVMAP_BLENDING_MIX";break;case dl:e="ENVMAP_BLENDING_ADD";break}return e}function up(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function fp(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=cp(t),l=lp(t),h=hp(t),p=dp(t),u=up(t),m=ep(t),g=tp(r),v=s.createProgram();let d,f,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),d.length>0&&(d+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Bi).join(`
`),f.length>0&&(f+=`
`)):(d=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bi).join(`
`),f=[Ro(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+p:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==En?"#define TONE_MAPPING":"",t.toneMapping!==En?Ie.tonemapping_pars_fragment:"",t.toneMapping!==En?Jf("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ie.colorspace_pars_fragment,jf("linearToOutputTexel",t.outputColorSpace),Qf(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Bi).join(`
`)),a=ha(a),a=To(a,t),a=wo(a,t),o=ha(o),o=To(o,t),o=wo(o,t),a=Ao(a),o=Ao(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,f=["#define varying in",t.glslVersion===Wa?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=M+d+a,E=M+f+o,C=Eo(s,s.VERTEX_SHADER,x),w=Eo(s,s.FRAGMENT_SHADER,E);s.attachShader(v,C),s.attachShader(v,w),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function T(y){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(v).trim(),N=s.getShaderInfoLog(C).trim(),P=s.getShaderInfoLog(w).trim();let B=!0,O=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(B=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,C,w);else{const $=bo(s,C,"vertex"),G=bo(s,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+F+`
`+$+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(N===""||P==="")&&(O=!1);O&&(y.diagnostics={runnable:B,programLog:F,vertexShader:{log:N,prefix:d},fragmentShader:{log:P,prefix:f}})}s.deleteShader(C),s.deleteShader(w),R=new As(s,v),k=np(s,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let k;this.getAttributes=function(){return k===void 0&&T(this),k};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(v,$f)),_},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yf++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=C,this.fragmentShader=w,this}let pp=0;class mp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new gp(e),t.set(e,n)),n}}class gp{constructor(e){this.id=pp++,this.code=e,this.usedTimes=0}}function _p(i,e,t,n,s,r,a){const o=new hc,c=new mp,l=new Set,h=[],p=s.logarithmicDepthBuffer,u=s.reverseDepthBuffer,m=s.vertexTextures;let g=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,y,F,N,P){const B=N.fog,O=P.geometry,$=_.isMeshStandardMaterial?N.environment:null,G=(_.isMeshStandardMaterial?t:e).get(_.envMap||$),ne=G&&G.mapping===Is?G.image.height:null,re=v[_.type];_.precision!==null&&(g=s.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const de=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Ne=de!==void 0?de.length:0;let Xe=0;O.morphAttributes.position!==void 0&&(Xe=1),O.morphAttributes.normal!==void 0&&(Xe=2),O.morphAttributes.color!==void 0&&(Xe=3);let Y,Q,ge,ue;if(re){const Tt=jt[re];Y=Tt.vertexShader,Q=Tt.fragmentShader}else Y=_.vertexShader,Q=_.fragmentShader,c.update(_),ge=c.getVertexShaderID(_),ue=c.getFragmentShaderID(_);const Le=i.getRenderTarget(),Ee=P.isInstancedMesh===!0,ze=P.isBatchedMesh===!0,Je=!!_.map,ke=!!_.matcap,L=!!G,Pt=!!_.aoMap,Oe=!!_.lightMap,Ve=!!_.bumpMap,Te=!!_.normalMap,nt=!!_.displacementMap,Re=!!_.emissiveMap,A=!!_.metalnessMap,S=!!_.roughnessMap,H=_.anisotropy>0,Z=_.clearcoat>0,J=_.dispersion>0,K=_.iridescence>0,xe=_.sheen>0,se=_.transmission>0,fe=H&&!!_.anisotropyMap,Ge=Z&&!!_.clearcoatMap,ee=Z&&!!_.clearcoatNormalMap,pe=Z&&!!_.clearcoatRoughnessMap,we=K&&!!_.iridescenceMap,Ae=K&&!!_.iridescenceThicknessMap,me=xe&&!!_.sheenColorMap,Be=xe&&!!_.sheenRoughnessMap,De=!!_.specularMap,et=!!_.specularColorMap,D=!!_.specularIntensityMap,ce=se&&!!_.transmissionMap,q=se&&!!_.thicknessMap,j=!!_.gradientMap,ae=!!_.alphaMap,le=_.alphaTest>0,He=!!_.alphaHash,lt=!!_.extensions;let bt=En;_.toneMapped&&(Le===null||Le.isXRRenderTarget===!0)&&(bt=i.toneMapping);const qe={shaderID:re,shaderType:_.type,shaderName:_.name,vertexShader:Y,fragmentShader:Q,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:ue,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:ze,batchingColor:ze&&P._colorsTexture!==null,instancing:Ee,instancingColor:Ee&&P.instanceColor!==null,instancingMorph:Ee&&P.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:Le===null?i.outputColorSpace:Le.isXRRenderTarget===!0?Le.texture.colorSpace:Cn,alphaToCoverage:!!_.alphaToCoverage,map:Je,matcap:ke,envMap:L,envMapMode:L&&G.mapping,envMapCubeUVHeight:ne,aoMap:Pt,lightMap:Oe,bumpMap:Ve,normalMap:Te,displacementMap:m&&nt,emissiveMap:Re,normalMapObjectSpace:Te&&_.normalMapType===yl,normalMapTangentSpace:Te&&_.normalMapType===Sa,metalnessMap:A,roughnessMap:S,anisotropy:H,anisotropyMap:fe,clearcoat:Z,clearcoatMap:Ge,clearcoatNormalMap:ee,clearcoatRoughnessMap:pe,dispersion:J,iridescence:K,iridescenceMap:we,iridescenceThicknessMap:Ae,sheen:xe,sheenColorMap:me,sheenRoughnessMap:Be,specularMap:De,specularColorMap:et,specularIntensityMap:D,transmission:se,transmissionMap:ce,thicknessMap:q,gradientMap:j,opaque:_.transparent===!1&&_.blending===mi&&_.alphaToCoverage===!1,alphaMap:ae,alphaTest:le,alphaHash:He,combine:_.combine,mapUv:Je&&d(_.map.channel),aoMapUv:Pt&&d(_.aoMap.channel),lightMapUv:Oe&&d(_.lightMap.channel),bumpMapUv:Ve&&d(_.bumpMap.channel),normalMapUv:Te&&d(_.normalMap.channel),displacementMapUv:nt&&d(_.displacementMap.channel),emissiveMapUv:Re&&d(_.emissiveMap.channel),metalnessMapUv:A&&d(_.metalnessMap.channel),roughnessMapUv:S&&d(_.roughnessMap.channel),anisotropyMapUv:fe&&d(_.anisotropyMap.channel),clearcoatMapUv:Ge&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:ee&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&d(_.clearcoatRoughnessMap.channel),iridescenceMapUv:we&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:me&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:Be&&d(_.sheenRoughnessMap.channel),specularMapUv:De&&d(_.specularMap.channel),specularColorMapUv:et&&d(_.specularColorMap.channel),specularIntensityMapUv:D&&d(_.specularIntensityMap.channel),transmissionMapUv:ce&&d(_.transmissionMap.channel),thicknessMapUv:q&&d(_.thicknessMap.channel),alphaMapUv:ae&&d(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(Te||H),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!O.attributes.uv&&(Je||ae),fog:!!B,useFog:_.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:p,reverseDepthBuffer:u,skinning:P.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Ne,morphTextureStride:Xe,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&F.length>0,shadowMapType:i.shadowMap.type,toneMapping:bt,decodeVideoTexture:Je&&_.map.isVideoTexture===!0&&Ze.getTransfer(_.map.colorSpace)===st,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Jt,flipSided:_.side===Ct,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:lt&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(lt&&_.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return qe.vertexUv1s=l.has(1),qe.vertexUv2s=l.has(2),qe.vertexUv3s=l.has(3),l.clear(),qe}function M(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const F in _.defines)y.push(F),y.push(_.defines[F]);return _.isRawShaderMaterial===!1&&(x(y,_),E(y,_),y.push(i.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function x(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function E(_,y){o.disableAll(),y.supportsVertexTextures&&o.enable(0),y.instancing&&o.enable(1),y.instancingColor&&o.enable(2),y.instancingMorph&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),y.alphaHash&&o.enable(18),y.batching&&o.enable(19),y.dispersion&&o.enable(20),y.batchingColor&&o.enable(21),_.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.reverseDepthBuffer&&o.enable(4),y.skinning&&o.enable(5),y.morphTargets&&o.enable(6),y.morphNormals&&o.enable(7),y.morphColors&&o.enable(8),y.premultipliedAlpha&&o.enable(9),y.shadowMapEnabled&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),y.alphaToCoverage&&o.enable(20),_.push(o.mask)}function C(_){const y=v[_.type];let F;if(y){const N=jt[y];F=Ql.clone(N.uniforms)}else F=_.uniforms;return F}function w(_,y){let F;for(let N=0,P=h.length;N<P;N++){const B=h[N];if(B.cacheKey===y){F=B,++F.usedTimes;break}}return F===void 0&&(F=new fp(i,y,_,r),h.push(F)),F}function T(_){if(--_.usedTimes===0){const y=h.indexOf(_);h[y]=h[h.length-1],h.pop(),_.destroy()}}function R(_){c.remove(_)}function k(){c.dispose()}return{getParameters:f,getProgramCacheKey:M,getUniforms:C,acquireProgram:w,releaseProgram:T,releaseShaderCache:R,programs:h,dispose:k}}function vp(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function xp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Co(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Po(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(p,u,m,g,v,d){let f=i[e];return f===void 0?(f={id:p.id,object:p,geometry:u,material:m,groupOrder:g,renderOrder:p.renderOrder,z:v,group:d},i[e]=f):(f.id=p.id,f.object=p,f.geometry=u,f.material=m,f.groupOrder=g,f.renderOrder=p.renderOrder,f.z=v,f.group=d),e++,f}function o(p,u,m,g,v,d){const f=a(p,u,m,g,v,d);m.transmission>0?n.push(f):m.transparent===!0?s.push(f):t.push(f)}function c(p,u,m,g,v,d){const f=a(p,u,m,g,v,d);m.transmission>0?n.unshift(f):m.transparent===!0?s.unshift(f):t.unshift(f)}function l(p,u){t.length>1&&t.sort(p||xp),n.length>1&&n.sort(u||Co),s.length>1&&s.sort(u||Co)}function h(){for(let p=e,u=i.length;p<u;p++){const m=i[p];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:c,finish:h,sort:l}}function Mp(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new Po,i.set(n,[a])):s>=r.length?(a=new Po,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Sp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Pe};break;case"SpotLight":t={position:new z,direction:new z,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function yp(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Ep=0;function bp(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Tp(i){const e=new Sp,t=yp(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new z);const s=new z,r=new tt,a=new tt;function o(l){let h=0,p=0,u=0;for(let k=0;k<9;k++)n.probe[k].set(0,0,0);let m=0,g=0,v=0,d=0,f=0,M=0,x=0,E=0,C=0,w=0,T=0;l.sort(bp);for(let k=0,_=l.length;k<_;k++){const y=l[k],F=y.color,N=y.intensity,P=y.distance,B=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)h+=F.r*N,p+=F.g*N,u+=F.b*N;else if(y.isLightProbe){for(let O=0;O<9;O++)n.probe[O].addScaledVector(y.sh.coefficients[O],N);T++}else if(y.isDirectionalLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const $=y.shadow,G=t.get(y);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.directionalShadow[m]=G,n.directionalShadowMap[m]=B,n.directionalShadowMatrix[m]=y.shadow.matrix,M++}n.directional[m]=O,m++}else if(y.isSpotLight){const O=e.get(y);O.position.setFromMatrixPosition(y.matrixWorld),O.color.copy(F).multiplyScalar(N),O.distance=P,O.coneCos=Math.cos(y.angle),O.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),O.decay=y.decay,n.spot[v]=O;const $=y.shadow;if(y.map&&(n.spotLightMap[C]=y.map,C++,$.updateMatrices(y),y.castShadow&&w++),n.spotLightMatrix[v]=$.matrix,y.castShadow){const G=t.get(y);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,n.spotShadow[v]=G,n.spotShadowMap[v]=B,E++}v++}else if(y.isRectAreaLight){const O=e.get(y);O.color.copy(F).multiplyScalar(N),O.halfWidth.set(y.width*.5,0,0),O.halfHeight.set(0,y.height*.5,0),n.rectArea[d]=O,d++}else if(y.isPointLight){const O=e.get(y);if(O.color.copy(y.color).multiplyScalar(y.intensity),O.distance=y.distance,O.decay=y.decay,y.castShadow){const $=y.shadow,G=t.get(y);G.shadowIntensity=$.intensity,G.shadowBias=$.bias,G.shadowNormalBias=$.normalBias,G.shadowRadius=$.radius,G.shadowMapSize=$.mapSize,G.shadowCameraNear=$.camera.near,G.shadowCameraFar=$.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=B,n.pointShadowMatrix[g]=y.shadow.matrix,x++}n.point[g]=O,g++}else if(y.isHemisphereLight){const O=e.get(y);O.skyColor.copy(y.color).multiplyScalar(N),O.groundColor.copy(y.groundColor).multiplyScalar(N),n.hemi[f]=O,f++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ie.LTC_FLOAT_1,n.rectAreaLTC2=ie.LTC_FLOAT_2):(n.rectAreaLTC1=ie.LTC_HALF_1,n.rectAreaLTC2=ie.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=p,n.ambient[2]=u;const R=n.hash;(R.directionalLength!==m||R.pointLength!==g||R.spotLength!==v||R.rectAreaLength!==d||R.hemiLength!==f||R.numDirectionalShadows!==M||R.numPointShadows!==x||R.numSpotShadows!==E||R.numSpotMaps!==C||R.numLightProbes!==T)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=d,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=E,n.spotShadowMap.length=E,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=E+C-w,n.spotLightMap.length=C,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=T,R.directionalLength=m,R.pointLength=g,R.spotLength=v,R.rectAreaLength=d,R.hemiLength=f,R.numDirectionalShadows=M,R.numPointShadows=x,R.numSpotShadows=E,R.numSpotMaps=C,R.numLightProbes=T,n.version=Ep++)}function c(l,h){let p=0,u=0,m=0,g=0,v=0;const d=h.matrixWorldInverse;for(let f=0,M=l.length;f<M;f++){const x=l[f];if(x.isDirectionalLight){const E=n.directional[p];E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),p++}else if(x.isSpotLight){const E=n.spot[m];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),E.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(d),m++}else if(x.isRectAreaLight){const E=n.rectArea[g];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),a.identity(),r.copy(x.matrixWorld),r.premultiply(d),a.extractRotation(r),E.halfWidth.set(x.width*.5,0,0),E.halfHeight.set(0,x.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),g++}else if(x.isPointLight){const E=n.point[u];E.position.setFromMatrixPosition(x.matrixWorld),E.position.applyMatrix4(d),u++}else if(x.isHemisphereLight){const E=n.hemi[v];E.direction.setFromMatrixPosition(x.matrixWorld),E.direction.transformDirection(d),v++}}}return{setup:o,setupView:c,state:n}}function Lo(i){const e=new Tp(i),t=[],n=[];function s(h){l.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function c(h){e.setupView(t,h)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:o,setupLightsView:c,pushLight:r,pushShadow:a}}function wp(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new Lo(i),e.set(s,[o])):r>=a.length?(o=new Lo(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Ap extends wi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ml,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Rp extends wi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Cp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Pp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lp(i,e,t){let n=new Ea;const s=new Fe,r=new Fe,a=new ot,o=new Ap({depthPacking:Sl}),c=new Rp,l={},h=t.maxTextureSize,p={[wn]:Ct,[Ct]:wn,[Jt]:Jt},u=new An({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Fe},radius:{value:4}},vertexShader:Cp,fragmentShader:Pp}),m=u.clone();m.defines.HORIZONTAL_PASS=1;const g=new zt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new $e(g,u),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ko;let f=this.type;this.render=function(w,T,R){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||w.length===0)return;const k=i.getRenderTarget(),_=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),F=i.state;F.setBlending(yn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const N=f!==hn&&this.type===hn,P=f===hn&&this.type!==hn;for(let B=0,O=w.length;B<O;B++){const $=w[B],G=$.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const ne=G.getFrameExtents();if(s.multiply(ne),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ne.x),s.x=r.x*ne.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ne.y),s.y=r.y*ne.y,G.mapSize.y=r.y)),G.map===null||N===!0||P===!0){const de=this.type!==hn?{minFilter:Rt,magFilter:Rt}:{};G.map!==null&&G.map.dispose(),G.map=new qn(s.x,s.y,de),G.map.texture.name=$.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const re=G.getViewportCount();for(let de=0;de<re;de++){const Ne=G.getViewport(de);a.set(r.x*Ne.x,r.y*Ne.y,r.x*Ne.z,r.y*Ne.w),F.viewport(a),G.updateMatrices($,de),n=G.getFrustum(),E(T,R,G.camera,$,this.type)}G.isPointLightShadow!==!0&&this.type===hn&&M(G,R),G.needsUpdate=!1}f=this.type,d.needsUpdate=!1,i.setRenderTarget(k,_,y)};function M(w,T){const R=e.update(v);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,m.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,m.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new qn(s.x,s.y)),u.uniforms.shadow_pass.value=w.map.texture,u.uniforms.resolution.value=w.mapSize,u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(T,null,R,u,v,null),m.uniforms.shadow_pass.value=w.mapPass.texture,m.uniforms.resolution.value=w.mapSize,m.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(T,null,R,m,v,null)}function x(w,T,R,k){let _=null;const y=R.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(y!==void 0)_=y;else if(_=R.isPointLight===!0?c:o,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=_.uuid,N=T.uuid;let P=l[F];P===void 0&&(P={},l[F]=P);let B=P[N];B===void 0&&(B=_.clone(),P[N]=B,T.addEventListener("dispose",C)),_=B}if(_.visible=T.visible,_.wireframe=T.wireframe,k===hn?_.side=T.shadowSide!==null?T.shadowSide:T.side:_.side=T.shadowSide!==null?T.shadowSide:p[T.side],_.alphaMap=T.alphaMap,_.alphaTest=T.alphaTest,_.map=T.map,_.clipShadows=T.clipShadows,_.clippingPlanes=T.clippingPlanes,_.clipIntersection=T.clipIntersection,_.displacementMap=T.displacementMap,_.displacementScale=T.displacementScale,_.displacementBias=T.displacementBias,_.wireframeLinewidth=T.wireframeLinewidth,_.linewidth=T.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const F=i.properties.get(_);F.light=R}return _}function E(w,T,R,k,_){if(w.visible===!1)return;if(w.layers.test(T.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&_===hn)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,w.matrixWorld);const N=e.update(w),P=w.material;if(Array.isArray(P)){const B=N.groups;for(let O=0,$=B.length;O<$;O++){const G=B[O],ne=P[G.materialIndex];if(ne&&ne.visible){const re=x(w,ne,k,_);w.onBeforeShadow(i,w,T,R,N,re,G),i.renderBufferDirect(R,null,N,re,w,G),w.onAfterShadow(i,w,T,R,N,re,G)}}}else if(P.visible){const B=x(w,P,k,_);w.onBeforeShadow(i,w,T,R,N,B,null),i.renderBufferDirect(R,null,N,B,w,null),w.onAfterShadow(i,w,T,R,N,B,null)}}const F=w.children;for(let N=0,P=F.length;N<P;N++)E(F[N],T,R,k,_)}function C(w){w.target.removeEventListener("dispose",C);for(const R in l){const k=l[R],_=w.target.uuid;_ in k&&(k[_].dispose(),delete k[_])}}}const Dp={[wr]:Ar,[Rr]:Lr,[Cr]:Dr,[vi]:Pr,[Ar]:wr,[Lr]:Rr,[Dr]:Cr,[Pr]:vi};function Ip(i){function e(){let D=!1;const ce=new ot;let q=null;const j=new ot(0,0,0,0);return{setMask:function(ae){q!==ae&&!D&&(i.colorMask(ae,ae,ae,ae),q=ae)},setLocked:function(ae){D=ae},setClear:function(ae,le,He,lt,bt){bt===!0&&(ae*=lt,le*=lt,He*=lt),ce.set(ae,le,He,lt),j.equals(ce)===!1&&(i.clearColor(ae,le,He,lt),j.copy(ce))},reset:function(){D=!1,q=null,j.set(-1,0,0,0)}}}function t(){let D=!1,ce=!1,q=null,j=null,ae=null;return{setReversed:function(le){ce=le},setTest:function(le){le?ge(i.DEPTH_TEST):ue(i.DEPTH_TEST)},setMask:function(le){q!==le&&!D&&(i.depthMask(le),q=le)},setFunc:function(le){if(ce&&(le=Dp[le]),j!==le){switch(le){case wr:i.depthFunc(i.NEVER);break;case Ar:i.depthFunc(i.ALWAYS);break;case Rr:i.depthFunc(i.LESS);break;case vi:i.depthFunc(i.LEQUAL);break;case Cr:i.depthFunc(i.EQUAL);break;case Pr:i.depthFunc(i.GEQUAL);break;case Lr:i.depthFunc(i.GREATER);break;case Dr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=le}},setLocked:function(le){D=le},setClear:function(le){ae!==le&&(i.clearDepth(le),ae=le)},reset:function(){D=!1,q=null,j=null,ae=null}}}function n(){let D=!1,ce=null,q=null,j=null,ae=null,le=null,He=null,lt=null,bt=null;return{setTest:function(qe){D||(qe?ge(i.STENCIL_TEST):ue(i.STENCIL_TEST))},setMask:function(qe){ce!==qe&&!D&&(i.stencilMask(qe),ce=qe)},setFunc:function(qe,Tt,nn){(q!==qe||j!==Tt||ae!==nn)&&(i.stencilFunc(qe,Tt,nn),q=qe,j=Tt,ae=nn)},setOp:function(qe,Tt,nn){(le!==qe||He!==Tt||lt!==nn)&&(i.stencilOp(qe,Tt,nn),le=qe,He=Tt,lt=nn)},setLocked:function(qe){D=qe},setClear:function(qe){bt!==qe&&(i.clearStencil(qe),bt=qe)},reset:function(){D=!1,ce=null,q=null,j=null,ae=null,le=null,He=null,lt=null,bt=null}}}const s=new e,r=new t,a=new n,o=new WeakMap,c=new WeakMap;let l={},h={},p=new WeakMap,u=[],m=null,g=!1,v=null,d=null,f=null,M=null,x=null,E=null,C=null,w=new Pe(0,0,0),T=0,R=!1,k=null,_=null,y=null,F=null,N=null;const P=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,O=0;const $=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec($)[1]),B=O>=1):$.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),B=O>=2);let G=null,ne={};const re=i.getParameter(i.SCISSOR_BOX),de=i.getParameter(i.VIEWPORT),Ne=new ot().fromArray(re),Xe=new ot().fromArray(de);function Y(D,ce,q,j){const ae=new Uint8Array(4),le=i.createTexture();i.bindTexture(D,le),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let He=0;He<q;He++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ce,0,i.RGBA,1,1,j,0,i.RGBA,i.UNSIGNED_BYTE,ae):i.texImage2D(ce+He,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ae);return le}const Q={};Q[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ge(i.DEPTH_TEST),r.setFunc(vi),Oe(!1),Ve(Ba),ge(i.CULL_FACE),L(yn);function ge(D){l[D]!==!0&&(i.enable(D),l[D]=!0)}function ue(D){l[D]!==!1&&(i.disable(D),l[D]=!1)}function Le(D,ce){return h[D]!==ce?(i.bindFramebuffer(D,ce),h[D]=ce,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ce),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ce),!0):!1}function Ee(D,ce){let q=u,j=!1;if(D){q=p.get(ce),q===void 0&&(q=[],p.set(ce,q));const ae=D.textures;if(q.length!==ae.length||q[0]!==i.COLOR_ATTACHMENT0){for(let le=0,He=ae.length;le<He;le++)q[le]=i.COLOR_ATTACHMENT0+le;q.length=ae.length,j=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,j=!0);j&&i.drawBuffers(q)}function ze(D){return m!==D?(i.useProgram(D),m=D,!0):!1}const Je={[zn]:i.FUNC_ADD,[$c]:i.FUNC_SUBTRACT,[Yc]:i.FUNC_REVERSE_SUBTRACT};Je[Kc]=i.MIN,Je[Zc]=i.MAX;const ke={[jc]:i.ZERO,[Jc]:i.ONE,[Qc]:i.SRC_COLOR,[br]:i.SRC_ALPHA,[rl]:i.SRC_ALPHA_SATURATE,[il]:i.DST_COLOR,[tl]:i.DST_ALPHA,[el]:i.ONE_MINUS_SRC_COLOR,[Tr]:i.ONE_MINUS_SRC_ALPHA,[sl]:i.ONE_MINUS_DST_COLOR,[nl]:i.ONE_MINUS_DST_ALPHA,[al]:i.CONSTANT_COLOR,[ol]:i.ONE_MINUS_CONSTANT_COLOR,[cl]:i.CONSTANT_ALPHA,[ll]:i.ONE_MINUS_CONSTANT_ALPHA};function L(D,ce,q,j,ae,le,He,lt,bt,qe){if(D===yn){g===!0&&(ue(i.BLEND),g=!1);return}if(g===!1&&(ge(i.BLEND),g=!0),D!==qc){if(D!==v||qe!==R){if((d!==zn||x!==zn)&&(i.blendEquation(i.FUNC_ADD),d=zn,x=zn),qe)switch(D){case mi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.ONE,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case mi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case za:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ka:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ha:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}f=null,M=null,E=null,C=null,w.set(0,0,0),T=0,v=D,R=qe}return}ae=ae||ce,le=le||q,He=He||j,(ce!==d||ae!==x)&&(i.blendEquationSeparate(Je[ce],Je[ae]),d=ce,x=ae),(q!==f||j!==M||le!==E||He!==C)&&(i.blendFuncSeparate(ke[q],ke[j],ke[le],ke[He]),f=q,M=j,E=le,C=He),(lt.equals(w)===!1||bt!==T)&&(i.blendColor(lt.r,lt.g,lt.b,bt),w.copy(lt),T=bt),v=D,R=!1}function Pt(D,ce){D.side===Jt?ue(i.CULL_FACE):ge(i.CULL_FACE);let q=D.side===Ct;ce&&(q=!q),Oe(q),D.blending===mi&&D.transparent===!1?L(yn):L(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);const j=D.stencilWrite;a.setTest(j),j&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),nt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?ge(i.SAMPLE_ALPHA_TO_COVERAGE):ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Oe(D){k!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),k=D)}function Ve(D){D!==Gc?(ge(i.CULL_FACE),D!==_&&(D===Ba?i.cullFace(i.BACK):D===Wc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ue(i.CULL_FACE),_=D}function Te(D){D!==y&&(B&&i.lineWidth(D),y=D)}function nt(D,ce,q){D?(ge(i.POLYGON_OFFSET_FILL),(F!==ce||N!==q)&&(i.polygonOffset(ce,q),F=ce,N=q)):ue(i.POLYGON_OFFSET_FILL)}function Re(D){D?ge(i.SCISSOR_TEST):ue(i.SCISSOR_TEST)}function A(D){D===void 0&&(D=i.TEXTURE0+P-1),G!==D&&(i.activeTexture(D),G=D)}function S(D,ce,q){q===void 0&&(G===null?q=i.TEXTURE0+P-1:q=G);let j=ne[q];j===void 0&&(j={type:void 0,texture:void 0},ne[q]=j),(j.type!==D||j.texture!==ce)&&(G!==q&&(i.activeTexture(q),G=q),i.bindTexture(D,ce||Q[D]),j.type=D,j.texture=ce)}function H(){const D=ne[G];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ge(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function pe(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function we(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){Ne.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ne.copy(D))}function me(D){Xe.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Xe.copy(D))}function Be(D,ce){let q=c.get(ce);q===void 0&&(q=new WeakMap,c.set(ce,q));let j=q.get(D);j===void 0&&(j=i.getUniformBlockIndex(ce,D.name),q.set(D,j))}function De(D,ce){const j=c.get(ce).get(D);o.get(ce)!==j&&(i.uniformBlockBinding(ce,j,D.__bindingPointIndex),o.set(ce,j))}function et(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),l={},G=null,ne={},h={},p=new WeakMap,u=[],m=null,g=!1,v=null,d=null,f=null,M=null,x=null,E=null,C=null,w=new Pe(0,0,0),T=0,R=!1,k=null,_=null,y=null,F=null,N=null,Ne.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ge,disable:ue,bindFramebuffer:Le,drawBuffers:Ee,useProgram:ze,setBlending:L,setMaterial:Pt,setFlipSided:Oe,setCullFace:Ve,setLineWidth:Te,setPolygonOffset:nt,setScissorTest:Re,activeTexture:A,bindTexture:S,unbindTexture:H,compressedTexImage2D:Z,compressedTexImage3D:J,texImage2D:pe,texImage3D:we,updateUBOMapping:Be,uniformBlockBinding:De,texStorage2D:Ge,texStorage3D:ee,texSubImage2D:K,texSubImage3D:xe,compressedTexSubImage2D:se,compressedTexSubImage3D:fe,scissor:Ae,viewport:me,reset:et}}function Do(i,e,t,n){const s=Up(n);switch(t){case ec:return i*e;case nc:return i*e;case ic:return i*e*2;case _a:return i*e/s.components*s.byteLength;case va:return i*e/s.components*s.byteLength;case sc:return i*e*2/s.components*s.byteLength;case xa:return i*e*2/s.components*s.byteLength;case tc:return i*e*3/s.components*s.byteLength;case $t:return i*e*4/s.components*s.byteLength;case Ma:return i*e*4/s.components*s.byteLength;case Ss:case ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Es:case bs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Br:case kr:return Math.max(i,16)*Math.max(e,8)/4;case Or:case zr:return Math.max(i,8)*Math.max(e,8)/2;case Hr:case Vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Wr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xr:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case qr:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case $r:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Yr:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Kr:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Zr:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case jr:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Jr:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Qr:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ea:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ta:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case na:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ts:case sa:case ra:return Math.ceil(i/4)*Math.ceil(e/4)*16;case rc:case aa:return Math.ceil(i/4)*Math.ceil(e/4)*8;case oa:case ca:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Up(i){switch(i){case fn:case jo:return{byteLength:1,components:1};case ki:case Jo:case Gi:return{byteLength:2,components:1};case ma:case ga:return{byteLength:2,components:4};case Xn:case pa:case en:return{byteLength:4,components:1};case Qo:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Np(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Fe,h=new WeakMap;let p;const u=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,S){return m?new OffscreenCanvas(A,S):Ds("canvas")}function v(A,S,H){let Z=1;const J=Re(A);if((J.width>H||J.height>H)&&(Z=H/Math.max(J.width,J.height)),Z<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const K=Math.floor(Z*J.width),xe=Math.floor(Z*J.height);p===void 0&&(p=g(K,xe));const se=S?g(K,xe):p;return se.width=K,se.height=xe,se.getContext("2d").drawImage(A,0,0,K,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+K+"x"+xe+")."),se}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function d(A){return A.generateMipmaps&&A.minFilter!==Rt&&A.minFilter!==Xt}function f(A){i.generateMipmap(A)}function M(A,S,H,Z,J=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let K=S;if(S===i.RED&&(H===i.FLOAT&&(K=i.R32F),H===i.HALF_FLOAT&&(K=i.R16F),H===i.UNSIGNED_BYTE&&(K=i.R8)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.R8UI),H===i.UNSIGNED_SHORT&&(K=i.R16UI),H===i.UNSIGNED_INT&&(K=i.R32UI),H===i.BYTE&&(K=i.R8I),H===i.SHORT&&(K=i.R16I),H===i.INT&&(K=i.R32I)),S===i.RG&&(H===i.FLOAT&&(K=i.RG32F),H===i.HALF_FLOAT&&(K=i.RG16F),H===i.UNSIGNED_BYTE&&(K=i.RG8)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RG8UI),H===i.UNSIGNED_SHORT&&(K=i.RG16UI),H===i.UNSIGNED_INT&&(K=i.RG32UI),H===i.BYTE&&(K=i.RG8I),H===i.SHORT&&(K=i.RG16I),H===i.INT&&(K=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGB8UI),H===i.UNSIGNED_SHORT&&(K=i.RGB16UI),H===i.UNSIGNED_INT&&(K=i.RGB32UI),H===i.BYTE&&(K=i.RGB8I),H===i.SHORT&&(K=i.RGB16I),H===i.INT&&(K=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),H===i.UNSIGNED_INT&&(K=i.RGBA32UI),H===i.BYTE&&(K=i.RGBA8I),H===i.SHORT&&(K=i.RGBA16I),H===i.INT&&(K=i.RGBA32I)),S===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),S===i.RGBA){const xe=J?Rs:Ze.getTransfer(Z);H===i.FLOAT&&(K=i.RGBA32F),H===i.HALF_FLOAT&&(K=i.RGBA16F),H===i.UNSIGNED_BYTE&&(K=xe===st?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function x(A,S){let H;return A?S===null||S===Xn||S===Si?H=i.DEPTH24_STENCIL8:S===en?H=i.DEPTH32F_STENCIL8:S===ki&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xn||S===Si?H=i.DEPTH_COMPONENT24:S===en?H=i.DEPTH_COMPONENT32F:S===ki&&(H=i.DEPTH_COMPONENT16),H}function E(A,S){return d(A)===!0||A.isFramebufferTexture&&A.minFilter!==Rt&&A.minFilter!==Xt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function C(A){const S=A.target;S.removeEventListener("dispose",C),T(S),S.isVideoTexture&&h.delete(S)}function w(A){const S=A.target;S.removeEventListener("dispose",w),k(S)}function T(A){const S=n.get(A);if(S.__webglInit===void 0)return;const H=A.source,Z=u.get(H);if(Z){const J=Z[S.__cacheKey];J.usedTimes--,J.usedTimes===0&&R(A),Object.keys(Z).length===0&&u.delete(H)}n.remove(A)}function R(A){const S=n.get(A);i.deleteTexture(S.__webglTexture);const H=A.source,Z=u.get(H);delete Z[S.__cacheKey],a.memory.textures--}function k(A){const S=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let J=0;J<S.__webglFramebuffer[Z].length;J++)i.deleteFramebuffer(S.__webglFramebuffer[Z][J]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=A.textures;for(let Z=0,J=H.length;Z<J;Z++){const K=n.get(H[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(A)}let _=0;function y(){_=0}function F(){const A=_;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),_+=1,A}function N(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function P(A,S){const H=n.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&H.__version!==A.version){const Z=A.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(H,A,S);return}}t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function B(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Xe(H,A,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function O(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Xe(H,A,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function $(A,S){const H=n.get(A);if(A.version>0&&H.__version!==A.version){Y(H,A,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const G={[Nr]:i.REPEAT,[Hn]:i.CLAMP_TO_EDGE,[Fr]:i.MIRRORED_REPEAT},ne={[Rt]:i.NEAREST,[xl]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[Xt]:i.LINEAR,[ks]:i.LINEAR_MIPMAP_NEAREST,[Vn]:i.LINEAR_MIPMAP_LINEAR},re={[El]:i.NEVER,[Cl]:i.ALWAYS,[bl]:i.LESS,[ac]:i.LEQUAL,[Tl]:i.EQUAL,[Rl]:i.GEQUAL,[wl]:i.GREATER,[Al]:i.NOTEQUAL};function de(A,S){if(S.type===en&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Xt||S.magFilter===ks||S.magFilter===Ji||S.magFilter===Vn||S.minFilter===Xt||S.minFilter===ks||S.minFilter===Ji||S.minFilter===Vn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[S.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[S.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[S.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,ne[S.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,ne[S.minFilter]),S.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Rt||S.minFilter!==Ji&&S.minFilter!==Vn||S.type===en&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(A,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ne(A,S){let H=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",C));const Z=S.source;let J=u.get(Z);J===void 0&&(J={},u.set(Z,J));const K=N(S);if(K!==A.__cacheKey){J[K]===void 0&&(J[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),J[K].usedTimes++;const xe=J[A.__cacheKey];xe!==void 0&&(J[A.__cacheKey].usedTimes--,xe.usedTimes===0&&R(S)),A.__cacheKey=K,A.__webglTexture=J[K].texture}return H}function Xe(A,S,H){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const J=Ne(A,S),K=S.source;t.bindTexture(Z,A.__webglTexture,i.TEXTURE0+H);const xe=n.get(K);if(K.version!==xe.__version||J===!0){t.activeTexture(i.TEXTURE0+H);const se=Ze.getPrimaries(Ze.workingColorSpace),fe=S.colorSpace===Sn?null:Ze.getPrimaries(S.colorSpace),Ge=S.colorSpace===Sn||se===fe?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ge);let ee=v(S.image,!1,s.maxTextureSize);ee=nt(S,ee);const pe=r.convert(S.format,S.colorSpace),we=r.convert(S.type);let Ae=M(S.internalFormat,pe,we,S.colorSpace,S.isVideoTexture);de(Z,S);let me;const Be=S.mipmaps,De=S.isVideoTexture!==!0,et=xe.__version===void 0||J===!0,D=K.dataReady,ce=E(S,ee);if(S.isDepthTexture)Ae=x(S.format===yi,S.type),et&&(De?t.texStorage2D(i.TEXTURE_2D,1,Ae,ee.width,ee.height):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,pe,we,null));else if(S.isDataTexture)if(Be.length>0){De&&et&&t.texStorage2D(i.TEXTURE_2D,ce,Ae,Be[0].width,Be[0].height);for(let q=0,j=Be.length;q<j;q++)me=Be[q],De?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,pe,we,me.data);S.generateMipmaps=!1}else De?(et&&t.texStorage2D(i.TEXTURE_2D,ce,Ae,ee.width,ee.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ee.width,ee.height,pe,we,ee.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,ee.width,ee.height,0,pe,we,ee.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){De&&et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ae,Be[0].width,Be[0].height,ee.depth);for(let q=0,j=Be.length;q<j;q++)if(me=Be[q],S.format!==$t)if(pe!==null)if(De){if(D)if(S.layerUpdates.size>0){const ae=Do(me.width,me.height,S.format,S.type);for(const le of S.layerUpdates){const He=me.data.subarray(le*ae/me.data.BYTES_PER_ELEMENT,(le+1)*ae/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,le,me.width,me.height,1,pe,He,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ee.depth,pe,me.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,q,Ae,me.width,me.height,ee.depth,0,me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else De?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,q,0,0,0,me.width,me.height,ee.depth,pe,we,me.data):t.texImage3D(i.TEXTURE_2D_ARRAY,q,Ae,me.width,me.height,ee.depth,0,pe,we,me.data)}else{De&&et&&t.texStorage2D(i.TEXTURE_2D,ce,Ae,Be[0].width,Be[0].height);for(let q=0,j=Be.length;q<j;q++)me=Be[q],S.format!==$t?pe!==null?De?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,me.data):t.compressedTexImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,me.width,me.height,pe,we,me.data):t.texImage2D(i.TEXTURE_2D,q,Ae,me.width,me.height,0,pe,we,me.data)}else if(S.isDataArrayTexture)if(De){if(et&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ce,Ae,ee.width,ee.height,ee.depth),D)if(S.layerUpdates.size>0){const q=Do(ee.width,ee.height,S.format,S.type);for(const j of S.layerUpdates){const ae=ee.data.subarray(j*q/ee.data.BYTES_PER_ELEMENT,(j+1)*q/ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,j,ee.width,ee.height,1,pe,we,ae)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(S.isData3DTexture)De?(et&&t.texStorage3D(i.TEXTURE_3D,ce,Ae,ee.width,ee.height,ee.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,pe,we,ee.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,ee.width,ee.height,ee.depth,0,pe,we,ee.data);else if(S.isFramebufferTexture){if(et)if(De)t.texStorage2D(i.TEXTURE_2D,ce,Ae,ee.width,ee.height);else{let q=ee.width,j=ee.height;for(let ae=0;ae<ce;ae++)t.texImage2D(i.TEXTURE_2D,ae,Ae,q,j,0,pe,we,null),q>>=1,j>>=1}}else if(Be.length>0){if(De&&et){const q=Re(Be[0]);t.texStorage2D(i.TEXTURE_2D,ce,Ae,q.width,q.height)}for(let q=0,j=Be.length;q<j;q++)me=Be[q],De?D&&t.texSubImage2D(i.TEXTURE_2D,q,0,0,pe,we,me):t.texImage2D(i.TEXTURE_2D,q,Ae,pe,we,me);S.generateMipmaps=!1}else if(De){if(et){const q=Re(ee);t.texStorage2D(i.TEXTURE_2D,ce,Ae,q.width,q.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,pe,we,ee)}else t.texImage2D(i.TEXTURE_2D,0,Ae,pe,we,ee);d(S)&&f(Z),xe.__version=K.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Y(A,S,H){if(S.image.length!==6)return;const Z=Ne(A,S),J=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+H);const K=n.get(J);if(J.version!==K.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const xe=Ze.getPrimaries(Ze.workingColorSpace),se=S.colorSpace===Sn?null:Ze.getPrimaries(S.colorSpace),fe=S.colorSpace===Sn||xe===se?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const Ge=S.isCompressedTexture||S.image[0].isCompressedTexture,ee=S.image[0]&&S.image[0].isDataTexture,pe=[];for(let j=0;j<6;j++)!Ge&&!ee?pe[j]=v(S.image[j],!0,s.maxCubemapSize):pe[j]=ee?S.image[j].image:S.image[j],pe[j]=nt(S,pe[j]);const we=pe[0],Ae=r.convert(S.format,S.colorSpace),me=r.convert(S.type),Be=M(S.internalFormat,Ae,me,S.colorSpace),De=S.isVideoTexture!==!0,et=K.__version===void 0||Z===!0,D=J.dataReady;let ce=E(S,we);de(i.TEXTURE_CUBE_MAP,S);let q;if(Ge){De&&et&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,we.width,we.height);for(let j=0;j<6;j++){q=pe[j].mipmaps;for(let ae=0;ae<q.length;ae++){const le=q[ae];S.format!==$t?Ae!==null?De?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,le.width,le.height,Ae,le.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Be,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,0,0,le.width,le.height,Ae,me,le.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae,Be,le.width,le.height,0,Ae,me,le.data)}}}else{if(q=S.mipmaps,De&&et){q.length>0&&ce++;const j=Re(pe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ce,Be,j.width,j.height)}for(let j=0;j<6;j++)if(ee){De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe[j].width,pe[j].height,Ae,me,pe[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,pe[j].width,pe[j].height,0,Ae,me,pe[j].data);for(let ae=0;ae<q.length;ae++){const He=q[ae].image[j].image;De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,He.width,He.height,Ae,me,He.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Be,He.width,He.height,0,Ae,me,He.data)}}else{De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,me,pe[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Be,Ae,me,pe[j]);for(let ae=0;ae<q.length;ae++){const le=q[ae];De?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,0,0,Ae,me,le.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ae+1,Be,Ae,me,le.image[j])}}}d(S)&&f(i.TEXTURE_CUBE_MAP),K.__version=J.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function Q(A,S,H,Z,J,K){const xe=r.convert(H.format,H.colorSpace),se=r.convert(H.type),fe=M(H.internalFormat,xe,se,H.colorSpace);if(!n.get(S).__hasExternalTextures){const ee=Math.max(1,S.width>>K),pe=Math.max(1,S.height>>K);J===i.TEXTURE_3D||J===i.TEXTURE_2D_ARRAY?t.texImage3D(J,K,fe,ee,pe,S.depth,0,xe,se,null):t.texImage2D(J,K,fe,ee,pe,0,xe,se,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,J,n.get(H).__webglTexture,0,Oe(S)):(J===i.TEXTURE_2D||J>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,J,n.get(H).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ge(A,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,A),S.depthBuffer){const Z=S.depthTexture,J=Z&&Z.isDepthTexture?Z.type:null,K=x(S.stencilBuffer,J),xe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=Oe(S);Ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,K,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,se,K,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,K,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,xe,i.RENDERBUFFER,A)}else{const Z=S.textures;for(let J=0;J<Z.length;J++){const K=Z[J],xe=r.convert(K.format,K.colorSpace),se=r.convert(K.type),fe=M(K.internalFormat,xe,se,K.colorSpace),Ge=Oe(S);H&&Ve(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ge,fe,S.width,S.height):Ve(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ge,fe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,fe,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ue(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),P(S.depthTexture,0);const Z=n.get(S.depthTexture).__webglTexture,J=Oe(S);if(S.depthTexture.format===gi)Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===yi)Ve(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Le(A){const S=n.get(A),H=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const Z=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const J=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",J)};Z.addEventListener("dispose",J),S.__depthDisposeCallback=J}S.__boundDepthTexture=Z}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");ue(S.__webglFramebuffer,A)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),ge(S.__webglDepthbuffer[Z],A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ge(S.__webglDepthbuffer,A,!1);else{const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,J=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,J),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,J)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ee(A,S,H){const Z=n.get(A);S!==void 0&&Q(Z.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Le(A)}function ze(A){const S=A.texture,H=n.get(A),Z=n.get(S);A.addEventListener("dispose",w);const J=A.textures,K=A.isWebGLCubeRenderTarget===!0,xe=J.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),K){H.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[se]=[];for(let fe=0;fe<S.mipmaps.length;fe++)H.__webglFramebuffer[se][fe]=i.createFramebuffer()}else H.__webglFramebuffer[se]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)H.__webglFramebuffer[se]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(xe)for(let se=0,fe=J.length;se<fe;se++){const Ge=n.get(J[se]);Ge.__webglTexture===void 0&&(Ge.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Ve(A)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let se=0;se<J.length;se++){const fe=J[se];H.__webglColorRenderbuffer[se]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[se]);const Ge=r.convert(fe.format,fe.colorSpace),ee=r.convert(fe.type),pe=M(fe.internalFormat,Ge,ee,fe.colorSpace,A.isXRRenderTarget===!0),we=Oe(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,we,pe,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+se,i.RENDERBUFFER,H.__webglColorRenderbuffer[se])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ge(H.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),de(i.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Q(H.__webglFramebuffer[se][fe],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,fe);else Q(H.__webglFramebuffer[se],A,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);d(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,fe=J.length;se<fe;se++){const Ge=J[se],ee=n.get(Ge);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture),de(i.TEXTURE_2D,Ge),Q(H.__webglFramebuffer,A,Ge,i.COLOR_ATTACHMENT0+se,i.TEXTURE_2D,0),d(Ge)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let se=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(se=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),de(se,S),S.mipmaps&&S.mipmaps.length>0)for(let fe=0;fe<S.mipmaps.length;fe++)Q(H.__webglFramebuffer[fe],A,S,i.COLOR_ATTACHMENT0,se,fe);else Q(H.__webglFramebuffer,A,S,i.COLOR_ATTACHMENT0,se,0);d(S)&&f(se),t.unbindTexture()}A.depthBuffer&&Le(A)}function Je(A){const S=A.textures;for(let H=0,Z=S.length;H<Z;H++){const J=S[H];if(d(J)){const K=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,xe=n.get(J).__webglTexture;t.bindTexture(K,xe),f(K),t.unbindTexture()}}}const ke=[],L=[];function Pt(A){if(A.samples>0){if(Ve(A)===!1){const S=A.textures,H=A.width,Z=A.height;let J=i.COLOR_BUFFER_BIT;const K=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,xe=n.get(A),se=S.length>1;if(se)for(let fe=0;fe<S.length;fe++)t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let fe=0;fe<S.length;fe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=i.STENCIL_BUFFER_BIT)),se){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ge=n.get(S[fe]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ge,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,J,i.NEAREST),c===!0&&(ke.length=0,L.length=0,ke.push(i.COLOR_ATTACHMENT0+fe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ke.push(K),L.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,L)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ke))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),se)for(let fe=0;fe<S.length;fe++){t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.RENDERBUFFER,xe.__webglColorRenderbuffer[fe]);const Ge=n.get(S[fe]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,xe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+fe,i.TEXTURE_2D,Ge,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&c){const S=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Oe(A){return Math.min(s.maxSamples,A.samples)}function Ve(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Te(A){const S=a.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function nt(A,S){const H=A.colorSpace,Z=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||H!==Cn&&H!==Sn&&(Ze.getTransfer(H)===st?(Z!==$t||J!==fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),S}function Re(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=F,this.resetTextureUnits=y,this.setTexture2D=P,this.setTexture2DArray=B,this.setTexture3D=O,this.setTextureCube=$,this.rebindTextures=Ee,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Le,this.setupFrameBufferTexture=Q,this.useMultisampledRTT=Ve}function Fp(i,e){function t(n,s=Sn){let r;const a=Ze.getTransfer(s);if(n===fn)return i.UNSIGNED_BYTE;if(n===ma)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ga)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Qo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===jo)return i.BYTE;if(n===Jo)return i.SHORT;if(n===ki)return i.UNSIGNED_SHORT;if(n===pa)return i.INT;if(n===Xn)return i.UNSIGNED_INT;if(n===en)return i.FLOAT;if(n===Gi)return i.HALF_FLOAT;if(n===ec)return i.ALPHA;if(n===tc)return i.RGB;if(n===$t)return i.RGBA;if(n===nc)return i.LUMINANCE;if(n===ic)return i.LUMINANCE_ALPHA;if(n===gi)return i.DEPTH_COMPONENT;if(n===yi)return i.DEPTH_STENCIL;if(n===_a)return i.RED;if(n===va)return i.RED_INTEGER;if(n===sc)return i.RG;if(n===xa)return i.RG_INTEGER;if(n===Ma)return i.RGBA_INTEGER;if(n===Ss||n===ys||n===Es||n===bs)if(a===st)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ss)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ss)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ys)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Es)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Or||n===Br||n===zr||n===kr)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Or)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Br)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zr)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kr)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Hr||n===Vr||n===Gr)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Hr||n===Vr)return a===st?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Gr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Wr||n===Xr||n===qr||n===$r||n===Yr||n===Kr||n===Zr||n===jr||n===Jr||n===Qr||n===ea||n===ta||n===na||n===ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Wr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Xr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===qr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$r)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Yr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Kr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Zr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===jr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Qr)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ea)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ta)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===na)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ia)return a===st?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ts||n===sa||n===ra)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ts)return a===st?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===sa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ra)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===aa||n===oa||n===ca)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ts)return r.COMPRESSED_RED_RGTC1_EXT;if(n===aa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===oa)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ca)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Si?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class Op extends Bt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class tn extends gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Bp={type:"move"};class gr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new tn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new tn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new tn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const v of e.hand.values()){const d=t.getJointPose(v,n),f=this._getHandJoint(l,v);d!==null&&(f.matrix.fromArray(d.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=d.radius),f.visible=d!==null}const h=l.joints["index-finger-tip"],p=l.joints["thumb-tip"],u=h.position.distanceTo(p.position),m=.02,g=.005;l.inputState.pinching&&u>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Bp)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new tn;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const zp=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,kp=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hp{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new Et,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new An({vertexShader:zp,fragmentShader:kp,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new Ai(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vp extends bi{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,p=null,u=null,m=null,g=null;const v=new Hp,d=t.getContextAttributes();let f=null,M=null;const x=[],E=[],C=new Fe;let w=null;const T=new Bt;T.layers.enable(1),T.viewport=new ot;const R=new Bt;R.layers.enable(2),R.viewport=new ot;const k=[T,R],_=new Op;_.layers.enable(1),_.layers.enable(2);let y=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let Q=x[Y];return Q===void 0&&(Q=new gr,x[Y]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(Y){let Q=x[Y];return Q===void 0&&(Q=new gr,x[Y]=Q),Q.getGripSpace()},this.getHand=function(Y){let Q=x[Y];return Q===void 0&&(Q=new gr,x[Y]=Q),Q.getHandSpace()};function N(Y){const Q=E.indexOf(Y.inputSource);if(Q===-1)return;const ge=x[Q];ge!==void 0&&(ge.update(Y.inputSource,Y.frame,l||a),ge.dispatchEvent({type:Y.type,data:Y.inputSource}))}function P(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",P),s.removeEventListener("inputsourceschange",B);for(let Y=0;Y<x.length;Y++){const Q=E[Y];Q!==null&&(E[Y]=null,x[Y].disconnect(Q))}y=null,F=null,v.reset(),e.setRenderTarget(f),m=null,u=null,p=null,s=null,M=null,Xe.stop(),n.isPresenting=!1,e.setPixelRatio(w),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:m},this.getBinding=function(){return p},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",P),s.addEventListener("inputsourceschange",B),d.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(C),s.renderState.layers===void 0){const Q={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,t,Q),s.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),M=new qn(m.framebufferWidth,m.framebufferHeight,{format:$t,type:fn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil})}else{let Q=null,ge=null,ue=null;d.depth&&(ue=d.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Q=d.stencil?yi:gi,ge=d.stencil?Si:Xn);const Le={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:r};p=new XRWebGLBinding(s,t),u=p.createProjectionLayer(Le),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),M=new qn(u.textureWidth,u.textureHeight,{format:$t,type:fn,depthTexture:new xc(u.textureWidth,u.textureHeight,ge,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Xe.setContext(s),Xe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function B(Y){for(let Q=0;Q<Y.removed.length;Q++){const ge=Y.removed[Q],ue=E.indexOf(ge);ue>=0&&(E[ue]=null,x[ue].disconnect(ge))}for(let Q=0;Q<Y.added.length;Q++){const ge=Y.added[Q];let ue=E.indexOf(ge);if(ue===-1){for(let Ee=0;Ee<x.length;Ee++)if(Ee>=E.length){E.push(ge),ue=Ee;break}else if(E[Ee]===null){E[Ee]=ge,ue=Ee;break}if(ue===-1)break}const Le=x[ue];Le&&Le.connect(ge)}}const O=new z,$=new z;function G(Y,Q,ge){O.setFromMatrixPosition(Q.matrixWorld),$.setFromMatrixPosition(ge.matrixWorld);const ue=O.distanceTo($),Le=Q.projectionMatrix.elements,Ee=ge.projectionMatrix.elements,ze=Le[14]/(Le[10]-1),Je=Le[14]/(Le[10]+1),ke=(Le[9]+1)/Le[5],L=(Le[9]-1)/Le[5],Pt=(Le[8]-1)/Le[0],Oe=(Ee[8]+1)/Ee[0],Ve=ze*Pt,Te=ze*Oe,nt=ue/(-Pt+Oe),Re=nt*-Pt;if(Q.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Re),Y.translateZ(nt),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert(),Le[10]===-1)Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{const A=ze+nt,S=Je+nt,H=Ve-Re,Z=Te+(ue-Re),J=ke*Je/S*A,K=L*Je/S*A;Y.projectionMatrix.makePerspective(H,Z,J,K,A,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}}function ne(Y,Q){Q===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(Q.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let Q=Y.near,ge=Y.far;v.texture!==null&&(v.depthNear>0&&(Q=v.depthNear),v.depthFar>0&&(ge=v.depthFar)),_.near=R.near=T.near=Q,_.far=R.far=T.far=ge,(y!==_.near||F!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,F=_.far);const ue=Y.parent,Le=_.cameras;ne(_,ue);for(let Ee=0;Ee<Le.length;Ee++)ne(Le[Ee],ue);Le.length===2?G(_,T,R):_.projectionMatrix.copy(T.projectionMatrix),re(Y,_,ue)};function re(Y,Q,ge){ge===null?Y.matrix.copy(Q.matrixWorld):(Y.matrix.copy(ge.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(Q.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(Q.projectionMatrix),Y.projectionMatrixInverse.copy(Q.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=la*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&m===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let de=null;function Ne(Y,Q){if(h=Q.getViewerPose(l||a),g=Q,h!==null){const ge=h.views;m!==null&&(e.setRenderTargetFramebuffer(M,m.framebuffer),e.setRenderTarget(M));let ue=!1;ge.length!==_.cameras.length&&(_.cameras.length=0,ue=!0);for(let Ee=0;Ee<ge.length;Ee++){const ze=ge[Ee];let Je=null;if(m!==null)Je=m.getViewport(ze);else{const L=p.getViewSubImage(u,ze);Je=L.viewport,Ee===0&&(e.setRenderTargetTextures(M,L.colorTexture,u.ignoreDepthValues?void 0:L.depthStencilTexture),e.setRenderTarget(M))}let ke=k[Ee];ke===void 0&&(ke=new Bt,ke.layers.enable(Ee),ke.viewport=new ot,k[Ee]=ke),ke.matrix.fromArray(ze.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(ze.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(Je.x,Je.y,Je.width,Je.height),Ee===0&&(_.matrix.copy(ke.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ue===!0&&_.cameras.push(ke)}const Le=s.enabledFeatures;if(Le&&Le.includes("depth-sensing")){const Ee=p.getDepthInformation(ge[0]);Ee&&Ee.isValid&&Ee.texture&&v.init(e,Ee,s.renderState)}}for(let ge=0;ge<x.length;ge++){const ue=E[ge],Le=x[ge];ue!==null&&Le!==void 0&&Le.update(ue,Q,l||a)}de&&de(Y,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),g=null}const Xe=new _c;Xe.setAnimationLoop(Ne),this.setAnimationLoop=function(Y){de=Y},this.dispose=function(){}}}const Fn=new Yt,Gp=new tt;function Wp(i,e){function t(d,f){d.matrixAutoUpdate===!0&&d.updateMatrix(),f.value.copy(d.matrix)}function n(d,f){f.color.getRGB(d.fogColor.value,pc(i)),f.isFog?(d.fogNear.value=f.near,d.fogFar.value=f.far):f.isFogExp2&&(d.fogDensity.value=f.density)}function s(d,f,M,x,E){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(d,f):f.isMeshToonMaterial?(r(d,f),p(d,f)):f.isMeshPhongMaterial?(r(d,f),h(d,f)):f.isMeshStandardMaterial?(r(d,f),u(d,f),f.isMeshPhysicalMaterial&&m(d,f,E)):f.isMeshMatcapMaterial?(r(d,f),g(d,f)):f.isMeshDepthMaterial?r(d,f):f.isMeshDistanceMaterial?(r(d,f),v(d,f)):f.isMeshNormalMaterial?r(d,f):f.isLineBasicMaterial?(a(d,f),f.isLineDashedMaterial&&o(d,f)):f.isPointsMaterial?c(d,f,M,x):f.isSpriteMaterial?l(d,f):f.isShadowMaterial?(d.color.value.copy(f.color),d.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(d,f){d.opacity.value=f.opacity,f.color&&d.diffuse.value.copy(f.color),f.emissive&&d.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.bumpMap&&(d.bumpMap.value=f.bumpMap,t(f.bumpMap,d.bumpMapTransform),d.bumpScale.value=f.bumpScale,f.side===Ct&&(d.bumpScale.value*=-1)),f.normalMap&&(d.normalMap.value=f.normalMap,t(f.normalMap,d.normalMapTransform),d.normalScale.value.copy(f.normalScale),f.side===Ct&&d.normalScale.value.negate()),f.displacementMap&&(d.displacementMap.value=f.displacementMap,t(f.displacementMap,d.displacementMapTransform),d.displacementScale.value=f.displacementScale,d.displacementBias.value=f.displacementBias),f.emissiveMap&&(d.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,d.emissiveMapTransform)),f.specularMap&&(d.specularMap.value=f.specularMap,t(f.specularMap,d.specularMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest);const M=e.get(f),x=M.envMap,E=M.envMapRotation;x&&(d.envMap.value=x,Fn.copy(E),Fn.x*=-1,Fn.y*=-1,Fn.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Fn.y*=-1,Fn.z*=-1),d.envMapRotation.value.setFromMatrix4(Gp.makeRotationFromEuler(Fn)),d.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=f.reflectivity,d.ior.value=f.ior,d.refractionRatio.value=f.refractionRatio),f.lightMap&&(d.lightMap.value=f.lightMap,d.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,d.lightMapTransform)),f.aoMap&&(d.aoMap.value=f.aoMap,d.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,d.aoMapTransform))}function a(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform))}function o(d,f){d.dashSize.value=f.dashSize,d.totalSize.value=f.dashSize+f.gapSize,d.scale.value=f.scale}function c(d,f,M,x){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.size.value=f.size*M,d.scale.value=x*.5,f.map&&(d.map.value=f.map,t(f.map,d.uvTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function l(d,f){d.diffuse.value.copy(f.color),d.opacity.value=f.opacity,d.rotation.value=f.rotation,f.map&&(d.map.value=f.map,t(f.map,d.mapTransform)),f.alphaMap&&(d.alphaMap.value=f.alphaMap,t(f.alphaMap,d.alphaMapTransform)),f.alphaTest>0&&(d.alphaTest.value=f.alphaTest)}function h(d,f){d.specular.value.copy(f.specular),d.shininess.value=Math.max(f.shininess,1e-4)}function p(d,f){f.gradientMap&&(d.gradientMap.value=f.gradientMap)}function u(d,f){d.metalness.value=f.metalness,f.metalnessMap&&(d.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,d.metalnessMapTransform)),d.roughness.value=f.roughness,f.roughnessMap&&(d.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,d.roughnessMapTransform)),f.envMap&&(d.envMapIntensity.value=f.envMapIntensity)}function m(d,f,M){d.ior.value=f.ior,f.sheen>0&&(d.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),d.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(d.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,d.sheenColorMapTransform)),f.sheenRoughnessMap&&(d.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,d.sheenRoughnessMapTransform))),f.clearcoat>0&&(d.clearcoat.value=f.clearcoat,d.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(d.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,d.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(d.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Ct&&d.clearcoatNormalScale.value.negate())),f.dispersion>0&&(d.dispersion.value=f.dispersion),f.iridescence>0&&(d.iridescence.value=f.iridescence,d.iridescenceIOR.value=f.iridescenceIOR,d.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(d.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,d.iridescenceMapTransform)),f.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),f.transmission>0&&(d.transmission.value=f.transmission,d.transmissionSamplerMap.value=M.texture,d.transmissionSamplerSize.value.set(M.width,M.height),f.transmissionMap&&(d.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,d.transmissionMapTransform)),d.thickness.value=f.thickness,f.thicknessMap&&(d.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=f.attenuationDistance,d.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(d.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(d.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=f.specularIntensity,d.specularColor.value.copy(f.specularColor),f.specularColorMap&&(d.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,d.specularColorMapTransform)),f.specularIntensityMap&&(d.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,f){f.matcap&&(d.matcap.value=f.matcap)}function v(d,f){const M=e.get(f).light;d.referencePosition.value.setFromMatrixPosition(M.matrixWorld),d.nearDistance.value=M.shadow.camera.near,d.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Xp(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(M,x){const E=x.program;n.uniformBlockBinding(M,E)}function l(M,x){let E=s[M.id];E===void 0&&(g(M),E=h(M),s[M.id]=E,M.addEventListener("dispose",d));const C=x.program;n.updateUBOMapping(M,C);const w=e.render.frame;r[M.id]!==w&&(u(M),r[M.id]=w)}function h(M){const x=p();M.__bindingPointIndex=x;const E=i.createBuffer(),C=M.__size,w=M.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,C,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,E),E}function p(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const x=s[M.id],E=M.uniforms,C=M.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let w=0,T=E.length;w<T;w++){const R=Array.isArray(E[w])?E[w]:[E[w]];for(let k=0,_=R.length;k<_;k++){const y=R[k];if(m(y,w,k,C)===!0){const F=y.__offset,N=Array.isArray(y.value)?y.value:[y.value];let P=0;for(let B=0;B<N.length;B++){const O=N[B],$=v(O);typeof O=="number"||typeof O=="boolean"?(y.__data[0]=O,i.bufferSubData(i.UNIFORM_BUFFER,F+P,y.__data)):O.isMatrix3?(y.__data[0]=O.elements[0],y.__data[1]=O.elements[1],y.__data[2]=O.elements[2],y.__data[3]=0,y.__data[4]=O.elements[3],y.__data[5]=O.elements[4],y.__data[6]=O.elements[5],y.__data[7]=0,y.__data[8]=O.elements[6],y.__data[9]=O.elements[7],y.__data[10]=O.elements[8],y.__data[11]=0):(O.toArray(y.__data,P),P+=$.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,y.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(M,x,E,C){const w=M.value,T=x+"_"+E;if(C[T]===void 0)return typeof w=="number"||typeof w=="boolean"?C[T]=w:C[T]=w.clone(),!0;{const R=C[T];if(typeof w=="number"||typeof w=="boolean"){if(R!==w)return C[T]=w,!0}else if(R.equals(w)===!1)return R.copy(w),!0}return!1}function g(M){const x=M.uniforms;let E=0;const C=16;for(let T=0,R=x.length;T<R;T++){const k=Array.isArray(x[T])?x[T]:[x[T]];for(let _=0,y=k.length;_<y;_++){const F=k[_],N=Array.isArray(F.value)?F.value:[F.value];for(let P=0,B=N.length;P<B;P++){const O=N[P],$=v(O),G=E%C,ne=G%$.boundary,re=G+ne;E+=ne,re!==0&&C-re<$.storage&&(E+=C-re),F.__data=new Float32Array($.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=E,E+=$.storage}}}const w=E%C;return w>0&&(E+=C-w),M.__size=E,M.__cache={},this}function v(M){const x={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(x.boundary=4,x.storage=4):M.isVector2?(x.boundary=8,x.storage=8):M.isVector3||M.isColor?(x.boundary=16,x.storage=12):M.isVector4?(x.boundary=16,x.storage=16):M.isMatrix3?(x.boundary=48,x.storage=48):M.isMatrix4?(x.boundary=64,x.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),x}function d(M){const x=M.target;x.removeEventListener("dispose",d);const E=a.indexOf(x.__bindingPointIndex);a.splice(E,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function f(){for(const M in s)i.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:c,update:l,dispose:f}}class qp{constructor(e={}){const{canvas:t=Ll(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:p=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,d=null;const f=[],M=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=En,this.toneMappingExposure=1;const x=this;let E=!1,C=0,w=0,T=null,R=-1,k=null;const _=new ot,y=new ot;let F=null;const N=new Pe(0);let P=0,B=t.width,O=t.height,$=1,G=null,ne=null;const re=new ot(0,0,B,O),de=new ot(0,0,B,O);let Ne=!1;const Xe=new Ea;let Y=!1,Q=!1;const ge=new tt,ue=new tt,Le=new z,Ee=new ot,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Je=!1;function ke(){return T===null?$:1}let L=n;function Pt(b,I){return t.getContext(b,I)}try{const b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:p};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ua}`),t.addEventListener("webglcontextlost",j,!1),t.addEventListener("webglcontextrestored",ae,!1),t.addEventListener("webglcontextcreationerror",le,!1),L===null){const I="webgl2";if(L=Pt(I,b),L===null)throw Pt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw console.error("THREE.WebGLRenderer: "+b.message),b}let Oe,Ve,Te,nt,Re,A,S,H,Z,J,K,xe,se,fe,Ge,ee,pe,we,Ae,me,Be,De,et,D;function ce(){Oe=new Zu(L),Oe.init(),De=new Fp(L,Oe),Ve=new Wu(L,Oe,e,De),Te=new Ip(L),Ve.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),nt=new Qu(L),Re=new vp,A=new Np(L,Oe,Te,Re,Ve,De,nt),S=new qu(x),H=new Ku(x),Z=new ah(L),et=new Vu(L,Z),J=new ju(L,Z,nt,et),K=new tf(L,J,Z,nt),Ae=new ef(L,Ve,A),ee=new Xu(Re),xe=new _p(x,S,H,Oe,Ve,et,ee),se=new Wp(x,Re),fe=new Mp,Ge=new wp(Oe),we=new Hu(x,S,H,Te,K,u,c),pe=new Lp(x,K,Ve),D=new Xp(L,nt,Ve,Te),me=new Gu(L,Oe,nt),Be=new Ju(L,Oe,nt),nt.programs=xe.programs,x.capabilities=Ve,x.extensions=Oe,x.properties=Re,x.renderLists=fe,x.shadowMap=pe,x.state=Te,x.info=nt}ce();const q=new Vp(x,L);this.xr=q,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){const b=Oe.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Oe.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return $},this.setPixelRatio=function(b){b!==void 0&&($=b,this.setSize(B,O,!1))},this.getSize=function(b){return b.set(B,O)},this.setSize=function(b,I,V=!0){if(q.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=b,O=I,t.width=Math.floor(b*$),t.height=Math.floor(I*$),V===!0&&(t.style.width=b+"px",t.style.height=I+"px"),this.setViewport(0,0,b,I)},this.getDrawingBufferSize=function(b){return b.set(B*$,O*$).floor()},this.setDrawingBufferSize=function(b,I,V){B=b,O=I,$=V,t.width=Math.floor(b*V),t.height=Math.floor(I*V),this.setViewport(0,0,b,I)},this.getCurrentViewport=function(b){return b.copy(_)},this.getViewport=function(b){return b.copy(re)},this.setViewport=function(b,I,V,W){b.isVector4?re.set(b.x,b.y,b.z,b.w):re.set(b,I,V,W),Te.viewport(_.copy(re).multiplyScalar($).round())},this.getScissor=function(b){return b.copy(de)},this.setScissor=function(b,I,V,W){b.isVector4?de.set(b.x,b.y,b.z,b.w):de.set(b,I,V,W),Te.scissor(y.copy(de).multiplyScalar($).round())},this.getScissorTest=function(){return Ne},this.setScissorTest=function(b){Te.setScissorTest(Ne=b)},this.setOpaqueSort=function(b){G=b},this.setTransparentSort=function(b){ne=b},this.getClearColor=function(b){return b.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(b=!0,I=!0,V=!0){let W=0;if(b){let U=!1;if(T!==null){const te=T.texture.format;U=te===Ma||te===xa||te===va}if(U){const te=T.texture.type,oe=te===fn||te===Xn||te===ki||te===Si||te===ma||te===ga,_e=we.getClearColor(),ve=we.getClearAlpha(),ye=_e.r,be=_e.g,Me=_e.b;oe?(m[0]=ye,m[1]=be,m[2]=Me,m[3]=ve,L.clearBufferuiv(L.COLOR,0,m)):(g[0]=ye,g[1]=be,g[2]=Me,g[3]=ve,L.clearBufferiv(L.COLOR,0,g))}else W|=L.COLOR_BUFFER_BIT}I&&(W|=L.DEPTH_BUFFER_BIT,L.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),L.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",j,!1),t.removeEventListener("webglcontextrestored",ae,!1),t.removeEventListener("webglcontextcreationerror",le,!1),fe.dispose(),Ge.dispose(),Re.dispose(),S.dispose(),H.dispose(),K.dispose(),et.dispose(),D.dispose(),xe.dispose(),q.dispose(),q.removeEventListener("sessionstart",Pa),q.removeEventListener("sessionend",La),Pn.stop()};function j(b){b.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),E=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),E=!1;const b=nt.autoReset,I=pe.enabled,V=pe.autoUpdate,W=pe.needsUpdate,U=pe.type;ce(),nt.autoReset=b,pe.enabled=I,pe.autoUpdate=V,pe.needsUpdate=W,pe.type=U}function le(b){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function He(b){const I=b.target;I.removeEventListener("dispose",He),lt(I)}function lt(b){bt(b),Re.remove(b)}function bt(b){const I=Re.get(b).programs;I!==void 0&&(I.forEach(function(V){xe.releaseProgram(V)}),b.isShaderMaterial&&xe.releaseShaderCache(b))}this.renderBufferDirect=function(b,I,V,W,U,te){I===null&&(I=ze);const oe=U.isMesh&&U.matrixWorld.determinant()<0,_e=Oc(b,I,V,W,U);Te.setMaterial(W,oe);let ve=V.index,ye=1;if(W.wireframe===!0){if(ve=J.getWireframeAttribute(V),ve===void 0)return;ye=2}const be=V.drawRange,Me=V.attributes.position;let je=be.start*ye,it=(be.start+be.count)*ye;te!==null&&(je=Math.max(je,te.start*ye),it=Math.min(it,(te.start+te.count)*ye)),ve!==null?(je=Math.max(je,0),it=Math.min(it,ve.count)):Me!=null&&(je=Math.max(je,0),it=Math.min(it,Me.count));const at=it-je;if(at<0||at===1/0)return;et.setup(U,W,_e,V,ve);let Lt,Ye=me;if(ve!==null&&(Lt=Z.get(ve),Ye=Be,Ye.setIndex(Lt)),U.isMesh)W.wireframe===!0?(Te.setLineWidth(W.wireframeLinewidth*ke()),Ye.setMode(L.LINES)):Ye.setMode(L.TRIANGLES);else if(U.isLine){let Se=W.linewidth;Se===void 0&&(Se=1),Te.setLineWidth(Se*ke()),U.isLineSegments?Ye.setMode(L.LINES):U.isLineLoop?Ye.setMode(L.LINE_LOOP):Ye.setMode(L.LINE_STRIP)}else U.isPoints?Ye.setMode(L.POINTS):U.isSprite&&Ye.setMode(L.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)Ye.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Oe.get("WEBGL_multi_draw"))Ye.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Se=U._multiDrawStarts,mt=U._multiDrawCounts,Ke=U._multiDrawCount,kt=ve?Z.get(ve).bytesPerElement:1,jn=Re.get(W).currentProgram.getUniforms();for(let Dt=0;Dt<Ke;Dt++)jn.setValue(L,"_gl_DrawID",Dt),Ye.render(Se[Dt]/kt,mt[Dt])}else if(U.isInstancedMesh)Ye.renderInstances(je,at,U.count);else if(V.isInstancedBufferGeometry){const Se=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,mt=Math.min(V.instanceCount,Se);Ye.renderInstances(je,at,mt)}else Ye.render(je,at)};function qe(b,I,V){b.transparent===!0&&b.side===Jt&&b.forceSinglePass===!1?(b.side=Ct,b.needsUpdate=!0,ji(b,I,V),b.side=wn,b.needsUpdate=!0,ji(b,I,V),b.side=Jt):ji(b,I,V)}this.compile=function(b,I,V=null){V===null&&(V=b),d=Ge.get(V),d.init(I),M.push(d),V.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),b!==V&&b.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(d.pushLight(U),U.castShadow&&d.pushShadow(U))}),d.setupLights();const W=new Set;return b.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const te=U.material;if(te)if(Array.isArray(te))for(let oe=0;oe<te.length;oe++){const _e=te[oe];qe(_e,V,U),W.add(_e)}else qe(te,V,U),W.add(te)}),M.pop(),d=null,W},this.compileAsync=function(b,I,V=null){const W=this.compile(b,I,V);return new Promise(U=>{function te(){if(W.forEach(function(oe){Re.get(oe).currentProgram.isReady()&&W.delete(oe)}),W.size===0){U(b);return}setTimeout(te,10)}Oe.get("KHR_parallel_shader_compile")!==null?te():setTimeout(te,10)})};let Tt=null;function nn(b){Tt&&Tt(b)}function Pa(){Pn.stop()}function La(){Pn.start()}const Pn=new _c;Pn.setAnimationLoop(nn),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(b){Tt=b,q.setAnimationLoop(b),b===null?Pn.stop():Pn.start()},q.addEventListener("sessionstart",Pa),q.addEventListener("sessionend",La),this.render=function(b,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),q.enabled===!0&&q.isPresenting===!0&&(q.cameraAutoUpdate===!0&&q.updateCamera(I),I=q.getCamera()),b.isScene===!0&&b.onBeforeRender(x,b,I,T),d=Ge.get(b,M.length),d.init(I),M.push(d),ue.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Xe.setFromProjectionMatrix(ue),Q=this.localClippingEnabled,Y=ee.init(this.clippingPlanes,Q),v=fe.get(b,f.length),v.init(),f.push(v),q.enabled===!0&&q.isPresenting===!0){const te=x.xr.getDepthSensingMesh();te!==null&&Fs(te,I,-1/0,x.sortObjects)}Fs(b,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(G,ne),Je=q.enabled===!1||q.isPresenting===!1||q.hasDepthSensing()===!1,Je&&we.addToRenderList(v,b),this.info.render.frame++,Y===!0&&ee.beginShadows();const V=d.state.shadowsArray;pe.render(V,b,I),Y===!0&&ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=v.opaque,U=v.transmissive;if(d.setupLights(),I.isArrayCamera){const te=I.cameras;if(U.length>0)for(let oe=0,_e=te.length;oe<_e;oe++){const ve=te[oe];Ia(W,U,b,ve)}Je&&we.render(b);for(let oe=0,_e=te.length;oe<_e;oe++){const ve=te[oe];Da(v,b,ve,ve.viewport)}}else U.length>0&&Ia(W,U,b,I),Je&&we.render(b),Da(v,b,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),b.isScene===!0&&b.onAfterRender(x,b,I),et.resetDefaultState(),R=-1,k=null,M.pop(),M.length>0?(d=M[M.length-1],Y===!0&&ee.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function Fs(b,I,V,W){if(b.visible===!1)return;if(b.layers.test(I.layers)){if(b.isGroup)V=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(I);else if(b.isLight)d.pushLight(b),b.castShadow&&d.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Xe.intersectsSprite(b)){W&&Ee.setFromMatrixPosition(b.matrixWorld).applyMatrix4(ue);const oe=K.update(b),_e=b.material;_e.visible&&v.push(b,oe,_e,V,Ee.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Xe.intersectsObject(b))){const oe=K.update(b),_e=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ee.copy(b.boundingSphere.center)):(oe.boundingSphere===null&&oe.computeBoundingSphere(),Ee.copy(oe.boundingSphere.center)),Ee.applyMatrix4(b.matrixWorld).applyMatrix4(ue)),Array.isArray(_e)){const ve=oe.groups;for(let ye=0,be=ve.length;ye<be;ye++){const Me=ve[ye],je=_e[Me.materialIndex];je&&je.visible&&v.push(b,oe,je,V,Ee.z,Me)}}else _e.visible&&v.push(b,oe,_e,V,Ee.z,null)}}const te=b.children;for(let oe=0,_e=te.length;oe<_e;oe++)Fs(te[oe],I,V,W)}function Da(b,I,V,W){const U=b.opaque,te=b.transmissive,oe=b.transparent;d.setupLightsView(V),Y===!0&&ee.setGlobalState(x.clippingPlanes,V),W&&Te.viewport(_.copy(W)),U.length>0&&Zi(U,I,V),te.length>0&&Zi(te,I,V),oe.length>0&&Zi(oe,I,V),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Ia(b,I,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[W.id]===void 0&&(d.state.transmissionRenderTarget[W.id]=new qn(1,1,{generateMipmaps:!0,type:Oe.has("EXT_color_buffer_half_float")||Oe.has("EXT_color_buffer_float")?Gi:fn,minFilter:Vn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ze.workingColorSpace}));const te=d.state.transmissionRenderTarget[W.id],oe=W.viewport||_;te.setSize(oe.z,oe.w);const _e=x.getRenderTarget();x.setRenderTarget(te),x.getClearColor(N),P=x.getClearAlpha(),P<1&&x.setClearColor(16777215,.5),x.clear(),Je&&we.render(V);const ve=x.toneMapping;x.toneMapping=En;const ye=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),d.setupLightsView(W),Y===!0&&ee.setGlobalState(x.clippingPlanes,W),Zi(b,V,W),A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te),Oe.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let Me=0,je=I.length;Me<je;Me++){const it=I[Me],at=it.object,Lt=it.geometry,Ye=it.material,Se=it.group;if(Ye.side===Jt&&at.layers.test(W.layers)){const mt=Ye.side;Ye.side=Ct,Ye.needsUpdate=!0,Ua(at,V,W,Lt,Ye,Se),Ye.side=mt,Ye.needsUpdate=!0,be=!0}}be===!0&&(A.updateMultisampleRenderTarget(te),A.updateRenderTargetMipmap(te))}x.setRenderTarget(_e),x.setClearColor(N,P),ye!==void 0&&(W.viewport=ye),x.toneMapping=ve}function Zi(b,I,V){const W=I.isScene===!0?I.overrideMaterial:null;for(let U=0,te=b.length;U<te;U++){const oe=b[U],_e=oe.object,ve=oe.geometry,ye=W===null?oe.material:W,be=oe.group;_e.layers.test(V.layers)&&Ua(_e,I,V,ve,ye,be)}}function Ua(b,I,V,W,U,te){b.onBeforeRender(x,I,V,W,U,te),b.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),U.onBeforeRender(x,I,V,W,b,te),U.transparent===!0&&U.side===Jt&&U.forceSinglePass===!1?(U.side=Ct,U.needsUpdate=!0,x.renderBufferDirect(V,I,W,U,b,te),U.side=wn,U.needsUpdate=!0,x.renderBufferDirect(V,I,W,U,b,te),U.side=Jt):x.renderBufferDirect(V,I,W,U,b,te),b.onAfterRender(x,I,V,W,U,te)}function ji(b,I,V){I.isScene!==!0&&(I=ze);const W=Re.get(b),U=d.state.lights,te=d.state.shadowsArray,oe=U.state.version,_e=xe.getParameters(b,U.state,te,I,V),ve=xe.getProgramCacheKey(_e);let ye=W.programs;W.environment=b.isMeshStandardMaterial?I.environment:null,W.fog=I.fog,W.envMap=(b.isMeshStandardMaterial?H:S).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?I.environmentRotation:b.envMapRotation,ye===void 0&&(b.addEventListener("dispose",He),ye=new Map,W.programs=ye);let be=ye.get(ve);if(be!==void 0){if(W.currentProgram===be&&W.lightsStateVersion===oe)return Fa(b,_e),be}else _e.uniforms=xe.getUniforms(b),b.onBeforeCompile(_e,x),be=xe.acquireProgram(_e,ve),ye.set(ve,be),W.uniforms=_e.uniforms;const Me=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Me.clippingPlanes=ee.uniform),Fa(b,_e),W.needsLights=zc(b),W.lightsStateVersion=oe,W.needsLights&&(Me.ambientLightColor.value=U.state.ambient,Me.lightProbe.value=U.state.probe,Me.directionalLights.value=U.state.directional,Me.directionalLightShadows.value=U.state.directionalShadow,Me.spotLights.value=U.state.spot,Me.spotLightShadows.value=U.state.spotShadow,Me.rectAreaLights.value=U.state.rectArea,Me.ltc_1.value=U.state.rectAreaLTC1,Me.ltc_2.value=U.state.rectAreaLTC2,Me.pointLights.value=U.state.point,Me.pointLightShadows.value=U.state.pointShadow,Me.hemisphereLights.value=U.state.hemi,Me.directionalShadowMap.value=U.state.directionalShadowMap,Me.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Me.spotShadowMap.value=U.state.spotShadowMap,Me.spotLightMatrix.value=U.state.spotLightMatrix,Me.spotLightMap.value=U.state.spotLightMap,Me.pointShadowMap.value=U.state.pointShadowMap,Me.pointShadowMatrix.value=U.state.pointShadowMatrix),W.currentProgram=be,W.uniformsList=null,be}function Na(b){if(b.uniformsList===null){const I=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(I.seq,b.uniforms)}return b.uniformsList}function Fa(b,I){const V=Re.get(b);V.outputColorSpace=I.outputColorSpace,V.batching=I.batching,V.batchingColor=I.batchingColor,V.instancing=I.instancing,V.instancingColor=I.instancingColor,V.instancingMorph=I.instancingMorph,V.skinning=I.skinning,V.morphTargets=I.morphTargets,V.morphNormals=I.morphNormals,V.morphColors=I.morphColors,V.morphTargetsCount=I.morphTargetsCount,V.numClippingPlanes=I.numClippingPlanes,V.numIntersection=I.numClipIntersection,V.vertexAlphas=I.vertexAlphas,V.vertexTangents=I.vertexTangents,V.toneMapping=I.toneMapping}function Oc(b,I,V,W,U){I.isScene!==!0&&(I=ze),A.resetTextureUnits();const te=I.fog,oe=W.isMeshStandardMaterial?I.environment:null,_e=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:Cn,ve=(W.isMeshStandardMaterial?H:S).get(W.envMap||oe),ye=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Me=!!V.morphAttributes.position,je=!!V.morphAttributes.normal,it=!!V.morphAttributes.color;let at=En;W.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(at=x.toneMapping);const Lt=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,Ye=Lt!==void 0?Lt.length:0,Se=Re.get(W),mt=d.state.lights;if(Y===!0&&(Q===!0||b!==k)){const Ft=b===k&&W.id===R;ee.setState(W,b,Ft)}let Ke=!1;W.version===Se.__version?(Se.needsLights&&Se.lightsStateVersion!==mt.state.version||Se.outputColorSpace!==_e||U.isBatchedMesh&&Se.batching===!1||!U.isBatchedMesh&&Se.batching===!0||U.isBatchedMesh&&Se.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Se.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Se.instancing===!1||!U.isInstancedMesh&&Se.instancing===!0||U.isSkinnedMesh&&Se.skinning===!1||!U.isSkinnedMesh&&Se.skinning===!0||U.isInstancedMesh&&Se.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Se.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Se.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Se.instancingMorph===!1&&U.morphTexture!==null||Se.envMap!==ve||W.fog===!0&&Se.fog!==te||Se.numClippingPlanes!==void 0&&(Se.numClippingPlanes!==ee.numPlanes||Se.numIntersection!==ee.numIntersection)||Se.vertexAlphas!==ye||Se.vertexTangents!==be||Se.morphTargets!==Me||Se.morphNormals!==je||Se.morphColors!==it||Se.toneMapping!==at||Se.morphTargetsCount!==Ye)&&(Ke=!0):(Ke=!0,Se.__version=W.version);let kt=Se.currentProgram;Ke===!0&&(kt=ji(W,I,U));let jn=!1,Dt=!1,Os=!1;const ct=kt.getUniforms(),pn=Se.uniforms;if(Te.useProgram(kt.program)&&(jn=!0,Dt=!0,Os=!0),W.id!==R&&(R=W.id,Dt=!0),jn||k!==b){Ve.reverseDepthBuffer?(ge.copy(b.projectionMatrix),Il(ge),Ul(ge),ct.setValue(L,"projectionMatrix",ge)):ct.setValue(L,"projectionMatrix",b.projectionMatrix),ct.setValue(L,"viewMatrix",b.matrixWorldInverse);const Ft=ct.map.cameraPosition;Ft!==void 0&&Ft.setValue(L,Le.setFromMatrixPosition(b.matrixWorld)),Ve.logarithmicDepthBuffer&&ct.setValue(L,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ct.setValue(L,"isOrthographic",b.isOrthographicCamera===!0),k!==b&&(k=b,Dt=!0,Os=!0)}if(U.isSkinnedMesh){ct.setOptional(L,U,"bindMatrix"),ct.setOptional(L,U,"bindMatrixInverse");const Ft=U.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),ct.setValue(L,"boneTexture",Ft.boneTexture,A))}U.isBatchedMesh&&(ct.setOptional(L,U,"batchingTexture"),ct.setValue(L,"batchingTexture",U._matricesTexture,A),ct.setOptional(L,U,"batchingIdTexture"),ct.setValue(L,"batchingIdTexture",U._indirectTexture,A),ct.setOptional(L,U,"batchingColorTexture"),U._colorsTexture!==null&&ct.setValue(L,"batchingColorTexture",U._colorsTexture,A));const Bs=V.morphAttributes;if((Bs.position!==void 0||Bs.normal!==void 0||Bs.color!==void 0)&&Ae.update(U,V,kt),(Dt||Se.receiveShadow!==U.receiveShadow)&&(Se.receiveShadow=U.receiveShadow,ct.setValue(L,"receiveShadow",U.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(pn.envMap.value=ve,pn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&I.environment!==null&&(pn.envMapIntensity.value=I.environmentIntensity),Dt&&(ct.setValue(L,"toneMappingExposure",x.toneMappingExposure),Se.needsLights&&Bc(pn,Os),te&&W.fog===!0&&se.refreshFogUniforms(pn,te),se.refreshMaterialUniforms(pn,W,$,O,d.state.transmissionRenderTarget[b.id]),As.upload(L,Na(Se),pn,A)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(As.upload(L,Na(Se),pn,A),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ct.setValue(L,"center",U.center),ct.setValue(L,"modelViewMatrix",U.modelViewMatrix),ct.setValue(L,"normalMatrix",U.normalMatrix),ct.setValue(L,"modelMatrix",U.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ft=W.uniformsGroups;for(let zs=0,kc=Ft.length;zs<kc;zs++){const Oa=Ft[zs];D.update(Oa,kt),D.bind(Oa,kt)}}return kt}function Bc(b,I){b.ambientLightColor.needsUpdate=I,b.lightProbe.needsUpdate=I,b.directionalLights.needsUpdate=I,b.directionalLightShadows.needsUpdate=I,b.pointLights.needsUpdate=I,b.pointLightShadows.needsUpdate=I,b.spotLights.needsUpdate=I,b.spotLightShadows.needsUpdate=I,b.rectAreaLights.needsUpdate=I,b.hemisphereLights.needsUpdate=I}function zc(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(b,I,V){Re.get(b.texture).__webglTexture=I,Re.get(b.depthTexture).__webglTexture=V;const W=Re.get(b);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||Oe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(b,I){const V=Re.get(b);V.__webglFramebuffer=I,V.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(b,I=0,V=0){T=b,C=I,w=V;let W=!0,U=null,te=!1,oe=!1;if(b){const ve=Re.get(b);if(ve.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(L.FRAMEBUFFER,null),W=!1;else if(ve.__webglFramebuffer===void 0)A.setupRenderTarget(b);else if(ve.__hasExternalTextures)A.rebindTextures(b,Re.get(b.texture).__webglTexture,Re.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Me=b.depthTexture;if(ve.__boundDepthTexture!==Me){if(Me!==null&&Re.has(Me)&&(b.width!==Me.image.width||b.height!==Me.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(b)}}const ye=b.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(oe=!0);const be=Re.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(be[I])?U=be[I][V]:U=be[I],te=!0):b.samples>0&&A.useMultisampledRTT(b)===!1?U=Re.get(b).__webglMultisampledFramebuffer:Array.isArray(be)?U=be[V]:U=be,_.copy(b.viewport),y.copy(b.scissor),F=b.scissorTest}else _.copy(re).multiplyScalar($).floor(),y.copy(de).multiplyScalar($).floor(),F=Ne;if(Te.bindFramebuffer(L.FRAMEBUFFER,U)&&W&&Te.drawBuffers(b,U),Te.viewport(_),Te.scissor(y),Te.setScissorTest(F),te){const ve=Re.get(b.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,ve.__webglTexture,V)}else if(oe){const ve=Re.get(b.texture),ye=I||0;L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,ve.__webglTexture,V||0,ye)}R=-1},this.readRenderTargetPixels=function(b,I,V,W,U,te,oe){if(!(b&&b.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let _e=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&oe!==void 0&&(_e=_e[oe]),_e){Te.bindFramebuffer(L.FRAMEBUFFER,_e);try{const ve=b.texture,ye=ve.format,be=ve.type;if(!Ve.textureFormatReadable(ye)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=b.width-W&&V>=0&&V<=b.height-U&&L.readPixels(I,V,W,U,De.convert(ye),De.convert(be),te)}finally{const ve=T!==null?Re.get(T).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(b,I,V,W,U,te,oe){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let _e=Re.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&oe!==void 0&&(_e=_e[oe]),_e){const ve=b.texture,ye=ve.format,be=ve.type;if(!Ve.textureFormatReadable(ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=b.width-W&&V>=0&&V<=b.height-U){Te.bindFramebuffer(L.FRAMEBUFFER,_e);const Me=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.bufferData(L.PIXEL_PACK_BUFFER,te.byteLength,L.STREAM_READ),L.readPixels(I,V,W,U,De.convert(ye),De.convert(be),0);const je=T!==null?Re.get(T).__webglFramebuffer:null;Te.bindFramebuffer(L.FRAMEBUFFER,je);const it=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await Dl(L,it,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Me),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,te),L.deleteBuffer(Me),L.deleteSync(it),te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(b,I=null,V=0){b.isTexture!==!0&&(ws("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,b=arguments[1]);const W=Math.pow(2,-V),U=Math.floor(b.image.width*W),te=Math.floor(b.image.height*W),oe=I!==null?I.x:0,_e=I!==null?I.y:0;A.setTexture2D(b,0),L.copyTexSubImage2D(L.TEXTURE_2D,V,0,0,oe,_e,U,te),Te.unbindTexture()},this.copyTextureToTexture=function(b,I,V=null,W=null,U=0){b.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,b=arguments[1],I=arguments[2],U=arguments[3]||0,V=null);let te,oe,_e,ve,ye,be;V!==null?(te=V.max.x-V.min.x,oe=V.max.y-V.min.y,_e=V.min.x,ve=V.min.y):(te=b.image.width,oe=b.image.height,_e=0,ve=0),W!==null?(ye=W.x,be=W.y):(ye=0,be=0);const Me=De.convert(I.format),je=De.convert(I.type);A.setTexture2D(I,0),L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const it=L.getParameter(L.UNPACK_ROW_LENGTH),at=L.getParameter(L.UNPACK_IMAGE_HEIGHT),Lt=L.getParameter(L.UNPACK_SKIP_PIXELS),Ye=L.getParameter(L.UNPACK_SKIP_ROWS),Se=L.getParameter(L.UNPACK_SKIP_IMAGES),mt=b.isCompressedTexture?b.mipmaps[U]:b.image;L.pixelStorei(L.UNPACK_ROW_LENGTH,mt.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,mt.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),L.pixelStorei(L.UNPACK_SKIP_ROWS,ve),b.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,U,ye,be,te,oe,Me,je,mt.data):b.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,U,ye,be,mt.width,mt.height,Me,mt.data):L.texSubImage2D(L.TEXTURE_2D,U,ye,be,te,oe,Me,je,mt),L.pixelStorei(L.UNPACK_ROW_LENGTH,it),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at),L.pixelStorei(L.UNPACK_SKIP_PIXELS,Lt),L.pixelStorei(L.UNPACK_SKIP_ROWS,Ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Se),U===0&&I.generateMipmaps&&L.generateMipmap(L.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(b,I,V=null,W=null,U=0){b.isTexture!==!0&&(ws("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,b=arguments[2],I=arguments[3],U=arguments[4]||0);let te,oe,_e,ve,ye,be,Me,je,it;const at=b.isCompressedTexture?b.mipmaps[U]:b.image;V!==null?(te=V.max.x-V.min.x,oe=V.max.y-V.min.y,_e=V.max.z-V.min.z,ve=V.min.x,ye=V.min.y,be=V.min.z):(te=at.width,oe=at.height,_e=at.depth,ve=0,ye=0,be=0),W!==null?(Me=W.x,je=W.y,it=W.z):(Me=0,je=0,it=0);const Lt=De.convert(I.format),Ye=De.convert(I.type);let Se;if(I.isData3DTexture)A.setTexture3D(I,0),Se=L.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Se=L.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}L.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),L.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),L.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);const mt=L.getParameter(L.UNPACK_ROW_LENGTH),Ke=L.getParameter(L.UNPACK_IMAGE_HEIGHT),kt=L.getParameter(L.UNPACK_SKIP_PIXELS),jn=L.getParameter(L.UNPACK_SKIP_ROWS),Dt=L.getParameter(L.UNPACK_SKIP_IMAGES);L.pixelStorei(L.UNPACK_ROW_LENGTH,at.width),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,at.height),L.pixelStorei(L.UNPACK_SKIP_PIXELS,ve),L.pixelStorei(L.UNPACK_SKIP_ROWS,ye),L.pixelStorei(L.UNPACK_SKIP_IMAGES,be),b.isDataTexture||b.isData3DTexture?L.texSubImage3D(Se,U,Me,je,it,te,oe,_e,Lt,Ye,at.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Se,U,Me,je,it,te,oe,_e,Lt,at.data):L.texSubImage3D(Se,U,Me,je,it,te,oe,_e,Lt,Ye,at),L.pixelStorei(L.UNPACK_ROW_LENGTH,mt),L.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ke),L.pixelStorei(L.UNPACK_SKIP_PIXELS,kt),L.pixelStorei(L.UNPACK_SKIP_ROWS,jn),L.pixelStorei(L.UNPACK_SKIP_IMAGES,Dt),U===0&&I.generateMipmaps&&L.generateMipmap(Se),Te.unbindTexture()},this.initRenderTarget=function(b){Re.get(b).__webglFramebuffer===void 0&&A.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?A.setTextureCube(b,0):b.isData3DTexture?A.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?A.setTexture2DArray(b,0):A.setTexture2D(b,0),Te.unbindTexture()},this.resetState=function(){C=0,w=0,T=null,Te.reset(),et.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===ya?"display-p3":"srgb",t.unpackColorSpace=Ze.workingColorSpace===Us?"display-p3":"srgb"}}class Ta{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Ta(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class $p extends gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yt,this.environmentIntensity=1,this.environmentRotation=new Yt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Yp extends Et{constructor(e=null,t=1,n=1,s,r,a,o,c,l=Rt,h=Rt,p,u){super(null,a,o,c,l,h,s,r,p,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Io extends Nt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const ui=new tt,Uo=new tt,xs=[],No=new Yn,Kp=new tt,Ni=new $e,Fi=new Xi;class Zp extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Io(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Kp)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Yn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),No.copy(e.boundingBox).applyMatrix4(ui),this.boundingBox.union(No)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,ui),Fi.copy(e.boundingSphere).applyMatrix4(ui),this.boundingSphere.union(Fi)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(Ni.geometry=this.geometry,Ni.material=this.material,Ni.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Fi.copy(this.boundingSphere),Fi.applyMatrix4(n),e.ray.intersectsSphere(Fi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ui),Uo.multiplyMatrices(n,ui),Ni.matrixWorld=Uo,Ni.raycast(e,xs);for(let a=0,o=xs.length;a<o;a++){const c=xs[a];c.instanceId=r,c.object=this,t.push(c)}xs.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Io(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yp(new Float32Array(s*this.count),s,this.count,_a,en));const r=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;r[c]=o,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Zn extends zt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};const l=this;s=Math.floor(s),r=Math.floor(r);const h=[],p=[],u=[],m=[];let g=0;const v=[],d=n/2;let f=0;M(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new St(p,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(m,2));function M(){const E=new z,C=new z;let w=0;const T=(t-e)/n;for(let R=0;R<=r;R++){const k=[],_=R/r,y=_*(t-e)+e;for(let F=0;F<=s;F++){const N=F/s,P=N*c+o,B=Math.sin(P),O=Math.cos(P);C.x=y*B,C.y=-_*n+d,C.z=y*O,p.push(C.x,C.y,C.z),E.set(B,T,O).normalize(),u.push(E.x,E.y,E.z),m.push(N,1-_),k.push(g++)}v.push(k)}for(let R=0;R<s;R++)for(let k=0;k<r;k++){const _=v[k][R],y=v[k+1][R],F=v[k+1][R+1],N=v[k][R+1];e>0&&(h.push(_,y,N),w+=3),t>0&&(h.push(y,F,N),w+=3)}l.addGroup(f,w,0),f+=w}function x(E){const C=g,w=new Fe,T=new z;let R=0;const k=E===!0?e:t,_=E===!0?1:-1;for(let F=1;F<=s;F++)p.push(0,d*_,0),u.push(0,_,0),m.push(.5,.5),g++;const y=g;for(let F=0;F<=s;F++){const P=F/s*c+o,B=Math.cos(P),O=Math.sin(P);T.x=k*O,T.y=d*_,T.z=k*B,p.push(T.x,T.y,T.z),u.push(0,_,0),w.x=B*.5+.5,w.y=O*.5*_+.5,m.push(w.x,w.y),g++}for(let F=0;F<s;F++){const N=C+F,P=y+F;E===!0?h.push(P,P+1,N):h.push(P+1,P,N),R+=3}l.addGroup(f,R,E===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class $i extends Zn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new $i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class wa extends zt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};const r=[],a=[];o(s),l(n),h(),this.setAttribute("position",new St(r,3)),this.setAttribute("normal",new St(r.slice(),3)),this.setAttribute("uv",new St(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(M){const x=new z,E=new z,C=new z;for(let w=0;w<t.length;w+=3)m(t[w+0],x),m(t[w+1],E),m(t[w+2],C),c(x,E,C,M)}function c(M,x,E,C){const w=C+1,T=[];for(let R=0;R<=w;R++){T[R]=[];const k=M.clone().lerp(E,R/w),_=x.clone().lerp(E,R/w),y=w-R;for(let F=0;F<=y;F++)F===0&&R===w?T[R][F]=k:T[R][F]=k.clone().lerp(_,F/y)}for(let R=0;R<w;R++)for(let k=0;k<2*(w-R)-1;k++){const _=Math.floor(k/2);k%2===0?(u(T[R][_+1]),u(T[R+1][_]),u(T[R][_])):(u(T[R][_+1]),u(T[R+1][_+1]),u(T[R+1][_]))}}function l(M){const x=new z;for(let E=0;E<r.length;E+=3)x.x=r[E+0],x.y=r[E+1],x.z=r[E+2],x.normalize().multiplyScalar(M),r[E+0]=x.x,r[E+1]=x.y,r[E+2]=x.z}function h(){const M=new z;for(let x=0;x<r.length;x+=3){M.x=r[x+0],M.y=r[x+1],M.z=r[x+2];const E=d(M)/2/Math.PI+.5,C=f(M)/Math.PI+.5;a.push(E,1-C)}g(),p()}function p(){for(let M=0;M<a.length;M+=6){const x=a[M+0],E=a[M+2],C=a[M+4],w=Math.max(x,E,C),T=Math.min(x,E,C);w>.9&&T<.1&&(x<.2&&(a[M+0]+=1),E<.2&&(a[M+2]+=1),C<.2&&(a[M+4]+=1))}}function u(M){r.push(M.x,M.y,M.z)}function m(M,x){const E=M*3;x.x=e[E+0],x.y=e[E+1],x.z=e[E+2]}function g(){const M=new z,x=new z,E=new z,C=new z,w=new Fe,T=new Fe,R=new Fe;for(let k=0,_=0;k<r.length;k+=9,_+=6){M.set(r[k+0],r[k+1],r[k+2]),x.set(r[k+3],r[k+4],r[k+5]),E.set(r[k+6],r[k+7],r[k+8]),w.set(a[_+0],a[_+1]),T.set(a[_+2],a[_+3]),R.set(a[_+4],a[_+5]),C.copy(M).add(x).add(E).divideScalar(3);const y=d(C);v(w,_+0,M,y),v(T,_+2,x,y),v(R,_+4,E,y)}}function v(M,x,E,C){C<0&&M.x===1&&(a[x]=M.x-1),E.x===0&&E.z===0&&(a[x]=C/2/Math.PI+.5)}function d(M){return Math.atan2(M.z,-M.x)}function f(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wa(e.vertices,e.indices,e.radius,e.details)}}class Aa extends wa{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Aa(e.radius,e.detail)}}class Ra extends wi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Kt extends wi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Sa,this.normalScale=new Fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yt,this.combine=fa,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bc extends gt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class jp extends bc{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const _r=new tt,Fo=new z,Oo=new z;class Jp{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Fe(512,512),this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ea,this._frameExtents=new Fe(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fo.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fo),Oo.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oo),t.updateMatrixWorld(),_r.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(_r),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(_r)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Qp extends Jp{constructor(){super(new vc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class em extends bc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(gt.DEFAULT_UP),this.updateMatrix(),this.target=new gt,this.shadow=new Qp}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ua}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ua);const Ce=(i,e,t)=>i<e?e:i>t?t:i,dt=(i,e,t)=>i+(e-i)*t,Hi=i=>{const e=Ce(i,0,1);return e*e*(3-2*e)},zi=Math.PI*2;function $n(...i){let e=2166136261;for(const t of i){let n=(t|0)^2654435769;n=Math.imul(n^n>>>16,2246822507),n=Math.imul(n^n>>>13,3266489909),n^=n>>>16,e=Math.imul(e^n,16777619),e^=e>>>15}return e>>>0}class Yi{constructor(e){X(this,"s");this.s=e>>>0||1}next(){this.s=this.s+1831565813>>>0;let e=this.s;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}range(e,t){return e+this.next()*(t-e)}int(e,t){return Math.floor(this.range(e,t+1))}pick(e){return e[Math.floor(this.next()*e.length)%e.length]}chance(e){return this.next()<e}}function tm(i,e,t){const n=Math.floor(i),s=Math.floor(e),r=i-n,a=e-s,o=Hi(r),c=Hi(a),l=(g,v)=>($n(g,v,t)&65535)/65535,h=l(n,s),p=l(n+1,s),u=l(n,s+1),m=l(n+1,s+1);return dt(dt(h,p,o),dt(u,m,o),c)}function bn(i,e,t,n=4,s=2.03,r=.5){let a=1,o=1,c=0,l=0;for(let h=0;h<n;h++)c+=a*tm(i*o,e*o,t+h*131),l+=a,a*=r,o*=s;return c/l}function Bo(i,e,t,n,s,r){return Tc(i,e,t,n,s,r)[0]}function Tc(i,e,t,n,s,r){const a=s-t,o=r-n,c=i-t,l=e-n,h=a*a+o*o;let p=h>1e-9?(c*a+l*o)/h:0;p=Ce(p,0,1);const u=t+a*p,m=n+o*p;return[Math.hypot(i-u,e-m),p]}function Rn(i,e,t,n){const s=t-i,r=n-e;return Math.sqrt(s*s+r*r)}function Zt(i){return Math.round(i).toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")+" ₽"}function nm(i){const e=Math.max(0,Math.ceil(i)),t=Math.floor(e/60),n=e%60;return`${t}:${n.toString().padStart(2,"0")}`}const da=.16;function Oi(i,e=da){return Math.abs(i)<e?0:Math.sign(i)*((Math.abs(i)-e)/(1-e))}class im{constructor(){X(this,"mode");X(this,"onModeChange",null);X(this,"onPause",null);X(this,"onInteract",null);X(this,"touch",{steer:0,gas:0,brake:0,hand:0,nitro:0});X(this,"keys",new Set);X(this,"look",{x:0,y:0});X(this,"gpIndex",null);X(this,"gpPrev",[]);X(this,"hasCoarsePointer");X(this,"lastInteract",0);X(this,"onKeyDown",e=>{const t=e.key;if(["w","a","s","d","W","A","S","D","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," ","n","N","e","E","Shift","c","C","r","R"].includes(t)&&(this.setMode("keyboard"),(t===" "||t.startsWith("Arrow"))&&e.preventDefault()),t==="Escape"||t==="p"||t==="P"){this.onPause?.();return}if(t==="e"||t==="E"){const s=performance.now();s-this.lastInteract>300&&(this.lastInteract=s,this.onInteract?.())}this.keys.add(t.length===1?t.toLowerCase():t)});X(this,"onKeyUp",e=>{const t=e.key;this.keys.delete(t.length===1?t.toLowerCase():t)});X(this,"gpSteer",0);X(this,"gpThrottle",0);X(this,"gpBrake",0);X(this,"gpHand",0);X(this,"gpNitro",0);X(this,"gpLookX",0);X(this,"gpLookY",0);X(this,"steer",0);X(this,"throttle",0);X(this,"brake",0);X(this,"handbrake",!1);X(this,"nitro",!1);this.hasCoarsePointer=typeof window<"u"&&(navigator.maxTouchPoints>0||window.matchMedia?.("(pointer: coarse)").matches===!0),this.mode=this.hasCoarsePointer?"touch":"keyboard",window.addEventListener("keydown",this.onKeyDown,{passive:!1}),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",()=>this.keys.clear()),window.addEventListener("gamepadconnected",e=>{this.gpIndex=e.gamepad.index}),window.addEventListener("gamepaddisconnected",e=>{this.gpIndex===e.gamepad.index&&(this.gpIndex=null)}),window.addEventListener("pointerdown",e=>{(e.pointerType==="touch"||e.pointerType==="pen")&&this.setMode("touch")},{passive:!0})}setMode(e){this.mode!==e&&(this.mode=e,this.onModeChange?.(e))}key(...e){return e.some(t=>this.keys.has(t))}pollGamepad(){if(typeof navigator>"u"||!navigator.getGamepads)return;const e=navigator.getGamepads();let t=null;for(const u of e)if(u&&(this.gpIndex===null&&(this.gpIndex=u.index),u.index===this.gpIndex)){t=u;break}if(!t)return;const n=u=>t.buttons[u]?.value??0,s=u=>!!t.buttons[u]?.pressed;if(s(0)&&!this.gpPrev[0]){const u=performance.now();u-this.lastInteract>300&&(this.lastInteract=u,this.onInteract?.())}s(9)&&!this.gpPrev[9]&&this.onPause?.();for(let u=0;u<17;u++)this.gpPrev[u]=s(u);const r=t.axes[0]??0,a=t.axes[1]??0,o=t.axes[2]??0,c=t.axes[3]??0,l=Math.max(n(7),(n(6)>.02,0),Oi(n(7))),h=n(6);(Math.abs(r)>da||Math.abs(a)>da||l>.08||h>.08||s(0)||s(14)||s(15)||s(12)||s(13))&&this.setMode("gamepad"),this.gpSteer=Oi(r),this.gpThrottle=Ce(Math.max(l,Oi(-a)),0,1),this.gpBrake=Ce(h,0,1),this.gpHand=s(2)||s(1)?1:0,this.gpNitro=s(3)?1:0,this.gpLookX=Oi(o),this.gpLookY=Oi(c)}update(){this.pollGamepad();let e=0;this.key("a","ArrowLeft")&&(e-=1),this.key("d","ArrowRight")&&(e+=1);const t=this.key("w","ArrowUp")?1:0,n=this.key("s","ArrowDown")?1:0;this.steer=Ce(this.touch.steer+e+this.gpSteer,-1,1),this.throttle=Ce(Math.max(this.touch.gas,t,this.gpThrottle),0,1),this.brake=Ce(Math.max(this.touch.brake,n,this.gpBrake),0,1),this.handbrake=Math.max(this.touch.hand,this.key(" ")?1:0,this.gpHand)>.5,this.nitro=Math.max(this.touch.nitro,this.key("n")?1:0,this.gpNitro)>.5,this.look.x=Ce(this.gpLookX,-1,1),this.look.y=Ce(this.gpLookY,-1,1)}get lookX(){return this.look.x}get lookY(){return this.look.y}}const Tn=20241024,Qe=220,sm=22,un=3,zo=un+1,We=1600,rm=Qe*(un-1.35),am=Qe*(un-.12),fi=9,vr=7.5,om=200,cm=330,lm=70,hm=130,Qt={grassA:5077562,grassB:6458434,grassDry:9083470,dirt:8021062,rock:7039851,road:3816770,sidewalk:9145227,sky:9422056},dm=["Кленовск","Березов","Сосновск","Ольхов","Заречье","Приисковый","Верхнеград","Нижнеград","Каменск","Липовск","Дубравск","Камышин"],um=["Малиновка","Петухово","Грибное","Тихая","Кузнецово","Зайцево","Бобровка","Ключи","Луговое","Рыбхоз","Сосенки","Овсянники","Медведево","Пеньки","Хворостино","Крутой Яр"],fm=["Хутор","Лесничество","Ферма","Пасека","Сторожка"],ko=new Map;function pm(i,e){return(bn(i*.31+11.7,e*.31-4.2,Tn^20907,3)-.5)*44}function Ki(i,e){const t=`${i},${e}`,n=ko.get(t);if(n!==void 0)return n;const s=new Yi($n(i,e,Tn^40723)),r=s.next(),a=i===0&&e===0;let o=null;a||r<.11?o="city":r<.38?o="village":r<.5&&(o="hamlet");let c=null;if(o){const l=i*We+We*.5+(a?0:s.range(-.26,.26)*We),h=e*We+We*.5+(a?0:s.range(-.26,.26)*We);let p,u;o==="city"?(p=s.range(om,cm),u=s.range(66,88)):o==="village"?(p=s.range(lm,hm),u=s.range(36,50)):(p=s.range(26,42),u=28);const m=o==="city"?dm:o==="village"?um:fm,g=m[$n(i,e,31793)%m.length],v=o==="city"?s.int(3,4):o==="village"?s.int(1,2):1,d=[],f=[];for(let M=-v;M<=v;M++)d.push(l+M*u);for(let M=-v;M<=v;M++)f.push(h+M*u);c={id:t,kind:o,name:g,x:l,z:h,radius:p,baseY:pm(i,e),gx:i,gz:e,streetsX:d,streetsZ:f,blockSize:u}}return ko.set(t,c),c}function Ca(i,e,t=30){const n=Math.floor(i/We),s=Math.floor(e/We);for(let r=-1;r<=1;r++)for(let a=-1;a<=1;a++){const o=Ki(n+a,s+r);if(o&&Math.hypot(i-o.x,e-o.z)<=o.radius+t)return o}return null}function mm(i,e){return Ca(i,e,20)}function wc(i,e,t=1){const n=Math.floor(i/We),s=Math.floor(e/We),r=[];for(let a=-t;a<=t;a++)for(let o=-t;o<=t;o++){const c=Ki(n+o,s+a);c&&r.push(c)}return r}function gm(i,e){const t=bn(i*.0016,e*.0016,Tn,4,2.07,.52),n=bn(i*.0065,e*.0065,Tn^24415,3,2.11,.5);return(t-.5)*96+(n-.5)*11}function Ho(i,e,t){return t?t.baseY:gm(i,e)}function Vo(i,e){const t=Math.floor(i/We),n=Math.floor(e/We);for(let s=-1;s<=1;s++)for(let r=-1;r<=1;r++){const a=Ki(t+r,n+s);if(a&&Math.hypot(i-a.x,e-a.z)<=a.radius+30)return a}return null}const Go=new Map;function ln(i,e,t,n,s,r,a){const o=a??Vo(i,e),c=a??Vo(t,n);return{ax:i,az:e,bx:t,bz:n,width:s,kind:r,ay:Ho(i,e,o),by:Ho(t,n,c),ownerId:a?.id}}function Vi(i,e){const t=`${i},${e}`,n=Go.get(t);if(n)return n;const s=[],r=i*We+We*.5,a=e*We+We*.5,o=new Yi($n(i,e,13073)),c=o.range(-80,80),l=o.range(-80,80),h=r+We*.5,p=a+c,u=r+l,m=a+We*.5;s.push(ln(r,a,h,p,fi,"highway")),s.push(ln(h,p,r+We,a,fi,"highway")),s.push(ln(r,a,u,m,fi,"highway")),s.push(ln(u,m,r,a+We,fi,"highway")),s.push(ln(r-We,a,r,a,fi,"highway")),s.push(ln(r,a-We,r,a,fi,"highway"));const g=Ki(i,e);if(g){const v=g.streetsX[0],d=g.streetsX[g.streetsX.length-1],f=g.streetsZ[0],M=g.streetsZ[g.streetsZ.length-1];for(const E of g.streetsX)s.push(ln(E,f-8,E,M+8,vr,"street",g));for(const E of g.streetsZ)s.push(ln(v-8,E,d+8,E,vr,"street",g));Math.hypot(g.x-r,g.z-a)>60&&s.push(ln(g.x,g.z,r,a,vr,"street",g))}return Go.set(t,s),s}function _m(i,e,t=1){const n=Math.floor(i/We),s=Math.floor(e/We),r=[];for(let a=-t;a<=t;a++)for(let o=-t;o<=t;o++)r.push(...Vi(n+o,s+a));return r}class vm{constructor(){X(this,"cs",25);X(this,"cache",new Map);X(this,"segs",[])}setSegments(e){this.segs=e,this.cache.clear()}offset(e,t){const n=`${Math.floor(e/this.cs)},${Math.floor(t/this.cs)}`,s=this.cache.get(n);if(s!==void 0)return s;let r=1/0;for(const a of this.segs){const o=Bo(e,t,a.ax,a.az,a.bx,a.bz)-a.width*.5;if(o<r&&(r=o),r<-2)break}return this.cache.size>6e3&&this.cache.clear(),this.cache.set(n,r),r}isOnRoad(e,t){return this.offset(e,t)<=.5}distanceToCenter(e,t){let n=1/0;for(const s of this.segs){const r=Bo(e,t,s.ax,s.az,s.bx,s.bz);r<n&&(n=r)}return n}}function xm(i,e){const t=bn(i*.0016,e*.0016,Tn,4,2.07,.52),n=bn(i*.0065,e*.0065,Tn^24415,3,2.11,.5),s=Math.abs(bn(i*.0042,e*.0042,Tn^41394,3,2,.55)-.5),r=Math.hypot(i,e),a=Hi((r-2600)/3200)*72*(1-Ce(s*2.2,0,1));return(t-.5)*92+(n-.5)*10+a}function Mt(i,e){let t=xm(i,e);const n=Ca(i,e,70);if(n){const l=Math.hypot(i-n.x,e-n.z),h=n.radius+14,p=h+58,u=l<=h?1:l>=p?0:Hi(1-(l-h)/(p-h));t=dt(t,n.baseY,u*.96)}const s=Math.floor(i/We),r=Math.floor(e/We);let a=1/0,o=0,c=0;for(let l=-1;l<=1;l++)for(let h=-1;h<=1;h++){const p=Vi(s+h,r+l);for(let u=0;u<p.length;u++){const m=p[u],g=m.ax<m.bx?m.ax:m.bx,v=m.ax<m.bx?m.bx:m.ax,d=m.az<m.bz?m.az:m.bz,f=m.az<m.bz?m.bz:m.az,M=i<g?g-i:i>v?i-v:0,x=e<d?d-e:e>f?e-f:0;if(M>36||x>36||M*M+x*x>36*36)continue;const[E,C]=Tc(i,e,m.ax,m.az,m.bx,m.bz);E<a&&(a=E,o=m.width,c=dt(m.ay,m.by,C))}}if(a<34){const l=o*.5;if(a<=l)t=c;else{const h=Hi(1-(a-l)/22);t=dt(t,c,h*.5)}}return t}function Ac(i,e,t=1.5){const n=Mt(i-t,e),s=Mt(i+t,e),r=Mt(i,e-t),a=Mt(i,e+t),o=n-s,c=r-a,l=2*t,h=Math.hypot(o,l,c)||1;return[o/h,l/h,c/h]}function Wo(i,e){return Ce(1-Ac(i,e)[1],0,1)}const Mm=[14273461,13219744,14932164,12174537,14074024,13620941],Xo=[9063226,7291958,10047295,5991802,8016711],Sm=[11844546,13159890,11055800,13682360,10463664],ym=[15261904,14471104,15062468];function Em(i,e,t,n){return[i+Math.cos(t)*n,e+Math.sin(t)*n]}function bm(i){const e=new Yi($n(i.gx,i.gz,11153)),t=[],n=i.streetsX,s=i.streetsZ;i.blockSize*.5;const r=i.kind==="city"?["station_police","station_fire","station_medical","station_taxi","station_courier","station_fuel","station_golf"]:i.kind==="village"?["station_fuel","station_courier"]:["station_courier"],a=new Set;for(const o of r){let c=!1;for(let l=0;l<40&&!c;l++){const h=e.int(0,n.length-2),p=e.int(0,s.length-2),u=`${h},${p}`;if(a.has(u))continue;const m=(n[h]+n[h+1])/2,g=(s[p]+s[p+1])/2;if(Math.hypot(m-i.x,g-i.z)<i.blockSize*.8)continue;a.add(u),c=!0;const v=n[h+1]-m<m-n[h]?1:-1,d=s[p+1]-g<g-s[p]?1:-1,f=e.chance(.5)?0:Math.PI,M=o==="station_fire"?20:o==="station_police"?16:14,x=13,E=o==="station_fuel"?5:7,C=m+v*1.5,w=g+d*1.5,[T,R]=Em(C,w,f,0);t.push({x:C,z:w,w:M,d:x,h:E,rot:f,kind:o,wall:15131354,roof:10134443,roofType:0,doorX:T,doorZ:R})}}for(let o=0;o<n.length-1;o++)for(let c=0;c<s.length-1;c++){const l=`${o},${c}`,h=(n[o]+n[o+1])/2,p=(s[c]+s[c+1])/2;if(Math.hypot(h-i.x,p-i.z)>i.radius*1.02)continue;const u=n[o+1]-n[o]-14,m=s[c+1]-s[c]-14;if(u<10||m<10||Math.hypot(h-i.x,p-i.z)<i.blockSize*.55||a.has(l)&&e.chance(.5))continue;const g=Math.max(1,Math.floor(u/20)),v=Math.max(1,Math.floor(m/20));for(let d=0;d<g;d++)for(let f=0;f<v;f++){const M=u/g,x=m/v,E=e.range(-.16,.16)*M,C=e.range(-.16,.16)*x,w=n[o]+7+M*(d+.5)+E,T=s[c]+7+x*(f+.5)+C;if(e.chance(i.kind==="city"?.2:i.kind==="village"?.34:.5)||a.has(l)&&e.chance(.6))continue;const R=i.kind==="city",k=e.next();let _;R?_=k<.42?"apartment":k<.78?"house":k<.9?"shop":"warehouse":i.kind==="village"?_=k<.66?"house":k<.82?"barn":k<.93?"shed":"shop":_=k<.5?"house":k<.78?"shed":"barn";const y=Ce(M*e.range(.4,.72),5,24),F=Ce(x*e.range(.4,.72),5,20);let N,P,B,O=1;switch(_){case"apartment":N=e.range(12,26),P=e.pick(Sm),B=5922920,O=0;break;case"shop":N=e.range(4.5,6.5),P=e.pick(ym),B=e.pick(Xo),O=0;break;case"warehouse":N=e.range(7,10),P=10134700,B=7371394,O=1;break;case"barn":N=e.range(5,8),P=11032895,B=7158316,O=1;break;case"shed":N=e.range(2.6,3.6),P=9140835,B=6181445,O=1;break;default:N=e.range(3.6,6.2)*(e.chance(.15)?2:1),P=e.pick(Mm),B=e.pick(Xo),O=e.chance(.75)?1:2}const $=Tm(w,T,n[o],n[o+1],s[c],s[c+1]);t.push({x:w,z:T,w:y,d:F,h:N,rot:$,kind:_,wall:P,roof:B,roofType:O,doorX:w,doorZ:T})}}return t}function Tm(i,e,t,n,s,r){const a=i-t,o=n-i,c=e-s,l=r-e,h=Math.min(a,o,c,l);return h===a?Math.PI:h===o?0:h===c?-Math.PI/2:Math.PI/2}class wm{constructor(){X(this,"terrain",new Kt({vertexColors:!0}));X(this,"road",new Kt({color:Qt.road}));X(this,"sidewalk",new Kt({color:Qt.sidewalk}));X(this,"wallCache",new Map);X(this,"roofCache",new Map);X(this,"window",new Kt({color:2765888}));X(this,"trunk",new Kt({color:5916210}));X(this,"leafA",new Kt({color:4156212}));X(this,"leafB",new Kt({color:5208634}));X(this,"leafC",new Kt({color:7046468}))}wall(e){let t=this.wallCache.get(e);return t||(t=new Kt({color:e}),this.wallCache.set(e,t)),t}roof(e){let t=this.roofCache.get(e);return t||(t=new Kt({color:e}),this.roofCache.set(e,t)),t}}class Am{constructor(){X(this,"box",new Kn(1,1,1));X(this,"cylinder",new Zn(1,1,1,8));X(this,"cone",new $i(1,1,7));X(this,"plane",new Ai(1,1))}}class Rm{constructor(e){X(this,"scene");X(this,"chunks",new Map);X(this,"mat",new wm);X(this,"geo",new Am);X(this,"townBuildings",new Map);X(this,"queue",[]);X(this,"buildingBuf",[]);this.scene=e}key(e,t){return`${e},${t}`}collisionsNear(e,t,n){const s=Math.ceil(n/Qe)+1,r=Math.floor(e/Qe),a=Math.floor(t/Qe),o=[];for(let c=-s;c<=s;c++)for(let l=-s;l<=s;l++){const h=this.chunks.get(this.key(r+l,a+c));if(h)for(const p of h.buildings)Math.abs(p.x-e)<n+p.hw+p.hd&&Math.abs(p.z-t)<n+p.hw+p.hd&&o.push(p)}return o}buildingsNear(e,t,n){return this.collisionsNear(e,t,n)}get loadedCount(){return this.chunks.size}update(e,t,n=2){const s=Math.floor(e/Qe),r=Math.floor(t/Qe);this.queue.length=0;for(let o=-un;o<=un;o++)for(let c=-un;c<=un;c++){const l=s+c,h=r+o;if(this.chunks.has(this.key(l,h)))continue;const p=c*c+o*o;this.queue.push({cx:l,cz:h,dist:p})}this.queue.sort((o,c)=>o.dist-c.dist);let a=0;for(const o of this.queue){if(a>=n)break;this.buildChunk(o.cx,o.cz),a++}for(const[o,c]of this.chunks){const l=c.cx-s,h=c.cz-r;(Math.abs(l)>zo||Math.abs(h)>zo)&&(this.disposeChunk(c),this.chunks.delete(o))}return a}preload(e,t,n=2,s){const r=Math.floor(e/Qe),a=Math.floor(t/Qe),o=[];for(let l=-n;l<=n;l++)for(let h=-n;h<=n;h++)o.push({cx:r+h,cz:a+l,d:h*h+l*l});o.sort((l,h)=>l.d-h.d);let c=0;for(const l of o)this.buildChunk(l.cx,l.cz),c++,s?.(c,o.length)}disposeChunk(e){this.scene.remove(e.group),e.group.traverse(t=>{const n=t;n.isMesh&&n.userData.customGeo&&n.geometry.dispose()})}townBuildingsFor(e,t){const n=this.townBuildings.get(e);if(n)return n;const s=t?bm(t):[];return this.townBuildings.set(e,s),s}buildChunk(e,t){const n=this.key(e,t);if(this.chunks.has(n))return;const s=new tn;s.position.set(0,0,0);const r=[];this.buildTerrain(e,t,s),this.buildRoads(e,t,s),this.buildBuildingsAndTrees(e,t,s,r),this.scene.add(s),this.chunks.set(n,{cx:e,cz:t,key:n,group:s,buildings:r,loadedAt:performance.now()})}buildTerrain(e,t,n){const s=sm,r=Qe/s,a=e*Qe,o=t*Qe,c=new Float32Array((s+1)*(s+1)*3),l=new Float32Array((s+1)*(s+1)*3),h=[],p=new Pe(Qt.grassA),u=new Pe(Qt.grassB),m=new Pe(Qt.grassDry),g=new Pe(Qt.dirt),v=new Pe(Qt.rock);let d=0;for(let E=0;E<=s;E++)for(let C=0;C<=s;C++){const w=a+C*r,T=o+E*r,R=Mt(w,T);c[d*3]=w,c[d*3+1]=R,c[d*3+2]=T;const k=Wo(w,T),_=bn(w*.02,T*.02,4211,2),y=p.clone().lerp(u,_);_>.62&&y.lerp(m,(_-.62)*1.6),y.lerp(g,Ce(k*1.9,0,.85)),k>.6&&y.lerp(v,(k-.6)*1.6),l[d*3]=y.r,l[d*3+1]=y.g,l[d*3+2]=y.b,d++}const f=s+1;for(let E=0;E<s;E++)for(let C=0;C<s;C++){const w=E*f+C,T=w+1,R=w+f,k=R+1;h.push(w,R,T,T,R,k)}const M=new zt;M.setAttribute("position",new Nt(c,3)),M.setAttribute("color",new Nt(l,3)),M.setIndex(h),M.computeVertexNormals(),M.computeBoundingSphere();const x=new $e(M,this.mat.terrain);x.userData.customGeo=!0,x.receiveShadow=!1,x.matrixAutoUpdate=!1,n.add(x)}buildRoads(e,t,n){const s=e*Qe-30,r=(e+1)*Qe+30,a=t*Qe-30,o=(t+1)*Qe+30,c=Math.floor((e*Qe+Qe/2)/We),l=Math.floor((t*Qe+Qe/2)/We),h=[],p=[];for(let v=-1;v<=1;v++)for(let d=-1;d<=1;d++)for(const f of Vi(c+d,l+v)){if(Math.max(f.ax,f.bx)<s||Math.min(f.ax,f.bx)>r||Math.max(f.az,f.bz)<a||Math.min(f.az,f.bz)>o)continue;const M=f.bx-f.ax,x=f.bz-f.az,E=Math.hypot(M,x);if(E<.01)continue;const C=-x/E,w=M/E,T=f.width*.5,R=.16,k=f.ax+C*T,_=f.az+w*T,y=f.ax-C*T,F=f.az-w*T,N=f.bx+C*T,P=f.bz+w*T,B=f.bx-C*T,O=f.bz-w*T,$=f.ay+R,G=f.by+R;h.push(k,$,_,y,$,F,N,G,P),h.push(y,$,F,B,G,O,N,G,P);for(let ne=0;ne<6;ne++)p.push(0,1,0)}if(h.length===0)return;const u=[];for(let v=-1;v<=1;v++)for(let d=-1;d<=1;d++)for(const f of Vi(c+d,l+v)){if(f.kind!=="highway"||Math.max(f.ax,f.bx)<s||Math.min(f.ax,f.bx)>r||Math.max(f.az,f.bz)<a||Math.min(f.az,f.bz)>o)continue;const M=f.bx-f.ax,x=f.bz-f.az,E=Math.hypot(M,x);if(E<4)continue;const C=-x/E,w=M/E,T=.14,R=.26,k=4.5,_=5.5,y=M/E,F=x/E;for(let N=0;N<E;N+=k+_){const P=Math.min(E,N+k),B=f.ax+y*N,O=f.az+F*N,$=f.ax+y*P,G=f.az+F*P,ne=f.ay+R,re=f.by+R,de=ne+(re-ne)*(N/E),Ne=ne+(re-ne)*(P/E);u.push(B+C*T,de,O+w*T,B-C*T,de,O-w*T,$+C*T,Ne,G+w*T),u.push(B-C*T,de,O-w*T,$-C*T,Ne,G-w*T,$+C*T,Ne,G+w*T)}}const m=new zt;m.setAttribute("position",new St(h,3)),m.setAttribute("normal",new St(p,3)),m.computeBoundingSphere();const g=new $e(m,this.mat.road);if(g.userData.customGeo=!0,g.matrixAutoUpdate=!1,n.add(g),u.length){const v=new zt;v.setAttribute("position",new St(u,3)),v.computeVertexNormals(),v.computeBoundingSphere();const d=new qi({color:14211280}),f=new $e(v,d);f.userData.customGeo=!0,f.matrixAutoUpdate=!1,n.add(f)}}buildBuildingsAndTrees(e,t,n,s){const r=e*Qe,a=(e+1)*Qe,o=t*Qe,c=(t+1)*Qe,l=Math.floor((r+Qe/2)/We),h=Math.floor((o+Qe/2)/We),p=new Set;for(let u=-1;u<=1;u++)for(let m=-1;m<=1;m++){const g=Ki(l+m,h+u);if(!g||p.has(g.id)||(p.add(g.id),g.x+g.radius+60<r||g.x-g.radius-60>a)||g.z+g.radius+60<o||g.z-g.radius-60>c)continue;const v=this.townBuildingsFor(g.id,g);for(const d of v){const f=d.w*.5,M=d.d*.5,x=Math.max(f,M)+4;d.x+x<r||d.x-x>a||d.z+x<o||d.z-x>c||this.addBuilding(n,d,s)}}this.addTrees(e,t,n,r,a,o,c)}addBuilding(e,t,n){const r=Mt(t.x,t.z)-.4,a=this.mat.wall(t.wall),o=this.mat.roof(t.roof),c=new $e(this.geo.box,a);if(c.scale.set(t.w,t.h,t.d),c.position.set(t.x,r+t.h/2,t.z),c.rotation.y=-t.rot,c.matrixAutoUpdate=!1,c.updateMatrix(),e.add(c),t.roofType===0){const l=new $e(this.geo.box,o);l.scale.set(t.w+.7,.45,t.d+.7),l.position.set(t.x,r+t.h+.22,t.z),l.rotation.y=-t.rot,l.matrixAutoUpdate=!1,l.updateMatrix(),e.add(l)}else if(t.roofType===1){const l=Math.min(t.w,t.d)*.34+.8,h=t.w/2+.5,p=Math.hypot(h,l),u=Math.atan2(l,h);for(const m of[-1,1]){const g=new $e(this.geo.box,o);g.scale.set(p,.35,t.d+1);const v=m*h/2;g.position.set(t.x+Math.cos(-t.rot)*v,r+t.h+l/2,t.z+Math.sin(-t.rot)*v),g.rotation.set(0,-t.rot,m*u,"YXZ"),g.matrixAutoUpdate=!1,g.updateMatrix(),e.add(g)}}else{const l=Math.min(t.w,t.d)*.5,h=new $e(this.geo.cone,o);h.scale.set(t.w*.78,l,t.d*.78),h.position.set(t.x,r+t.h+l/2,t.z),h.rotation.y=-t.rot,h.matrixAutoUpdate=!1,h.updateMatrix(),e.add(h)}if(t.h>4){const l=Math.max(1,Math.floor(t.h/3.4));for(let h=0;h<l;h++){const p=new $e(this.geo.box,this.mat.window),u=r+1.6+h*3.2;if(u>r+t.h-1)break;p.scale.set(t.w*.82,1.25,.12),p.position.set(t.x+Math.sin(t.rot)*(t.d/2+.04),u,t.z+Math.cos(t.rot)*(t.d/2+.04)),p.rotation.y=-t.rot,p.matrixAutoUpdate=!1,p.updateMatrix(),e.add(p)}}n.push({x:t.x,z:t.z,hw:t.w/2,hd:t.d/2,rot:t.rot,h:t.h,kind:t.kind})}addTrees(e,t,n,s,r,a,o){const c=new Yi($n(e,t,30634)),l=13,h=[],p=[],u=[],m=new tt,g=new Ti,v=new z,d=new z;for(let E=a;E<o;E+=l)for(let C=s;C<r;C+=l){const w=C+c.range(-5,5),T=E+c.range(-5,5),R=bn(w*.0035,T*.0035,Tn^4660,3),k=R>.56?.82:R>.48?.34:.055;if(!c.chance(k)||Ca(w,T,6)||Wo(w,T)>.62)continue;const y=Mt(w,T),F=c.range(5,11),N=c.range(.85,1.15);g.setFromAxisAngle(new z(0,1,0),c.range(0,zi)),d.set(w,y+F*.28,T),v.set(.42*N,F*.6,.42*N),m.compose(d,g,v),h.push(m.clone());const P=F*.58;d.set(w,y+F*.62,T),v.set(F*.34*N,P*.5,F*.34*N),m.compose(d,g,v);const B=c.next();B<.5?p.push(m.clone()):B<.82?u.push(m.clone()):p.push(m.clone())}const f=(E,C,w,T)=>{if(w.length===0)return;const R=new Zp(E,C,w.length);for(let k=0;k<w.length;k++)R.setMatrixAt(k,w[k]);R.instanceMatrix.needsUpdate=!0,R.frustumCulled=!0,R.userData.customGeo=!1,R.matrixAutoUpdate=!1,n.add(R)},M=new Zn(.5,.62,1,5);f(M,this.mat.trunk,h);const x=new $i(.5,1,6);f(x,this.mat.leafA,p),f(x,this.mat.leafB,u)}}const Rc=new Kn(1,1,1),Wn=new Zn(1,1,1,12);new $i(1,1,10);function rt(i,e={}){return new Ra({color:i,metalness:e.metal??.35,roughness:e.rough??.55,emissive:e.emissive??0,emissiveIntensity:e.emissive?1:0})}function he(i,e,t,n,s,r,a,o){const c=new $e(Rc,o);return c.scale.set(e,t,n),c.position.set(s,r,a),i.add(c),c}function xr(i,e,t,n,s,r,a){const o=new tn;o.position.set(e,t,n);const c=new $e(Wn,a);c.rotation.z=Math.PI/2,c.scale.set(s,r,s),o.add(c);const l=new $e(Wn,rt(12172996,{metal:.8,rough:.35}));return l.rotation.z=Math.PI/2,l.scale.set(s*.58,r*1.02,s*.58),o.add(l),i.add(o),o}function Mr(i,e,t){const n=new tn,s=i.body,r=rt(e,{metal:.42,rough:.44}),a=rt(2237995,{metal:.2,rough:.8}),o=rt(8828118,{metal:.1,rough:.12}),c=rt(1711135,{metal:0,rough:.95}),l=rt(13225684,{metal:.95,rough:.2}),h=[],p=[],u=[],m=[],g=s.length,v=s.width,d=s.height,f=s.wheelRadius,M=g/2,x=f*.82,E=rt(16774095,{emissive:16773312,rough:.2}),C=rt(13644844,{emissive:9049104,rough:.3}),w=(P,B)=>{const O=B?E:C;for(const $ of[-1,1]){const G=he(n,.3,.16,.1,$*(v/2-.24),x+d*.42,P,O);h.push(G)}};switch(s.shape){case"hatch":case"sedan":case"suv":{const P=d*.52,B=s.shape==="suv";he(n,g*.98,P,v,0,x+P/2,0,r);const O=s.shape==="sedan"?g*.52:g*.58,$=s.shape==="sedan"?-g*.03:-g*.06;if(he(n,O,d-P+.02,v*.9,$,x+P+(d-P)/2,0,r),he(n,O*.96,(d-P)*.62,v*.92,$,x+P+(d-P)*.52,0,o),he(n,.22,.26,v*1.02,M-.02,x+.24,0,a),he(n,.22,.26,v*1.02,-M+.02,x+.24,0,a),w(M-.03,!0),w(-M+.05,!1),B)for(const G of[-.42,.42])he(n,O*.9,.06,.07,$,x+d+.03,G*v,a);break}case"van":case"bus":{const P=d*.94;he(n,g*.98,P,v,0,x+P/2,0,r),he(n,.08,d*.4,v*.86,M-.2,x+d*.62,0,o);for(let B=0;B<3;B++)he(n,g*.16,d*.26,.06,M*.45-B*g*.22,x+d*.64,v/2+.005,o),he(n,g*.16,d*.26,.06,M*.45-B*g*.22,x+d*.64,-v/2-.005,o);he(n,.22,.3,v*1.02,M-.02,x+.3,0,a),he(n,.22,.3,v*1.02,-M+.02,x+.3,0,a),w(M-.03,!0),w(-M+.05,!1);break}case"pickup":case"flatbed":{const P=g*.32,B=d*.72;he(n,P,B,v,M-P/2,x+B/2,0,r),he(n,P*.9,B*.5,v*.94,M-P/2,x+B*.6,0,o);const O=g-P-.2;he(n,O,.16,v,-M+O/2,x+.42,0,a);for(const $ of[-1,1])he(n,O,.55,.08,-M+O/2,x+.72,$*v*.48,r);he(n,.08,.55,v,-M+.04,x+.72,0,r),w(M-.03,!0),w(-M+.05,!1);break}case"box":{const P=g*.26,B=d*.62;he(n,P,B,v,M-P/2,x+B/2,0,r),he(n,P*.92,B*.46,v*.94,M-P/2,x+B*.66,0,o);const O=g-P-.4,$=d*.92;he(n,O,$,v,-M+O/2,x+$/2+.35,0,r);for(let G=0;G<5;G++)he(n,.1,$*.94,v*1.02,-M+.6+G*(O/5),x+$/2+.35,0,a);w(M-.03,!0),w(-M+.6,!1);break}case"tanker":{const P=g*.26;he(n,P,d*.6,v,M-P/2,x+d*.3,0,r);const B=new $e(Wn,l);B.rotation.z=Math.PI/2,B.scale.set(v*.48,g*.66,v*.48),B.position.set(-M*.16,x+v*.55,0),n.add(B),w(M-.03,!0);break}case"loader":{he(n,g*.5,d*.26,v*.8,.2,x+d*.13,0,r),he(n,g*.3,d*.42,v*.62,-.35,x+d*.45,0,r),he(n,g*.27,d*.3,v*.58,-.35,x+d*.47,0,o);const P=he(n,g*.44,.22,.22,.55,x+d*.22,0,a);P.rotation.z=-.22,he(n,.9,.7,v*.92,M*.85,x-.1,0,rt(9408399,{metal:.7,rough:.5}));break}case"roller":{he(n,g*.6,d*.3,v*.86,-.2,x+d*.15,0,r),he(n,g*.32,d*.5,v*.72,-g*.18,x+d*.5,0,r),he(n,g*.28,d*.34,v*.66,-g*.18,x+d*.52,0,o);const P=new $e(Wn,rt(10132122,{metal:.6,rough:.6}));P.rotation.z=Math.PI/2,P.scale.set(.62,v*.9,.62),P.position.set(M*.82,.62,0),n.add(P);break}case"grader":{he(n,g*.55,d*.26,v*.72,.1,x+d*.13,0,r),he(n,g*.24,d*.46,v*.62,-g*.2,x+d*.42,0,r),he(n,g*.2,d*.3,v*.56,-g*.2,x+d*.45,0,o);const P=he(n,.5,.5,v*1.5,g*.2,.32,0,rt(11579568,{metal:.8,rough:.4}));P.rotation.y=.35;break}case"combine":{he(n,g*.62,d*.44,v*.66,-g*.1,x+d*.34,0,r),he(n,g*.2,d*.3,v*.44,g*.18,x+d*.62,0,r),he(n,g*.17,d*.22,v*.4,g*.18,x+d*.64,0,o),he(n,1.6,.5,v*1.05,M-.6,x+.2,0,rt(14270538,{metal:.6,rough:.5}));const P=he(n,g*.5,.2,.2,-g*.2,x+d*.5,v*.4,l);P.rotation.y=.5;break}case"golf":{he(n,g*.96,.26,v*.96,0,x+.1,0,r),he(n,g*.5,.36,v*.9,-g*.1,x+.4,0,r);for(const P of[-1,1])for(const B of[-1,1])he(n,.06,d*.62,.06,P*g*.36,x+d*.42,B*v*.44,a);he(n,g*.78,.07,v*1.04,0,x+d*.78,0,rt(15921906,{rough:.8})),he(n,g*.2,.3,v*.8,-g*.05,x+.5,0,a);break}}const T=f,R=s.wheelbase/2,k=-s.wheelbase/2,_=v/2-f*.36;M-s.wheelbase*.12,M-s.wheelbase*.12;const y=s.wheelbase/2,F=-s.wheelbase/2;for(const P of[-1,1])m.push(xr(n,y,T,P*_,f,.34*f+.12,c)),m.push(xr(n,F,T,P*_,f,.34*f+.12,c));if(s.axles===3){const P=F-s.wheelbase*.28;for(const B of[-1,1])m.push(xr(n,P,T,B*_,f,.34*f+.12,c))}if(i.service==="police"||i.service==="ambulance"||i.service==="fire"||i.service==="taxi"){const B={police:[2245887,16720418],ambulance:[16720418,16777215],fire:[16720418,16746496],taxi:[16763955]}[i.service]??[16755200],O=x+d+.1;B.forEach(($,G)=>{const ne=new $e(Rc,new Ra({color:$,emissive:$,emissiveIntensity:1.6,roughness:.4}));ne.scale.set(.34,.14,.24),ne.position.set(-.2+G*.42,O,0),n.add(ne),p.push(ne)})}if(t.handling>0&&(s.shape==="sedan"||s.shape==="hatch"||s.shape==="suv")){const P=he(n,.18,.06,v*.86,-M*.86,x+d+.1,0,a);for(const B of[-1,1])he(n,.08,.16,.08,-M*.86,x+d+.02,B*v*.36,a);u.push(P)}if(t.nitro>0){const P=new $e(Wn,rt(3894949,{metal:.8,rough:.3}));P.rotation.z=Math.PI/2,P.scale.set(.16,.5,.16),P.position.set(-M*.55,x+.35,0),P.visible=!1,n.add(P),u.push(P)}if(t.hitch>0){const P=he(n,.35,.12,.12,-M-.16,x*.72,0,l);u.push(P)}if(t.brakes>0)for(const P of m.slice(0,4)){const B=he(P,.12,.22,.08,.18,0,.14,rt(12597547,{metal:.6,rough:.4}));u.push(B)}if(t.weight>0&&(s.shape==="sedan"||s.shape==="hatch"||s.shape==="suv")){const P=he(n,g*.3,.02,v*.24,M*.4,x+d*.52+.01,0,rt(1776928,{metal:.5,rough:.35}));u.push(P)}const N=new $e(new Ai(g*1.12,v*1.42),new qi({color:0,transparent:!0,opacity:.24,depthWrite:!1}));return N.rotation.x=-Math.PI/2,N.position.y=.03,n.add(N),{root:n,wheels:m,wheelRadius:f,bodyMat:r,lights:h,beacons:p,extras:u}}function Cm(i,e){const t=new tn,n=rt(2764081,{rough:.8}),s=rt(e,{metal:.3,rough:.6}),r=rt(1711135,{rough:.95}),a=o=>{for(const c of[-1,1])for(const l of o===1?[0]:[-.7,.7]){const h=new tn;h.position.set(l,.34,c*.78);const p=new $e(Wn,r);p.rotation.z=Math.PI/2,p.scale.set(.34,.22,.34),h.add(p),t.add(h)}};switch(i){case"caravan":{he(t,5.2,2.2,2.05,-.2,1.45,0,s),he(t,.06,.7,1.6,2.5,1.6,0,rt(8828118,{rough:.2}));for(const o of[-1,1])he(t,2.6,.7,.05,-.4,1.7,o*1.03,rt(8828118,{rough:.15}));he(t,1.1,.1,.1,2.9,.55,0,n),a(2);break}case"tanker":{const o=new $e(Wn,rt(14080218,{metal:.8,rough:.3}));o.rotation.z=Math.PI/2,o.scale.set(1,4.6,1),o.position.set(-.4,1.25,0),t.add(o),he(t,5,.2,1.9,-.4,.62,0,n),he(t,1.2,.1,.1,2.6,.55,0,n),a(2);break}case"livestock":{he(t,5,2,2,-.4,1.4,0,rt(12103842,{rough:.75}));for(let o=0;o<8;o++)he(t,.07,1.9,2.04,-2.6+o*.62,1.4,0,n);he(t,1.1,.1,.1,2.5,.55,0,n),a(2);break}case"flatbed":{he(t,4.6,.18,1.95,-.4,.68,0,s);for(const o of[-1,1])he(t,4.6,.16,.08,-.4,.82,o*.96,n);he(t,1.1,.1,.1,2.4,.55,0,n),a(2);break}default:{he(t,3.1,.5,1.5,-.4,.62,0,s),he(t,3.1,.9,1.5,-.4,1.3,0,rt(14474460,{rough:.9})),he(t,1,.1,.1,1.9,.55,0,n),a(1);break}}return t}const xt=i=>i,Cc=[{id:"lad_compact",name:"Компакт",brand:"Лада",cls:"car",service:"none",price:0,unlockLevel:0,mass:1050,power:75,topSpeed:150,brakes:.9,grip:1,steerAngle:.62,offroad:.72,baseNitro:0,body:xt({length:4.05,width:1.72,height:1.45,wheelbase:2.5,wheelRadius:.31,axles:2,shape:"hatch",cab:!1}),colors:[3108789,12597547,15528177,2600544,3426654],descr:"Первая машина. Неприхотлива, дёшева в ремонте и позволяет работать курьером.",towCapable:!1,towMax:0,cargo:120,missionKinds:["delivery_light","courier_shift","taxi_ride_lite"]},{id:"sedan_premium",name:"Комфорт",brand:"Волга",cls:"car",service:"none",price:14500,unlockLevel:1,mass:1420,power:150,topSpeed:205,brakes:1.15,grip:1.12,steerAngle:.58,offroad:.55,baseNitro:0,body:xt({length:4.72,width:1.84,height:1.46,wheelbase:2.82,wheelRadius:.33,axles:2,shape:"sedan",cab:!1}),colors:[1779507,9343125,11549230,2837630,15263976],descr:"Динамичный седан: хорош и в такси, и в роли личного автомобиля.",towCapable:!1,towMax:0,cargo:160,missionKinds:["delivery_light","taxi_ride","taxi_shift","courier_shift"]},{id:"suv_forest",name:"Таёжник",brand:"Урал",cls:"car",service:"none",price:26800,unlockLevel:3,mass:1980,power:210,topSpeed:185,brakes:1.1,grip:1.04,steerAngle:.55,offroad:1.35,baseNitro:0,body:xt({length:4.86,width:1.96,height:1.82,wheelbase:2.9,wheelRadius:.39,axles:2,shape:"suv",cab:!1}),colors:[4017466,2899536,8350287,9649967,14211280],descr:"Полный привод и клиренс: проедет по полю к самой дальней деревне.",towCapable:!0,towMax:2200,cargo:300,missionKinds:["delivery_light","delivery_cargo","offroad_delivery","courier_shift"]},{id:"van_courier",name:"Курьер",brand:"ГАЗ",cls:"van",service:"courier",price:19400,unlockLevel:2,mass:2150,power:120,topSpeed:145,brakes:1,grip:.94,steerAngle:.6,offroad:.8,baseNitro:0,body:xt({length:5.3,width:2,height:2.3,wheelbase:3.1,wheelRadius:.34,axles:2,shape:"van",cab:!1}),colors:[15778841,15263976,3108789],descr:"Рабочая лошадка курьера: вместительный кузов и расклейка по бортам.",towCapable:!0,towMax:1800,cargo:1200,missionKinds:["courier_shift","delivery_light","delivery_cargo","parcel_run"]},{id:"van_minibus",name:"Микроавтобус",brand:"ГАЗ",cls:"van",service:"none",price:23200,unlockLevel:4,mass:2600,power:140,topSpeed:135,brakes:1.05,grip:.9,steerAngle:.58,offroad:.78,baseNitro:0,body:xt({length:5.7,width:2.05,height:2.45,wheelbase:3.3,wheelRadius:.35,axles:2,shape:"bus",cab:!1}),colors:[15263976,15778841,4160858],descr:"Восемь мест: пассажирские рейсы и школьные подвозки.",towCapable:!0,towMax:2100,cargo:800,missionKinds:["passenger_route","taxi_ride","delivery_light"]},{id:"truck_flatbed",name:"Бортовой",brand:"ЗИЛ",cls:"truck",service:"none",price:34500,unlockLevel:5,mass:5400,power:185,topSpeed:110,brakes:1.2,grip:.82,steerAngle:.55,offroad:.85,baseNitro:0,body:xt({length:6.9,width:2.35,height:2.9,wheelbase:3.9,wheelRadius:.44,axles:2,shape:"flatbed",cab:!0}),colors:[5204818,3108789,8022606],descr:"Открытая платформа под доски, мебель и стройматериалы.",towCapable:!0,towMax:4500,cargo:5e3,missionKinds:["delivery_cargo","construction_delivery","timber_run"]},{id:"truck_box",name:"Фургон-тяжёлый",brand:"МАЗ",cls:"truck",service:"none",price:48900,unlockLevel:7,mass:8200,power:280,topSpeed:105,brakes:1.35,grip:.8,steerAngle:.52,offroad:.8,baseNitro:0,body:xt({length:8.6,width:2.5,height:3.4,wheelbase:4.7,wheelRadius:.5,axles:3,shape:"box",cab:!0}),colors:[15263976,14241591,2899536],descr:"Закрытый кузов на 12 тонн: межгородские рейсы и холодная логистика.",towCapable:!0,towMax:8e3,cargo:12e3,missionKinds:["delivery_cargo","long_haul","construction_delivery"]},{id:"taxi_classic",name:"Такси",brand:"Таксопарк",cls:"service",service:"taxi",price:21600,unlockLevel:2,mass:1480,power:140,topSpeed:190,brakes:1.12,grip:1.08,steerAngle:.6,offroad:.6,baseNitro:0,body:xt({length:4.62,width:1.82,height:1.5,wheelbase:2.78,wheelRadius:.32,axles:2,shape:"sedan",cab:!1}),colors:[15909198,16176476],descr:"Лицензия такси. Пассажиры ждут — счётчик включается при посадке.",towCapable:!1,towMax:0,cargo:150,missionKinds:["taxi_ride","taxi_shift","taxi_night"]},{id:"police_patrol",name:"Патруль",brand:"Полиция",cls:"service",service:"police",price:38200,unlockLevel:6,mass:1720,power:240,topSpeed:215,brakes:1.25,grip:1.18,steerAngle:.6,offroad:.7,baseNitro:1,body:xt({length:4.9,width:1.9,height:1.52,wheelbase:2.9,wheelRadius:.34,axles:2,shape:"sedan",cab:!1}),colors:[15791094,2046611],descr:"Спецсигналы и рация: выезды на происшествия и погони.",towCapable:!1,towMax:0,cargo:120,missionKinds:["police_call","police_patrol","pursuit"]},{id:"ambulance_van",name:"Скорая",brand:"Медслужба",cls:"service",service:"ambulance",price:42500,unlockLevel:8,mass:3100,power:190,topSpeed:155,brakes:1.3,grip:.95,steerAngle:.56,offroad:.85,baseNitro:1,body:xt({length:5.9,width:2.1,height:2.65,wheelbase:3.4,wheelRadius:.37,axles:2,shape:"bus",cab:!1}),colors:[16119800,14236475],descr:"Реанимация на колёсах. Счёт идёт на секунды.",towCapable:!1,towMax:0,cargo:500,missionKinds:["medical_call","medical_transfer"]},{id:"fire_truck",name:"Пожарная",brand:"Пожарная охрана",cls:"service",service:"fire",price:61e3,unlockLevel:10,mass:11500,power:330,topSpeed:105,brakes:1.45,grip:.78,steerAngle:.5,offroad:.7,baseNitro:0,body:xt({length:9.4,width:2.55,height:3.6,wheelbase:5,wheelRadius:.52,axles:3,shape:"box",cab:!0}),colors:[14236475,15791094],descr:"Цистерна и лестница. Тушение пожаров, в том числе за городом.",towCapable:!1,towMax:0,cargo:3e3,missionKinds:["fire_call","fire_forest"]},{id:"loader_small",name:"Погрузчик",brand:"Амкодор",cls:"special",service:"none",price:29800,unlockLevel:5,mass:3900,power:90,topSpeed:32,brakes:1.1,grip:.9,steerAngle:.7,offroad:1.2,baseNitro:0,body:xt({length:4.2,width:1.9,height:2.7,wheelbase:2.3,wheelRadius:.52,axles:2,shape:"loader",cab:!0}),colors:[15778841,16747546],descr:"Ковш и вилы: погрузка на складе, расчистка снега, уборка стройплощадки.",towCapable:!1,towMax:0,cargo:1500,missionKinds:["loader_work","yard_cleanup"]},{id:"roller_road",name:"Каток",brand:"Дормаш",cls:"special",service:"none",price:33400,unlockLevel:6,mass:6100,power:80,topSpeed:22,brakes:1,grip:.85,steerAngle:.6,offroad:.9,baseNitro:0,body:xt({length:5,width:2,height:2.9,wheelbase:2.6,wheelRadius:.55,axles:2,shape:"roller",cab:!0}),colors:[15778841,14277081],descr:"Уплотнение асфальта. Работа по участкам дорожного ремонта.",towCapable:!1,towMax:0,cargo:0,missionKinds:["road_work"]},{id:"grader_road",name:"Грейдер",brand:"Дормаш",cls:"special",service:"none",price:41600,unlockLevel:8,mass:8400,power:110,topSpeed:28,brakes:1,grip:.85,steerAngle:.58,offroad:1.05,baseNitro:0,body:xt({length:7.4,width:2.4,height:3.1,wheelbase:4.4,wheelRadius:.56,axles:3,shape:"grader",cab:!0}),colors:[15778841,15250748],descr:"Планировка грунтовок: восстановление дорог после дождей.",towCapable:!1,towMax:0,cargo:0,missionKinds:["road_work","dirt_road_repair"]},{id:"combine_harvest",name:"Комбайн",brand:"Ростсельмаш",cls:"special",service:"none",price:58e3,unlockLevel:9,mass:12400,power:340,topSpeed:26,brakes:1,grip:.82,steerAngle:.5,offroad:1.15,baseNitro:0,body:xt({length:9.6,width:2.9,height:3.9,wheelbase:4.2,wheelRadius:.72,axles:2,shape:"combine",cab:!0}),colors:[13580846,15053628],descr:"Жатва с полей совхоза. Урожай — на склад в деревне.",towCapable:!1,towMax:0,cargo:4e3,missionKinds:["harvest"]},{id:"golf_cart",name:"Гольф-кар",brand:"Клуб «Заря»",cls:"golf",service:"none",price:7300,unlockLevel:1,mass:480,power:14,topSpeed:42,brakes:.7,grip:.9,steerAngle:.85,offroad:.95,baseNitro:0,body:xt({length:2.6,width:1.25,height:1.8,wheelbase:1.65,wheelRadius:.26,axles:2,shape:"golf",cab:!1}),colors:[16119800,7323507,15778841],descr:"Тихий и медленный, но гостям поля важно доехать с комфортом.",towCapable:!1,towMax:0,cargo:80,missionKinds:["golf_tour"]}],Pm=new Map(Cc.map(i=>[i.id,i]));function Gn(i){const e=Pm.get(i);if(!e)throw new Error(`Неизвестный транспорт: ${i}`);return e}const qo={car:"Легковой",van:"Фургон",truck:"Грузовой",special:"Спецтехника",service:"Служба",golf:"Гольф-кар"},Lm={taxi:"Такси",police:"Полиция",ambulance:"Скорая",fire:"Пожарные",courier:"Курьер",none:""},Pc=[{key:"engine",name:"Двигатель",max:3,descr:"Мощнее мотор — быстрее разгон и выше максимальная скорость.",costs:[1400,3600,8200],visual:"Выхлопная система"},{key:"brakes",name:"Тормоза",max:3,descr:"Усиленные диски и колодки: короче тормозной путь, особенно с прицепом.",costs:[900,2400,5400],visual:"Красные суппорты"},{key:"nitro",name:"Закись азота",max:3,descr:"Баллон N₂O: кратковременный рывок мощности. Кнопка N или отдельная педаль.",costs:[1800,4200,9200],visual:"Баллон в багажнике"},{key:"weight",name:"Облегчение",max:3,descr:"Карбон и алюминий вместо стали: лучше разгон и торможение.",costs:[1200,3200,7400],visual:"Карбоновые накладки"},{key:"handling",name:"Управляемость",max:3,descr:"Ужесточённая подвеска и рулевое: выше предел сцепления в поворотах.",costs:[1100,2900,6900],visual:"Спойлер"},{key:"hitch",name:"Фаркоп",max:1,descr:"Тягово-сцепное устройство. Без него прицеп не подсоединить.",costs:[2600],visual:"Фаркоп и розетка"}],Dm=new Map(Pc.map(i=>[i.key,i]));function Lc(){return{engine:0,brakes:0,nitro:0,weight:0,handling:0,hitch:0}}function Im(i,e,t=0){const n=1+.11*e.engine,s=1-.055*e.weight,r=1+.055*e.engine-.02*e.weight,a=1+.17*e.brakes,o=1+.075*e.handling,c=i.mass*s+t,l=t>0?1-Math.min(.3,t/Math.max(3e3,i.mass)*.28):1;return{power:i.power*n,mass:c,topSpeed:i.topSpeed/3.6*r*l,brakes:i.brakes*a,grip:i.grip*o,steerAngle:i.steerAngle,nitroCharge:e.nitro>0?2+e.nitro*1.1:0,nitroPower:e.nitro>0?1.28+e.nitro*.12:1,hitch:e.hitch>0,towMax:i.towMax,cargo:i.cargo,offroad:i.offroad}}function Dc(i,e){const t=Dm.get(i);return e>=t.max?null:t.costs[e]??null}function $o(i,e,t=0){return{x:i,z:e,y:Mt(i,e),heading:t,speed:0,slide:0,steerSmooth:0,nitro:1,nitroActive:!1,roll:0,pitch:0,rpm:0,odometer:0,bump:0}}const Um=9.81;function Nm(i,e,t,n,s){const r=s<=.35,a=r?1:Ce(e.offroad,.4,1.45);t.nitro&&i.nitro>.02&&e.nitroCharge>0?(i.nitroActive=!0,i.nitro=Ce(i.nitro-n/e.nitroCharge,0,1)):(i.nitroActive=!1,i.nitro=Ce(i.nitro+n/(e.nitroCharge*3.2+6),0,1));const o=Ce(t.steer,-1,1),c=Math.abs(o)<.01?7:4.2;i.steerSmooth=dt(i.steerSmooth,o,Ce(c*n,0,1));const l=e.power*735.5/1e3,h=Math.abs(i.speed),p=Ce(h/Math.max(1,e.topSpeed),0,1.2),u=Ce(1.25-p*1.05,.12,1.25);let m=0;const g=Ce(t.throttle,0,1),v=l*1e3/Math.max(300,h+2.5),d=e.power*735.5/Math.max(1,e.mass)*1.6;if(g>.01){let Y=Math.min(v,d)*g*u;const Q=i.nitroActive?e.nitroPower:1;Y*=Q*a;const ge=e.topSpeed*(i.nitroActive?1.22:1)*(r?1:.62*a);(h<ge||i.speed<0)&&(m+=Y/1)}if(t.brake>.01)if(i.speed>.6){const Y=e.brakes*9.6*t.brake;m-=Y}else i.speed>-9&&(m-=e.power*735.5/Math.max(1,e.mass)*.32*t.brake*a);t.handbrake&&(i.speed>.4?m-=e.brakes*6.2:i.speed<-.4?m+=e.brakes*6.2:i.speed=0);const f=(r?.0016:.0098)+(i.nitroActive?9e-4:.0022),M=r?.42:2.4,x=f*i.speed*Math.abs(i.speed)+Math.sign(i.speed)*M*(h>.2?1:0);m-=x/1;const E=i.x+Math.cos(i.heading)*1.6,C=i.z+Math.sin(i.heading)*1.6,w=(Mt(E,C)-Mt(i.x,i.z))/1.6;m-=w*Um*.55,r||(m*=.78),i.speed+=m*n;const T=e.topSpeed*(i.nitroActive?1.22:1)*(r?1.06:.66*a);i.speed>T&&(i.speed=dt(i.speed,T,Ce(6*n,0,1))),i.speed<-10&&(i.speed=-10),Math.abs(i.speed)<.05&&g<.01&&t.brake<.01&&(i.speed=0);const R=2.6,k=e.steerAngle*i.steerSmooth,_=Ce(e.grip*a*(r?1:.86),.35,1.7),y=Ce(Math.abs(i.speed),0,30),F=i.speed/R*Math.tan(k)*Ce(_,.5,1.4)*Ce(y/3.2,0,1),N=t.handbrake?1.45:1;i.heading+=F*N*n;const P=F*i.speed;i.slide=dt(i.slide,-P*(t.handbrake?.055:.016),Ce(5*n,0,1));const B=Math.cos(i.heading),O=Math.sin(i.heading),$=-O,G=B,ne=i.x+B*i.speed*n+$*i.slide*n,re=i.z+O*i.speed*n+G*i.slide*n;i.x=ne,i.z=re;const de=Mt(i.x,i.z);i.y=dt(i.y,de,Ce(14*n,0,1)),Ac(i.x,i.z);const Ne=-i.steerSmooth*Ce(Math.abs(i.speed)/40,0,1)*.1;i.roll=dt(i.roll,Ne,Ce(6*n,0,1)),i.pitch=dt(i.pitch,-(i.speed>0?m*.004:0),Ce(5*n,0,1));const Xe=Ce(p*.85+(g>.05?.28:0)+(i.nitroActive?.2:0),0,1);i.rpm=dt(i.rpm,Xe,Ce(8*n,0,1)),i.odometer+=Math.abs(i.speed)*n,i.bump=Math.max(0,i.bump-n*3)}function Fm(i,e,t,n){const s=Math.max(n,.6);for(const r of e){const a=i.x-r.x,o=i.z-r.z,c=Math.hypot(r.hw,r.hd)+s+t+1;if(Math.abs(a)>c||Math.abs(o)>c)continue;const l=Math.cos(-r.rot),h=Math.sin(-r.rot),p=a*l-o*h,u=a*h+o*l,m=r.hw+s,g=r.hd+s;if(Math.abs(p)>m||Math.abs(u)>g)continue;const v=m-Math.abs(p),d=g-Math.abs(u);let f=0,M=0;v<d?f=Math.sign(p||1)*v:M=Math.sign(u||1)*d;const x=Math.cos(r.rot),E=Math.sin(r.rot),C=f*x-M*E,w=f*E+M*x;i.x+=C,i.z+=w;const T=Math.abs(i.speed);if(T>1.5){const R=C,k=w,_=Math.hypot(R,k)||1,y=Math.cos(i.heading),F=Math.sin(i.heading),N=(y*R+F*k)/_;i.speed*=Ce(1-Math.abs(N)*.72,.12,1),i.bump=Ce(T/22,.15,1)}}}const Ic=[{id:"tr_cargo",name:"Грузовой прицеп",kind:"cargo",price:6400,mass:380,capacity:750,length:3.1,width:1.5,height:.55,hitching:1.5,wheels:1,descr:"Бортовая платформа с тентом. Дрова, мебель, стройматериалы.",color:9277330,needsTruck:!1},{id:"tr_flatbed_big",name:"Прицеп-платформа",kind:"flatbed",price:11800,mass:720,capacity:2400,length:4.6,width:2,height:.6,hitching:2,wheels:2,descr:"Двухосная платформа под технику и поддоны. Нужен фаркоп и тягач.",color:7303798,needsTruck:!0},{id:"tr_tanker",name:"Цистерна",kind:"tanker",price:18900,mass:1150,capacity:3e3,length:5,width:2.1,height:1.75,hitching:2.2,wheels:2,descr:"Пищевая цистерна: вода и молоко на фермы и в город.",color:14080218,needsTruck:!0},{id:"tr_livestock",name:"Скотовоз",kind:"livestock",price:21400,mass:1350,capacity:1800,length:5.2,width:2.15,height:2.3,hitching:2.2,wheels:2,descr:"Решётчатый кузов с вентиляцией для перевозки скота.",color:12103842,needsTruck:!0},{id:"tr_caravan",name:"Дом на колёсах",kind:"caravan",price:26500,mass:980,capacity:250,length:5.4,width:2.2,height:2.55,hitching:2,wheels:2,descr:"Жилое пространство: можно переночевать в поле и брать заказы на перевозку дачников.",color:15262418,needsTruck:!1}],Sr=new Map(Ic.map(i=>[i.id,i]));function Om(i,e,t,n,s,r,a){const o=e.length*.5,c=i.x-Math.cos(i.heading)*o,l=i.z-Math.sin(i.heading)*o,h=t-c,p=n-l,u=Math.hypot(h,p);let m=i.heading;if(u>.4){m=Math.atan2(p,h);let v=(m-i.heading+Math.PI)%(Math.PI*2)-Math.PI;const d=1.15;v>d&&(v=d),v<-d&&(v=-d);const f=6.5*Math.min(1,Math.abs(a)*.16+.18),M=v*Math.min(1,f*r);i.heading+=M,i.x=t-Math.cos(i.heading)*o,i.z=n-Math.sin(i.heading)*o}else i.x=t-Math.cos(i.heading)*o,i.z=n-Math.sin(i.heading)*o;const g=(s-i.heading+Math.PI*3)%(Math.PI*2)-Math.PI;i.heading+=g*Math.min(.35,Math.abs(a)*.004)*r*60*.06,i.x=t-Math.cos(i.heading)*o,i.z=n-Math.sin(i.heading)*o}const Uc="goroda-i-derevni.save.v1";function yr(){return{version:1,money:2500,xp:0,owned:[{id:"lad_compact",upgrades:Lc(),color:3108789}],activeVehicleId:"lad_compact",trailers:[],activeTrailerId:null,position:{x:0,z:18,heading:0},stats:{missionsDone:0,kmDriven:0,earned:0,shiftStreak:0},settings:{quality:"high",sound:!0,showTouchControls:!0},activeMission:null,lastSave:Date.now()}}function Bm(){try{const i=localStorage.getItem(Uc);if(!i)return yr();const e=JSON.parse(i),t=yr(),n={...t,...e,stats:{...t.stats,...e.stats??{}},settings:{...t.settings,...e.settings??{}},position:{...t.position,...e.position??{}}};return n.owned=(n.owned??[]).filter(s=>s&&s.id).map(s=>({id:s.id,color:typeof s.color=="number"?s.color:3108789,upgrades:{...Lc(),...s.upgrades??{}}})),n.owned.length===0&&(n.owned=t.owned),n.owned.some(s=>s.id===n.activeVehicleId)||(n.activeVehicleId=n.owned[0].id),n.trailers=n.trailers??[],n.activeMission&&n.activeMission.state==="done"&&(n.activeMission=null),n}catch{return yr()}}function zm(i){try{return i.lastSave=Date.now(),localStorage.setItem(Uc,JSON.stringify(i)),!0}catch{return!1}}const km=["Дмитрий","Анна","Сергей","Ольга","Павел","Марина","Игорь","Елена","Виктор","Наталья","Артём","Света","Роман","Татьяна","Никита","Люба"],Hm={delivery_light:{title:"Доставка посылки",desc:(i,e)=>`Забрать посылку в ${i} и привезти в ${e}.`},delivery_cargo:{title:"Грузовой рейс",desc:(i,e)=>`Перевезти груз из ${i} в ${e}. Нужен кузов повместительнее.`},offroad_delivery:{title:"Доставка в глушь",desc:(i,e)=>`Забросить продукты в ${e}: дорога грунтовая, нужен внедорожник.`},courier_shift:{title:"Смена курьера",desc:(i,e)=>`Серия посылок: ${i} → ${e}. Чем быстрее, тем больше чаевых.`},parcel_run:{title:"Развоз по адресам",desc:(i,e)=>`Собрать посылки в ${i} и развезти в ${e}.`},taxi_ride:{title:"Пассажир ждёт",desc:(i,e)=>`Подобрать пассажира в ${i} и отвезти в ${e}. Счётчик идёт.`},taxi_shift:{title:"Смена в такси",desc:(i,e)=>`Три заказа подряд, старт в ${i}, финиш в ${e}.`},taxi_night:{title:"Ночной заказ",desc:(i,e)=>`Срочный ночной рейс ${i} → ${e}. Платят с надбавкой.`},taxi_ride_lite:{title:"Подвезти соседа",desc:(i,e)=>`Частный извоз ${i} → ${e}. Денег немного, зато без лицензии.`},passenger_route:{title:"Пассажирский рейс",desc:(i,e)=>`Провезти группу из ${i} в ${e}.`},police_call:{title:"Вызов патруля",desc:(i,e)=>`Прибыть на вызов в ${e} и разобраться на месте.`},police_patrol:{title:"Патрулирование",desc:(i,e)=>`Объехать район ${i} и отметить контрольные точки.`},pursuit:{title:"Погоня",desc:(i,e)=>`Нарушитель уходит в сторону ${e}. Догнать и остановить.`},medical_call:{title:"Экстренный вызов",desc:(i,e)=>`Пациенту плохо в ${e}. Счёт на секунды.`},medical_transfer:{title:"Перевозка пациента",desc:(i,e)=>`Перевезти пациента из ${i} в больницу ${e}.`},fire_call:{title:"Пожар",desc:(i,e)=>`Возгорание в ${e}. Нужно прибыть и потушить.`},fire_forest:{title:"Лесной пожар",desc:(i,e)=>`Загорелось в лесу у ${e}. Проедет не всякая машина.`},loader_work:{title:"Погрузка на складе",desc:(i,e)=>`Погрузить поддоны в ${i} и отвезти на склад ${e}.`},yard_cleanup:{title:"Расчистка площадки",desc:(i,e)=>`Убрать снег и мусор на площадке в ${e}.`},road_work:{title:"Ремонт дороги",desc:(i,e)=>`Обработать участок трассы у ${e}. Двигаться по маршруту.`},dirt_road_repair:{title:"Планировка грунтовки",desc:(i,e)=>`Выровнять дорогу к ${e} после дождей.`},harvest:{title:"Уборка урожая",desc:(i,e)=>`Собрать поле у ${i} и сдать зерно в ${e}.`},golf_tour:{title:"Тур по полю",desc:(i,e)=>`Провезти гостей клуба из ${i} к ${e}.`},construction_delivery:{title:"Стройматериалы",desc:(i,e)=>`Доставить материалы на стройку в ${e}.`},timber_run:{title:"Лесоперевозка",desc:(i,e)=>`Вывезти брёвна из ${i} на пилораму ${e}.`},long_haul:{title:"Межгород",desc:(i,e)=>`Долгий рейс ${i} → ${e}. Платят по километражу.`}},Vm={delivery_light:{base:140,perKm:46,timePerKm:90},delivery_cargo:{base:260,perKm:68,timePerKm:105},offroad_delivery:{base:220,perKm:78,timePerKm:130},courier_shift:{base:300,perKm:58,timePerKm:95},parcel_run:{base:240,perKm:52,timePerKm:100},taxi_ride:{base:180,perKm:72,timePerKm:82},taxi_shift:{base:380,perKm:76,timePerKm:85},taxi_night:{base:260,perKm:96,timePerKm:78},taxi_ride_lite:{base:70,perKm:26,timePerKm:120},passenger_route:{base:320,perKm:62,timePerKm:100},police_call:{base:320,perKm:88,timePerKm:70},police_patrol:{base:260,perKm:54,timePerKm:150},pursuit:{base:480,perKm:110,timePerKm:60},medical_call:{base:420,perKm:104,timePerKm:55},medical_transfer:{base:340,perKm:74,timePerKm:80},fire_call:{base:520,perKm:96,timePerKm:62},fire_forest:{base:640,perKm:108,timePerKm:78},loader_work:{base:300,perKm:84,timePerKm:160},yard_cleanup:{base:240,perKm:70,timePerKm:170},road_work:{base:460,perKm:92,timePerKm:200},dirt_road_repair:{base:380,perKm:86,timePerKm:190},harvest:{base:540,perKm:98,timePerKm:180},golf_tour:{base:90,perKm:34,timePerKm:200},construction_delivery:{base:330,perKm:78,timePerKm:110},timber_run:{base:380,perKm:88,timePerKm:120},long_haul:{base:720,perKm:74,timePerKm:95}};function Gm(i){return i.missionKinds}function Nc(i,e){return e.kind==="long_haul"&&i.cargo<6e3||e.kind==="delivery_cargo"&&i.cargo<500||e.kind==="construction_delivery"&&i.cargo<1500||e.kind==="timber_run"&&i.cargo<2e3?!1:!!(i.missionKinds.includes(e.kind)||e.kind==="taxi_ride_lite"&&i.cls==="car"||e.kind==="delivery_light"&&i.cargo>=100)}let Wm=0;function Xm(i){const e=Gm(i.vehicle),t=i.rng.pick(e),n=Vm[t],s=wc(i.x,i.z,2);if(s.length<1)return null;const r=x=>{const E=i.rng;if(x.streetsX.length>1&&E.chance(.6)){const T=E.chance(.5),R=T?E.pick(x.streetsX):E.pick(x.streetsZ),k=T?E.range(x.streetsZ[0],x.streetsZ[x.streetsZ.length-1]):E.range(x.streetsX[0],x.streetsX[x.streetsX.length-1]);return T?[R,k]:[k,R]}const C=E.range(0,Math.PI*2),w=E.range(x.radius*.2,x.radius*.85);return[x.x+Math.cos(C)*w,x.z+Math.sin(C)*w]};let a,o;if(e===void 0||s.length>=2){a=i.rng.pick(s);const x=s.filter(E=>E.id!==a.id);o=x.length&&i.rng.chance(.72)?i.rng.pick(x):a}else a=s[0],o=s[0];const[c,l]=r(a),[h,p]=r(o),u=Math.max(.25,Rn(c,l,h,p)/1e3),m=i.rng.pick(km),g=Math.round((n.base+n.perKm*u)*(.85+i.rng.next()*.4)),v=Math.round((n.timePerKm*u+25)*(.95+i.rng.next()*.45)),d=Hm[t];return{id:`m${++Wm}_${$n(Math.round(c),Math.round(l),Math.round(i.now))}`,kind:t,title:d.title,desc:d.desc(a.name,o.name),state:"offer",fromX:c,fromZ:l,toX:h,toZ:p,reward:g,timeLimit:v,timeLeft:v,requires:{},minCargo:0,hintVehicle:i.vehicle.name,client:m,pickupDone:!1,townName:a.name,expiresAt:i.now+1e3*60*(3+i.rng.next()*4)}}function qm(i,e,t=4){const n=e.now;for(let r=i.length-1;r>=0;r--)i[r].expiresAt<n&&i.splice(r,1);let s=0;for(;i.length<t&&s++<24;){const r=Xm({...e});if(!r)break;i.some(o=>Rn(o.fromX,o.fromZ,r.fromX,r.fromZ)<60&&o.kind===r.kind)||i.push(r)}}function $m(i,e,t){return i.state==="accepted"||i.state==="offer"?{distToTarget:Rn(e,t,i.fromX,i.fromZ),targetLabel:"Точка погрузки"}:{distToTarget:Rn(e,t,i.toX,i.toZ),targetLabel:"Точка выгрузки"}}const Ym=16,Km=18;function Zm(i,e,t,n,s){if(i.state==="accepted"){if(i.timeLeft-=n,i.timeLeft<=0){i.state="failed",s("fail");return}Rn(e,t,i.fromX,i.fromZ)<Km&&(i.state="in_progress",i.pickupDone=!0,i.timeLeft+=i.timeLimit*.8,s("pickup"))}else if(i.state==="in_progress"){if(i.timeLeft-=n,i.timeLeft<=0){i.state="failed",s("fail");return}Rn(e,t,i.toX,i.toZ)<Ym&&(i.state="done",s("done"))}}function Fc(i){const e=i.timeLimit>0?Ce(i.timeLeft/Math.max(1,i.timeLimit),0,1)*.35:0;return Math.round(i.reward*(1+e))}function jm(i){let e=1,t=600,n=0;for(;i>=n+t&&e<60;)n+=t,e++,t=Math.round(t*1.22);return e}class Jm{constructor(e){X(this,"root");X(this,"moneyEl");X(this,"speedEl");X(this,"gearEl");X(this,"vehEl");X(this,"nitroWrap");X(this,"nitroFill");X(this,"missionCard");X(this,"toastWrap");X(this,"hintEl");X(this,"lastMissionHtml","");X(this,"lastMoney",-1);X(this,"lastSpeed",-1);X(this,"lastGear","");this.root=e,e.innerHTML="",this.moneyEl=document.createElement("div"),this.moneyEl.className="hud-money",e.appendChild(this.moneyEl),this.speedEl=document.createElement("div"),this.speedEl.className="hud-speed",this.speedEl.innerHTML='<b>0</b><span>км/ч</span><div class="gear">N</div>',e.appendChild(this.speedEl),this.gearEl=this.speedEl.querySelector(".gear"),this.vehEl=document.createElement("div"),this.vehEl.className="hud-veh",e.appendChild(this.vehEl),this.nitroWrap=document.createElement("div"),this.nitroWrap.className="nitro-wrap hidden",this.nitroFill=document.createElement("i"),this.nitroWrap.appendChild(this.nitroFill),e.appendChild(this.nitroWrap),this.missionCard=document.createElement("div"),this.missionCard.className="mission-card hidden",e.appendChild(this.missionCard),this.toastWrap=document.createElement("div"),this.toastWrap.className="toast-wrap",e.appendChild(this.toastWrap),this.hintEl=document.createElement("div"),this.hintEl.className="hint hidden",e.appendChild(this.hintEl)}setMoney(e,t){e===this.lastMoney&&t===void 0||(this.lastMoney=e,this.moneyEl.innerHTML=`${Zt(e)}${t?`<span class="sub">${t}</span>`:""}`)}setSpeed(e,t,n){const s=Math.round(Math.abs(e)*3.6);s!==this.lastSpeed&&(this.lastSpeed=s,this.speedEl.querySelector("b").textContent=String(s));const r=n?t?"R":e<.5?"N":"D":"P";r!==this.lastGear&&(this.lastGear=r,this.gearEl.textContent=r)}setVehicle(e,t){const n=`<div class="name">${e}</div><div class="meta">${t}</div>`;this.vehEl.innerHTML!==n&&(this.vehEl.innerHTML=n)}setNitro(e,t,n){this.nitroWrap.classList.toggle("hidden",!e),e&&(this.nitroFill.style.width=`${Math.round(t*100)}%`,this.nitroWrap.classList.toggle("on",n))}setMission(e,t,n,s){if(!e){this.lastMissionHtml!==""&&(this.lastMissionHtml="",this.missionCard.classList.add("hidden"),this.missionCard.innerHTML="");return}const r=$m(e,t,n),a=r.distToTarget>1e3?`${(r.distToTarget/1e3).toFixed(1)} км`:`${Math.round(r.distToTarget)} м`,o=e.state==="accepted"?"ЗАБРАТЬ":"ДОСТАВИТЬ",c=e.timeLimit>0?nm(e.timeLeft):"",l=Math.max(0,Math.min(100,e.timeLeft/Math.max(1,e.timeLimit)*100)),h=`
      <div class="row1">
        <span class="kind">${o}</span>
        <span class="title">${Er(e.title)}</span>
      </div>
      <div class="desc">${Er(s??e.desc)}</div>
      <div class="foot">
        <span class="dist">${a} · ${Er(r.targetLabel)}</span>
        <span class="rew">${Zt(e.reward)}</span>
        ${c?`<span class="timer">${c}</span>`:""}
      </div>
      <div class="bar"><i style="width:${l}%"></i></div>
    `;h!==this.lastMissionHtml&&(this.lastMissionHtml=h,this.missionCard.classList.remove("hidden"),this.missionCard.innerHTML=h)}toast(e,t="info",n=2600){const s=document.createElement("div");for(s.className=`toast ${t==="info"?"":t}`,s.textContent=e,this.toastWrap.appendChild(s),setTimeout(()=>{s.style.transition="opacity 0.35s, transform 0.35s",s.style.opacity="0",s.style.transform="translateY(-6px)",setTimeout(()=>s.remove(),380)},n);this.toastWrap.children.length>4;)this.toastWrap.firstChild?.remove()}setHint(e){if(!e){this.hintEl.classList.add("hidden");return}this.hintEl.textContent!==e&&(this.hintEl.textContent=e),this.hintEl.classList.remove("hidden")}destroy(){this.root.innerHTML=""}}function Er(i){return i.replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}class Qm{constructor(e){X(this,"canvas");X(this,"ctx");X(this,"scale",.16);X(this,"size",168);X(this,"dpr",Math.min(2,window.devicePixelRatio||1));const t=document.createElement("div");t.className="minimap",this.canvas=document.createElement("canvas"),this.canvas.width=this.size*this.dpr,this.canvas.height=this.size*this.dpr,t.appendChild(this.canvas),e.appendChild(t);const n=this.canvas.getContext("2d");if(!n)throw new Error("2D context недоступен");this.ctx=n,this.ctx.scale(this.dpr,this.dpr)}update(e){const t=this.ctx,n=this.size,s=n/2,r=n/2,a=this.scale;t.clearRect(0,0,n,n),t.fillStyle="#3d5c31",t.fillRect(0,0,n,n);const o=(u,m)=>[s+(u-e.x)*a,r+(m-e.z)*a],c=wc(e.x,e.z,2);for(const u of c){const[m,g]=o(u.x,u.z),v=Math.max(3,u.radius*a);t.fillStyle=u.kind==="city"?"#6a6a68":"#7d7461",t.beginPath(),t.arc(m,g,v,0,Math.PI*2),t.fill()}const l=Math.floor(e.x/We),h=Math.floor(e.z/We);t.lineCap="round";for(let u=-2;u<=2;u++)for(let m=-2;m<=2;m++)for(const g of Vi(l+m,h+u)){const[v,d]=o(g.ax,g.az),[f,M]=o(g.bx,g.bz);v<-20&&f<-20||v>n+20&&f>n+20||d<-20&&M<-20||d>n+20&&M>n+20||(t.strokeStyle=g.kind==="highway"?"#d9d3c4":"#a9a49a",t.lineWidth=g.kind==="highway"?2.6:1.4,t.beginPath(),t.moveTo(v,d),t.lineTo(f,M),t.stroke())}for(const u of e.offers){if(u.state!=="offer")continue;const[m,g]=o(u.fromX,u.fromZ);m<-8||m>n+8||g<-8||g>n+8||(t.fillStyle="#ffc247",t.beginPath(),t.arc(m,g,3.4,0,Math.PI*2),t.fill())}const p=e.mission;if(p&&(p.state==="accepted"||p.state==="in_progress")){const u=p.state==="accepted"?[p.fromX,p.fromZ]:[p.toX,p.toZ],[m,g]=o(u[0],u[1]),v=Math.max(8,Math.min(n-8,m)),d=Math.max(8,Math.min(n-8,g));t.fillStyle=p.state==="accepted"?"#7ee787":"#ff6b6b",t.beginPath(),t.arc(v,d,4.6,0,Math.PI*2),t.fill(),t.strokeStyle="rgba(0,0,0,0.5)",t.lineWidth=1,t.stroke(),(m!==v||g!==d)&&(t.strokeStyle="rgba(255,255,255,0.25)",t.setLineDash([3,4]),t.beginPath(),t.moveTo(s,r),t.lineTo(v,d),t.stroke(),t.setLineDash([]))}t.save(),t.translate(s,r),t.rotate(e.heading+Math.PI/2),t.fillStyle="#ffffff",t.strokeStyle="#111",t.lineWidth=1.2,t.beginPath(),t.moveTo(0,-6.5),t.lineTo(4.4,5),t.lineTo(0,2.6),t.lineTo(-4.4,5),t.closePath(),t.fill(),t.stroke(),t.restore(),t.fillStyle="rgba(255,255,255,0.75)",t.font="bold 9px -apple-system, sans-serif",t.textAlign="center",t.fillText("С",s,11)}}class eg{constructor(e,t){X(this,"root");X(this,"input");X(this,"steerZone");X(this,"knob");X(this,"ring");X(this,"buttons",[]);X(this,"visible",!0);X(this,"steerPointer",null);X(this,"steerStartX",0);X(this,"steerStartY",0);X(this,"steerOriginX",0);X(this,"steerOriginY",0);X(this,"hitchBtn",null);X(this,"onMenu",null);X(this,"onHitch",null);this.root=e,this.input=t,e.innerHTML="",this.steerZone=document.createElement("div"),this.steerZone.className="steer-zone",this.ring=document.createElement("div"),this.ring.className="steer-ring hidden",this.knob=document.createElement("div"),this.knob.className="steer-knob hidden",this.steerZone.appendChild(this.ring),this.steerZone.appendChild(this.knob),e.appendChild(this.steerZone),this.bindSteerZone(),this.addButton("gas","ГАЗ","gas"),this.addButton("brake","ТОРМОЗ","brake"),this.addButton("hand","РУЧНИК","hand"),this.addButton("nitro","НИТРО","nitro").el.classList.add("hidden"),this.hitchBtn=this.addButton("hitch","ПРИЦЕП","hitch"),this.hitchBtn.el.classList.add("hidden"),this.hitchBtn.el.onclick=()=>this.onHitch?.();const s=document.createElement("div");s.className="tbtn menu",s.textContent="☰",s.addEventListener("pointerdown",r=>{r.preventDefault(),r.stopPropagation(),this.onMenu?.()}),e.appendChild(s),this.layout()}addButton(e,t,n){const s=document.createElement("div");s.className=`tbtn ${e}`,s.textContent=t,this.root.appendChild(s);const r={el:s,pressed:!1,pointerId:null},a=c=>{c.preventDefault(),c.stopPropagation(),s.setPointerCapture?.(c.pointerId),r.pointerId=c.pointerId,r.pressed=!0,s.classList.add("active"),n!=="hitch"&&(this.input.touch[n]=1)},o=c=>{r.pointerId!==null&&c.pointerId!==r.pointerId||(r.pointerId=null,r.pressed=!1,s.classList.remove("active"),n!=="hitch"&&(this.input.touch[n]=0))};return s.addEventListener("pointerdown",a),s.addEventListener("pointerup",o),s.addEventListener("pointercancel",o),s.addEventListener("pointerleave",o),s.addEventListener("contextmenu",c=>c.preventDefault()),this.buttons.push(r),r}bindSteerZone(){const e=this.steerZone,t=r=>{if(r.preventDefault(),this.steerPointer!==null)return;this.steerPointer=r.pointerId,e.setPointerCapture?.(r.pointerId);const a=e.getBoundingClientRect();this.steerStartX=r.clientX,this.steerStartY=r.clientY,this.steerOriginX=r.clientX,this.steerOriginY=r.clientY,this.knob.style.left=`${r.clientX-a.left}px`,this.knob.style.top=`${r.clientY-a.top}px`,this.ring.style.left=`${r.clientX-a.left}px`,this.ring.style.top=`${r.clientY-a.top}px`,this.knob.classList.remove("hidden"),this.ring.classList.remove("hidden")},n=r=>{if(this.steerPointer!==r.pointerId)return;r.preventDefault();const a=r.clientX-this.steerStartX,o=78,c=Math.max(-1,Math.min(1,a/o));this.input.touch.steer=c;const l=e.getBoundingClientRect();this.knob.style.left=`${this.steerOriginX-l.left+c*o}px`,this.knob.style.top=`${this.steerOriginY-l.top}px`},s=r=>{this.steerPointer===r.pointerId&&(this.steerPointer=null,this.input.touch.steer=0,this.knob.classList.add("hidden"),this.ring.classList.add("hidden"))};e.addEventListener("pointerdown",t),e.addEventListener("pointermove",n),e.addEventListener("pointerup",s),e.addEventListener("pointercancel",s),e.addEventListener("pointerleave",s)}setNitroAvailable(e){this.buttons.find(n=>n.el.classList.contains("nitro"))?.el.classList.toggle("hidden",!e)}setHitchVisible(e,t="ПРИЦЕП"){this.hitchBtn&&(this.hitchBtn.el.classList.toggle("hidden",!e),this.hitchBtn.el.textContent=t)}setVisible(e){if(this.visible!==e&&(this.visible=e,this.root.classList.toggle("hidden",!e),!e)){this.input.touch.steer=0,this.input.touch.gas=0,this.input.touch.brake=0,this.input.touch.hand=0,this.input.touch.nitro=0;for(const t of this.buttons)t.pressed=!1,t.el.classList.remove("active")}}get isVisible(){return this.visible}layout(){}destroy(){this.root.innerHTML="",this.root.classList.add("hidden")}}class tg{constructor(e,t,n){X(this,"overlay");X(this,"cb");X(this,"current",null);X(this,"save");X(this,"offers",[]);X(this,"dealerFilter","all");X(this,"activeVehicleId");this.overlay=e,this.save=t,this.cb=n,this.activeVehicleId=t.activeVehicleId,e.addEventListener("pointerdown",s=>{s.target===e&&this.close()})}get isOpen(){return this.current!==null}updateSave(e){this.save=e,this.current&&this.render()}setOffers(e){this.offers=e,this.current==="missions"&&this.render()}open(e,t){t&&(this.offers=t),this.current=e,this.overlay.classList.remove("hidden"),this.render()}close(){this.current&&(this.current=null,this.overlay.classList.add("hidden"),this.overlay.innerHTML="",this.cb.onClose())}toggleTab(e){this.current===e?this.close():this.open(e)}render(){const e=this.current;if(!e)return;this.overlay.innerHTML="";const t=document.createElement("div");t.className="panel",this.overlay.appendChild(t);const n=document.createElement("div");n.className="panel-head";const s={missions:"Задания",dealer:"Автосалон",garage:"Гараж и улучшения",trailers:"Прицепы",settings:"Настройки"};n.innerHTML=`<h2>${s[e]}</h2><span class="money">${Zt(this.save.money)}</span>`;const r=document.createElement("button");r.className="btn ghost",r.textContent="Закрыть",r.onclick=()=>this.close(),n.appendChild(r),t.appendChild(n);const a=document.createElement("div");a.className="panel-tabs";const o=[["missions","Задания"],["dealer","Автосалон"],["garage","Гараж"],["trailers","Прицепы"],["settings","Настройки"]];for(const[l,h]of o){const p=document.createElement("div");p.className=`tab ${this.current===l?"active":""}`,p.textContent=h,p.onclick=()=>{this.current=l,this.render()},a.appendChild(p)}t.appendChild(a);const c=document.createElement("div");switch(c.className="panel-body",t.appendChild(c),e){case"missions":this.renderMissions(c);break;case"dealer":this.renderDealer(c);break;case"garage":this.renderGarage(c);break;case"trailers":this.renderTrailers(c);break;case"settings":this.renderSettings(c);break}}renderMissions(e){const t=this.save.activeMission,n=Gn(this.save.activeVehicleId);if(t&&(t.state==="accepted"||t.state==="in_progress")){const o=document.createElement("div");o.innerHTML='<div class="section-title">Текущее задание</div>';const c=document.createElement("div");c.className="card active-card",c.innerHTML=`
        <div class="ttl">${t.title}<span class="tag">${t.state==="accepted"?"забрать":"доставить"}</span></div>
        <div class="descr">${t.desc}</div>
        <div class="kv"><span>Заказчик</span><b>${t.client}</b></div>
        <div class="kv"><span>Оплата</span><b style="color:var(--money)">${Zt(Fc(t))}</b></div>
      `,o.appendChild(c),e.appendChild(o)}const s=this.offers.filter(o=>o.state==="offer"),r=document.createElement("div");if(r.className="section-title",r.textContent=`Доступные заказы (${s.length}) — ваш транспорт: ${n.name}`,e.appendChild(r),s.length===0){const o=document.createElement("div");o.className="descr",o.style.color="var(--dim)",o.style.fontSize="13px",o.textContent="Пока поблизости нет заказов. Покатайтесь по городу — новые появятся.",e.appendChild(o);return}const a=document.createElement("div");a.className="cards";for(const o of s){const c=Nc(n,o),l=document.createElement("div");l.className="card";const h=Math.round(Math.hypot(o.toX-o.fromX,o.toZ-o.fromZ)/100)/10;l.innerHTML=`
        <div class="ttl">${o.title}<span class="tag">${o.townName}</span></div>
        <div class="descr">${o.desc}</div>
        <div class="stats">
          <div>Дистанция: <b>${h} км</b></div>
          <div>Время: <b>${Math.round(o.timeLimit/60)} мин</b></div>
          <div>Нужен: <b>${ng(o.kind)}</b></div>
          <div>Клиент: <b>${o.client}</b></div>
        </div>
        <div class="foot">
          <span class="price">${Zt(o.reward)}</span>
          <button class="btn primary" ${!c||t?"disabled":""}>${c?"Взять":"Не подходит"}</button>
        </div>
      `;const p=l.querySelector("button");p.onclick=()=>{!c||this.save.activeMission||this.cb.onAcceptMission(o)},a.appendChild(l)}e.appendChild(a)}renderDealer(e){const t=[["all","Все"],["car","Легковые"],["van","Фургоны"],["truck","Грузовые"],["special","Спецтехника"],["service","Службы"],["golf","Гольф-кары"]],n=document.createElement("div");n.className="row",n.style.marginBottom="12px";for(const[a,o]of t){const c=document.createElement("div");c.className=`tab ${this.dealerFilter===a?"active":""}`,c.textContent=o,c.onclick=()=>{this.dealerFilter=a,this.render()},n.appendChild(c)}e.appendChild(n);const s=document.createElement("div");s.className="cards";const r=this.level();for(const a of Cc){if(this.dealerFilter!=="all"&&a.cls!==this.dealerFilter)continue;const o=this.save.owned.find(u=>u.id===a.id),c=r<a.unlockLevel,l=this.save.money>=a.price,h=document.createElement("div");h.className=`card ${o?"owned":""}`,h.innerHTML=`
        <div class="ttl">${a.brand} ${a.name}<span class="tag">${qo[a.cls]}</span></div>
        <div class="descr">${a.descr}</div>
        <div class="stats">
          <div>Мощность: <b>${a.power} л.с.</b></div>
          <div>Макс: <b>${a.topSpeed} км/ч</b></div>
          <div>Масса: <b>${a.mass} кг</b></div>
          <div>Кузов: <b>${a.cargo>0?a.cargo+" кг":"—"}</b></div>
        </div>
        <div class="foot">
          <span class="price">${o?"В гараже":c?`с ${a.unlockLevel} ур.`:Zt(a.price)}</span>
          <button class="btn primary" ${o||c||!l?"disabled":""}>${o?"Куплено":c?"Закрыто":"Купить"}</button>
        </div>
      `;const p=h.querySelector("button");p.onclick=()=>{o||c||!l||this.cb.onBuyVehicle(a,a.colors[0])},s.appendChild(h)}e.appendChild(s)}renderGarage(e){const t=this.save.owned,n=document.createElement("div");n.className="row",n.style.marginBottom="14px";for(const u of t){const m=Gn(u.id),g=document.createElement("div");g.className=`tab ${u.id===this.activeVehicleId?"active":""}`,g.textContent=m.name,g.onclick=()=>{this.activeVehicleId=u.id,this.render()},n.appendChild(g)}e.appendChild(n);const s=t.find(u=>u.id===this.activeVehicleId)??t[0];if(!s)return;const r=Gn(s.id),a=document.createElement("div");a.className="card",a.innerHTML=`
      <div class="ttl">${r.brand} ${r.name}<span class="tag">${qo[r.cls]}</span></div>
      <div class="descr">${r.descr}</div>
      <div class="stats">
        <div>Мощность: <b>${r.power} л.с.</b></div>
        <div>Масса: <b>${r.mass} кг</b></div>
        <div>Максимум: <b>${r.topSpeed} км/ч</b></div>
        <div>Груз: <b>${r.cargo} кг</b></div>
        <div>Прицеп до: <b>${r.towMax} кг</b></div>
        <div>Служба: <b>${Lm[r.service]||"—"}</b></div>
      </div>
    `;const o=document.createElement("button");o.className=`btn ${s.id===this.save.activeVehicleId?"":"primary"}`,o.textContent=s.id===this.save.activeVehicleId?"Сейчас в использовании":"Сесть за руль",o.disabled=s.id===this.save.activeVehicleId,o.onclick=()=>this.cb.onSelectVehicle(s.id),a.querySelector(".foot")?.appendChild(o);const c=document.createElement("div");c.className="foot",c.appendChild(o),a.appendChild(c),e.appendChild(a);const l=document.createElement("div");l.className="section-title",l.textContent="Окрас кузова",e.appendChild(l);const h=document.createElement("div");h.className="swatches";for(const u of r.colors){const m=document.createElement("div");m.className=`swatch ${u===s.color?"on":""}`,m.style.background=`#${u.toString(16).padStart(6,"0")}`,m.onclick=()=>this.cb.onPaintVehicle(s.id,u),h.appendChild(m)}e.appendChild(h);const p=document.createElement("div");p.className="section-title",p.textContent="Улучшения",e.appendChild(p);for(const u of Pc){const m=s.upgrades[u.key],g=Dc(u.key,m),v=document.createElement("div");v.className="upg-row";const d=document.createElement("div");d.className="pips";for(let x=0;x<u.max;x++){const E=document.createElement("i");x<m&&(E.className="on"),d.appendChild(E)}const f=document.createElement("div");f.className="lbl",f.innerHTML=`<b>${u.name}</b> <span class="lvl">${m}/${u.max}</span><div style="color:var(--dim);font-size:11px;margin-top:2px">${u.descr}</div>`;const M=document.createElement("button");M.className="btn primary",g===null?(M.textContent="Максимум",M.disabled=!0):(M.textContent=Zt(g),M.disabled=this.save.money<g,M.onclick=()=>this.cb.onBuyUpgrade(s.id,u.key)),v.appendChild(f),v.appendChild(d),v.appendChild(M),e.appendChild(v)}}renderTrailers(e){const t=Gn(this.save.activeVehicleId),n=(this.save.owned.find(a=>a.id===t.id)?.upgrades.hitch??0)>0,s=document.createElement("div");s.className="descr",s.style.marginBottom="12px",s.style.color=n?"var(--money)":"var(--dim)",s.textContent=n?`Фаркоп установлен. Максимальная масса прицепа для ${t.name}: ${t.towMax} кг.`:"Для буксировки нужен фаркоп — купите его в разделе «Гараж».",e.appendChild(s);const r=document.createElement("div");r.className="cards";for(const a of Ic){const o=this.save.trailers.find(m=>m.id===a.id),c=a.mass+a.capacity>t.towMax,l=a.needsTruck&&t.cls!=="truck"&&t.cls!=="special",h=this.save.money>=a.price,p=document.createElement("div");p.className=`card ${o?"owned":""}`,p.innerHTML=`
        <div class="ttl">${a.name}<span class="tag">${a.kind==="caravan"?"жилой":"груз"}</span></div>
        <div class="descr">${a.descr}</div>
        <div class="stats">
          <div>Своя масса: <b>${a.mass} кг</b></div>
          <div>Груз: <b>${a.capacity} кг</b></div>
          <div>Длина: <b>${a.length} м</b></div>
          <div>Оси: <b>${a.wheels}</b></div>
        </div>
        <div class="foot">
          <span class="price">${o?"Куплен":Zt(a.price)}</span>
          <button class="btn ${o?.attached?"":"primary"}" ${!o&&(!h||!n||c||l)?"disabled":""}>${o?o.attached?"Отцепить":"Прицепить":n?c?"Тяжело":l?"Нужен грузовик":"Купить":"Нужен фаркоп"}</button>
        </div>
      `;const u=p.querySelector("button");u.onclick=()=>{if(o)this.cb.onToggleTrailer(a.id);else{if(!h||!n||c||l)return;this.cb.onBuyTrailer(a)}},r.appendChild(p)}e.appendChild(r)}renderSettings(e){const t=this.save.settings,n=document.createElement("div");n.className="upg-row",n.innerHTML='<div class="lbl"><b>Качество графики</b><div style="color:var(--dim);font-size:11px">Радиус прогрузки мира и детализация.</div></div>';const s=document.createElement("div");s.className="row";for(const u of["low","medium","high"]){const m=document.createElement("button");m.className=`btn ${t.quality===u?"primary":""}`,m.textContent=u==="low"?"Низкое":u==="medium"?"Среднее":"Высокое",m.onclick=()=>{this.cb.onSettingChange("quality",u),this.render()},s.appendChild(m)}n.appendChild(s),e.appendChild(n);const r=document.createElement("div");r.className="upg-row",r.innerHTML='<div class="lbl"><b>Звук</b></div>';const a=document.createElement("button");a.className=`btn ${t.sound?"primary":""}`,a.textContent=t.sound?"Вкл":"Выкл",a.onclick=()=>{this.cb.onSettingChange("sound",!t.sound),this.render()},r.appendChild(a),e.appendChild(r);const o=document.createElement("div");o.className="upg-row",o.innerHTML='<div class="lbl"><b>Сенсорные кнопки</b><div style="color:var(--dim);font-size:11px">Скрывать при подключении геймпада или клавиатуры.</div></div>';const c=document.createElement("button");c.className=`btn ${t.showTouchControls?"primary":""}`,c.textContent=t.showTouchControls?"Вкл":"Выкл",c.onclick=()=>{this.cb.onSettingChange("showTouchControls",!t.showTouchControls),this.render()},o.appendChild(c),e.appendChild(o);const l=document.createElement("div");l.className="card",l.style.marginTop="14px",l.innerHTML=`
      <div class="ttl">Статистика</div>
      <div class="kv"><span>Выполнено заданий</span><b>${this.save.stats.missionsDone}</b></div>
      <div class="kv"><span>Пробег</span><b>${Math.round(this.save.stats.kmDriven)} км</b></div>
      <div class="kv"><span>Заработано</span><b style="color:var(--money)">${Zt(this.save.stats.earned)}</b></div>
      <div class="kv"><span>Уровень</span><b>${this.level()}</b></div>
      <div class="kv"><span>Опыт</span><b>${Math.round(this.save.xp)}</b></div>
    `,e.appendChild(l);const h=document.createElement("div");h.className="row",h.style.marginTop="16px";const p=document.createElement("button");p.className="btn danger",p.textContent="Сбросить прогресс",p.onclick=()=>{confirm("Удалить сохранение и начать заново?")&&this.cb.onReset()},h.appendChild(p),e.appendChild(h)}level(){let e=1,t=600,n=0,s=this.save.xp;for(;s>=n+t&&e<60;)n+=t,e++,t=Math.round(t*1.22);return e}}function ng(i){return{delivery_light:"любой",delivery_cargo:"фургон/грузовик",offroad_delivery:"внедорожник",courier_shift:"курьер",parcel_run:"фургон",taxi_ride:"такси",taxi_shift:"такси",taxi_night:"такси",taxi_ride_lite:"легковой",passenger_route:"микроавтобус",police_call:"полиция",police_patrol:"полиция",pursuit:"полиция",medical_call:"скорая",medical_transfer:"скорая",fire_call:"пожарная",fire_forest:"пожарная",loader_work:"погрузчик",yard_cleanup:"погрузчик",road_work:"каток",dirt_road_repair:"грейдер",harvest:"комбайн",golf_tour:"гольф-кар",construction_delivery:"грузовик",timber_run:"грузовик",long_haul:"тяжёлый грузовик"}[i]??"любой"}class Yo{constructor(){X(this,"ctx",null);X(this,"engineOsc",null);X(this,"engineGain",null);X(this,"engineSub",null);X(this,"subGain",null);X(this,"started",!1);X(this,"enabled",!0);X(this,"engineFilter",null)}init(){if(!this.started)try{const e=window.AudioContext??window.webkitAudioContext;this.ctx=new e,this.started=!0,this.buildEngine()}catch{this.ctx=null}}buildEngine(){const e=this.ctx;if(!e)return;const t=e.createGain();t.gain.value=0;const n=e.createBiquadFilter();n.type="lowpass",n.frequency.value=760,n.Q.value=3.2;const s=e.createOscillator();s.type="sawtooth",s.frequency.value=60;const r=e.createOscillator();r.type="square",r.frequency.value=30;const a=e.createGain();a.gain.value=.34,s.connect(n),r.connect(a),a.connect(n),n.connect(t),t.connect(e.destination),s.start(),r.start(),this.engineOsc=s,this.engineSub=r,this.engineGain=t,this.subGain=a,this.engineFilter=n}setEngine(e,t){if(!this.ctx||!this.engineOsc||!this.engineGain)return;const n=this.ctx.currentTime,s=t&&this.enabled?.055+e*.075:0;this.engineGain.gain.setTargetAtTime(s,n,.08);const r=44+e*132;this.engineOsc.frequency.setTargetAtTime(r,n,.05),this.engineSub?.frequency.setTargetAtTime(r*.5,n,.05),this.engineFilter?.frequency.setTargetAtTime(520+e*1500,n,.08)}blip(e,t,n="sine",s=.14,r){if(!this.ctx||!this.enabled)return;const a=this.ctx,o=a.createOscillator(),c=a.createGain();o.type=n,o.frequency.value=e,r&&o.frequency.exponentialRampToValueAtTime(r,a.currentTime+t),c.gain.value=s,c.gain.exponentialRampToValueAtTime(1e-4,a.currentTime+t),o.connect(c),c.connect(a.destination),o.start(),o.stop(a.currentTime+t+.02)}cash(){this.blip(880,.09,"triangle",.13),setTimeout(()=>this.blip(1320,.14,"triangle",.11),70)}success(){[523,659,784].forEach((e,t)=>setTimeout(()=>this.blip(e,.2,"sine",.12),t*95))}fail(){this.blip(320,.24,"sawtooth",.1,130)}bump(e){this.blip(70+e*40,.16,"square",Math.min(.2,.05+e*.15),40)}click(){this.blip(660,.04,"square",.06)}horn(){this.blip(392,.3,"sawtooth",.08),setTimeout(()=>this.blip(494,.26,"sawtooth",.07),30)}suspend(){this.setEngine(0,!1)}}class ig{constructor(e){X(this,"renderer");X(this,"scene");X(this,"camera");X(this,"sun");X(this,"hemi");X(this,"chunks");X(this,"roadIndex",new vm);X(this,"input",new im);X(this,"hud");X(this,"minimap");X(this,"touch");X(this,"panels");X(this,"audio",new Yo);X(this,"save");X(this,"vehicleDef");X(this,"vehicleModel");X(this,"vstate");X(this,"trailer",null);X(this,"offers",[]);X(this,"rng",new Yi(Date.now()&16777215));X(this,"lastTime",0);X(this,"acc",0);X(this,"running",!1);X(this,"paused",!1);X(this,"raf",0);X(this,"camPos",new z(0,8,-12));X(this,"camLook",new z);X(this,"camOrbit",0);X(this,"camDistBase",11);X(this,"payloadRing",null);X(this,"missionMarker",null);X(this,"offerMarkers",[]);X(this,"beaconSpin",0);X(this,"dayTime",.32);X(this,"lastSaveAt",0);X(this,"lastRoadRefresh",0);X(this,"lastMinimapAt",0);X(this,"collisionsCache",new Map);X(this,"resize",()=>{const e=window.innerWidth,t=window.innerHeight;this.renderer.setSize(e,t,!1),this.camera.aspect=e/Math.max(1,t),this.camera.updateProjectionMatrix()});const{canvas:t,uiRoot:n,touchRoot:s}=e;this.renderer=new qp({canvas:t,antialias:window.devicePixelRatio<2,powerPreference:"high-performance",alpha:!1}),this.renderer.setPixelRatio(Math.min(2,window.devicePixelRatio||1)),this.renderer.outputColorSpace=Wt,this.scene=new $p,this.scene.background=new Pe(Qt.sky),this.scene.fog=new Ta(Qt.sky,rm,am),this.camera=new Bt(62,1,.6,1400),this.hemi=new jp(13625087,4873020,.85),this.scene.add(this.hemi),this.sun=new em(16774109,1.5),this.sun.position.set(120,190,80),this.scene.add(this.sun),this.chunks=new Rm(this.scene),this.save=Bm(),this.vehicleDef=Gn(this.save.activeVehicleId);const r=this.save.owned.find(a=>a.id===this.vehicleDef.id);if(this.vehicleModel=Mr(this.vehicleDef,r.color,r.upgrades),this.scene.add(this.vehicleModel.root),this.vstate=$o(this.save.position.x,this.save.position.z,this.save.position.heading),this.hud=new Jm(n),this.minimap=new Qm(n),this.touch=new eg(s,this.input),this.audio=new Yo,this.panels=new tg(this.createPanelsOverlay(),this.save,{onAcceptMission:a=>this.acceptMission(a),onBuyVehicle:(a,o)=>this.buyVehicle(a,o),onSelectVehicle:a=>this.selectVehicle(a),onBuyUpgrade:(a,o)=>this.buyUpgrade(a,o),onPaintVehicle:(a,o)=>this.paintVehicle(a,o),onBuyTrailer:a=>this.buyTrailer(a),onToggleTrailer:a=>this.toggleTrailer(a),onClose:()=>{this.paused=!1,this.audio.click()},onReset:()=>{localStorage.clear(),location.reload()},onSettingChange:(a,o)=>this.changeSetting(a,o)}),this.wireInput(),this.syncTouchVisibility(!0),this.resize(),window.addEventListener("resize",this.resize),this.save.activeTrailerId){const a=this.save.trailers.find(o=>o.id===this.save.activeTrailerId&&o.attached);a&&this.attachTrailer(Sr.get(a.id))}this.refreshTrailerButton(),this.applyQuality()}createPanelsOverlay(){const e=document.createElement("div");return e.className="screen hidden",e.style.zIndex="30",document.getElementById("app").appendChild(e),e}wireInput(){this.input.onModeChange=()=>this.syncTouchVisibility(),this.input.onPause=()=>this.togglePause(),this.input.onInteract=()=>this.interact(),this.touch.onMenu=()=>this.openPanel("missions"),this.touch.onHitch=()=>this.quickHitch(),window.addEventListener("keydown",e=>{if(this.panels.isOpen)return;const t=e.key.toLowerCase();(t==="j"||t==="з")&&this.openPanel("missions"),(t==="g"||t==="п")&&this.openPanel("garage"),(t==="t"||t==="е")&&this.openPanel("dealer"),(t==="h"||t==="р")&&this.audio.horn()})}syncTouchVisibility(e=!1){if(!this.save.settings.showTouchControls){this.touch.setVisible(!1);return}const t=this.input.mode==="touch";(e||this.touch.isVisible!==t)&&this.touch.setVisible(t)}openPanel(e){this.panels.setOffers(this.offers),this.panels.open(e),this.paused=!0,this.audio.click(),this.input.touch.gas=0,this.input.touch.brake=0,this.input.touch.steer=0}togglePause(){if(this.panels.isOpen){this.panels.close();return}this.openPanel("settings")}applyQuality(){const e=this.save.settings.quality,t=e==="low"?1:e==="medium"?1.5:2;this.renderer.setPixelRatio(Math.min(t,window.devicePixelRatio||1)),this.camDistBase=e==="low"?9:11,this.resize()}changeSetting(e,t){this.save.settings[e]=t,e==="quality"&&this.applyQuality(),e==="sound"&&(this.audio.enabled=!!t,t||this.audio.suspend()),e==="showTouchControls"&&this.syncTouchVisibility(!0),this.persist()}async preload(e){e(4,"Готовим мир…"),await Ms();const t=this.vstate,n=(un*2+1)**2;let s=0;for(let r=0;r<=un;r++){const a=Math.floor(t.x/Qe),o=Math.floor(t.z/Qe),c=[];for(let l=-r;l<=r;l++)for(let h=-r;h<=r;h++)Math.max(Math.abs(h),Math.abs(l))===r&&c.push([a+h,o+l]);this.chunks.preload(t.x,t.z,0);for(const[l,h]of c)this.chunks.buildChunk(l,h),s++,s%3===0&&(e(Math.min(96,6+s/n*88),`Прогрузка территорий… ${s}/${n}`),await Ms())}e(97,"Расставляем транспорт…"),await Ms(),this.refreshRoadIndex(!0),this.refillMissionOffers(),e(100,"Поехали!"),await Ms(120)}start(){if(this.running)return;this.running=!0,this.lastTime=performance.now();const e=t=>{if(!this.running)return;this.raf=requestAnimationFrame(e);const n=Math.min(.1,(t-this.lastTime)/1e3);this.lastTime=t,this.update(n,t),this.render()};this.raf=requestAnimationFrame(e)}stop(){this.running=!1,cancelAnimationFrame(this.raf),this.persist()}refreshRoadIndex(e=!1){const t=performance.now();!e&&t-this.lastRoadRefresh<900||(this.lastRoadRefresh=t,this.roadIndex.setSegments(_m(this.vstate.x,this.vstate.z,1)))}refillMissionOffers(){qm(this.offers,{x:this.vstate.x,z:this.vstate.z,playerLevel:jm(this.save.xp),vehicle:this.vehicleDef,rng:this.rng,now:Date.now()},5),this.panels.setOffers(this.offers),this.rebuildOfferMarkers()}ownedRecord(e){return this.save.owned.find(t=>t.id===e)}buyVehicle(e,t){if(this.save.money<e.price){this.hud.toast("Не хватает денег","bad");return}this.ownedRecord(e.id)||(this.save.money-=e.price,this.save.owned.push({id:e.id,upgrades:{engine:0,brakes:0,nitro:0,weight:0,handling:0,hitch:0},color:t}),this.save.activeVehicleId=e.id,this.hud.toast(`Куплено: ${e.brand} ${e.name}`,"good"),this.audio.cash(),this.spawnVehicle(e.id),this.panels.updateSave(this.save),this.persist())}selectVehicle(e){this.ownedRecord(e)&&(this.save.activeVehicleId=e,this.spawnVehicle(e),this.panels.updateSave(this.save),this.persist(),this.panels.close(),this.hud.toast("Транспорт выбран","good"))}spawnVehicle(e){const t=Gn(e),n=this.ownedRecord(e),{x:s,z:r,heading:a}={x:this.vstate.x,z:this.vstate.z,heading:this.vstate.heading};if(this.scene.remove(this.vehicleModel.root),this.vehicleModel.root.traverse(o=>{const c=o;c.isMesh&&c.geometry&&c.geometry.userData.dispose&&c.geometry.dispose()}),this.vehicleDef=t,this.vehicleModel=Mr(t,n.color,n.upgrades),this.scene.add(this.vehicleModel.root),this.vstate=$o(s,r,a),this.vstate.y=Mt(s,r),this.trailer){const o=this.trailerStats();o&&o.def.mass+o.def.capacity>t.towMax&&this.detachTrailer()}this.refreshTrailerButton(),this.touch.setNitroAvailable(n.upgrades.nitro>0),this.updateHudVehicle()}buyUpgrade(e,t){const n=this.ownedRecord(e);if(!n)return;const s=n.upgrades[t],r=Dc(t,s);if(r!==null){if(this.save.money<r){this.hud.toast("Не хватает денег","bad");return}this.save.money-=r,n.upgrades[t]=s+1,this.audio.cash(),this.hud.toast("Улучшение установлено","good"),e===this.vehicleDef.id&&(this.scene.remove(this.vehicleModel.root),this.vehicleModel=Mr(this.vehicleDef,n.color,n.upgrades),this.scene.add(this.vehicleModel.root),this.touch.setNitroAvailable(n.upgrades.nitro>0),this.refreshTrailerButton()),this.panels.updateSave(this.save),this.persist()}}paintVehicle(e,t){const n=this.ownedRecord(e);n&&(n.color=t,e===this.vehicleDef.id&&(this.vehicleModel.bodyMat.color.setHex(t),this.vehicleModel.bodyMat.needsUpdate=!0),this.audio.click(),this.panels.updateSave(this.save),this.persist())}buyTrailer(e){if(this.save.money<e.price){this.hud.toast("Не хватает денег","bad");return}this.save.money-=e.price,this.save.trailers.push({id:e.id,attached:!0}),this.save.activeTrailerId=e.id,this.audio.cash(),this.hud.toast(`Куплен ${e.name}`,"good"),this.attachTrailer(e),this.panels.updateSave(this.save),this.persist()}toggleTrailer(e){const t=this.save.trailers.find(n=>n.id===e);if(t){if(t.attached)this.detachTrailer();else{const n=Sr.get(e);if(!n)return;const s=Gn(this.save.activeVehicleId);if(n.mass+n.capacity>s.towMax){this.hud.toast("Слишком тяжёлый прицеп для этой машины","bad");return}t.attached=!0,this.save.activeTrailerId=e,this.attachTrailer(n)}this.panels.updateSave(this.save),this.persist()}}quickHitch(){const e=this.save.trailers;if(e.length===0){this.hud.toast("Прицепов нет — купите в гараже","bad");return}if(this.trailer)this.detachTrailer(),this.hud.toast("Прицеп отцеплен");else{const t=e[0],n=Sr.get(t.id);n&&(t.attached=!0,this.save.activeTrailerId=t.id,this.attachTrailer(n),this.hud.toast(`Прицеплен ${n.name}`,"good"))}this.refreshTrailerButton(),this.persist()}trailerStats(){return this.trailer?{def:this.trailer.def}:null}attachTrailer(e){this.detachTrailer();const t=Cm(e.kind,e.color);this.scene.add(t),this.vehicleModel.root;const n=this.vstate.x-Math.cos(this.vstate.heading)*(this.vehicleDef.body.length*.5+.2),s=this.vstate.z-Math.sin(this.vstate.heading)*(this.vehicleDef.body.length*.5+.2);this.trailer={def:e,state:{x:n-Math.cos(this.vstate.heading)*e.length*.5,z:s-Math.sin(this.vstate.heading)*e.length*.5,heading:this.vstate.heading,load:0},model:t},this.refreshTrailerButton()}detachTrailer(){if(this.trailer){this.scene.remove(this.trailer.model),this.trailer=null;for(const e of this.save.trailers)e.attached=!1;this.save.activeTrailerId=null,this.refreshTrailerButton()}}refreshTrailerButton(){const e=!!this.trailer,t=(this.ownedRecord(this.save.activeVehicleId)?.upgrades.hitch??0)>0,n=this.save.trailers.length>0;if(!t||!n){this.touch.setHitchVisible(!1);return}this.touch.setHitchVisible(this.input.mode==="touch",e?"ОТЦЕП":"ПРИЦЕП")}acceptMission(e){if(!this.save.activeMission){if(!Nc(this.vehicleDef,e)){this.hud.toast("Этот транспорт не подходит","bad");return}e.state="accepted",e.timeLeft=e.timeLimit,this.save.activeMission=e,this.offers=this.offers.filter(t=>t.id!==e.id),this.panels.setOffers(this.offers),this.rebuildOfferMarkers(),this.panels.close(),this.hud.toast(`Задание взято: ${e.title}`,"good"),this.audio.click(),this.persist()}}interact(){if(this.save.activeMission)return;let e=null,t=1/0;for(const n of this.offers){if(n.state!=="offer")continue;const s=Rn(this.vstate.x,this.vstate.z,n.fromX,n.fromZ);s<t&&(t=s,e=n)}e&&t<60?this.acceptMission(e):this.openPanel("missions")}update(e,t){if(this.input.update(),this.input.mode==="touch"&&this.syncTouchVisibility(),this.panels.isOpen){this.audio.setEngine(0,!1);return}const n=this.save.settings.quality==="low"?1:this.save.settings.quality==="medium"?2:3;this.chunks.update(this.vstate.x,this.vstate.z,n),this.refreshRoadIndex();const s=this.ownedRecord(this.vehicleDef.id),r=this.trailer?this.trailer.def.mass+this.trailer.state.load:0,a=Im(this.vehicleDef,s.upgrades,r),o=this.roadIndex.offset(this.vstate.x,this.vstate.z),c=!this.panels.isOpen;Nm(this.vstate,a,{steer:this.input.steer,throttle:c?this.input.throttle:0,brake:c?this.input.brake:0,handbrake:this.input.handbrake,nitro:this.input.nitro},e,o);const l=this.chunks.collisionsNear(this.vstate.x,this.vstate.z,26),h=this.vstate.bump;if(Fm(this.vstate,l,this.vehicleDef.body.length*.5,this.vehicleDef.body.width*.5),this.vstate.bump>.35&&h<.3&&(this.audio.bump(this.vstate.bump),this.hud.toast("Осторожнее!","bad",1200)),this.trailer){const p=this.vehicleDef.body.length*.5+.15,u=this.vstate.x-Math.cos(this.vstate.heading)*p,m=this.vstate.z-Math.sin(this.vstate.heading)*p;Om(this.trailer.state,this.trailer.def,u,m,this.vstate.heading,e,this.vstate.speed),this.trailer.model.position.set(this.trailer.state.x,Mt(this.trailer.state.x,this.trailer.state.z),this.trailer.state.z),this.trailer.model.rotation.y=-this.trailer.state.heading}this.syncVehicleTransform(e),this.updateMissions(e,t),this.updateCamera(e),this.dayTime=(this.dayTime+e/420)%1,this.updateSky(),this.hud.setSpeed(this.vstate.speed,this.vstate.speed<-.3,!0),this.hud.setNitro(a.nitroCharge>0,this.vstate.nitro,this.vstate.nitroActive),this.hud.setMoney(this.save.money),this.audio.setEngine(this.vstate.rpm,!0),this.audio.enabled=this.save.settings.sound,t-this.lastMinimapAt>200&&(this.lastMinimapAt=t,this.minimap.update({x:this.vstate.x,z:this.vstate.z,heading:this.vstate.heading,mission:this.save.activeMission,offers:this.offers})),this.updateHint(),t-this.lastSaveAt>12e3&&(this.lastSaveAt=t,this.syncPositionToSave(),this.persist()),this.beaconSpin+=e*6;for(const p of this.vehicleModel.beacons)p.visible=Math.sin(this.beaconSpin)>-.2;this.missionMarker&&(this.missionMarker.rotation.y+=e*.8);for(const p of this.offerMarkers)p.rotation.y+=e*1.2}syncVehicleTransform(e){const t=this.vehicleModel.root;t.position.set(this.vstate.x,this.vstate.y,this.vstate.z),t.rotation.set(this.vstate.pitch,-this.vstate.heading,this.vstate.roll,"YXZ");const n=this.vstate.speed*e/Math.max(.2,this.vehicleModel.wheelRadius);for(const r of this.vehicleModel.wheels)r.rotation.z-=n;const s=Math.min(2,this.vehicleModel.wheels.length);for(let r=0;r<s;r++)this.vehicleModel.wheels[r].rotation.y=-this.vstate.steerSmooth*.42;for(const r of this.vehicleModel.extras)r.userData.isNitro&&(r.visible=this.vstate.nitroActive)}updateMissions(e,t){t%1e3<20&&this.offers.length<3&&this.refillMissionOffers();const n=this.save.activeMission;if(!n){this.hud.setMission(null,0,0),this.clearMarkers();return}Zm(n,this.vstate.x,this.vstate.z,e,s=>{s==="pickup"?(this.hud.toast("Груз принят — в путь!","good"),this.audio.click()):s==="done"?this.completeMission():s==="fail"&&this.failMission()}),n.state==="accepted"||n.state==="in_progress"?(this.hud.setMission(n,this.vstate.x,this.vstate.z),this.updateMarkers(n)):(this.hud.setMission(null,0,0),this.clearMarkers())}completeMission(){const e=this.save.activeMission;if(!e)return;const t=Fc(e);this.save.money+=t,this.save.stats.missionsDone++,this.save.stats.earned+=t;const n=Math.round(e.reward*.16);this.save.xp+=n,e.state="done",this.save.activeMission=null,this.audio.success(),this.audio.cash(),this.hud.toast(`Задание выполнено: +${Zt(t)}`,"good",3200),this.hud.toast(`+${n} опыта`,"good",2400),this.clearMarkers(),this.refillMissionOffers(),this.persist()}failMission(){const e=this.save.activeMission;e&&(e.state="failed",this.save.activeMission=null,this.audio.fail(),this.hud.toast("Время вышло — заказ потерян","bad",3e3),this.clearMarkers(),this.refillMissionOffers(),this.persist())}updateMarkers(e){const t=e.state==="accepted"?[e.fromX,e.fromZ]:[e.toX,e.toZ];this.missionMarker||(this.missionMarker=this.makeMarker(e.state==="accepted"?8316807:16739179),this.scene.add(this.missionMarker));const n=Mt(t[0],t[1]);this.missionMarker.position.set(t[0],n+2.2+Math.sin(performance.now()/400)*.25,t[1]);const s=e.state==="accepted"?8316807:16739179,r=this.missionMarker.children[0].material;r.color.setHex(s),r.emissive.setHex(s)}clearMarkers(){this.missionMarker&&(this.scene.remove(this.missionMarker),this.missionMarker=null)}rebuildOfferMarkers(){for(const e of this.offerMarkers)this.scene.remove(e);this.offerMarkers=[];for(const e of this.offers){if(e.state!=="offer")continue;const t=this.makeMarker(16761415,.7),n=Mt(e.fromX,e.fromZ);t.position.set(e.fromX,n+2,e.fromZ),this.scene.add(t),this.offerMarkers.push(t)}}makeMarker(e,t=1){const n=new tn,s=new Aa(.9*t,0),r=new Ra({color:e,emissive:e,emissiveIntensity:.9,roughness:.4,metalness:.1}),a=new $e(s,r);a.material.userData={beacon:!0},n.add(a);const o=new $e(new Zn(.5*t,.5*t,14,8,1,!0),new qi({color:e,transparent:!0,opacity:.14,side:Jt,depthWrite:!1}));return o.position.y=5,n.add(o),n}updateHint(){if(this.save.activeMission){this.hud.setHint(null);return}let t=null;for(const n of this.offers)if(n.state==="offer"&&Rn(this.vstate.x,this.vstate.z,n.fromX,n.fromZ)<40){t=n;break}if(t)this.hud.setHint(`E — взять заказ «${t.title}»`);else{const n=mm(this.vstate.x,this.vstate.z);n?this.hud.setHint(`Вы в ${n.name} · J — задания`):this.hud.setHint(null)}}updateCamera(e){const t=Ce(Math.abs(this.vstate.speed)/40,0,1),n=this.camDistBase+t*3.4+(this.vehicleDef.body.length>6?4.5:0),s=4.4+t*1.1+(this.vehicleDef.body.height>2.4?1.6:0);Math.abs(this.input.lookX)>.05?this.camOrbit+=this.input.lookX*e*2.2:this.camOrbit=dt(this.camOrbit,0,Ce(1.6*e,0,1));const r=this.vstate.heading+Math.PI+this.camOrbit,a=this.vstate.x+Math.cos(r)*n,o=this.vstate.z+Math.sin(r)*n,c=this.vstate.y+s,l=Ce(6.5*e,0,1);this.camPos.x=dt(this.camPos.x,a,l),this.camPos.y=dt(this.camPos.y,c,Ce(4.5*e,0,1)),this.camPos.z=dt(this.camPos.z,o,l);const h=Mt(this.camPos.x,this.camPos.z)+1.6;this.camPos.y<h&&(this.camPos.y=h),this.camera.position.copy(this.camPos);const p=this.vstate.x+Math.cos(this.vstate.heading)*(6+t*6),u=this.vstate.z+Math.sin(this.vstate.heading)*(6+t*6);this.camLook.set(p,this.vstate.y+1.5,u),this.camera.lookAt(this.camLook);const m=62+t*8+(this.vstate.nitroActive?6:0);this.camera.fov=dt(this.camera.fov,m,Ce(3*e,0,1)),this.camera.updateProjectionMatrix()}updateSky(){const e=this.dayTime,t=Math.max(0,Math.sin(e*zi-Math.PI/2)*.5+.5),n=new Pe(66e4),s=new Pe(Qt.sky),r=n.clone().lerp(s,sg(t));this.scene.background=r,this.scene.fog.color.copy(r),this.sun.intensity=dt(.06,1.55,t),this.sun.position.set(Math.cos(e*zi)*220,Math.max(20,Math.sin(e*zi)*260),Math.sin(e*zi*.7)*160),this.hemi.intensity=dt(.22,.92,t)}render(){this.renderer.render(this.scene,this.camera)}updateHudVehicle(){const e=this.ownedRecord(this.vehicleDef.id),t=this.trailer?` · прицеп ${this.trailer.def.mass} кг`:"";this.hud.setVehicle(`${this.vehicleDef.brand} ${this.vehicleDef.name}`,`${this.vehicleDef.power} л.с. · ${this.vehicleDef.cargo} кг${t}`)}syncPositionToSave(){this.save.position={x:this.vstate.x,z:this.vstate.z,heading:this.vstate.heading},this.save.stats.kmDriven=Math.max(this.save.stats.kmDriven,this.vstate.odometer/1e3)}persist(){this.syncPositionToSave(),this.save.activeVehicleId=this.vehicleDef.id,this.trailer&&(this.save.activeTrailerId=this.trailer.def.id),zm(this.save)}get state(){return this.save}}function Ms(i=0){return new Promise(e=>setTimeout(e,i))}function sg(i){const e=Ce(i,0,1);return e*e*(3-2*e)}async function rg(){const i=document.getElementById("game"),e=document.getElementById("ui"),t=document.getElementById("touch-controls"),n=document.getElementById("loading"),s=document.getElementById("loading-fill"),r=document.getElementById("loading-text");if(!i||!e||!t)throw new Error("Не найдены элементы интерфейса");document.addEventListener("gesturestart",c=>c.preventDefault()),document.addEventListener("dblclick",c=>c.preventDefault(),{passive:!1});let a;try{a=new ig({canvas:i,uiRoot:e,touchRoot:t,onProgress:()=>{}})}catch(c){r&&(r.textContent=`Ошибка запуска: ${c.message}`),console.error(c);return}const o=(c,l)=>{s&&(s.style.width=`${c}%`),r&&(r.textContent=l)};await a.preload(o),n?.classList.add("hidden"),a.start(),document.addEventListener("visibilitychange",()=>{document.hidden?a.stop():a.start()})}rg().catch(i=>{console.error(i);const e=document.getElementById("loading-text");e&&(e.textContent=`Не удалось загрузить игру: ${i.message}`)});
