function FactoryObjects() {
  let privatePropOne
  let privatePropTwo

  this.setPrivatePropOne = function(value) {
    privatePropOne = value
  }
  this.getPrivatePropOne = function() {
    return privatePropOne
  }
  
  this.setPrivatePropTwo = function(value) {
    privatePropTwo = value
  }
  this.getPrivatePropTwo = function() {
    return privatePropTwo
  }
}
