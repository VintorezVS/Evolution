var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
    function preload() {
    }
	
    function create() {
        var graphics = game.add.graphics(0, 0);	
		graphics.beginFill(0xFF0000, 1);
		var circle = graphics.drawCircle(300, 300, 100);
    }

    function update () {
    }