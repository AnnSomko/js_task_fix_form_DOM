document.querySelectorAll("input").forEach(function(e){var t=document.createElement("label");t.classList.add("field-label"),t.setAttribute("for",e.id);var l=e.name.replace(/([A-Z])/g," $1").trim();l=l[0].toUpperCase()+l.slice(1),e.setAttribute("placeholder",l),t.textContent=l,e.insertAdjacentElement("beforebegin",t)});
//# sourceMappingURL=index.0fdc395b.js.map
