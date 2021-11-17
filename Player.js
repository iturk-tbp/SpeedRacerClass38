class Player {
  constructor() {
    this.name = null;
    this.index = null;
    this.positionx = 0;
    this.positiony = 0;
  }
  addPlayer(){
    var playerIndex = "players/player" + this.index;
    if(this.index === 1){
      this.positionx = width/2 - 100;
    }
    else{
      this.positionx = width/2 + 100
    }
    database.ref(playerIndex).set({
      name: this.name,
      positionx: this.positionx,
      positiony: this.positiony
    })
  }
  getDistance(){
    var playerDistanceref = database.ref("players/player"+this.index)
    playerDistanceref.on("value",data=>{
      var data = data.val()
      this.positionx = data.positionx
      this.positiony = data.positiony
    })
  }
  getCount(){
    var countref = database.ref("playerCount")
    countref.on("value",data => {
      playerCount = data.val()
    })
  }
  updateCount(count){
    database.ref("/").update({
      playerCount: count
    })
  }
  update(){
    var playerIndex = "players/player" + this.index
    database.ref(playerIndex).update({
      positionx: this.positionx,
      positiony: this.positiony,

    })
  }
  static getPlayersInfo(){
    var playerInforef = database.ref("players")
    playerInforef.on("value",data =>{
      allPlayers = data.val();
    })
  }
}
