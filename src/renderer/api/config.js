var globalConfig = {
  servers: {
    url: 'http://192.168.31.5:5000',
    fileServerApi: 'http://192.168.31.5:5000',
    plyrIconUrl: 'http://192.168.43.122:10100/images/20190829/_20190429110849_8675.svg'
  },
  activemq: {
    ip: '192.168.43.101',
    port: 61614,
    user: 'admin',
    password: 'admin',
    topic: 'notice_server'
  }
};
export var servers = globalConfig.servers
export var activemq = globalConfig.activemq

