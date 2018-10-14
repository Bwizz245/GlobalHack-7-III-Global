var female_img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo8PcCxh7tT6MDFhJi2UaAT9SeciHqvZuaWtGg0y0-yyP8rMDz";
var male_img = "https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg";

$( document ).ready(function() {
    set_sex_img();

    set_who_message();

    $("#input_sex").change(function() {
        set_sex_img();
        set_who_message();
    });

    $("#first_name").keyup(function() {
        set_who_message();

        if(validation_name($("#first_name").val()).code == 0) {
            $("#first_name").attr("class", "form-control is-invalid");
            $("#first_name_feedback").html(validation_name($("#first_name").val()).message);
        } else {
            $("#first_name").attr("class", "form-control");
        }
    });

    $("#last_name").keyup(function() {
        set_who_message();

        if(validation_name($("#last_name").val()).code == 0) {
            $("#last_name").attr("class", "form-control is-invalid");
            $("#last_name_feedback").html(validation_name($("#last_name").val()).message);
        } else {
            $("#last_name").attr("class", "form-control");
        }
    });
});


function set_sex_img() {
    var sex = $("#input_sex").val();
    if (sex == "Mr.") {
        $("#img_sex").attr("src", male_img);
    } else {
        $("#img_sex").attr("src", female_img);
    }
}


function set_who_message() {
    var sex = $("#input_sex").val();
    var first_name = $("#first_name").val();
    var last_name = $("#last_name").val();

    if (validation_name(first_name).code == 0 ||
        validation_name(last_name).code == 0) {
        $("#who_message").html("Who are you ?");
    } else {
        $("#who_message").html(sex+" "+first_name+" "+last_name);
    }
}


function validation_name (val) {
    if (val.length < 2) {
        return {"code":0, "message":"The name is too short."};
    }
    if (!val.match("^[a-zA-Z\- ]+$")) {
        return {"code":0, "message":"The name use non-alphabetics chars."};
    }

    return {"code": 1};
}

$("#bday").birthdayPicker({
maxAge: 100,
minAge: 0,
maxYear: r,
<a href="https://www.jqueryscript.net/time-clock/">date</a>Format: "middleEndian",
monthFormat: "number",
placeholder: true,
defaultDate: false,
sizeClass: "span2"
});
