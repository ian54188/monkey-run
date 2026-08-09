scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    mySprite.sayText("按B交互", 500, false)
    if (controller.B.isPressed()) {
        if (key == 0) {
            game.showLongText("箱子：哈哈哈哈哈你没钥匙🔑", DialogLayout.Bottom)
            game.showLongText("箱子：滚回地图开头吧！", DialogLayout.Bottom)
            tiles.setTileAt(tiles.getTileLocation(1, 7), assets.tile`myTile2`)
        } else if (key == 2) {
            game.showLongText("箱子：饿啊！！ ！", DialogLayout.Bottom)
            music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
            game.setGameOverMessage(true, "!!! it’s an empty box!!!")
            game.gameOver(true)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile13`, function (sprite, location) {
    mySprite.vy = -200
    info.changeLifeBy(-1)
    mySprite.sayText("啊", 500, false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenSwitchUp, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.showLongText("好像发生了什么变化……", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(9, 5), assets.tile`myTile4`)
        x = 0
        for (let index = 0; index < 9; index++) {
            tiles.setTileAt(tiles.getTileLocation(88, x), sprites.dungeon.darkGroundCenter)
            x += 1
        }
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (lava == 0) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 400, 4583, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
    } else if (lava == 1) {
        if (mySprite.isHittingTile(CollisionDirection.Bottom) || (mySprite.isHittingTile(CollisionDirection.Left) || mySprite.isHittingTile(CollisionDirection.Right))) {
            mySprite.vy = -150
            music.play(music.createSoundEffect(WaveShape.Sawtooth, 400, 4583, 255, 0, 100, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), music.PlaybackMode.UntilDone)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    mySprite.sayText("按B交互", 500, false)
    if (controller.B.isPressed()) {
        game.showLongText("oh", DialogLayout.Bottom)
        game.showLongText("获得了灵珠", DialogLayout.Bottom)
        game.showLongText("好像还差一个珠子", DialogLayout.Bottom)
        game.showLongText("回传送门吧", DialogLayout.Bottom)
        tiles.setTileAt(tiles.getTileLocation(89, 8), sprites.dungeon.darkGroundCenter)
        info.changeLifeBy(5)
        key += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    music.play(music.createSoundEffect(WaveShape.Square, 200, 1, 255, 94, 500, SoundExpressionEffect.Vibrato, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    scene.cameraShake(4, 500)
    mySprite.setPosition(30, 0)
    info.changeLifeBy(-1)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    mySprite.sayText("按B交互", 500, false)
    if (controller.B.isPressed()) {
        if (scene2 == 1) {
            game.showLongText("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", DialogLayout.Bottom)
            mySprite.setPosition(30, 0)
            tiles.setCurrentTilemap(tilemap`级别3`)
            scene2 = 2
        } else if (scene2 == 2) {
            if (key == 1) {
                game.showLongText("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", DialogLayout.Bottom)
                mySprite.setPosition(30, 0)
                tiles.setCurrentTilemap(tilemap`级别8`)
                scene2 = 3
            } else {
                game.showLongText("后面的区域以后再探索吧！（雾", DialogLayout.Bottom)
            }
        } else if (scene2 == 3) {
            if (key == 2) {
                game.showLongText("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", DialogLayout.Bottom)
                mySprite.setPosition(80, 900)
                tiles.setCurrentTilemap(tilemap`级别12`)
                game.showLongText("猴：给我干哪儿来了这还是国内吗？", DialogLayout.Bottom)
                game.showLongText("警报！将有上升岩浆上升", DialogLayout.Bottom)
                game.showLongText("猴：我勒个快往上跑啊！", DialogLayout.Bottom)
                game.showLongText("（觉醒了猴子血脉）", DialogLayout.Bottom)
                game.showLongText("（在墙壁边缘按A可以二次跳跃）", DialogLayout.Bottom)
                lava = 1
                scene2 += 1
            } else {
                game.showLongText("后面的区域以后再探索吧！（雾", DialogLayout.Bottom)
            }
        } else if (scene2 == 4) {
            lava = 0
            game.showLongText("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", DialogLayout.Bottom)
            tiles.setCurrentTilemap(tilemap`级别17`)
            game.showLongText("终于回到这鬼地方了", DialogLayout.Bottom)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.purpleSwitchUp, function (sprite, location) {
    if (controller.B.isPressed()) {
        game.showLongText("好像发生了什么变化……", DialogLayout.Bottom)
        tiles.setCurrentTilemap(tilemap`级别10`)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile11`, function (sprite, location) {
    mySprite.sayText("按B交互", 500, false)
    if (controller.B.isPressed()) {
        game.showLongText("oh", DialogLayout.Bottom)
        game.showLongText("获得了魔丸", DialogLayout.Bottom)
        game.showLongText("或许是集齐了", DialogLayout.Bottom)
        game.showLongText("回传送门吧", DialogLayout.Bottom)
        info.changeLifeBy(5)
        tiles.setTileAt(tiles.getTileLocation(87, 5), sprites.dungeon.darkGroundCenter)
        key += 1
    }
})
let y = 0
let x = 0
let mySprite: Sprite = null
let scene2 = 0
let key = 0
let lava = 0
info.setLife(10)
lava = 0
key = 0
scene2 = 1
mySprite = sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . f f 
    c c c c c d d d e e f c . f e f 
    . f d d d d d e e f f . . f e f 
    . . f f f f f e e e e f . f e f 
    . . . . f e e e e e e e f f e f 
    . . . f e f f e f e e e e f f . 
    . . . f e f f e f e e e e f . . 
    . . . f d b f d b f f e f . . . 
    . . . f d d c d d b b d f . . . 
    . . . . f f f f f f f f f . . . 
    `, SpriteKind.Player)
game.showLongText("地图的尽头貌似有个箱子", DialogLayout.Bottom)
game.showLongText("去看看", DialogLayout.Bottom)
tiles.setCurrentTilemap(tilemap`级别1`)
music.play(music.createSong(assets.song`mystery`), music.PlaybackMode.LoopingInBackground)
mySprite.setPosition(30, 0)
mySprite.ay = 300
scene.cameraFollowSprite(mySprite)
forever(function () {
    if (lava == 1) {
        pause(1000)
        y = 63
        for (let index = 0; index < 64; index++) {
            x = 0
            for (let index = 0; index < 16; index++) {
                if (lava == 1) {
                    tiles.setTileAt(tiles.getTileLocation(x, y), assets.tile`myTile13`)
                }
                x += 1
            }
            y += -1
            pause(700)
        }
    }
})
forever(function () {
    if (controller.right.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            f f . c d b e e d d c d d d d c 
            f e f . c f e e d d d c c c c c 
            f e f . . f f e e d d d d d f . 
            f e f . f e e e e f f f f f . . 
            f e f f e e e e e e e f . . . . 
            . f f e e e e f e f f e f . . . 
            . . f e e e e f e f f e f . . . 
            . . . f e f f b d f b d f . . . 
            . . . f d b b d d c d d f . . . 
            . . . f f f f f f f f f . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . . f e e d f d d f d c . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            f f . c d b e e e d d c c c c c 
            f e f . c f f e e e d d d d f . 
            f e f . f e e e e f f f f f f . 
            f e f f e e e e e e e f f f f . 
            . f f e e e e f e f d d f d d f 
            . . f e e e e f e f b d f b d f 
            . . f e f f f f f f f f f f f f 
            . . f d d c f . . . . . . . . . 
            . . f f f f . . . . . . . . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . f f e e e d d d d f . . 
            . . . f d d e e d d d d d d c . 
            . . . c d b e e d f d d f d c . 
            f f . c d b e e d f d d f d d c 
            f e f . c f e e d d d d e e d c 
            f e f . . f e e e d c d d d d c 
            f e f . . f f e e e d c c c f . 
            f e f . f e e e e f f f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f e e e e f e e f e f f . . 
            . . f e e e f f f e e f f e f . 
            . f b f f f f f f c d d b d d f 
            . f d d c f . . f d d d c d d f 
            . . f f f . . . f f f f f f f . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . f f f e e e e e f . . . 
            . . . f d d e e e e d d d f . . 
            . . . c d b e e e d d d d d c . 
            . . . c d b e e d d d d d d c . 
            . f f . c f e e d f d d f d d c 
            f e f . . f e e d f d d f d d c 
            f e f . . f e e d d d d e e d c 
            f e f . . f f e e d c d d d f . 
            f e f . f e e e e e d f f f . . 
            . f f f e e e e e e e f . . . . 
            . . f f b e e e e e f f . . . . 
            . . f f d d c e e f f e f . . . 
            . . . . f f f c d d b d d f . . 
            . . . . . f f d d d c d d f . . 
            . . . . . . f f f f f f f . . . 
            `,img`
            . . . . . . . f f f f f . . . . 
            . . . . . . f e e e e e f . . . 
            . . . . . f e e e d d d d f . . 
            . . . . f f e e d f d d f d c . 
            . . . f d d e e d f d d f d c . 
            . . . c d b e e d d d d e e d c 
            . . . c d b e e d d c d d d d c 
            . . . . c f e e e d d c c c c c 
            . . . . . f f e e e d d d d f . 
            . . . . f e e e e f f f f f . . 
            f f . f e e e e e e f f . . . . 
            f e . f e e f e e f e e f . . . 
            f e . f e e e f e e f e e f . . 
            f e f f e f b b f b d f d b f . 
            f f f f e b d d f d d f d d f . 
            . f f f f f f f f f f f f f . . 
            `],
        100,
        false
        )
        pause(400)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . f f 
            c c c c c d d d e e f c . f e f 
            . f d d d d d e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f e f 
            . . . f e f f e f e e e e f f . 
            . . . f e f f e f e e e e f . . 
            . . . f d b f d b f f e f . . . 
            . . . f d d c d d b b d f . . . 
            . . . . f f f f f f f f f . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            c d e e d d d d e e d d f . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e b d c . f f 
            . f d d d d e e e f f c . f e f 
            . f f f f f f e e e e f . f e f 
            . f f f f e e e e e e e f f e f 
            f d d f d d f e f e e e e f f . 
            f d b f d b f e f e e e e f . . 
            f f f f f f f f f f f f e f . . 
            . . . . . . . . . f c d d f . . 
            . . . . . . . . . . f f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f f . . . . 
            . c d d d d d d e e d d f . . . 
            . c d f d d f d e e b d c . . . 
            c d d f d d f d e e b d c . f f 
            c d e e d d d d e e f c . f e f 
            c d d d d c d e e e f . . f e f 
            . f c c c d e e e f f . . f e f 
            . . f f f f f e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . f f e f e e f e e e e f . . 
            . f e f f e e f f f e e e f . . 
            f d d b d d c f f f f f f b f . 
            f d d c d d d f . . f c d d f . 
            . f f f f f f f . . . f f f . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f f f . . . . 
            . . f d d d e e e e d d f . . . 
            . c d d d d d e e e b d c . . . 
            . c d d d d d d e e b d c . . . 
            c d d f d d f d e e f c . f f . 
            c d d f d d f d e e f . . f e f 
            c d e e d d d d e e f . . f e f 
            . f d d d c d e e f f . . f e f 
            . . f f f d e e e e e f . f e f 
            . . . . f e e e e e e e f f f . 
            . . . . f f e e e e e b f f . . 
            . . . f e f f e e c d d f f . . 
            . . f d d b d d c f f f . . . . 
            . . f d d c d d d f f . . . . . 
            . . . f f f f f f f . . . . . . 
            `,img`
            . . . . f f f f f . . . . . . . 
            . . . f e e e e e f . . . . . . 
            . . f d d d d e e e f . . . . . 
            . c d f d d f d e e f f . . . . 
            . c d f d d f d e e d d f . . . 
            c d e e d d d d e e b d c . . . 
            c d d d d c d d e e b d c . . . 
            c c c c c d d e e e f c . . . . 
            . f d d d d e e e f f . . . . . 
            . . f f f f f e e e e f . . . . 
            . . . . f f e e e e e e f . f f 
            . . . f e e f e e f e e f . e f 
            . . f e e f e e f e e e f . e f 
            . f b d f d b f b b f e f f e f 
            . f d d f d d f d d b e f f f f 
            . . f f f f f f f f f f f f f . 
            `],
        100,
        false
        )
        pause(400)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        mySprite.vx = -100
    } else if (controller.right.isPressed()) {
        mySprite.vx = 100
    } else {
        mySprite.vx = 0
    }
})
