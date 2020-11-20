var email=document.getElementById("email");  
var number=document.getElementById("number");  
var password=document.getElementById("password");  
var cpassword=document.getElementById("cpassword");  

        function validateform(){  

            let regexp1 = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
            let regexp2 = /^\d{10}$/;
            let regexp3 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
            let regexp4 = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;


                if (email.value.trim().match(regexp1)) {

                    let a = document.getElementById("ermsg");
                    a.innerHTML = "";
                    a.style.color = "green";

                    if (number.value.trim().match(regexp2) || number.value.trim().match(regexp3)) {

                        let a = document.getElementById("ermsg");
                        a.innerHTML = "";
                        a.style.color = "green";
                        if (password.value.trim().match(regexp4)) {

                            let a = document.getElementById("ermsg");
                            a.innerHTML = "";
                            a.style.color = "green";
                            if (password.value.trim() === cpassword.value.trim()) {
                                let a = document.getElementById("ermsg");
                                let s = password.style;
                                a.innerHTML = "";
                                a.style.color = "green";
                                a.style.border = s;
                                return true;
                                
                            } else {
                               
                            let a = document.getElementById("ermsg");
                            a.innerHTML = "Password Not matching";
                            a.style.color = "red";
                            return false;
                            }
                        } else {

                            let a = document.getElementById("ermsg");
                            a.innerHTML = "Include(15 char) '0-9 a-z A-Z symbols' ";
                            a.style.color = "red";
                            return false;
                            
                        }
                        
                    } else {

                        let a = document.getElementById("ermsg");
                        a.innerHTML = "Wrong Number Format";
                        a.style.color = "red";

                        return false;
                        
                    }
                    
                } else {


                    let a = document.getElementById("ermsg");
                    a.innerHTML = "Wrong Email Format";
                    a.style.color = "red";
                    return false;
                    
                }



            } 


            function checkpass() {

                let len = password.value.trim().trim().length;
                if (len >=12 && len <=15) {
                    let b = document.getElementById("strmess");
                    b.innerHTML = " Strong";
                    b.style.color = "green";
                } else if (len >=8 && len <=11) {
                    let b = document.getElementById("strmess");
                    b.innerHTML = " Medium";
                    b.style.color = "gold";                }
                else if(len >=1 && len <=8){
                    let b = document.getElementById("strmess");
                    b.innerHTML = " Poor";
                    b.style.color = "red";
                }
                else {
              
                }
            }
                
              





