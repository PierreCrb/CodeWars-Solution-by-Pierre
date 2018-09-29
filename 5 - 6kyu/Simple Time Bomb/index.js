var wire = Object.keys(global).filter(x=>(typeof global[x] === 'number'))[0];

CutTheWire(this[wire]);