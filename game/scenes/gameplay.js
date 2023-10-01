import {WIDTH_CANVAS, PADDING_CANVAS, HEIGHT_CANVAS, FONT_DEFAULT, FONT_TITLE} from "../globals.js";

const LEVELS = 
[
	{

			level: 1,
			width: 40,
			height: 20,
			spawnx: 80,
			spawny: 50,
			tiles: 
			[
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
					[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
					[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
			],
	}
]

// PHYSICS
const RUN_ACCEL = 0.4;
const RUN_DECEL = 0.5;
const MAX_SPEED = 8;
const JUMPSPEED = 16;
const GRAVITY = 0.90;
const TILE_SIZE = 64;
const EPSILON = 0.00000000001;

const game = {
	ghosts: [],
	sprites: [],
	stored_actions: [],
	frame_counter: 550
}

const dude = {
    xvel: 0,
    yvel: 0,
	width: 80,
	height: 200,
    size_width: 168,
    size_height: 256,
	falling: true,
	facing_right: true,
	spawn_y : 800,
	level: 0
};


export default new Phaser.Class({
	Extends: Phaser.Scene,
	initialize: function()
	{
		Phaser.Scene.call(this, {key: 'gameplay'});
	},
	preload: function()
	{
		this.load.spritesheet('idle',
			'assets/sprites/idle.png',
			{frameWidth: 42, frameHeight: 64}
		);
		this.load.spritesheet('run',
			'assets/sprites/idle.png',
			{frameWidth: 42, frameHeight: 64}
		);
	},
	create: function()
	{
		//build level
		for(let i = 0; i < LEVELS[dude.level].tiles.length; i++)
		{
			for(let j = 0; j < LEVELS[dude.level].tiles[i].length; j++)
			{
				if(LEVELS[dude.level].tiles[i][j] != 0)
				{
					this.add.image(j*TILE_SIZE, i*TILE_SIZE, 'ground').setScale(2).setOrigin(0,0);
				}
			}
		}
		//animations
		this.anims.create({
            key: "idle",
            frames: this.anims.generateFrameNumbers("idle", {start: 0, end: 35}),
            frameRate: 20,
            repeat: -1
        });
		this.anims.create({
            key: "run",
            frames: this.anims.generateFrameNumbers("run", {start: 0, end: 4}),
            frameRate: 10,
            repeat: -1
        });

		this.input.gamepad.start();
		this.cursors = this.input.keyboard.addKeys("UP,LEFT,DOWN,RIGHT,N,W,A,S,D,M,ENTER,SPACE");

		dude.sprite = this.add.sprite(500, dude.spawn_y, 'idle').setDisplaySize(dude.size_width, dude.size_height).setOrigin(0.5, 1).setDepth(4);
		this.cameras.main.startFollow(dude.sprite);
		this.cameras.main.setBounds(0, 0, WIDTH_CANVAS, HEIGHT_CANVAS);
		this.cameras.main.setZoom(0.5);
		dude.sprite.play("idle");

	},
	update()
	{

		const gamepad = this.input.gamepad.gamepads[0];

		const left = this.cursors.A.isDown || this.cursors.LEFT.isDown  || (gamepad && (gamepad.left || gamepad.leftStick.x < -0.1));
		const right = this.cursors.D.isDown || this.cursors.RIGHT.isDown || (gamepad && (gamepad.right || gamepad.leftStick.x > 0.1));
		const jump = this.cursors.W.isDown || this.cursors.UP.isDown || this.cursors.SPACE.isDown ||  (gamepad && gamepad.A);
		const down = this.cursors.S.isDown
		const restart = this.cursors.ENTER.isDown;


	// if(game.frame_counter % 10 === 0)
	{
		game.stored_actions.push(
			{
				x: dude.sprite.x,
				y: dude.sprite.y,
				xvel: dude.xvel,
				yvel: dude.yvel,
				animation: dude.sprite.anims.currentAnim.key
			}
		);
	}





		if( (!left && !right) || (left && right))
		{
			if (dude.sprite.anims.currentAnim.key !== "idle" && !dude.falling)
				dude.sprite.play("idle");
			if(dude.xvel > 0)
				dude.xvel = Math.max(0, dude.xvel - RUN_DECEL);
			else
				dude.xvel = Math.min(0, dude.xvel + RUN_DECEL);
		}

		if (left && !right)
		{
			if(!dude.falling)
			{
				dude.sprite.anims.play("run", true);
			}
			if(Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL) < dude.xvel)
				dude.xvel = Math.max(-MAX_SPEED, dude.xvel - RUN_ACCEL);
			dude.facing_right = false;
			dude.sprite.flipX = true;
		}
		else if(right && !left)
		{
			if(!dude.falling)
			{
				dude.sprite.anims.play("run", true);
			}
			if(Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL) > dude.xvel)
				dude.xvel = Math.min(MAX_SPEED, dude.xvel + RUN_ACCEL);
			dude.facing_right = true;
			dude.sprite.flipX = false;
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

		
		//handle character moving out of the defined level
		// else if(dude.sprite.x > LEVELS[dude.level].width*TILE_SIZE - dude.width/2)
		// {
		// 	dude.sprite.x = LEVELS[dude.level].width*TILE_SIZE - dude.width/2 - EPSILON;
		// 	dude.xvel = 0;
		// }


		//land at the bottom untill we get tiles for collision
	
		if(dude.sprite.x < dude.width/2)
		{
			dude.sprite.x = dude.width/2;
			dude.xvel = 0;
		}
		if(dude.sprite.x > WIDTH_CANVAS - dude.width/2)
		{
			dude.sprite.x = WIDTH_CANVAS - dude.width/2;
			dude.xvel = 0;
		}

		// if(game.frame_counter % 10 === 0)
		{
			moveGhosts(this);
		}

		collideGhosts();

		if(dude.sprite.y > HEIGHT_CANVAS)
		{
			dude.falling = false;
			dude.sprite.y = HEIGHT_CANVAS;
			dude.yvel = 0;
		}



		handleCollision(this);


			
		// player coordinates
		const index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
		const index_col = Math.floor(dude.sprite.x/TILE_SIZE);
		const index_col_left = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
		const index_col_right = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);

		// if(index_row + 1 >= LEVELS[dude.level].height)
		// {	
		// 	hol_up_a_min = true;
		// 	gameOver(this);
		// 	//game over
		// 	//player hit bottom
		// }

		if(!LEVELS[dude.level].tiles[index_row + 1][index_col_left] && !LEVELS[dude.level].tiles[index_row + 1][index_col_right])
		{

			dude.falling = true;
		}

		//animate between falling and jumping
		// if(dude.falling)
		// {
		// 	if(dude.yvel > 0 && dude.sprite.anims.currentAnim.key != "falling")
		// 	{
		// 		dude.sprite.play("falling");
		// 	}
		// 	else if (dude.sprite.anims.currentAnim.key != "jump" && dude.sprite.anims.currentAnim.key != "falling")
		// 		dude.sprite.play("jump");
		// }



	



		timer();
	}
});


