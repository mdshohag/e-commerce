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

function registration()
{
	var full_name = document.getElementById("full_name").value;
	if(full_name == "") {  alert("Please Enter Full Name."); return false; }
	
	var email = document.getElementById("email").value;
	if(email == "") {  alert("Please Enter Email."); return false; }
	
	var atpos=email.indexOf("@");
	var dotpos=email.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2>=email.length)
	  {
	  alert("Please Enter a Valid Email Address");
	  return false;
	  }
	
	
	var mobile = document.getElementById("mobile").value;
	if(mobile == "") {  alert("Please Enter Number."); return false; }
	
	if(mobile.length < 11) {alert("Mobile Number at least 11 Character"); return false;}
	
	var password = document.getElementById("password").value;
	if(password == "") {  alert("Please Enter Password."); return false; }

	var repassword = document.getElementById("repassword").value;
	if(repassword == "") {  alert("Please Retype Password."); return false; }
	
	if(password != repassword) {alert("Password and Retype password do not match"); return false;}
		
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
	return;
	
	var url="post_url/registration?full_name="+full_name+"&email="+email+"&mobile="+mobile+"&password="+password; 

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
				HandleAjaxResponse_registration(xmlRequest);
			}
	};
xmlRequest.send(null);
return false;
}	

function HandleAjaxResponse_registration(xmlRequest)
{
	var xmlT=parseInt(xmlRequest.responseText);
	if(xmlT == 1) { alert('Eamil Already Exist'); }
	else if(xmlT == 2){alert('Mobile Already Exit');}
	else { alert('Registraion Successfully Done'); 	
	location.replace("login");
	}
return false;
}

/* Email Check*/

function email_chkf()
{
	
	var email = document.getElementById('email').value;
	//alert(email);
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
	return;
		
	var url = "email_chk?email="+email;
	
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
				HandleAjaxResponse_email_chkf(xmlRequest);
			}
	};
	xmlRequest.send(null);
	return false;
}

function HandleAjaxResponse_email_chkf(xmlRequest)
{
	var xmlT=parseInt(xmlRequest.responseText);
	if(xmlT == 1)
	{
		document.getElementById('email_chk').innerHTML = 'Email Already Exist.';
	}
	else
	{
		document.getElementById('email_chk').innerHTML = '';
	}
	document.getElementById('email_field_chk').value = xmlT;
	return false;
}

/* Mobile Check*/

function mobile_chk()
{
	var mobile = document.getElementById('mobile').value;
	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
	return;
		
	var url = "email_chk?mobile="+mobile;
	
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
				HandleAjaxResponse_phone_chk(xmlRequest);
			}
	};
	xmlRequest.send(null);
	return false;
}

function HandleAjaxResponse_phone_chk(xmlRequest)
{
	var xmlT=parseInt(xmlRequest.responseText);
	if(xmlT == 2)
	{
		document.getElementById('mobile_chk').innerHTML = 'Mobile Number Already Exist.';
	}
	else
	{
		document.getElementById('mobile_chk').innerHTML = '';
	}
	document.getElementById('mobile_field_chk').value = xmlT;
	return false;
}
/*Password Check*/
function pass_chk()
{	
	var password = document.getElementById("password").value;
	var repassword = document.getElementById("repassword").value;
	
	var xmlRequest = GetXmlHttpObject();
	if (xmlRequest == null)
		return;

	var url ="pass_chk?password="+password+"&repassword="+repassword;
	
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
					HandleAjaxResponse_pass_chk(xmlRequest);
				}
		};
	xmlRequest.send(null);			
	return false;
}

function HandleAjaxResponse_pass_chk(xmlRequest)
{
	var xmlT=xmlRequest.responseText;
	document.getElementById("check_retypepass").innerHTML=xmlT;
	return false;
}

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
	
		var url="post_url/remove_item.php?mbook_id="+mbook_id;
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