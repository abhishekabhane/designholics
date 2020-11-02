        $("#img1").hover(function() {
            if ($("#one").css("display") == "none") {
                $("#one").css("display", "block");
            } else {
                $("#one").css("display", "none");
            }
        });
        $("#img2").hover(function() {
            if ($("#two").css("display") == "none") {
                $("#two").css("display", "block");
            } else {
                $("#two").css("display", "none");
            }
        });
        $("#img3").hover(function() {
            if ($("#three").css("display") == "none") {
                $("#three").css("display", "block");
            } else {
                $("#three").css("display", "none");
            }
        });
        $('.born').click(function() {
            $('.born').css("background", "transparent");
        });
        $("#form1").submit(function(e) {
            e.preventDefault();
            var error = "";
            if ($("#name").val() == "") {
                error += "<p>name is required</p>";
            }
            if ($("#email").val() == "") {
                error += "<p>email is required</p>";
            }
            if ($("#number").val() == "") {
                error += "<p>number is required</p>";
            }
            if (error != "") {
                $("#error").html('<div class="alert alert-danger" role="alert"><strong>there were error(s) in your form : </strong>' + error + '</div>');
            } else {
                $("#form1").unbind('submit').submit();
            }
        })
        $("#learn-more").click(function() {
            if ($("#target").css("display") == "none") {
                $("#target").css("display", "block");
                $("#card2").css("height", "530px");
            } else {
                if ($("#target").css("display") == "block") {
                    $("#target").css("display", "none");
                    $("#card2").css("height", "480px");
                }
            }

        });
        $("#card2").hover(function(e) {
            e.preventDefault();
            if ($("#card2").css("height") == "480px") {
                $("#card2").css("height", "278px");
            } else {
                if ($("#card2").css("height") == "278px") {
                    $("#card2").css("height", "480px");
                }
            }
        });
        $("#learn-more2").click(function() {
            if ($("#target2").css("display") == "none") {
                $("#target2").css("display", "block");
                $("#card3").css("height", "530px");
            } else {
                if ($("#target2").css("display") == "block") {
                    $("#target2").css("display", "none");
                    $("#card3").css("height", "480px");
                }
            }

        });
        $("#card3").hover(function(e) {
            e.preventDefault();
            if ($("#card3").css("height") == "480px") {
                $("#card3").css("height", "278px");
            } else {
                if ($("#card3").css("height") == "278px") {
                    $("#card3").css("height", "480px");
                }
            }
        });
        $("#learn-more3").click(function() {
            if ($("#target3").css("display") == "none") {
                $("#target3").css("display", "block");
                $("#card1").css("height", "600px");
            } else {
                if ($("#target3").css("display") == "block") {
                    $("#target3").css("display", "none");
                    $("#card1").css("height", "565px");
                }
            }

        });
        $("#card1").hover(function(e) {
            e.preventDefault();
            if ($("#card1").css("height") == "565px") {
                $("#card1").css("height", "357px");
            } else {
                if ($("#card1").css("height") == "357px") {
                    $("#card1").css("height", "565px");
                }
            }
        });