function handleCollision(state)
{
	if(dude.sprite.y > ((LEVELS[dude.level].height)*TILE_SIZE))
		return;

	function collideTile(index_row, index_col)
	{
		const y_top = index_row*TILE_SIZE;
		const y_bottom = y_top + TILE_SIZE;
		const x_left = index_col*TILE_SIZE;
		const x_right = x_left + TILE_SIZE;


		//down
		if(dude.sprite.y - EPSILON > y_top && dude.y_old - EPSILON <= y_top)
		{		
			dude.sprite.y = y_top;
			dude.yvel = 0;
			dude.falling = false;
			// state.emitter_dirt.explode(20, dude.sprite.x, dude.sprite.y);
			return;
		}

		//right
		if(dude.sprite.x + dude.width/2 - EPSILON > x_left  && dude.x_old + dude.width/2 - EPSILON  <= x_left)
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
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);
		
	// top left again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x - dude.width/2)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom left again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// top right again
	index_row = Math.floor((dude.sprite.y - dude.height)/TILE_SIZE);
	index_col = Math.floor((dude.sprite.x + dude.width/2 - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);

	// bottom right again
	index_row = Math.floor((dude.sprite.y - EPSILON)/TILE_SIZE);
	if(LEVELS[dude.level].tiles[index_row][index_col])
		collideTile(index_row, index_col);	
}



function moveGhosts(state)
{  
    for(const ghost of game.ghosts)
    {

		//maybe only show a few ghosts
		// if(game.sprites[game.sprites.length-1] === undefined 
		// 	|| Math.abs(ghost.actions[0].x - game.sprites[game.sprites.length-1].sprite.x) > 100
		// 	|| Math.abs(ghost.actions[0].y - game.sprites[game.sprites.length-1].sprite.y) > 100)
		{
			game.sprites.push({
				sprite: state.add.sprite(ghost.actions[0].x, ghost.actions[0].y, 'idle').setOrigin(0.5, 1).setDisplaySize(dude.size_width, dude.size_height).setDepth(1),
			});
			game.sprites[game.sprites.length-1].sprite.tint = 0x018275;
		}



		// add flipx

		
        // if(ghost.actions[0].animation !== ghost.sprite.anims.currentAnim.key)
        // {
        //     ghost.sprite.play(ghost.actions[0].animation);
        // }

        ghost.actions.push(ghost.actions.shift());
    }
}


function timer()
{
	game.frame_counter--
	if(game.frame_counter === 0)
	{
		game.ghosts.push({
			actions: game.stored_actions.slice()
		});
		game.frame_counter = 550; // reset
		for(const sprite of game.sprites)
		{
			sprite.sprite.destroy();
		}
		game.sprites = [];
		game.stored_actions = [];
		dude.spawn_y -= 200;
		dude.sprite.x = 500;
		dude.sprite.y = dude.spawn_y;
	}
}

//check for collision with all the past ghosts 


function collideGhosts()
{
	let standing_on_ghost = false;
	const dude_left = dude.sprite.x - dude.width/2;
	const dude_right = dude.sprite.x + dude.width/2;
	const dude_top = dude.sprite.y - dude.height;
	const dude_bottom = dude.sprite.y;

	for(const ghost_position of game.sprites)
	{
		const ghost_left = ghost_position.sprite.x - dude.width/2;
		const ghost_right = ghost_position.sprite.x + dude.width/2;
		const ghost_top = ghost_position.sprite.y - dude.height;
		const ghost_bottom = ghost_position.sprite.y;

		//right side of the player
		if(dude_right > ghost_left && 
		   dude_right < ghost_right &&
		   dude.x_old <= ghost_left &&
		   dude_bottom > ghost_top &&
		   dude_top < ghost_bottom)
		{
			dude.sprite.x = ghost_left - dude.width/2;
			dude.xvel = 0
		}

		//left side of the player
		if(dude_left < ghost_right && 
			dude_left > ghost_left &&
			dude.x_old >= ghost_right &&
			dude_bottom > ghost_top &&
			dude_top < ghost_bottom)
		 {
			 dude.sprite.x = ghost_right + dude.width/2;
			 dude.xvel = 0
		 }


		//collision with top of ghost
		//check if the bottom of the player is inside the the ghost
		if(dude_bottom >= ghost_top &&
			dude_bottom < ghost_bottom)
		{
			//check right foot & left foot
			if(((dude_right >= ghost_left &&
			   dude_right <= ghost_right) ||
			   (dude_left >= ghost_left &&
			   dude_left <= ghost_right)) &&
				dude.y_old <= ghost_top)
				{
					standing_on_ghost = true
					dude.sprite.y = ghost_top;
					dude.yvel = 0;
				}
		}

		//check if a ghost is above
		if(dude_top >= ghost_bottom && 
		   dude_bottom < ghost_bottom)
		{
			if((dude_right >= ghost_left &&
				dude_right <= ghost_right) ||
				(dude_left >= ghost_right &&
				dude_left <= ghost_right) &&
				dude.y_old >= ghost_bottom)
		   {
				dude.sprite.y = ghost_bottom + dude.height
		   }
		}
	}

	if(standing_on_ghost)
		dude.falling = false;
}




