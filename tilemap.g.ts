// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别0":
            case "级别2":return tiles.createTilemap(hex`30000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000101000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000030400000000001111110000000000001111110000000000001111000000000000000011111100000000000000000000080700000000000602050000000000000103040000111100000605000011110000000001030400000000000000000000080711111100000b0b0b0000111100000a08070000010400000b0b00000104000011110a080711110000000000000000080703030400000c0f0d0000010400000a080700000a0700000c0d00000a07000001030a08070304111111111111111108080808070000000e0000000a0709090a080700000a070000000000000a0700000a08080808080703030303030303030808080807090909090909090a08080808080709090a070909090909090a0709090a0808080808080808080808080808`, img`
................................................
................................................
22..............................................
22.....222......222......22........222..........
22..............222..22......22....222..........
22222.......22..222..22......22..2222222........
22222.......22..222..22......22..222222222222222
22222.......2222222..22......22..222222222222222
`, [myTiles.transparency16,sprites.builtin.oceanSand5,sprites.builtin.oceanSand2,sprites.builtin.oceanSand6,sprites.builtin.oceanSand7,sprites.builtin.oceanSand3,sprites.builtin.oceanSand1,myTiles.tile2,myTiles.tile3,sprites.builtin.coral4,myTiles.tile4,sprites.builtin.oceanSand8,sprites.builtin.oceanSand13,sprites.builtin.oceanSand15,sprites.builtin.oceanSand12,myTiles.tile5,sprites.builtin.forestTiles22,sprites.builtin.forestTiles2], TileScale.Sixteen);
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`56000900010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010f0101010101010101010f0f0f0f010f0f0f010101010101010101010101010101010101010101010f0f0f0f0f0101010101010101010f0f0f0101010f0f0f0f0f01010101010101010101010101010101010101010f0f0f0f0f0f0f0f010f0f0f0f0f0f0f0f0f0f0f0f010f0f010101010101010101010101010101010f0f0f0f0f0f0f0f0f0f0f0f0f010f0f0f0f0f0f0f0e0e0e0e0f010101010101010101010f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0f0e0f0f0f0f0406070f0f0f0b0c0f0f0f0f0f0f010f0f0f0f0f0f0f0f0f010101010f0f0f0e0e0406070f0f0f0f0f0f0f0f0f0f0f0f0e0e0406070e0e0f0101010101010101010f0f0f0f0f0f0f0f0f0e0e0f0e0e0e0e0e0e0e0e0f0203090e0e0e0e0e0e0e0f0f0f0f0f0f0e0e0e0f0f0f0f0f0101010f0f0f0e0e040203090e0e0f0b0d0c0f0f0b0d0c0e0e0e050109070e0e0f01010f0f0f0101010f0f0f0f0f0f0f0f0e0e0e0e0e0e0e0e0406070e0e0501080e0e0e0e0e0e0e0b0c0f0e0e0e04070e0e04070e0e0f0f010f0f0e0e04050101080e0e0e0f0f0f0f0f0e0e0e0e0e0e05010109070e0e0f0f0f0f0f0f0f010e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0e0203090e0e0501080e0e0e0e0e0e0e0e0e0e0e0e0402090e0e0209070e0e0f0f0f0e0e0402010101080e0e0e0e0e0e0e0e0e0e0e0e0e0e0501010109070e0e0e0e0e0e0e0e0f0e0e0e0e0e0e0e0e0e0e0e0406070e0e0501080e0e0501080e0e0e0e0e0e0e0e0e0e0e040201080e0e050109070e0e0e0e0e040501010101080e0e0e0e0e0e0e0e0e0e0e0e0e0e050101010109070e0e0e0e0e0e0e0f06060606060606060606060203090a0a0501080a0a0501080a0a0a0a0a0a0a0a0a0a0a050101080a0a050101090606060606020101010101080a0a0a0a0a0a0a0a0a0a0a0a0a0a050101010101080606060606060606`, img`
2....................................................................................2
2....................................................................................2
2....................................................................................2
2....................222...22.........................222..............222...........2
2....................222.............................2222...222..222...2222..........2
2...............222..222.......22....22..22.........22222..............22222.........2
2...............222..222............222..222.......222222..............222222........2
2..........222..222..222...........2222..2222.....2222222..............2222222.......2
22222222222222..222..222...........2222..2222222222222222..............222222222222222
`, [myTiles.transparency16,myTiles.tile1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles6,sprites.builtin.forestTiles1,sprites.builtin.forestTiles9,sprites.builtin.forestTiles2,sprites.builtin.forestTiles3,sprites.builtin.forestTiles11,sprites.builtin.forestTiles7,sprites.dungeon.hazardLava1,sprites.builtin.forestTiles21,sprites.builtin.forestTiles23,sprites.builtin.forestTiles22,myTiles.tile3,myTiles.tile5,myTiles.tile6], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "baseTransparency16":
            case "transparency16":return transparency16;
            case "myTile5":
            case "tile1":return tile1;
            case "myTile6":
            case "tile2":return tile2;
            case "myTile7":
            case "tile3":return tile3;
            case "myTile8":
            case "tile4":return tile4;
            case "myTile9":
            case "tile5":return tile5;
            case "myTile":
            case "tile6":return tile6;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
