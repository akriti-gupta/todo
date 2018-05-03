var config = require('./config');

module.exports = {
    
    getDbConnectionString: function() {
        return 'mongodb://'+config.dbUser+':'+config.dbPassword+'@ds113700.mlab.com:13700/todoapp';
    }
    
}