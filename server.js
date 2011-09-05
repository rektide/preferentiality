var file= require('file'),
	dust= require('dust'),
	fs= require('fs')

var dest= fs.openSync('templates.js', 'w'),
	suffix='.dust',
	suffix_len= suffix.length,
	prefix='templates/',
	prefix_len = prefix.length

file.walk('./templates',function(err,dirPath,dirs,files){
	for(var f in files) {
		var file = files[f],
			tail_start = file.length - suffix_len
			tail = file.substring(tail_start)
		if(tail=='.dust') {
			var contents= fs.readFileSync(file,'utf8'),
				name= file.substring(prefix_len,tail_start)
			var result= dust.compile(contents,name)
			console.log("writing",name)
			fs.writeSync(dest, result)
			fs.writeSync(dest, "\n")
		}
	}
	
})
