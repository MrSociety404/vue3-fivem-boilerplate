fx_version 'cerulean'
games { 'gta5' }

author 'MrSociety404'
description 'LCDV '
version '1.0'

shared_script '@es_extended/imports.lua'

server_scripts {
  'server/main.lua'
}

client_scripts {
  'config.lua',
	'client/main.lua'
}

ui_page 'html/dist/index.html'

files {
  'html/dist/index.html',
  'html/dist/assets/*.js',
  'html/dist/assets/*.css',
  'html/dist/img/*.png',
  'html/dist/fonts/*.ttf',
  'html/dist/*',
}

dependency 'es_extended'