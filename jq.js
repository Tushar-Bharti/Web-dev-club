 $(document).ready(function() {
   
       $(".introBlock").hide()
   
       $(".introBlockOpposite").hide()
   
        $(".introBlockHeader").hover(
      function() {
        $("#"+$(this).attr('id')).css({"box-shadow":"5px 5px 10px black"})
        $("#"+$(this).attr('id')+"box").slideDown();
      },
      function() {
                $("#"+$(this).attr('id')).css({"box-shadow":"0px 0px 0px black"})
        $("#"+$(this).attr('id')+"box").slideUp();
      }
)

   
       $(".introBlockHeaderOpposite").hover(
      function() {
                $("#"+$(this).attr('id')).css({"box-shadow":"5px 5px 10px black"})
        $("#"+$(this).attr('id')+"box").slideDown();
      },
      function() {
                        $("#"+$(this).attr('id')).css({"box-shadow":"0px 0px 0px black"})
        $("#"+$(this).attr('id')+"box").slideUp();
      }
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
