
const menu=document.querySelector('.menu'),links=document.querySelector('.links');
if(menu&&links)menu.addEventListener('click',()=>links.classList.toggle('open'));

const search=document.querySelector('#guideSearch');
if(search){
 search.addEventListener('input',()=>{
  const q=search.value.toLowerCase().trim();
  document.querySelectorAll('[data-guide]').forEach(card=>{
   card.style.display=(!q||card.innerText.toLowerCase().includes(q))?'block':'none';
  });
 });
}
const use=document.querySelector('#use'),volume=document.querySelector('#volume'),result=document.querySelector('#result');
function recommend(){
 if(!use||!volume||!result)return;
 let title="Start with the basic setup guide";
 let desc="For a simple setup task, review the equipment manual and follow the normal installation sequence.";
 if(use.value==="trouble"&&volume.value==="low"){
  title="Check the simple causes first";
  desc="Review power, connections, settings, visible obstructions, and the device's basic status indicators before attempting a repair.";
 }else if(use.value==="maintenance"){
  title="Follow a routine maintenance checklist";
  desc="Start with cleaning, inspection, safe shutdown, and the maintenance steps recommended for your equipment.";
 }else if(volume.value==="medium"){
  title="Use a structured troubleshooting process";
  desc="Document the symptom, check the obvious causes, and consult model-specific documentation before replacing or opening components.";
 }else if(volume.value==="high"){
  title="Consider qualified professional service";
  desc="If the issue is complex, involves electrical or internal components, or you are unsure of the cause, professional assistance may be appropriate.";
 }
 result.style.display="block";
 result.innerHTML="<strong>"+title+"</strong><br><span>"+desc+"</span>";
}
if(use)use.addEventListener('change',recommend);
if(volume)volume.addEventListener('change',recommend);
