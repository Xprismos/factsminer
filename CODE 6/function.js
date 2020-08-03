$(function(){

let countdown = sessionStorage.getItem("countdown")
// console.log("cd: "+countdown)
if(countdown==null){
    sessionStorage.setItem("countdown",countdown=1200)
    // console.log("stored")
}

let timer = setInterval(function(){
    if(countdown>0){
        countdown--
        sessionStorage.setItem("countdown",countdown)
       
    }else{
        clearInterval(timer)
        sessionStorage.clear()
        var z = new Date(Date.now());
        alert( `. ${z.getDate()}: CONGRATULATIONS!!! You,ve been on the site for 24 minutes`)
    }      
},1000);




var x = sessionStorage.getItem("x")||0;

console.logx
function save(){
    sessionStorage.setItem("x",x)
};

$(".next").on("click", function(){
    x ++
    save()
    console.log(x);

});
$(".prev").on("click", function(){
    x --
    save()
    console.log(x);

});

$(".next").on("click", function(){
    window.location.href = `page${x}.html`;
})

$(".prev").on("click", function(){
    window.location.href = `page${x}.html`;
})

// $(document).ready(function(){
//     $("button").click(function(){
//         $(".try").load("./fg.txt");








var oop = ["./rest/1.jpg", "./rest/2.jpg", "./rest/3.jpg", "./rest/4.jpg", "./rest/6.jpg", "./rest/7.jpg", "./rest/5.jpg", "./rest/8.jpg", ];
var num = Math.floor(Math.random() * (oop.length));
$(".canvas").attr("src",oop[num])


var oop2 = ["./rest2/1.jpg", "./rest2/2.jpg", "./rest2/3.jpg", "./rest2/4.jpg", "./rest2/6.jpg", "./rest2/7.jpg", "./rest2/5.jpg", "./rest2/8.jpg", ];
var num2 = Math.floor(Math.random() * (oop2.length));
$(".canvass").attr("src",oop2[num2])

var oop3 = ["./rest3/1.jpg", "./rest3/2.jpg", "./rest3/3.jpg", "./rest3/4.jpg", "./rest3/6.jpg", "./rest3/7.jpg", "./rest3/5.jpg", "./rest3/8.jpg", "./rest3/9.jpg", "./rest3/10.jpg", "./rest3/11.jpg", "./rest3/12.jpg", "./rest3/13.jpg", "./rest3/14.jpg", "./rest3/15.jpg", "./rest3/16.jpg" ,"./rest3/17.jpg", "./rest3/18.jpg", "./rest3/19.jpg", "./rest3/20.jpg", "./rest3/21.jpg", "./rest3/22.jpg", "./rest3/23.jpg", "./rest3/24.jpg", "./rest3/25.jpg", "./rest3/26.jpg","./rest3/27.jpg", "./rest3/28.jpg" ,"./rest3/29.jpg" ,"./rest3/30.jpg" ,"./rest3/31.jpg" ,"./rest3/32.jpg" ,"./rest3/33.jpg", "./rest3/34.jpg", "./rest3/35.jpg", "./rest3/36.jpg", "./rest3/37.jpg", "./rest3/38.jpg", "./rest3/39.jpg", "./rest3/40.jpg", "./rest3/41.jpg", "./rest3/42.jpg" ,"./rest3/43.jpg" ,"./rest3/44.jpg", "./rest3/45.jpg" ,"./rest3/46.jpg", "./rest3/47.jpg", "./rest3/48.jpg", "./rest3/49.jpg", "./rest3/50.jpg", "./rest3/51.jpg", "./rest3/52.jpg", "./rest3/53.jpg", "./rest3/54.jpg", "./rest3/55.jpg", "./rest3/56.jpg", "./rest3/57.jpg", "./rest3/58.jpg", "./rest3/59.jpg","./rest3/60.jpg", "./rest3/61.jpg","./rest3/62.jpg","./rest3/63.jpg", "./rest3/64.jpg", "./rest3/65.jpg","./rest3/66.jpg","./rest3/67.jpg","./rest3/68.jpg","./rest3/70.jpg","./rest3/71.jpg", "./rest3/72.jpg", "./rest3/73.jpg", "./rest3/74.jpg", "./rest3/76.jpg", "./rest3/77.jpg", "./rest3/78.jpg", "./rest3/79.jpg", "./rest3/80.jpg", "./rest3/81.jpg", "./rest3/82.jpg", "./rest3/83.jpg", "./rest3/84.jpg", "./rest3/86.jpg", "./rest3/87.jpg","./rest3/85.jpg", "./rest3/88.jpg", "./rest3/89.jpg","./rest3/91.jpg", "./rest3/90.jpg", "./rest3/92.jpg", "./rest3/93.jpg", "./rest394.jpg", "./rest3/96.jpg", "./rest3/97.jpg", "./rest3/98.jpg", "./rest3/99.jpg", "./rest3/100.jpg",];
var num3 = Math.floor(Math.random() * (oop2.length));
$(".canvass").attr("src",oop2[num3])







$(".iny").text(`${x}`);


var message = ("8879")
$(".code").text(`${message}`);


$("#btnsubmit").on("click", function Validate(){
  
    var password = document.getElementById("txtpassword").value;
    if (password == message) {
        x ++
        save()
        console.log(x);
        window.location.href = `page${x}.html`;
    } else {
        alert(" enter the correct code")
    }
});



  















/* <script>
    

    document.addEventListener('DOMContentLoaded',
    function(){
        var imageBlock = document.getElementById('facts')
        for(var x = 1; x < 1; x ++){
            var text = document.createElement('br')
            var g = document.createElement('div')
            g.className="hr"
            var image = document.createElement('img')
            image.src = `./useable 1/${x}.jpg`
            
            imageBlock.appendChild(text)
            imageBlock.appendChild(g)
            text.appendChild(image)

            imageBlock.appendChild(image)
        
        
        }


        // alert(imageBlock)        

    }
)



</script>
*/})