export interface EducationMoment {
  id: string;
  category: "legacy" | "taken" | "economic" | "confidence" | "winning";
  title: string;
  hook: string;
  body: string[];
  africans_today: string;
  source_note: string;
  relevant_to?: string[]; // page slugs where this is most relevant
}

export const EDUCATION_MOMENTS: EducationMoment[] = [

  // ============================================================
  // LEGACY — Who Africans Are and Where They Come From
  // ============================================================
  {
    id: "imhotep-first-physician",
    category: "legacy",
    title: "The World's First Doctor Was African",
    hook: "Hippocrates is called the Father of Medicine. He lived 2,000 years after an African man already wrote the world's first medical texts.",
    body: [
      "Imhotep was born in ancient Egypt around 2650 BCE. He was an architect, a mathematician, a poet, and the first physician in recorded human history. He wrote medical texts describing the diagnosis and treatment of over 200 diseases — including tuberculosis, appendicitis, and fractures — more than 2,000 years before Hippocrates was born.",
      "He designed the Step Pyramid of Djoser at Saqqara — still standing today after 4,600 years. He was so revered that after his death, he was deified. Both Egypt and Greece worshipped him as a god of healing and wisdom.",
      "European colonizers and early historians systematically erased the African identity of ancient Egypt — claiming Egyptians were not Black Africans. This is historically false. Ancient Egyptian art, skeletal analysis, and DNA evidence confirm the African origin of this civilization. The Egyptians were African people, and Imhotep was one of the greatest minds in human history.",
      "When you apply for a health, education, or development program on this platform — you are inheriting a tradition of African brilliance that predates European civilization by millennia.",
    ],
    africans_today: "Dr. Catherine Hamlin (Ethiopia-based) co-founded the Addis Ababa Fistula Hospital, treating thousands of women. Dr. Tom Kariuki leads African science at the African Academy of Sciences. Nigeria produces more doctors per year than most European countries — many of whom are building private hospitals and health startups across Africa.",
    source_note: "Imhotep's medical papyri are documented in the Edwin Smith Surgical Papyrus (c. 1600 BCE, copies of older texts). His architectural legacy is confirmed by the Saqqara pyramid complex still standing today.",
    relevant_to: ["programs", "path", "matches"],
  },
  {
    id: "mansa-musa-wealth",
    category: "legacy",
    title: "The Richest Person in All of Human History Was African",
    hook: "Elon Musk. Jeff Bezos. Bill Gates. None of them were the richest person in history. That title belongs to an African king.",
    body: [
      "Mansa Musa I ruled the Mali Empire from 1312 to 1337. His empire covered what is now Mali, Senegal, Guinea, Niger, Nigeria, Chad, and Mauritania. It was the largest empire in West African history — and one of the largest in the world.",
      "In 1324, he made a pilgrimage to Mecca. He took 60,000 people with him: soldiers, scholars, heralds, personal servants, and 500 heralds each carrying a staff of gold. He brought 80 camels, each loaded with 300 pounds of gold dust. He gave gold to the poor everywhere he went — so freely, so generously, that he caused hyperinflation in Cairo that lasted 10 years.",
      "Modern economists have tried to estimate his wealth. The consensus is somewhere between $300 billion and $400 billion in today's terms — more than any person alive today. The Mali Empire's wealth came from controlling the gold and salt trade routes of West Africa. Mansa Musa understood that controlling the supply chain — not just the raw material — was where the real wealth was.",
      "He came home from Mecca and funded the construction of universities, mosques, and libraries. He turned Timbuktu into one of the world's great centers of learning. He understood: wealth and knowledge together build civilizations.",
    ],
    africans_today: "Aliko Dangote (Nigeria) is currently Africa's wealthiest person — worth approximately $14 billion. He started with a $3,000 loan from his uncle. Nicky Oppenheimer (South Africa) built a diamond empire. Mo Ibrahim sold Celtel for $3.4 billion. These are not exceptions. They are the continuation of a tradition.",
    source_note: "Mansa Musa's journey is documented in Arab historical sources including Ibn Battuta and Ibn Khaldun. His impact on Mediterranean gold prices is recorded in Egyptian and European chronicles.",
    relevant_to: ["matches", "sovereignty", "success"],
  },
  {
    id: "timbuktu-scholars",
    category: "legacy",
    title: "While Europe Was in the Dark Ages, Africa Had a University City",
    hook: "At its peak, Timbuktu had 25,000 students, 180 schools, and 700,000 manuscripts. Europe had nothing comparable.",
    body: [
      "Timbuktu in the 14th and 15th centuries was one of the great intellectual cities in the world. The Sankore University, the Djinguereber Mosque, and the Sidi Yahia Mosque formed the University of Timbuktu — attracting scholars from across Africa, Arabia, and Europe.",
      "The manuscripts produced and collected there covered mathematics, astronomy, medicine, Islamic law, history, and literature. An estimated 700,000 to 1 million manuscripts survive today — many still in private libraries across Mali, some dating back to the 12th century. They describe surgical techniques, astronomical discoveries, and political philosophy.",
      "One manuscript describes a procedure for treating cataracts — centuries before European medicine recognized the condition. Others contain mathematical concepts that appear, without attribution, in European mathematical texts written centuries later. African scholars were solving problems that Europeans had not yet identified.",
      "When the French colonized Mali in the late 19th century, they deliberately suppressed African scholarly tradition. Children were taught in French, using French curriculum, with no mention of what their ancestors had built. An entire generation was made to believe that intellectual life was something imported from Europe.",
    ],
    africans_today: "The Timbuktu Manuscripts Project is digitizing the surviving manuscripts. The African Mathematics Institute at the University of Cape Town is recovering African mathematical traditions. Patrick Awuah Jr. left Microsoft to build Ashesi University in Ghana. Africa has 50+ million university students — the fastest-growing student population in the world.",
    source_note: "The University of Timbuktu is documented in Arab historical sources and in the personal chronicles of 16th-century Timbuktu scholar Ahmad Baba. The manuscripts are preserved by UNESCO and private custodians.",
    relevant_to: ["programs", "build", "path"],
  },
  {
    id: "haya-steel",
    category: "legacy",
    title: "Africans Smelted Steel 1,500 Years Before Europe",
    hook: "The Industrial Revolution ran on steel. For generations, this was called a European achievement. It wasn't.",
    body: [
      "The Haya people of what is now Tanzania developed a method for producing carbon steel more than 1,500 years before Europeans developed the same process during the Industrial Revolution. In 1978, archaeologist Peter Schmidt, working with Haya elders, excavated ancient smelting furnaces and demonstrated that the Haya process was technically superior to the European methods of the same era.",
      "The Haya furnace used a preheating system that raised temperatures to 1,400 degrees Celsius — far beyond what was thought possible in pre-industrial societies. The resulting steel was high-carbon, extremely hard, and functionally equivalent to modern steel. This was not primitive metalwork. This was advanced metallurgy.",
      "In Nigeria, the Yoruba people of Ile-Ife produced bronze castings in the 12th through 14th centuries that are still considered among the most technically perfect bronze works ever made. When British troops looted Benin City in 1897 and sent the bronzes to Europe, European scholars literally refused to believe Africans had made them. They invented theories about Phoenician craftsmen. This was racism, not archaeology. The African origin is now conclusively documented.",
      "3,000 Benin Bronze artworks were stolen in 1897 and are currently held in museums in London, Berlin, Vienna, and New York. Nigeria has been demanding them back for decades. Some are beginning to return.",
    ],
    africans_today: "Sandstorm Kenya crafts premium leather and metal goods exported globally. Vlisco works with West African textile artisans. The African Leather and Leather Products Institute (Ethiopia) is building regional manufacturing capacity. Kokou Dowoui (Togo) makes contemporary African bronze sculpture sold in Europe. The craft is alive.",
    source_note: "The Haya steel discovery is published in Scientific American (1978) by Peter Schmidt and D.H. Avery. The Benin Bronzes are documented at the British Museum and confirmed as Benin kingdom origin by all modern scholarship.",
    relevant_to: ["sovereignty", "build", "programs"],
  },
  {
    id: "swahili-coast-trade",
    category: "legacy",
    title: "African Merchants Controlled Indian Ocean Trade for 1,000 Years",
    hook: "Vasco da Gama is taught as the man who 'opened' the route to Asia. He arrived and found African traders who had been doing it for centuries.",
    body: [
      "The Swahili Coast — stretching from Somalia to Mozambique — was home to a network of African city-states that dominated Indian Ocean trade from the 8th to the 16th century. Kilwa, Mombasa, Malindi, Sofala, and Zanzibar were sophisticated urban centers with paved streets, multi-story stone buildings, and trading networks that reached China, India, Arabia, and Southeast Asia.",
      "These were not simple fishing villages. Kilwa was one of the wealthiest cities in the world in the 14th century — described by Ibn Battuta as 'one of the most beautiful and best-constructed towns in the world.' The city minted its own currency. It taxed trade routes. It built palaces and mosques that still partially stand today.",
      "African merchants traded gold, ivory, iron, and enslaved people. They imported porcelain from China (Chinese ceramics are found in archaeological sites across East Africa), glassware from India, and textiles from Arabia. When the Chinese admiral Zheng He sailed to East Africa in 1415, he was not discovering it — he was continuing an established trading relationship.",
      "When the Portuguese arrived in 1498, Vasco da Gama had to hire an East African navigator, Ahmad ibn Majid, to guide him to India. The knowledge of the route already existed. It was African knowledge that enabled the Portuguese 'discovery.'",
    ],
    africans_today: "Tanzania is East Africa's fastest-growing economy, with Dar es Salaam reclaiming its role as a major port city. Mombasa Bulk Terminal (Kenya) is a multi-billion dollar port expansion. Ethiopian Airlines is Africa's most profitable and largest airline, connecting the continent to Asia and Europe. The Indian Ocean trade is back — and Africans are building their position in it.",
    source_note: "Ibn Battuta's account of Kilwa (1331) is preserved in the Rihla. Chinese contact with East Africa is documented in Ming Dynasty records and confirmed by porcelain found in archaeological digs from Somalia to Mozambique.",
    relevant_to: ["procurement", "afcfta", "feed"],
  },
  {
    id: "dahomey-amazons",
    category: "legacy",
    title: "The Most Feared Army in West Africa Was All Women",
    hook: "The Agojie of Dahomey were the most elite military force in 19th-century West Africa. They were entirely female.",
    body: [
      "The Kingdom of Dahomey (in what is now Benin) maintained an all-female military force called the Agojie — known to Europeans as the 'Dahomey Amazons.' At peak strength in the late 19th century, the Agojie numbered between 4,000 and 6,000 soldiers and made up a significant portion of Dahomey's total military force.",
      "They were not a ceremonial unit. They were the kingdom's most effective fighters — chosen for exceptional strength, endurance, and discipline. They underwent brutal training. They were the last line of the king's personal defense. European accounts from multiple sources describe them as the most disciplined and formidable soldiers they encountered in West Africa.",
      "When France invaded Dahomey in 1892, the Agojie led the military resistance. They inflicted significant casualties on the better-armed French forces before being overwhelmed. The last known surviving Agojie, Nawi, died in 1979 at over 100 years old.",
      "For centuries, the idea of powerful African women leaders was suppressed from mainstream African education. African women had always been warriors, queens, and empire builders. Queen Nzinga of Ndongo (Angola) fought Portuguese colonizers for decades. Yaa Asantewaa of Ghana led the Ashanti war against British rule in 1900. These are not exceptions — this is the pattern.",
    ],
    africans_today: "Rwanda has the highest percentage of women in parliament in the world (61%). Ngozi Okonjo-Iweala leads the World Trade Organization. Amina Mohammed is UN Deputy Secretary-General. Vera Songwe leads the UN Economic Commission for Africa. African women are not waiting for permission. They never did.",
    source_note: "The Agojie are documented in French military accounts, British colonial records, and oral histories of Benin. Edna G. Bay's 'Wives of the Leopard' (1998) is the definitive scholarly study.",
    relevant_to: ["matches", "programs", "path"],
  },
  {
    id: "african-writing-systems",
    category: "legacy",
    title: "Africa Has More Writing Systems Than Any Other Continent",
    hook: "You were taught that writing was invented by Sumerians. Africa had at least 12 independent writing systems — some older than Sumeria.",
    body: [
      "Egyptian hieroglyphics are one of the oldest writing systems in human history, dating to at least 3200 BCE — as old as Sumerian cuneiform and possibly older. But hieroglyphics are not Africa's only writing system. Africa developed more independent writing systems than any other continent.",
      "Ge'ez is the ancient script of Ethiopia, still used today for Amharic, Tigrinya, and other Ethiopian languages — making it one of the only ancient writing systems still in active daily use. It is at least 2,500 years old. Nsibidi is a graphic writing system from southeastern Nigeria, used by the Ejagham and neighboring peoples — its origin may predate contact with Arabic script. Tifinagh is the script of the Tuareg people of North and West Africa, still used across the Sahara. The Vai syllabary was independently invented in Liberia in the 19th century by a man named Momolu Duwalu Bukele, who had never been taught to read.",
      "When European colonizers arrived across Africa, they systematically replaced indigenous writing systems with European scripts. Children were punished for speaking their own languages in colonial schools. An entire intellectual infrastructure — developed over thousands of years — was deliberately erased within two or three generations.",
      "This erasure was strategic. A people who cannot read their own history cannot defend their identity. Colonial education was designed to create workers for European enterprises, not leaders for African ones.",
    ],
    africans_today: "Chimamanda Ngozi Adichie's books are published in 30+ languages and taught in universities worldwide. Ngugi wa Thiong'o writes in Kikuyu. Boubacar Boris Diop writes in Wolof. N'Ko script (West Africa) is experiencing a revival. African-language media companies are growing. The writing is coming back.",
    source_note: "Ge'ez script origin is documented in Ethiopian and Eritrean inscriptions dated to the 5th century BCE. Nsibidi's antiquity is discussed in Macgregor (1909) and documented in Igbo, Efik, and Ejagham oral traditions.",
    relevant_to: ["sovereignty", "build", "feed"],
  },
  {
    id: "great-zimbabwe-builders",
    category: "legacy",
    title: "Africans Built a City of 18,000 People With No Mortar",
    hook: "When British explorers first saw Great Zimbabwe in the 19th century, they refused to believe Africans built it. They invented fake civilizations to explain it. They were wrong.",
    body: [
      "Great Zimbabwe was built between the 11th and 15th centuries by the ancestors of the modern Shona people. At its peak, it housed approximately 18,000 people and was the capital of a kingdom that controlled gold trade routes stretching from the interior of Africa to the Swahili Coast — and from there, to Arabia, India, and China.",
      "The walls of Great Zimbabwe are made from granite blocks fitted together with extraordinary precision — without mortar, without concrete, without any binding material. The largest enclosure wall is 250 meters long and 5 meters thick. It has survived 600+ years of weather, earthquakes, and time. The craftsmanship required to cut and stack stones to that tolerance, at that scale, without modern tools, is extraordinary.",
      "When European archaeologist James Theodore Bent first excavated the site in 1891, he concluded it was built by 'either Phoenicians or Arabs' — because he could not accept that Africans had built something of such sophistication. Subsequent archaeologists who suggested African origin were fired or marginalized by the Rhodesian government, which made it literally illegal to publish findings attributing Great Zimbabwe to African builders. The suppression was political and deliberate.",
      "Great Zimbabwe is today a UNESCO World Heritage Site, its African origin confirmed beyond dispute. The Shona people who built it are the ancestors of modern Zimbabweans. When you look at it, you are looking at your architectural heritage.",
    ],
    africans_today: "Kigali, Rwanda is rated one of the world's cleanest and most livable cities — designed and built under African leadership. Eko Atlantic City (Lagos) is a 10 square kilometer city being built from reclaimed ocean. Konza Technopolis (Kenya) is a planned smart city. Africans are building cities now, just as they always have.",
    source_note: "Great Zimbabwe's African origin is confirmed by radiocarbon dating, linguistic analysis, and all modern archaeological scholarship. The political suppression of this finding in Rhodesia is documented in Ucko (1994) and Martin Hall (1984).",
    relevant_to: ["sovereignty", "build", "path"],
  },
  {
    id: "nubian-kingdom",
    category: "legacy",
    title: "Africans Conquered Egypt and Ruled the Ancient World",
    hook: "Everyone knows Egypt ruled. Almost nobody knows that Africa conquered Egypt. The Nubian pharaohs ruled one of the largest empires in ancient history.",
    body: [
      "The Kingdom of Kush was centered in what is now Sudan — immediately south of Egypt. The Kushites developed their own pyramid-building tradition (Sudanese pyramids are steeper and more numerous than Egyptian ones — over 200 still stand), their own writing system, and their own sophisticated culture.",
      "Around 750 BCE, the Kushite king Piye conquered all of Egypt. His successors — the Kushite 25th Dynasty — ruled a combined Nile empire stretching from present-day Sudan to the Mediterranean coast. They are referred to in the Bible as the Ethiopian pharaohs. They restored older Egyptian traditions that had been neglected, commissioned extensive building projects, and are credited with an Egyptian cultural renaissance.",
      "This empire — one of the largest in the ancient world — was African. Not partially African. Not Egyptian-influenced African. The pharaohs were Kushite people from what is now Sudan, who conquered Egypt and ruled it for nearly a century.",
      "When you learn about ancient history in African schools, this is rarely taught. The Egyptian section focuses on mummies and mythology. The Kushite conquest — which is far more recent and far more documented — is almost never mentioned. Ask yourself: why would they teach you about the people who built civilization, but not the people who conquered it?",
    ],
    africans_today: "Sudan, despite decades of conflict, has more pyramids than Egypt. Archaeologists from Sudan's National Corporation for Antiquities are leading their own excavations. The African Union, headquartered in Addis Ababa, is an attempt to rebuild pan-African political unity of the kind the ancient Nubian empires had. It is imperfect — but it is African leadership, on African soil, for African people.",
    source_note: "The 25th Dynasty is documented in Egyptian records, Biblical text (Kings 19:9, Isaiah 37:9), and confirmed by Assyrian accounts. The Battle of Memphis (c. 728 BCE) is the most precisely dated event in ancient African history.",
    relevant_to: ["sovereignty", "path", "success"],
  },

  // ============================================================
  // WHAT WAS TAKEN — Colonial Economic History
  // ============================================================
  {
    id: "berlin-conference",
    category: "taken",
    title: "14 Countries Carved Up a Continent in 77 Days. No African Was in the Room.",
    hook: "In 1884, European powers met in Berlin to divide Africa. The meeting lasted 77 days. Not one African leader was invited.",
    body: [
      "The Berlin Conference of 1884–1885 was organized by German Chancellor Otto von Bismarck. 14 European nations attended: Germany, Austria-Hungary, Belgium, Denmark, France, the United Kingdom, Italy, the Netherlands, Portugal, Russia, Spain, Sweden-Norway, the Ottoman Empire, and the United States. They drew lines on a map and declared ownership of the entire African continent.",
      "Before the conference, Europeans controlled approximately 10% of Africa. By 1914 — less than 30 years later — they controlled 90%. The conference established the legal framework for colonization: any European power that 'effectively occupied' African territory could claim it. 'Effective occupation' meant planting a flag and establishing some form of administrative presence.",
      "The borders drawn at the Berlin Conference cut across ethnic groups, language communities, trade routes, and kingdoms that had existed for centuries. They created 'countries' that had never existed and divided peoples who had lived together for millennia. These borders still largely exist today. Almost every African conflict since independence has had roots in artificially created post-Berlin boundaries.",
      "The economic impact was immediate and deliberate. African agriculture was restructured for export crops (cocoa, cotton, rubber, palm oil) rather than food security. African mineral wealth was extracted for European industrialization. African labor was controlled through taxation systems designed to force participation in European economic structures. The purpose was not development — it was extraction.",
    ],
    africans_today: "The African Continental Free Trade Area (AfCFTA), signed in 2018 by 54 African nations, is the most significant attempt to undo the economic balkanization of the Berlin Conference. It creates the world's largest free trade area by number of countries. Pan-African economists like Carlos Lopes and Vera Songwe are rebuilding Africa's economic architecture. The project is unfinished — but it is African-led.",
    source_note: "The Berlin Conference is documented in the General Act of the Berlin Conference on West Africa (1885). Its economic consequences are analyzed in Walter Rodney's 'How Europe Underdeveloped Africa' (1972) and Basil Davidson's work.",
    relevant_to: ["afcfta", "sovereignty", "feed"],
  },
  {
    id: "cfa-franc",
    category: "taken",
    title: "14 African Countries Still Use a Currency Controlled by France",
    hook: "When you earn money in Senegal, Côte d'Ivoire, Cameroon, or 11 other African countries, 50% of your foreign exchange reserves are deposited at the Banque de France. By law.",
    body: [
      "The CFA franc (Franc of the Financial Community of Africa) was created in 1945 by France for its African colonies. When those colonies gained independence in the 1960s, they were pressured to remain in the CFA zone as a condition of French political and economic support. 14 countries still use it today.",
      "The CFA franc has a fixed exchange rate with the euro (formerly the French franc). This means the Banque de France — the French central bank — effectively sets monetary policy for 200 million Africans. The 50% foreign exchange reserve requirement is legally enforced: member countries must deposit half their foreign currency reserves in Paris. They earn interest on this — but France controls access.",
      "The system was designed by France's Minister of Finance Jacques Foccart, who called it 'France's insurance policy in Africa.' It gives France guaranteed access to African markets, guaranteed stability for French businesses operating in Africa, and significant political leverage over African governments. When Burkina Faso's president Thomas Sankara proposed leaving the CFA zone in 1987, he was assassinated months later. This may be coincidence. It may not be.",
      "The CFA franc is not inherently evil — a stable currency has real benefits. But a currency controlled by a former colonial power, with reserves kept in the former colonial capital, is not economic sovereignty. Togo, Senegal, Cameroon, and 11 others deserve monetary policy designed for African economies, by African institutions.",
    ],
    africans_today: "ECO — the proposed West African currency — has been in negotiation since 2000. Guinea left the CFA zone at independence (1958). Zimbabwe, while struggling, maintains monetary independence. The movement to leave the CFA zone is growing: Mali and Burkina Faso have both recently expelled French military and taken more assertive positions on monetary sovereignty. The debate is alive.",
    source_note: "The CFA franc structure is documented in the 1945 decree and subsequent treaties. Ndongo Samba Sylla and Joe Amoako-Tuffour's 'The CFA Franc Zone' provides the economic analysis. The 50% reserve requirement is in the operating accounts agreement between member states and the Banque de France.",
    relevant_to: ["capital-stack", "bankability", "sovereignty"],
  },
  {
    id: "structural-adjustment",
    category: "taken",
    title: "The IMF and World Bank Told Africa to Stop Feeding Itself",
    hook: "In the 1980s and 1990s, the IMF imposed 'structural adjustment programs' on African governments. What they actually adjusted was Africa's ability to develop independently.",
    body: [
      "From the 1980s onward, African governments facing debt crises turned to the International Monetary Fund and World Bank for loans. These institutions provided loans on condition of 'structural adjustment' — policy changes the borrowing government had to implement. The conditions included: privatizing state enterprises, cutting government spending (especially on health and education), eliminating import tariffs, devaluing currencies, and opening markets to foreign competition.",
      "The theory was that free markets would attract investment and generate growth. The reality was different. African manufacturers who had been developing behind protective tariffs were suddenly competing against subsidized European and American goods. State agricultural extension services that had supported small farmers were cut. Health and education spending was reduced. Infant mortality increased in several countries during adjustment periods.",
      "These were not random effects. They were predictable consequences of imposing free-market ideology on economies that were not yet mature enough to survive it. South Korea and Taiwan — which developed successfully in the same period — were allowed to protect their industries during development and only opened their markets after their own companies were strong enough to compete.",
      "The African debt crisis itself had its own causes — much of it related to predatory lending by Western banks during the 1970s oil price boom. When interest rates rose in 1979, African debt became unpayable. The countries that borrowed were often led by dictators supported by Western governments for Cold War reasons. Ordinary Africans are still paying the bill.",
    ],
    africans_today: "Ethiopia resisted IMF conditionality for decades and ran one of Africa's fastest-growing economies. Rwanda took IMF money on its own terms and rebuilt after genocide into one of Africa's most functional states. African economists like Dambisa Moyo ('Dead Aid'), Celestin Monga, and Justin Yifu Lin are building new African economic frameworks that reject structural adjustment doctrine.",
    source_note: "The effects of structural adjustment are documented in UN Economic Commission for Africa reports (1989, 1990) and in Joseph Stiglitz's 'Globalization and Its Discontents' (2002). Country-level impacts are studied in Thandika Mkandawire and Charles Soludo's 'Our Continent, Our Future' (1999).",
    relevant_to: ["capital-stack", "programs", "sovereignty"],
  },
  {
    id: "congo-cobalt",
    category: "taken",
    title: "Your Phone Battery Was Made From African Minerals. Who Was Paid?",
    hook: "The Democratic Republic of Congo has 70% of the world's cobalt. Cobalt powers every lithium-ion battery in every phone, laptop, and electric car. Congolese miners earn $2–$5 a day.",
    body: [
      "The DRC holds approximately 70% of the world's proven cobalt reserves. Cobalt is essential for lithium-ion batteries — the technology that powers iPhones, Teslas, and everything in between. The global battery market is worth over $100 billion and growing rapidly. The DRC earns a small fraction of this value.",
      "The majority of DRC's cobalt is mined by Chinese companies (primarily Congo DongFang International Mining, a subsidiary of Huayou Cobalt) and multinational giants like Glencore (Switzerland). The minerals are shipped to China for processing, then to Asian electronics manufacturers, then to Western tech brands. By the time an iPhone leaves a factory, the cobalt inside it has crossed six borders and passed through at least four corporate supply chains. The DRC has been compensated for the raw material — and nothing else.",
      "Artisanal miners — individual Congolese people who dig with their hands — mine approximately 15–30% of DRC's cobalt. They earn between $1 and $5 per day. Some are children. These same batteries, in an iPhone 15, cost $1,299 at an Apple Store. The retailer margin on an iPhone is approximately $400–$600 per unit. The Congolese miner who made it possible earned $3.",
      "The solution is not charity. The solution is African processing, African battery manufacturing, and African negotiation leverage. The DRC is beginning to demand more: in 2022, the government banned raw cobalt exports for a period and demanded higher royalties. This is the beginning of economic sovereignty.",
    ],
    africans_today: "Kibali Gold Mine (DRC) is co-owned by a DRC state entity. The Africa Finance Corporation is funding a battery precursor processing plant in Morocco. Rwanda mines coltan and is building downstream processing. The African Development Bank's 'Mining Vision' is a framework for African value capture from mineral resources. This fight is happening now.",
    source_note: "DRC cobalt reserve figures from the USGS Mineral Commodity Summaries. Battery supply chain structure documented by Benchmark Mineral Intelligence. Artisanal miner conditions reported by Amnesty International (2016, 2019) and the London Metal Exchange.",
    relevant_to: ["sovereignty", "programs", "build"],
  },
  {
    id: "benin-bronzes",
    category: "taken",
    title: "3,000 Masterworks Were Stolen From Nigeria in One Day",
    hook: "In 1897, British troops looted Benin City and took everything. 125 years later, most of it is still in Europe.",
    body: [
      "The Benin Kingdom (in what is now Edo State, Nigeria) was one of the most sophisticated states in pre-colonial Africa — with a complex political system, extensive trade networks, and an artistic tradition that produced some of the finest metalwork in human history. The Benin Bronzes — plaques, sculptures, heads, and ceremonial objects — were cast using the lost-wax technique, a process requiring extraordinary technical skill.",
      "In February 1897, a British 'punitive expedition' invaded Benin City in response to the killing of a British trade delegation (which had been advancing against the Oba's explicit instructions to wait). The city was burned. The royal palace was looted. Approximately 3,000 bronze, ivory, and coral works were taken — the largest cultural looting in African history. British officers sold many works to European museums and private collectors to finance the expedition.",
      "The works are now spread across institutions in 26 countries: the British Museum (700+ pieces), the Ethnologisches Museum Berlin (500+ pieces), the Pitt Rivers Museum Oxford, the Weltmuseum Vienna, and dozens more. Nigeria has been formally requesting their return since 1960.",
      "In 2021–2022, several institutions began returning works: Germany committed to returning pieces, the Smithsonian followed, then Cambridge, then others. The British Museum — holding the largest collection — has refused a full return, offering instead long-term 'loans.' This is the difference between restitution and continued possession.",
    ],
    africans_today: "The Benin Dialogue Group is a consortium of Benin Kingdom representatives and museum curators negotiating returns. Nigeria built the Edo Museum of West African Art to house returning bronzes. Theaster Gates, a Black American artist, is creating the Stony Island Arts Bank as a model for African American institutional preservation. Nora Chipaumire (Zimbabwe) performs African heritage through contemporary dance internationally. Culture is being reclaimed.",
    source_note: "The 1897 expedition is documented in British colonial records and Roth (1903). Museum holdings are catalogued by the Benin Dialogue Group. Return progress tracked by the Resolve Project.",
    relevant_to: ["sovereignty", "success", "feed"],
  },

  // ============================================================
  // ECONOMIC TRUTH — Understanding Money and Business
  // ============================================================
  {
    id: "procurement-is-power",
    category: "economic",
    title: "The Biggest Business Opportunity in Africa Is Government Contracts",
    hook: "African governments spend over $1 trillion annually on goods and services. Most of it goes to foreign companies. That money is yours to win.",
    body: [
      "Procurement — the purchase of goods and services by government — is the largest single economic activity in every African country. Combined, African governments spend approximately $1 trillion per year. This includes construction, food supply, IT services, healthcare, transport, security, stationery, fuel, and thousands of other categories.",
      "In most African countries, the majority of this spending goes to foreign companies — either directly through international contracts, or through local subsidiaries of foreign companies. When a Nigerian government ministry buys computers, those computers are assembled in China. When a Kenyan county government hires a construction firm, that firm may be Chinese-owned. The money circulates outside the African economy.",
      "This is not inevitable. It is the result of several factors: African businesses not registering on procurement portals, not knowing how to bid, not having the financial documentation to satisfy procurement requirements, and not having working capital to fulfill contracts. Every one of these barriers is solvable.",
      "Aliko Dangote understood this before he built a single factory. His early wealth came from winning government supply contracts for commodities. The government was a customer before the market was. Government contracts are:  stable, repeated, large, and — once you win one — much easier to win again.",
    ],
    africans_today: "Dangote Group grew from government commodity supply contracts. Julius Berger Nigeria has been building government infrastructure since 1965. Tolaram Group (Nigeria) supplies to government institutions. Sundry Foods (Nigeria) won university catering contracts. David K. (Nairobi) won a Sh45M county government tender after building his financial profile through the Hustler Fund. Government money goes to whoever shows up with the paperwork.",
    source_note: "African public procurement values are estimated by the African Development Bank and IMF country reports. The African Public Procurement Network documents reform efforts across 54 countries.",
    relevant_to: ["procurement", "path", "matches"],
  },
  {
    id: "grants-vs-equity",
    category: "economic",
    title: "The Best Money Has No Strings. Not All Money Is Equal.",
    hook: "A $50,000 investor deal can cost you more than a $10,000 grant. Understanding the difference is how you keep your business.",
    body: [
      "There are three types of capital for entrepreneurs: grants (free money, no repayment, no ownership given up), loans (repayable with interest, no ownership given up), and equity (money in exchange for a share of your business). Each has very different implications.",
      "A $10,000 grant requires nothing back. You keep 100% of your company. A $50,000 equity investment that gives an investor 20% means: if your company is worth $1M in five years, that investor is owed $200,000. If it's worth $10M, they're owed $2M. For a 20% stake sold for $50,000. The investor made 40 times their money. You made significantly less than you would have with no investor.",
      "This is not an argument against investors — sometimes equity is the right capital. But it is an argument for sequencing: start with grants and revenue, build business model proof, then if you need capital for growth, bring in investors from a position of strength. Never take equity when a grant is available.",
      "Many African entrepreneurs chase VC funding as a sign of legitimacy, not as a financial decision. This is an imported idea from Silicon Valley where startups need massive upfront capital. Most African businesses — food, fashion, services, construction, agriculture — can be built profitably with grants and revenue before they need investors.",
    ],
    africans_today: "Bethlehem Tilahun Alemu built soleRebels (Ethiopia) to global distribution with zero VC funding. Rebecca Enonchong built AppsTech (Cameroon) as a global Oracle partner with zero VC. Aliko Dangote started with a loan, not equity. Strive Masiyiwa funded Econet with personal savings and a bank loan. The most successful African entrepreneurs of the last 30 years built without giving away control.",
    source_note: "Startup equity dilution mathematics is standard financial modeling. The comparison of African grant programs to VC terms is documented in African Development Bank and Tony Elumelu Foundation program analyses.",
    relevant_to: ["matches", "capital-stack", "programs"],
  },
  {
    id: "afcfta-what-it-means",
    category: "economic",
    title: "54 Countries, 1.3 Billion People, One Free Trade Area. This Is the Biggest Opportunity in the World.",
    hook: "The African Continental Free Trade Area is the largest free trade agreement by number of countries in history. Most African entrepreneurs don't know they can use it today.",
    body: [
      "The AfCFTA came into force in January 2021. It is signed by 54 of Africa's 55 countries (Eritrea has not signed). When fully implemented, it will create a single market of 1.3 billion people with a combined GDP of $3.4 trillion — making it the world's largest free trade area by number of participating countries.",
      "What it means practically: tariffs (import taxes) between African countries will be reduced to zero on 90%+ of goods over time. A Nigerian manufacturer selling to Senegal will eventually pay no import duty. A Kenyan farmer selling to Rwanda will eventually pay no border tax. Intra-African trade, which is only 16% of Africa's total trade today (compared to 69% within Europe and 59% within Asia), can grow dramatically.",
      "Right now — today — specific goods qualify for reduced tariffs. If you know your HS (Harmonized System) code, you can check whether your product qualifies for preferential AfCFTA rates. Your country's trade ministry or export promotion agency can provide an AfCFTA certificate of origin that unlocks these rates at the border.",
      "This is not theoretical. Fatou Baldé, a shea butter exporter from Senegal, stopped paying 18–22% import duties on her shipments to Morocco after getting an AfCFTA certificate of origin. She saved $4,200 in the first year and reinvested it in processing equipment. This is a real program, available right now.",
    ],
    africans_today: "Chido Govera (Zimbabwe) exports mushroom products and teaches women's cooperatives across Africa — the AfCFTA is opening her markets. Twiga Foods (Kenya) is building the intra-African supply chain for fresh produce. The Intra-African Trade Fair connects buyers and sellers across 54 countries annually. The African Export-Import Bank (Afreximbank) is financing intra-African trade deals. This is happening.",
    source_note: "AfCFTA text and tariff schedules are published by the African Union. Current implementation status tracked by the AfCFTA Secretariat in Accra, Ghana. Fatou Baldé's case study is documented in ASEPEX (Senegal Export Promotion Agency) materials.",
    relevant_to: ["afcfta", "procurement", "programs"],
  },
  {
    id: "mobile-money-revolution",
    category: "economic",
    title: "Africa Solved the Banking Problem That the Rest of the World Couldn't",
    hook: "In 2007, a Kenyan team built a mobile payments system that now processes more transactions than Western Union. Africa led the world in fintech before the word existed.",
    body: [
      "M-Pesa launched in Kenya in 2007. It was built by Vodafone and Safaricom for a simple purpose: allow Kenyans without bank accounts to send money via SMS. Within a year, it had more users than traditional banking in Kenya. Today, M-Pesa processes $314 billion in transactions annually — more than the GDP of most African countries.",
      "The innovation was not the technology. The innovation was the insight: that the majority of Africa's population was excluded from formal banking not because they lacked money, but because banks were designed for people with stable incomes, fixed addresses, and existing credit histories. Mobile money built a financial system for how African people actually live.",
      "This innovation is now being exported from Africa to the rest of the world. Vodafone has launched M-Pesa outside Africa. Western technology companies study M-Pesa to understand mobile payments. Africa — for once — is the teacher, not the student.",
      "The mobile money ecosystem created an entirely new financial infrastructure: mobile savings, mobile credit, mobile insurance, mobile merchant payments. Flutterwave, Paystack, PalmPay, and dozens of other African fintech companies are built on top of this infrastructure. The entire African fintech boom grew from one Kenyan idea.",
    ],
    africans_today: "Flutterwave (Nigeria) is valued at $3 billion and processes payments in 34 countries. Paystack (Nigeria) was acquired by Stripe for $200 million. MoMo (MTN) has 52 million active users. Wave (Senegal/Francophone Africa) charges 1% for transfers vs. the standard 3–5%. Kuda Bank (Nigeria) has 7 million customers. African fintech is not catching up to the world — it is ahead of it in mobile-first financial services.",
    source_note: "M-Pesa transaction volumes from Safaricom annual reports. Financial inclusion data from the World Bank Global Findex Database (2021). Flutterwave and Paystack valuations from confirmed funding rounds.",
    relevant_to: ["bankability", "capital-stack", "matches"],
  },
  {
    id: "remittances-vs-aid",
    category: "economic",
    title: "Africans Send More Money to Africa Than All Foreign Aid Combined",
    hook: "Foreign aid to sub-Saharan Africa: $50 billion per year. Remittances from African diaspora to Africa: $95 billion per year. Africans fund Africa. Not the West.",
    body: [
      "In 2022, African diaspora sent approximately $95 billion to Africa in remittances. Official development assistance (foreign aid) to sub-Saharan Africa was approximately $50 billion. Africans in the diaspora — nurses in London, engineers in Houston, entrepreneurs in Paris — individually sending money home to support family are collectively the largest external source of capital to Africa.",
      "This matters for several reasons. First, it disproves the narrative that Africa 'depends on Western aid.' The largest flow of external capital to Africa comes from Africans themselves. Second, remittances are personal money — they go directly to families, bypassing government corruption and donor bureaucracy. Third, they represent a massive, mostly untapped opportunity for investment: most remittances go to consumption (school fees, medical bills, daily expenses). Only a small percentage is invested in productive assets.",
      "The Remittance-to-Ownership concept is simple: if you're sending $200/month home, that's $2,400/year. Over 10 years, that's $24,000 — enough to capitalize a small business, buy property, or fund a family member's training. If structured correctly, these flows can be equity contributions rather than consumption spending.",
      "The cost of sending remittances is also itself a form of extraction. The global average cost to send $200 to Africa is approximately 8.2% — meaning $16 goes to Western Union or MoneyGram every time someone sends $200. This is a tax on African families that generates billions for foreign companies. Wave in West Africa has brought this cost down to 1% and is growing rapidly as a result.",
    ],
    africans_today: "Wave (Senegal) is disrupting remittance costs with 1% fees. LemFi (UK) serves African diaspora in Europe. Chipper Cash (pan-African) has processed billions in remittances. The diaspora Bond concept (Ghana, Nigeria, Ethiopia, Kenya) allows diaspora to invest in infrastructure. Chioma O. restructured her UK remittances as equity in a Lagos cold chain business — turning consumption into ownership.",
    source_note: "Remittance figures from World Bank Remittance Prices Worldwide database and KNOMAD (2022). Foreign aid figures from OECD Development Assistance Committee. Remittance cost data from World Bank.",
    relevant_to: ["remittance", "capital-stack", "matches"],
  },

  // ============================================================
  // CONFIDENCE — The Mindset Shift
  // ============================================================
  {
    id: "young-continent",
    category: "confidence",
    title: "Africa Is the Youngest Continent on Earth. The Future Belongs to It.",
    hook: "Europe's median age is 44. Japan's is 49. Africa's median age is 19. The world is aging. Africa is growing.",
    body: [
      "Africa's median age is approximately 19 years. This means half the population of Africa is under 19 years old. By contrast, Europe's median age is 44, the United States is 38, Japan is 49. These aging populations face declining workforces, pension crises, and shrinking domestic markets.",
      "Africa has the opposite problem: a massive, growing, young population that needs jobs, healthcare, education, and opportunities. This is both a challenge and an extraordinary competitive advantage. By 2050, Africa will have the world's largest working-age population — more than India or China. This is the demographic dividend that drove East Asian economic growth in the late 20th century.",
      "Every sector that serves young people — education, entertainment, fashion, technology, food, housing — will grow faster in Africa than anywhere else on earth over the next 30 years. African entrepreneurs who build for this market will build the largest companies in the world.",
      "When someone tells you Africa has too many challenges, remember: Europe had its demographic crisis. China had it. South Korea had it. America had it. And in each case, the challenge became the engine of growth. Africa is that engine, right now.",
    ],
    africans_today: "Spotify has made Afrobeats a global genre — powered by Nigeria's young population. Flutterwave was built by young Nigerians for young Africans who needed mobile payments. The African gaming industry is growing at 12% annually. TikTok's fastest-growing content creators include significant African representation. Young Africa is already building the culture the world consumes.",
    source_note: "Median age data from UN Population Division World Population Prospects (2022). Demographic dividend projections from McKinsey Global Institute 'Africa at Work' (2012, updated 2022) and African Development Bank.",
    relevant_to: ["build", "matches", "path"],
  },
  {
    id: "solar-potential",
    category: "confidence",
    title: "Africa Receives 40% of the World's Solar Energy. Most of It Goes Unused.",
    hook: "The Sahara Desert receives enough solar energy every 6 hours to power the entire world for a year. This is African land.",
    body: [
      "Sub-Saharan Africa receives the highest solar irradiation of any region on earth. The solar energy hitting the Sahara Desert in one year is estimated at 10 times more than the total energy currently consumed by the entire world. This is not a potential future resource — it exists today, on African soil.",
      "Currently, sub-Saharan Africa has the lowest electricity access rates in the world: approximately 600 million people live without reliable electricity. This is simultaneously a humanitarian crisis and the largest business opportunity in the energy sector. Every household that gets electricity for the first time represents a new consumer: appliances, internet, phone charging, refrigeration.",
      "Solar technology costs have fallen 90% in the last decade. The combination of abundant sunshine, falling technology costs, and 600 million unserved customers creates conditions for extraordinary business growth. Solar companies like M-KOPA (Kenya), Baobab+ (Francophone Africa), and d.light are already serving tens of millions of households.",
      "Africa does not need to go through the same fossil fuel-dependent industrialization path that Europe and America did. It can build the world's first solar-powered continent — not for environmental reasons, but because it is the cheapest and most practical source of power for dispersed African populations.",
    ],
    africans_today: "M-KOPA (Kenya) has connected 3 million homes to solar power using pay-as-you-go mobile payments. Lumos Solar (Nigeria) powers homes and businesses. CrossBoundary Energy is building mini-grids across Africa. Scatec Solar is a major developer with pan-African projects. AMEA Power (UAE-African partnership) is building gigawatts of solar in Egypt, Nigeria, and elsewhere. Energy abundance is coming.",
    source_note: "Solar irradiation data from the International Renewable Energy Agency (IRENA) and NASA Surface Meteorology and Solar Energy dataset. Electricity access rates from IEA/IRENA Tracking SDG7 Report (2023).",
    relevant_to: ["build", "programs", "feed"],
  },
  {
    id: "food-future",
    category: "confidence",
    title: "Africa Has 60% of the World's Uncultivated Arable Land. The World Will Be Fed From Here.",
    hook: "The world needs to produce 70% more food by 2050. The land to do it is in Africa. African farmers will feed the planet.",
    body: [
      "Africa holds approximately 60% of the world's uncultivated arable land — approximately 600 million hectares that could be farmed but currently are not. As the world's population reaches 10 billion by mid-century and climate change reduces agricultural yields in other regions, Africa's agricultural capacity will become the most strategically valuable resource on earth.",
      "African agriculture today is largely subsistence-level — families growing enough to eat, with little surplus for sale. This is not because African farmers are unsophisticated. It is because African farmers historically lacked: access to improved seeds, access to financing, access to markets, cold chain infrastructure, and extension services. Each of these gaps is an entrepreneurial opportunity.",
      "Twiga Foods (Kenya) built a $50M business by solving the connection problem between 17,000 farmers and 125,000 urban food retailers. Hello Tractor (Nigeria) built a marketplace for shared tractor access, allowing small farmers to access mechanization without owning a tractor. Apollo Agriculture (Kenya) uses satellite data and mobile loans to give smallholder farmers access to credit and inputs. Each of these is an African entrepreneur solving an African problem.",
      "The global food security crisis is an African opportunity. Countries that can produce food reliably will have extraordinary geopolitical and economic power in the coming decades. Africa should be — and will be — at the center of that power.",
    ],
    africans_today: "Twiga Foods (Kenya) is valued at $150M. Hello Tractor (Nigeria) has served 500,000 farmers. Apollo Agriculture (Kenya) lent to 200,000+ farmers in 2022. Nuli Juice (Nigeria) is building premium African fruit brands. Yabi Coffee (Rwanda) exports to the US and Europe. Africa's agricultural entrepreneurs are not waiting.",
    source_note: "Arable land data from FAO State of the World's Land and Water Resources. Food production projection from FAO 'How to Feed the World 2050' report. Company-specific data from published funding rounds and annual reports.",
    relevant_to: ["build", "programs", "path"],
  },
  {
    id: "african-languages-power",
    category: "confidence",
    title: "Africa Speaks 2,000 Languages. That Is a Superpower, Not a Problem.",
    hook: "There are approximately 7,000 languages in the world. Africa has roughly 2,000 of them — 30% of human linguistic diversity, on one continent.",
    body: [
      "Africa's linguistic diversity is often presented as a problem: it makes pan-African communication difficult, creates governance challenges, and complicates business. This is the colonial framing. The actual reality is more complex.",
      "The fact that 2,000 languages exist in Africa means 2,000 distinct knowledge systems, 2,000 cultural traditions, 2,000 ways of understanding the world. Linguistic diversity is the reason Africa has such extraordinary cultural output: the music, the art, the literature, the cuisine, the textiles — each language community carries a unique creative tradition. The world buys African culture because it is distinctive. Distinctiveness comes from diversity.",
      "Practically, language diversity creates a massive digital opportunity. Most of Africa's 2,000 languages have no digital resources: no apps, no keyboards, no autocorrect, no content. Building for African languages — translation tools, content platforms, educational resources, voice interfaces — is an enormous unserved market.",
      "The deep knowledge of local languages and culture that African entrepreneurs have is not a disadvantage against global companies — it is their most powerful competitive advantage. No Silicon Valley company understands Hausa, Yoruba, Twi, Amharic, Swahili, Zulu, and Wolof the way a Nigerian, Ghanaian, Ethiopian, or Senegalese entrepreneur does. Build for your community first. The world will follow.",
    ],
    africans_today: "OkayAfrica (Nigeria/US) is the largest English-language African culture platform. Sabi (Nigeria) translated its supply chain platform into local market language. Lelapa AI (South Africa) is building AI in African languages. Masakhane is an open-source community building African language NLP. The Yoruba Wikipedia has 31,000 articles. African language content is being built, now.",
    source_note: "Language count from Ethnologue (2023): 7,168 living languages, of which approximately 2,144 are African. Digital language gap documented in the Alliance for Affordable Internet and the language data poverty research of Masakhane.",
    relevant_to: ["build", "feed", "programs"],
  },

  // ============================================================
  // AFRICANS WINNING TODAY
  // ============================================================
  {
    id: "afrobeats-economy",
    category: "winning",
    title: "Nigerian Music Conquered the World Without Asking Permission",
    hook: "Burna Boy is Grammy-winning. Wizkid sold out Madison Square Garden. Afrobeats is a billion-dollar genre. It was built in Lagos, by Lagosians, for Lagosians — and the world came to them.",
    body: [
      "Afrobeats — the genre that emerged from Lagos in the 2000s and 2010s — is now one of the dominant forces in global popular music. Burna Boy's 'Twice as Tall' won a Grammy. Wizkid featured on Drake's global hit 'One Dance.' Tems is one of the most streamed artists in the world. The genre is taught in universities, studied by music executives, and streamed billions of times monthly.",
      "This was not a Western-led discovery. There was no major label that signed Nigerian artists and brought them to the world. Nigerian artists built their own distribution through YouTube, SoundCloud, and later Spotify and Apple Music. They built their own fan bases through social media. They toured their own diaspora communities in Europe and North America before the mainstream noticed.",
      "The economic value is significant. Afrobeats concerts generate hundreds of millions in ticket revenue. Streaming royalties flow to Nigerian and Ghanaian artists. Brands pay millions for Afrobeats artists to endorse their products. The Nigerian music industry — valued at $64 million in 2020 — is growing at 50%+ annually. Music producers in Lagos charge rates equivalent to New York.",
      "The lesson is not just about music. It is about the pattern: African people building something for African people, becoming the best in the world at it, and having the world come to them. This pattern is available in every sector.",
    ],
    africans_today: "Burna Boy, Wizkid, Tems, Davido, Rema, Asake — all self-built, all global. Empire Distribution, a major US label, now signs Afrobeats artists. Boomplay (African music streaming) has 100 million users. NATIVE Records (Lagos) is a leading independent label. African music is not imitating Western pop — it is producing what the world wants to hear.",
    source_note: "Afrobeats streaming data from Spotify Loud and Clear report (2022). Grammy and award records public. Nigerian music industry valuation from PwC Nigeria Entertainment & Media Outlook.",
    relevant_to: ["build", "success", "feed"],
  },
  {
    id: "rwanda-transformation",
    category: "winning",
    title: "Rwanda Rebuilt From Genocide to One of Africa's Best-Governed Countries in 30 Years",
    hook: "In 1994, Rwanda experienced one of the worst genocides in human history. Today it is ranked one of the world's least corrupt and most business-friendly countries. African leadership did this.",
    body: [
      "The 1994 Rwandan genocide killed approximately 800,000 people in 100 days. The economy was destroyed. Infrastructure was ruined. The social fabric was shattered. By any measure, Rwanda should have taken a generation just to stabilize.",
      "Thirty years later, Rwanda is ranked 38th in the World Bank's Ease of Doing Business index — better than France (32nd), Italy (58th), and most African nations. Business registration takes 2 hours online. Corruption is exceptionally low by regional standards (Rwanda ranks 49th globally on Transparency International's index, higher than Greece, Italy, Brazil, or South Africa). Kigali is clean, planned, and functioning. Healthcare outcomes have improved dramatically.",
      "None of this was done by Western aid organizations or international consultants. It was done by Rwandan leaders — particularly Paul Kagame and his government — making deliberate, consistent policy choices about governance, investment, and development. Rwanda is not a democracy in the Western liberal sense. It is a country with an unusually effective government. The lesson is that African people, given capable leadership and consistent policy, can rebuild and build faster than anyone expects.",
      "Rwanda's Vision 2050 plan is to make Rwanda an upper-middle-income country by 2035. Ambitious. Possibly achievable. Built by Rwandans.",
    ],
    africans_today: "Gakondo (Rwanda) is a fashion brand selling globally. Inyange Industries (Rwanda) produces dairy, juice, and water locally. Bank of Kigali is East Africa's strongest capitalized bank. RwandAir is growing as a pan-African airline hub. kLab and Innovation Village support thousands of Rwandan tech startups. Rwanda is proof that Africans can build what works.",
    source_note: "Rwanda business environment from World Bank Doing Business 2020. Corruption perception from Transparency International CPI 2022. Historical context from Philip Gourevitch 'We Wish to Inform You That Tomorrow We Will Be Killed with Our Families' (1998).",
    relevant_to: ["programs", "path", "success"],
  },
  {
    id: "ghanaian-fashion-global",
    category: "winning",
    title: "Ghanaian Fashion Is Dressing the World",
    hook: "Maxhosa Africa sold at Barneys New York. Christie Brown is in Vogue. African fashion is not 'ethnic wear.' It is luxury fashion. Built in Africa.",
    body: [
      "For decades, 'African fashion' was a niche category in Western markets — exotic, folkloric, confined to specialty stores and diaspora communities. This is no longer true. African designers are winning the world's highest fashion prizes, selling in the world's most prestigious stores, and setting trends that global fast-fashion companies immediately copy.",
      "Laduma Ngxokolo founded Maxhosa Africa in 2011, using Xhosa bead-work motifs translated into luxury knitwear. The brand was stocked at Barneys New York and Selfridges London. Pieces sell for $200–$600. Thebe Magugu (South Africa) won the LVMH Prize in 2019 — the first African designer to do so — competing against designers from Europe, America, and Asia. Christie Brown (Ghana) was featured in Vogue and sells to buyers in Europe and the US.",
      "The pattern is clear: African designers who build from African identity and craft traditions, rather than imitating Western aesthetics, are winning. The world is not buying African fashion despite it being African — it is buying it because it is African. Authenticity is the competitive advantage.",
      "The African luxury market is growing at 8% annually and is expected to reach $2.5 trillion by 2030. African consumers are increasingly buying African brands. The global luxury market is increasingly buying African creativity. Both audiences are available to an African designer who builds with confidence.",
    ],
    africans_today: "Maxhosa Africa, Christie Brown, Thebe Magugu, Lagos Space Programme, Imane Ayissi, Orange Culture, Sindiso Khumalo — these are not aspirational examples. These are operating businesses making revenue. Each one of them chose to build from African identity rather than away from it. That choice is the business model.",
    source_note: "Maxhosa distribution at Barneys is public record. Thebe Magugu LVMH Prize win documented by LVMH. Christie Brown Vogue features documented. African luxury market projections from Bain & Company Luxury Goods Worldwide Market Study.",
    relevant_to: ["build", "success", "sovereignty"],
  },
  {
    id: "ethiopian-airlines",
    category: "winning",
    title: "Africa's Largest Airline Was Built and Run by Africans, on African Soil",
    hook: "Ethiopian Airlines is more profitable than most European airlines. It operates 125+ aircraft to 127 destinations. It is 100% state-owned by Ethiopia. No foreign management.",
    body: [
      "Ethiopian Airlines was founded in 1945. It has grown to become the largest and most profitable airline on the African continent, carrying 12+ million passengers annually to 127 destinations. It is the fastest-growing airline in the world by revenue growth and one of the few airlines globally to have been consistently profitable.",
      "What makes Ethiopian Airlines exceptional is not just its size but its approach. Rather than hiring Western management consultants and aviation experts to run the airline, Ethiopia trained its own pilots, engineers, and managers. The Pilot Training Center in Addis Ababa trains African aviators from across the continent. Ethiopian Airlines became the training ground for African aviation professionals.",
      "When other African airlines failed — Air Afrique (which served 11 West African countries and collapsed in 2002), Nigerian Airways, Ghana Airways, Kenya Airways (surviving but struggling) — Ethiopian grew. The difference was consistent management, investment in owned infrastructure, and resistance to the pressure to privatize or bring in foreign operators.",
      "Ethiopian Airlines now manages airlines for other African governments (Togo, Zambia, Chad, Mozambique, Guinea). It is not just a success story — it is an African institution exporting aviation expertise to the rest of the continent.",
    ],
    africans_today: "Ethiopian Airlines is the operational model. RwandAir is the growth story — a tiny country building a premium regional hub. Air Peace (Nigeria) is Africa's largest private airline. Fastjet (Tanzania, Zimbabwe) is a low-cost model. Africa's aviation sector needs more African-owned airlines with African capital. The model exists.",
    source_note: "Ethiopian Airlines annual reports and IATA data. Air Afrique collapse documented by IATA and African Union transport reports.",
    relevant_to: ["build", "success", "path"],
  },
  {
    id: "nollywood-power",
    category: "winning",
    title: "Nigeria Built the World's Second Largest Film Industry — Without Hollywood's Money",
    hook: "Nollywood produces over 2,500 films per year. It employs more people than Nigeria's oil industry. It built itself from scratch, in Nigeria, on Nigerian terms.",
    body: [
      "Nollywood — Nigeria's film industry — is the second largest film industry in the world by volume of annual productions, behind only India's Bollywood. It produces over 2,500 films per year, compared to Hollywood's approximately 700 and Bollywood's 1,800.",
      "It was built without studio investment, without foreign capital, without government support. Nigerian filmmakers in the early 1990s started shooting feature films on VHS camcorders and selling them directly at markets and bus stations. Kenneth Nnebue's 'Living in Bondage' (1992) — widely considered the first Nollywood film — was shot in six days, produced for a tiny budget, and sold over 750,000 VHS copies.",
      "Today, Nollywood generates approximately $7 billion annually in economic activity and employs over 1 million people — more than Nigeria's oil sector, which is far more talked about. Nigerian actors like Genevieve Nnaji are internationally recognized. Netflix has signed Nollywood productions and created Nigeria-specific original content. Genevieve Nnaji's 'Lion Heart' was the first Netflix original film from Nigeria.",
      "The Nollywood model — rapid production, direct distribution, building for a specific cultural audience — is being replicated across Africa. Ghana, Kenya, Ethiopia, South Africa, and Francophone West Africa all have growing film industries modeled on Nigeria's example.",
    ],
    africans_today: "Genevieve Nnaji directs and produces. Funke Akindele is one of the highest-grossing directors in Nigerian cinema history. Inkblot Productions (Nigeria) produces premium content. Africa Magic (DSTV) is a pan-African content platform. Showmax Original (South Africa) creates premium African content. African storytelling is becoming global product.",
    source_note: "Nollywood production figures from Nigerian Film Corporation and UNESCO Institute for Statistics. Economic value estimate from PwC Nigeria Entertainment & Media Outlook (2022). 'Living in Bondage' historical record from Nigerian film archives.",
    relevant_to: ["build", "success", "feed"],
  },
];

export function getLessonById(id: string): EducationMoment | undefined {
  return EDUCATION_MOMENTS.find((m) => m.id === id);
}

export function getLessonsByCategory(cat: EducationMoment["category"]): EducationMoment[] {
  return EDUCATION_MOMENTS.filter((m) => m.category === cat);
}

export function getLessonsForPage(page: string): EducationMoment[] {
  return EDUCATION_MOMENTS.filter(
    (m) => !m.relevant_to || m.relevant_to.includes(page)
  );
}

export function getRandomLesson(): EducationMoment {
  return EDUCATION_MOMENTS[Math.floor(Math.random() * EDUCATION_MOMENTS.length)];
}

export function getRandomLessonForPage(page: string): EducationMoment {
  const relevant = getLessonsForPage(page);
  const pool = relevant.length > 0 ? relevant : EDUCATION_MOMENTS;
  return pool[Math.floor(Math.random() * pool.length)];
}
