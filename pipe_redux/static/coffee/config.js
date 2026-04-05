// =============================================================
//  config.js — Single source of truth for all assets & actions
//
//  HOW TO USE:
//    1. Drop your file into the correct folder under static/
//    2. Add a key for it here in the right section
//    3. Import the key in your tile's JS file and reference it
//       e.g.  import { AUDIO } from './config.js';
//             const sound = new Audio(AUDIO.GRUNT_SFX);
//
//  WHY THIS EXISTS:
//    Without this, file paths get scattered across every JS file.
//    When a filename changes, you'd have to hunt it down everywhere.
//    With this file, you change one line here and everything updates.
//
//  FILE STRUCTURE this maps to:
//    pipe_redux/static/
//      audio/
//        music/   ← full songs, longer files
//        sfx/     ← short sound effects, one-shots
//      images/
//        tiles/       ← icons displayed on each main tile
//        characters/  ← interactive draggable/animated characters
//      video/     ← full video files
// =============================================================


// -------------------------------------------------------------
//  AUDIO
//  All audio paths relative to pipe_redux/ (the HTML root).
//  Split into music (looping/long) vs sfx (short one-shots)
//  so it's obvious how each file is meant to be used.
// -------------------------------------------------------------
export const AUDIO = {

    // --- Music (full songs, may loop) ---
    // Plays when the Up button is clicked on the Pipe It Up tile.
    // Should be something with a strong beat if beat-syncing colors later.
    UP_SONG:   'static/audio/music/up-song.mp3',

    // Plays on the Similar Outskirts tile. Must be a Troy song.
    TROY_SONG: 'static/audio/music/troy.mp3',

    // Original trance track from the archive demo. Used in the Pipe It Up tile.
    TRANCE:    'static/audio/music/trance.mp3',

    // --- SFX (short clips, play once) ---
    // Halo grunt sound. Plays on the mystery tile (Tile 3).
    GRUNT_SFX: 'static/audio/sfx/grunt.mp3',

    // "Ew" fish sound from SpongeBob. Plays on Am I Ugly? when score is low.
    FISH_SFX:  'static/audio/sfx/fish.mp3',

    // Sonic the Hedgehog music. Plays when broccoli is dragged onto lemon.
    SONIC_SFX: 'static/audio/sfx/sonic.mp3',
};


// -------------------------------------------------------------
//  IMAGES
//  All image paths relative to pipe_redux/ (the HTML root).
//  Supported formats: .png, .jpg, .gif (for animated characters)
// -------------------------------------------------------------
export const IMAGES = {

    // --- Tile icons (shown on each main menu tile) ---
    WHIP:   'static/images/tiles/whip.png',    // Whip It Up tile
    SEAT:   'static/images/tiles/seat.png',    // Take A Seat tile
    TROPHY: 'static/images/tiles/trophy.png',  // Trophy Case tile
    PIPE:   'static/images/tiles/pipe.png',    // Pipe It Up tile icon

    // --- Characters (used in interactive tile mechanics) ---
    // Draggable item for the Lemon Time tile
    LEMON:    'static/images/characters/lemon.png',

    // Draggable item for the Lemon Time tile — drag this onto the lemon
    BROCCOLI: 'static/images/characters/broccoli.png',

    // Animated gif that fades in, eats the broccoli, then fades out on Lemon Time
    CHICK:    'static/images/characters/chick.gif',

    // "Ew" fish from SpongeBob — shown on Am I Ugly? when score is low
    FISH:     'static/images/characters/fish.png',

    // Halo grunt dancing gif — shown on the mystery tile (Tile 3)
    GRUNT:    'static/images/characters/grunt.gif',
};


// -------------------------------------------------------------
//  ACHIEVEMENTS
//  Each object here becomes one card in the Trophy Case.
//
//  Fields:
//    id          — unique string key. This is what gets stored in
//                  localStorage, so NEVER change an id after launch
//                  or existing unlocks will break.
//    name        — display name shown on the trophy card.
//                  These are placeholders — update before shipping.
//    symbol      — emoji shown large on the card. Replace with a
//                  custom image path string if you want to use art
//                  instead (trophy.js will need a small update for that).
//    description — flavour text shown under the name on unlock.
//
//  TO ADD A NEW ACHIEVEMENT:
//    1. Add an object to this array with a unique id
//    2. In the tile JS where it's earned, call:
//         import { unlock } from './achievements.js';
//         unlock('your_new_id');
//    3. That's it — trophy.js reads this list automatically.
// -------------------------------------------------------------
export const ACHIEVEMENTS = [
    {
        id:          'pipe_speed',
        name:        'Speed Demon',           // placeholder name
        symbol:      '💨',
        description: 'Clicked Pipe enough times to max the speed.',
    },
    {
        id:          'pipe_escape',
        name:        'Jailbreak',             // placeholder name
        symbol:      '🟧',
        // Earned when the box breaks out of its tile after enough Pipe clicks
        description: 'The box broke free. You did that.',
    },
    {
        id:          'take_a_seat',
        name:        'Committed',             // placeholder name
        symbol:      '🪑',
        // Earned by watching the Take A Seat video to completion without tabbing away
        description: 'Sat through the whole video without leaving.',
    },
    {
        id:          'volume_climber',
        name:        'Volume Climber',        // placeholder name
        symbol:      '🔊',
        // Earned by clicking the mystery button enough times to hit max volume
        description: 'Raised the hidden volume to maximum.',
    },
    {
        id:          'similar_outskirts',
        name:        'Troy Fan',              // placeholder name
        symbol:      '🎵',
        description: 'Played the Similar Outskirts tile.',
    },
    {
        id:          'ugly_low',
        name:        'Ew.',                   // placeholder name
        symbol:      '🐟',
        // Earned when the random ugliness score comes back very low
        description: 'Got a truly unfortunate ugliness score.',
    },
    {
        id:          'ugly_high',
        name:        'Looking Good',          // placeholder name
        symbol:      '👍',
        // Earned when the random ugliness score comes back high
        description: 'Scored well on the ugliness test.',
    },
    {
        id:          'lemon_time',
        name:        'Lemon Time',            // placeholder name
        symbol:      '🍋',
        // Earned by successfully dragging the broccoli onto the lemon
        description: 'Dragged the broccoli onto the lemon.',
    },
];