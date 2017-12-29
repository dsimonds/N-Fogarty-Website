// JavaScript Document
$(document).ready(function(e){
 
	/**************** PEOPLE TAB DROP DOWNS *****************/ 
	
	$('#dropdown1').on('click',function(){
		$('.dropdownwrap1').slideToggle();
		return false;
   	});

  	$('#dropdown2').on('click',function(){
		$('.dropdownwrap2').slideToggle();
		return false;
	});

  	$('#dropdown3').on('click',function(){
      	$('.dropdownwrap3').slideToggle();
		return false;
   	});
	
  	$('#dropdown4').on('click',function(){
      	$('.dropdownwrap4').slideToggle();
		return false;
   	});
   
  	$('#dropdown5').on('click',function(){
      	$('.dropdownwrap5').slideToggle();
		return false;
   	});
   
  	$('#dropdown6').on('click',function(){
      	$('.dropdownwrap6').slideToggle();
		return false;
   	});
	   
  	$('#dropdown7').on('click',function(){
      	$('.dropdownwrap7').slideToggle();
		return false;
   	});
   
  	$('#dropdown8').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
    
    $('#dropdown9').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
    
    $('#dropdown10').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
    
    $('#dropdown11').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
    
    $('#dropdown12').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
    
    $('#dropdown13').on('click',function(){
      	$('.dropdownwrap8').slideToggle();
		return false;
   	});
	
	/**************** HOME PAGE DROP DOWN *****************/
	
	    var minimized_elements = $('p.minimize');
    
    minimized_elements.each(function(){    
        var t = $(this).text();        
        if(t.length < 105) return;
        
        $(this).html(
            t.slice(0,105)+'<span>... </span><a href="#" class="more">More</a>'+
            '<span style="display:none;">'+ t.slice(105,t.length)+' <a href="#" class="less">Less</a></span>'
        );
        
    }); 
    
    $('a.more', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).hide().prev().hide();
        $(this).next().show();        
    });
    
    $('a.less', minimized_elements).click(function(event){
        event.preventDefault();
        $(this).parent().hide().prev().show().prev().show();    
    });

	
})


