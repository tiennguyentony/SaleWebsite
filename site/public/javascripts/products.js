$(document).ready(function () {
  $(".sub > a").click(function() {
    var ul = $(this).next(),
    clone = ul.clone().css({"height":"auto"}).appendTo(".mini-menu"),
    height = ul.css("height") === "0px" ? ul[0].scrollHeight + "px" : "0px";
    clone.remove();
    ul.animate({"height":height});
    return false;
  });
  $('.mini-menu > ul > li > a').click(function(){
   $('.sub a').removeClass('active');
   $(this).addClass('active');
 }),
  $('.sub ul li a').click(function(){
   $('.sub ul li a').removeClass('active');
   $(this).addClass('active');
 });
});
$( function() {
  $( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 100000,
    values: [ 0, 1000000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( "VND " + ui.values[ 0 ] + " - " + ui.values[ 1 ] );
      var mi = ui.values[0];
      var mx = ui.values[1];
      filterSystem(mi, mx);
    }
  });
  $( "#amount" ).val( " VND " + $( "#slider-range" ).slider( "values", 0 ) +
    " - " + $( "#slider-range" ).slider( "values", 1 ) );
} );


function filterSystem(minPrice, maxPrice) {
  $(".products div.product-item").filter(function () {
    var price = parseInt($(this).data("price"), 1000);
    return price >= minPrice && price <= maxPrice;
  }).css({'visibility': 'hidden', 'display': 'none'}).removeClass('div.product-item');
};

$(document).ready(function(){
  $(".row products").slice(0, 6).show();
  $(".loadMore").on("click", function(e){
    e.preventDefault();
    $(".row products:hidden").slice(0, 4).slideDown();
    if($(".row products:hidden").length == 0) {
      $(".loadMore").text("No Content").addClass("noContent");
    }
  });
  
})
