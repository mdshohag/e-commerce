/*javascript documnet*/
/*KEY VELIDATION*/
function OnlyNumberKey(evt)
{	
	var charCode = (evt.which) ? evt.which : event.keyCode
	
	if ((charCode < 48 || charCode > 57) && (charCode !== 8) && (charCode !== 9) && (charCode !== 46))
	
         return false;
}
//
// OPENPOPUP FILE  
function popUp(URL) {
	day = new Date();
	id = day.getTime();
	eval("page" + id + " = window.open(URL, '" + id + "', 	'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=0,width=700,height=500');");
}
/*Category search field*/
function cat_search_field()
{
	var catsearch = document.getElementById("catsearch").value;
	if(catsearch == "Category Search")
{
	document.getElementById("catsearch").value = "";
}

if(catsearch == "")
{
	document.getElementById("catsearch").value = "Category Search";
}
}
/*Category search*/
function cat_search()
{
	var rootid = document.getElementById("rootid").value;
	var catsearch = document.getElementById("catsearch").value;
	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
	return;
		
	//var url = "catsearch?rootid="+rootid+"&catsearch="+catsearch;
	var url="catsearch?rootid="+rootid+"&catsearch="+catsearch; 
	
	var browser=navigator.appName;
	if (browser=="Microsoft Internet Explorer")
	{
		xmlRequest.open("POST",url, true);
	}
else
	{
		xmlRequest.open("GET",url, true);
	}
xmlRequest.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
xmlRequest.onreadystatechange =function()
	{
		if(xmlRequest.readyState==4)
			{							
				HandleAjaxResponse_cat_search(xmlRequest);
			}
	};
xmlRequest.send(null);			
return false;
}

function HandleAjaxResponse_cat_search(xmlRequest)
{
	var xmlT=xmlRequest.responseText;
	document.getElementById("cat_view").innerHTML=xmlT;		
return false;
}

/*Category search field*/
function authors_search_field()
{
	var autsearch = document.getElementById("autsearch").value;
	if(autsearch == "Search")
{
	document.getElementById("autsearch").value = "";
}

if(autsearch == "")
{
	document.getElementById("autsearch").value = "Search";
}
}
/*authors search*/
function authors_search()
{
	var Cat = document.getElementById("Cat").value;
	var autsearch = document.getElementById("autsearch").value;
	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
	return;
		
	//var url = "catsearch?rootid="+rootid+"&catsearch="+catsearch;
	var url="authorssearch?Cat="+Cat+"&autsearch="+autsearch; 
	
	var browser=navigator.appName;
	if (browser=="Microsoft Internet Explorer")
	{
		xmlRequest.open("POST",url, true);
	}
else
	{
		xmlRequest.open("GET",url, true);
	}
xmlRequest.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
xmlRequest.onreadystatechange =function()
	{
		if(xmlRequest.readyState==4)
			{							
				HandleAjaxResponse_authors_search(xmlRequest);
			}
	};
xmlRequest.send(null);			
return false;
}

function HandleAjaxResponse_authors_search(xmlRequest)
{
	var xmlT=xmlRequest.responseText;
	document.getElementById("authorsproduct_view").innerHTML=xmlT;		
return false;
}
//Registration//


/*ADD TO BOOK CART*/
function add_book_cart(bookid, price, btitle)
	{
	$(function(){	
	
	var quantity = $('[name="quantity"]').val();
				
	
	if(quantity == ""){
			alertify.error('Please enter quantity');
			return false;
		}
	var quantity = document.getElementById("quantity").value;
	var dataString ='quantity='+quantity+
		 '&bookid='+bookid+
		 '&price='+price+
		 '&btitle='+btitle;
	//alert(dataString);
	//var alertmessage = btitle + " Added to Your cart.";
		$.ajax({
		  type:"post",
		  url:"post_url/add_book_cart.php",
		  data:dataString,
		  success:function(res){
			if(res == '1')
				//alertmessage =" Added to Your cart.";
				alert(res);
					location.href='shoppingcart';
		  }
		  ,error:function(){
		   alert('Error on Ajax');
		  }
			  	  
		});
	});
} 
function HandleAjaxResponse_add_book_cart(xmlRequest, btitle,bookid)
{
	var xmlT=xmlRequest.responseText;
	//var alertmessage = btitle + " Added to Your cart." +bookid ;
	//alert(alertmessage);
	location.replace("post_url/add_book_cart");	
	//document.getElementById("add_temp_card").innerHTML=xmlT;
	return false;
}
/*remove book from cart*/
function remove_cartitem(mbook_id)
{
	var yn = confirm("Are you sure to Delete this Item from the list?");
	if(yn)
	{
		remove_cartitem_action(mbook_id);	
	} else {		
		return false;	
	}	
}

function remove_cartitem_action(mbook_id)
{	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
    return;			
	
		var url="remove_item?mbook_id="+mbook_id;
    	var browser=navigator.appName;
		if (browser=="Microsoft Internet Explorer")
		{
			xmlRequest.open("POST",url, true);
		}
		else
		{
			xmlRequest.open("GET",url, true);
		}
		
		xmlRequest.setRequestHeader("Content-Type", "application/x-www-formurlencoded");
		xmlRequest.onreadystatechange =function()
		{
			if(xmlRequest.readyState==4)
			{
				HandleAjaxResponse_remove_cartitem_action(xmlRequest);
			}
		};
			xmlRequest.send(null);
			return false; 
} 
function HandleAjaxResponse_remove_cartitem_action(xmlRequest)
{
	var xmlT=xmlRequest.responseText;
	location.replace("shoppingcart");	
	return false;
}

/////////////////// OBJECT FUNCTION ////////////////////////
function GetXmlHttpObject()
{		
	var xmlHttp=null;
	try
	{
		xmlHttp=new XMLHttpRequest();
	}
	catch (e)
	{
		// Internet Explorer
		try
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		 catch (e)
		 {
			xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
		 }
	}
	return xmlHttp;		  
}


function OnlyNumberKeys(evt)
{
    var charCode = (evt.which) ? evt.which : event.keyCode

    if ((charCode < 48 || charCode > 57) && (charCode !== 8) && (charCode !== 9))

        return false;
}