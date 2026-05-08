export interface Chapter {
  title: string;
  content: string;
}

export interface BookContent {
  summary: string;
  keyChapters: Chapter[];
  practicalLessons: string[];
  quotes: string[];
}

export interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  tagline: string;
  english: BookContent;
  romanUrdu: BookContent;
}

export const books: Book[] = [
  {
    id: "48-laws-of-power",
    title: "The 48 Laws of Power",
    author: "Robert Greene",
    cover: "/covers/48-laws-of-power.jpg",
    tagline: "Timeless strategies for influence and mastery",
    english: {
      summary: "The 48 Laws of Power is a masterclass in understanding human nature and the dynamics of power. Robert Greene distills three thousand years of history into 48 essential laws that reveal the subtle and not-so-subtle techniques people use to gain and maintain power. Each law is illustrated through historical examples from figures like Machiavelli, Sun Tzu, Louis XIV, and modern power players. The book teaches you to recognize power moves in everyday life, defend yourself against manipulation, and strategically navigate social and professional hierarchies. It is not a moral guide but a practical manual for understanding the forces that shape human behavior.",
      keyChapters: [
        { title: "Law 1: Never Outshine the Master", content: "Always make those above you feel comfortably superior. If you display too much talent, you create fear and insecurity in superiors. Mask your strengths when necessary and let credit flow upward to protect your position." },
        { title: "Law 3: Conceal Your Intentions", content: "Keep people off-balance by never revealing the purpose behind your actions. Use deception, misdirection, and strategic ambiguity. When your intentions are unclear, opponents cannot prepare defenses." },
        { title: "Law 7: Get Others to Do the Work", content: "Use the wisdom, knowledge, and legwork of other people to further your own cause. This saves time and energy while positioning you as the brilliant architect of success." },
        { title: "Law 15: Crush Your Enemy Totally", content: "A defeated enemy left in play will eventually recover and seek revenge. Crush them completely to eliminate future threats. Half-victories are dangerous victories." },
        { title: "Law 28: Enter Action with Boldness", content: "Tentative actions create doubt and weaken your position. Boldness, even when mistaken, generates momentum and commands respect. Fortune favors the brave." },
        { title: "Law 33: Discover Each Man's Thumbscrew", content: "Everyone has a weakness, a vulnerability, or a secret desire. Find it and you hold the key to influencing them. People are never as strong as they appear." }
      ],
      practicalLessons: [
        "Learn to read power dynamics in every room you enter. Notice who speaks first, who interrupts, and who is deferred to.",
        "Guard your reputation fiercely—it is the foundation of your power. A single damaging story can undermine years of work.",
        "Make your superiors look good, even when you are the architect of success. Credit flows upward; protection flows downward.",
        "Never appear too perfect or too content. Envy is a powerful force that turns allies into enemies.",
        "Master the art of strategic withdrawal. Sometimes the most powerful move is to disappear and let others fight.",
        "Use absence to increase respect and honor. Too much availability makes you ordinary; scarcity creates value.",
        "When you show yourself to the world, display your best attributes deliberately. First impressions are lasting impressions."
      ],
      quotes: [
        "Power is not what we do but what we do not—hasty and unwise actions are the ruin of power.",
        "Keep your friends for friendship, but work with the skilled and competent.",
        "Any man who tries to be good all the time is bound to come to ruin among the great number who are not good.",
        "Do not leave your reputation to chance or gossip; it is your life's artwork, and you must craft it yourself.",
        "The human tongue is a beast that few can master. It strains constantly to break out of its cage, and if it is not tamed, it will run wild and cause you grief."
      ]
    },
    romanUrdu: {
      summary: "The 48 Laws of Power Robert Greene ki aik behtareen kitaab hai jo insani fitrat aur taqat ki dunya ko samajhne mein madad deti hai. Greene ne teen hazaar saal ki tareekh ko 48 qaanoon mein murattab kiya hai jo yeh batate hain ke log taqat kaise haasil karte hain aur kaise barqarar rakhte hain. Har qaanoon ko tareekhi shakhsiyat jaise Machiavelli, Sun Tzu, Louis XIV, aur jadeed siyasatdanon ki misalon se samjhaya gaya hai. Yeh kitaab aapko roz marrah ki zindagi mein power games pehchanne, manipulation se bachne, aur social/professional zindagi mein behtar faislay lene ki salah deti hai.",
      keyChapters: [
        { title: "Qaanoon 1: Apne Ustaad ko Kabhi Mat Chhupao", content: "Hamesha apne se upar logon ko comfortable aur superior mehsoos karwao. Agar aap apni ziyada talent dikhaoge to aapke superiors mein fear aur insecurity paida hogi. Zaroorat parne par apni taqat chhupao aur credit upar bhejne do taake aapki position mehfooz rahe." },
        { title: "Qaanoon 3: Apne Iradon ko Chhupao", content: "Logon ko hamesha be-qarar rakho, kabhi bhi apne actions ke peechay ka maqsad mat batayo. Dhoka, gumrah karna, aur strategic ambiguity ka istemal karo. Jab aapke irade clear nahi honge to dushman defense tayyar nahi kar sakay ga." },
        { title: "Qaanoon 7: Doosron se Kaam Karwao, Lekin Credit Khud Lo", content: "Doosre logon ki danish, knowledge, aur mehnat apne maqsad ke liye istemal karo. Is se waqt aur taaqat bachti hai aur aapko kamyabi ka architect dikhaya jata hai." },
        { title: "Qaanoon 15: Dushman ko Mukammal Torr Par Tabah Karo", content: "Aik shikast-khurda dushman jo zinda reh jaye wo kabhi na kabhi phir se taaqat haasil kar ke badla lega. Unhe mukammal torr par crush karo taake mustaqbil mein khatra na rahe. Aadhi jeet khatarnak jeet hoti hai." },
        { title: "Qaanoon 28: Jur'at Se Kaam Mein Daakhil Ho", content: "Hesitant actions shak paida karti hain aur aapki position kamzor karti hain. Jur'at, chahe galti par ho bhi, momentum paida karti hai aur izzat dilwati hai. Himmat walon ki kismet saath deti hai." },
        { title: "Qaanoon 33: Har Shakhs Ki Kamzori Dhoondo", content: "Har insaan ki aik kamzori, vulnerability, ya chhupi hui khwahish hoti hai. Usay dhoondo aur aapke paas usay influence karne ki chaabi hogi. Log kabhi bhi utne mazboot nahi hote jitne wo dikhte hain." }
      ],
      practicalLessons: [
        "Har kamre mein taqat ke dynamics parhna seekho. Notice karo ke sab se pehle kaun bolta hai, kaun interrupt karta hai, aur kaun se log defer kiye jate hain.",
        "Apni reputation ko hamesha bachao—yeh aapki taqat ki buniyaad hai. Aik kharab kahani saalon ki mehnat par paani pher sakti hai.",
        "Apne superiors ko achha dikhao, chahe kamyabi aapki hi mehnat ka natija ho. Credit upar jaata hai; protection neechay aati hai.",
        "Kabhi bhi bohat perfect ya bohat khush mat dikho. Hasad aik taqatwar jazba hai jo dostan ko dushman bana deta hai.",
        "Strategic withdrawal ka hunar seekho. Kabhi sab se taqatwar move yeh hota hai ke aap gayab ho jao aur doosron ko larne do.",
        "Ghaib hone ka istemal izzat aur honor barhane ke liye karo. Bohat ziyada available hona aapko ordinary bana deta hai; kami value paida karti hai.",
        "Jab duniya ke samne aao, to apne behtareen attributes jaan-boojh kar dikhao. Pehli impression hamesha yaad rehne wali hoti hai."
      ],
      quotes: [
        "Taqat woh nahi jo hum karte hain balkay woh jo hum nahi karte—jaldi aur beja actions taqat ka zawal hain.",
        "Dosti ke liye dost banao, lekin kaam ke liye hunarmand aur qabil logon ke saath kaam karo.",
        "Jo shakhs hamesha achha banne ki koshish karega, wo bohat se bad logon ke darmiyan tabah ho jayega.",
        "Apni reputation ko chance ya gossip par mat chhodo; yeh aapki zindagi ka artwork hai, aur isay aap ne khud banana hai.",
        "Insani zubaan aik darinda hai jise kum log qabu kar sakte hain. Yeh hamesha pinjre se nikalne ki koshish karta hai, aur agar isay train nahi kiya gaya to yeh pagal ho kar aapko dukh dega."
      ]
    }
  },
  {
    id: "atomic-habits",
    title: "Atomic Habits",
    author: "James Clear",
    cover: "/covers/atomic-habits.png",
    tagline: "Tiny changes, remarkable results",
    english: {
      summary: "Atomic Habits by James Clear is the definitive guide to building good habits and breaking bad ones. The core idea is that tiny, incremental changes—when compounded over time—lead to remarkable results. Clear introduces the concept of 'atomic habits,' which are small, fundamental behaviors that are the building blocks of larger systems. He emphasizes that success is not about setting big goals but about designing systems that make good habits inevitable and bad habits impossible. The book is built on four laws of behavior change: make it obvious, make it attractive, make it easy, and make it satisfying.",
      keyChapters: [
        { title: "The Surprising Power of Atomic Habits", content: "Small habits make a big difference. If you get 1% better each day for one year, you'll end up 37 times better by the time you're done. Conversely, if you get 1% worse each day, you'll decline nearly to zero. Habits are the compound interest of self-improvement." },
        { title: "How Your Habits Shape Your Identity", content: "True behavior change is identity change. Instead of focusing on outcomes, focus on becoming the type of person who achieves those outcomes. Every action you take is a vote for the type of person you wish to become." },
        { title: "The 1st Law: Make It Obvious", content: "The first step to changing behavior is awareness. Use habit stacking by linking a new habit to an existing one. Design your environment so that cues for good habits are visible and cues for bad habits are hidden." },
        { title: "The 2nd Law: Make It Attractive", content: "Use temptation bundling—pair an action you want to do with an action you need to do. Join cultures where your desired behavior is the normal behavior. The more attractive a habit is, the more likely it is to become automatic." },
        { title: "The 3rd Law: Make It Easy", content: "The most effective form of learning is practice, not planning. Reduce friction for good habits. Use the two-minute rule: when you start a new habit, it should take less than two minutes to do. Master the art of showing up." },
        { title: "The 4th Law: Make It Satisfying", content: "What is immediately rewarded is repeated. What is immediately punished is avoided. Use habit trackers to create visual proof of your progress. Never miss twice—if you miss one day, get back on track immediately." }
      ],
      practicalLessons: [
        "Focus on systems, not goals. Goals are about the results you want to achieve; systems are about the processes that lead to those results.",
        "Your habits shape your identity, and your identity shapes your habits. Ask yourself: 'What would a healthy person do?' Then do that.",
        "Design your environment for success. Want to read more? Place books in every room. Want to eat less junk? Keep it out of sight.",
        "Use implementation intentions: 'I will [BEHAVIOR] at [TIME] in [LOCATION].' This removes ambiguity and increases follow-through.",
        "Make bad habits invisible, unattractive, difficult, and unsatisfying. Add friction to undesirable behaviors.",
        "The two-minute rule states that when you start a habit, it should take less than two minutes. This overcomes procrastination.",
        "Track your habits visually. Don't break the chain. Consistency is more important than intensity."
      ],
      quotes: [
        "You do not rise to the level of your goals. You fall to the level of your systems.",
        "Every action you take is a vote for the type of person you wish to become.",
        "Habits are the compound interest of self-improvement.",
        "The cost of your good habits is in the dozens of opportunities you pass on. The cost of your bad habits is in the future you are not living.",
        "Success is the product of daily habits—not once-in-a-lifetime transformations.",
        "When you fall in love with the process rather than the product, you don't have to wait to give yourself permission to be happy."
      ]
    },
    romanUrdu: {
      summary: "Atomic Habits James Clear ki aik behtareen kitaab hai jo achhi aadatein banane aur buri aadaton ko torrne ka mukammal tareeqa batati hai. Asal khayal yeh hai ke choti, incremental tabdeeliyan—waqt ke saath compound hone par—bohat azeem natayej deti hain. Clear 'atomic habits' ka concept introduce karta hai, jo choti, buniyaadi behaviors hain jo baray systems ki building blocks hain. Woh zor deta hai ke kamyabi baray goals set karne mein nahi, balkay aise systems design karne mein hai jo achhi aadaton ko zaroori aur buri aadaton ko namumkin bana dein.",
      keyChapters: [
        { title: "Atomic Habits ki Hairat Angez Taqat", content: "Choti aadatein bara farq karti hain. Agar aap roz 1% behtar hote hain, to saal ke end tak aap 37 guna behtar honge. Aur agar roz 1% girtay jao to kuch nahi bachta. Aadatein self-improvement ka compound interest hain." },
        { title: "Aadatein Kaise Aapki Shanakht Shape Karti Hain", content: "Asli behavior change identity change hai. Natayej par focus karne ke bajaye, is qisam ke insan banne par focus karo jo woh natayej haasil karta hai. Aapki har action aapki banayi hui shakhsiyat ke liye aik vote hai." },
        { title: "Pehla Qaanoon: Obvious Banao", content: "Behavior change ka pehla qadam awareness hai. Habit stacking istemal karo—nayi aadat ko purani aadat se joro. Apne mahol ko aise design karo ke achhi aadaton ke cues nazar aain aur buri aadaton ke cues chhup jayain." },
        { title: "Dusra Qaanoon: Attractive Banao", content: "Temptation bundling istemal karo—wo kaam jo karna chahte hain usay zaroori kaam ke saath joro. Aise cultures mein shamil ho jao jahan aapki chahti hui behavior normal behavior ho. Jitni attractive aik aadat hogi, utni ziyada automatic banegi." },
        { title: "Teesra Qaanoon: Aasaan Banao", content: "Sabat-tareen learning practice hai, planning nahi. Achhi aadaton ke liye friction kam karo. Two-minute rule istemal karo: jab nayi aadat shuru karo to wo do minute se kam time le. Aanay ka hunar seekho." },
        { title: "Chautha Qaanoon: Satisfying Banao", content: "Jo foran reward deta hai wo dohraya jata hai. Jo foran saza deta hai wo avoid kiya jata hai. Habit tracker se apni taraqqi ka visual sabut banayo. Kabhi do dafa miss mat karo—agar aik din miss ho jaye to foran wapas track par aao." }
      ],
      practicalLessons: [
        "Systems par focus karo, goals par nahi. Goals woh natayej hain jo aap haasil karna chahte hain; systems woh processes hain jo un natayej tak pohanchate hain.",
        "Aapki aadatein aapki shanakht shape karti hain, aur aapki shanakht aapki aadatein shape karti hai. Apne aap se poochho: 'Aik sehat mand insan kya karega?' Phir wohi karo.",
        "Apne mahol ko kamyabi ke liye design karo. Ziyada parhna chahte ho? Har kamre mein kitaab rakho. Kam junk khana chahte ho? Usay nazron se door rakho.",
        "Implementation intentions istemal karo: 'Main [BEHAVIOR] karunga [TIME] ko [LOCATION] par.' Yeh ambiguity khatam karta hai aur follow-through barhata hai.",
        "Buri aadaton ko invisible, unattractive, difficult, aur unsatisfying banao. Undesirable behaviors mein friction ziyada karo.",
        "Two-minute rule kehta hai ke jab aik aadat shuru karo to wo do minute se kam le. Yeh procrastination par qabu deta hai.",
        "Apni aadaton ko visually track karo. Chain mat torro. Consistency intensity se ziyada ahem hai."
      ],
      quotes: [
        "Aap apne goals ki level tak nahi ja sakte. Aap apne systems ki level tak gir jate hain.",
        "Aapki har action aapki banayi hui shakhsiyat ke liye aik vote hai.",
        "Aadatein self-improvement ka compound interest hain.",
        "Achhi aadaton ki qeemat wo mawaqe hain jo aap chordete hain. Buri aadaton ki qeemat wo mustaqbil hai jo aap nahi jee rahe.",
        "Kamyabi roz marrah ki aadaton ka product hai—zindagi badalne wali aik hi transformation ka nahi.",
        "Jab aap process se mohabbat karte hain product se ziyada, to aapko khushi ke liye permission lene ka intezaar nahi karna parta."
      ]
    }
  },
  {
    id: "meditations",
    title: "Meditations",
    author: "Marcus Aurelius",
    cover: "/covers/meditations.jpg",
    tagline: "Ancient wisdom for modern resilience",
    english: {
      summary: "Meditations is a collection of personal writings by Marcus Aurelius, the Roman Emperor from 161 to 180 AD, and is considered one of the greatest works of Stoic philosophy. Written entirely for his own self-improvement during military campaigns, these notes were never intended for publication. The text explores how to find inner peace, maintain emotional resilience, and live virtuously in a chaotic world. Aurelius teaches that we cannot control external events, but we can control our reactions to them. He emphasizes the transient nature of life, the importance of duty, the power of reason, and the futility of seeking fame or fortune.",
      keyChapters: [
        { title: "Book II: On the Vanity of Mortal Things", content: "Begin each morning by reminding yourself that you will encounter meddling, ungrateful, arrogant, dishonest, envious, and surly people. They act this way because they do not know what is good or evil. But you, who have seen the nature of good and evil, know that these people are your brothers, fashioned from the same material." },
        { title: "Book IV: On Self-Control", content: "Stop allowing your mind to be a slave. Do not let your impulses move you blindly. Neither say nor do anything at random, but always with a purpose and with the right method. Remind yourself that it is not the actions of others that disturb us, but our judgments about those actions." },
        { title: "Book V: On Gratitude and Duty", content: "When you arise in the morning, think of what a privilege it is to be alive, to think, to enjoy, to love. Remember that very little is needed to make a happy life; it is all within yourself, in your way of thinking. Live not as though you had endless years ahead of you." },
        { title: "Book VII: On Patience and Tolerance", content: "It is a ridiculous thing for a man not to fly from his own badness, which is indeed possible, but to fly from other men's badness, which is impossible. Look within. Within is the fountain of good, and it will ever bubble up, if you will ever dig." },
        { title: "Book VIII: On Reason and Virtue", content: "Reverence the faculty that produces opinion. On this faculty it entirely depends whether there shall exist in your ruling part opinion consistent with nature and the constitution of a reasonable being. And this faculty promises freedom from hasty judgment and fellowship with mankind." },
        { title: "Book XII: On Acceptance and Death", content: "What is this, fundamentally? What is its nature and substance, its reason for being? It is high time for you to understand that there is a limit to the time assigned you, and if you do not use it to free yourself, it will be gone and will never return." }
      ],
      practicalLessons: [
        "You cannot control what happens to you, but you can control how you respond. Your judgment about an event is what causes suffering, not the event itself.",
        "Life is short and uncertain. Focus on what is within your power and let go of what is not. This is the core of Stoic serenity.",
        "Perform every act in life as though it were your last. This brings clarity, urgency, and excellence to everything you do.",
        "People are not evil—they are ignorant. When someone wrongs you, remember they do not understand true good and evil. Pity them rather than hate them.",
        "Material things, fame, and power are fleeting. The only lasting wealth is virtue, wisdom, and a tranquil mind.",
        "The universe is change. Life is opinion. You have power over your mind—not outside events. Realize this, and you will find strength.",
        "Accept death not as an evil, but as a natural law. It releases you from the body's limitations and reunites you with the universal reason."
      ],
      quotes: [
        "You have power over your mind—not outside events. Realize this, and you will find strength.",
        "The happiness of your life depends upon the quality of your thoughts.",
        "Waste no more time arguing about what a good man should be. Be one.",
        "Everything we hear is an opinion, not a fact. Everything we see is a perspective, not the truth.",
        "It is not death that a man should fear, but he should fear never beginning to live.",
        "The best revenge is to be unlike him who performed the injury.",
        "Accept the things to which fate binds you, and love the people with whom fate brings you together, but do so with all your heart."
      ]
    },
    romanUrdu: {
      summary: "Meditations Marcus Aurelius ki aik behtareen kitaab hai jo Stoic philosophy ki sab se azeem tareen tasaneef mein shumaar hoti hai. Marcus Aurelius 161 se 180 AD tak Roman Emperor thay, aur in writings ko unhon ne sirf apni self-improvement ke liye likha tha jab woh military campaigns par thay. Yeh text explore karta hai ke kis tarah androoni sukoon paaya jaye, emotional resilience barqarar rakhi jaye, aur aik pareshan dunia mein achhay tareeqay se zindagi guzari jaye. Aurelius sikhata hai ke hum baahir ki events ko control nahi kar sakte, lekin un par apni reaction ko control kar sakte hain.",
      keyChapters: [
        { title: "Book II: Fanee Cheezon Ki Fazoolat", content: "Har subah uth kar apne aap ko yaad dilao ke aapko meddling, nashukra, maghroor, be-imaan, hasid, aur chirrha log milenge. Ye isliye karte hain kyun ke unhe nahi pata ke achha aur bura kya hai. Lekin aap jo achhai aur burai ki fitrat dekh chuke hain, jante hain ke yeh log aapke bhai hain, aik hi maal se bane hain." },
        { title: "Book IV: Khud-Control Par", content: "Apne zehan ko ghulam banne se roko. Apne jazbaat ko allow mat karo ke wo aapko blindly chalaain. Kabhi bhi kuch random na bolo aur na karo, hamesha maqsad aur sahi tareeqay se karo. Apne aap ko yaad dilao ke doosron ke actions se pareshani nahi hoti, balkay un actions ke baaray mein hamari judgments se hoti hai." },
        { title: "Book V: Shukr Guzari Aur Duty Par", content: "Jab aap subah utho, socho ke zinda hone, sochne, enjoy karne, aur mohabbat karne ka kya privilege hai. Yaad rakho ke khush zindagi ke liye bohat kam cheezon ki zaroorat hai; sab kuch aapke andar hai, aapki soch ke andar. Aise mat jiyo jaise aapke paas anant saal hain." },
        { title: "Book VII: Sabr Aur Bardasht Par", content: "Aik insan ke liye yeh buzdlana baat hai ke wo apni burai se bhaage, jo ke mumkin hai, lekin doosron ki burai se bhaaye, jo ke namumkin hai. Andar dekho. Andar hi khair ka chashma hai, aur yeh hamesha ubharta rahega agar aap khodte rahoge." },
        { title: "Book VIII: Reason Aur Virtue Par", content: "Un faculty ki izzat karo jo opinion paida karti hai. Is faculty par mukammal torr se depend karta hai ke aapke ruling part mein nature ke mutabiq aur aik reasonable being ki constitution ke mutabiq opinion ho ya nahi. Aur yeh faculty jaldi judgment se azadi aur insaniyat ke saath fellowship ka wada karti hai." },
        { title: "Book XII: Qabooliyat Aur Maut Par", content: "Yeh asal mein kya hai? Iski kya fitrat aur substance hai, iske hone ka kya reason hai? Aap ke liye waqt aa gaya hai ke samajh lo ke aapke liye muqarrara waqt ki aik had hai, aur agar aap ne isay apni azadi ke liye istemal nahi kiya, to yeh chala jayega aur kabhi wapas nahi aayega." }
      ],
      practicalLessons: [
        "Aap woh nahi control kar sakte jo aapke saath hota hai, lekin aap yeh control kar sakte hain ke aap kaise react karte hain. Aik event se takleef nahi hoti, balkay us event ke baaray mein aapki judgment se hoti hai.",
        "Zindagi chhoti aur ghair-mutayyan hai. Apni taqat ke dairay par focus karo aur us par jo aapki taqat mein nahi. Yeh Stoic serenity ki buniyaad hai.",
        "Zindagi ka har kaam aise karo jaise yeh aapka aakhri kaam ho. Yeh clarity, urgency, aur excellence laata hai har kaam mein.",
        "Log bura nahi hote—wo jaahil hote hain. Jab koi aapka bura kare to yaad rakho ke unhe asli achhai aur burai ka pata nahi. Unhe nafrat ke bajaye rehm karo.",
        "Maali cheezein, shohrat, aur taqat fani hain. Aik hi daimi daulat virtue, wisdom, aur aik sukoon bhara zehan hai.",
        "Kainat tabdeeli hai. Zindagi opinion hai. Aapka apne zehan par control hai—baahir ki events par nahi. Isay realize karo, aur aapko taqat milay gi.",
        "Maut ko buraayi ke torr par qabool mat karo, balkay aik natural law ke torr par. Yeh aapko jism ki limitations se azad karta hai aur aapko universal reason se mila deta hai."
      ],
      quotes: [
        "Aapka apne zehan par control hai—baahir ki events par nahi. Isay realize karo, aur aapko taqat milay gi.",
        "Aapki zindagi ki khushi aapki soch ki quality par depend karti hai.",
        "Aik achhe insan ke baray mein behas karna chorro, ban jao.",
        "Jo kuch bhi sunte hain woh opinion hai, fact nahi. Jo kuch bhi dekhte hain woh perspective hai, sach nahi.",
        "Maut se nahi, balkay zindagi shuru karne se qab ki derani chahiye.",
        "Behtareen badla aisa banana hai ke jo zakhm diya tha wo aap mein nazar nahi aaye.",
        "Un cheezon ko qabool karo jin se taqdeer aapko bandhti hai, aur un logon se mohabbat karo jin se taqdeer aapko milati hai, lekin yeh sab apne pooray dil se karo."
      ]
    }
  },
  {
    id: "rich-dad-poor-dad",
    title: "Rich Dad Poor Dad",
    author: "Robert T. Kiyosaki",
    cover: "/covers/rich-dad-poor-dad.jpg",
    tagline: "What the rich teach their kids about money",
    english: {
      summary: "Rich Dad Poor Dad is Robert Kiyosaki's personal story of growing up with two father figures—his own highly educated but financially struggling 'Poor Dad' and his best friend's wealthy, self-made 'Rich Dad.' Through their contrasting advice and life choices, Kiyosaki unveils the fundamental differences in how the rich and poor think about money. The book shatters the myth that you need a high income to become rich and explains why financial literacy is never taught in schools. Kiyosaki introduces the concept that assets put money in your pocket while liabilities take money out.",
      keyChapters: [
        { title: "Lesson 1: The Rich Don't Work for Money", content: "The poor and middle class work for money. The rich have money work for them. Most people are trapped in a cycle of fear—fear of not having money drives them to work, then greed for luxuries keeps them working. The rich break this cycle by building assets that generate income independent of their labor." },
        { title: "Lesson 2: Why Teach Financial Literacy?", content: "It's not how much money you make, but how much money you keep. Financial literacy is the ability to read numbers and understand the difference between assets and liabilities. Without this knowledge, even high earners can end up broke." },
        { title: "Lesson 3: Mind Your Own Business", content: "Your profession is what you do for money. Your business is what makes you money even when you're not working. Don't spend your life building someone else's business. Focus on building your own asset column through investments and enterprises." },
        { title: "Lesson 4: The History of Taxes and Corporations", content: "The rich legally use corporations and tax laws to protect their wealth and minimize taxes. Understanding how money flows through corporate structures is essential for wealth preservation. The middle class pays the most in taxes because they lack this knowledge." },
        { title: "Lesson 5: The Rich Invent Money", content: "Financial intelligence gives you the ability to create money from opportunities others miss. The rich see opportunities where others see obstacles. They use other people's money, time, and expertise to build wealth." },
        { title: "Lesson 6: Work to Learn—Don't Work for Money", content: "Jobs teach you specialized skills, but true wealth comes from learning management, sales, marketing, and communication. A job is a short-term solution to a long-term problem. Invest in skills that serve you across multiple industries." }
      ],
      practicalLessons: [
        "Pay yourself first. Before paying bills or expenses, allocate money to your asset column. This builds financial discipline and forces creative thinking about income.",
        "Know the difference between an asset and a liability. Assets put money in your pocket; liabilities take money out. Your house is not an asset unless it generates income.",
        "Don't say 'I can't afford it.' Instead ask 'How can I afford it?' This shifts your brain from shutdown mode to creative problem-solving mode.",
        "Overcome the fear of losing money. Every successful investor has lost money. Failure is part of learning. Start small, learn fast, and scale gradually.",
        "Surround yourself with people who are smarter than you in finance. Your network determines your net worth. Learn from mentors who have achieved what you want.",
        "Take responsibility for your financial education. Schools teach you to be employees, not investors. Read financial statements, attend seminars, and study successful investors.",
        "The single most powerful asset we all have is our mind. If trained well, it can create enormous wealth. Financial intelligence is the gateway to financial freedom."
      ],
      quotes: [
        "The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth in what seems to be an instant.",
        "Winners are not afraid of losing. But losers are. Failure is part of the process of success.",
        "It's not what you say out of your mouth that determines your life, it's what you whisper to yourself that has the most power.",
        "In school we learn that mistakes are bad, and we are punished for making them. Yet, if you look at the way humans are designed to learn, we learn by making mistakes.",
        "The poor and the middle class work for money. The rich have money work for them.",
        "An asset puts money in my pocket. A liability takes money out of my pocket.",
        "Don't let the fear of losing be greater than the excitement of winning."
      ]
    },
    romanUrdu: {
      summary: "Rich Dad Poor Dad Robert Kiyosaki ki aik mash-hoor kitaab hai jo unki zati kahani bayan karti hai—do 'baap' figures ke saath parwarish ki. Aik unka apna highly educated lekin financially struggling 'Poor Dad' tha, aur doosray unke dost ka wealthy, self-made 'Rich Dad.' In donon ke mukhtalif mashware aur zindagi ke faislon ke zariye Kiyosaki yeh unveil karta hai ke ameer aur ghareeb log paise ke baaray mein sochne mein kis tarah farq rakhte hain. Yeh kitaab is myth ko torrti hai ke aapko high income ki zaroorat hai taake ameer bano, aur yeh batati hai ke financial literacy schools mein kyun nahi sikhayi jaati.",
      keyChapters: [
        { title: "Sabaq 1: Ameer Log Paise Ke Liye Kaam Nahi Karte", content: "Ghareeb aur middle class paise ke liye kaam karti hai. Ameer log paise ko apne liye kaam karte hain. Aksar log fear ke cycle mein phanse hote hain—paise na hone ka darr unhe kaam par majboor karta hai, phir luxuries ki lalach unhe kaam karne par majboor rakhti hai. Ameer log is cycle ko apni mehnat se alag income generate karne wali assets bana kar torrte hain." },
        { title: "Sabaq 2: Financial Literacy Kyun Sikhain?", content: "Yeh nahi ke aap kitna paise kamate hain, balkay aap kitna paise bachate hain. Financial literacy wo salahiyat hai ke numbers parh sakein aur assets aur liabilities mein farq samajh sakein. Is knowledge ke baghair bohat ziyada kamane wale bhi bankrupt ho sakte hain." },
        { title: "Sabaq 3: Apna Kaam Khud Karo", content: "Aapki profession woh hai jo aap paise ke liye karte hain. Aapka business woh hai jo aapko paise banata hai chahe aap kaam kar rahe hon ya nahi. Apni zindagi kisi aur ka business banane mein mat gavao. Apne investments aur enterprises ke zariye apni asset column banane par focus karo." },
        { title: "Sabaq 4: Taxes Ki Tareekh Aur Corporations Ki Taqat", content: "Ameer log corporations aur tax laws ka istemal kar ke apni daulat mehfooz aur taxes kam karte hain. Yeh samajhna ke paise corporate structures se kaise guzarta hai daulat mehfooz rakhne ke liye zaroori hai. Middle class sab se ziyada taxes deti hai kyun ke unke paas yeh knowledge nahi." },
        { title: "Sabaq 5: Ameer Log Paise Ijaad Karte Hain", content: "Financial intelligence aapko wo salahiyat deti hai ke doosron se chooti hui opportunities se paise bana sakain. Ameer log obstacles ko opportunities mein badal dete hain. Wo doosron ke paise, waqt, aur expertise ka istemal kar ke daulat banate hain." },
        { title: "Sabaq 6: Seekhne Ke Liye Kaam Karo—Paise Ke Liye Nahi", content: "Naukriyan aapko specialized skills sikhaati hain, lekin asli daulat management, sales, marketing, aur communication seekhne se aati hai. Naukri aik short-term solution hai aik long-term problem ka. Un skills mein invest karo jo multiple industries mein kaam aain." }
      ],
      practicalLessons: [
        "Pehle apne aap ko pay karo. Bills ya expenses se pehle, apni asset column ke liye paise allocate karo. Yeh financial discipline banati hai aur income ke baaray mein creative soch par majboor karti hai.",
        "Asset aur liabilities mein farq jano. Assets aapki jeb mein paise daalte hain; liabilities paise nikaalte hain. Aapka ghar aik asset nahi jab tak ke wo income generate na kar raha ho.",
        "'Main afford nahi kar sakta' mat kaho. Balkay poochho 'Main kaise afford kar sakta hoon?' Yeh aapke zehan ko shutdown mode se creative problem-solving mode mein le aata hai.",
        "Paise gavane ka darr qabu mein karo. Har successful investor ne paise gavaye hain. Failure learning ka hissa hai. Chhote se shuru karo, jaldi seekho, aur gradually barho.",
        "Apne aap ko un logon se gher lo jo finance mein aap se ziyada aqalmand hain. Aapka network aapki net worth tay karta hai. Un mentors se seekho jinhon ne wo haasil kiya jo aap chahte hain.",
        "Apni financial education ki zimmedari lo. Schools aapko employee banane ki training dete hain, investor nahi. Financial statements parho, seminars attend karo, aur successful investors ki study karo.",
        "Hamara sab se taqatwar asset hamara zehan hai. Agar isay achhi tarah train kiya jaye, to yeh barhi daulat bana sakta hai. Financial intelligence financial freedom ka darwaza hai."
      ],
      quotes: [
        "Hamara sab se taqatwar asset hamara zehan hai. Agar isay achhi tarah train kiya jaye, to yeh barhi daulat bana sakta hai jo aik pal mein dikhai de.",
        "Jeetne wale haarne se nahi darte. Haarne wale darte hain. Failure kamyabi ke process ka hissa hai.",
        "Aapki zindagi woh nahi tay karti jo aap zuban se kehte hain, balkay woh jo aap khud se whisper karte hain us mein sab se ziyada taqat hai.",
        "School mein hum seekhte hain ke galtiyan buri hain, aur galti karne par saza milti hai. Phir bhi, agar dekha jaye ke insaan kaise seekhna design hua hai, to hum galtiyon se seekhte hain.",
        "Ghareeb aur middle class paise ke liye kaam karti hai. Ameer log paise ko apne liye kaam karte hain.",
        "Aik asset meri jeb mein paise daalta hai. Aik liability meri jeb se paise nikaalta hai.",
        "Haarne ka darr jeetne ki excitement se barh kar mat hone do."
      ]
    }
  },
  {
    id: "what-every-body-is-saying",
    title: "What Every BODY Is Saying",
    author: "Joe Navarro",
    cover: "/covers/what-every-body-is-saying.jpg",
    tagline: "An ex-FBI agent's guide to speed-reading people",
    english: {
      summary: "What Every BODY Is Saying is the ultimate guide to reading nonverbal cues, written by former FBI counterintelligence agent Joe Navarro. Drawing on decades of experience interrogating spies, criminals, and terrorists, Navarro reveals how to decode the silent signals people constantly emit through their bodies. The book explains that while people can rehearse verbal lies, they rarely control their subconscious physical reactions. Navarro breaks down body language into specific behaviors: foot positioning, eye contact, hand movements, torso orientation, and facial expressions.",
      keyChapters: [
        { title: "The Limbic Brain and Honest Body Language", content: "The limbic brain is the honest brain. It reacts instantaneously and without conscious thought, generating true nonverbal behaviors. When someone is stressed, scared, or lying, the limbic brain activates freeze, flight, or fight responses that are visible in body language." },
        { title: "Feet and Legs: The Most Honest Body Parts", content: "The feet are the most honest part of the body because they are tied to the limbic freeze, flight, fight responses. When people want to leave, their feet point toward the exit. When comfortable, feet spread wide. When nervous, feet shuffle or wrap around chair legs." },
        { title: "Torso, Hips, Arms, and Shoulders", content: "The torso houses vital organs, so we protect it when threatened. Turning the torso away signals discomfort. Arm barriers like crossed arms or holding objects in front create protective shields. Shoulders rise toward the ears under stress." },
        { title: "The Secrets of the Hands and Fingers", content: "Hands are expressive tools of communication. Steepling fingers indicates confidence. Concealed hands or thumbs tucked into pockets signal low confidence. Excessive hand gestures can indicate excitement or deception. Hand-to-face touching often accompanies deception." },
        { title: "The Face and Deception", content: "The face is the most manipulated part of the body. People can force smiles, but genuine emotions engage the entire face, especially the eyes. Micro-expressions—fleeting facial expressions lasting fractions of a second—reveal true feelings before the conscious mind can mask them." },
        { title: "Detecting Deception: Putting It All Together", content: "There is no single 'tell' that proves deception. Look for clusters of behaviors: hand-wringing, throat-clearing, foot-tapping, and gaze aversion together signal high stress. Establish a behavioral baseline first, then look for deviations during critical moments." }
      ],
      practicalLessons: [
        "Always establish a behavioral baseline before reading someone. Observe how they act when relaxed so you can spot meaningful deviations.",
        "Watch the feet first. They reveal true intentions because people rarely think to control them. Feet pointed toward the door mean someone wants to leave.",
        "Look for clusters, not isolated gestures. One hand gesture means nothing. Multiple stress signals together paint an accurate picture.",
        "Be aware of context. Cold hands might mean a cold room, not nervousness. Always factor in environmental conditions.",
        "Torso leaning away indicates discomfort or disagreement. If someone's torso is pointed away from you while talking, they are not fully engaged.",
        "Genuine smiles involve the eyes (crow's feet). Fake smiles engage only the mouth. When reading emotions, watch the eye muscles.",
        "Steepling fingers is a universal sign of confidence. When someone steeples after making a point, they feel certain about what they just said."
      ],
      quotes: [
        "The feet are the most honest part of the body. They reflect what is truly in the mind.",
        "People lie, but the body always tells the truth if you know how to read it.",
        "Nonverbal behaviors comprise approximately 60 to 65 percent of all interpersonal communication and can represent the truest communication.",
        "Comfort/discomfort is the guiding principle in interpreting nonverbal behavior. We lean toward what we like and away from what we don't.",
        "The most important thing in communication is hearing what isn't said.",
        "When the feet and the body are pointed in two different directions, it is the feet that will tell you where the person really wants to go."
      ]
    },
    romanUrdu: {
      summary: "What Every BODY Is Saying Joe Navarro ki aik behtareen kitaab hai jo nonverbal cues parhne ka ultimate guide hai. Joe Navarro pehle FBI counterintelligence agent thay aur unhon ne decades spies, criminals, aur terrorists ko interrogate karne ka tajurba hasil kiya. Is tajurbe se unhon ne yeh reveal kiya ke log kis tarah apne jism se silent signals bhejte rehte hain jo unke asli jazbaat batate hain. Kitaab yeh batati hai ke jab ke log zubani jhoot bolne ki practice kar sakte hain, wo apne subconscious physical reactions par control nahi kar sakte.",
      keyChapters: [
        { title: "Limbic Brain Aur Sachhi Body Language", content: "Limbic brain sacha brain hai. Yeh foran react karta hai aur baghair sochay ke, asli nonverbal behaviors generate karta hai. Jab koi stressed, dara hua, ya jhoot bol raha ho, limbic brain freeze, flight, ya fight responses activate karta hai jo body language mein nazar aate hain." },
        { title: "Paon Aur Taangein: Sab Se Sachhay Jism Ke Hissay", content: "Paon jism ke sab se sachay hissay hain kyun ke limbic freeze, flight, fight responses se jude hote hain. Jab log jana chahte hain, unke paon darwazay ki taraf ishaara karte hain. Jab comfortable hon, paon phelay hote hain. Jab nervous hon, paon shuffling karte hain ya chair ke paon ke gird lapet lete hain." },
        { title: "Torso, Koolhay, Bahein, Aur Kandhay", content: "Torso mein ahem organs hote hain, isliye jab khatra ho to hum isay protect karte hain. Torso ko ghumana discomfort ko signal karta hai. Crossed arms ya samne objects pakarna jaisi arm barriers protective shields banati hain. Stress mein kandhay kaanoon ki taraf uthte hain." },
        { title: "Haathon Aur Unglion Ke Raaz", content: "Haath communication ke expressive tools hain. Unglion ko steeple karna confidence ko dikhata hai. Chhupay huay haath ya pockets mein thumbs tuck karna low confidence ko signal karta hai. Ziyada hand gestures excitement ya deception ko indicate kar sakte hain. Chehre ko touch karna aksar deception ke saath hota hai." },
        { title: "Chehra Aur Jhoot", content: "Chehra jism ka sab se ziyada manipulate kiya jane wala hissa hai. Log forced smiles kar sakte hain, lekin asli emotions pure chehre ko engage karte hain, khaastor par aankhen. Micro-expressions—chund second ke fleeting facial expressions—asli jazbaat reveal karte hain conscious mind ke mask karne se pehle." },
        { title: "Deception Ko Pehchaanna: Sab Kuch Joro", content: "Aik hi 'tell' deception sabit nahi karta. Behaviors ke clusters dhoondo: hand-wringing, throat-clearing, foot-tapping, aur gaze aversion mil kar high stress ko signal karte hain. Pehle behavioral baseline establish karo, phir ahem moments mein deviations dhoondo." }
      ],
      practicalLessons: [
        "Hamesha kisi ko parhne se pehle behavioral baseline establish karo. Dekho ke wo relax hone par kaise behave karta hai taake aap meaningful deviations pehchaan sakain.",
        "Pehle paon dekho. Wo asli iradon ko reveal karte hain kyun ke log unhe control karne ke baaray mein kam sochte hain. Darwazay ki taraf ishaara karte paon ka matlab hai ke koi jana chahta hai.",
        "Clusters dhoondo, isolated gestures nahi. Aik hand gesture ka koi matlab nahi. Multiple stress signals mil kar aik sahi tasveer paint karte hain.",
        "Context se waqif raho. Thanday haath iska matlab thanda kamra bhi ho sakta hai, nervousness nahi. Hamesha environmental conditions ko factor karo.",
        "Torso ka door jhukna discomfort ya disagreement ko indicate karta hai. Agar kisi ka torso baat karte waqt aap se door ho to wo fully engaged nahi hai.",
        "Asli smile mein aankhen involve hoti hain (crow's feet). Jhooti smile sirf munh ko engage karti hai. Emotions parhne ke liye eye muscles ko dekho.",
        "Unglion ko steeple karna confidence ka universal sign hai. Jab koi steeple kare baat karne ke baad, to wo apni baat se mutmain hai."
      ],
      quotes: [
        "Paon jism ke sab se sachay hissay hain. Wo aapke zehan mein jo kuch hai usay reflect karte hain.",
        "Log jhoot bolte hain, lekin jism hamesha sach batata hai agar aapko parhna aata ho.",
        "Nonverbal behaviors takreeban 60 se 65 percent interpersonal communication ko comprise karte hain aur sab se sacchi communication represent kar sakte hain.",
        "Comfort/discomfort nonverbal behavior interpret karne mein guiding principle hai. Hum un cheezon ki taraf jhukte hain jo humein pasand hain aur un se door hote hain jo nahi.",
        "Communication mein sab se ahem cheez woh sunna hai jo kaha nahi jata.",
        "Jab paon aur jism do mukhtalif directions mein hon, to paon bataenge ke shakhs asal mein kahan jana chahta hai."
      ]
    }
  },
  {
    id: "extreme-ownership",
    title: "Extreme Ownership",
    author: "Jocko Willink & Leif Babin",
    cover: "/covers/extreme-ownership.png",
    tagline: "How U.S. Navy SEALs lead and win",
    english: {
      summary: "Extreme Ownership is a leadership manual written by former U.S. Navy SEALs Jocko Willink and Leif Babin, who led the most highly decorated special operations unit of the Iraq War. The central thesis is radical: leaders must own everything in their world. There is no one else to blame. When missions fail, when teams underperform, when deadlines are missed—the leader bears full responsibility. Willink and Babin translate battlefield lessons into business and life principles through gripping combat stories followed by direct applications to corporate leadership.",
      keyChapters: [
        { title: "Extreme Ownership", content: "On any team, in any organization, all responsibility for success and failure rests with the leader. The leader must acknowledge mistakes, admit failures, and take ownership of them. Only then can the team correct problems and move forward. Leaders who blame others destroy trust and create toxic cultures." },
        { title: "No Bad Teams, Only Bad Leaders", content: "When leaders who have never met work with the same group of SEALs, the SEALs perform dramatically differently depending on the leader. This proves that leadership, not personnel, is the critical variable in team performance. A good leader transforms any group into a high-performing team." },
        { title: "Believe", content: "If frontline troops don't understand or believe in the mission, they will not execute with passion or commitment. Leaders must thoroughly understand the strategic picture and communicate the 'why' so passionately that their team believes completely in the mission's importance." },
        { title: "Check the Ego", content: "Ego clouds judgment, prevents learning, and destroys teams. The best leaders are confident but humble. They listen to subordinates, admit when they are wrong, and prioritize mission success over personal pride. Ego-driven decisions lead to disaster." },
        { title: "Cover and Move", content: "Teamwork is essential. Departments or individuals who operate in silos degrade overall performance. Every element must support every other element. When one team moves, another must cover. This applies to business divisions, project teams, and family units." },
        { title: "Decentralized Command", content: "Leaders must empower junior leaders to make decisions. A single leader cannot manage everything. Each subordinate leader must understand the overall mission and the commander's intent, then lead their own team with autonomy. This creates adaptable, resilient organizations." }
      ],
      practicalLessons: [
        "Take complete responsibility for every outcome in your life. Stop blaming circumstances, other people, or bad luck. Ownership is the first step to fixing any problem.",
        "When things go wrong, say 'It's my fault' before anyone else can assign blame. This builds trust and puts you in control of the solution.",
        "The leader eats last. Put the needs of your team before your own. When you take care of your people, they will move mountains for the mission.",
        "Explain the 'why' behind every task. People will endure any 'how' if they deeply believe in the 'why.' Purpose fuels perseverance.",
        "Keep your ego in check. The moment you think you have everything figured out, you stop learning. Arrogance is the enemy of growth.",
        "Lead up the chain of command as vigorously as you lead down. If your boss makes a bad decision, it is your responsibility to provide information and influence better outcomes.",
        "Simplicity is the ultimate sophistication. Complex plans fail under pressure. The best strategies are simple enough that every team member can execute them under stress."
      ],
      quotes: [
        "The only meaningful measure for a leader is whether the team succeeds or fails.",
        "Leaders must own everything in their world. There is no one else to blame.",
        "It is not what you preach, it's what you tolerate.",
        "The most fundamental and important truths at the heart of Extreme Ownership: there are no bad teams, only bad leaders.",
        "Ego is the enemy. Ego clouds judgment, prevents learning, and destroys teams.",
        "Discipline equals freedom. The more disciplined you are, the more freedom you will have.",
        "Cover and move: teamwork is the key to success. Teams must work together to accomplish the mission."
      ]
    },
    romanUrdu: {
      summary: "Extreme Ownership Jocko Willink aur Leif Babin ki likhi hui aik leadership manual hai, jo ke pehle U.S. Navy SEALs thay aur jinhon ne Iraq War ki sab se ziyada decorate ki gayi special operations unit ko lead kiya. Markazi thesis yeh hai ke leaders ko apni duniya mein har cheez ki zimmedari leni chahiye. Koi aur blame karne ke liye nahi. Jab missions fail hote hain, teams kam perform karti hain, ya deadlines miss hoti hain—leader poori zimmedari uthata hai. Willink aur Babin battlefield ki lessons ko business aur zindagi ke usoolon mein translate karte hain gripping combat stories ke zariye.",
      keyChapters: [
        { title: "Extreme Ownership", content: "Kisi bhi team mein, kisi bhi organization mein, kamyabi aur nakami ki tamam zimmedari leader ki hoti hai. Leader ko apni galtiyan tasleem karni chahiye, failures admit karne chahiye, aur unki zimmedari leni chahiye. Sirf tabhi team maslay theek kar sakti hai aur aagay barh sakti hai. Wo leaders jo doosron ko blame karte hain trust destroy karte hain aur toxic culture banate hain." },
        { title: "Koi Buri Team Nahi, Sirf Bura Leader Hota Hai", content: "Jab leaders jo kabhi mile nahi hain aik hi SEALs group ke saath kaam karte hain, to SEALs dramatically alag perform karte hain leader par depend karte hue. Yeh sabit karta hai ke leadership, personnel nahi, team performance mein critical variable hai. Aik achha leader kisi bhi group ko high-performing team mein badal deta hai." },
        { title: "Yaqeen Rakho", content: "Agar frontline troops mission ko nahi samajhte ya us par believe nahi karte, to wo passion ya commitment se execute nahi karenge. Leaders ko strategic picture thoroughly samajhna chahiye aur 'why' itni passionately communicate karna chahiye ke unki team mission ki ahmiyat par mukammal torr par believe karay." },
        { title: "Ego Ko Check Karo", content: "Ego judgment ko cloud karta hai, learning ko rokta hai, aur teams ko tabah karta hai. Behtareen leaders confident lekin humble hote hain. Wo subordinates ki suntay hain, jab galti ho to admit karte hain, aur personal pride se ziyada mission success ko tarjeeh dete hain. Ego-driven decisions disaster laati hain." },
        { title: "Cover Aur Move", content: "Teamwork zaroori hai. Departments ya individuals jo silos mein kaam karte hain overall performance degrade karte hain. Har element ko har dosray element ko support karna chahiye. Jab aik team move karti hai to doosri cover karni chahiye. Yeh business divisions, project teams, aur family units par bhi apply hota hai." },
        { title: "Decentralized Command", content: "Leaders ko junior leaders ko decisions lene ki taaqat deni chahiye. Aik leader sab kuch manage nahi kar sakta. Har subordinate leader ko overall mission aur commander's intent samajhna chahiye, phir apni team ko autonomy se lead karna chahiye. Yeh adaptable, resilient organizations banata hai." }
      ],
      practicalLessons: [
        "Apni zindagi mein har outcome ki mukammal zimmedari lo. Circumstances, doosron, ya bad luck ko blame karna chorro. Ownership kisi bhi maslay ko theek karne ka pehla qadam hai.",
        "Jab cheezein ghalat hon, kisi aur se pehle kaho 'Yeh meri galti hai.' Yeh trust banata hai aur aapko solution ka control deta hai.",
        "Leader sab se aakhri mein khata hai. Apni team ki zarooraton ko apni zarooraton se pehle rakho. Jab aap apne logon ka khayal rakhte hain to wo mission ke liye pahad hilaa denge.",
        "Har kaam ke peechay 'why' samjhayo. Log koi bhi 'how' bardasht kar lenge agar wo 'why' par deeply believe karte hain. Maqsad sabr ko fuel deta hai.",
        "Apne ego ko check mein rakho. Jis pal aap sochte hain ke aapne sab kuch samajh liya, usi pal aap seekhna chordete hain. Takabbur growth ka dushman hai.",
        "Up chain of command ko utni hi jur'at se lead karo jitni neechay. Agar aapka boss bura faisla kare to unhe behtar information dene aur behtar natayej influence karne ki zimmedari aapki hai.",
        "Sadagi ultimate sophistication hai. Complex plans dabaoo mein fail hoti hain. Behtareen strategies itni simple hoti hain ke har team member unhe stress mein execute kar sakay."
      ],
      quotes: [
        "Leader ke liye aik hi meaningful measure hai ke team kamyaab hoti hai ya nakam.",
        "Leaders ko apni duniya mein har cheez ki zimmedari leni chahiye. Blame karne ke liye koi aur nahi.",
        "Yeh nahi ke aap kya preach karte hain, balkay aap kya tolerate karte hain.",
        "Extreme Ownership ke dil mein sab se buniyaadi aur ahem sach: koi buri team nahi, sirf bura leader hota hai.",
        "Ego dushman hai. Ego judgment ko cloud karta hai, learning ko rokta hai, aur teams ko tabah karta hai.",
        "Discipline azadi ke barabar hai. Jitne ziyada disciplined aap honge, utni ziyada azadi aapko hogi.",
        "Cover aur move: teamwork kamyabi ki kunji hai. Teams ko mission poora karne ke liye mil kar kaam karna chahiye."
      ]
    }
  },
  {
    id: "laws-of-human-nature",
    title: "The Laws of Human Nature",
    author: "Robert Greene",
    cover: "/covers/laws-of-human-nature.jpg",
    tagline: "Master the hidden forces that drive people",
    english: {
      summary: "The Laws of Human Nature is Robert Greene's magnum opus on understanding what makes people tick. Drawing from psychology, philosophy, history, and evolutionary biology, Greene identifies 18 fundamental laws that govern human behavior. Each law is illustrated through vivid biographical stories of historical figures like Pericles, Coco Chanel, Howard Hughes, and Queen Elizabeth I. The book teaches you to read people's true intentions behind their masks, to understand your own dark side and irrational tendencies, to transform self-destructive emotions into constructive action, and to become a master of influence.",
      keyChapters: [
        { title: "Law 1: Master Your Emotional Self", content: "The Law of Irrationality. You like to imagine yourself in control of your fate, but you are highly susceptible to irrational emotions and impulses. Most people do not examine their emotions; they merely react. To master yourself, you must observe your own irrationality objectively and develop the ability to pause before reacting." },
        { title: "Law 4: Determine the Strength of People's Character", content: "The Law of Narcissism. All humans are narcissistic to varying degrees. Learn to read the signs of narcissism—need for attention, lack of empathy, grandiosity—and protect yourself from the more toxic varieties. The greatest danger comes from charming narcissists who hide their self-absorption." },
        { title: "Law 7: Crush Your Enemy Totally", content: "The Law of Envy. People rarely admit their envy, but it is everywhere. When you achieve success, you trigger comparison and resentment in others. Learn to deflect envy by appearing humble, sharing credit, and occasionally revealing flaws. Never underestimate the power of others' envy to sabotage you." },
        { title: "Law 11: Learn to Keep People Dependent on You", content: "The Law of Grandiosity. We all have a tendency to overestimate our abilities and achievements. This leads to overreaching, ignoring feedback, and spectacular falls. Maintain a realistic assessment of yourself through constant self-examination and the honest feedback of others." },
        { title: "Law 15: Confront Your Dark Side", content: "The Law of Repression. Each of us has a dark side with aggressive, selfish, and irrational impulses. The more we deny this shadow, the more it controls us in destructive ways. Acknowledge your dark qualities, integrate them consciously, and channel them into productive outlets." },
        { title: "Law 18: Think Far Ahead", content: "The Law of Shortsightedness. Humans have an innate bias toward the present. We react to immediate events while ignoring long-term consequences. Train yourself to think several moves ahead, anticipate future problems, and delay gratification. This is the ultimate strategic advantage." }
      ],
      practicalLessons: [
        "When someone angers you, do not react immediately. Count to ten, examine why you are triggered, and consider the strategic response rather than the emotional one.",
        "Everyone wears masks. Pay attention to what people do, not what they say. Actions reveal true character; words reveal desired perceptions.",
        "Your success will trigger envy in people you thought were friends. Learn to manage this by sharing credit, downplaying achievements, and staying approachable.",
        "Never trust someone who claims to have no dark side or no flaws. The people who deny their shadow are the most dangerous because they act it out unconsciously.",
        "Most people think about what they want right now. The strategic thinker thinks five years ahead. Develop the habit of asking: 'What will be the long-term effect of this decision?'",
        "The more you understand others' narcissism, the less personally you will take their behavior. Their need for attention, their tantrums, their manipulation—it is about them, not you.",
        "To influence people, appeal to their self-interest. Frame your requests in terms of what they will gain, not what you need. Everyone listens on the frequency of WIIFM—What's In It For Me."
      ],
      quotes: [
        "People tend to overestimate themselves, and this grandiosity is the source of much misery.",
        "Understand: people will constantly attack you in life. One of their main weapons will be to instill in you doubts about who you are.",
        "The greatest danger you face is not from the clearly malicious, but from the charming and the seductive.",
        "We all have a dark side, and if we don't acknowledge it, it will haunt us and lead to our ruin.",
        "Your emotional attitude to things will be the ultimate determiner of your success.",
        "There is no winning with some people. They are simply wired to be negative.",
        "Power is not what we do but what we do not—hasty and unwise actions are the ruin of power."
      ]
    },
    romanUrdu: {
      summary: "The Laws of Human Nature Robert Greene ki sab se barhi tasneef hai jo yeh samajhne par hai ke log kis tarah sochte aur behave karte hain. Psychology, philosophy, history, aur evolutionary biology se draw kar ke Greene ne 18 buniyaadi qaanoon identify kiye hain jo insani behavior ko govern karte hain. Har qaanoon ko Pericles, Coco Chanel, Howard Hughes, aur Queen Elizabeth I jaise tareekhi shakhsiyaton ki vivid biographical stories se illustrate kiya gaya hai.",
      keyChapters: [
        { title: "Qaanoon 1: Apne Emotional Self Par Qabu Karo", content: "Qaanoon Irrationality ka. Aap khud ko apne muqaddar ke control mein sochte hain, lekin aap irrational emotions aur impulses ke liye bohat susceptible hain. Aksar log apni emotions ko examine nahi karte; wo sirf react karte hain. Apne aap par qabu karne ke liye, aapko apni irrationality ko objectively observe karna hoga aur react karne se pehle pause karne ki salahiyat develop karni hogi." },
        { title: "Qaanoon 4: Logon Ki Character Ki Taqat Ka Taayun Karo", content: "Qaanoon Narcissism ka. Tamam insaan varying degrees par narcissistic hote hain. Narcissism ki nishaniyan—attention ki zaroorat, empathy ki kami, grandiosity—parhna seekho aur ziyada toxic varieties se apne aap ko bachao. Sab se barha khatra charming narcissists se aata hai jo apni self-absorption chhupate hain." },
        { title: "Qaanoon 7: Apne Dushman Ko Mukammal Torr Par Tabah Karo", content: "Qaanoon Hasad ka. Log kam hi apni hasad admit karte hain, lekin yeh har jagah hai. Jab aap kamyabi haasil karte hain, aap doosron mein comparison aur resentment trigger karte hain. Hasad ko deflect karna seekho humble dikh kar, credit share kar ke, aur kabhi kabhi flaws reveal kar ke. Doosron ki hasad ki taqat ko aapko nuqsaan pohanchane ke liye kabhi underestimate mat karo." },
        { title: "Qaanoon 11: Logon Ko Apne Par Dependent Rakho", content: "Qaanoon Grandiosity ka. Hum sab mein apni salahiyaton aur kaamiyabiyon ko overestimate karne ki tendency hoti hai. Yeh overreaching, feedback ignore karne, aur shandar girne ki taraf le jata hai. Constant self-examination aur doosron ki honest feedback ke zariye apne aap ki realistic assessment barqarar rakho." },
        { title: "Qaanoon 15: Apni Dark Side Ka Saamna Karo", content: "Qaanoon Repression ka. Hum mein se har aik ki aik dark side hai jis mein aggressive, selfish, aur irrational impulses hain. Jitni ziyada hum is shadow ko deny karte hain, utni ziyada yeh humein destructive tareeqon se control karti hai. Apni dark qualities ko tasleem karo, unhe consciously integrate karo, aur productive outlets mein channel karo." },
        { title: "Qaanoon 18: Door Ki Socho", content: "Qaanoon Shortsightedness ka. Insaan mein present ki taraf bias hota hai. Hum foran ki events par react karte hain jab ke long-term consequences ko ignore karte hain. Apne aap ko kai moves aagay sochne ki training do, mustaqbil ke masail ka andaza lagao, aur gratification delay karna seekho. Yeh ultimate strategic advantage hai." }
      ],
      practicalLessons: [
        "Jab koi aapko gussa dilaye, foran react mat karo. Das tak gino, socho ke aap trigger kyun hue hain, aur emotional response ke bajaye strategic response socho.",
        "Har koi mask pehanta hai. Logon ke actions par dhyaan do, unki zuban par nahi. Actions asli character reveal karte hain; words desired perceptions reveal karte hain.",
        "Aapki kamyabi un logon mein hasad trigger kare gi jinhe aap dost samajhte thay. Isay manage karna seekho credit share kar ke, achievements ko downplay kar ke, aur approachable reh kar.",
        "Kisi par bharosa mat karo jo daaway karta hai ke uski koi dark side ya flaws nahi. Jo log apni shadow ko deny karte hain wo sab se khatarnak hote hain kyun ke wo isay unconsciously act out karte hain.",
        "Aksar log sochte hain ke unhe abhi kya chahiye. Strategic thinker paanch saal aagay sochta hai. Yeh habit develop karo: 'Is faislay ka long-term effect kya hoga?'",
        "Jitni ziyada aap doosron ki narcissism samajhoge, utni kam personally aap unka behavior loge. Unki attention ki zaroorat, unke tantrums, unki manipulation—yeh unke baaray mein hai, aapke nahi.",
        "Logon ko influence karne ke liye unki self-interest ko appeal karo. Apni requests un terms mein frame karo jo wo haasil karenge, jo aapko chahiye uske nahi. Har koi WIIFM ki frequency par sunta hai—What's In It For Me."
      ],
      quotes: [
        "Log khud ko overestimate karne ki tendency rakhte hain, aur yeh grandiosity bohat se dukh ka bais hai.",
        "Samajh lo: log zindagi mein aapko bar bar hamla karenge. Unke sab se barhay weapons mein se aik yeh hoga ke aapko apni shanakht ke baaray mein doubts mein daalain.",
        "Sab se barha khatra jo aap face karte hain wo clearly malicious se nahi, balkay charming aur seductive se aata hai.",
        "Hum sab ki aik dark side hai, aur agar hum isay acknowledge nahi karte to yeh humein haunt kare gi aur tabahi ki taraf le jayegi.",
        "Cheezon ke liye aapka emotional attitude aapki kamyabi ka ultimate determiner hoga.",
        "Kuch logon ke saath jeetna namumkin hai. Wo simply negative hone ke liye wired hain.",
        "Taqat woh nahi jo hum karte hain balkay woh jo hum nahi karte—jaldi aur beja actions taqat ka zawal hain."
      ]
    }
  },
  {
    id: "psychology-of-money",
    title: "The Psychology of Money",
    author: "Morgan Housel",
    cover: "/covers/psychology-of-money.png",
    tagline: "Timeless lessons on wealth, greed, and happiness",
    english: {
      summary: "The Psychology of Money by Morgan Housel is a profound exploration of how our emotions, biases, and personal histories shape our financial decisions. Housel argues that doing well with money has little to do with intelligence and everything to do with behavior. A genius who loses control can go broke, while an ordinary person with good financial habits can build lasting wealth. Through 19 short stories, Housel examines the psychological forces that drive financial success and ruin.",
      keyChapters: [
        { title: "No One's Crazy", content: "People make financial decisions based on their unique life experiences, which represent a tiny fraction of what has happened in the world. Someone who grew up in the Great Depression views money differently than someone who grew up in the 1990s bull market. Your personal history is the lens through which you see all financial matters." },
        { title: "Luck & Risk", content: "Nothing is as good or as bad as it seems. Every outcome in life is guided by forces other than individual effort. Bill Gates had a one-in-a-million lucky break by attending one of the only schools with a computer. Recognize the role of luck in success and risk in failure to develop humility and compassion." },
        { title: "Never Enough", content: "The hardest financial skill is getting the goalpost to stop moving. Social comparison is a treadmill that never ends. When you define enough arbitrarily based on what others have, you will never have enough. Capitalism is great at generating wealth and terrible at telling you when to stop." },
        { title: "Confounding Compounding", content: "Wealth is created by suppressing what you could buy today in order to have more stuff and more options in the future. No amount of intellect can compete with the power of compounding over long time periods. Warren Buffett's $84 billion net worth came almost entirely after age 50, thanks to decades of compounding." },
        { title: "Wealth is What You Don't See", content: "Spending money to show people how much money you have is the fastest way to have less money. Rich is a current income. Wealth is hidden. It is the financial assets that have not yet been converted into stuff you can see. True wealth is the option to do what you want tomorrow." },
        { title: "Save Money", content: "The only factor you can control generates one of the only things that matters: building wealth is not about income or investment returns, it is about your savings rate. Personal savings can be created by spending less, wanting less, and caring less about what others think." }
      ],
      practicalLessons: [
        "Build a financial plan around your psychology, not optimistic projections. Know your own tendencies toward greed, fear, and impatience, and design systems that protect you from yourself.",
        "The highest form of wealth is the ability to wake up every morning and say 'I can do whatever I want today.' Money's greatest value is control over your time.",
        "Save money without a specific purchase in mind. Savings that are earmarked for something will get spent. Unlabeled savings become the foundation of wealth and optionality.",
        "Use money to gain control over your time, because not having control over your time is a powerful drag on happiness. The ability to do what you want, when you want, with who you want, is priceless.",
        "Accept that you will make financial mistakes. Everyone does. The goal is not perfection but avoiding catastrophic errors that wipe you out. Stay in the game.",
        "The most important part of every plan is planning on your plan not going according to plan. Build margins of safety into every financial decision.",
        "Define what 'enough' means for you, and resist the urge to move the goalpost. True freedom comes from wanting less, not having more."
      ],
      quotes: [
        "Doing well with money isn't necessarily about what you know. It's about how you behave.",
        "Money's greatest intrinsic value is its ability to give you control over your time.",
        "Wealth is the nice cars not purchased. The diamonds not bought. The watches not worn. The renovation postponed.",
        "The ability to do what you want, when you want, with who you want, for as long as you want, is priceless.",
        "Spending money to show people how much money you have is the fastest way to have less money.",
        "The hardest financial skill is getting the goalpost to stop moving.",
        "Your personal experiences with money make up maybe 0.00000001% of what's happened in the world, but maybe 80% of how you think the world works."
      ]
    },
    romanUrdu: {
      summary: "The Psychology of Money Morgan Housel ki aik gehraai se sochne par majboor karne wali kitaab hai jo explore karti hai ke hamare jazbaat, biases, aur zati tareekh kis tarah hamare financial decisions ko shape karte hain. Housel argue karta hai ke paise ke saath achha karna aqalmandi se kam aur behavior se ziyada related hai. Aik genius jo control kho de wo bankrupt ho sakta hai, jab ke aik aam insan jo achhi financial habits rakhta hai daulat bana sakta hai.",
      keyChapters: [
        { title: "Koi Bhi Paagal Nahi", content: "Log financial decisions apni zati life experiences ki buniyaad par lete hain, jo duniya mein hone walay ka aik chhota hissa hain. Jis ne Great Depression mein parwarish paayi wo paise ko alag tareeqay se dekhta hai us se jo 1990s bull market mein barha. Aapki zati tareekh wo lens hai jis se aap tamam financial masail dekhte hain." },
        { title: "Qismat & Khatra", content: "Koi bhi cheez itni achhi ya itni buri nahi jitni lagti hai. Zindagi mein har natija individual effort se ziyada forces ki wajah se guide hota hai. Bill Gates ko aik-in-a-million lucky break mila jab wo aik aise school gaya jahan computer tha. Kamyabi mein luck aur nakami mein risk ke role ko pehchan kar humility aur compassion develop karo." },
        { title: "Kabhi Bhi Kaafi Nahi", content: "Sab se mushkil financial skill goalpost ko rokna hai. Social comparison aik aisi treadmill hai jo kabhi nahi rukti. Jab aap 'kaafi' ko doosron ke paas jo kuch hai us par arbitrarily define karte hain, to aapke paas kabhi kaafi nahi hoga. Capitalism daulat paida karne mein azeem hai aur yeh batane mein bohat bura ke kab rukna hai." },
        { title: "Hairat Angez Compounding", content: "Daulat aaj wo kharidne se rok kar banayi jati hai jo mustaqbil mein ziyada cheezein aur ziyada options dila sakay. Koi bhi intellect compounding ki taqat se long time periods mein muqabla nahi kar sakta. Warren Buffett ka $84 billion net worth almost entirely 50 saal ki umar ke baad aaya, decades ki compounding ki wajah se." },
        { title: "Daulat Woh Hai Jo Aap Nahi Dekhte", content: "Logon ko dikhane ke liye paise kharch karne ka matlab sab se tezi se paise khatam karne ka tareeqa hai. Amiri aik current income hai. Daulat chhupi hoti hai. Yeh wo financial assets hain jo abhi tak un cheezon mein convert nahi hue jo aap dekh sakte hain. Asli daulat kal jo kuch bhi chahte hain karne ki option hai." },
        { title: "Paise Bachao", content: "Aik hi factor jis par aap control kar sakte hain wo aik aisi cheez paida karta hai jo matter karti hai: daulat banana income ya investment returns ke baaray mein nahi, balkay aapke savings rate ke baaray mein hai. Personal savings kam kharch kar ke, kam chaah kar, aur doosron ke khayalat ki parwah kam kar ke banayi ja sakti hain." }
      ],
      practicalLessons: [
        "Aik financial plan apni psychology ke gird banao, optimistic projections ke nahi. Apni khud ki greed, fear, aur impatience ki tendencies ko jano, aur aise systems design karo jo aapko apne aap se bachayen.",
        "Daulat ki sab se buland form yeh salahiyat hai ke roz subah uth kar kaha ja sakay 'Main aaj jo chahun kar sakta hoon.' Paise ki sab se barhi value aapke waqt par control hai.",
        "Baghair kisi specific kharid ke mann mein paise bachao. Jo savings kisi cheez ke liye marked hain wo kharch ho jayengi. Unlabeled savings daulat aur optionality ki buniyaad ban jati hain.",
        "Paise ka istemal apne waqt par control pane ke liye karo, kyun ke apne waqt par control na hona khushi par aik taqatwar drag hai. Yeh salahiyat ke aap jo chahain, jab chahain, aur jis ke saath chahain kar sakain, beqeemat hai.",
        "Qabool karo ke aap financial mistakes karenge. Har koi karta hai. Maqsad perfection nahi balkay catastrophic errors se bachna hai jo aapko tabah kar dein. Game mein bane raho.",
        "Har plan ka sab se ahem hissa yeh planning karna hai ke aapka plan plan ke mutabiq nahi jayega. Har financial decision mein safety margins banao.",
        "Apne liye 'kaafi' ka matlab define karo, aur goalpost move karne ki urge ko roko. Asli azadi kam chaahne se aati hai, ziyada paane se nahi."
      ],
      quotes: [
        "Paise ke saath achha karna zaroori nahi ke aap kya jante hain. Yeh is baaray mein hai ke aap kaise behave karte hain.",
        "Paise ki sab se barhi intrinsic value yeh hai ke wo aapko apne waqt par control deta hai.",
        "Daulat wo achhi gaariyan hain jo nahi kharidi gayi. Heere jo nahi khareede gaye. Ghariyan jo nahi pehni gayi. Renovation jo postpone ki gayi.",
        "Yeh salahiyat ke aap jo chahain, jab chahain, aur jis ke saath chahain kar sakain, jitni der chahain, beqeemat hai.",
        "Logon ko dikhane ke liye paise kharch karne ka matlab sab se tezi se paise khatam karne ka tareeqa hai.",
        "Sab se mushkil financial skill goalpost ko rokna hai.",
        "Aapke paise ke saath zati tajurbe shaayad duniya mein hone walay ka 0.00000001% hain, lekin shaayad 80% is tarah sochne ka bais hain ke duniya kaise kaam karti hai."
      ]
    }
  },
  {
    id: "charisma-myth",
    title: "The Charisma Myth",
    author: "Olivia Fox Cabane",
    cover: "/covers/charisma-myth.jpg",
    tagline: "How anyone can master the art of personal magnetism",
    english: {
      summary: "The Charisma Myth by Olivia Fox Cabane dismantles the idea that charisma is an innate, magical quality only possessed by a chosen few. Drawing on behavioral science, neuroscience, and extensive research, Cabane proves that charisma is a set of learned behaviors that anyone can master. The book breaks charisma into three core components: presence, power, and warmth. Cabane provides specific, actionable techniques to develop each component—from mental exercises that boost confidence to body language adjustments that project authority.",
      keyChapters: [
        { title: "Charisma Demystified", content: "Charisma is not a divine gift or a personality trait. It is a set of behaviors that create a specific perception in others' minds. These behaviors can be learned, practiced, and perfected. The three core elements—presence, power, and warmth—work together to create what we perceive as personal magnetism." },
        { title: "The Charisma of Presence", content: "The single most important aspect of charisma is presence. When you are fully present with someone, they feel valued and understood. Distraction destroys charisma instantly. Techniques like focusing on your toes, using mindful breathing, and maintaining eye contact create powerful presence." },
        { title: "The Charisma of Power", content: "Power charisma comes from the perception that you have the ability to affect the world. Body language is key: take up space, move slowly, gesture deliberately, and lower the intonation at the end of sentences. These behaviors signal confidence and authority to the subconscious mind." },
        { title: "The Charisma of Warmth", content: "Warmth charisma makes people feel accepted, understood, and safe. It comes from genuine goodwill and empathy. Smile with your eyes, not just your mouth. Use mirroring to create unconscious rapport. Show genuine curiosity about others' experiences and feelings." },
        { title: "Different Charisma Styles", content: "Focus charisma makes people feel heard and understood. Visionary charisma inspires with bold ideas. Kind charisma creates deep emotional bonds. Authority charisma commands respect through competence. Each style is appropriate for different situations and personalities." },
        { title: "Overcoming the Obstacles", content: "The biggest barriers to charisma are internal: self-doubt, anxiety, and negative self-talk. These create physical tension that others subconsciously read as discomfort. Learn to reframe physical sensations, use gratitude to shift mental states, and practice self-compassion to project authentic confidence." }
      ],
      practicalLessons: [
        "Charisma starts in the mind. Before entering any interaction, do a two-minute power pose or visualization exercise to shift your mental and physiological state toward confidence.",
        "The fastest way to increase presence is to focus entirely on the person in front of you. Put away your phone. Make eye contact. Listen to understand, not to respond.",
        "To project power, slow down. Fast movements and speech signal nervousness. Pause before speaking. Lower your voice at the end of sentences instead of turning statements into questions.",
        "Warmth is about making people feel safe. Use people's names frequently. Ask questions that show you care about their answers. Remember small details they shared and reference them later.",
        "When you feel anxious, do not try to suppress it. Reframe it as excitement. Your body produces the same physiological response for both—only your interpretation differs.",
        "Choose your charisma style based on the situation. Use authority charisma in crises, visionary charisma to inspire teams, kind charisma to build loyalty, and focus charisma to make individuals feel special.",
        "Charisma is not about being the center of attention. It is about making others feel like the center of attention when they are with you."
      ],
      quotes: [
        "Charisma is not a divine gift. It is a set of behaviors that can be learned, practiced, and perfected.",
        "The single most important aspect of charisma is presence. When you are fully present with someone, they feel valued and understood.",
        "People will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
        "Your body language does not merely reflect your internal state; it also creates it.",
        "Charisma is not about being the most outgoing person in the room. It is about making others feel like the most important person in the room.",
        "Warmth is the perception of goodwill. Without warmth, power becomes intimidation.",
        "The biggest barriers to charisma are internal. When you feel confident and comfortable, others feel confident and comfortable around you."
      ]
    },
    romanUrdu: {
      summary: "The Charisma Myth Olivia Fox Cabane ki aik behtareen kitaab hai jo yeh idea ko torrti hai ke charisma aik janam-jati, jadooi quality hai jo sirf chuninda logon ke paas hai. Behavioral science, neuroscience, aur extensive research se draw kar ke Cabane yeh sabit karti hai ke charisma seekhi hue behaviors ka aik set hai jo koi bhi master kar sakta hai. Kitaab charisma ko teen core components mein torrti hai: presence, power, aur warmth.",
      keyChapters: [
        { title: "Charisma Ka Raaz Kholna", content: "Charisma koi divine gift ya personality trait nahi hai. Yeh behaviors ka aik set hai jo doosron ke zehan mein aik specific perception paida karta hai. In behaviors ko seekha ja sakta hai, practice kiya ja sakta hai, aur perfect kiya ja sakta hai. Teen core elements—presence, power, aur warmth—mila kar woh personal magnetism banate hain jo hum perceive karte hain." },
        { title: "Presence Ki Charisma", content: "Charisma ka sab se ahem pehlu presence hai. Jab aap kisi ke saath mukammal torr par present hon, to wo mehsoos karta hai ke usay value aur samjha ja raha hai. Distraction foran charisma tabah kar deti hai. Apne paanv par dhyaan dena, mindful breathing, aur eye contact maintain karna jaise techniques powerful presence banati hain." },
        { title: "Power Ki Charisma", content: "Power charisma us perception se aati hai ke aap duniya ko affect karne ki salahiyat rakhte hain. Body language ahem hai: ziyada jagah lo, aahista chalo, jaan-boojh kar gestures karo, aur jumlon ke end par intonation neeche karo. Yeh behaviors subconscious mind ko confidence aur authority signal karte hain." },
        { title: "Warmth Ki Charisma", content: "Warmth charisma logon ko accepted, understood, aur safe mehsoos karwati hai. Yeh genuine goodwill aur empathy se aati hai. Apni aankhon se muskurao, sirf munh se nahi. Unconscious rapport banane ke liye mirroring istemal karo. Doosron ke tajurbon aur jazbaat ke baaray mein genuine curiosity dikhao." },
        { title: "Mukhtalif Charisma Styles", content: "Focus charisma logon ko suna aur samjha hua mehsoos karwati hai. Visionary charisma bold ideas se inspire karti hai. Kind charisma gehre emotional bonds banati hai. Authority charisma competence ke zariye izzat command karti hai. Har style alag situations aur personalities ke liye appropriate hai." },
        { title: "Rukawaton Par Qabu Pana", content: "Charisma ke sab se barhay barriers internal hain: self-doubt, anxiety, aur negative self-talk. Yeh physical tension paida karte hain jo doosre subconsciously discomfort ke torr par parh lete hain. Physical sensations ko reframe karna, mental states change karne ke liye gratitude istemal karna, aur authentic confidence project karne ke liye self-compassion practice karna seekho." }
      ],
      practicalLessons: [
        "Charisma zehan mein shuru hoti hai. Kisi bhi interaction mein dakhil hone se pehle, do-minute ka power pose ya visualization exercise karo taake aapka mental aur physiological state confidence ki taraf shift ho.",
        "Presence barhane ka sab se tez tareeqa yeh hai ke saamne wale shakhs par mukammal torr par dhyaan do. Apna phone rakh do. Eye contact karo. Sirf jawab dene ke liye nahi, samajhne ke liye suno.",
        "Power project karne ke liye, aahista karo. Tez harkatein aur tez bolna nervousness signal karta hai. Bolne se pehle pause lo. Apni awaz neeche karo jumlon ke end par, sawal banane ke bajaye bayan rakho.",
        "Warmth logon ko mehfooz mehsoos karwane ke baaray mein hai. Logon ke naam bar bar istemal karo. Aise sawal poochho jo dikhayen ke aap unke jawabon ki parwah karte hain. Chhoti details yaad rakho jo unhon ne batayi thi aur baad mein unka zikr karo.",
        "Jab ghabrahat mehsoos ho to isay dabaane ki koshish mat karo. Isay excitement ke torr par reframe karo. Aapka jism donon ke liye same physiological response paida karta hai—sirf aapki interpretation alag hai.",
        "Apni charisma style situation ke hisaab se chuno. Crises mein authority charisma istemal karo, teams ko inspire karne ke liye visionary charisma, loyalty banane ke liye kind charisma, aur individuals ko special mehsoos karwane ke liye focus charisma.",
        "Charisma dhyaan ka markaz banne ke baaray mein nahi. Yeh is baaray mein hai ke doosron ko yeh mehsoos karwaya jaye ke jab wo aap ke saath hain to wo dhyaan ka markaz hain."
      ],
      quotes: [
        "Charisma koi divine gift nahi. Yeh behaviors ka aik set hai jo seekha ja sakta hai, practice kiya ja sakta hai, aur perfect kiya ja sakta hai.",
        "Charisma ka sab se ahem pehlu presence hai. Jab aap kisi ke saath mukammal torr par present hon, to wo mehsoos karta hai ke usay value aur samjha ja raha hai.",
        "Log bhool jayenge ke aap ne kya kaha, log bhool jayenge ke aap ne kya kiya, lekin log kabhi nahi bhoolenge ke aap ne unhe kaise mehsoos karwaya.",
        "Aapki body language sirf aapke internal state ko reflect nahi karti; yeh usay create bhi karti hai.",
        "Charisma kamre mein sab se ziyada outgoing shakhs banne ke baaray mein nahi. Yeh is baaray mein hai ke doosron ko yeh mehsoos karwaya jaye ke wo kamre mein sab se ahem shaksh hain.",
        "Warmth goodwill ka perception hai. Warmth ke baghair power intimidation ban jati hai.",
        "Charisma ke sab se barhay barriers internal hain. Jab aap confident aur comfortable mehsoos karte hain, to doosre aap ke gird confident aur comfortable mehsoos karte hain."
      ]
    }
  },
  {
    id: "cant-hurt-me",
    title: "Can't Hurt Me",
    author: "David Goggins",
    cover: "/covers/cant-hurt-me.jpg",
    tagline: "Master your mind and defy the odds",
    english: {
      summary: "Can't Hurt Me is the astonishing memoir of David Goggins, a man who transformed himself from a depressed, overweight exterminator into a U.S. Armed Forces icon and one of the world's top endurance athletes. Goggins shares his brutal, unvarnished story of childhood poverty, prejudice, and physical abuse, and how he used these hardships as fuel to become the only member of the U.S. Armed Forces to complete SEAL training, U.S. Army Ranger School, and Air Force Tactical Air Controller training. The book introduces the '40% Rule'—when your mind tells you that you are done, you are actually only at 40% of your potential. Goggins dismantles the excuses that hold people back and provides a raw, unfiltered blueprint for mental toughness.",
      keyChapters: [
        { title: "I Should Have Been a Statistic", content: "Goggins describes his brutal childhood: a father who beat him and his mother, systemic racism, learning disabilities, and poverty. Statistically, he should have ended up in prison or dead. Instead, he used the pain as fuel to prove that environment does not determine destiny." },
        { title: "Truth Hurts", content: "At age 24, Goggins was 300 pounds and spraying for cockroaches. A documentary about Navy SEALs sparked something in him. He faced the truth about his life: he was lazy, making excuses, and living far below his potential. The first step to change is brutal honesty with yourself." },
        { title: "The Accountability Mirror", content: "Goggins wrote his insecurities and weaknesses on sticky notes and plastered them on his bathroom mirror. Every morning and night, he confronted who he actually was. The Accountability Mirror forces you to stop lying to yourself and take ownership of your flaws." },
        { title: "Taking Souls", content: "When Goggins entered SEAL training, he was not the strongest or fastest. But he refused to quit. 'Taking souls' means outperforming everyone around you when they are ready to quit. It means being the hardest worker in the room, every single day." },
        { title: "The 40% Rule", content: "When your mind says you are done, you are only at 40% of your capability. Your mind is designed to protect you from discomfort, not to help you reach your potential. Push past the mental barriers and you will discover reservoirs of strength you never knew existed." },
        { title: "Callusing the Mind", content: "Just as you build calluses on your hands through hard work, you must build calluses on your brain by facing suffering. Seek out discomfort deliberately. Do things that scare you. Every time you push through, your mental toughness grows thicker." }
      ],
      practicalLessons: [
        "Stop making excuses. Your bad childhood, your genetics, your circumstances—none of these determine your future. You are responsible for who you become.",
        "Face the truth about yourself. Look in the mirror and confront your weaknesses without flinching. You cannot improve what you refuse to acknowledge.",
        "When you think you are done, you are only at 40% of your potential. Your mind creates false limits to protect you. Break through them to discover your true capacity.",
        "Do something that sucks every single day. Deliberately embrace discomfort to build mental calluses. The more you suffer in training, the less you suffer in life.",
        "Be the hardest worker in every room. Outwork everyone, not because you are naturally gifted, but because you refuse to be outworked.",
        "Use the 'Accountability Mirror.' Write your flaws on paper and confront them daily. Brutal honesty is the foundation of all transformation.",
        "Your obstacles are your path. Every challenge, every failure, every setback is an opportunity to grow stronger. Embrace the suck."
      ],
      quotes: [
        "You are in danger of living a life so comfortable and soft, that you will die without ever realizing your true potential.",
        "The most important conversation you'll ever have is the one you have with yourself.",
        "When you think you're done, you're only at 40% of your body's capability.",
        "Suffering is the true test of life. It is the great filter that separates the strong from the weak.",
        "Don't stop when you're tired. Stop when you're done.",
        "In order for me to be the person that I wanted to become, I needed to go through the suffering.",
        "It's possible to transcend anything that doesn't kill you."
      ]
    },
    romanUrdu: {
      summary: "Can't Hurt Me David Goggins ki aik hairat angez memoir hai, aik shakhs ki jo apne aap ko aik depressed, overweight exterminator se U.S. Armed Forces icon aur duniya ke sab se top endurance athletes mein badal chuka hai. Goggins apni brutal, unvarnished kahani share karta hai—bachpan ki poverty, prejudice, aur physical abuse, aur kaise unhon ne in mushkilon ko fuel banaya taake U.S. Armed Forces ke aik hi member ban sake jis ne SEAL training, U.S. Army Ranger School, aur Air Force Tactical Air Controller training complete ki. Kitaab '40% Rule' introduce karti hai—jab aapka zehan kehta hai ke aap done hain, to aap actually sirf 40% apni potential par hain. Goggins un excuses ko torrta hai jo logon ko peechay rakhte hain aur mental toughness ka aik raw, unfiltered blueprint provide karta hai.",
      keyChapters: [
        { title: "Main Aik Statistic Hona Chahiye Tha", content: "Goggins apna brutal bachpan bayan karta hai: aik baap jo unhe aur unki maa ko maarta tha, systemic racism, learning disabilities, aur poverty. Statistically, unhe jail ya maut honi chahiye thi. Iske bajaye, unhon ne dard ko fuel banaya yeh prove karne ke liye ke mahol muqaddar tay nahi karta." },
        { title: "Sach Dukh Deta Hai", content: "24 saal ki umar mein, Goggins 300 pounds tha aur cockroach spray karta tha. Navy SEALs par aik documentary ne unmein kuch jagaaya. Unhon ne apni zindagi ka saamna kiya: wo lazy thay, excuses bana rahe thay, aur apni potential se bohat neechay zindagi guzar rahe thay. Tabdeeli ka pehla qadam khud ke saath brutal honesty hai." },
        { title: "Accountability Mirror", content: "Goggins ne apni insecurities aur weaknesses ko sticky notes par likha aur apne bathroom ke aaine par chipka diya. Har subah aur raat, unhon ne saamna kiya us shakhs ka jo wo asal mein thay. Accountability Mirror aapko apne aap se jhoot bolne se rokta hai aur aapki flaws ki zimmedari lene par majboor karta hai." },
        { title: "Roohain Lena", content: "Jab Goggins SEAL training mein dakhil hue, wo sab se mazboot ya tez nahi thay. Lekin unhon ne quit karna refuse kar diya. 'Roohain lena' ka matlab hai ke jab sab quit karne ke liye tayyar hon to aap sab se ziyada perform karo. Iska matlab hai ke har roz kamre mein sab se ziyada mehnat karne wala shakhs bano." },
        { title: "40% Rule", content: "Jab aapka zehan kehta hai ke aap done hain, to aap sirf 40% apni salahiyat par hain. Aapka zehan aapko discomfort se bachane ke liye design hua hai, aapki potential tak pohanchane ke liye nahi. Mental barriers torro aur aap wo taqat ke reservoirs discover karoge jinke baaray mein aap ne kabhi nahi jana tha." },
        { title: "Zehan Ko Callus Karna", content: "Jis tarah mehnat se haathon par calluses bante hain, usi tarah aapko apne zehan par calluses banane hain takleef ka saamna kar kar. Jaan-boojh kar discomfort talash karo. Wo cheezein karo jo aapko darati hain. Har bar jab aap guzarte hain, aapki mental toughness moti hoti jati hai." }
      ],
      practicalLessons: [
        "Excuses banana chorro. Aapka bura bachpan, aapki genetics, aapke circumstances—in mein se koi bhi aapka mustaqbil tay nahi karta. Aap zimmedar hain ke aap kis ban jate hain.",
        "Khud ke baaray mein sach ka saamna karo. Aaine mein dekho aur apni kamzoriyon ko baghair jhijhak ke saamno. Aap us cheez ko behtar nahi kar sakte jisay aap tasleem karnay se inkar karte hain.",
        "Jab aap sochte hain ke aap done hain, to aap sirf 40% apni potential par hain. Aapka zehan jhooti limits banata hai aapko bachane ke liye. Unhen torro apni asli capacity discover karne ke liye.",
        "Roz kuch aisa karo jo burha lage. Jaan-boojh kar discomfort ko gale lagao taake mental calluses ban saken. Jitni ziyada aap training mein suffer karte hain, utni kam zindagi mein suffer karte hain.",
        "Har kamre mein sab se ziyada mehnat karne wala shakhs bano. Sab se ziyada kaam karo, isliye nahi ke aap naturally gifted hain, balkay isliye ke aapko outwork karne ka refuse karte hain.",
        "'Accountability Mirror' istemal karo. Apni flaws ko paper par likho aur roz unka saamna karo. Brutal honesty tamam transformation ki buniyaad hai.",
        "Aapki rukawatein aapka rasta hain. Har challenge, har failure, har setback aapko mazboot banane ka mauqa hai. Takleef ko gale lagao."
      ],
      quotes: [
        "Aap aik aisi zindagi jeene ke khatre mein hain jo itni comfortable aur soft ho ke aap bina kabhi apni asli potential realize kiye mar jayenge.",
        "Sab se ahem conversation jo aap kabhi karenge wo woh hai jo aap khud se karte hain.",
        "Jab aap sochte hain ke aap done hain, to aap sirf 40% apne jism ki salahiyat par hain.",
        "Takleef zindagi ka asli imtehaan hai. Yeh wo barha filter hai jo mazboot ko kamzor se alag karta hai.",
        "Thakne par mat ruko. Jab done ho tab ruko.",
        "Jis shakhs ko main banana chahta tha uske liye, mujhe takleef se guzarna tha.",
        "Jo kuch aapko nahi maarta, us se guzarna mumkin hai."
      ]
    }
  }
];

export function getBookById(id: string): Book | undefined {
  return books.find((book) => book.id === id);
}
