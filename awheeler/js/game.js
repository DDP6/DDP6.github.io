//"use strict";

var Game = {
    display: null, //Make a display and make sure it's empty.
    map: {}, //Set up a map gameobject to fill in later.
    mapWidth: 100, //Set width.
    mapHieght: 50, //Set Hieght.

    init: function(){ //Happens on startup.
        this.display = new ROT.Display({width:this.mapWidth, height:this.mapHieght}); //Make a new display with the W/H set earlier.
        document.getElementById("gameSpace").appendChild(this.display.getContainer()); //Find the place in the HTML to modify.
        this._generateMap(); //Call the _generateMap function.
    },

    _generateMap: function(){ //Generates a dungeon floor.
        var mapGen = new ROT.Map.Uniform(this.mapWidth,this.mapHieght); //Generate the map with the same W/H set earlier.
        var freeCells = []; //Make an empty array.
        var mapCallback = function(x,y,value){
            if(value){return;} //Find only empty cells.
            var key = x+","+y; //Key is = to x,y
            this.map[key] = "."; //Add key to map
            freeCells.push(key); //Add the empty cell to the array.
        }

        mapGen.create(mapCallback.bind(this)); //Bind the callback to the Game object.
        this._generateBoxes(freeCells); //Call the _generateBoxes function.
        this._drawWholeMap(); //Draw the map.
    },
    _generateBoxes : function(freeCells){ 
        for(var i=0;i<10;i++){ //Only make 10 boxes.
            var index = Math.floor(ROT.RNG.getUniform() * freeCells.length); //Get a random cell from the freeCells array.
            var key = freeCells.splice(index,1)[0]; 
            this.map[key] = "#"; //Add the key to the array.
        }
    },

    _drawWholeMap: function(){
        for(var key in this.map){ //For the amount of Keys in the map.
            var parts = key.split(","); //Seperate them wherever a comma appears.
            var x = parseInt(parts[0],10);
            var y = parseInt(parts[1],10);
            this.display.draw(x,y,this.map[key],this.map.cellColor,this.map.cellBackground); //Draw the map.
        }
    }
};
