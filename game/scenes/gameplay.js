import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const LEVELS = 
[
	{
		level: 1,
		width: 30,
		height: 20,
		tiles: 
		[
			[2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
		]
	}
]


// PHYSICS
const RUN_ACCEL = 0.1;
const RUN_DECEL = 0.05;
const MAX_SPEED = 2;
const JUMPSPEED = 3.4;
const GRAVITY = 0.15;

// TILES
const TILE_SIZE = 16;
const EPSILON = 0.00000000001;

const dude = {
    xvel: 0,
    yvel: 0,
    width: 10,
    height: 14,
    hp_max: 5,
    hp_current: 5,
	falling: true,
    level: 1
};

export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'gameplay'});
	},
	preload: function()
	{
		// TODO
		this.load.spritesheet("dude",
			"assets/sprites/dude3.png",
			{frameWidth: 20, frameHeight: 16}
		);

		this.load.atlas("tiles", "assets/dungeon_tiles.png", "assets/dungeon_tiles.json");
	},
	create: function()
	{
		//generate level
		for(let i = 0; i < LEVELS[0].tiles.length; i++)
		{
			for(let j = 0; j < LEVELS[0].tiles[i].length; j++)
			{
				if(LEVELS[0].tiles[i][j] != 0)
				{
					this.add.image(j*TILE_SIZE, i*TILE_SIZE, "tiles", "floor-1").setScale(1).setOrigin(0,0);
				}
			}
		}

		this.cursors = this.input.keyboard.addKeys("UP,LEFT,DOWN,RIGHT,W,A,S,D,R,SPACE");

		dude.sprite = this.add.sprite(50, 50, 'dude').setDisplaySize(20, 16).setOrigin(0.5, 1).setDepth(4);
		this.cameras.main.startFollow(dude.sprite);
		this.cameras.main.setBounds(0, 0, LEVELS[0].width*TILE_SIZE, LEVELS[0].height*TILE_SIZE);
		this.cameras.main.setZoom(1);
	},
	update()
	{
		const left = this.cursors.A.isDown || this.cursors.LEFT.isDown;
		const right = this.cursors.D.isDown || this.cursors.RIGHT.isDown;
		const jump = this.cursors.W.isDown || this.cursors.UP.isDown;
		const down = this.cursors.S.isDown || this.cursors.DOWN.isDown;

		if( (!left && !right) || (left && right))
		{
			if(dude.xvel > 0)
				dude.xvel = Math.max(0, dude.xvel - RUN_DECEL);
			else
				dude.xvel = Math.min(0, dude.xvel + RUN_DECEL);
		}

		if (left && !right)
		{
			dude.xvel = Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL);
		}
		else if (right && !left)
		{
			dude.xvel = Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL);
		}
		
		dude.x_old = dude.sprite.x;
		dude.y_old = dude.sprite.y;

		if(dude.falling)
			dude.yvel += GRAVITY;


		if(jump && !dude.falling)
		{
			dude.yvel = -JUMPSPEED;
			dude.falling = true;
		}

		dude.sprite.x += dude.xvel;
		dude.sprite.y += dude.yvel;

		if(dude.sprite.y < dude.height)
		{
			dude.sprite.y = dude.height;
			dude.yvel = 0;
		}

		else if(dude.sprite.y > ((LEVELS[0].height)*TILE_SIZE))
		{
			dude.falling = false;
			dude.sprite.y = LEVELS[0].height*TILE_SIZE - EPSILON;
			dude.yvel = 0;
		}

		if(dude.sprite.x < dude.width/2)
		{
			dude.sprite.x = dude.width/2;
			dude.xvel = 0;
		}
		else if(dude.sprite.x > LEVELS[0].width*TILE_SIZE - dude.width/2)
		{
			dude.sprite.x = LEVELS[0].width*TILE_SIZE - dude.width/2 - EPSILON;
			dude.xvel = 0;
		}

		handleCollision(this);

		// player coordinates
		const index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
		const index_col = Math.floor(dude.sprite.x/TILE_SIZE);
		const index_col_left = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
		const index_col_right = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);

		if(!LEVELS[0].tiles[index_row][index_col_left] && !LEVELS[0].tiles[index_row + 1][index_col_right])
		{
			dude.falling = true;
		}
	}
});

function handleCollision(game)
{

	
	function collideTile(index_row, index_col)
	{
		const y_top = index_row*TILE_SIZE;
		const y_bottom = y_top + TILE_SIZE;
		const x_left = index_col*TILE_SIZE;
		const x_right = x_left + TILE_SIZE ;

		//down
		if(dude.sprite.y - EPSILON > y_top && dude.y_old - EPSILON <= y_top)
		{
			dude.sprite.y = y_top;
			dude.yvel = 0;
			dude.falling = false;
			return;
		}

		//right
		if(dude.sprite.x + dude.width/2 - EPSILON > x_left && dude.x_old + dude.width/2 - EPSILON <= x_left)
		{
			dude.xvel = 0;
			dude.sprite.x = x_left - dude.width/2;
			return;
		}

		//left
		if(dude.sprite.x - dude.width/2 < x_right && dude.x_old - dude.width/2 >= x_right)
		{
			dude.xvel = 0;
			dude.sprite.x = x_right + dude.width/2;
			return;
		}

		//top
		if(dude.sprite.y - dude.height + EPSILON < y_bottom && dude.y_old - dude.height >= y_bottom)
		{
			dude.yvel = 0;
			dude.sprite.y = y_bottom + dude.height;
			return;
		}
	}

	let index_row, index_col;

	// top left
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	console.log(index_col);
	if(LEVELS[0].tiles[index_row][index_col])
	{
		console.log("bottom right");
		collideTile(index_row, index_col);
	}

	// top left again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[0].tiles[index_row][index_col])
		collideTile(index_row, index_col);
}
