// =============================================
// EduNepal — script.js
// =============================================

// =============================================
// DATA
// =============================================

const COLLEGES = [
  // KATHMANDU
  {
    id: 1, name: "Tribhuvan University", type: "University", city: "Kathmandu",
    location: "Kirtipur, Kathmandu", affiliation: "Autonomous", estd: 1959,
    fee: "NPR 25,000–1,20,000/yr", rating: 4.5,
    desc: "The oldest and largest university in Nepal, offering 400+ programs across science, engineering, management, humanities, law, and medicine. Affiliated colleges span all provinces.",
    programs: ["BCA", "BBS", "BE", "MBBS", "LLB", "BBA", "MA", "MSc"],
    bgColor: "linear-gradient(135deg,#1e3a5f,#2d6a9f)", emoji: "🏛️",
  },
  {
    id: 2, name: "Kathmandu University", type: "University", city: "Kathmandu",
    location: "Dhulikhel, Kavrepalanchok", affiliation: "Autonomous", estd: 1991,
    fee: "NPR 1,50,000–2,50,000/yr", rating: 4.7,
    desc: "A leading autonomous university known for quality education and international academic standards. Strong emphasis on research and innovation.",
    programs: ["BE Computer", "BE Civil", "BBA", "MBBS", "BSc Env Science"],
    bgColor: "linear-gradient(135deg,#1a4731,#2d7a50)", emoji: "🎓",
  },
  {
    id: 3, name: "Pulchowk Campus, IOE", type: "Engineering", city: "Lalitpur",
    location: "Pulchowk, Lalitpur", affiliation: "Tribhuvan University", estd: 1972,
    fee: "NPR 1,20,000/yr", rating: 4.8,
    desc: "Nepal's most prestigious engineering college producing top engineers, researchers, and tech entrepreneurs. Highly competitive entrance exam required.",
    programs: ["BE Computer", "BE Civil", "BE Electronics", "BE Electrical", "ME"],
    bgColor: "linear-gradient(135deg,#1e3a5f,#3d6fa3)", emoji: "⚙️",
  },
  {
    id: 4, name: "NIST College", type: "IT", city: "Kathmandu",
    location: "Naxal, Kathmandu", affiliation: "Tribhuvan University", estd: 1998,
    fee: "NPR 90,000/yr", rating: 4.4,
    desc: "Nepal Institute of Science and Technology — offering BCA, BIT, and BSc programs with modern labs and experienced faculty focused on practical skills.",
    programs: ["BCA", "BSc CSIT", "BIT", "MCA"],
    bgColor: "linear-gradient(135deg,#3d1a5f,#7a3db5)", emoji: "💻",
  },
  {
    id: 5, name: "Herald College Kathmandu", type: "IT", city: "Kathmandu",
    location: "Naxal, Kathmandu", affiliation: "Univ. of Wolverhampton, UK", estd: 2009,
    fee: "NPR 2,00,000/yr", rating: 4.3,
    desc: "Affiliated with University of Wolverhampton, UK. Offers internationally recognized BSc (Hons) Computing and Business programs with world-class standards.",
    programs: ["BSc Computing", "BBA", "Foundation IT"],
    bgColor: "linear-gradient(135deg,#1a3d5f,#2d7aa3)", emoji: "🌐",
  },
  {
    id: 6, name: "Shanker Dev Campus", type: "Management", city: "Kathmandu",
    location: "Putalisadak, Kathmandu", affiliation: "Tribhuvan University", estd: 1959,
    fee: "NPR 40,000/yr", rating: 4.1,
    desc: "Premier management college under Tribhuvan University offering BBS, BBA, and MBA programs in the heart of Kathmandu. Affordable and respected institution.",
    programs: ["BBS", "BBA", "MBA", "MBS"],
    bgColor: "linear-gradient(135deg,#1a4f2d,#2d8a4e)", emoji: "📊",
  },
  {
    id: 7, name: "Padma Kanya Campus", type: "Humanities", city: "Kathmandu",
    location: "Bagbazar, Kathmandu", affiliation: "Tribhuvan University", estd: 1961,
    fee: "NPR 25,000/yr", rating: 4.0,
    desc: "One of the oldest women's colleges in Nepal under TU, offering programs in humanities, education, and social sciences with a strong academic tradition.",
    programs: ["BA", "BSc", "BEd", "MA"],
    bgColor: "linear-gradient(135deg,#4f1a3d,#8a3d6e)", emoji: "📚",
  },
  // POKHARA
  {
    id: 8, name: "Pokhara University", type: "University", city: "Pokhara",
    location: "Lekhnath, Kaski", affiliation: "Autonomous", estd: 1997,
    fee: "NPR 80,000–1,80,000/yr", rating: 4.3,
    desc: "Known for its scenic campus and quality technical and management programs. Strong engineering and IT faculty with growing research output.",
    programs: ["BE Computer", "BE Civil", "BCA", "BBA", "BSc CSIT"],
    bgColor: "linear-gradient(135deg,#1a3a5f,#3d7aa3)", emoji: "🏔️",
  },
  {
    id: 9, name: "Prithvi Narayan Campus", type: "University", city: "Pokhara",
    location: "Pokhara, Kaski", affiliation: "Tribhuvan University", estd: 1956,
    fee: "NPR 30,000–80,000/yr", rating: 4.0,
    desc: "One of the most established campuses under Tribhuvan University in the Gandaki Province, offering programs across science, management, humanities, and education.",
    programs: ["BBS", "BSc", "BA", "BEd", "BCA"],
    bgColor: "linear-gradient(135deg,#3d2a1a,#8a6a3d)", emoji: "🌿",
  },
  // DHARAN
  {
    id: 10, name: "BPKIHS", type: "Medical", city: "Dharan",
    location: "Dharan, Sunsari", affiliation: "Autonomous", estd: 1993,
    fee: "NPR 2,50,000/yr", rating: 4.6,
    desc: "BP Koirala Institute of Health Sciences — premier medical university offering MBBS, BDS, nursing, and allied health programs with world-class hospital training.",
    programs: ["MBBS", "BDS", "BSc Nursing", "B Pharmacy", "BAMS"],
    bgColor: "linear-gradient(135deg,#5f1a1a,#b53d3d)", emoji: "🏥",
  },
  // BIRATNAGAR
  {
    id: 11, name: "Purwanchal University", type: "University", city: "Biratnagar",
    location: "Sundarharaicha, Morang", affiliation: "Autonomous", estd: 1994,
    fee: "NPR 40,000–1,20,000/yr", rating: 4.0,
    desc: "The major university of Province 1, covering eastern Nepal with programs across engineering, management, sciences, and health. Growing research and industry partnerships.",
    programs: ["BE Computer", "BBA", "BCA", "MBBS", "BBS", "BSc CSIT"],
    bgColor: "linear-gradient(135deg,#1a3f5f,#2d7090)", emoji: "🏫",
  },
  {
    id: 12, name: "Nepal Engineering College (NEC)", type: "Engineering", city: "Bhairahawa",
    location: "Bhaktapur, Kathmandu", affiliation: "Pokhara University", estd: 1994,
    fee: "NPR 1,10,000/yr", rating: 4.4,
    desc: "Premier engineering institution with state-of-the-art facilities and strong industry connections. Known for its rigorous curriculum and placement record.",
    programs: ["BE Computer", "BE Civil", "BE Electronics", "BE Architecture"],
    bgColor: "linear-gradient(135deg,#1a3a4f,#2d6a80)", emoji: "🏗️",
  },
  // CHITWAN
  {
    id: 13, name: "Chitwan Medical College", type: "Medical", city: "Chitwan",
    location: "Bharatpur, Chitwan", affiliation: "Kathmandu University", estd: 2009,
    fee: "NPR 2,80,000/yr", rating: 4.3,
    desc: "Leading medical college in the mid-western region under Kathmandu University. Offers MBBS with strong clinical training at Chitwan Medical Hospital.",
    programs: ["MBBS", "BDS", "BSc Nursing", "B Pharmacy"],
    bgColor: "linear-gradient(135deg,#3d1a1a,#8a3d3d)", emoji: "🩺",
  },
  // BUTWAL / BHAIRAHAWA AREA
  {
    id: 14, name: "Kalika Campus Butwal", type: "IT", city: "Butwal",
    location: "Butwal-11, Rupandehi", affiliation: "Tribhuvan University", estd: 1994,
    fee: "NPR 60,000–80,000/yr", rating: 4.2,
    desc: "Shubham's college! One of the most reputed campuses in Lumbini Province under Tribhuvan University, offering BCA, BBS, BA, and BEd with experienced faculty. Popular for IT and management programs in the Butwal-Bhairahawa corridor.",
    programs: ["BCA", "BBS", "BA", "BEd", "BSc"],
    bgColor: "linear-gradient(135deg,#1a3d5f,#2d6a8a)", emoji: "🎓",
  },
  {
    id: 15, name: "Siddhartha Vanasthali Institute (SVI)", type: "Engineering", city: "Butwal",
    location: "Bhairahawa, Rupandehi", affiliation: "Tribhuvan University", estd: 2002,
    fee: "NPR 1,00,000/yr", rating: 4.1,
    desc: "A top engineering college in the Butwal-Bhairahawa region offering BE programs. Known for computer and civil engineering streams with modern infrastructure.",
    programs: ["BE Computer", "BE Civil", "BE Electronics", "ME"],
    bgColor: "linear-gradient(135deg,#1a4a2a,#2d8050)", emoji: "⚙️",
  },
  {
    id: 16, name: "Lumbini Engineering College", type: "Engineering", city: "Butwal",
    location: "Bhalwari, Butwal, Rupandehi", affiliation: "Tribhuvan University", estd: 2008,
    fee: "NPR 95,000/yr", rating: 4.0,
    desc: "Established engineering college offering BE programs in the heart of Lumbini Province. Strong focus on practical engineering skills and industry-ready graduates.",
    programs: ["BE Computer", "BE Civil", "BE Architecture"],
    bgColor: "linear-gradient(135deg,#1a3a4f,#2d5f80)", emoji: "🏗️",
  },
  {
    id: 17, name: "Butwal Multiple Campus", type: "Management", city: "Butwal",
    location: "Butwal-3, Rupandehi", affiliation: "Tribhuvan University", estd: 1972,
    fee: "NPR 25,000–50,000/yr", rating: 3.9,
    desc: "One of the oldest and most established campuses in Butwal, offering affordable management and humanities programs under TU. Popular choice for local students.",
    programs: ["BBS", "BA", "BEd", "MA", "MBS"],
    bgColor: "linear-gradient(135deg,#2a1a3f,#5a3d8a)", emoji: "📖",
  },
  {
    id: 18, name: "Bhairahawa Multiple Campus", type: "Management", city: "Bhairahawa",
    location: "Siddharthanagar, Rupandehi", affiliation: "Tribhuvan University", estd: 1971,
    fee: "NPR 20,000–45,000/yr", rating: 3.8,
    desc: "Historic campus in Bhairahawa near the Nepal-India border, offering management and humanities programs. Convenient for students from Rupandehi and nearby districts.",
    programs: ["BBS", "BA", "BEd", "BSc"],
    bgColor: "linear-gradient(135deg,#1a3a2a,#2d6a4a)", emoji: "🏫",
  },
  {
    id: 19, name: "Tilottama College of Technical Education", type: "IT", city: "Butwal",
    location: "Tilottama, Rupandehi", affiliation: "Tribhuvan University", estd: 2006,
    fee: "NPR 55,000/yr", rating: 3.9,
    desc: "Technical college in Tilottama municipality offering BCA and IT-focused programs. Growing reputation in the region for practical technical education.",
    programs: ["BCA", "BIT", "Diploma IT"],
    bgColor: "linear-gradient(135deg,#2a1a3f,#6a3da0)", emoji: "💻",
  },
  {
    id: 20, name: "Universal College of Medical Sciences", type: "Medical", city: "Bhairahawa",
    location: "Bhairahawa, Rupandehi", affiliation: "Tribhuvan University", estd: 1997,
    fee: "NPR 2,20,000/yr", rating: 4.3,
    desc: "Premier medical college in Bhairahawa attached to a well-equipped teaching hospital. Offers MBBS and nursing programs serving the Terai region.",
    programs: ["MBBS", "BSc Nursing", "B Pharmacy", "BAMS"],
    bgColor: "linear-gradient(135deg,#5f1a2a,#b53d5a)", emoji: "🏥",
  },
];

