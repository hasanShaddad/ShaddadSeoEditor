//function insertAtCaret(areaId, start,end, FocusNo) {
   
//    //دى علشان نجمع البداية و النهاية للتاج و نستخدمهم لو مفيش سيليكت
//    var text = start + end;



//    var txtarea = document.getElementById(areaId);
//    var scrollPos = txtarea.scrollTop;
//    var strPos = 0;
//    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
//        "ff" : (document.selection ? "ie" : false));
//    if (br == "ie") {
//        txtarea.focus();
//        var range = document.selection.createRange();
//        range.moveStart('character', -txtarea.value.length);
//        strPos = range.text.length;
//    }
//    else if (br == "ff") strPos = txtarea.selectionStart;

//    var front = (txtarea.value).substring(0, strPos);
//    var back = (txtarea.value).substring(strPos, txtarea.value.length);
//    txtarea.value = front + text + back;
//    strPos = strPos + text.length;
//    if (br == "ie") {
//        txtarea.focus();
//        var range = document.selection.createRange();
//        range.moveStart('character', -txtarea.value.length);
//        range.moveStart('character', strPos);
//        range.moveEnd('character', 0);
//        range.select();
//    }
//    else if (br == "ff") {
//        txtarea.selectionStart = strPos;
//        txtarea.selectionEnd = strPos;
//        txtarea.focus();
//    }
//    txtarea.scrollTop = scrollPos;


//    var endtext = txtarea.value.length - FocusNo;
//    txtarea.setSelectionRange(strPos, endtext); // Highlights "Cup"
//    txtarea.focus();

//}
 

  




//EditorFormControl دى الفنكشن الى هتعمل ابدايت للتكست اريا الى اليوزر هيستخدمها فى الفورم الى هتعمل انسيرت فى الداتا بيز و هيحط كلاس للتكست اريا اسمه  


 

 //ده علشان نعمل انسيرت للينك فى التكست اريا
function insertLink(areaId) {
   //هنجيب اللينك من اليوزر
    var text = "";
    var yourLink = prompt("Please enter the link here", "http://");
    if (yourLink != null) {
        text = "<a href='"+ yourLink +"'></a>";
        
    } else {
        return;
    }

  //هناخد الأداة و نشوف مكان الكيرسور مع مراعاة المتصفحات
    var txtarea = document.getElementById(areaId);
    var scrollPos = txtarea.scrollTop;
    var strPos = 0;
    var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
        "ff" : (document.selection ? "ie" : false));
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        strPos = range.text.length;
    }
    else if (br == "ff") strPos = txtarea.selectionStart;

    var front = (txtarea.value).substring(0, strPos);
    var back = (txtarea.value).substring(strPos, txtarea.value.length);
    txtarea.value = front + text + back;
    strPos = strPos + text.length;
    if (br == "ie") {
        txtarea.focus();
        var range = document.selection.createRange();
        range.moveStart('character', -txtarea.value.length);
        range.moveStart('character', strPos);
        range.moveEnd('character', 0);
        range.select();
    }
    else if (br == "ff") {
        txtarea.selectionStart = strPos;
        txtarea.selectionEnd = strPos;
        txtarea.focus();
    }
    txtarea.scrollTop = scrollPos;


    var endtext = txtarea.value.length - 4;
    //لأن مكان الكيرسور بيتحرك اربع بكسلات قدام فبرجعه تانى ...كسلت اشوف ليه
    txtarea.setSelectionRange(strPos-4, strPos-4); // Highlights "Cup"
    txtarea.focus();

}



//   SelectionTag بتتنده من فنكشن اسمها  
//دى علشان نرجع السيليكشن سترينج او نحط التاج مكان الكيرسور
function getSelectedText(tagtext, startno) {
   
    var len = $("#0122523430").val().length;
   
    var start = $("#0122523430")[0].selectionStart;
   
    var end = $("#0122523430")[0].selectionEnd;
    
    var sel = $("#0122523430").val().substring(start, end);
    if (sel != null && sel != "") {
        return sel;
        alert(sel);
    } else {
        var txtarea = document.getElementById('0122523430');
        var a = txtarea.value;
        
        var output = [a.slice(0, start), tagtext, a.slice(start)].join('');
        
        $("#0122523430").val(output);
        var start1 = start + startno;
        txtarea.setSelectionRange(start1, start1 + 14); // Highlights "Cup"
        txtarea.focus();
        return;
    }
   
}

//
//getSelectedText(tagtext) دى الفنكشن الى بتنده والى بيندهها الزرار من الفيو 
function SelectionTag(start, end,startno,texthere) {
    var tagtext = start +texthere+ end;
    var tmpVal = getSelectedText(tagtext,startno);
    
    if (tmpVal != null && tmpVal != "") {
        $("#0122523430").val($("#0122523430").val().replace(tmpVal, start + tmpVal + end));
         
    } 
   
}
//============================================================================================


 
//
//getSelectedText(tagtext)  دى الفنكشن الى بتنده والى بيندهها الزرار من الفيو 
function colorTag(texthere, startno) {
    
    var first='<span style=' + 'color:';
    
    var after =';' + '>' ;
    var end = '</span>';

    var text = "";
   
    var yourcolor = prompt("Please enter the color here", "#6600CC");
    if (yourcolor != null) {
        text = first + yourcolor + after;

    } else {
        return;
    }
    var start = text;
    var tagtext = start + texthere + end;
    var tmpVal = getSelectedText(tagtext, startno);

    if (tmpVal != null && tmpVal != "") {
        $("#0122523430").val($("#0122523430").val().replace(tmpVal, start + tmpVal + end));
        red
    }

}
























