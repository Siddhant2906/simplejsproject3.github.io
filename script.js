function generate(){
       const x = {
          "1":"'কাৰোবাক ভালপোৱা দিলে সীমাহীন ভাবে দিয়ক, কাৰণ সীমা আৰু পৰিধি মাটিৰ থাকে, হৃদয়ৰ নহয়।'",
          "2":"তুমি পাহৰি গলেও মই স্মৃতি হৈ তোমাক আমনি কৰিম...তুমি পানী পি পি ভাগৰি যাবা, মই হিকটি হৈ আমনি কৰিম।",
          "3":"'প্ৰেমত সদায় কিছু উন্মাদনা থাকে। কিন্তু উন্মাদনাত সদায় কিবা কাৰণো থাকে'",
          "4":"'মোৰ সুখী জীৱনৰ প্ৰতিটো কাৰণ, প্ৰতিটো আশা, প্ৰতিটো সপোন.. মাথোঁ তুমি'",
          "5":"'তুমি যেন পপীয়া তৰা আকাশৰ বোৱতী নৈ.'",
          "6":"'মৰমে আমনি কৰে, অকলে থাকিলে সপোনে আগচি ধৰে, ৰাতি টোপনিতে শেৱালী ৰাতি ফুলে, শৰৎ কালতে চুমা আকি দিও যেন লাগে, তোমাৰ গোলপীয়া দুগালতে'",
          "7":"'অভিমানবোৰ ইজনে সিজনৰ ভাঙিব পৰা নামেই হল প্ৰকৃত ভালপোৱা।'",
          "8":"'তোমাক বিশ্বাস কৰাতো মোৰ কৰ্তব্য আৰু সেই বিশ্বাস ধৰি ৰখাটো তোমাৰ দায়িত্ব'",
          "9":"'প্ৰেম মানেই বিশ্বাস, যি বৈ যায় হৃদয়ৰ পৰা হৃদয়লৈ'",
          "10":"'জোনাক নিশাৰ নিৰিবিলি পোহৰত,ঘাঁহনি এডৰাৰ সানিদ্ধ্যত তোমাৰ কান্ধত মূৰ ৰাখি | তাতে তোমাৰ হাতৰ চেঁচা পৰশ,তোমাৰ চকুযোৰিৰ গভীৰতাত,নিজকে তোমাতে বিলীন কৰি পাওঁ।'"
       } 

       const authors = Object.keys(x);
    //    console.log(authors)

       const new_quote = x[Math.floor(Math.random()*authors.length)]
    //    const button = document.getElementsByClassName('btn btn-outline-warning')
    //    console.log(new_quote)
    //    const content = document.getElementById("quotes")
    //    console.log(content)
    //    button.addEventListener('onclick',generate=>{
    //       content.innerHTML = new_quote
    //    })
    document.getElementById("quotes").innerHTML = new_quote;
    


    const body = document.getElementById("hello")
    const color = ['rgb(84 232 139)','rgb(84, 141, 246)','yellow','violet']
    const num = parseInt(Math.random()*color.length)
    body.style.backgroundColor = color[num]
    

    // body.style.backgroundColor = 'Blue'
    // button.addEventListener('click',changecolor=>{
    //  const num = parseInt(Math.random()*color.length)
    //  body.style.backgroundColor = color[num]
// })



}