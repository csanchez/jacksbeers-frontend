$( document ).ready(function() {
	
	$(".btn-buy").click(function(){
		 var permalink = $(this).attr("data-permalink");
		 var request =  $.ajax({
			  method: "POST",
			  url: "/beer/"+$(this).attr("data-permalink"),
			  data: { authenticity_token : $(this).attr("data-authenticity_token") },
			  dataType: "json",
			  success: function(  data,  textStatus,  jqXHR ){
			  	//console.log(data);
			  	$("#counter").html(data.total_items);
			  	$("#counter2").html(data.total_before_tax);
			  	var val = parseInt($("#"+permalink+" .badge ").html()) +1;
			  	$("#"+permalink+" .badge ").html(val);
			  	//$("#"+permalink+" .badge ").html(data.total_items);
			  	console.log(val);
			  	if(val > 0)
			  		$("#"+permalink+" .btn-remove ").removeClass("no-visible-button");

			  },
			  error: function(  jqXHR,  textStatus,  errorThrown ){
			  	json = $.parseJSON(jqXHR.responseText)
			 	alert(json.error);
			 	$("#"+permalink+" .beer-image-container ").append("<div class='piecesOfEight-sm out-of-stock-span'><span> Agotado</span></div>")
			  	$(this).prop('disabled', 'disabled');
			  	 //alert( "+equest failed: " + textStatus +" "+ errorThrown);
			  },
			  complete: function(  jqXHR,  textStatus ){
			  	//alert( "Request complete: " + "  "+ textStatus );
			  }
			});

		
	});

	$(".btn-remove").click(function(){
		 var permalink = $(this).attr("data-permalink");
		 var request =  $.ajax({
			  method: "DELETE",
			  url: "/beer/"+$(this).attr("data-permalink"),
			  data: { authenticity_token : $(this).attr("data-authenticity_token") },
			  dataType: "json",
			  success: function(  data,  textStatus,  jqXHR ){
			  	//console.log(data);
			  	$("#counter").html(data.total_items);
			  	$("#counter2").html(data.total_before_tax);
			  	var val = parseInt($("#"+permalink+" .badge ").html()) -1;
			  	$("#"+permalink+" .badge ").html(val);
			  	console.log(val);
			  	if(val == 0){
			  		$("#"+permalink+" .btn-remove ").addClass("no-visible-button");
			  	}
			  		
			  		
			  		

			  },
			  error: function(  jqXHR,  textStatus,  errorThrown ){
			  },
			  complete: function(  jqXHR,  textStatus ){
			  	//alert( "Request complete: " + "  "+ textStatus );
			  }
			});

		
	});

	
});










