class App {
  constructor({ server, database, logger}) {
    this.server = server;
    this.database = database;
    this.logger = logger;


  }

  async start() {
    if(!this.database) {
      console.log('no database found')

    }
    await this.server.start();
  }
}

module.exports = App;
