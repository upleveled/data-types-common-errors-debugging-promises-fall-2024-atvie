// A team list with:
// - name
// - job position
// - role (editor, admin, no rights)
// - pets (with name and type)

// const teamRolesAsArrayOfStrings = ['editor', 'administrator', 'no rights'];
// possible but not recommended
// role: teamRolesAsArrayOfStrings[1]

const teamRoles = {
  editor: 'editor',
  admin: 'admin',
  noRights: 'no rights',
};

const teamMembers = [
  {
    id: 1,
    name: 'Antje',
    jobPosition: 'CEO',
    role: teamRoles.admin,
    pets: [
      {
        name: 'wuff',
        type: 'dog',
      },
      {
        name: 'miau',
        type: 'cat',
      },
    ],
  },
  {
    id: 2,
    name: 'Victor',
    jobPosition: 'developer',
    role: 'admin',
    pets: [],
  },
];

console.log(teamMembers);

console.log(JSON.stringify(teamMembers, null, 2));

console.log('typeof', typeof teamMembers); // object

console.log(Array.isArray(teamMembers)); // true
console.log(Array.isArray({})); // false

console.log(typeof teamMembers.name); // undefined
console.log(typeof teamMembers[0].name); // string
console.log(typeof teamMembers[0].pets); // object
console.log(Array.isArray(teamMembers[0].pets)); // true

if (typeof teamMembers[0].name !== 'string') {
  throw new Error('name is not a string!');
}

// MUTABLE

teamMembers.push({
  id: 3,
  name: 'Karl',
  jobPosition: 'developer',
  role: teamRoles.noRights,
  pets: [],
});

console.log('teamMember after push', teamMembers);

// IMMUTABLE

const newTeamMembers = [
  ...teamMembers,
  {
    id: 4,
    name: 'Matthias',
    jobPosition: 'CEO',
    role: teamRoles.admin,
    pets: [],
  },
];

console.log('newTeamMembers', newTeamMembers);

// Update team member name from Antje to Lukas

teamMembers[0].name = 'Lukas';

// Find team member by name and update name from Lukas to Antje

const foundTeamMemberLukas = teamMembers.find(
  (teamMember) => teamMember.name === 'Lukas',
);
if (foundTeamMemberLukas) {
  foundTeamMemberLukas.name = 'Antje';
}

console.log(teamMembers);

// Immutable name change from Antje to Matthias

const updatedTeamMembers = teamMembers.map((teamMember) => {
  if (teamMember.name === 'Antje') {
    return {
      ...teamMember,
      name: 'Matthias',
    };
  }
  return teamMember;
});

console.log('updatedTeamMembers', updatedTeamMembers);

// Filter all team members with job position Developer
const filterJobPosition = teamMembers.filter((teamMember) => {
  return teamMember.jobPosition === 'developer';
});

console.log(filterJobPosition);
