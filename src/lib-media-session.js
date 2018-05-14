// lib-media-session: https://github.com/JackPu/lib-media-session
import { isFunction } from 'util'

const EVENTS = {
    play () {},
    pause () {},
    seekbackward() {},
    seekforward() {},
    previoustrack() {},
    nexttrack() {}
}

const DEFAUL_TYPE = 'image/jpeg'

const _mediaSession = {

  init (options) {
    if (this._checkMediaSession()) {
      this.opts = Object.assign(EVENTS, options)
      this._bindEvents()
      if (this.opts.setTitle) {
        this._title = document.title
      }
    }
  },

  _checkMediaSession () {
    this._mes = navigator.mediaSession
    if (!this._mes) {
      console.error('Cannot support mediaSession')
      console.info('Please view: https://developers.google.com/web/updates/2017/02/media-session')
    }
    return this._mes
  },

  setCover (args) {
    this._checkMediaSession()
    if (this._mes && window.MediaMetadata) {
      const data = args
      data.artwork = this.loopSize(args.artwork)
      if (this.setTitle) {
        document.title = data.title + '-' + this._title
      }
      this._mes.metadata = new MediaMetadata({
        title: data.title || this.opts.meida.src,
        artist: data.artist || '',
        album: data.album || '',
        artwork: data.artwork
      });
    }
  },

  loopSize (arr) {
    const newArr = []
    const sizeList = ['96', '128', '192', '256', '384', '512']
    sizeList.forEach((item) => {
      const _size = `${item}x${item}`
      if (typeof arr === 'string') {
        newArr.push({
          src: arr,
          size: _size,
          type: DEFAUL_TYPE
        })
      } else if (typeof arr === 'object') {
        newArr.push({
          src: arr.src,
          size: _size,
          type: arr.type || DEFAUL_TYPE
        })
      } else {
        if (this._matchSize(_size, arr)) {
          newArr.push(this._matchSize(_size, arr))
        } else {
          newArr.push({
            src: arr[0].size,
            type: arr[0].type,
            size: _size
          })
        }
      }
    })
    return newArr
  },

  _matchSize(size, arr) {
    for (let i = 0; i < arr.length; i++){
      if (arr[i].size === size) {
        return arr[i]
      }
    }
    return false
  },

  _bindEvents () {
    Object.keys(EVENTS).forEach((k) => {
      if (isFunction(this._mes.setActionHandler) && isFunction(this.opts[k])) {
        this._mes.setActionHandler(k, this.opts[k])
      }
    })
  }

}

window._mediaSession = _mediaSession
window.mediaSession = _mediaSession

module.exports = {}