const COURSES = [
  {
    id: 1, name: "Bachelor of Business Studies (BBS)", short: "BBS", level: "Bachelor", cat: "Management",
    college: "Tribhuvan University Affiliated Colleges", duration: "4 years", fee: "NPR 25,000–40,000/yr",
    desc: "Comprehensive business education covering accounting, economics, finance, business law, and entrepreneurship. Affordable and widely available across Nepal.",
    careers: ["Accountant", "Business Analyst", "Bank Officer", "Entrepreneur"],
  },
  {
    id: 2, name: "Bachelor of Computer Applications (BCA)", short: "BCA", level: "Bachelor", cat: "IT",
    college: "TU & PU Affiliated Colleges", duration: "4 years", fee: "NPR 60,000–1,00,000/yr",
    desc: "Practical computer applications program focusing on software development, databases, networking, and IT management. Strong foundation for IT careers.",
    careers: ["Software Developer", "Web Developer", "Database Admin", "IT Support"],
  },
  {
    id: 3, name: "Bachelor of Engineering – Computer", short: "BE Computer", level: "Bachelor", cat: "Engineering",
    college: "IOE / Pokhara University Colleges", duration: "4 years", fee: "NPR 1,00,000–1,50,000/yr",
    desc: "In-depth computer engineering program with focus on software development, hardware systems, algorithms, computer architecture, and systems design.",
    careers: ["Software Engineer", "Systems Architect", "Research Engineer", "DevOps"],
  },
  {
    id: 4, name: "Bachelor of Medicine and Surgery (MBBS)", short: "MBBS", level: "Bachelor", cat: "Medical",
    college: "BPKIHS, KU Medical Colleges, TU Affiliated", duration: "5.5 years", fee: "NPR 2,50,000–5,00,000/yr",
    desc: "Comprehensive medical degree covering anatomy, physiology, pathology, pharmacology, clinical medicine, and surgery with hospital training.",
    careers: ["Medical Doctor", "Surgeon", "Specialist Physician", "Researcher"],
  },
  {
    id: 5, name: "Master of Business Administration (MBA)", short: "MBA", level: "Master", cat: "Management",
    college: "Kathmandu University, PU, TU Colleges", duration: "2 years", fee: "NPR 3,00,000–6,00,000/yr",
    desc: "Advanced business administration program with specializations in finance, marketing, HR, and operations. Prepares graduates for senior management roles.",
    careers: ["Manager", "Consultant", "Entrepreneur", "Executive"],
  },
  {
    id: 6, name: "Bachelor of Science in CSIT", short: "BSc CSIT", level: "Bachelor", cat: "IT",
    college: "TU Affiliated Colleges", duration: "4 years", fee: "NPR 85,000–1,10,000/yr",
    desc: "Strong focus on computer science theory and IT applications under Tribhuvan University. Covers algorithms, OS, networks, databases, and programming.",
    careers: ["Software Developer", "Data Analyst", "System Admin", "AI Engineer"],
  },
  {
    id: 7, name: "Bachelor of Business Administration (BBA)", short: "BBA", level: "Bachelor", cat: "Management",
    college: "Multiple Private Colleges", duration: "4 years", fee: "NPR 70,000–1,50,000/yr",
    desc: "Professional business degree covering management, marketing, finance, operations, and entrepreneurship. Industry-oriented curriculum with case study approach.",
    careers: ["Business Manager", "Marketing Executive", "Finance Officer", "HR Manager"],
  },
  {
    id: 8, name: "Bachelor of Laws (LLB)", short: "LLB", level: "Bachelor", cat: "Law",
    college: "Nepal Law Campus, TU Affiliates", duration: "3 years", fee: "NPR 25,000–50,000/yr",
    desc: "Covers constitutional law, criminal law, civil law, property law, and legal procedures under Nepal's legal framework. Pathway to bar qualification.",
    careers: ["Lawyer", "Legal Advisor", "Judge", "Government Officer"],
  },
  {
    id: 9, name: "Bachelor of Engineering – Civil", short: "BE Civil", level: "Bachelor", cat: "Engineering",
    college: "IOE / PU / TU Colleges", duration: "4 years", fee: "NPR 1,00,000–1,40,000/yr",
    desc: "Covers structural engineering, construction management, transportation, surveying, geotechnical and environmental systems. High demand in Nepal's growing infrastructure sector.",
    careers: ["Civil Engineer", "Site Engineer", "Project Manager", "Structural Designer"],
  },
  {
    id: 10, name: "Bachelor of Hotel Management (BHM)", short: "BHM", level: "Bachelor", cat: "Hospitality",
    college: "Multiple Hospitality Colleges", duration: "4 years", fee: "NPR 1,00,000–2,00,000/yr",
    desc: "Hospitality management program with practical training, industrial exposure, and internship placements in Nepal's thriving tourism and hotel industry.",
    careers: ["Hotel Manager", "Tour Operator", "Event Planner", "Restaurant Manager"],
  },
  {
    id: 11, name: "Master of Engineering – Software", short: "ME Software", level: "Master", cat: "Engineering",
    college: "Kathmandu University, IOE", duration: "2 years", fee: "NPR 4,00,000–7,50,000/yr",
    desc: "Advanced software engineering with research focus and industry collaboration. Covers software architecture, AI, machine learning, and cybersecurity.",
    careers: ["Senior Engineer", "Tech Lead", "Researcher", "CTO"],
  },
  {
    id: 12, name: "Bachelor of Science in Nursing", short: "BSc Nursing", level: "Bachelor", cat: "Medical",
    college: "BPKIHS, Medical Colleges", duration: "4 years", fee: "NPR 1,50,000–3,00,000/yr",
    desc: "Professional nursing education with clinical practice, anatomy, pathology, and healthcare management. High demand locally and for international opportunities.",
    careers: ["Registered Nurse", "ICU Nurse", "Healthcare Admin", "International Nurse"],
  },
  {
    id: 13, name: "Diploma in Computer Engineering", short: "Diploma IT", level: "Diploma", cat: "IT",
    college: "CTEVT Affiliated Colleges", duration: "3 years", fee: "NPR 30,000–60,000/yr",
    desc: "3-year diploma offering practical computer engineering skills including programming, networking, electronics, and IT maintenance. Available at many technical colleges across Nepal.",
    careers: ["IT Technician", "Network Admin", "Computer Repair", "Junior Developer"],
  },
  {
    id: 14, name: "Bachelor of Engineering – Electronics", short: "BE Electronics", level: "Bachelor", cat: "Engineering",
    college: "IOE / PU Colleges", duration: "4 years", fee: "NPR 1,10,000–1,40,000/yr",
    desc: "Covers analog and digital electronics, microprocessors, communication systems, signal processing, and embedded systems design.",
    careers: ["Electronics Engineer", "Telecom Engineer", "R&D Engineer", "Embedded Developer"],
  },
  {
    id: 15, name: "Bachelor of Pharmacy (B.Pharm)", short: "B.Pharm", level: "Bachelor", cat: "Medical",
    college: "BPKIHS, Medical Colleges", duration: "4 years", fee: "NPR 1,00,000–2,00,000/yr",
    desc: "Pharmaceutical sciences including pharmacology, drug formulation, pharmacokinetics, and pharmacy practice. Strong career path in healthcare and manufacturing.",
    careers: ["Pharmacist", "Drug Inspector", "Clinical Researcher", "Medical Rep"],
  },
  {
    id: 16, name: "Master of Science in Computer Science", short: "MSc CS", level: "Master", cat: "IT",
    college: "TU, KU, PU Graduate Schools", duration: "2 years", fee: "NPR 2,00,000–4,00,000/yr",
    desc: "Graduate program in advanced computer science covering AI, machine learning, data science, distributed computing, and research methodology.",
    careers: ["Data Scientist", "AI Engineer", "Researcher", "Senior Developer"],
  },
];

