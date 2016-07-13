
var oBtn = document.getElementById("button");

oBtn.onclick = function() {
    var sel = rangy.getSelection();
    alert(sel.toString());
	
	var parent = find_line_div(sel)
	add_meaning(sel.toString(),parent);
};

function find_line_div(obj)
{
	var parent = obj.focusNode.parentElement;
	
	while (parent.tagName != 'DIV')
	{
		parent = parent.parentElement;
	}
	
	return parent;
}

function add_meaning(word,obj)
{
	console.log(obj);
	
	var meaning = get_meaning(word);
	
	var tmp = 'ff';
}

function get_meaning(word)
{
	return '温德斯';
}