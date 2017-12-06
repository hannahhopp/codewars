function pigIt (str) {
  var strArray = str.split(' ');
  return strArray.reduce( function(pigLatin, currentElement) {
    // check that currentElement is a word and not punctuation
    if (currentElement.match(/[A-Z]/i)) {
      pigLatin.push(currentElement.slice(1) + currentElement[0] + 'ay');
    }
    else pigLatin.push(currentElement);
    return pigLatin;
  }, []).join(' ');
}
