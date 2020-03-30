
var $parentNode = window.parent.document;
// 列表数据渲染
var parentDiv = $parentNode.getElementById("vertical-timeline");
var innerHtml = "";
$.getJSON("http://server.family-lucky.club/all",function(result){
    $.each(result, function(i, item){
        var demoHtml = "                           <div id=\"vertical-timeline-demo\" class=\"vertical-timeline-block\">\n" +
            "                                        <div class=\"vertical-timeline-icon navy-bg\">\n" +
            "                                            <i class=\"fa fa-briefcase\"></i>\n" +
            "                                        </div>\n" +
            "                                        <div class=\"vertical-timeline-content\">\n" +
            "                                            <h2>编号["+ item['id'] +"]</h2>\n" +
            "                                            <p>"+item['name'] +"\n" +
            "                                            </p>\n" +
            "                                            <a href=\"#\" class=\"btn btn-sm btn-primary\"> 更多信息</a>\n" +
            "                                            <span class=\"vertical-date\">状态:"+ item['statusDesc'] +" <br>\n" +
            "                                        <small>"+ item['ctime'] +"</small>\n" +
            "                                    </span>\n" +
            "                                        </div>\n" +
            "                                    </div>";
        innerHtml += demoHtml;
        // 数据渲染
         console.log(item);
        // console.log(item['id'] + '-' + item['name']+ '-' + item['status']+ '-' + item['ctime']);
        // console.log(innerHtml)
    });
    parentDiv.innerHTML = innerHtml;
});