constexpress=require('express');
constapp=express();
constpath=require('path');

app.us(express.static(__dirname));

app.listen(process.env.PORT||8080);


//PathLocationStradegy
app.get(function(req,res) {
    res.sendFile(path.join(__dirname+'/index.html'));
});

console.log('Console Listening');