const HOUSING = [
  {
    id: 1, name: "Pulchowk Boys Hostel", type: "Hostel", gender: "Male",
    near: "IOE Pulchowk Campus", city: "Lalitpur", location: "Pulchowk, Lalitpur",
    price: 4000, capacity: 80, available: "Available",
    amenities: ["WiFi", "Meals", "Study Room", "24hr Security", "Laundry"],
    emoji: "🏠",
  },
  {
    id: 2, name: "Kirtipur Student Girls Hostel", type: "Hostel", gender: "Female",
    near: "Tribhuvan University Main Campus", city: "Kathmandu", location: "Kirtipur, Kathmandu",
    price: 5500, capacity: 50, available: "Limited",
    amenities: ["WiFi", "Meals", "Common Room", "CCTV", "Laundry", "Garden"],
    emoji: "🏡",
  },
  {
    id: 3, name: "Naxal Modern PG", type: "PG", gender: "Female",
    near: "Herald College, Sanepa Colleges", city: "Kathmandu", location: "Naxal, Kathmandu",
    price: 6500, capacity: 20, available: "Limited",
    amenities: ["High-speed WiFi", "Meals", "AC Rooms", "Laundry", "TV"],
    emoji: "🏘️",
  },
  {
    id: 4, name: "Baneshwor Flat Share", type: "Rental", gender: "Co-ed",
    near: "Multiple colleges – central location", city: "Kathmandu", location: "Baneshwor, Kathmandu",
    price: 7000, capacity: 4, available: "Available",
    amenities: ["WiFi", "Cable TV", "Full Kitchen", "Parking"],
    emoji: "🏢",
  },
  {
    id: 5, name: "Dharan Student Lodge", type: "Hostel", gender: "Male",
    near: "BPKIHS Campus", city: "Dharan", location: "Dharan, Sunsari",
    price: 3000, capacity: 100, available: "Available",
    amenities: ["Meals", "Study Area", "Common Room", "WiFi"],
    emoji: "🏠",
  },
  {
    id: 6, name: "Pokhara Lake View Room", type: "Rental", gender: "Co-ed",
    near: "Pokhara University Campus", city: "Pokhara", location: "Lakeside, Pokhara",
    price: 4500, capacity: 6, available: "Limited",
    amenities: ["Lake View Balcony", "WiFi", "Shared Kitchen", "Parking"],
    emoji: "🏞️",
  },
  {
    id: 7, name: "Student Haven PG Bhaktapur", type: "PG", gender: "Male",
    near: "Nepal Engineering College", city: "Kathmandu", location: "Bhaktapur",
    price: 5000, capacity: 20, available: "Available",
    amenities: ["WiFi", "Meals", "Laundry", "CCTV"],
    emoji: "🏠",
  },
  // BUTWAL / BHAIRAHAWA HOUSING
  {
    id: 8, name: "Kalika Hostel Butwal", type: "Hostel", gender: "Male",
    near: "Kalika Campus Butwal", city: "Butwal", location: "Butwal-11, Rupandehi",
    price: 3200, capacity: 60, available: "Available",
    amenities: ["WiFi", "Meals", "Study Room", "24hr Security"],
    emoji: "🏠",
  },
  {
    id: 9, name: "Butwal Girls PG", type: "PG", gender: "Female",
    near: "Kalika Campus & Butwal Multiple Campus", city: "Butwal", location: "Butwal-3, Rupandehi",
    price: 4000, capacity: 15, available: "Limited",
    amenities: ["WiFi", "Meals", "Female-Only", "CCTV", "Laundry"],
    emoji: "🏡",
  },
  {
    id: 10, name: "Tilottama Student Lodge", type: "Hostel", gender: "Co-ed",
    near: "Tilottama College, SVI Engineering", city: "Butwal", location: "Tilottama, Rupandehi",
    price: 2800, capacity: 40, available: "Available",
    amenities: ["WiFi", "Shared Kitchen", "Study Area", "Common Room"],
    emoji: "🏘️",
  },
  {
    id: 11, name: "Bhairahawa Campus Hostel", type: "Hostel", gender: "Male",
    near: "Bhairahawa Multiple Campus, UCMS", city: "Bhairahawa", location: "Siddharthanagar, Rupandehi",
    price: 2600, capacity: 80, available: "Available",
    amenities: ["Meals", "Study Room", "WiFi", "Sports Ground"],
    emoji: "🏠",
  },
  {
    id: 12, name: "Siddhartha PG Rooms", type: "PG", gender: "Co-ed",
    near: "SVI Engineering College", city: "Bhairahawa", location: "Bhairahawa, Rupandehi",
    price: 3500, capacity: 12, available: "Available",
    amenities: ["WiFi", "Kitchen Access", "Laundry", "24hr Water"],
    emoji: "🏘️",
  },
  {
    id: 13, name: "Dhulikhel Student Rooms", type: "Rental", gender: "Co-ed",
    near: "Kathmandu University", city: "Kathmandu", location: "Dhulikhel, Kavrepalanchok",
    price: 4200, capacity: 8, available: "Limited",
    amenities: ["WiFi", "Mountain View", "Shared Kitchen", "Parking"],
    emoji: "🏞️",
  },
  {
    id: 14, name: "Lekhnath Hostel Pokhara", type: "Hostel", gender: "Male",
    near: "Pokhara University", city: "Pokhara", location: "Lekhnath, Kaski",
    price: 3800, capacity: 55, available: "Available",
    amenities: ["WiFi", "Meals", "Study Room", "Sports", "Laundry"],
    emoji: "🏠",
  },
  {
    id: 15, name: "Bharatpur Medico PG", type: "PG", gender: "Co-ed",
    near: "Chitwan Medical College", city: "Chitwan", location: "Bharatpur, Chitwan",
    price: 5500, capacity: 18, available: "Available",
    amenities: ["WiFi", "Meals", "AC Rooms", "Study Room", "CCTV"],
    emoji: "🏡",
  },
];

