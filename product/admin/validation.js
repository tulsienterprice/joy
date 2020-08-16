/*---------- Contact Us ----------*/

function validatef1form() {
    
    var f1name  = document.getElementById("f1name").value;
    var f1email = document.getElementById("f1email").value;
    var f1phone = document.getElementById("f1phone").value;
    var f1city  = document.getElementById("f1city").value;


    var vname = /^[A-Za-z\s]+$/;
    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var vphone = /^[1-9]{1}[0-9]{9}$/;


    //name
    if(f1name.trim()=="" || f1name==null)
	{
		document.getElementById("error_f1name").innerHTML="Enter name";      
		document.forms['f1']['f1name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f1name").innerHTML="";      
    }

	if(vname.test(f1name)==false)
	{
		document.getElementById("error_f1name").innerHTML="Enter valid name";
		document.forms['f1']['f1name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f1name").innerHTML="";      
    }
    
    
    //email
    if(f1email.trim()=="" || f1email==null)
    {
        document.getElementById("error_f1email").innerHTML="Enter email id";      
        document.forms['f1']['f1email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f1email").innerHTML="";      
    }

    if(vemail.test(f1email)==false)
    {
        document.getElementById("error_f1email").innerHTML="Enter valid email id";
        document.forms['f1']['f1email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f1email").innerHTML="";      
    }
    
        
    //phone
    if(f1phone.trim()=="" || f1phone==null)
    {
        document.getElementById("error_f1phone").innerHTML="Enter contact no";      
        document.forms['f1']['f1phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f1phone").innerHTML="";      
    }

    if(vphone.test(f1phone)==false)
    {
        document.getElementById("error_f1phone").innerHTML="Enter valid contact no";
        document.forms['f1']['f1phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f1phone").innerHTML="";      
    }
    
    //city
    if(f1city.trim()=="" || f1city==null)
	{
		document.getElementById("error_f1city").innerHTML="Enter city";      
		document.forms['f1']['f1city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f1city").innerHTML="";      
    }

	if(vname.test(f1city)==false)
	{
		document.getElementById("error_f1city").innerHTML="Enter valid city";
		document.forms['f1']['f1city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f1city").innerHTML="";      
    }

}

/* Form 2 */

function validatef2form() {
    
    var f2name  = document.getElementById("f2name").value;
    var f2email = document.getElementById("f2email").value;
    var f2phone = document.getElementById("f2phone").value;
    var f2city  = document.getElementById("f2city").value;


    var vname = /^[A-Za-z\s]+$/;
    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var vphone = /^[1-9]{1}[0-9]{9}$/;


    //name
    if(f2name.trim()=="" || f2name==null)
	{
		document.getElementById("error_f2name").innerHTML="Enter name";      
		document.forms['f2']['f2name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f2name").innerHTML="";      
    }

	if(vname.test(f2name)==false)
	{
		document.getElementById("error_f2name").innerHTML="Enter valid name";
		document.forms['f2']['f2name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f2name").innerHTML="";      
    }
    
    
    //email
    if(f2email.trim()=="" || f2email==null)
    {
        document.getElementById("error_f2email").innerHTML="Enter email id";      
        document.forms['f2']['f2email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f2email").innerHTML="";      
    }

    if(vemail.test(f2email)==false)
    {
        document.getElementById("error_f2email").innerHTML="Enter valid email id";
        document.forms['f2']['f2email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f2email").innerHTML="";      
    }
    
        
    //phone
    if(f2phone.trim()=="" || f2phone==null)
    {
        document.getElementById("error_f2phone").innerHTML="Enter contact no";      
        document.forms['f2']['f2phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f2phone").innerHTML="";      
    }

    if(vphone.test(f2phone)==false)
    {
        document.getElementById("error_f2phone").innerHTML="Enter valid contact no";
        document.forms['f2']['f2phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f2phone").innerHTML="";      
    }
    
    //city
    if(f2city.trim()=="" || f2city==null)
	{
		document.getElementById("error_f2city").innerHTML="Enter city";      
		document.forms['f2']['f2city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f2city").innerHTML="";      
    }

	if(vname.test(f2city)==false)
	{
		document.getElementById("error_f2city").innerHTML="Enter valid city";
		document.forms['f2']['f2city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f2city").innerHTML="";      
    }

}


/* Form 3 */

function validatef3form() {
    
    var f3name  = document.getElementById("f3name").value;
    var f3email = document.getElementById("f3email").value;
    var f3phone = document.getElementById("f3phone").value;
    var f3city  = document.getElementById("f3city").value;


    var vname = /^[A-Za-z\s]+$/;
    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var vphone = /^[1-9]{1}[0-9]{9}$/;


    //name
    if(f3name.trim()=="" || f3name==null)
	{
		document.getElementById("error_f3name").innerHTML="Enter name";      
		document.forms['f3']['f3name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f3name").innerHTML="";      
    }

	if(vname.test(f3name)==false)
	{
		document.getElementById("error_f3name").innerHTML="Enter valid name";
		document.forms['f3']['f3name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f3name").innerHTML="";      
    }
    
    
    //email
    if(f3email.trim()=="" || f3email==null)
    {
        document.getElementById("error_f3email").innerHTML="Enter email id";      
        document.forms['f3']['f3email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f3email").innerHTML="";      
    }

    if(vemail.test(f3email)==false)
    {
        document.getElementById("error_f3email").innerHTML="Enter valid email id";
        document.forms['f3']['f3email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f3email").innerHTML="";      
    }
    
        
    //phone
    if(f3phone.trim()=="" || f3phone==null)
    {
        document.getElementById("error_f3phone").innerHTML="Enter contact no";      
        document.forms['f3']['f3phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f3phone").innerHTML="";      
    }

    if(vphone.test(f3phone)==false)
    {
        document.getElementById("error_f3phone").innerHTML="Enter valid contact no";
        document.forms['f3']['f3phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f3phone").innerHTML="";      
    }
    
    //city
    if(f3city.trim()=="" || f3city==null)
	{
		document.getElementById("error_f3city").innerHTML="Enter city";      
		document.forms['f3']['f3city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f3city").innerHTML="";      
    }

	if(vname.test(f3city)==false)
	{
		document.getElementById("error_f3city").innerHTML="Enter valid city";
		document.forms['f3']['f3city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f3city").innerHTML="";      
    }

}


/* Form 4 */

function validatef4form() {
    
    var f4name  = document.getElementById("f4name").value;
    var f4email = document.getElementById("f4email").value;
    var f4phone = document.getElementById("f4phone").value;
    var f4city  = document.getElementById("f4city").value;


    var vname = /^[A-Za-z\s]+$/;
    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var vphone = /^[1-9]{1}[0-9]{9}$/;


    //name
    if(f4name.trim()=="" || f4name==null)
	{
		document.getElementById("error_f4name").innerHTML="Enter name";      
		document.forms['f4']['f4name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f4name").innerHTML="";      
    }

	if(vname.test(f4name)==false)
	{
		document.getElementById("error_f4name").innerHTML="Enter valid name";
		document.forms['f4']['f4name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f4name").innerHTML="";      
    }
    
    
    //email
    if(f4email.trim()=="" || f4email==null)
    {
        document.getElementById("error_f4email").innerHTML="Enter email id";      
        document.forms['f4']['f4email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f4email").innerHTML="";      
    }

    if(vemail.test(f4email)==false)
    {
        document.getElementById("error_f4email").innerHTML="Enter valid email id";
        document.forms['f4']['f4email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f4email").innerHTML="";      
    }
    
        
    //phone
    if(f4phone.trim()=="" || f4phone==null)
    {
        document.getElementById("error_f4phone").innerHTML="Enter contact no";      
        document.forms['f4']['f4phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f4phone").innerHTML="";      
    }

    if(vphone.test(f4phone)==false)
    {
        document.getElementById("error_f4phone").innerHTML="Enter valid contact no";
        document.forms['f4']['f4phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f4phone").innerHTML="";      
    }
    
    //city
    if(f4city.trim()=="" || f4city==null)
	{
		document.getElementById("error_f4city").innerHTML="Enter city";      
		document.forms['f4']['f4city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f4city").innerHTML="";      
    }

	if(vname.test(f4city)==false)
	{
		document.getElementById("error_f4city").innerHTML="Enter valid city";
		document.forms['f4']['f4city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f4city").innerHTML="";      
    }

}


/* Form 5 */

function validatef5form() {
    
    var f5name  = document.getElementById("f5name").value;
    var f5email = document.getElementById("f5email").value;
    var f5phone = document.getElementById("f5phone").value;
    var f5city  = document.getElementById("f5city").value;


    var vname = /^[A-Za-z\s]+$/;
    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var vphone = /^[1-9]{1}[0-9]{9}$/;


    //name
    if(f5name.trim()=="" || f5name==null)
	{
		document.getElementById("error_f5name").innerHTML="Enter name";      
		document.forms['f5']['f5name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f5name").innerHTML="";      
    }

	if(vname.test(f5name)==false)
	{
		document.getElementById("error_f5name").innerHTML="Enter valid name";
		document.forms['f5']['f5name'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f5name").innerHTML="";      
    }
    
    
    //email
    if(f5email.trim()=="" || f5email==null)
    {
        document.getElementById("error_f5email").innerHTML="Enter email id";      
        document.forms['f5']['f5email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f5email").innerHTML="";      
    }

    if(vemail.test(f5email)==false)
    {
        document.getElementById("error_f5email").innerHTML="Enter valid email id";
        document.forms['f5']['f5email'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f5email").innerHTML="";      
    }
    
        
    //phone
    if(f5phone.trim()=="" || f5phone==null)
    {
        document.getElementById("error_f5phone").innerHTML="Enter contact no";      
        document.forms['f5']['f5phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f5phone").innerHTML="";      
    }

    if(vphone.test(f5phone)==false)
    {
        document.getElementById("error_f5phone").innerHTML="Enter valid contact no";
        document.forms['f5']['f5phone'].focus();
        return false;
    }
    else
    {
        document.getElementById("error_f5phone").innerHTML="";      
    }
    
    //city
    if(f5city.trim()=="" || f5city==null)
	{
		document.getElementById("error_f5city").innerHTML="Enter city";      
		document.forms['f5']['f5city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f5city").innerHTML="";      
    }

	if(vname.test(f5city)==false)
	{
		document.getElementById("error_f5city").innerHTML="Enter valid city";
		document.forms['f5']['f5city'].focus();
		return false;
	}
	else
    {
        document.getElementById("error_f5city").innerHTML="";      
    }

}


/* Form 6 */

//function validatef6form() {
//    
//    var f6name  = document.getElementById("f6name").value;
//    var f6email = document.getElementById("f6email").value;
//    var f6phone = document.getElementById("f6phone").value;
//    var f6city  = document.getElementById("f6city").value;
//
//
//    var vname = /^[A-Za-z\s]+$/;
//    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//    var vphone = /^[1-9]{1}[0-9]{9}$/;
//
//
//    //name
//    if(f6name.trim()=="" || f6name==null)
//	{
//		document.getElementById("error_f6name").innerHTML="Enter name";      
//		document.forms['f6']['f6name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f6name").innerHTML="";      
//    }
//
//	if(vname.test(f6name)==false)
//	{
//		document.getElementById("error_f6name").innerHTML="Enter valid name";
//		document.forms['f6']['f6name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f6name").innerHTML="";      
//    }
//    
//    
//    //email
//    if(f6email.trim()=="" || f6email==null)
//    {
//        document.getElementById("error_f6email").innerHTML="Enter email id";      
//        document.forms['f6']['f6email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f6email").innerHTML="";      
//    }
//
//    if(vemail.test(f6email)==false)
//    {
//        document.getElementById("error_f6email").innerHTML="Enter valid email id";
//        document.forms['f6']['f6email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f6email").innerHTML="";      
//    }
//    
//        
//    //phone
//    if(f6phone.trim()=="" || f6phone==null)
//    {
//        document.getElementById("error_f6phone").innerHTML="Enter contact no";      
//        document.forms['f6']['f6phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f6phone").innerHTML="";      
//    }
//
//    if(vphone.test(f6phone)==false)
//    {
//        document.getElementById("error_f6phone").innerHTML="Enter valid contact no";
//        document.forms['f6']['f6phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f6phone").innerHTML="";      
//    }
//    
//    //city
//    if(f6city.trim()=="" || f6city==null)
//	{
//		document.getElementById("error_f6city").innerHTML="Enter city";      
//		document.forms['f6']['f6city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f6city").innerHTML="";      
//    }
//
//	if(vname.test(f6city)==false)
//	{
//		document.getElementById("error_f6city").innerHTML="Enter valid city";
//		document.forms['f6']['f6city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f6city").innerHTML="";      
//    }
//
//}


/* Form 7 */

//function validatef7form() {
//    
//    var f7name  = document.getElementById("f7name").value;
//    var f7email = document.getElementById("f7email").value;
//    var f7phone = document.getElementById("f7phone").value;
//    var f7city  = document.getElementById("f7city").value;
//
//
//    var vname = /^[A-Za-z\s]+$/;
//    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//    var vphone = /^[1-9]{1}[0-9]{9}$/;
//
//
//    //name
//    if(f7name.trim()=="" || f7name==null)
//	{
//		document.getElementById("error_f7name").innerHTML="Enter name";      
//		document.forms['f7']['f7name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f7name").innerHTML="";      
//    }
//
//	if(vname.test(f7name)==false)
//	{
//		document.getElementById("error_f7name").innerHTML="Enter valid name";
//		document.forms['f7']['f7name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f7name").innerHTML="";      
//    }
//    
//    
//    //email
//    if(f7email.trim()=="" || f7email==null)
//    {
//        document.getElementById("error_f7email").innerHTML="Enter email id";      
//        document.forms['f7']['f7email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f7email").innerHTML="";      
//    }
//
//    if(vemail.test(f7email)==false)
//    {
//        document.getElementById("error_f7email").innerHTML="Enter valid email id";
//        document.forms['f7']['f7email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f7email").innerHTML="";      
//    }
//    
//        
//    //phone
//    if(f7phone.trim()=="" || f7phone==null)
//    {
//        document.getElementById("error_f7phone").innerHTML="Enter contact no";      
//        document.forms['f7']['f7phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f7phone").innerHTML="";      
//    }
//
//    if(vphone.test(f7phone)==false)
//    {
//        document.getElementById("error_f7phone").innerHTML="Enter valid contact no";
//        document.forms['f7']['f7phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f7phone").innerHTML="";      
//    }
//    
//    //city
//    if(f7city.trim()=="" || f7city==null)
//	{
//		document.getElementById("error_f7city").innerHTML="Enter city";      
//		document.forms['f7']['f7city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f7city").innerHTML="";      
//    }
//
//	if(vname.test(f7city)==false)
//	{
//		document.getElementById("error_f7city").innerHTML="Enter valid city";
//		document.forms['f7']['f7city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f7city").innerHTML="";      
//    }
//
//}


/* Form 8 */

//function validatef8form() {
//    
//    var f8name  = document.getElementById("f8name").value;
//    var f8email = document.getElementById("f8email").value;
//    var f8phone = document.getElementById("f8phone").value;
//    var f8city  = document.getElementById("f8city").value;
//
//
//    var vname = /^[A-Za-z\s]+$/;
//    var vemail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//    var vphone = /^[1-9]{1}[0-9]{9}$/;
//
//
//    //name
//    if(f8name.trim()=="" || f8name==null)
//	{
//		document.getElementById("error_f8name").innerHTML="Enter name";      
//		document.forms['f8']['f8name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f8name").innerHTML="";      
//    }
//
//	if(vname.test(f8name)==false)
//	{
//		document.getElementById("error_f8name").innerHTML="Enter valid name";
//		document.forms['f8']['f8name'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f8name").innerHTML="";      
//    }
//    
//    
//    //email
//    if(f8email.trim()=="" || f8email==null)
//    {
//        document.getElementById("error_f8email").innerHTML="Enter email id";      
//        document.forms['f8']['f8email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f8email").innerHTML="";      
//    }
//
//    if(vemail.test(f8email)==false)
//    {
//        document.getElementById("error_f8email").innerHTML="Enter valid email id";
//        document.forms['f8']['f8email'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f8email").innerHTML="";      
//    }
//    
//        
//    //phone
//    if(f8phone.trim()=="" || f8phone==null)
//    {
//        document.getElementById("error_f8phone").innerHTML="Enter contact no";      
//        document.forms['f8']['f8phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f8phone").innerHTML="";      
//    }
//
//    if(vphone.test(f8phone)==false)
//    {
//        document.getElementById("error_f8phone").innerHTML="Enter valid contact no";
//        document.forms['f8']['f8phone'].focus();
//        return false;
//    }
//    else
//    {
//        document.getElementById("error_f8phone").innerHTML="";      
//    }
//    
//    //city
//    if(f8city.trim()=="" || f8city==null)
//	{
//		document.getElementById("error_f8city").innerHTML="Enter city";      
//		document.forms['f8']['f8city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f8city").innerHTML="";      
//    }
//
//	if(vname.test(f8city)==false)
//	{
//		document.getElementById("error_f8city").innerHTML="Enter valid city";
//		document.forms['f8']['f8city'].focus();
//		return false;
//	}
//	else
//    {
//        document.getElementById("error_f8city").innerHTML="";      
//    }
//
//}




