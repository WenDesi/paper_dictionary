var serializedHighlights = decodeURIComponent(window.location.search.slice(window.location.search.indexOf("=") + 1));
var highlighter;

var initialDoc;

window.onload = function() {
	rangy.init();

	highlighter = rangy.createHighlighter();

	highlighter.addClassApplier(rangy.createClassApplier("highlight", {
		ignoreWhiteSpace: true,
		tagNames: ["span", "a"]
	}));

	highlighter.addClassApplier(rangy.createClassApplier("note", {
		ignoreWhiteSpace: true,
		elementTagName: "a",
		elementProperties: {
			href: "#",
			onclick: function() {
				var highlight = highlighter.getHighlightForElement(this);
				if (window.confirm("Delete this note (ID " + highlight.id + ")?")) {
					highlighter.removeHighlights( [highlight] );
				}
				return false;
			}
		}
	}));


	if (serializedHighlights) {
		highlighter.deserialize(serializedHighlights);
	}
};


function highlightSelectedText() {
	highlighter.highlightSelection("highlight");
}

function noteSelectedText() {
	highlighter.highlightSelection("note");
}

function removeHighlightFromSelectedText() {
	highlighter.unhighlightSelection();
}

function highlightScopedSelectedText() {
	highlighter.highlightSelection("highlight", { containerElementId: "summary" });
}

function noteScopedSelectedText() {
	highlighter.highlightSelection("note", { containerElementId: "summary" });
}

function reloadPage(button) {
	button.form.elements["serializedHighlights"].value = highlighter.serialize();
	button.form.submit();
}