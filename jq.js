 $(document).ready(function() {
   
       $(".introBlock").hide()
   
       $(".introBlockOpposite").hide()
   
        $(".introBlockHeader").hover(hoveron,hoveroff
)

   
       $(".introBlockHeaderOpposite").hover(hoveron,hoveroff
)

   $(".sidenav a").click(function () {
            $("#" + $(this).attr('id')).css("box-shadow","5px 5px 10px black")
          setTimeout(() => {
       $("#" + $(this).attr('id')).css("box-shadow","0px 0px 0px black")
     },500)
       $("#" + $(this).attr('id').replace("-","")).css("box-shadow","5px 5px 10px black")
          setTimeout(() => {
       $("#" + $(this).attr('id').replace("-","")).css("box-shadow","0px 0px 0px black")
     },500)
   })
   
  })

 function hoveron() {
        $("#"+$(this).attr('id')).css({"box-shadow":"5px 5px 10px black"})
        $("#"+$(this).attr('id')+"box").slideDown("slow");
         $("#"+$(this).attr('id')).off("mouseenter")
        setTimeout(() => {
           $("#"+$(this).attr('id')).on("mouseleave",hoveroff)
        },500)
      }

     
      function hoveroff() {
                $("#"+$(this).attr('id')).css({"box-shadow":"0px 0px 0px black"})
        $("#"+$(this).attr('id')+"box").slideUp("slow");
                  setTimeout(()=> $("#"+$(this).attr('id')).on("mouseenter",hoveron),500)
                 $("#"+$(this).attr('id')).off("mouseleave")
      }
