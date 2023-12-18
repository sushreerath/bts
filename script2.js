// BTS Members Data
const btsMembers = [
    { name: 'RM', position: 'Leader', imgSrc: 'rm.jpeg', achievements: 'Produced multiple albums' },
    { name: 'Jin', position: 'Vocalist', imgSrc: 'jin.jpeg', achievements: 'Acted in "Jin\'s Eat Jin" series' },
    { name: 'Suga', position: 'Rapper', imgSrc: 'suga.jpeg', achievements: 'Won several songwriting awards' },
    { name: 'J-Hope', position: 'Rapper/Dancer', imgSrc: 'jhope.jpeg', achievements: 'Choreographed for BTS' },
    { name: 'Jimin', position: 'Vocalist/Dancer', imgSrc: 'jimin.jpeg', achievements: 'Featured in various magazines' },
    { name: 'V', position: 'Vocalist', imgSrc: 'v.jpeg', achievements: 'Acted in the drama "Hwarang"' },
    { name: 'Jungkook', position: 'Vocalist/Maknae', imgSrc: 'jungkook.jpeg', achievements: 'Youngest recipient of the Order of Cultural Merit' }
];

// Populate Members
const membersContainer = document.getElementById('members-container');

btsMembers.forEach(member => {
    const memberCard = document.createElement('div');
    memberCard.classList.add('member-card');

    const img = document.createElement('img');
    img.src = member.imgSrc;
    img.alt = member.name;

    const name = document.createElement('h2');
    name.textContent = member.name;

    const position = document.createElement('p');
    position.textContent = member.position;

    const achievements = document.createElement('p');
    achievements.classList.add('achievements');
    achievements.textContent = member.achievements;

    memberCard.appendChild(img);
    memberCard.appendChild(name);
    memberCard.appendChild(position);
    memberCard.appendChild(achievements);

    membersContainer.appendChild(memberCard);
});
