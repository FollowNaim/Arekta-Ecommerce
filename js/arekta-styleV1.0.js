const toggleBtn = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  toggleBtn.onclick = function() {
   dropDownMenu.classList.toggle('open')
   const isOpen = dropDownMenu.classList.contains('open')
 
   toggleBtnIcon.classList = isOpen ?
    'fa-solid fa-xmark' :
    'fa-solid fa-bars'
  }
  function gfbtn(){
   alert("হুররু মিয়া!\nআর কাম খুইজ্জা পাও না। \nগফ এর এতো সখ ক্যা? \nসুখে খাইতে ভুতে কিলায়?")
  }
  function modbtn(){
   alert("মদ লাগবো?\nইনবক্স এ আহো দিতাছি।\nকোন ব্র্যান্ডের টা লাগবো?")
  }
  function kuttabtn(){
   alert("কুত্তার কি অভাব পড়ছে মিয়া?\nঅনলাইনে কিনবার চাইতাছো!")
  }
  function catbtn(){
   alert("কি দিনকাল পড়লো,\nমানুষ বিলাই ও অনলাইনে খুজে!")
  }
 function mainbtn(){
  alert("হ্যাভ এ রিল্যাক্স!\nসি ইউ নট ফর মাইন্ড।\nএইডা ডেমো সাইট মিয়া!")
 }
 function emailbtn(){
  alert("ইমেইল ভুলভাল/না দিয়া টিপ পারলে তোমার কি মনে হয় কাজ করবো? 😂")
 }