// =============================================
// NAVIGATION
// =============================================

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + page).classList.add('active');

  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  const nl = document.getElementById('nl-' + page);
  if (nl) nl.classList.add('active');

  closeMobileMenu();
  window.scrollTo({ top: 0, behavior: 'smooth' });

  if (page === 'colleges') renderColleges(COLLEGES);
  if (page === 'courses')  renderCourses(COURSES);
  if (page === 'housing')  renderHousing(HOUSING);
}

function toggleMenu() {
  const menu = document.getElementById('mobile-nav');
  if (menu) menu.classList.toggle('open');
}

function closeMobileMenu() {
  const menu = document.getElementById('mobile-nav');
  if (menu) menu.classList.remove('open');
}

// =============================================
// DARK MODE
// =============================================

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  const moon = document.querySelector('.icon-moon');
  const sun  = document.querySelector('.icon-sun');
  if (isDark) {
    moon.style.display = ''; sun.style.display = 'none';
  } else {
    moon.style.display = 'none'; sun.style.display = '';
  }
  localStorage.setItem('edunepal-theme', isDark ? 'light' : 'dark');
}

// Load saved theme
(function() {
  const saved = localStorage.getItem('edunepal-theme');
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    const moon = document.querySelector('.icon-moon');
    const sun  = document.querySelector('.icon-sun');
    if (moon) moon.style.display = 'none';
    if (sun)  sun.style.display = '';
  }
})();

