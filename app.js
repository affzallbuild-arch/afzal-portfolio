
// Premium interactions kept dependency-free so GitHub Pages cannot fail because of a missing library.
document.addEventListener("DOMContentLoaded",()=>{
  const menu=document.querySelector(".menu-btn"), links=document.querySelector(".links");
  if(menu&&links)menu.addEventListener("click",()=>links.classList.toggle("open"));

  const typed=document.getElementById("typed");
  if(typed){
    const words=["EXPERIENCES.","SYSTEMS.","PRODUCTS.","THE FUTURE."];
    let wi=0, ci=0, deleting=false;
    const tick=()=>{
      const word=words[wi];
      typed.textContent=word.slice(0,ci);
      if(!deleting && ci<word.length){ci++;setTimeout(tick,85)}
      else if(!deleting){deleting=true;setTimeout(tick,1300)}
      else if(ci>0){ci--;setTimeout(tick,45)}
      else{deleting=false;wi=(wi+1)%words.length;setTimeout(tick,250)}
    }; tick();
  }

  document.querySelectorAll(".tilt-card").forEach(card=>{
    card.addEventListener("pointermove",e=>{
      const r=card.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;
      card.style.transform=`perspective(800px) rotateY(${x*7}deg) rotateX(${y*-7}deg) translateY(-4px)`;
    });
    card.addEventListener("pointerleave",()=>card.style.transform="");
  });

  const dishes=[];
  document.querySelectorAll("[data-dish]").forEach(b=>b.addEventListener("click",()=>{
    dishes.push(b.dataset.dish); const s=document.getElementById("orderStatus");
    if(s)s.textContent=`TABLE 07 · ${dishes.length} ITEM${dishes.length>1?"S":""} SELECTED`;
  }));
  const place=document.getElementById("placeOrder");
  if(place)place.addEventListener("click",()=>{
    const s=document.getElementById("orderStatus");
    if(s)s.textContent=dishes.length?"LIVE ORDER → KITCHEN STATUS: PREPARING":"SELECT A DISH FIRST";
  });

  const form=document.getElementById("contactForm");
  if(form)form.addEventListener("submit",e=>{
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const email=document.getElementById("email").value.trim();
    const company=document.getElementById("company").value.trim()||"Not provided";
    const type=document.getElementById("type").value;
    const budget=document.getElementById("budget").value;
    const timeline=document.getElementById("timeline").value;
    const message=document.getElementById("message").value.trim();
    // IMPORTANT: replace this one value with the owner's real email before publishing.
    const RECEIVER_EMAIL="YOUR_EMAIL_HERE@example.com";
    const subject=encodeURIComponent(`New project enquiry from ${name}`);
    const body=encodeURIComponent(`NEW PROJECT ENQUIRY\n\nName: ${name}\nEmail: ${email}\nCompany: ${company}\nProject type: ${type}\nBudget: ${budget}\nTimeline: ${timeline}\n\nPROJECT BRIEF:\n${message}`);
    const msg=document.getElementById("formmsg");
    if(RECEIVER_EMAIL.includes("YOUR_EMAIL_HERE")){
      msg.textContent="Set your real recipient email in app.js (RECEIVER_EMAIL), then the Send button will open a ready-to-send email.";
      msg.style.color="#ffcc66";
      return;
    }
    window.location.href=`mailto:${RECEIVER_EMAIL}?subject=${subject}&body=${body}`;
    msg.textContent="Opening your email app with the enquiry pre-filled…";
  });
});