//ده الكود بتاع الأناليسيس
//هنا هنعد الحروف و الكلمات و نقيس نسب الكلمات الدلالية و عدد اللينكات الخارجية و الداخلية
function AnalysesFun(areaId, text, areaId2) {
 
    var txtarea = document.getElementById(areaId);
    var yourkeywords = document.getElementById(areaId2);
    var yourkeywordstxt = yourkeywords.value;

    var txt = txtarea.value;
    //هنا هنعد الكلمات و الحروف و نرجعهم الوان حسب العدد
    var charCount = txt.length;
    var wordCount = txt.replace(/[^\w ]/g, "").split(/\s+/).length;
    wordCount = wordCount - 1;
    if (wordCount > 1000) {
        //green
        var wordtxt = "<br/>" + "<button type='button' class='btn btn-success'>" + "The article had " + " &nbsp;" + "<span class='badge'>" + charCount + "</span>" + " characters" + " &nbsp;" + " &nbsp;" + " and " + "<span class='badge'>" + " &nbsp;" + wordCount + "</span>" + "words" + " </button> " + " &nbsp;";
            
    } else if (wordCount < 1000 && wordCount > 300) {
        //yellow
        var wordtxt = "<br/>" + "<button type='button' class='btn btn-primary'>" + "The article had " + " &nbsp;" + "<span class='badge'>" + charCount + "</span>" + " characters " + " &nbsp;" + " &nbsp;" + "and " + "<span class='badge'>" + " &nbsp;" + wordCount + "</span>" +  "words" + " </button> " + " &nbsp;";

    } else {
        //red
        var wordtxt = "<br/>" + "<button type='button' class='btn btn-danger'>" + "The article had " + " &nbsp;" + "<span class='badge'>" + charCount + "</span>" + " characters " + " &nbsp;" + " &nbsp;" + "and " + "<span class='badge'>" + " &nbsp;" + wordCount + "</span>" + "words" + " </button> " + " &nbsp;";

    }


    $('#analyseslabel1').html(wordtxt);

    var KeyWordCount = txt.split(text).length - 1;
   
    //$('#analyseslabel2').text("The text had " + KeyWordCount + " word as" + text);


    //هنا هنشوف الكلمات الدلالية و نعدها و نحسب نسبتها و نرجعهم بألوان حسب النسبة

    var yourkeywordstxtarray = yourkeywordstxt.split(',');

    var i;
    var labeltext = "";
    var dataarray=[];
    //لوب داخل مصفوفة الكلمات
    for (i = 0; i < yourkeywordstxtarray.length; ++i) {
        // do something with `substr[i]`
        var thiskeyword = yourkeywordstxtarray[i];

        var KeyWordCount = txt.split(thiskeyword).length - 1

        var keywordpersentage1 = (KeyWordCount / wordCount) * 100;
        var keywordpersentage = Math.round(keywordpersentage1).toFixed(0);
        dataarray[i] = keywordpersentage;
        if (keywordpersentage >= 7) {
            labeltext = labeltext + "  <button type='button' class='btn btn-success'>" + thiskeyword + " &nbsp;" + "<span class='badge'>" + KeyWordCount + "</span>" + " &nbsp;" + "<span class='badge'>" + keywordpersentage + "%" + "</span></button> " + " &nbsp;" + " &nbsp;" + " ";
  
        } else if (KeyWordCount == 0 || (KeyWordCount / wordCount) * 100 > 10) {
            labeltext = labeltext + "  <button type='button' class='btn btn-danger'>" + thiskeyword + " &nbsp;" + "<span class='badge'>" + KeyWordCount + "</span>" + " &nbsp;" + "<span class='badge'>" + keywordpersentage + "%" + "</span></button> " + " &nbsp;" + " &nbsp;" + " ";

        } else {
            labeltext = labeltext + "  <button type='button' class='btn btn-primary'>" + thiskeyword + " &nbsp;" + "<span class='badge'>" + KeyWordCount + "</span>" + " &nbsp;" + "<span class='badge'>" + keywordpersentage + "%" + "</span></button> " + " &nbsp;" + " &nbsp;" + " ";

        }
        var n = i + 1;
        if (n != 0 && n % 6 === 0) {
            labeltext = labeltext + "<br/>" + "<br/>"
        }
    }
    //متغير لحفظ عدد اللينكات الداخلية
    var innerlinks = 0;
    //متغير لحفظ عدد اللينكات الخارجية
    var outterlinks = 0;
    //متغير لحفظ عدد اللينكات  
    var totallink = 0;
    //اجمالى اللينكات
      totallink = txt.split('</a>').length - 1
    //لو اللينك خارجى
   outterlinks = outterlinks + txt.split('http://').length - 1
    //لو اللينك داخلى
   innerlinks = totallink - outterlinks;


    $('#analyseslabel2').html(labeltext);
    $('#analyseslinklabel').html("<br/><button type='button' class='btn btn-primary'>" + 'you have :' + " &nbsp;" + "<span class='badge'>" + innerlinks + "</span>" + " &nbsp;" + 'inner links' + " &nbsp;" + " &nbsp;" + " &nbsp;" + 'and you have : ' + "<span class='badge'>" + outterlinks + "</span>" + 'outter links' + " </button> " + " &nbsp;");
  

    return [yourkeywordstxtarray, dataarray];

}
