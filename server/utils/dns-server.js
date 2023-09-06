module.exports={
    setDnsServer:(req,res,next)=>{
        req.headers['X-DNS-Servers']=process.env.DNS_SERVERS;
        next();

    }
}