export function getFirst(element, qualifiedName, defaultValue = null) {
  try {
    return element.getElementsByTagName(qualifiedName)[0].childNodes[0]
      .nodeValue;
  } catch {
    // TODO:  Uncaught (in promise) TypeError: can't access property "childNodes",
    // element.getElementsByTagName(...)[0] is undefined
    return defaultValue;
  }
}

export function getAttr(element, qualifiedName, attr, defaultValue = null) {
  try {
    return element.getElementsByTagName(qualifiedName)[0].getAttribute(attr);
  } catch {
    return defaultValue;
  }
}

// returns all item in element
export function getAllItem(element, qualifiedName, defaultValue = null) {
  try {
    let allList = [];
    let allElem = element.getElementsByTagName(qualifiedName);
    allElem.forEach((item) => {
      allList.push(item.childNodes[0].nodeValue);
    });
    return allList;
  } catch {
    return defaultValue;
  }
}
