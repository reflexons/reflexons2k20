(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{143:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(155),i=a(152),o=a(150),s=a(158),c=(a(244),function(e){var t=e.elements.map(function(e,t){return r.a.createElement("li",{key:e+t},r.a.createElement(s.Link,{to:e,smooth:!0,duration:500,spy:!0,activeClass:"active"},e))});return r.a.createElement("div",{className:"dot-navigate"},r.a.createElement("ul",null,t))}),u=(a(245),a(246)),d=a.n(u),m=a(247),h=a.n(m),f=a(7),p=a.n(f),g=a(248),b=a(146),w=a(149),y=a.n(w),v=(a(40),function(){function e(e){this.el=e,this.chars="!<>-_\\/[]{}—=+*^?#________",this.update=this.update.bind(this)}var t=e.prototype;return t.setText=function(e){var t=this,a=this.el.innerText,n=Math.max(a.length,e.length),r=new Promise(function(e){return t.resolve=e});this.queue=[];for(var l=0;l<n;l++){var i=a[l]||"",o=e[l]||"",s=Math.floor(40*Math.random()),c=s+Math.floor(40*Math.random());this.queue.push({from:i,to:o,start:s,end:c})}return cancelAnimationFrame(this.frameRequest),this.frame=0,this.update(),r},t.update=function(){for(var e="",t=0,a=0,n=this.queue.length;a<n;a++){var r=this.queue[a],l=r.from,i=r.to,o=r.start,s=r.end,c=r.char;this.frame>=s?(t++,e+=i):this.frame>=o?((!c||Math.random()<.28)&&(c=this.randomChar(),this.queue[a].char=c),e+='<span class="dud">'+c+"</span>"):e+=l}this.el.innerHTML=e,t===this.queue.length?this.resolve():(this.frameRequest=requestAnimationFrame(this.update),this.frame++)},t.randomChar=function(){return this.chars[Math.floor(Math.random()*this.chars.length)]},e}()),E=(a(249),function(e){function t(t){var a;return(a=e.call(this,t)||this).phrases=["Hello world","Welcome to the 35th Reflexon","The annual reunion and tech fest","of the Department of Computer Science","at the University of Calcutta","from 11th to 17th March"],a.textScrambler=r.a.createRef(),a}p()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=this,t=this.textScrambler.current,a=new v(t),n=0;!function t(){a.setText(e.phrases[n]).then(function(){setTimeout(t,800)}),n=(n+1)%e.phrases.length}()},a.render=function(){return r.a.createElement("section",{className:"default-section section-1",id:"section-1",style:this.props.backgroundStyle},r.a.createElement(b.StaticQuery,{query:"397227864",render:function(e){return r.a.createElement(y.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:g}),r.a.createElement("div",{className:"text-scrambler",ref:this.textScrambler}),r.a.createElement(s.Link,{to:"section-2",smooth:!0,duration:500,className:"arrow-container"},r.a.createElement("i",{className:"fas fa-angle-down"})))},t}(n.Component)),k=(a(151),a(52)),I=a.n(k),A=a(250),S=a(251),D=a.n(S),T=a(252),x=a.n(T),N=a(253),R=a.n(N),C=a(254),q=a.n(C),M=(a(255),a(256),a(174)),L=function(e){function t(t){var a;(a=e.call(this,t)||this).codeCombatRef=r.a.createRef(),a.codeBetaRef=r.a.createRef(),a.bugHuntRef=r.a.createRef(),a.quizRef=r.a.createRef(),a.debateRef=r.a.createRef(),a.photographyRef=r.a.createRef(),a.pubgRef=r.a.createRef(),a.csgoRef=r.a.createRef(),a.lineRef=r.a.createRef();var n=A.map(function(e){return{slug:e.slug,modalHeading:e.modalHeading,eventType:e.eventType,fees:e.fees,maxTeam:e.maxTeam,languages:e.languages,details:r.a.createElement("div",{className:"table-responsive-sm",style:{padding:0}},e.details.disclaimer_S1.map(function(e,t){return r.a.createElement("div",{className:"disclaimer",key:t},e)}),r.a.createElement("table",{className:"table"},r.a.createElement("tbody",null,e.details.rules.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"serial-number"},e.ruleID),r.a.createElement("td",{className:"detail"},e.rule))}))),r.a.createElement("div",{className:"disclaimer"},e.details.disclaimer_S2.map(function(e,t){return r.a.createElement("p",{style:{textTransform:"uppercase"},key:t},r.a.createElement("strong",null,e))}),r.a.createElement("table",null,r.a.createElement("tbody",null,e.details.contact.map(function(e,t){return r.a.createElement("tr",{key:t},r.a.createElement("td",{className:"event-coordinator"},e.name),r.a.createElement("td",{className:"event-coordinator-contact"},e.phone))})))))}});return n[0].modalRef=a.codeCombatRef,n[1].modalRef=a.codeBetaRef,n[2].modalRef=a.bugHuntRef,n[3].modalRef=a.quizRef,n[4].modalRef=a.debateRef,n[5].modalRef=a.photographyRef,n[0].downloadLink=D.a,n[1].downloadLink=D.a,n[2].downloadLink=x.a,n[3].downloadLink=q.a,n[4].downloadLink=R.a,a.eventDetails=n,a.handleClick=a.handleClick.bind(I()(I()(a))),a}p()(t,e);var a=t.prototype;return a.handleClick=function(e){switch(e.currentTarget.dataset.id){case"code-combat":this.codeCombatRef.current.style.display="block";break;case"code-beta":this.codeBetaRef.current.style.display="block";break;case"bug-hunt":this.bugHuntRef.current.style.display="block";break;case"quiz":this.quizRef.current.style.display="block";break;case"debate":this.debateRef.current.style.display="block";break;case"photography":this.photographyRef.current.style.display="block";break;case"pubg":this.pubgRef.current.style.display="block";break;case"csgo":this.csgoRef.current.style.display="block";break;case"line":this.lineRef.current.style.display="block"}},a.render=function(){return r.a.createElement("section",{className:"default-section",id:"section-2",style:this.props.backgroundStyle||""},this.eventDetails.map(function(e,t){return r.a.createElement(M.a,{key:e.slug+t,headFont:e.headFont,modalHeading:e.modalHeading,eventType:e.eventType,fees:e.fees,maxTeam:e.maxTeam,languages:e.languages,details:e.details,downloadLink:e.downloadLink,modalRef:e.modalRef,slug:e.slug})}),r.a.createElement("h1",{className:"section-heading"},"Events"),r.a.createElement("ul",{className:"timeline"},r.a.createElement("li",{className:"event","data-date":"Monday"},r.a.createElement("p",null,"11 - 03 - 2019"),r.a.createElement("div",{className:"events"},r.a.createElement("h3",null,r.a.createElement("span",null,"Bug hunt"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"bug-hunt",onClick:this.handleClick},"Register")),r.a.createElement("h3",null,r.a.createElement("span",null,"Debate"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"debate",onClick:this.handleClick},"Register")))),r.a.createElement("li",{className:"event","data-date":"Tuesday"},r.a.createElement("p",null,"12 - 03 - 2019"),r.a.createElement("div",{className:"events"},r.a.createElement("h3",null,r.a.createElement("span",null,"Photography"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"photography",onClick:this.handleClick},"Register")),r.a.createElement("h3",null,r.a.createElement("span",null,"Follow the line"),r.a.createElement(l.OutboundLink,{href:"https://plenipotentiary-wax.000webhostapp.com/",className:"btn btn-outline-warning","data-id":"line"},"Register")))),r.a.createElement("li",{className:"event","data-date":"Wednesday"},r.a.createElement("p",null,"13 - 03 - 2019"),r.a.createElement("div",{className:"events"},r.a.createElement("h3",null,r.a.createElement("span",null,"Code Beta"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"code-beta",onClick:this.handleClick},"Register")),r.a.createElement("h3",null,r.a.createElement("span",null,"Quiz"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"quiz",onClick:this.handleClick},"Register")))),r.a.createElement("li",{className:"event","data-date":"Thursday"},r.a.createElement("p",null,"14 - 03 - 2019"),r.a.createElement("div",{className:"events"},r.a.createElement("h3",null,r.a.createElement("span",null,"Code Combat"),r.a.createElement("button",{className:"btn btn-outline-warning","data-id":"code-combat",onClick:this.handleClick},"Register")))),r.a.createElement("li",{className:"event","data-date":"Friday"},r.a.createElement("p",null,"15 - 03 - 2019"),r.a.createElement("div",{className:"events"},r.a.createElement("h3",null,r.a.createElement("span",null,"PUBG"),r.a.createElement("span",null,"[ Coming soon ]")),r.a.createElement("h3",null,r.a.createElement("span",null,"Counter Strike: Go"),r.a.createElement("span",null,"[ Coming soon ]"))))))},t}(n.Component),F=a(257),H=(a(258),function(e){return r.a.createElement("section",{className:"default-section",id:"section-3",style:e.backgroundStyle},r.a.createElement("h1",{className:"section-heading sponsors"},"Sponsors"),r.a.createElement(b.StaticQuery,{query:"2442068677",render:function(e){return r.a.createElement("div",{className:"sponsor-blurbs"},e.allFile.edges.map(function(e){var t=e.node;return r.a.createElement("div",{className:"sponsor",key:t.id},r.a.createElement(y.a,{fluid:t.childImageSharp.fluid}),t.name)}))},data:F}))}),z=(a(259),function(e){function t(){return e.apply(this,arguments)||this}return p()(t,e),t.prototype.render=function(){return r.a.createElement("section",{id:"section-4",className:"default-section",style:this.props.backgroundStyle},r.a.createElement("h1",{className:"section-heading locate-us"},"Locate Us"),r.a.createElement("div",{className:"mapouter"},r.a.createElement("div",{className:"gmap_canvas"},r.a.createElement("iframe",{title:"location",id:"gmap_canvas",src:"https://maps.google.com/maps?q=university%20of%20calcutta%2C%20technology%20campus&t=&z=15&ie=UTF8&iwloc=&output=embed",frameBorder:"0",scrolling:"no",marginHeight:"0",marginWidth:"0"}))),r.a.createElement("div",{className:"location-description"},"(Block) JD-2, Salt Lake City, Sector 3, Kolkata - 700106"))},t}(n.Component));t.default=function(){var e=r.a.createRef();return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"Home",keywords:["reflexons","calcutta university","coding competition","games","counter strike"]}),r.a.createElement(i.a,null,r.a.createElement(c,{elements:["section-1","section-2","section-3","section-4"]}),r.a.createElement("div",{className:"social-media"},r.a.createElement(l.OutboundLink,{href:"https://www.facebook.com/pg/ReflexonsCU-384052642413499/"},r.a.createElement("i",{className:"fab fa-facebook-f",style:{padding:"0.3em 0.5em"}})),r.a.createElement(l.OutboundLink,{href:"https://www.instagram.com/reflexons.2019/"},r.a.createElement("i",{className:"fab fa-instagram"})),r.a.createElement(l.OutboundLink,{href:"mailto:reflexons.2019@gmail.com"},r.a.createElement("i",{className:"fas fa-at"}))),r.a.createElement("div",{ref:e},r.a.createElement(E,{backgroundStyle:{background:"linear-gradient(180deg, #000000a5, #000000ff),url("+h.a+") center background fixed"}}),r.a.createElement(L,{backgroundStyle:{background:"linear-gradient(180deg, #00000000 0%, #c1a16616 35%, #c1a16612 75%, #00000000 100%)"}}),r.a.createElement(H,{backgroundStyle:{background:"linear-gradient(#00000066, #d0d0d02e, #00000011)"}}),r.a.createElement(z,{backgroundStyle:{background:"linear-gradient(180deg, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.68)),url("+d.a+") background fixed"}}))))}},151:function(e,t,a){var n=a(25).f,r=Function.prototype,l=/^\s*function ([^ (]*)/;"name"in r||a(17)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(l)[1]}catch(e){return""}}})},244:function(e,t,a){},245:function(e,t,a){},246:function(e,t,a){e.exports=a.p+"static/cu-top-69f0a8f577813fa4b9bed53bb7017390.jpg"},247:function(e,t,a){e.exports=a.p+"static/cu-entrance-15e1501c60585a1d3e951f05c50c7364.jpg"},248:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAAEYUlEQVQ4y12V209cVRTG14CVlpRSTeqDttFSLsMw58yZGR4aG0198Ua1XIeWewdmYLjMheFShstc2jClcik0VIgiNZFWK2lrrUWCjcTWvvTFxETUB+Mf4Zsv/s6ZIRR3srLP3rPXt771rbX3iOijqNWYJL9exBEVcUYzZXscObVXijucUuJfkKK2V9gxybOjxG/ahWEMi48Nt0mciQxjXezzizXwpaj9UVEHLok2HGF9XSzd10XpdYul8x3OdGCFxnlze8qvyKODde0KCAtFbIMPcPxbbEOPxTH2nSh9a5x7IsWdP4s1eJMAk2I7vwSRJsOn9g+RwhbTs7T3sPGiFHeVijq4IKWJX0QJb0lJzxYsf2L/Kew2sTUx+x4AvEqQCQIPc+bkDhn3dspdx0UJLYkt4hf72J+wegzgfcCmkSHMnCS9m2Lu+BrAFeYvSHMFbRcJcoNvj+RVH9lhqPSeJNo10SLrpHOXVD3iiH0ojgR24QNxjpeJGqmXoo64FLbNYFPoNc08K4WttwGdEbPnvR1AbXgF0L8ACog9Wg5YpTjirgxtqCVb9Y7v083mG9unticyir0fATSH1ldSoK2TML6EBGVpdqE3qOS3pLUBcNhgZo+ehV31c1qfN1epX81V6r5hvp2jnpvP0vxBsfT0A3oV00F1xvNIMoaeuULVNgFsEvvoKtptUb0EvXhKnMn3s2w9/QettY8OWcv/PaRU/HNQqbufqQ24TY5ojVh7u9Jg08xTMF2SgpZ3qXCglGI0iB3tnPFfAX0CW3SM9GfZAt251jM/HFAabmWrnon9qns2y+YPiT1eTbEqIdIG4GeAzVGYKclvnNMBVbRrFPsIgLHfSHlTtKFlAAM6oM4wR21ZhG04R21e0hkiRxWy1KJzpVhDg0jlxcdP2jC0dB7FuSIN+JR0Q4CW6ZV93hYIwvAhzGb2aL2+A0rjyl5b9wCV13V2cbYVpj58g2QVhJwZDQNVovZdRLsNKb3YykEOj1GUmMtkH6nTC5OhnW/G2UUAf6bxHaOtosMQGEWiCKn3iDbqguHLelE6AbwC07tsDJNGjTgvVKQYxGpgU2nsOeLlNPskvfoxQJP8No7mEfq3DwIUKdQtx2oPp1snfIxeSiLquhS6P2HdiU4VOFVz+Exar3LjxjhGPwdoAmZJyCzTf71kF+Tadctrp1/guYqZpLDcRJXaJL9pFbsD8B0YbxA9JKXcEtIHtBLhk7BbIN3L/MbLE75Fuw0CWrVzS7afnuL243T/74CtSX7DOsCPpKD5HjIkUprGT9NaUwAsA0zPxr7iewbQesmr3Z9+E016UVLPjhI8DKsQoNyEriSBxumvWZr1BjIsGHtq3z1AH5L294aWlq5FXqm3dhEzhv5Kb4/XL5uIquJwVrQRHz12jrUf53nmHwH8lLlZzF6L5LlekoLGbMPvaKVeCz5sgykgtV+veKa8mpbD7FF5Rbj43re5Zm9iJ1hfJYsT8v+h/3WkfOQ/HQ53YiewS0kAAAAASUVORK5CYII=",aspectRatio:1.003921568627451,src:"/static/504396c60f29f54ac5a3db4e899899a1/9146f/logo.png",srcSet:"/static/504396c60f29f54ac5a3db4e899899a1/3e547/logo.png 200w,\n/static/504396c60f29f54ac5a3db4e899899a1/9146f/logo.png 256w",sizes:"(max-width: 256px) 100vw, 256px"}}}}}},249:function(e,t,a){},250:function(e){e.exports=[{slug:"codecombat",modalHeading:"Code Combat",eventType:"For college students of any discipline",fees:"₹120 per team",maxTeam:"2",languages:"C, C++, Java, Python",details:{disclaimer_S1:["Date: 14th March, 2019","Time: 11:30 AM IST","Each student must carry their college ID with themselves"],disclaimer_S2:["In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Arkadeep Baksi",phone:"8910945615"},{name:"Shankhanil Ghosh",phone:"7872524241"}],rules:[{ruleID:"1",rule:"The test will have only programming questions"},{ruleID:"2",rule:"The contest is divided into two rounds,each consisting of 5 questions,each with 2 hours duration"},{ruleID:"3",rule:"Round 1 will act as a qualification portal for teams to participate in Round 2."},{ruleID:"4",rule:"The test will have only programming questions"},{ruleID:"5",rule:"The team with maximum score and minimum duration wins."},{ruleID:"6",rule:"The team with highest score and lowest time wins the event."},{ruleID:"7",rule:"Standard marking metric based on time consumed and number of accepted test-cases"},{ruleID:"8",rule:"Every team must have at least one active Hackerearth ID"},{ruleID:"Note #1",rule:"Before you attempt programming questions, you should choose a language from the given list"},{ruleID:"Note #2",rule:"All inputs for the programming problems are from STDIN and output to STDOUT"},{ruleID:"Note #3",rule:"To understand more about the judging environment, time limits, etc. you can read information about the​ ​HackerEarth judge​"},{ruleID:"Note #4",rule:"Programming questions have a ​Compile & Run​ option which you can use to run your solution against sample test cases before submitting it"},{ruleID:"Note #5",rule:"You can submit the solution for a programming problem as many times as you want. For subjective and objective problems, you can change your answer as many times as you want"}]}},{slug:"codebeta",modalHeading:"Code Beta",eventType:"Only for First Years and School Students",fees:"₹60 per team",maxTeam:"2",languages:"C, C++, Java",details:{disclaimer_S1:["Date: 13th March, 2019","Time: 11:00 AM IST","Each student must carry their college ID with themselves","If found the student is not a first year or school student then they will be disqualified on spot"],disclaimer_S2:["In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Sayangdipto Chakroborty",phone:"9163825442"},{name:"Sounak Saha",phone:"8017029669"}],rules:[{ruleID:"1",rule:"One single sprint round, 8 questions in 2 hours"},{ruleID:"2",rule:"The team with maximum score and minimum duration wins"},{ruleID:"3",rule:"The test will have only Programming Questions"},{ruleID:"4",rule:"Marking will occur based on correct test case outputs,within required execution time"},{ruleID:"5",rule:"Standard marking metric based on time consumed and number of accepted test-cases"},{ruleID:"6",rule:"Every team must have at least one active Hackerearth ID"},{ruleID:"Note #1",rule:"Test duration: 2 hrs"},{ruleID:"Note #2",rule:"Ensure that your email ID is correct"},{ruleID:"Note #3",rule:"Click ​Submit​ after you answer each question"}]}},{slug:"bughunt",modalHeading:"Bug Hunt",eventType:"Open for all",fees:"₹100 per team",maxTeam:"2",languages:"C, C++",details:{disclaimer_S1:["Each student must carry their college ID with themselves","Participation in this contest will be as a team of maximum two and all the team members MUST be from the same college"],disclaimer_S2:["Do not try any dishonest or unfair means to move up the rank tables","In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Arkadeep Baksi",phone:"8910945615"}],rules:[{ruleID:"1",rule:"The teams will be given 75 minutes to complete the contest"},{ruleID:"2",rule:"Each team will be given a choice to select any one of the following Computer languages in which they would like to try their mettle"},{ruleID:"3",rule:"There will be 8 problems in each of the aforesaid languages .The problems will consist of Bug-ridden codes in the respective languages. There can be Syntactical, Logical as well as Runtime Errors in the given codes"},{ruleID:"4",rule:"The aim of each team should be to provide error - free codes that would align with the problem expectation . Also more credits will be given to the codes with minimum modifications relative to the code given"},{ruleID:"5",rule:"The team that identifies, corrects all the errors and provides a code with minimum modifications relative to the code given will be awarded the maximum marks"},{ruleID:"8",rule:"The team with maximum cumulative marks on all the problems will emerge as the Winner"},{ruleID:"9",rule:"The Problem-Set in all the allowed Languages will be of the same standard to assure Neutrality"}]}},{slug:"quiz",modalHeading:"Quiz",eventType:"Open for all",fees:"₹50 (individual) OR, ₹100 (per team)",maxTeam:"4",languages:"",details:{disclaimer_S1:["Each student must carry their college ID with themselves","Participating contestants should try to maintain formal dress code"],disclaimer_S2:["In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Sushmita Kumari",phone:"9304850228"},{name:"Shankhanil Ghosh",phone:"7872524241 OR 8240384027"}],rules:[{ruleID:"1",rule:"There will be 3 rounds of quiz and each round will eliminate one/more team(s)"},{ruleID:"2",rule:"The final round of quiz will be contested between 2 final teams"},{ruleID:"3",rule:"The detailed rules and regulations of each round of the game would be described to the contestants before the beginning of each round"},{ruleID:"Prizes",rule:"The winning team will be given a prize money of ₹1000/- and the runners-up will be awarded a prize money of ₹500/-"}]}},{slug:"debate",modalHeading:"Debate",eventType:"Open for all",fees:"₹50 per team",maxTeam:"2",languages:"",details:{disclaimer_S1:["Each student must carry their college ID with themselves","Participating contestants should try to maintain formal dress code"],disclaimer_S2:["In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Sushmita Kumari",phone:"9304850228"},{name:"Shankhanil Ghosh",phone:"7872524241 OR 8240384027"}],rules:[{ruleID:"1",rule:"There will be 3 rounds of debate competition"},{ruleID:"2",rule:"In the initial round, all the participants will be divided into groups (of less than 8 members) and a Group Discussion will be held"},{ruleID:"3",rule:"The top participants from the 1st round of the competition, will be selected for the 2nd round of competition, where the debate will be held in form of an extempore. Top 2 participants would be qualified into the 3rd and final round"},{ruleID:"4",rule:"3rd round will consist of a debate in which each participants would have to defend his or her point of view on a given topic, which will be given at the venue. The participant with the best argument would be declared winner"},{ruleID:"Prizes",rule:"The winner team would be awarded a prize money ₹1000/-. The runner’s up team would be awarded a prize money ₹500/-"}]}},{slug:"photography",modalHeading:"Photography",eventType:"Open for all",fees:"₹100 per team",maxTeam:"1",languages:"",details:{disclaimer_S1:["Each student must carry their college ID with themselves"],disclaimer_S2:["In case of any disputes, the decision of the event coordinator will be final"],contact:[{name:"Ashita Gupta",phone:"9830878897"},{name:"Hiya Das",phone:"9475916985"}],rules:[{ruleID:"1",rule:"Photographs will be judged on the following parameters:- Composition, Creativity, Quality of the image"},{ruleID:"2",rule:"Do not resubmit your photos"},{ruleID:"3",rule:"Photos must be your own work, if we suspect that the work is not your own it shall be removed with an immediate effect."},{ruleID:"4",rule:"Submit your photos for prelims at our photography link on the day before the event.(coming soon)"},{ruleID:"5",rule:"The theme of finals will be announced at the day of the event."}]}}]},251:function(e,t,a){e.exports=a.p+"static/codebeta-2c0a473ce29c3cf55e9b35c22dd331a7.pdf"},252:function(e,t,a){e.exports=a.p+"static/bughunt-01b0f0bc32d8c2b56570edf173e08135.pdf"},253:function(e,t,a){e.exports=a.p+"static/debate-a00b54538b141d999bbd18cb0d33319d.pdf"},254:function(e,t,a){e.exports=a.p+"static/quiz-fe452775b1d591d93031c1dba0a67bad.pdf"},255:function(e,t,a){e.exports=a.p+"static/csgo-06677e0cc3cdcaea10958aaba8a6a10f.pdf"},256:function(e,t,a){},257:function(e){e.exports={data:{allFile:{edges:[{node:{id:"cfb8e710-08e9-514f-8b44-556ffefc8468",name:"Media & coverage partner",childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAC4iAAAuIgGq4t2SAAACpUlEQVQoz31ReUjTcRz9evyV5IFhGYtMdHNaYJ7hqDQPLI+WFDMxw8wjlk6budQ8MlBWoWFtDc8CTSUVxdBS08S5sM050+k805Vg88I5Xfvtt9+nJf2bD94/j/ceDx5C/9BLto+eSKZ2z2WRFJNJjr39LlT6oBfN41sigzeRGi8YjYlomM5jK2Yf58yUInQA7Yc+d3LZL14xQKsf4NVWAG+tYe25BcjTrmoMwyLYbm8CZUEmqGr5oKzhq8Xh515PMG++F3o5XRKdPeU54HY06hVCto0IWaIeV/srKh4Hdpue4Oq7ZP0ON9Kw+4Kp1/FJxFZNMCwKBJgiJ02/yC/Vq7raDXMlefhaZxtoxSJQvauDmcIsfKWuChbKijem89nL6GusRws0B4GW547tcJ0AkzQT+LIMdD31hF72mdiWy4gt2Qix+WWQ2DBS+2OJWOvvxtcH+3RbYyOYIjdDP8ct0CmfFYGcdXsTSW/5irDyCGNhsEFT5EPoPghAN9BB7ApyQdtSTqx3NuJLlTzCuMwwxU6BhUcc+F6SB4scJqw8LYSfmUYtLR6U7GQYS2D0oU/+lHqc4wYaDhlTsxxAzQogNMWeoH3pYFBzbQl5XDDM59+H+exUUOSm6+SshNXxO3Gr0uiwDnl6Yu3Ug1TuJDuFJaFfYEguB1BRrZ1zwGwyCaDNGrAmG+x3tSWONRzEoMMKZu/Zw8fTXtnjsaEh0pjwKOn1MHK3DbIQ+pAP7ftyI9U5czLpGBgqDwP2xg4MVUdAwSRBmysl638ZAECbYpHp9MMM8/GUWHNxpL+ZOOK8CRoNcdgz8G3ItFZvx4re0ONd7b4nKqqsXWh/9dFrfqbDkYFmUsZFM9kNuslIVBCS0ANNRLSTSOjthIbOuOzlh3wpSOhDQX8Am9ZyktzbE9sAAAAASUVORK5CYII=",aspectRatio:2.2255555555555557,src:"/static/6fe8f2e08505977b76185a6da539a056/23cfd/Media%20%26%20coverage%20partner.png",srcSet:"/static/6fe8f2e08505977b76185a6da539a056/93c37/Media%20%26%20coverage%20partner.png 320w,\n/static/6fe8f2e08505977b76185a6da539a056/19db7/Media%20%26%20coverage%20partner.png 640w,\n/static/6fe8f2e08505977b76185a6da539a056/23cfd/Media%20%26%20coverage%20partner.png 1280w,\n/static/6fe8f2e08505977b76185a6da539a056/06536/Media%20%26%20coverage%20partner.png 1920w,\n/static/6fe8f2e08505977b76185a6da539a056/48a74/Media%20%26%20coverage%20partner.png 2003w",sizes:"(max-width: 1280px) 100vw, 1280px"}}}}]}}}},258:function(e,t,a){},259:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-index-js-01c8df8e1e6731d59b01.js.map