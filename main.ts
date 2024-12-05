enum RadioMessage {
    secland = 23475,
    message1 = 49434
}
namespace SpriteKind {
    export const soldier = SpriteKind.create()
}
namespace StatusBarKind {
    export const solders1 = StatusBarKind.create()
}
scene.onOverlapTile(SpriteKind.soldier, assets.tile`myTile11`, function (sprite, location) {
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
    silders_1 += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (silders_1 == 0) {
    	
    } else {
        silders_1 += -1
        tiles.placeOnTile(mySprite2, mySprite.tilemapLocation())
    }
})
scene.onOverlapTile(SpriteKind.soldier, assets.tile`myTile2`, function (sprite, location) {
    let _4 = 0
    if (_4 == 0) {
        silders_1 += randint(-1, -8)
    } else if (_4 == 1) {
        silders_1 += -1
    } else if (_4 == 2) {
        silders_1 += -1
    } else if (_4 == 3) {
        silders_1 += -1
    } else if (_4 == 4) {
        silders_1 += -1
    } else if (_4 == 5) {
        silders_1 += -1
    } else if (_4 == 6) {
        silders_1 += -1
    } else if (_4 == 8) {
        silders_1 += -1
    } else if (_4 == 9) {
        silders_1 += -1
    } else if (_4 == 10) {
        silders_1 += -1
    } else if (_4 == 11) {
        silders_1 += -1
    } else if (_4 == 12) {
        silders_1 += -1
    } else if (_4 == 13) {
        silders_1 += -1
    } else if (_4 == 15) {
        silders_1 += -1
    } else if (_4 == 16) {
        silders_1 += -1
    } else if (_4 >= 18) {
        game.splash("error(0)")
        game.reset()
    } else if (_4 < 0) {
        game.splash("error(1)")
        game.reset()
    }
})
radio.onReceivedMessage(RadioMessage.secland, function () {
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
})
scene.onOverlapTile(SpriteKind.soldier, assets.tile`myTile0`, function (sprite, location) {
    _1 = 1
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
})
scene.onOverlapTile(SpriteKind.soldier, assets.tile`myTile1`, function (sprite, location) {
    if (_3 == 0) {
        _3 += randint(-1, -6)
        radio.sendMessage(RadioMessage.secland)
    } else if (_3 == 1) {
        _3 += -1
    } else if (_3 == 2) {
        _3 += -1
    } else if (_3 == 3) {
        _3 += -1
    } else if (_3 == 4) {
        _3 += -1
    } else if (_3 == 5) {
        _3 += -1
    } else if (_3 == 6) {
        _3 += -1
    } else if (_3 == 7) {
        _3 += -1
    } else if (_3 == 8) {
        _3 += -1
    } else if (_3 == 9) {
        _3 += -1
    } else if (_3 == 10) {
        _3 += -1
    } else if (_3 == 11) {
        _3 += -1
    } else if (_3 == 12) {
        _3 += -1
    } else if (_3 == 13) {
        _3 += -1
    } else if (_3 == 14) {
        _3 += -1
    } else if (_3 == 15) {
        _3 += -1
    } else if (_3 == 16) {
        _3 += -1
    } else if (_3 >= 18) {
        game.splash("error(0)")
        game.reset
    }
})
scene.onOverlapTile(SpriteKind.soldier, assets.tile`myTile9`, function (sprite, location) {
    if (silders_1 > 0) {
        if (_2 == 0) {
            silders_1 += randint(-1, -10)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 1) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 2) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 3) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 4) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 5) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 6) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 7) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 8) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 9) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 10) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 11) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 12) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 13) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 14) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 15) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 == 16) {
            silders_1 += randint(0, -1)
            radio.sendMessage(RadioMessage.message1)
        } else if (_2 >= 17) {
            game.splash("error (0)")
            game.reset()
        } else if (_2 < 0) {
            game.splash("error (1)")
            game.reset()
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.oceanSand12, function (sprite, location) {
    let _5 = 0
    if (_5 == 0) {
    	
    }
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    _2 += 1
    tiles.placeOnRandomTile(mySprite2, sprites.dungeon.collectibleBlueCrystal)
})
let _2 = 0
let _3 = 0
let mySprite2: Sprite = null
let _1 = 0
let silders_1 = 0
let mySprite: Sprite = null
tiles.setCurrentTilemap(tilemap`level2`)
mySprite = sprites.create(img`
    2..............................2
    .2............................2.
    ..2..........................2..
    ...2........................2...
    ....2......................2....
    .....2....................2.....
    ......2..................2......
    .......2................2.......
    ........2..............2........
    .........2............2.........
    ..........2..........2..........
    ...........2........2...........
    ............2......2............
    .............2....2.............
    ..............2..2..............
    ...............22...............
    ...............22...............
    ..............2..2..............
    .............2....2.............
    ............2......2............
    ...........2........2...........
    ..........2..........2..........
    .........2............2.........
    ........2..............2........
    .......2................2.......
    ......2..................2......
    .....2....................2.....
    ....2......................2....
    ...2........................2...
    ..2..........................2..
    .2............................2.
    2..............................2
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile0`)
mySprite.setScale(0.49, ScaleAnchor.Middle)
silders_1 = 40
_1 = 0
for (let index = 0; index < 1; index++) {
    mySprite2 = sprites.create(img`
        ........................
        ......ffff..............
        ....fff22fff............
        ...fff2222fff...........
        ..fffeeeeeefff..........
        ..ffe222222eef..........
        ..fe2ffffff2ef..........
        ..ffffeeeeffff..........
        .ffefbf44fbfeff.........
        .fee41fddf14eef.........
        fdfeeddddd4eff..........
        fbffee444edd4e..........
        fbf4f2222edde...........
        fcf.f22cccee............
        .ff.f44cdc4f............
        ....fffddcff............
        .....fddcff.............
        ....cddc................
        ....cdc.................
        ....cc..................
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.soldier)
}
