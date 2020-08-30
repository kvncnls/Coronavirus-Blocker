replaceText(document.body);

function replaceText(element) {
  if (element.hasChildNodes()) {
    element.childNodes.forEach(replaceText);
  } else if (element.nodeType === Text.TEXT_NODE) {
    const noCorona = document.createElement("span");
    noCorona.innerHTML = element.textContent.replace(
      /(coronavirus)/gi,
      '<span class="blackedOut">$1</span>'
    );

    const noCovid19 = document.createElement("span");
    noCovid19.innerHTML = element.textContent.replace(
      /(covid\-19)/gi,
      '<span class="blackedOut">$1</span>'
    );

    const noCovid = document.createElement("span");
    noCovid.innerHTML = element.textContent.replace(
      /(covid)/gi,
      '<span class="blackedOut">$1</span>'
    );

    if (element.textContent.match(/coronavirus/gi)) {
      element.replaceWith(noCorona);
    }
    if (element.textContent.match(/covid\-19/gi)) {
      element.replaceWith(noCovid19);
    }
    if (element.textContent.match(/covid/gi)) {
      element.replaceWith(noCovid);
    }
  }
}
