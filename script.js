const pages=[...document.querySelectorAll('.page')];
    const navButtons=[...document.querySelectorAll('[data-page]')];
    const navLinks=document.getElementById('navLinks');
    const hamburger=document.getElementById('hamburger');
    function showPage(id){
      pages.forEach(p=>p.classList.toggle('active',p.id===id));
      document.querySelectorAll('.nav-link').forEach(b=>b.classList.toggle('active',b.dataset.page===id));
      navLinks.classList.remove('open');
      window.scrollTo({top:0,behavior:'smooth'});
    }
    navButtons.forEach(btn=>btn.addEventListener('click',()=>showPage(btn.dataset.page)));
    hamburger.addEventListener('click',()=>navLinks.classList.toggle('open'));

    const details={
      jibon:{title:'জীবন বর্মন — Head of the Institute',body:'<p>নবদিগন্ত কোচিং সেন্টারের প্রধান হিসেবে তিনি শিক্ষার্থীদের নিয়মিত, মানসম্মত ও ফলপ্রসূ পাঠদানের মাধ্যমে আত্মবিশ্বাসী করে তুলতে কাজ করেন।</p><ul><li>ক্লাস পরিচালনা ও একাডেমিক পরিকল্পনা</li><li>প্রগ্রেস রিপোর্ট ও নিয়মিত মূল্যায়ন তদারকি</li><li>দুর্বল শিক্ষার্থীদের জন্য বিশেষ গাইডলাইন</li><li>শিক্ষার্থী ও অভিভাবকদের সঙ্গে নিয়মিত যোগাযোগ</li></ul>'},
      dhananjay:{title:'ধনঞ্জয় বর্মণ — Assistant Teacher',body:'<p>বিষয়ভিত্তিক সহায়তা, নিয়মিত অনুশীলন এবং দুর্বল শিক্ষার্থীদের বিশেষ যত্নের মাধ্যমে শিক্ষার্থীদের অগ্রগতি নিশ্চিত করেন।</p><ul><li>দৈনিক অনুশীলন ও সন্দেহ নিরসন</li><li>ক্লাস টেস্ট প্রস্তুতি</li><li>সহজ ভাষায় বিষয় ব্যাখ্যা</li></ul>'},
      rafikul:{title:'রফিকুল হক — Assistant Teacher',body:'<p>সহজ ভাষায় পড়ানো, নিয়মিত মূল্যায়ন এবং স্টাডি ম্যাটেরিয়ালের মাধ্যমে শিক্ষার্থীদের শেখার পথকে আরও কার্যকর করে তোলেন।</p><ul><li>স্টাডি ম্যাটেরিয়াল সহায়তা</li><li>নিয়মিত রিভিশন</li><li>বোর্ড প্রস্তুতির গাইডলাইন</li></ul>'}
    };
    const modal=document.getElementById('teacherModal');
    document.querySelectorAll('.details-btn').forEach(btn=>btn.addEventListener('click',()=>{
      const d=details[btn.dataset.teacher];
      document.getElementById('modalTitle').textContent=d.title;
      document.getElementById('modalBody').innerHTML=d.body;
      modal.classList.add('show');
    }));
    document.getElementById('modalClose').addEventListener('click',()=>modal.classList.remove('show'));
    modal.addEventListener('click',(e)=>{if(e.target===modal) modal.classList.remove('show')});

    const applyForm = document.getElementById('applyForm');

if(applyForm){
  applyForm.addEventListener('submit', function(e){
    e.preventDefault();

    const name = document.getElementById('studentName').value.trim();
    const cls = document.getElementById('studentClass').value.trim();
    const guardian = document.getElementById('guardianName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const msg = document.getElementById('message').value.trim();

    const phonePattern = /^[6-9]\d{9}$/;

    if(!phonePattern.test(phone)){
      alert("সঠিক ১০ সংখ্যার মোবাইল নম্বর দিন। উদাহরণ: 8653258887");
      document.getElementById('phone').focus();
      return;
    }

    const text =
      `নবদিগন্ত কোচিং সেন্টারে ভর্তি আবেদন%0A%0A` +
      `শিক্ষার্থীর নাম: ${encodeURIComponent(name)}%0A` +
      `শ্রেণি: ${encodeURIComponent(cls)}%0A` +
      `অভিভাবকের নাম: ${encodeURIComponent(guardian)}%0A` +
      `মোবাইল নম্বর: ${encodeURIComponent(phone)}%0A` +
      `বার্তা: ${encodeURIComponent(msg || 'ভর্তি সম্পর্কিত তথ্য জানতে চাই।')}`;

    window.open(`https://wa.me/918653258887?text=${text}`, '_blank');
  });
}

const phoneInput = document.getElementById('phone');

if(phoneInput){
  phoneInput.addEventListener('input', function(){
    this.value = this.value.replace(/\D/g, '').slice(0, 10);
  });
}
