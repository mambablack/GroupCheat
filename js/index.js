$('.sortable').sortable();
/*删除表头后，取消选择checkbox*/
function deSelectCheckbox(sel) {
    // console.log(sel)
    $("#" + sel).attr("checked", false);
}

function addTableHead(sel) {
    $(sel).each(function(index, el) {
        var t_id = $(this).attr("id");
        // console.log(t_id);
        var t = "<li class='list-group-item'>" + $(this).parent().text() + "<button type='button' class='close' aria-label='Close' name=" + t_id + "><span aria-hidden='true'>&times;</span></button></li>";
        $("#tableHead").append(t);
    });
    $('.sortable').sortable({
        items: ':not(.sort-disabled)'
    });
    $("#tableHead li button").on('click', function(event) {
        // console.log($(this).index())
        deSelectCheckbox($(this).attr("name"));
        $(this).parent().remove();
    });
};

function deleteTableHead(sel) {
    // console.log(sel)
    $(sel).each(function(index, el) {
        $("#tableHead li button[name=" + $(this).attr("id") + "]").parent().remove();
    });
};

function clearTableHead(sel) {
    console.log("clear")
    $("#tableHead li").remove();
    $(sel).attr('checked', false);
}