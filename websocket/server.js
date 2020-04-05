const uuid = require('uuid');
const getCards = require('./actions/getCards');
const PORT = 4000;

const websocketServer = require('websocket').server;

const http = require('http');

const server = http.createServer();

server.listen(PORT);
const wsServer = new websocketServer({
    httpServer: server
})

console.log('Websocket listen on PORT: ', PORT);

// accept clients

const sendMessage = (json) => {
    // We are sending the current data to all connected clients
    Object.keys(clients).map((client) => {
        clients[client].sendUTF(json);
    });
}



const messages = ['Test'];
const users = [];
const teams = {
    blue: [],
    red: []
}
const boss = {
    blue: '',
    red: ''
}
let cards = getCards();

const typesDef = {
    CHAT: "chat",
    CARDS: 'cards',
    CLICK_CARD: 'click-card',
    SHUFFLE: 'shuffle',
    NEW_BOARD: 'new-board',
    RESTART: 'restart',
    LOGIN: 'login',
    TEAMS: 'teams',
    SET_BOSS: 'set-boss',
    BOSS: 'boss',
    LOGOUT: 'logout',
}



const clients = {};
wsServer.on('request', function(request){
    const userId = uuid.v4();
    console.log((new Date()) + ' Recieved a new connection from origin ' + request.origin + '.');
    const connection = request.accept(null, request.origin);
    clients[userId] =connection;
    console.log('connected: ' + userId + ' in ' + Object.getOwnPropertyNames(clients))

    connection.on('message', function(message) {
        console.log('message')
        if (message.type === 'utf8') {
            console.log('type utf8')
          const dataFromClient = JSON.parse(message.utf8Data);
          const json = { type: dataFromClient.type };
          if (dataFromClient.type === typesDef.CHAT) {
            console.log('chat')
            messages.push(dataFromClient.message) ;
            json.data = { messages };
          }
          if (dataFromClient.type === typesDef.CARDS) {
            console.log('get cards')
            json.data = { cards };
          }
          if (dataFromClient.type === typesDef.CLICK_CARD) {
            console.log('click card')
            cards[dataFromClient.data].clicked = true;
            json.data = { cards };
            json.type = typesDef.CARDS;
          }
          if (dataFromClient.type === typesDef.RESTART) {
            console.log('restart')
            cards = getCards();
            json.data = { cards };
            json.type = typesDef.CARDS;
          }
          if (dataFromClient.type === typesDef.LOGIN) {
            console.log('login')
            const user = {
                name: dataFromClient.data.name,
                team: dataFromClient.data.team,
                isBoss: false, 
                id: userId,
            };
            users.push(user);
            teams[dataFromClient.data.team].push(user)
            json.data = { user };
          }
          if (dataFromClient.type === typesDef.TEAMS) {
            console.log('teams', teams)
            json.data = { teams };
          }
          if (dataFromClient.type === typesDef.SET_BOSS) {
            console.log('set boss')
            const t = dataFromClient.data.team;
            const  userId = dataFromClient.data.userId;
            boss[t] = userId;
            json.data = { boss: boss};
          }
          if (dataFromClient.type === typesDef.BOSS) {
            console.log('get boss')
            json.data = { boss: boss};
          }
          if (dataFromClient.type === typesDef.LOGOUT) {
            console.log('logout')
            delete users[userId];
            teams.red = teams.red.filter(t=>t.id!==userId)
            teams.blue = teams.blue.filter(t=>t.id!==userId)
            json.data = { teams };
          }
          sendMessage(JSON.stringify(json));
        }
    });

    connection.on('close', function(connection) {
        console.log((new Date()) + " Peer " + userId + " disconnected.");
        delete clients[userId];
        delete users[userId];
        teams.red = teams.red.filter(t=>t.id!==userId)
        teams.blue = teams.blue.filter(t=>t.id!==userId)
      });
})