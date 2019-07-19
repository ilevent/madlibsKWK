
var noun = $(`.noun`).val()
var verb = $(`.verb`).val()
var adj = $(`.adj`).val()
var madlibs = $(`.madlibs`)
var button = $(`button`)

button.on ("click", paragraph)

function paragraph() {
  event.preventDefault();
  var sentence = `Once upon a time there was a ${adj} KWK class in Seattle. Everyday they used ${noun} to code.`
  madlibs.append(`<p> ${sentence} </p>`)
}
