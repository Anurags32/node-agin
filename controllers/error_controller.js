exports.errorcontroller = (req,res,next)=>{
  res.sendFile(path.join(__dirname, 'views', '404.html'));
  // res.status(404).send('<h1>Page not found</h1>');
  console.log("page not found");
};