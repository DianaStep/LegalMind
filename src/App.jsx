import React, { useEffect, useState } from 'react';
import { ArrowUpLeft, Menu, X, ArrowLeft, Check, MoveUpLeft } from 'lucide-react';

const SERVICES = [
  {number:'01', heading:'הטמעת AI במשרדי עורכי דין', sub:'ליווי והטמעה מתוך העבודה המשפטית', action:'איך נראית הטמעה'},
  {number:'02', heading:'MINDERS', sub:'מועדון ה-AI של עורכי הדין בישראל', action:'מה מקבלים ב-MINDERS'},
];

function CircuitField(){
 const columns=31, rows=17;
 const dots=Array.from({length:columns*rows},(_,i)=>({x:26+(i%columns)*36,y:24+Math.floor(i/columns)*38,k:i}));
 const paths=Array.from({length:24},(_,i)=>{
   const y=20+i*30, bend=380+(i%6)*50, end=685+(i%5)*65;
   return 'M -80 '+y+' H '+bend+' Q '+(bend+32)+' '+y+' '+(bend+32)+' '+(y+32)+' V '+(y+64)+' Q '+(bend+32)+' '+(y+92)+' '+(bend+65)+' '+(y+92)+' H '+end;
 });
 return <svg className="circuit-field" viewBox="0 0 1160 760" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
 <defs><radialGradient id="aura"><stop stopColor="#8dd8d0" stopOpacity=".36"/><stop offset="1" stopColor="#8dd8d0" stopOpacity="0"/></radialGradient><linearGradient id="trace" x1="0" x2="1" y1=".1" y2="1"><stop stopColor="#014345" stopOpacity=".05"/><stop offset=".55" stopColor="#36a8b3" stopOpacity=".37"/><stop offset="1" stopColor="#014345" stopOpacity=".09"/></linearGradient></defs>
 <ellipse cx="580" cy="350" rx="540" ry="420" fill="url(#aura)"/>
 <g className="tracks">{paths.map((path,i)=><path key={i} d={path} stroke="url(#trace)" fill="none" strokeWidth={i%5===0?1.6:.9}/>)}</g>
 {dots.map(({x,y,k})=><circle key={k} cx={x} cy={y} r={(k%13===0)?2.5:1.35} fill="#036568" opacity={(k%11===0)?'.43':'.16'}/>)}
 {Array.from({length:32},(_,i)=> <circle key={i} className="signal" style={{animationDelay:(i%9)*-.43+'s'}} cx={100+(i*91)%950} cy={55+(i*113)%630} r={i%5===0?5:3} fill={i%5===0?'#36a8b3':'#014345'} opacity=".4"/>)}
 </svg>;
}

function Wordmark(){return <a href="#top" className="wordmark" aria-label="LEGAL MIND">legal<span>mind</span><b>.</b></a>}

export default function App(){
 const [phase,setPhase]=useState(0);
 const [menuOpen,setMenuOpen]=useState(false);
 const phases=['מבינים','בוחרים','בודקים'];
 useEffect(()=>{const timer=window.setInterval(()=>setPhase(p=>(p+1)%3),3200);return()=>window.clearInterval(timer)},[]);
 return <div id="top" className="site">
 <header className="header"><div className="header-content"><Wordmark/><nav className={menuOpen?'navigation is-open':'navigation'} aria-label="ניווט ראשי"><a href="#concept">הגישה שלנו</a><a href="#routes">המסלולים</a><a href="https://legalmind.co.il/" target="_blank" rel="noreferrer">לאתר LEGAL MIND</a></nav><button className="mobile-menu" type="button" aria-label={menuOpen?'סגירת תפריט':'פתיחת תפריט'} onClick={()=>setMenuOpen(!menuOpen)}>{menuOpen?<X size={24}/>:<Menu size={24}/>}</button></div></header>
 <main>
 <section id="concept" className="hero" aria-labelledby="hero-heading">
 <CircuitField/>
 <div className="hero-shade"/>
 <div className="hero-content">
 <div className="top-label"><span className="label-dot"/> עורכי דין מלמדים עורכי דין <span className="label-divider"/> <span lang="en">LEGAL INTELLIGENCE FIRST</span></div>
 <h1 id="hero-heading">קודם בינה משפטית.<br/><em>אחר כך מלאכותית.</em></h1>
 <p className="lead">הבינה המלאכותית לא תחליף אותך. היא תחליף את מי שלא ישלוט בה. LEGAL MIND מלמדת עורכי דין לשלוט בה מתוך המקצוע ולפי כללי המקצוע.</p>
 <div className="scene">
 <div className="dialogue" aria-label="המחשה לגישה המקצועית של LEGAL MIND">
 <div className="dialogue-top"><span className="mini-mark"><i/><i/><i/><i/></span><span>מתחילים מהשאלה הנכונה</span><span className="concept-tag">המחשה רעיונית</span></div>
 <div className="question"><span>השאלה</span><strong>איך מתחילים לשלב בינה מלאכותית במשרד?</strong></div>
 <div className="response"><span>הגישה של LEGAL MIND</span><strong>מתחילים במשימה אחת שחוזרת בעבודה.</strong><p>מבינים מה צריך. בוחרים את הכלי המתאים. בודקים את התוצאה בשיקול דעת מקצועי.</p></div>
 <div className="process" aria-label="שלבי התהליך">{phases.map((p,i)=><span className={phase===i?'is-active':''} key={i}><small>0{i+1}</small> {p} {phase===i&&<Check size={14}/>}</span>)}</div>
 </div>
 <div className="side-comment"><span className="comment-accent"/><strong>המורכבות מאחורי הקלעים.</strong><br/>שיקול הדעת נשאר אצלך.</div>
 </div>
 </div></section>
 <section id="routes" className="routes" aria-label="מסלולים"><div className="routes-inner">{SERVICES.map((service,i)=><a className="route" key={service.number} href="https://legalmind.co.il/" target="_blank" rel="noreferrer"><div><span className="route-index">{service.number} / מסלול</span><h2>{service.heading}</h2><p>{service.sub}</p><span className="route-link">{service.action}</span></div><span className="route-arrow"><ArrowUpLeft size={23}/></span></a>)}</div></section>
 </main>
 <footer><span>LEGAL MIND · Hero Look & Feel — Concept 01</span><span>הדגמת עיצוב בלבד · לא צ'אט פעיל</span></footer>
 </div>;
}