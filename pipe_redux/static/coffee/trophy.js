// =============================================================
//  trophy.js — Renders the trophy case page
//
//  Reads the achievement definitions from config.js and the
//  unlock state from achievements.js (which reads localStorage),
//  then builds a card for each achievement in the #trophy-grid.
//
//  LOCKED cards show:   ❓  /  ???  /  "Not yet unlocked."
//  UNLOCKED cards show: real symbol, name, and description
//
//  This script runs once on page load — no live updates.
//  If an achievement is earned while the trophy page is open,
//  the user needs to refresh to see it appear.
//
//  TO ADD A NEW ACHIEVEMENT:
//    Just add it to the ACHIEVEMENTS array in config.js.
//    This file doesn't need to change — it loops the whole array.
// =============================================================

import { ACHIEVEMENTS } from './config.js';
import { isUnlocked }   from './achievements.js';


// The <main> element that holds all the trophy cards (see trophy.html)
const grid = document.getElementById('trophy-grid');

// The "X / Y" counter in the header
const countLabel = document.getElementById('trophy-count');

// Running tally of how many achievements the player has earned
let unlockedCount = 0;


// -------------------------------------------------------------
//  Build a card for every achievement in config.js, in order.
//  The card's appearance depends on whether it's unlocked or not.
// -------------------------------------------------------------
ACHIEVEMENTS.forEach(achievement => {

    // Check localStorage for this achievement's unlock state
    const unlocked = isUnlocked(achievement.id);

    // Increment the header counter if earned
    if (unlocked) unlockedCount++;

    // Create the card element and assign CSS classes:
    //   'trophy-card'  — base styles (background, border-radius, padding)
    //   'unlocked'     — adds purple border + glow + hover lift
    //   'locked'       — dims card with opacity + grayscale filter
    const card = document.createElement('div');
    card.className = 'trophy-card ' + (unlocked ? 'unlocked' : 'locked');

    // Populate the card's inner HTML.
    // Locked cards hide all real information behind placeholders
    // so players can see *something* exists without spoiling it.
    card.innerHTML = `
        <div class="trophy-symbol">${unlocked ? achievement.symbol : '❓'}</div>
        <div class="trophy-name">${unlocked ? achievement.name : '???'}</div>
        <div class="trophy-desc">${unlocked ? achievement.description : 'Not yet unlocked.'}</div>
    `;

    grid.appendChild(card);
});


// Update the "X / Y" counter in the header now that we've looped everything
// ACHIEVEMENTS.length is the total, unlockedCount is what the player has
countLabel.textContent = `${unlockedCount} / ${ACHIEVEMENTS.length}`;