for(var name in this) {
    if((name.toString()).match(/boom\d/)) {
      Bomb.CutTheWire(this[name]);
    }
  }