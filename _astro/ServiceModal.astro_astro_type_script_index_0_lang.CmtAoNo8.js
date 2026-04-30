const m={"E-Mobility":{title:"Charging Infrastructure Development (E-Mobility)",images:["/images/service/Charging Infrastructure.jpg","https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1000&h=600&fit=crop"],details:`
                <p>We design and deliver <strong>end-to-end EV charging solutions</strong> that power the future of mobility—from concept to commissioning.</p>
                <p>Our expertise spans slow charging installations for homes, offices, and restaurants, as well as DC fast charging infrastructure for commercial buildings, businesses, and large-scale charging depots.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Our Comprehensive Services Include:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Site assessment and load analysis</li>
                    <li>LV power distribution system design</li>
                    <li>Installation of AC & DC fast chargers</li>
                    <li>Protection systems, grounding, and lightning protection</li>
                    <li>Testing, commissioning, and maintenance</li>
                </ul>
                <div class="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                    <p class="text-sm text-blue-900"><strong>Why it matters:</strong> We enable reliable, scalable, and future-ready charging networks supporting the transition to clean transport across Rwanda.</p>
                </div>
            `},"Electrical-Install":{title:"Electrical Installation",images:["/images/service/Electrical Installation.jpg"],details:`
                <p>Professional electrical installation services for residential, commercial, and industrial projects — built for safety, efficiency, and long-term reliability.</p>
                <p>We understand that a robust electrical infrastructure is the backbone of any successful facility. Our team ensures that every installation complies with the highest international safety standards, utilizing premium materials and modern techniques to guarantee longevity.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Key Focus Areas:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Complete building wiring and lighting systems</li>
                    <li>Power distribution networks</li>
                    <li>Grounding and earthing solutions</li>
                    <li>System upgrades and retrofitting</li>
                </ul>
            `},"Industrial-Automation":{title:"Industrial Automation",images:["/images/service/Industrial Automation.jpg","https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&h=600&fit=crop"],details:`
                <p>Smart automation solutions using PLCs, HMIs, and IoT technologies to improve productivity, reduce downtime, and optimize operations.</p>
                <p>We help industries transition to modern manufacturing by implementing advanced control systems that streamline processing. Whether you need a simple relay logic upgrade or a full-scale SCADA system integration, our experts deliver tailor-made automation strategies.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Automation Capabilities:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Programmable Logic Controller (PLC) programming</li>
                    <li>Human-Machine Interface (HMI) design</li>
                    <li>Motor control and drive systems</li>
                    <li>Real-time monitoring and data acquisition</li>
                </ul>
            `},Engineering:{title:"Engineering Consultancy",images:["/images/service/Engineering Consultancy.jpg","https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1000&h=600&fit=crop"],details:`
                <p>Our expert technical services guide your projects from initial conception and study through to successful implementation.</p>
                <p>Pinnacle Technologies acts as your trusted technical partner, ensuring your investments are sound, compliant, and highly optimized for their intended purpose.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Expert Guidance From Concept to Execution:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Comprehensive feasibility studies</li>
                    <li>Electrical system design and drafting</li>
                    <li>Technical advisory and compliance auditing</li>
                    <li>Project optimization and cost management</li>
                </ul>
            `},"Power-Systems":{title:"Power Systems Solutions",images:["/images/service/Power Systems.jpg","https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1000&h=600&fit=crop"],details:`
                <p>Comprehensive services in power generation, transmission, and distribution, including transformer systems, protection, and grid integration.</p>
                <p>We provide solutions to support sustainable power systems and infrastructure. Our expertise covers the entire power value chain, ensuring that energy is delivered safely, efficiently, and consistently to where it is needed most.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">System Solutions Include:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Substation design and installation</li>
                    <li>Transformer testing and maintenance</li>
                    <li>Power quality analysis and correction</li>
                    <li>Grid integration for renewable energy sources</li>
                </ul>
            `},"LV-Panel":{title:"LV Panel Design & Installation",images:["/images/service/LV Panel Design.jpg"],details:`
                <p>Custom-built low-voltage panels designed, fabricated, and installed to meet project-specific requirements and standards.</p>
                <p>Our LV panels are engineered for optimal power distribution and motor control. We handle everything from the initial schematic design to enclosure fabrication, wiring, and rigorous factory acceptance testing before on-site installation.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Panel Types We Build:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Main Distribution Boards (MDBs)</li>
                    <li>Motor Control Centers (MCCs)</li>
                    <li>Automatic Transfer Switches (ATS)</li>
                    <li>Power Factor Correction (PFC) panels</li>
                </ul>
            `},Maintenance:{title:"Maintenance & Technical Services",images:["/images/service/Maintenance.jpg"],details:`
                <p>Reliable maintenance and support services to ensure system performance, safety, and longevity.</p>
                <p>We deliver high-quality technical maintenance tailored to industry standards. Our proactive and reactive maintenance programs are designed to minimize downtime, prevent costly failures, and extend the lifespan of your critical electromechanical infrastructure.</p>
                <h3 class="text-lg font-bold text-blue-950 mt-6 mb-3">Maintenance Capabilities:</h3>
                <ul class="space-y-2 list-disc ml-5 mb-6 text-slate-700">
                    <li>Preventative and scheduled servicing</li>
                    <li>Emergency fault-finding and troubleshooting</li>
                    <li>Thermal imaging and load testing</li>
                    <li>System performance optimization</li>
                </ul>
            `}};let i=0,s=0;const n=document.getElementById("service-modal"),a=document.getElementById("service-modal-content"),r=document.getElementById("modal-slides"),c=document.getElementById("modal-indicators");window.openPopup=function(e){const t=m[e];if(!t)return;const u=document.getElementById("modal-title");u.textContent=t.title;const g=document.getElementById("modal-body");g.innerHTML=t.details,i=0,s=t.images.length,r.innerHTML="",c.innerHTML="",t.images.forEach((p,d)=>{const l=document.createElement("img");l.src=p,l.className="w-full h-full object-cover flex-shrink-0",r.appendChild(l);const o=document.createElement("button");o.className=`w-2 h-2 rounded-full transition-colors shadow-sm ${d===0?"bg-white":"bg-white/50"}`,o.onclick=()=>window.goToSlide(d),c.appendChild(o)}),n.classList.remove("hidden"),n.classList.add("flex"),n.offsetWidth,n.classList.remove("opacity-0"),a.classList.remove("scale-95","translate-y-10","opacity-0"),a.classList.add("scale-100","translate-y-0","opacity-100"),history.pushState(null,"",`#${e}`),document.body.style.overflow="hidden"};window.closePopup=function(){n.classList.add("opacity-0"),a.classList.remove("scale-100","translate-y-0","opacity-100"),a.classList.add("scale-95","translate-y-10","opacity-0"),setTimeout(()=>{n.classList.add("hidden"),n.classList.remove("flex")},500),history.pushState(null,"",window.location.pathname),document.body.style.overflow="auto"};n?.addEventListener("click",e=>{e.target===n&&window.closePopup()});window.goToSlide=function(e){i=e,r.style.transform=`translateX(-${i*100}%)`,h()};window.nextSlide=function(){i=(i+1)%s,window.goToSlide(i)};window.prevSlide=function(){i=(i-1+s)%s,window.goToSlide(i)};function h(){const e=c.children;for(let t=0;t<e.length;t++)e[t].className=`w-2 h-2 rounded-full transition-colors shadow-sm ${t===i?"bg-white":"bg-white/50"}`}document.addEventListener("DOMContentLoaded",()=>{const e=window.location.hash.substring(1);e&&m[e]&&setTimeout(()=>window.openPopup(e),400)});
