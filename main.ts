let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 . . . . . . . . 7 . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 . . 7 . 7 . 7 7 . . 
    . . . . . 7 . . . . . . . 7 . . 
    . . . . . . 7 . . . . . 7 7 . . 
    . . . . . . 7 7 7 . . 7 7 . . . 
    . . . . . . . . 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level1`)
