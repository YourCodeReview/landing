const config = {
  'value': '%DT%',
  'append': {
    'key': 'v',
    'to': [
      'css',
      'image',
      {
        'type': 'js',
        'files': ['main.js']
      }
    ]
  }
}

export default config;