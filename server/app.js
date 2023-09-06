const express=require('express');
const app=express();
const cors=require('cors');
const indexRouter=require('./api/routes/index');
const dnsServer=require('./utils/dns-server');
const dns = require('dns');
const errorHandler = require('./api/middlewares/errorHandler');

app.use(express.json());
app.use(cors())
// app.use(dnsServer.setDnsServer);
const DNS_SERVERS = process.env.DNS_SERVERS;

// Set the DNS servers
dns.setServers(DNS_SERVERS.split(','));
const ipAddress = dns.resolve("https://concerned-slug-top-hat.cyclic.cloud/");
console.log(ipAddress)


app.use('/',indexRouter);
app.get('/test',(req,res)=>{
    res.send("Testing!")
})
app.use(errorHandler)

module.exports=app;