// =============================================
// HERO SEARCH
// =============================================

function heroSearch(val) { /* live hint could go here */ }

function heroSearchGo() {
  const val = document.getElementById('hero-search').value.toLowerCase().trim();
  if (!val) return;

  const colMatch = COLLEGES.filter(c =>
    c.name.toLowerCase().includes(val) || c.city.toLowerCase().includes(val) || c.type.toLowerCase().includes(val)
  );
  const courseMatch = COURSES.filter(c =>
    c.name.toLowerCase().includes(val) || c.short.toLowerCase().includes(val) || c.cat.toLowerCase().includes(val)
  );

  if (colMatch.length) {
    showPage('colleges');
    setTimeout(() => { document.getElementById('college-search').value = val; filterColleges(); }, 100);
  } else if (courseMatch.length) {
    showPage('courses');
    setTimeout(() => { document.getElementById('course-search').value = val; filterCourses(); }, 100);
  } else {
    showPage('colleges');
    setTimeout(() => { document.getElementById('college-search').value = val; filterColleges(); }, 100);
  }
}

// =============================================
// CITY QUICK FILTER (from home)
// =============================================

function filterCollegesByCity(city) {
  showPage('colleges');
  setTimeout(() => {
    const sel = document.getElementById('college-city');
    if (sel) { sel.value = city; filterColleges(); }
  }, 100);
}

