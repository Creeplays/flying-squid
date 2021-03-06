module.exports.server=function(serv)
{
  serv.entityMaxId=0;
  serv.players=[];
  serv.uuidToPlayer={};
  serv.entities={};

  serv.getPlayer = username => {
    const found=serv.players.filter(pl => pl.username == username);
    if(found.length>0)
      return found[0];
    return null;
  };
};

module.exports.player=function(player){
  player.commands.add({
    base: 'gamemode',
    aliases: ['gm'],
    info: 'to change game mode',
    usage: '/gamemode <0-3>',
    op: true,
    parse(str) {
      let results;
      if(!(results = str.match(/^([0-3])$/)))
        return false;
      return parseInt(str);
    },
    action(mode) {
      player.setGameMode(mode);
    }
  });
};