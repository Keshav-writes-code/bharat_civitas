import {
  db,
  villages_list,
  leaders_list,
  leader_votes,
  users,
  posts,
} from "astro:db";

export default async function seed() {
  const states = [
    "Uttar Pradesh",
    "Maharashtra",
    "Bihar",
    "West Bengal",
    "Madhya Pradesh",
    "Tamil Nadu",
    "Rajasthan",
    "Karnataka",
    "Gujarat",
    "Andhra Pradesh",
  ];
  const districts = [
    "Lucknow",
    "Pune",
    "Patna",
    "Kolkata",
    "Bhopal",
    "Chennai",
    "Jaipur",
    "Bangalore",
    "Ahmedabad",
    "Hyderabad",
  ];
  const villageNames = [
    "Amethi",
    "Raebareli",
    "Baramati",
    "Wayanad",
    "Varanasi",
    "Gorakhpur",
    "Mainpuri",
    "Azamgarh",
    "Kannauj",
    "Firozabad",
  ];

  const villages = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `${villageNames[i % villageNames.length]} ${Math.floor(i / 10 + 1)}`,
    district: districts[i % districts.length],
    state: states[i % states.length],
  }));
  await db.insert(villages_list).values(villages);

  // Seed leaders
  const parties = [
    "BJP",
    "INC",
    "AAP",
    "SP",
    "BSP",
    "TMC",
    "DMK",
    "AIDMK",
    "NCP",
    "Shiv Sena",
  ];
  const leaderFirstNames = [
    "Rahul",
    "Narendra",
    "Priyanka",
    "Akhilesh",
    "Mayawati",
    "Mamata",
    "Stalin",
    "Sharad",
    "Uddhav",
    "Arvind",
  ];
  const leaderLastNames = [
    "Gandhi",
    "Modi",
    "Vadra",
    "Yadav",
    "Prabhu",
    "Banerjee",
    "MK",
    "Pawar",
    "Thackeray",
    "Kejriwal",
  ];

  const leaders = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `${leaderFirstNames[i % leaderFirstNames.length]} ${leaderLastNames[(i + 3) % leaderLastNames.length]}`,
    village_id: (i % 100) + 1,
    party: parties[i % parties.length],
  }));
  await db.insert(leaders_list).values(leaders);

  // Seed leader_votes
  const votes = Array.from({ length: 100 }, (_, i) => ({
    leader_id: i + 1,
  }));
  await db.insert(leader_votes).values(votes);

  // Seed users
  const userFirstNames = [
    "Amit",
    "Sunita",
    "Rajesh",
    "Priya",
    "Suresh",
    "Anjali",
    "Vijay",
    "Kavita",
    "Ramesh",
    "Deepa",
  ];
  const userLastNames = [
    "Sharma",
    "Verma",
    "Singh",
    "Patel",
    "Kumar",
    "Gupta",
    "Reddy",
    "Nair",
    "Deshmukh",
    "Joshi",
  ];

  const userData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `${userFirstNames[i % userFirstNames.length]} ${userLastNames[(i + 5) % userLastNames.length]}`,
    email: `user${i + 1}@example.com`,
    village_id: (i % 100) + 1,
  }));
  await db.insert(users).values(userData);

  // Seed posts
  const postTypes = ["request", "news"] as const;
  const postData = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    village_id: (i % 100) + 1,
    user_id: (i % 100) + 1,
    metadata: {
      title: `Post title ${i + 1}`,
      content: `This is the content for post number ${i + 1} which provides interesting insights about Village ${(i % 100) + 1}.`,
    },
    likes: Math.floor(Math.random() * 500),
    post_type: postTypes[i % 2],
  }));
  await db.insert(posts).values(postData);
}
