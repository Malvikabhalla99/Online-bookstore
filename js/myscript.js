window.onload = function() {
    
    
    function returnTopreviouspage() {
        window.history.back();
    }

    function validateMyform() {
        if (document.getElementById('usernamefill').value == "" || document.getElementById('emailfill').value == "" || document.getElementById('passwordfill').value == "") {
            alert("Fill All Fields !");
            //returnTopreviouspage();
            return false;
            } else {
            document.getElementById('form').submit();
            alert("Form Submitted Successfully...");
                return true;
        }
    
}
    this.document.getElementById('submitbtnfill').onclick = function(){
        validateMyform();
    }
    //validateMyform();
}
    
