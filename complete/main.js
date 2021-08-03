const app = Vue.createApp({
  data() {
    return {
      listName: 'Packing List',
      columnOne: 'Clothes',
      columnTwo: 'Toiletries',
      clothesList: ['Pants', 'Shirts', 'Shoes', 'Socks'],
      toiletriesList: ['Toothbrush', 'Toothpaste', 'Floss', 'Hairbrush'],
      newItem: '',
      itemType: false
    }
  },
  methods: {
    onSubmit() {
      if (this.itemType) {
        this.toiletriesList.push(this.newItem.charAt(0).toUpperCase() + this.newItem.slice(1))
      }
      else {
        this.clothesList.push(this.newItem.charAt(0).toUpperCase() + this.newItem.slice(1))
      }
      this.newItem = ''
    }
  },
  computed: {
    isActive() {
      return this.itemType
    },
    checkedValue: {
      get() {
        return this.itemType
      },
      set(newValue) {
        this.itemType = newValue
      }
    }
  }
})