// =============================================
// RENDER COLLEGES
// =============================================

function renderColleges(list) {
  const wrap = document.getElementById('college-list');
  if (!wrap) return;

  if (!list.length) {
    wrap.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>No colleges found</h3><p>Try a different search term or filter.</p></div>`;
    return;
  }

  wrap.innerHTML = list.map(c => `
    <div class="cl-card">
      <div class="cl-image-placeholder" style="background:${c.bgColor}">
        <span style="font-size:3rem">${c.emoji}</span>
        <span class="cl-badge">${c.type}</span>
        <span class="cl-badge2">⭐ ${c.rating}</span>
      </div>
      <div class="cl-body">
        <div class="cl-top">
          <h3>${c.name}</h3>
          <span class="cl-rating">⭐ ${c.rating}</span>
        </div>
        <div class="cl-location">📍 ${c.location}</div>
        <p class="cl-desc">${c.desc}</p>
        <div class="cl-meta-row">
          <div class="cl-meta-item">
            <span class="cl-meta-label">Affiliation</span>
            <span class="cl-meta-value">${c.affiliation.length > 20 ? c.affiliation.slice(0,18)+'…' : c.affiliation}</span>
          </div>
          <div class="cl-meta-item">
            <span class="cl-meta-label">Est.</span>
            <span class="cl-meta-value">${c.estd}</span>
          </div>
          <div class="cl-meta-item">
            <span class="cl-meta-label">City</span>
            <span class="cl-meta-value">${c.city}</span>
          </div>
          <div class="cl-meta-item">
            <span class="cl-meta-label">Fees</span>
            <span class="cl-meta-value">${c.fee}</span>
          </div>
        </div>
        <div class="cl-programs">${c.programs.map(p => `<span class="prog-tag">${p}</span>`).join('')}</div>
        <div class="cl-footer">
          <span class="cl-est">Est. ${c.estd} · ${c.affiliation.length > 25 ? c.affiliation.slice(0,23)+'…' : c.affiliation}</span>
          <button class="cl-btn">View Details</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterColleges() {
  const q    = (document.getElementById('college-search')?.value || '').toLowerCase();
  const city = document.getElementById('college-city')?.value || 'all';
  const type = document.getElementById('college-type')?.value || 'all';

  let result = COLLEGES.filter(c => {
    const matchQ    = !q || c.name.toLowerCase().includes(q) || c.location.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    const matchCity = city === 'all' || c.city === city;
    const matchType = type === 'all' || c.type === type;
    return matchQ && matchCity && matchType;
  });
  renderColleges(result);
}

// =============================================
// RENDER COURSES
// =============================================

function renderCourses(list) {
  const wrap = document.getElementById('course-list');
  if (!wrap) return;

  if (!list.length) {
    wrap.innerHTML = `<div class="empty-state"><div class="empty-icon">📖</div><h3>No courses found</h3><p>Try a different search or filter.</p></div>`;
    return;
  }

  const catClass = { IT:'cat-it', Engineering:'cat-engineering', Medical:'cat-medical', Management:'cat-management', Law:'cat-law', Hospitality:'cat-hospitality', Science:'cat-science' };
  const levelClass = { Bachelor:'badge-bachelor', Master:'badge-master', Diploma:'badge-diploma' };

  wrap.innerHTML = list.map(c => `
    <div class="cc-card">
      <div class="cc-top">
        <div class="cc-title">
          <h3>${c.name}</h3>
          <div class="cc-sub">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/></svg>
            ${c.college}
          </div>
        </div>
        <span class="cc-level-badge ${levelClass[c.level] || 'badge-bachelor'}">${c.level}</span>
      </div>
      <p class="cc-desc">${c.desc}</p>
      <div class="cc-meta">
        <div class="cc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Duration: <strong>${c.duration}</strong>
        </div>
        <div class="cc-meta-item">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
          Fees: <strong>${c.fee}</strong>
        </div>
      </div>
      <div style="display:flex;gap:8px;align-items:center;flex-wrap:wrap;">
        <span class="cc-cat-tag ${catClass[c.cat] || ''}">${c.cat}</span>
        <span style="font-size:0.76rem;color:var(--text-3)">Careers: ${c.careers.join(' · ')}</span>
      </div>
    </div>
  `).join('');
}

function filterCourses() {
  const q     = (document.getElementById('course-search')?.value || '').toLowerCase();
  const level = document.getElementById('course-level')?.value || 'all';
  const cat   = document.getElementById('course-cat')?.value || 'all';

  let result = COURSES.filter(c => {
    const matchQ     = !q || c.name.toLowerCase().includes(q) || c.short.toLowerCase().includes(q) || c.college.toLowerCase().includes(q) || c.desc.toLowerCase().includes(q);
    const matchLevel = level === 'all' || c.level === level;
    const matchCat   = cat === 'all' || c.cat === cat;
    return matchQ && matchLevel && matchCat;
  });
  renderCourses(result);
}

// =============================================
// RENDER HOUSING
// =============================================

function renderHousing(list) {
  const wrap = document.getElementById('housing-list');
  if (!wrap) return;

  if (!list.length) {
    wrap.innerHTML = `<div class="empty-state"><div class="empty-icon">🏠</div><h3>No housing found</h3><p>Try adjusting your filters.</p></div>`;
    return;
  }

  const typeClass = { Hostel:'type-hostel', PG:'type-pg', Rental:'type-rental' };
  const availClass = { Available:'avail-yes', Limited:'avail-ltd', Full:'avail-no' };

  wrap.innerHTML = list.map(h => `
    <div class="hc-card">
      <div class="hc-image-placeholder" style="background:linear-gradient(135deg,#1e3a5f,#2d6a9f)">
        <span>${h.emoji}</span>
        <span class="hc-type-badge ${typeClass[h.type] || ''}">${h.type}</span>
      </div>
      <div class="hc-body">
        <div class="hc-top">
          <h3>${h.name}</h3>
          <div class="hc-price">NPR ${h.price.toLocaleString()}<span>/mo</span></div>
        </div>
        <div class="hc-near">🏫 Near: ${h.near}</div>
        <div class="hc-location">📍 ${h.location}</div>
        <div class="hc-meta-row">
          <div class="hc-meta-item">
            <span>Monthly Rent</span>
            <span>NPR ${h.price.toLocaleString()}</span>
          </div>
          <div class="hc-meta-item">
            <span>Capacity</span>
            <span>${h.capacity} students</span>
          </div>
        </div>
        <div class="hc-amenities">${h.amenities.map(a => `<span class="amenity-tag">✓ ${a}</span>`).join('')}</div>
        <div class="hc-footer">
          <div style="display:flex;gap:6px;align-items:center;flex-wrap:wrap">
            <span class="avail-badge ${availClass[h.available] || 'avail-yes'}">${h.available}</span>
            <span class="gender-badge">${h.gender}</span>
          </div>
          <button class="hc-contact-btn">Contact</button>
        </div>
      </div>
    </div>
  `).join('');
}

function filterHousing() {
  const q      = (document.getElementById('housing-search')?.value || '').toLowerCase();
  const type   = document.getElementById('housing-type')?.value || 'all';
  const gender = document.getElementById('housing-gender')?.value || 'all';

  let result = HOUSING.filter(h => {
    const matchQ      = !q || h.name.toLowerCase().includes(q) || h.location.toLowerCase().includes(q) || h.near.toLowerCase().includes(q) || h.city.toLowerCase().includes(q);
    const matchType   = type === 'all' || h.type === type;
    const matchGender = gender === 'all' || h.gender === gender;
    return matchQ && matchType && matchGender;
  });
  renderHousing(result);
}

// =============================================
// INJECT MOBILE NAV
// =============================================

(function injectMobileNav() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  const mobileNav = document.createElement('div');
  mobileNav.className = 'mobile-nav';
  mobileNav.id = 'mobile-nav';
  mobileNav.innerHTML = `
    <ul>
      <li><a href="#" onclick="showPage('home')">🏠 Home</a></li>
      <li><a href="#" onclick="showPage('colleges')">🏫 Colleges</a></li>
      <li><a href="#" onclick="showPage('courses')">📖 Courses</a></li>
      <li><a href="#" onclick="showPage('housing')">🏠 Housing</a></li>
    </ul>
  `;
  nav.insertAdjacentElement('afterend', mobileNav);
})();

// =============================================
// INIT
// =============================================

document.addEventListener('DOMContentLoaded', () => {
  showPage('home');
});
