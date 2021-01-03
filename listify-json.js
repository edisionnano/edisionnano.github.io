
$.ajax({
    url: 'https://api.github.com/repos/pineappleEA/pineapple-src/releases',
    type: "get",
    dataType: "json",
   
    success: function(data) {
        drawTable(data);
    }
});

function drawTable(data) {
	drawRow(data[0]);
    for (var i = 2; i < data.length - 7; i++) {
        drawRow(data[i]);
    }
}

function drawRow(rowData) {
    var row = $("<tr />")
    $("#personDataTable").append(row); 
    row.append($('<div class="featured"><a href=' + rowData.assets[1].browser_download_url + ">" + rowData.tag_name + "</a></div>"));
}

