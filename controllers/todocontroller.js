module.exports=function(app){
	
	var data=
	[
		{
		item:'do coding'
		},
		{
		item:'do eating'
		},
		{
		item:'get some work'
		}
	]
	
	app.get('/todo',function(req,res){
		res.render('todo',{todo:data});
		
	});
	
	app.post('/todo',function(req,res){
		data.push(req.body);
		res.json(data)
	});
	
	app.delete('/todo',function(req,res){
		
	});
}