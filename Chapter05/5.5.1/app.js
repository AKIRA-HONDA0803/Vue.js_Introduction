// ミックスインの定義
var Sharable = {
  data: function () {
    return {
      _isProcessing: false
    }
  },
  created: function () {
    console.log('Sharableミックスインのフックが呼ばれました')
  },
  methods: {
    share: function () {
      if (this._isProcessing) {
        return
      }
      if (!window.confirm('シェアしますか?')) {
        return
      }
      this._isProcessing = true
      setTimeout(() => {
        window.alert('シェアしました')
        this._isProcessing = false
      }, 300)
    }
  }
}

var IconShareButton = {
  mixins: [Sharable],
  created: function () {
    console.log('IconShareButtonのフックが呼ばれました')
  },
  template: `
    <button @click="share"><i class="fas fa-share-square"></i></button>
  `,
}

// shareという名前が重複している場合、ミックスインよりもコンポーネントのオプションが優先される
var TextShareButton = {
  mixins: [Sharable],
  created: function () {
    console.log('TextShareButtonのフックが呼ばれました')
  },
  template: `
    <button @click="share">シェアする</button>
  `,
  methods: {
    share () {
      window.alert('コンポーネントからシェアしました')
    }
  }
}

new Vue({
  el: '#app',
  components: {
    IconShareButton,
    TextShareButton
  }
})