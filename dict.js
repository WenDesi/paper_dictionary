
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
	var meaning_obj = get_meaning_dom(obj);
	add_meaning_in_dom(meaning_obj,meaning);
	
	var tmp = 'ff';
}

function get_meaning(word)
{
	return '温德斯';
}

function get_meaning_dom(obj)
{
	if(obj.lastChild.tagName == undefined || obj.lastChild.className.indexOf('meaning') == -1)
		meaning_obj = create_new_meaning_obj(obj);
	else
		meaning_obj = obj.lastChild;
	
	return meaning_obj;
}

function create_new_meaning_obj(obj)
{
	var insert_html = '<div class="meaning"></div>';
	obj.innerHTML = obj.innerHTML + insert_html;
	
	return obj.lastChild;
}

function add_meaning_in_dom(obj,meaning)
{
	var insert_html = '<div class="single-meaning">' + meaning + '</div>'
	obj.innerHTML = obj.innerHTML + insert_html;
}