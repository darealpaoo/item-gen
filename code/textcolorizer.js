function cutHex(h) {
    return h.charAt(0) == "#" ? h.substring(1, 7) : h;
}
function hexToR(h) {
    return parseInt(cutHex(h).substring(0, 2), 16);
}
function hexToG(h) {
    return parseInt(cutHex(h).substring(2, 4), 16);
}
function hexToB(h) {
    return parseInt(cutHex(h).substring(4, 6), 16);
}
function rgbToHex(R, G, B) {
    return toHex(R) + toHex(G) + toHex(B);
}
function toHex(n) {
    n = parseInt(n, 10);
    if (isNaN(n)) return "00";
    n = Math.max(0, Math.min(n, 255));
    return "0123456789ABCDEF".charAt((n - (n % 16)) / 16) + "0123456789ABCDEF".charAt(n % 16);
}
input_effect = "";
input_color1 = "";
input_color2 = "";
input_color3 = "";
input_color4 = "";
input_color5 = "";
input_color6 = "";
input_color7 = "";
input_color8 = "";
input_text = "";
input_colorword = 0;
random_length = 0;
update = 0;
var random_char = new Array();
function randomize_colors() {
    var length = document.getElementById("input_text").value.length;
    var a;
    for (a = 0; a < length; a += 1) {
        random_char[a] = rgbToHex(Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256));
    }
    random_length = length;
    update = 1;
}
function textcolorizer_handle() {
    if (input_effect != document.getElementById("input_effect").value) {
        document.getElementById("color_select1").style.visibility = "hidden";
        document.getElementById("color_select2").style.visibility = "hidden";
        document.getElementById("color_select3").style.visibility = "hidden";
        document.getElementById("color_select4").style.visibility = "hidden";
        document.getElementById("color_select5").style.visibility = "hidden";
        document.getElementById("color_select6").style.visibility = "hidden";
        document.getElementById("color_select" + document.getElementById("input_effect").value).style.visibility = "visible";
        update = 1;
    }
    input_effect = document.getElementById("input_effect").value;

    if (input_color1 != document.getElementById("input_color1").value) {
        update = 1;
    }
    input_color1 = document.getElementById("input_color1").value;

    if (input_color2 != document.getElementById("input_color2").value) {
        update = 1;
    }
    input_color2 = document.getElementById("input_color2").value;

    if (input_color3 != document.getElementById("input_color3").value) {
        update = 1;
    }
    input_color3 = document.getElementById("input_color3").value;

    if (input_color4 != document.getElementById("input_color4").value) {
        update = 1;
    }
    input_color4 = document.getElementById("input_color4").value;

    if (input_color5 != document.getElementById("input_color5").value) {
        update = 1;
    }
    input_color5 = document.getElementById("input_color5").value;

    if (input_color6 != document.getElementById("input_color6").value) {
        update = 1;
    }
    input_color6 = document.getElementById("input_color6").value;

    if (input_color7 != document.getElementById("input_color7").value) {
        update = 1;
    }
    input_color7 = document.getElementById("input_color7").value;

    if (input_color8 != document.getElementById("input_color8").value) {
        update = 1;
    }
    input_color8 = document.getElementById("input_color8").value;

    if (input_text != document.getElementById("input_text").value) {
        update = 1;
    }
    input_text = document.getElementById("input_text").value;

    if (update == 1) {
        update = 0;
        str_html = "";
        str_configcosL = "";
        str_gamecosL = "";
        str_configkhongL = "";
        str_gamekhongL = "";
        str_khongdongngoac = "";
        str_style = "";
        if (str_style != "") str_html += "<span style='" + str_style + "'>";
        var a, r, g, b, rinc, ginc, binc, ccol;
        if (input_effect == "1") {
            r = hexToR(input_color1);
            g = hexToG(input_color1);
            b = hexToB(input_color1);
            rinc = (hexToR(input_color2) - r) / input_text.length;
            ginc = (hexToG(input_color2) - g) / input_text.length;
            binc = (hexToB(input_color2) - b) / input_text.length;
            for (a = 0; a < input_text.length; a++) {
                ccol = rgbToHex(r, g, b);
                if (input_text.charAt(a) == " ") {
                    str_html += " ";
                    str_configcosL += " ";
					str_gamecosL += " ";
					str_configkhongL += " ";
					str_gamekhongL += " ";
					str_khongdongngoac += " ";
                } else {
                    str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                    str_configcosL += "<#" + ccol + ">§l" + input_text.charAt(a) + "";
					str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
                    str_configkhongL += "<#" + ccol + ">" + input_text.charAt(a) + "";
                    str_gamekhongL += "&#" + ccol + input_text.charAt(a) + "";
                    str_khongdongngoac += "#" + ccol + input_text.charAt(a) + "";
                }
                r += rinc;
                g += ginc;
                b += binc;
            }
        } else if (input_effect == "2") {
            r = hexToR(input_color3);
            g = hexToG(input_color3);
            b = hexToB(input_color3);
            rinc = (hexToR(input_color4) - r) / Math.floor(input_text.length / 2);
            ginc = (hexToG(input_color4) - g) / Math.floor(input_text.length / 2);
            binc = (hexToB(input_color4) - b) / Math.floor(input_text.length / 2);
            for (a = 0; a < input_text.length; a++) {
                ccol = rgbToHex(r, g, b);
                if (input_text.charAt(a) == " ") {
                    str_html += " ";
                    str_configcosL += " ";
					str_gamecosL += " ";
					str_configkhongL += " ";
					str_gamekhongL += " ";
					str_khongdongngoac += " ";
                } else {
                    str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                    str_configcosL += "<#" + ccol + ">" + "§l" + input_text.charAt(a) + "";
                    str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
                    str_configkhongL += "<#" + ccol + ">" + input_text.charAt(a) + "";
                    str_gamekhongL += "&#" + ccol + input_text.charAt(a) + "";
                    str_khongdongngoac += "#" + ccol + input_text.charAt(a) + "";
                }
                if (a < Math.floor(input_text.length / 2)) {
                    r += rinc;
                    g += ginc;
                    b += binc;
                } else {
                    r -= rinc;
                    g -= ginc;
                    b -= binc;
                }
            }
        } else if (input_effect == "3") {
            r = hexToR(input_color5);
            g = hexToG(input_color5);
            b = hexToB(input_color5);
            rinc = (hexToR(input_color6) - r) / Math.floor(input_text.length / 2);
            ginc = (hexToG(input_color6) - g) / Math.floor(input_text.length / 2);
            binc = (hexToB(input_color6) - b) / Math.floor(input_text.length / 2);
            var r2, g2, b2, rinc2, ginc2, binc2;
            r2 = hexToR(input_color6);
            g2 = hexToG(input_color6);
            b2 = hexToB(input_color6);
            rinc2 = (hexToR(input_color7) - r2) / Math.floor(input_text.length / 2);
            ginc2 = (hexToG(input_color7) - g2) / Math.floor(input_text.length / 2);
            binc2 = (hexToB(input_color7) - b2) / Math.floor(input_text.length / 2);
            for (a = 0; a < input_text.length; a++) {
                ccol = rgbToHex(r, g, b);
                if (input_text.charAt(a) == " ") {
                    str_html += " ";
                    str_configcosL += " ";
					str_gamecosL += " ";
					str_configkhongL += " ";
					str_gamekhongL += " ";
					str_khongdongngoac += " ";
                } else {
                    str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                    str_configcosL += "<#" + ccol + ">" + "§l" + input_text.charAt(a) + "";
                    str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
                    str_configkhongL += "<#" + ccol + ">" + input_text.charAt(a) + "";
                    str_gamekhongL += "&#" + ccol + input_text.charAt(a) + "";
                    str_khongdongngoac += "#" + ccol + input_text.charAt(a) + "";
                }
                if (a < Math.floor(input_text.length / 2)) {
                    r += rinc;
                    g += ginc;
                    b += binc;
                } else {
                    r += rinc2;
                    g += ginc2;
                    b += binc2;
                }
            }
        } else if (input_effect == "4") {
            str_html += "<span style='color:" + input_color8 + ";'>" + input_text + "</span>";
            str_configcosL += "<#" + input_color8 + ">" + "§l" + input_text.charAt(a) + "";
            str_gamecosL += "&#" + input_color8 + "&l" + input_text.charAt(a) + "";
            str_configkhongL += "<#" + input_color8 + ">" + input_text.charAt(a) + "";
            str_gamekhongL += "<#" + input_color8 + ">" + input_text.charAt(a) + "";
            str_khongdongngoac += "#" + input_color8 + input_text.charAt(a) + "";
        } else if (input_effect == "5") {
            var i = 0;
            for (a = 0; a < input_text.length; a++) {
                ccol = random_char[i];
                if (input_colorword == 0) i++;
                if (input_colorword == 1 && input_text.charAt(a) == " ") i++;
                if (a >= random_length) {
                    str_html += input_text.charAt(a);
                    str_configcosL += input_text.charAt(a);
                    str_gamecosL += input_text.charAt(a);
					str_configkhongL += input_text.charAt(a);
					str_gamekhongL += input_text.charAt(a);
					str_khongdongngoac += input_text.charAt(a);
                } else {
                    if (input_colorword == 0) {
                        if (input_text.charAt(a) == " ") {
                            str_html += " ";
                            str_configcosL += " ";
                            str_gamecosL += " ";
                            str_configkhongL += " ";
                            str_gamekhongL += " ";
                            str_khongdongngoac += " ";
                        } else {
                            str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                            str_configcosL += "<#" + ccol + ">" + "§l" + input_text.charAt(a) + "";
                            str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
                            str_configkhongL += "&#" + ccol + input_text.charAt(a) + "";
                            str_gamekhongL += "&#" + input_text.charAt(a) + "";
                            str_khongdongngoac += "#" + input_text.charAt(a) + "";
                        }
                    } else {
                        if (a == 0 || input_text.charAt(a - 1) == " ") {
                            str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                            str_configcosL += "<#" + ccol + ">" + "§l" + input_text.charAt(a) + "";
                            str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
                            str_configkhongL += "<#" + ccol + ">" + input_text.charAt(a) + "";
                            str_gamekhongL += "&#" + ccol + input_text.charAt(a) + "";
                            str_khongdongngoac += "&#" + ccol + input_text.charAt(a) + "";
                        } else if (a == input_text.length - 1 || input_text.charAt(a) == " ") {
                            str_html += input_text.charAt(a) + "</span>";
                            str_configcosL += input_text.charAt(a) + "";
                            str_gamecosL += input_text.charAt(a) + "</span>";
                            str_configkhongL += input_text.charAt(a) + "</span>";
                            str_gamekhongL += input_text.charAt(a) + "</span>";
                            str_khongdongngoac += input_text.charAt(a) + "</span>";
                        } else {
                            str_html += input_text.charAt(a);
                            str_configkhongL += input_text.charAt(a) + "</span>";
                            str_gamekhongL += input_text.charAt(a) + "</span>";
                            str_khongdongngoac += input_text.charAt(a) + "</span>";
                        }
                    }
                }
            }
        } else if (input_effect == "6") {
            var i, s, p;
            for (a = 0; a < input_text.length; a++) {
                i = a / input_text.length;
                s = 1 / 6;
                p = (i % s) / s;
                if (i >= s * 0) ccol = rgbToHex(255, 255 * p, 0);
                if (i >= s * 1) ccol = rgbToHex(255 * (1 - p), 255, 0);
                if (i >= s * 2) ccol = rgbToHex(0, 255, 255 * p);
                if (i >= s * 3) ccol = rgbToHex(0, 255 * (1 - p), 255);
                if (i >= s * 4) ccol = rgbToHex(255 * p, 0, 255);
                if (i >= s * 5) ccol = rgbToHex(255, 0, 255 * (1 - p));
                if (input_text.charAt(a) == " ") {
                    str_html += " ";
                    str_configcosL += " ";
                    str_gamecosL += " ";
                    str_configkhongL += " ";
                    str_gamekhongL += " ";
                    str_khongdongngoac += " ";
                } else {
                    str_html += "<span style='color:#" + ccol + ";'>" + input_text.charAt(a) + "</span>";
                    str_configcosL += "<#" + ccol + ">" + "§l" + input_text.charAt(a) + "";
					str_gamecosL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
					str_configkhongL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
					str_gamekhongL += "&#" + ccol + "&l" + input_text.charAt(a) + "";
					str_khongdongngoac += "#" + ccol + "&l" + input_text.charAt(a) + "";
                }
            }
        }
        if (str_style != "") {
            str_html += "</span>";
        }
        document.getElementById("div_preview").innerHTML = "<span style='font-size:18px'>" + str_html + "</span>";
		
        document.getElementById("output_configcosL").value = str_configcosL;
        document.getElementById("output_gamecosL").value = str_gamecosL;
        document.getElementById("output_configkhongL").value = str_configkhongL;
        document.getElementById("output_gamekhongL").value = str_gamekhongL;
        document.getElementById("output_khongdongngoac").value = str_khongdongngoac;
		
    }
    setTimeout(textcolorizer_handle, 50);
}
