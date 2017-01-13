var renderer = PIXI.autoDetectRenderer(1440, 1024,{backgroundColor : 0x000000});
document.body.appendChild(renderer.view);

// create the root of the scene graph
var stage = new PIXI.Container();

// create a new Sprite using the texture
var background = new PIXI.Sprite(PIXI.Texture.fromImage('./images/background.png'));
background.height = 1024;
background.width = 1440;

// move the sprite to the center of the screen
background.position.x = 0;
background.position.y = 0;

var player = new PIXI.Sprite(PIXI.Texture.fromImage('./images/background.png'));
var walkingFrames = [];

walkingFrames.push(PIXI.Texture.fromImage('./images/Walk1.png'));
walkingFrames.push(PIXI.Texture.fromImage('./images/Walk2.png'));

walkAnimation = new PIXI.extras.AnimatedSprite(walkingFrames);

walkAnimation.play()
walkAnimation.animationSpeed = 0.1;

walkAnimation.position.x = 100;
walkAnimation.position.y = 500;

stage.addChild(background);
stage.addChild(walkAnimation);

// start animating
animate();
function animate() {
    requestAnimationFrame(animate);

    // just for fun, let's rotate mr rabbit a little
    // bunny.rotation += 0.1;

    // render the container
    renderer.render(stage);
}
