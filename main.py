def on_overlap_tile(sprite, location):
    mySprite.say_text("按B交互", 500, False)
    if key == 0 and controller.B.is_pressed():
        game.show_long_text("箱子：哈哈哈哈哈你没钥匙🔑", DialogLayout.BOTTOM)
        game.show_long_text("箱子：滚回地图开头吧！", DialogLayout.BOTTOM)
        tiles.set_tile_at(tiles.get_tile_location(1, 7),
            assets.tile("""
                myTile2
                """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile1
        """),
    on_overlap_tile)

def on_hit_wall(sprite2, location2):
    if controller.A.is_pressed():
        mySprite.vy = -100
scene.on_hit_wall(SpriteKind.player, on_hit_wall)

def on_overlap_tile2(sprite3, location3):
    global x
    if controller.B.is_pressed():
        game.show_long_text("好像发生了什么变化……", DialogLayout.BOTTOM)
        tiles.set_tile_at(tiles.get_tile_location(9, 5),
            assets.tile("""
                myTile4
                """))
        x = 0
        for index in range(8):
            tiles.set_tile_at(tiles.get_tile_location(88, x),
                sprites.dungeon.dark_ground_center)
            x += 1
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.green_switch_up,
    on_overlap_tile2)

def on_overlap_tile3(sprite4, location4):
    mySprite.say_text("按B交互", 500, False)
    if controller.B.is_pressed():
        game.show_long_text("oh", DialogLayout.BOTTOM)
        game.show_long_text("获得了灵珠", DialogLayout.BOTTOM)
        game.show_long_text("好像还差一个", DialogLayout.BOTTOM)
        game.show_long_text("回传送门吧", DialogLayout.BOTTOM)
        tiles.set_tile_at(tiles.get_tile_location(89, 8),
            sprites.dungeon.dark_ground_center)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile3
        """),
    on_overlap_tile3)

def on_overlap_tile4(sprite5, location5):
    mySprite.set_position(30, 0)
    info.change_life_by(-1)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile4)

def on_overlap_tile5(sprite6, location6):
    mySprite.say_text("按B交互", 500, False)
    if scene2 == 1 and controller.B.is_pressed():
        game.show_long_text("啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊", DialogLayout.BOTTOM)
        mySprite.set_position(30, 0)
        tiles.set_current_tilemap(tilemap("""
            级别3
            """))
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile2
        """),
    on_overlap_tile5)

x = 0
mySprite: Sprite = None
scene2 = 0
key = 0
info.set_life(5)
key = 0
scene2 = 1
mySprite = sprites.create(img("""
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
        """),
    SpriteKind.player)
game.show_long_text("地图的尽头貌似有个箱子", DialogLayout.BOTTOM)
game.show_long_text("去看看", DialogLayout.BOTTOM)
tiles.set_current_tilemap(tilemap("""
    级别1
    """))
mySprite.set_position(30, 0)
mySprite.ay = 150
scene.camera_follow_sprite(mySprite)

def on_forever():
    if controller.right.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            False)
        pause(400)
forever(on_forever)

def on_forever2():
    if controller.left.is_pressed():
        animation.run_image_animation(mySprite,
            [img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """),
                img("""
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
                    """)],
            100,
            False)
        pause(400)
forever(on_forever2)

def on_forever3():
    if controller.left.is_pressed():
        mySprite.vx = -500
    elif controller.right.is_pressed():
        mySprite.vx = 500
    else:
        mySprite.vx = 0
forever(on_forever3)
