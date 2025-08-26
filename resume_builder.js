// Resume Builder JS
(function(){
  // Elements
  const els = {
    name: document.getElementById('name'),
    role: document.getElementById('role'),
    email: document.getElementById('email'),
    phone: document.getElementById('phone'),
    location: document.getElementById('location'),
    link: document.getElementById('link'),
    photo: document.getElementById('photo'),
    summary: document.getElementById('summary'),
    skills: document.getElementById('skills'),
    education: document.getElementById('education'),
    projects: document.getElementById('projects'),
    experience: document.getElementById('experience'),
    achievements: document.getElementById('achievements'),

    // preview nodes
    previewName: document.getElementById('previewName'),
    previewRole: document.getElementById('previewRole'),
    previewEmail: document.getElementById('previewEmail'),
    previewPhone: document.getElementById('previewPhone'),
    previewLocation: document.getElementById('previewLocation'),
    previewLink: document.getElementById('previewLink'),
    previewPhotoBox: document.getElementById('previewPhotoBox'),
    previewPhotoDefault: document.getElementById('previewPhotoDefault'),
    previewSummary: document.getElementById('previewSummary'),
    previewSkills: document.getElementById('previewSkills'),
    previewEducation: document.getElementById('previewEducation'),
    previewProjects: document.getElementById('previewProjects'),
    previewExperience: document.getElementById('previewExperience'),
    previewAchievements: document.getElementById('previewAchievements'),

    classicName: document.getElementById('classicName'),
    classicRole: document.getElementById('classicRole'),
    classicContact: document.getElementById('classicContact'),
    classicSummary: document.getElementById('classicSummary'),
    classicSkills: document.getElementById('classicSkills'),
    classicEducation: document.getElementById('classicEducation'),
    classicProjects: document.getElementById('classicProjects'),
    classicExperience: document.getElementById('classicExperience'),
    classicAchievements: document.getElementById('classicAchievements'),

    templateSidebar: document.getElementById('templateSidebar'),
    templateClassic: document.getElementById('templateClassic'),

    templateToggle: document.getElementById('templateToggle'),
    downloadPdfBtn: document.getElementById('downloadPdfBtn'),
    resetBtn: document.getElementById('resetBtn'),
    previewSizeBtn: document.getElementById('previewSizeBtn'),
  };

  // helpers
  function setText(node, text){ node.textContent = text || ''; }
  function htmlEscape(s){ if(!s) return ''; return s.replaceAll('<','&lt;').replaceAll('>','&gt;'); }

  // update functions
  function updatePreview(){
    setText(els.previewName, els.name.value || 'Your Name');
    setText(els.previewRole, els.role.value || 'Role / Title');
    setText(els.previewEmail, els.email.value || 'email@example.com');
    setText(els.previewPhone, els.phone.value || '+91 XXXXX');
    setText(els.previewLocation, els.location.value || 'City, Country');
    setText(els.previewLink, els.link.value || 'linkedin.com/you');
    setText(els.previewSummary, els.summary.value || 'Short professional summary...');
    setText(els.classicSummary, els.summary.value || 'Short professional summary...');
    setText(els.classicName, els.name.value || 'Your Name');
    setText(els.classicRole, (els.role.value ? els.role.value + ' • ' : '') + (els.location.value || 'City'));

    const contactLine = `${els.email.value || 'email@example.com'} • ${els.phone.value || '+91 XXXXX'}${els.link.value ? ' • ' + els.link.value : ''}`;
    setText(els.classicContact, contactLine);

    // skills -> render pills for sidebar, comma list for classic
    const skillsArr = (els.skills.value || '').split(',').map(s=>s.trim()).filter(Boolean);
    els.previewSkills.innerHTML = '';
    els.classicSkills.innerHTML = '';
    skillsArr.forEach(s=>{
      const pill = document.createElement('span');
      pill.className = 'skill-pill';
      pill.textContent = s;
      els.previewSkills.appendChild(pill);
    });
    if(skillsArr.length) els.classicSkills.textContent = skillsArr.join(', ');

    // education, projects, experience, achievements: convert lines to list
    function renderLines(source, targetNode, separator='<br>'){
      const lines = (source.value||'').split(/\r?\n/).map(l=>l.trim()).filter(Boolean);
      if(lines.length===0){ targetNode.innerHTML=''; return; }
      targetNode.innerHTML = lines.map(l=> htmlEscape(l)).join(separator + '\n');
    }
    renderLines(els.education, els.previewEducation, '<br>');
    renderLines(els.projects, els.previewProjects, '<br><br>');
    renderLines(els.experience, els.previewExperience, '<br><br>');
    renderLines(els.achievements, els.previewAchievements, '<br>');

    // classic section copies
    els.classicEducation.innerHTML = els.previewEducation.innerHTML;
    els.classicProjects.innerHTML = els.previewProjects.innerHTML;
    els.classicExperience.innerHTML = els.previewExperience.innerHTML;
    els.classicAchievements.innerHTML = els.previewAchievements.innerHTML;
  }

  // photo handling
  els.photo.addEventListener('change', e=>{
    const f = e.target.files && e.target.files[0];
    if(!f) return;
    const reader = new FileReader();
    reader.onload = ()=> {
      // create img
      els.previewPhotoBox.innerHTML = `<img src="${reader.result}" alt="photo">`;
    };
    reader.readAsDataURL(f);
  });

  // wire inputs
  [
    els.name, els.role, els.email, els.phone, els.location, els.link,
    els.summary, els.skills, els.education, els.projects, els.experience, els.achievements
  ].forEach(inp => inp.addEventListener('input', updatePreview));

  // initial call
  updatePreview();

  // template toggle
  document.querySelectorAll('#templateToggle .template-item').forEach(el=>{
    el.addEventListener('click', ()=>{
      document.querySelectorAll('#templateToggle .template-item').forEach(x=>x.classList.remove('active'));
      el.classList.add('active');
      const t = el.getAttribute('data-tem');
      if(t==='sidebar'){
        els.templateSidebar.style.display = '';
        els.templateClassic.style.display = 'none';
      } else {
        els.templateSidebar.style.display = 'none';
        els.templateClassic.style.display = '';
      }
    });
  });

  // Download PDF - uses html2pdf
  els.downloadPdfBtn.addEventListener('click', async ()=>{
    // choose visible template root
    const root = (els.templateSidebar.style.display!== 'none') ? els.templateSidebar : els.templateClassic;
    // small tweak for A4 sizing
    const opt = {
      margin:       [10, 10, 10, 10], // top, left, bottom, right in mm
      filename:     (els.name.value ? els.name.value.replace(/\s+/g,'_') : 'Resume') + '.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2, useCORS: true },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    // temporary style fix: set width to A4 approx px at 96dpi (~794px) for portrait
    root.style.maxWidth = '794px';
    // generate
    try{
      await html2pdf().set(opt).from(root).save();
    }catch(err){
      alert('PDF generation failed: ' + (err && err.message || err));
    }
    root.style.maxWidth = '';
  });

  // Reset
  els.resetBtn.addEventListener('click', ()=>{
    if(!confirm('Clear form and preview?')) return;
    [
      els.name, els.role, els.email, els.phone, els.location, els.link,
      els.summary, els.skills, els.education, els.projects, els.experience, els.achievements
    ].forEach(i=> i.value = '');
    els.previewPhotoBox.innerHTML = '<div id="previewPhotoDefault" style="padding:6px;color:#003b6f;font-weight:700">PHOTO</div>';
    updatePreview();
  });

  // preview size toggle
  let a4 = true;
  els.previewSizeBtn.addEventListener('click', ()=>{
    a4 = !a4;
    if(a4){
      els.templateSidebar.style.transform = 'scale(1)';
      els.templateClassic.style.transform = 'scale(1)';
      els.previewSizeBtn.textContent = 'A4 / Screen';
    } else {
      els.templateSidebar.style.transform = 'scale(0.8)';
      els.templateClassic.style.transform = 'scale(0.8)';
      els.previewSizeBtn.textContent = 'Zoom Out';
    }
  });

})();
