// =============================================================
//  achievements.js — Persistent achievement unlock system
//
//  HOW IT WORKS:
//    Achievements are stored as a JSON object in localStorage
//    under a single key. localStorage survives tab closes and
//    browser restarts (until the user clears site data).
//
//  HOW TO UNLOCK FROM A TILE:
//    import { unlock } from './achievements.js';
//    unlock('pipe_escape');   // call this when the player earns it
//
//  HOW TO CHECK IF UNLOCKED (e.g. to gate content):
//    import { isUnlocked } from './achievements.js';
//    if (isUnlocked('take_a_seat')) { showBonusContent(); }
//
//  STORED DATA SHAPE:
//    {
//      "pipe_escape":  { "unlockedAt": "2024-01-15T10:23:00.000Z" },
//      "take_a_seat":  { "unlockedAt": "2024-01-16T08:05:11.000Z" },
//      ...
//    }
//
//  NOTE: The achievement *definitions* (names, symbols, descriptions)
//  live in config.js. This file only handles read/write of unlock state.
// =============================================================


// The localStorage key under which all achievement data is stored.
// If you ever need to wipe everyone's progress and start fresh,
// change this string — old data under the previous key will be orphaned.
const STORAGE_KEY = 'pipe_it_up_achievements';


// -------------------------------------------------------------
//  _load  (private)
//  Reads and parses the achievement object from localStorage.
//  Returns an empty object {} if nothing is stored yet, or if
//  the stored JSON is somehow corrupted (try/catch handles that).
// -------------------------------------------------------------
function _load() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
    } catch {
        // JSON.parse throws if the stored string isn't valid JSON.
        // Return empty rather than crashing — user just loses no progress
        // (nothing was stored yet if this fires in normal use).
        return {};
    }
}


// -------------------------------------------------------------
//  _save  (private)
//  Serialises the achievement object back to localStorage.
//  Always call this after mutating the data from _load().
// -------------------------------------------------------------
function _save(data) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}


// -------------------------------------------------------------
//  unlock  (public)
//  Marks an achievement as earned. Safe to call multiple times —
//  if already unlocked, this is a no-op (won't overwrite the
//  original unlock timestamp).
//
//  @param {string} id — must match an id in config.js ACHIEVEMENTS
// -------------------------------------------------------------
export function unlock(id) {
    const data = _load();

    // Only write if not already unlocked, to preserve the original timestamp
    if (!data[id]) {
        data[id] = {
            unlockedAt: new Date().toISOString(), // ISO string e.g. "2024-01-15T10:23:00.000Z"
        };
        _save(data);
    }
}


// -------------------------------------------------------------
//  isUnlocked  (public)
//  Returns true if the given achievement has been earned.
//  Use this to gate content or add visual indicators.
//
//  @param  {string}  id — achievement id from config.js
//  @return {boolean}
// -------------------------------------------------------------
export function isUnlocked(id) {
    // !! converts the value to a boolean:
    //   undefined → false (not unlocked)
    //   { unlockedAt: ... } → true (unlocked)
    return !!_load()[id];
}


// -------------------------------------------------------------
//  getAll  (public)
//  Returns the full unlock map. Useful for the trophy page or
//  any debug UI that wants to display all unlock timestamps.
//
//  @return {{ [id: string]: { unlockedAt: string } }}
// -------------------------------------------------------------
export function getAll() {
    return _load();
}


// -------------------------------------------------------------
//  resetAll  (public)
//  Wipes all achievement data. Intended for dev/testing only.
//  To use from browser console: import and call, or just run:
//    localStorage.removeItem('pipe_it_up_achievements');
// -------------------------------------------------------------
export function resetAll() {
    localStorage.removeItem(STORAGE_KEY);
}