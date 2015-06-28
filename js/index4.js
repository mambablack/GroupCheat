
/*删除表头后，取消选择checkbox*/
function deSelectCheckbox(sel) {
    // console.log(sel)
    $("#" + sel).attr("checked", false);
}

function addTableHead(sel) {
    $(sel).each(function(index, el) {
        var t_id = $(this).attr("id");
        // console.log(t_id);
        // var t = "<li class='list-group-item'>" + $(this).parent().text() + "<button type='button' class='close' aria-label='Close' name=" + t_id + "><span aria-hidden='true'>&times;</span></button></li>";
        var t = "<li class='list-group-item'>"
        +"<div class='row'>" 
        +"<div class='col-md-2'><label>"+$(this).parent().text()+"</label></div>"
        +"<div class='col-md-3'>"
        +"<select class='form-control input-sm'>"
            +"<option>等于</option>"
            +"<option>大于</option>"
            +"<option>小于</option>"
            +"<option>IN</option>"
            +"<option>NOT IN</option>"
            +"<option>LIKE</option>"
        +"</select>"
        +"</div>"
        +"<div class='col-md-3'>"
        +"<input type='text' />"
        +"</div>"
        +"<div class='col-md-3'>"
        +"<div class='form-group'>"
        +"<input type='file' id='exampleInputFile'>"
        +"</div>"
        +"</div>"
        +"<div class='col-md-1'>"
        +"<button type='button' class='close' aria-label='Close' name=" + t_id 
        + "><span aria-hidden='true'>&times;</span></button></div></div></li>";
        $("#tableHead").append(t);
    });

    $("#tableHead li button").on('click', function(event) {
        // console.log($(this).index())
        deSelectCheckbox($(this).attr("name"));
        // console.log($(this).parents("li"))
        $(this).parents("li").remove();
    });
};

function deleteTableHead(sel) {
    // console.log(sel)
    $(sel).each(function(index, el) {
        // console.log($("#tableHead li button[name=" + $(this).attr("id") + "]").parent("li"));
        $("#tableHead li button[name=" + $(this).attr("id") + "]").parents("li").remove();
    });
};