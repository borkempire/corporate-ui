Polymer({
  is: name,
  properties: {
    text: String,
    variation: 0,
    fullbleed: {
      type: Boolean,
      value: true
    },
    copyright: {
      type: String,
      value: function() {
        var date = new Date();
        return "Copyright Scania " + date.getFullYear() + " All rights reserved."
      }
    },
    navItems: {
      type: Boolean,
      value: false
    }
  },
  created: function() {
    var items = [].slice.call(this.children).filter(function(item) {
      return item.nodeName == 'NAV-ITEM';
    });
    this.properties.navItems.value = items.length;
  },
  attached: function() {
    this.style.display = 'block';
  }
});
