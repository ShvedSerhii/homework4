function myFactoryObjects() {
  let privatePropOne
  let privatePropTwo
  return {
    setPrivatePropOne: function(value) {
      privatePropOne = value
    },
    getPrivatePropOne: function() {
      return privatePropOne
    },
    setPrivatePropTwo: function(value) {
      privatePropTwo = value
    },
    getPrivatePropTwo: function() {
      return privatePropTwo
    }
  }
}
