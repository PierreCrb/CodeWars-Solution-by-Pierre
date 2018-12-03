function songDecoder(song){
    var remove = "WUB";
    var original = '';
    var parts = song.split(remove);
    for (index = 0; index < parts.length; ++index) {
      if (parts[index] != ''){
        original = original + ' ' + parts[index];
      }
    }
    original = original.trim();
    return original;
  }