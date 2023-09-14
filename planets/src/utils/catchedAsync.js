module.exports = fn => ( req, res, netx ) => 
    fn( req, res ).catch( err => netx(err) );

/* module.exports = fn => {
    return function(req, res , next){
        fn(req, res).catch( err => {
            next(err);
        });
    }
}; */