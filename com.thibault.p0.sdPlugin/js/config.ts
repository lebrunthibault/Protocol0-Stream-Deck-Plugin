const p0Host = '127.0.0.1:8000'

const Config = {
  P0_WS_URL: `ws://${p0Host}/song_state`,
  P0_API_URL: `http://${p0Host}`,
  INDEX_ACTION: 'toggle-track'
}

export default Config
