let recipes = {
  prop: 1
}
function updateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}
function updateObjectWithKeyAndValue(object, key, value) {
  let newObj = Object.assign({},object)
  newObj[key] = value
  return newObj
}
