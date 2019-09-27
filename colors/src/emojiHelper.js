import JSEMOJI from 'emoji-js'

const jsemoji = new JSEMOJI()
jsemoji.img_set = 'emojione'
jsemoji.img_sets.emojione.path = 'https://cdn.jsdelivr.net/emojione/assets/3.0/png/32/'

export default jsemoji