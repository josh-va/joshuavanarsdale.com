---
title: "Career Journey"
description: "IT Solutions Specialist | Streamlined Tech | Empowered Teams | Secured Solutions"
layout: resume
---

<script>
    function showMore(num, expand){
        var moreId = 'more' + num;
        var expandLinkId = 'expandLink' + num;
        var collapseLinkId = 'collapseLink' + num;
        if (expand){
            document.getElementById(expandLinkId).style.display = "none";
            document.getElementById(collapseLinkId).style.display = "inline";
            document.getElementById(moreId).style.display = "block";
            document.getElementById(moreId).classList.remove('resume-animate-out');
            document.getElementById(moreId).classList.add('resume-animate-in');
        } else {
            function transitionEnd(){
                console.log('end');
                document.getElementById(moreId).style.display = 'none';
                document.getElementById(collapseLinkId).style.display = "none";
                document.getElementById(expandLinkId).style.display = "inline";
                document.getElementById(moreId).removeEventListener('animationend', transitionEnd);
            }
            document.getElementById(moreId).addEventListener('animationend', transitionEnd);  
            
            document.getElementById(moreId).classList.remove('resume-animate-in');
            document.getElementById(moreId).classList.add('resume-animate-out');
                
        }   
        
    }
</script>

# Career Journey

{{< timeline >}}

{{< timelineItem icon="location-dot" header="Independent Technology Consultant" badge="Feb '23 - Sept '24" subheader="Self-Employed | Sydney, Australia" >}}

<ul style="padding-top:10px">
<li>Delivered end-to-end IT and communication projects, ensuring client goals and cost-efficiency.</li>
<li>Migrated IT infrastructure during office relocation, cutting costs by over 80%.</li>
<li>Conducted website audits, resolving usability and content gaps to boost engagement.</li>
</ul>

<div id="contentContainer">
    <span id="contentText">
        <p>As an Independent Technology Consultant, I provided tailored IT and communications solutions to clients, with a strong emphasis on cost-efficiency and operational effectiveness. I managed every aspect of project lifecycles, from initial consultation and discovery phases to final implementation and handover, working autonomously to ensure seamless execution.</p>
        <p id='more1' style ="display:none">In one standout project, I managed an office relocation for a client, which involved the migration of their IT and communications infrastructure. By identifying overprovisioned services from prior consultants, I achieved a dramatic reduction in operational costs while maintaining the client's core requirements. Additionally, I implemented a telephony solution that reduced costs by over 60%, demonstrating my ability to align technical implementations with business objectives.
        Another key focus area was software quality assurance, where I led acceptance and regression testing for web and mobile applications. These efforts ensured that client software releases consistently met high-quality standards. </p>
    </span> 
    <a href="javascript:showMore('1', true)" id="expandLink1" style="display:inline"> See More... </a>
    <a href="javascript:showMore('1', false)" id="collapseLink1" style="display:none"> See Less... </a>
</div>

{{< keywordList >}}
{{< keyword icon="lightbulb">}}IT Infrastructure Optimization{{< /keyword >}}
{{< keyword icon="mug-hot">}}Project Management{{< /keyword >}}
{{< keyword icon="bug">}}Software Quality Assurance{{< /keyword >}}
{{< keyword icon="circle-info">}}Technical Documentation{{< /keyword >}}
{{< keyword icon="check">}}Website Usability Auditing{{< /keyword >}}
{{< keyword icon="scale-balanced">}}Cost Reduction Strategy{{< /keyword >}}
{{< keyword icon="comment">}}Client Communication & Relationship Management{{< /keyword >}}
{{< /keywordList >}}
{{< /timelineItem >}}

{{< timelineItem icon="location-dot" header="Internal IT & Quality Assurance Administrator" badge="Jan '19 - Nov '22" subheader="ClickView | Sydney, Australia" >}}

<ul>
<li>Architected and managed corporate Jira Software and Jira Service Management platforms.</li>
<li>Led a deployment of an on-demand HD TV recording service to over 5000 schools across 3 countries.</li>
<li>Transitioned from on-premises to cloud-hosted telephony, reducing costs by 40%.</li>
<li>Managed ISO/IEC 27001 and Cyber Essentials Plus audits, risk assessments, and policy implementation.</li>
<li>Coordinated the company’s transition to remote and hybrid working arrangements.</li>
<li>Streamlined IT support by transitioning to a managed service provider.</li>
<li>Developed standardized software testing and communications processes.</li>
<li>Supported and administrated more than 20 business applications and software suites.</li>
</ul>
{{< /timelineItem >}}

{{< timelineItem icon="location-dot" header="IT Support Technician & GDPR Officer" badge="Jan '18 - Nov '18" subheader="FAKRO GB | Derbyshire, England" >}}

<ul>
<li>Developed a GDPR compliance strategy, ensuring data protection regulations were met.</li>
<li>Managed the corporate Kerridge K8 enterprise resource planning system.</li>
<li>Created a JavaScript web app to measure roof pitch angles.</li>
<li>Automated sales reporting processes, saving 8 hours of manual data entry weekly.</li>

</ul>
{{< /timelineItem >}}

{{< /timeline >}}
