// https://www.w3.org/TR/?tag=css
// 获取CSS标准文档
var lis = document.getElementById("container").children

var result = [];

for(let li of lis) {
    if(li.getAttribute('data-tag').match(/css/))
        result.push({
            name:li.children[1].innerText,
            url:li.children[1].children[0].href
        })
}
console.log(JSON.stringify(result, null, 2))
