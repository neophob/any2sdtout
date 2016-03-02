# any2stdout.js

any2stdout converts an image buffer to ASCII text that can be displayed. It works by calculating the average b/w value of a region and map this value to a ASCII char. At the current stage any2stdout supports 32bpp input data (alpha values are ignored) and 24bpp image data.


## Examples

There are some simple examples included in this package (see `examples` subdirectory):

* `npm run png`: render the image "in.png" in your console
* `npm run gif`: render the animated gif "rick.gif" in your console (Congratulations, you've been rick rolled).
* `npm run anim`: render an ugly animation in your console

any2stdout contains some predefined alphabet collections (and you can define your own alphabet). The output quality depends on your terminal font, here are some examples:

```
___ALPHABET_DEFAULT:
$$$$$$$$$$$$$$$$$$$$$$$$$0000000000$$$$00$$$$$$$$$000000000000000000000000000000
$$$$$$$$$$$$$$$$$$$$0$$$$$000000000OOO;;;;;oO0$000000000000000000000000000000000
$$$$$$$$$$$$$$$$$$$$$$$$$$$$0000O;:--------::;o00000000000000000000000000000000$
######$$$$$$$$$$$$$000$$$$$$$00Oo;-----::::::-:;000000$$$$$$$000000000000000000$
#########$$$$$$$$$$$$0000000000Oooo;ooooOOOOO;::0000$$$$$$$$$000000000000000000$
#########$$$$$$$$$$$$$$$000000O:;;;;;;oooOOOOo;:00$$$$$$$$$$$000$$$0000000000000
######$$$$$$$$##$$$$$$#$$$$000O;;;;::::oo;;ooO;O00000$$$$$$$000$$$$$000000000000
######$$$$$$$#####$$$$$$$$$$00OO0o;;;;;oOOOOOOoO000000$$$$$$000$$$$00000$$000000
####$$$$$$$$$$#####$####$$$000Oo0o;;;;;ooOoOOOO000000000$$$$000$$$$0000000000000
$$$$$$$$#$$$$$$$$##$$$$$$000000OOo;;;::::;oOO00000$000000000000000000$$$$0000000
$$$$########$$$$$$$$$$$$$0$$$$$$0Oo;;;;;;oOOO00$$$$$$$$000000000000$$$$$$$000000
$$$##########$$$$$$$$$$$$$$$$$$$$0O;;;ooOOOOO00$$$$$$$$00000000000$$$$$$$$$$0000
$$$$$$$$$$$$$$$$$$$$$$$$$$000$00$0o;;;;;ooOOo0;;OO000000$00000000$$$$$$$$$$$$000
#########$$$$$$$$$$000$$000OOOOO$Oo;;;;;;ooO00;-,,,---:::;;ooOO00$$$$$$$$$$$$$$$
############$$$$00000OO;:----:oOooooooo;oO000o-,,,,,,,,,,,,,,,,-o0000$$$$$$$0000
##############$$0;::-,,,,..,,,-:;;;;o;;ooOOO;-,,,,,,,,,,,,,,,,,,,o0000$$$$$00000
############$$$0o-,,,,,,......,,::;;o;;;;;;::,,,,,,,,,,,,,.,,,,,,-O0000000000000
###########$$$$0-,,,,,,,,,,,.,,,-;;o;;;;;;;;:,,,,,,,,,,,,..,,,,.,,;000000000000$
########$$$$$$$0-,,,,,....,,,,,,,o0o;:::::::-,,,,,,,,,,,,..,,..,,,,:O000000000$$
$$$$$$$$$$$$$$0O-,,..,...,,,.,,,,OOO;;;;;:::-,,,,,,,,,,,,,....,,,,,,-O0000000$0$
$$$$$$$$$$$$$$0o-,,..,....,,...,,oOo;;;;;;:::,,,,,-::::--,,,...,.,,,,-O00000000$
$$$$$$$$$$$$$$0;,,..............,:;:::::::::-,,,,,:;ooooo-,,,.....,,,,:O00000000
$$$$$$$$$$$$$0o,,..........,-:,.,::::::------,..,,-;;oooo:,,,......,,,,-o0000000
$$$$$$$$$$$000o-,......,:;;;;;:.,:::::::::----.....::;;oo;,,,,,,.........-O00000
$$$$$$$$$$000O:,.......:;;;;;o:..::-:::::::::-,......,-;;:,,,,,,,,,,..,,,,o00000
$$$$$$$$$$00O-,,,,,..,--;;;;;;;,.:--------::::-,........,..,,,,,,,,,,,,,,:O00000
$$$$$$$$$000:,,,,,..,,..,:;;;:-..:--::---------,.....  ....,,,,,,,,,,,..,o000000
$$$$$$$$$0000;,,,.,.,,,..........:---:::::::::-,,.....     ..,:--,,,,,,-;0000000
$$$$$$$$000000O::,,,-,,..... ....--,-----------,,..,..........;O000OO00000000000
$$0$$$000000000000Ooooo-.........--,-----------,,,...,,,,,,,,,-oO000000000000000

___ALPHABET_DEFAULT2:
o0oo0oooooo0oo00oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
oooooooooo00000000oooooooooooooooooiii;;;;;;iooooooooooooooooooooooooooooooooooo
0000000oooo000000oo0o00000ooooooo;:::::::::::;iooooooooooooooooooooooooooooooooo
0000000000ooooooooooooooooo0oooii;::::::::;;:::;oooooooooooooooooooooooooooooooo
000000000000000ooooooooooooooooi;;;;;iiiiiiii;::ooooooooo0oooooooooooooooooooooo
00000000000000000000000oooooooi;;;;;;;iiiiiiii;;oooooooooooooooooooooooooooooooo
0000000000000000000000000oooooo;;;;;;;;ii;;;ii;iooooooo0oooooooo000ooooooooooooo
000000000000000000000000000ooooioi;;;;;iiiiiiiiioooooo00000ooooo00oooooooooooooo
0000000000000000000000000oooooiio;;;;;;iiiiiiiioooooooooo00oooo000oooooooooooooo
00000000000000000000000oooooooooi;;;;::;;;iiiooooooooooooooooooooooooooooooooooo
000000000000000000000ooooooooooooii;;;;;;iiioooooooo0ooooooooooooooo0000oooooooo
000000000000000000000oooo0000000ooi;;;;iiiiiooooooooo0ooooooooooooo00000000ooooo
0000000000000000ooooooooooooooooooi;;;;;iiiiio;;iooooooooooooooooooooooooooooooo
0000000000000000oooooooooooiiiooooi;;;;;;iiioo;....:::::;;;;iiioooooo00o0ooooooo
000000000000000ooooooii;;:::::;iiiiiii;;;ioooi:................:iooooooooooooooo
000000000000000oo;;::.........:;;;;;;;;iiiii;:...................ioooooooooooooo
000000000000000oi:..............:;;;;;;;;;;;:....................:iooooooooooooo
00000000000000oo:...............:;;;;;;;;;;;:.....................;ooooooooooooo
00000000000000oo:................ioi;;;;;;;::......................:iooooooooooo
00000000000ooooi:................ioi;;;;;;:::.......................:ioooooooooo
0000000ooooooooi.................iii;;;;;;;::.....:;;::::............:iooooooooo
0000000oooooooo;.................:;;;;:::::::.....:;;iii;:............:ooooooooo
0000000oooooooi.............::...:;;;::::::::.....:;;;;ii:..... . .....:;ooooooo
0000000oo0ooooi:..... ..:;;;;;:..::::::::::::..   .:;;;ii;...............:iooooo
000oo0oooooooi;...... .:;;;;;;:..:::::::::::::..     .:;;:................iooooo
000oooooooooi:.........:;;;;;;;..::::::::::::::..      ..................:oooooo
00oooooooooo;............:;;;::..:::::::::::::.....       ...............ioooooo
0oooooooooooo;..............    .::::::::::::::.....       ...:::......:;ooooooo
ooooooooooooooi;:...:.....      .::.:::::::::::.......       .;ooooooooooooooooo
ooooooooooooooooooiiiii:.       .::.:::::::::::................ioooooooooooooooo

___ALPHABET_MINIMAL:
oooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooooooooo......oooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooo....  ........ooooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooo..... ..........oooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooo........ooooo...oooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooo..........oooo...oooooooooooooooooooooooooooooooo
ooo00oooooooooooooooooooooooooo..............o.ooooooooooooooooooooooooooooooooo
ooo0ooooooooooooooooooooooooooooo.......oooooo.ooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooo.o........o.ooooooooooooooooooooooooooooooooooooo
ooooooooooooooooooooooooooooooooo..........ooooooooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooooo........oooooooooooooooooooooooooooooooooooooo
oooo00o000o0ooooooooooooooooooooooo.....oooooooooooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooooo........oo.o..oooooooooooooooooooooooooooooooo
oooooooooooooooooooooooooooooooooo.........ooo.      ........ooooooooooooooooooo
ooooooooooooooooooooooo...   ..o.........oooo.                 ..ooooooooooooooo
0oo00oooooooooooo...           ..........ooo.                    .oooooooooooooo
oooooooooooooooo.               .............                     oooooooooooooo
oooooooooooooooo.               .............                     .ooooooooooooo
oooooooooooooooo.                .o..........                      .oooooooooooo
oooooooooooooooo                 ooo.........                        ooooooooooo
ooooooooooooooo.                 .o..........     ......              oooooooooo
ooooooooooooooo.                 ............     .......             .ooooooooo
oooooooooooooo.             ..   ............     ........              .ooooooo
oooooooooooooo..        .......  ............      .......                oooooo
oooooooooooooo.        ........  .............        ....                .ooooo
ooooooooooooo          ........  ..   ........                           .oooooo
oooooooooooo.            .....   ..........                              .oooooo
ooooooooooooo.                   .  ...........               ..       ..ooooooo
ooooooooooooooo..                .     .......                .ooooooooooooooooo
ooooooooooooooooooo.....         .  ...       .                .oooooooooooooooo

___ALPHABET_ABC:
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOdddnnnnnddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOdnnxxxxxxxxnnndOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNOOOOOOOOOOOOOOOOOOOOOOOOOddnxxxxxnnnnnnxnnOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNNNNOOOOOOOOOOOOOOOOOOOOOOddddndddddddddnnnOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNNNNOOOOOOOOOOOOOOOOOOOOOdnnnnnnnddddddddnnOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNOOOOOOOONNOOOOOONOOOOOOOdnnnnnnnnddnndddndOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNOOOOOOONNNNNOOOOOOOOOOOOddOdnnnnndddddddddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNOOOOOOOOOONNNNNONNNNOOOOOOddOdnnnnnddddddddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOOOOOONOOOOOOOONNOOOOOOOOOOOOdddnnnnnnnndddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOONNNNNNNNOOOOOOOOOOOOOOOOOOOOOddnnnnnnddddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOONNNNNNNNNNOOOOOOOOOOOOOOOOOOOOOdnnndddddddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOdnnnnndddddOnnddOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO
NNNNNNNNNOOOOOOOOOOOOOOOOOOdddddOddnnnnnndddOOnxxxxxxxnnnnnddddOOOOOOOOOOOOOOOOO
NNNNNNNNNNNNOOOOOOOOOddnnxxxxndddddddddnddOOOdxxxxxxxxxxxxxxxxxxdOOOOOOOOOOOOOOO
NNNNNNNNNNNNNNOOOnnnxxxxxiixxxxnnnnndnndddddnxxxxxxxxxxxxxxxxxxxxdOOOOOOOOOOOOOO
NNNNNNNNNNNNOOOOdxxxxxxxiiiiiixxnnnndnnnnnnnnxxxxxxxxxxxxxixxxxxxxdOOOOOOOOOOOOO
NNNNNNNNNNNOOOOOxxxxxxxxxxxxixxxxnndnnnnnnnnnxxxxxxxxxxxxiixxxxixxnOOOOOOOOOOOOO
NNNNNNNNOOOOOOOOxxxxxxiiiixxxxxxxdOdnnnnnnnnxxxxxxxxxxxxxiixxiixxxxndOOOOOOOOOOO
OOOOOOOOOOOOOOOdxxxiixiiixxxixxxxdddnnnnnnnnxxxxxxxxxxxxxxiiiixxxxxxxdOOOOOOOOOO
OOOOOOOOOOOOOOOdxxxiixiiiixxiiixxdddnnnnnnnnnxxxxxxnnnnxxxxxiiixixxxxxdOOOOOOOOO
OOOOOOOOOOOOOOOnxxiiiiiiiiiiiiiixnnnnnnnnnnnxxxxxxnndddddxxxxiiiiixxxxndOOOOOOOO
OOOOOOOOOOOOOOdxxiiiiiiiiiixxnxixnnnnnnxxxxxxxiixxxnnddddnxxxiiiiiixxxxxdOOOOOOO
OOOOOOOOOOOOOOdxxiiiiiixnnnnnnnixnnnnnnnnnxxxxiiiiinnnnddnxxxxxxiiiiiiiiixdOOOOO
OOOOOOOOOOOOOdnxiiiiiiinnnnnndniinnxnnnnnnnnnxxiiiiiixxnnnxxxxxxxxxxiixxxxdOOOOO
OOOOOOOOOOOOdxxxxxxiixxxnnnnnnnxinxxxxxxxxnnnnxxiiiiiiiixiixxxxxxxxxxxxxxndOOOOO
OOOOOOOOOOOOnxxxxxiixxiixnnnnnxiinxxnnxxxxxxxxxxiiiiiiiiiiixxxxxxxxxxxiixdOOOOOO
OOOOOOOOOOOOOnxxxixixxxiiiiiiiiiinxxxnnnnnnnnnxxxiiiiiiiiiiiixnxxxxxxxxxnOOOOOOO
OOOOOOOOOOOOOOdnnxxxxxxiiiiiiiiiixxxxxxxxxxxxxxxxiixiiiiiiiiiindOOOddOOOOOOOOOOO
OOOOOOOOOOOOOOOOOOdddddxiiiiiiiiixxxxxxxxxxxxxxxxxiiixxxxxxxxxxddOOOOOOOOOOOOOOO

___ALPHABET_123:
99999999999999999999999999555555599999999999999999999999999955555555959999999999
99999999999999999999999999995559955555323333599999999999955555555555999999999999
99999999999999999999999999999559532227722222233599959999999999555555599999999999
99999999999999999999999999999555322227222222222259955999999999555555555999999999
99999999999999999999999999955555333333335555532259999999999999559995555559555999
99999999999999999999999999955952233333333555532259999999999995599999555555555999
99988999999999999999999999999953332222233333353555599999999995599999995555555559
99989999999999999999999999999555533333335555553595555999999995999999999999955559
99999999999999999999999999995553533333333535555595555559999955999999999999955559
99999999999999999999999999999955533322222235555559995555559955995559999999955559
99999999999999999999999999999999953333333355599999999995555555555599999999955559
99998898889899999999999999999999995333335555559999999999995555555999999999999559
99999999999999999999999999999999953333333355353355555999999955599999999999999959
99999999999999999999999995555555953333333335593777777222223335559999999999999999
99999999999999999955555322777235333333333555537777777777777777723599999999999959
89988999999999995322777777777772323333333555377777777777777777777395599999995559
99999999999999993777777777777777222333332332277777777777777777777755555599955559
99999999999999952777777777777777233333333332277777777777777777777725555555555599
99999999999999952777777777777777735332222222277777777777777777777772555555559999
99999999999999957777777777777777755533332222277777777777777771777777755555599999
99999999999999937777777777777777735333332222277777222222777777777777775955555599
99999999999999527777177777777777722222222222277777233333377777771777772555555559
99999999999999377771117777772277722222222222277777233333327777111117777735955555
99999999999999327711117722333327722222222222277111722333327777777777777177599959
99999999999995277111117233333327722222222222227111111722327777777777777777359999
99999999999957777771777223333337722777222222227711111117711777777777777772559999
99999999999527777777777772232277722222222227777777711111111777777777777773555599
99999999999953777777777777771111127722222222222777771111111177227777777235555999
99999999999999522777777777111111127777722222227771777111111111355555555559999999
99999999999999995553333271111111127722277777772777717777777777735555555555555555

```

## Ideas / TODO

* MP4 decoder so you might display a youtube video in your console
* save text stream to file, load file
