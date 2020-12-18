
// You can write more code here

/* START OF COMPILED CODE */

class Level2 extends Phaser.Scene {
	
	constructor() {
		super("Level2");
		
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}
	
	create() {
		
		// level2_tilemapv1
		const level2_tilemapv1 = this.add.image(5977, 306, "Level2_tilemapv1");
		level2_tilemapv1.scaleY = 1.5095333027740638;
		
		// level1_tilemapv1
		const level1_tilemapv1 = this.add.image(5979, 308, "Level1_tilemapv1");
		level1_tilemapv1.scaleY = 1.6068282722229479;
		
		// mine
		const mine = this.add.image(1470, 251, "mine");
		mine.scaleX = 2;
		mine.scaleY = 2;
		
		// player
		const player = this.add.sprite(381, 293, "idle1");
		player.scaleX = 0.43749620285615065;
		player.scaleY = 0.5641612020890477;
		
		// mine_1
		const mine_1 = this.add.image(3224, 386, "mine");
		mine_1.scaleX = 2;
		mine_1.scaleY = 2;
		
		// mine_1_1
		const mine_1_1 = this.add.image(4660, 392, "mine");
		mine_1_1.scaleX = 2;
		mine_1_1.scaleY = 2;
		
		// mine_1_1_1
		const mine_1_1_1 = this.add.image(5744, 320, "mine");
		mine_1_1_1.scaleX = 2;
		mine_1_1_1.scaleY = 2;
		
		// mine_1_1_1_1
		const mine_1_1_1_1 = this.add.image(6028, 485, "mine");
		mine_1_1_1_1.scaleX = 2;
		mine_1_1_1_1.scaleY = 2;
		
		// mine_1_1_1_1_1
		const mine_1_1_1_1_1 = this.add.image(7639, 471, "mine");
		mine_1_1_1_1_1.scaleX = 2;
		mine_1_1_1_1_1.scaleY = 2;
		
		// mine_1_1_1_1_1_1
		const mine_1_1_1_1_1_1 = this.add.image(8980, 278, "mine");
		mine_1_1_1_1_1_1.scaleX = 2;
		mine_1_1_1_1_1_1.scaleY = 2;
		
		// mine_1_1_1_1_1_1_1
		const mine_1_1_1_1_1_1_1 = this.add.image(10708, 475, "mine");
		mine_1_1_1_1_1_1_1.scaleX = 2;
		mine_1_1_1_1_1_1_1.scaleY = 2;
	}
	
	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
