const app = Vue.createApp({
  data() {
    return {
      listName: 'Packing List',
      columnOne: 'Clothes',
      columnTwo: 'Toiletries',
      clothesList: ['pants', 'shirts', 'shoes', 'socks'],
      toiletriesList: ['toothbrush', 'toothpaste', 'floss', 'hairbrush'],
      newItem: '',
      itemType: false
    }
  },
  methods: {
    onSubmit() {
      console.log(this.itemType)
      if (this.itemType) {
        this.toiletriesList.push(this.newItem)
      }
      else {
        this.clothesList.push(this.newItem)
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