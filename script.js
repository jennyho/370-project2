function arrange() { 
    // T
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PT1").css('visibility', 'hidden');
        } else {
            $("#NT1").css('visibility', 'hidden');
        } 
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PT2").css('visibility', 'hidden');
        } else {
            $("#NT2").css('visibility', 'hidden');
        }
       
    //E
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PE1").css('visibility', 'hidden');
        } else {
            $("#NE1").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PE2").css('visibility', 'hidden');
        } else {
            $("#NE2").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PE3").css('visibility', 'hidden');
        } else {
            $("#NE3").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PE4").css('visibility', 'hidden');
        } else {
            $("#NE4").css('visibility', 'hidden');
        }
    
    //M
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PM1").css('visibility', 'hidden');
        } else {
            $("#NM1").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PM2").css('visibility', 'hidden');
        } else {
            $("#NM2").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PM3").css('visibility', 'hidden');
        } else {
            $("#NM3").css('visibility', 'hidden');
        }
		
	var show = Math.round(Math.random());
        if (show === 0) {
            $("#PM4").css('visibility', 'hidden');
        } else {
            $("#NM4").css('visibility', 'hidden');
        }
		
	var show = Math.round(Math.random());
        if (show === 0) {
            $("#PM5").css('visibility', 'hidden');
        } else {
            $("#NM5").css('visibility', 'hidden');
        }
    
    //P
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PP1").css('visibility', 'hidden');
        } else {
            $("#NP1").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PP2").css('visibility', 'hidden');
        } else {
            $("#NP2").css('visibility', 'hidden');
        }
    
    //O
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PO1").css('visibility', 'hidden');
        } else {
            $("#NO1").css('visibility', 'hidden');
        }
    
   var show = Math.round(Math.random());
        if (show === 0) {
            $("#PO2").css('visibility', 'hidden');
        } else {
            $("#NO2").css('visibility', 'hidden');
        }
    
    //R
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR11").css('visibility', 'hidden');
        } else {
            $("#NR11").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR12").css('visibility', 'hidden');
        } else {
            $("#NR12").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR13").css('visibility', 'hidden');
        } else {
            $("#NR13").css('visibility', 'hidden');
        }
    
    //A
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PA1").css('visibility', 'hidden');
        } else {
            $("#NA1").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PA2").css('visibility', 'hidden');
        } else {
            $("#NA2").css('visibility', 'hidden');
        }
    
    //R
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR21").css('visibility', 'hidden');
        } else {
            $("#NR21").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR22").css('visibility', 'hidden');
        } else {
            $("#NR22").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PR23").css('visibility', 'hidden');
        } else {
            $("#NR23").css('visibility', 'hidden');
        }
    
    //Y
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PY1").css('visibility', 'hidden');
        } else {
            $("#NY1").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PY2").css('visibility', 'hidden');
        } else {
            $("#NY2").css('visibility', 'hidden');
        }
    
    var show = Math.round(Math.random());
        if (show === 0) {
            $("#PY3").css('visibility', 'hidden');
        } else {
            $("#NY3").css('visibility', 'hidden');
        }
    
    $('.container').fadeIn(500);
}

function decay(){
    var classes = ['decay1', 'decay2', 'decay3', 'decay4'];
    
    //T
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.t-top').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.t-bottom').addClass(classes[randomnumber]);
    
    //E
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.e-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.e-top').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.e-mid').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.e-bottom').addClass(classes[randomnumber]);
    
    //M
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.m-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.m-mid-A').addClass(classes[randomnumber]);
	
	var randomnumber = Math.floor(Math.random()*classes.length);
    $('.m-mid-B').addClass(classes[randomnumber]);
	
	var randomnumber = Math.floor(Math.random()*classes.length);
    $('.m-mid-C').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.m-right').addClass(classes[randomnumber]);
    
    //P
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.p-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.p-loop').addClass(classes[randomnumber]);
    
    //O
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.o-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.o-right').addClass(classes[randomnumber]);
    
    //R
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r1-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r1-loop').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r1-slant').addClass(classes[randomnumber]);
    
    //A
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.a-top').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.a-bottom').addClass(classes[randomnumber]);
    
    //R
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r2-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r2-loop').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.r2-slant').addClass(classes[randomnumber]);
    
    //Y
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.y-left').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.y-right').addClass(classes[randomnumber]);
    
    var randomnumber = Math.floor(Math.random()*classes.length);
    $('.y-bottom').addClass(classes[randomnumber]);
    
    $('.decay1').delay(1500).animate({
        opacity: '0'
    }, 500);
    
    $('.decay2').delay(3000).animate({
        opacity: '0'
    }, 500);
    
    $('.decay3').delay(4500).animate({
        opacity: '0'
    }, 500);
    
    $('.decay4').delay(6000).animate({
        opacity: '0'
    }, 500);
}

function resetPage() {
	location.reload();
}

$('img').animate({
        opacity: '1'
}, 500);
arrange();
decay();
setTimeout(resetPage, 7500); 
