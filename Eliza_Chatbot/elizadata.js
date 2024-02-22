// data for elizabot.js
// entries prestructured as layed out in Weizenbaum's description 
// [cf: Communications of the ACM, Vol. 9, #1 (January 1966): p 36-45.]

var elizaInitials = [
// "How do you do.  Please tell me your problem.",
// // additions (not original)
// "Please tell me what's been bothering you.",
// "Is something troubling you ?"
  "How do ye do. Please tell me yer problem.",
  "Please tell me wha''s been botherin' ye.",
  "Be somethin' troublin' ye ?"
];

var elizaFinals = [
// "Goodbye.  It was nice talking to you.",
// // additions (not original)
// "Goodbye.  This was really a nice talk.",
// "Goodbye.  I'm looking forward to our next session.",
// "This was a good session, wasn't it -- but time is over now.   Goodbye.",
// "Maybe we could discuss this moreover in our next session ?   Goodbye."
  "Goodbye. 'twas nice natterin' t' ye.",
  "Goodbye. This was mighty a nice natter.",
  "Goodbye. I be lookin' fore t' our next session.",
  "This was a good session, wasn't it -- but time be o'er now. Fair winds t' ye.",
  // "Maybe we could discuss this moreover in our next session? Fair winds t' ye."
];

var elizaQuits = [
"bye",
"goodbye",
"done",
"exit",
"quit"
];

var elizaPres = [
"dont", "don't",
"cant", "can't",
"wont", "won't",
"recollect", "remember",
"recall", "remember",
"dreamt", "dreamed",
"dreams", "dream",
"maybe", "perhaps",
"certainly", "yes",
"machine", "computer",
"machines", "computer",
"computers", "computer",
"were", "was",
"you're", "you are",
"i'm", "i am",
"same", "alike",
"identical", "alike",
"equivalent", "alike"
];

var elizaPosts = [
"am", "are",
"your", "my",
"me", "you",
"myself", "yourself",
"yourself", "myself",
"i", "you",
"you", "I",
"my", "your",
"i'm", "you are"
];

var elizaSynons = {
"be": ["am", "is", "are", "was"],
"belief": ["feel", "think", "believe", "wish"],
"cannot": ["can't"],
"desire": ["want", "need"],
"everyone": ["everybody", "nobody", "noone"],
"family": ["mother", "mom", "father", "dad", "sister", "brother", "wife", "children", "child"],
"happy": ["elated", "glad", "better"],
"sad": ["unhappy", "depressed", "sick"]
};

var elizaKeywords = [

/*
  Array of
  ["<key>", <rank>, [
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]],
    ["<decomp>", [
      "<reasmb>",
      "<reasmb>",
      "<reasmb>"
    ]]
  ]]
*/

["xnone", 0, [
 ["*", [
    //  "I'm not sure I understand you fully.",
    //  "Please go on.",
    //  "What does that suggest to you ?",
    //  "Do you feel strongly about discussing such things ?",
    //  "That is interesting.  Please continue.",
    //  "Tell me more about that.",
    //  "Does talking about this bother you ?"
    "I be nah sure I understand ye fully.",
    // "Please go on.",
    "Wha' does that suggest t' ye ?",
    "Do ye feel strongly about discussin' such things ?",
    "That be interestin'. Please continue.",
    "Does natterin' about this bother ye ?"
  ]]
]],
["sorry", 0, [
 ["*", [
    //  "Please don't apologise.",
    //  "Apologies are not necessary.",
    //  "I've told you that apologies are not required.",
    //  "It did not bother me.  Please continue."
    // "Please don't apologise.",
    "Apologies are nah necessary.",
    "I've told ye that apologies are nah required.",
    "It didn' bother me. Please continue."
  ]]
]],
["apologise", 0, [
 ["*", [
     "goto sorry"
  ]]
]],
["remember", 5, [
 ["* i remember *", [
    //  "Do you often think of (2) ?",
    //  "Does thinking of (2) bring anything else to mind ?",
    //  "What else do you recollect ?",
    //  "Why do you remember (2) just now ?",
    //  "What in the present situation reminds you of (2) ?",
    //  "What is the connection between me and (2) ?",
    //  "What else does (2) remind you of ?"
    "Do ye often reckon o' (2) ?",     "Does thinkin' o' (2) bring anythin' else t' mind ?",     "Wha' else do ye recollect ?",     "Why do ye remember (2) jus' now ?",     "Wha' in the present situation reminds ye o' (2) ?",     "Wha' be the connection between me 'n (2) ?",     "Wha' else does (2) remind ye o' ?"
  ]],
 ["* do you remember *", [
    //  "Did you think I would forget (2) ?",
    //  "Why do you think I should recall (2) now ?",
    //  "What about (2) ?",
    //  "goto what",
    //  "You mentioned (2) ?"
    "Did ye reckon I would forget (2) ?",     "Why do ye reckon I shall recall (2) now ?",     "Wha' about (2) ?",     "goto what",     "Ye mentioned (2) ?"
  ]],
 ["* you remember *", [
    // "How could I forget (2) ?",
    // "What about (2) should I remember ?",
    // "goto you"
    "How could I forget (2) ?",    "Wha' about (2) shall I remember ?",    "goto you"
  ]]
]],
["forget", 5, [
 ["* i forget *", [
    //  "Can you think of why you might forget (2) ?",
    //  "Why can't you remember (2) ?",
    //  "How often do you think of (2) ?",
    //  "Does it bother you to forget that ?",
    //  "Could it be a mental block ?",
    //  "Are you generally forgetful ?",
    //  "Do you think you are suppressing (2) ?"
    "Can ye reckon o' why ye might forget (2) ?",     "Why can nah ye remember (2) ?",     "How often do ye reckon o' (2) ?",     "Does it bother ye t' forget that ?",     "Could it be a mental block ?",     "Are ye generally forgetful ?",     "Do ye reckon ye be suppressin' (2) ?"
  ]],
 ["* did you forget *", [
    //  "Why do you ask ?",
    //  "Are you sure you told me ?",
    //  "Would it bother you if I forgot (2) ?",
    //  "Why should I recall (2) just now ?",
    //  "goto what",
    //  "Tell me more about (2)."
    "Why do ye ask ?",     "Are ye sure ye told me ?",     "Would it bother ye if I forgot (2) ?",     "Why shall I recall (2) jus' now ?",     "goto wha'",     "Tell me more about (2)."
  ]]
]],
["if", 3, [
 ["* if *", [
    //  "Do you think it's likely that (2) ?",
    //  "Do you wish that (2) ?",
    //  "What do you know about (2) ?",
    //  "Really, if (2) ?",
    //  "What would you do if (2) ?",
    //  "But what are the chances that (2) ?",
    //  "What does this speculation lead to ?"
    "Do ye reckon it's likely that (2) ?",     "Do ye wish that (2) ?",     "Wha' do ye know about (2) ?",     "Mighty, if (2) ?",     "Wha' would ye do if (2) ?",     "But wha' are the chances that (2) ?",     "Wha' does this speculation lead t' ?"
  ]]
]],
["dreamed", 4, [
 ["* i dreamed *", [
    //  "Really, (2) ?",
    //  "Have you ever fantasized (2) while you were awake ?",
    //  "Have you ever dreamed (2) before ?",
    //  "goto dream"
     "Mighty, (2) ?",     "'ave ye ever fantasized (2) while ye we be awake ?",     "'ave ye ever dreamed (2) afore ?",     "goto dream"
  ]]
]],
["dream", 3, [
 ["*", [
    //  "What does that dream suggest to you ?",
    //  "Do you dream often ?",
    //  "What persons appear in your dreams ?",
    //  "Do you believe that dreams have something to do with your problem ?"
    "Wha' does that dream suggest t' ye ?",     "Do ye dream often ?",     "Wha' persons appear in yer dreams ?",     "Do ye believe that dreams 'ave somethin' t' do wit' yer problem ?"
  ]]
]],
["perhaps", 0, [
 ["*", [
    //  "You don't seem quite certain.",
    //  "Why the uncertain tone ?",
    //  "Can't you be more positive ?",
    //  "You aren't sure ?",
    //  "Don't you know ?",
    //  "How likely, would you estimate ?"
    "Ye don't seem quite certain.",     "Why the uncertain tone ?",     "Can nah ye be more positive ?",     "Ye aren't sure ?",     "Don't ye know ?",     "How likely, would ye estimate ?"
  ]]
]],
["name", 15, [
 ["*", [
    //  "I am not interested in names.",
    //  "I've told you before, I don't care about names -- please continue."
    "I am nah interested in names.",     "I've told ye afore, I don't care about names."
  ]]
]],
["deutsch", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand German."
  ]]
]],
["francais", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand French."
  ]]
]],
["italiano", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Italian."
  ]]
]],
["espanol", 0, [
 ["*", [
     "goto xforeign",
     "I told you before, I don't understand Spanish."
  ]]
]],
["xforeign", 0, [
 ["*", [
     "I speak only English."
  ]]
]],
["hello", 0, [
 ["*", [
    //  "How do you do.  Please state your problem.",
    //  "Hi.  What seems to be your problem ?"
    "How do ye do.  Please state yer problem.",     "Ahoy.  Wha' seems t' be yer problem ?"
  ]]
]],
["computer", 50, [
 ["*", [
    //  "Do computers worry you ?",
    //  "Why do you mention computers ?",
    //  "What do you think machines have to do with your problem ?",
    //  "Don't you think computers can help people ?",
    //  "What about machines worries you ?",
    //  "What do you think about machines ?",
    //  "You don't think I am a computer program, do you ?"
    "Do computers worry ye ?",     "Why do ye mention computers ?",     "Wha' do ye reckon machines 'ave t' do wit' yer problem ?",     "Don't ye reckon computers can help scallywags ?",     "Wha' about machines worries ye ?",     "Wha' do ye reckon about machines ?",     "Ye don't reckon I am a computer program, do ye ?"
  ]]
]],
["am", 0, [
 ["* am i *", [
    //  "Do you believe you are (2) ?",
    //  "Would you want to be (2) ?",
    //  "Do you wish I would tell you you are (2) ?",
    //  "What would it mean if you were (2) ?",
    //  "goto what"
    "Do ye believe ye be (2) ?",     "Would ye wants t' be (2) ?",     "Do ye wish I would tell ye ye be (2) ?",     "Wha' would it mean if ye we be (2) ?",     "goto what"
  ]],
 ["* i am *", [
     "goto i"
  ]],
 ["*", [
    //  "Why do you say 'am' ?",
    //  "I don't understand that."
    "Why do ye say 'am' ?",     "I don't understand that."
  ]]
]],
["are", 0, [
 ["* are you *", [
    //  "Why are you interested in whether I am (2) or not ?",
    //  "Would you prefer if I weren't (2) ?",
    //  "Perhaps I am (2) in your fantasies.",
    //  "Do you sometimes think I am (2) ?",
    //  "goto what",
    //  "Would it matter to you ?",
    //  "What if I were (2) ?"
    "Why are ye interested in whether I am (2) or nah ?",     "Would ye prefer if I weren't (2) ?",     "Perhaps I am (2) in yer fantasies.",     "Do ye sometimes reckon I am (2) ?",     "goto what",     "Would it matter t' ye ?",     "Wha' if I we be (2) ?"
  ]],
 ["* you are *", [
     "goto you"
  ]],
 ["* are *", [
    //  "Did you think they might not be (2) ?",
    //  "Would you like it if they were not (2) ?",
    //  "What if they were not (2) ?",
    //  "Are they always (2) ?",
    //  "Possibly they are (2).",
    //  "Are you positive they are (2) ?"
    "Did ye reckon they might nah be (2) ?",     "Would ye like it if they we be nah (2) ?",     "Wha' if they we be nah (2) ?",     "Are they always (2) ?",     "Possibly they be (2).",     "Are ye positive they be (2) ?"
  ]]
]],
["your", 0, [
 ["* your *", [
    //  "Why are you concerned over my (2) ?",
    //  "What about your own (2) ?",
    //  "Are you worried about someone else's (2) ?",
    //  "Really, my (2) ?",
    //  "What makes you think of my (2) ?",
    //  "Do you want my (2) ?"
    "Why are ye concerned o'er me (2) ?",     "Wha' about yer owns (2) ?",     "Are ye worried about someone else's (2) ?",     "Mighty, me (2) ?",     "Wha' makes ye reckon o' me (2) ?",     "Do ye wants me (2) ?"
  ]]
]],
["was", 2, [
 ["* was i *", [
    //  "What if you were (2) ?",
    //  "Do you think you were (2) ?",
    //  "Were you (2) ?",
    //  "What would it mean if you were (2) ?",
    //  "What does ' (2) ' suggest to you ?",
    //  "goto what"
    "Wha' if ye we be (2) ?",     "Do ye reckon ye we be (2) ?",     "We be ye (2) ?",     "Wha' would it mean if ye we be (2) ?",     "Wha' does ' (2) ' suggest t' ye ?",     "goto what"
  ]],
 ["* i was *", [
    //  "Were you really ?",
    //  "Why do you tell me you were (2) now ?",
    //  "Perhaps I already know you were (2)."
    "We be ye mighty ?",     "Why do ye tell me ye we be (2) now ?",     "Perhaps I already know ye we be (2)."
  ]],
 ["* was you *", [
    //  "Would you like to believe I was (2) ?",
    //  "What suggests that I was (2) ?",
    //  "What do you think ?",
    //  "Perhaps I was (2).",
    //  "What if I had been (2) ?"
    "Would ye like t' believe I was (2) ?",     "Wha' suggests that I was (2) ?",     "Wha' do ye reckon ?",     "Perhaps I was (2).",     "Wha' if I had been (2) ?"
  ]]
]],
["i", 0, [
 ["* i @desire *", [
    //  "What would it mean to you if you got (3) ?",
    //  "Why do you want (3) ?",
    //  "Suppose you got (3) soon.",
    //  "What if you never got (3) ?",
    //  "What would getting (3) mean to you ?",
    //  "What does wanting (3) have to do with this discussion ?"
    "Wha' would it mean t' ye if ye got (3) ?",     "Why do ye wants (3) ?",     "Suppose ye got (3) soon.",     "Wha' if ye ne'er got (3) ?",     "Wha' would gettin' (3) mean t' ye ?",     "Wha' does wantin' (3) 'ave t' do wit' this discussion ?"
  ]],
 ["* i am* @sad *", [
    //  "I am sorry to hear that you are (3).",
    //  "Do you think coming here will help you not to be (3) ?",
    //  "I'm sure it's not pleasant to be (3).",
    //  "Can you explain what made you (3) ?"
    "I am sorry t' hear that ye be (3).",     "Do ye reckon comin' here will help ye nah t' be (3) ?",     "I be sure 'tisn't pleasant t' be (3).",     "Can ye explain wha' made ye (3) ?"
  ]],
 ["* i am* @happy *", [
    //  "How have I helped you to be (3) ?",
    //  "Has your treatment made you (3) ?",
    //  "What makes you (3) just now ?",
    //  "Can you explain why you are suddenly (3) ?"
    "How 'ave I helped ye t' be (3) ?",     "Has yer treatment made ye (3) ?",     "Wha' makes ye (3) jus' now ?",     "Can ye explain why ye be suddenly (3) ?"
  ]],
 ["* i was *", [
     "goto was"
  ]],
 ["* i @belief i *", [
    //  "Do you really think so ?",
    //  "But you are not sure you (3).",
    //  "Do you really doubt you (3) ?"
    "Do ye mighty reckon so ?",     "But ye be nah sure ye (3).",     "Do ye mighty doubt ye (3) ?"
  ]],
 ["* i* @belief *you *", [
     "goto you"
  ]],
 ["* i am *", [
    //  "Is it because you are (2) that you came to me ?",
    //  "How long have you been (2) ?",
    //  "Do you believe it is normal to be (2) ?",
    //  "Do you enjoy being (2) ?",
    //  "Do you know anyone else who is (2) ?"
    "Be it 'cause ye be (2) that ye came t' me ?",     "How long 'ave ye been (2) ?",     "Do ye believe 'tis normal t' be (2) ?",     "Do ye enjoy bein' (2) ?",     "Do ye know anyone else who be (2) ?"
  ]],
 ["* i @cannot *", [
    //  "How do you know that you can't (3) ?",
    //  "Have you tried ?",
    //  "Perhaps you could (3) now.",
    //  "Do you really want to be able to (3) ?",
    //  "What if you could (3) ?"
    "How do ye know that ye can nah (3) ?",     "'ave ye tried ?",     "Perhaps ye could (3) now.",     "Do ye mighty wants t' be able t' (3) ?",     "Wha' if ye could (3) ?"
  ]],
 ["* i don't *", [
    //  "Don't you really (2) ?",
    //  "Why don't you (2) ?",
    //  "Do you wish to be able to (2) ?",
    //  "Does that trouble you ?"
    "Don't ye mighty (2) ?",     "Why don't ye (2) ?",     "Do ye wish t' be able t' (2) ?",     "Does that trouble ye ?"
  ]],
 ["* i feel *", [
    //  "Tell me more about such feelings.",
    //  "Do you often feel (2) ?",
    //  "Do you enjoy feeling (2) ?",
    //  "Of what does feeling (2) remind you ?"
    "Tell me more about such feelings.",     "Do ye often feel (2) ?",     "Do ye enjoy feelin' (2) ?",     "O' wha' does feelin' (2) remind ye ?"
  ]],
 ["* i * you *", [
    //  "Perhaps in your fantasies we (2) each other.",
    //  "Do you wish to (2) me ?",
    //  "You seem to need to (2) me.",
    //  "Do you (2) anyone else ?"
    "Perhaps in yer fantasies we (2) each other.",     "Do ye wish t' (2) me ?",     "Ye seem t' needs t' (2) me.",     "Do ye (2) anyone else ?"
  ]],
 ["*", [
    //  "You say (1) ?",
    //  "Can you elaborate on that ?",
    //  "Do you say (1) for some special reason ?",
    //  "That's quite interesting."
    "Ye say (1) ?",     "Can ye elaborate on that ?",     "Do ye say (1) fer some special reason ?",     "That's quite interestin'."
  ]]
]],
["you", 0, [
 ["* you remind me of *", [
     "goto alike"
  ]],
 ["* you are *", [
    //  "What makes you think I am (2) ?",
    //  "Does it please you to believe I am (2) ?",
    //  "Do you sometimes wish you were (2) ?",
    //  "Perhaps you would like to be (2)."
    "Wha' makes ye reckon I am (2) ?",     "Does it please ye t' believe I am (2) ?",     "Do ye sometimes wish ye we be (2) ?",     "Perhaps ye would like t' be (2)."
  ]],
 ["* you* me *", [
    //  "Why do you think I (2) you ?",
    //  "You like to think I (2) you -- don't you ?",
    //  "What makes you think I (2) you ?",
    //  "Really, I (2) you ?",
    //  "Do you wish to believe I (2) you ?",
    //  "Suppose I did (2) you -- what would that mean ?",
    //  "Does someone else believe I (2) you ?"
    "Why do ye reckon I (2) ye ?",     "Ye like t' reckon I (2) ye -- don't ye ?",     "Wha' makes ye reckon I (2) ye ?",     "Mighty, I (2) ye ?",     "Do ye wish t' believe I (2) ye ?",     "Suppose I did (2) you -- wha' would that mean ?",     "Does someone else believe I (2) you ?"
  ]],
 ["* you *", [
    //  "We were discussing you -- not me.",
    //  "Oh, I (2) ?",
    //  "You're not really talking about me -- are you ?",
    //  "What are your feelings now ?"
    "We we be discussin' ye -- nah me.",     "Oh, I (2) ?",     "Ye're nah mighty natterin' about me -- are ye ?",     "Wha' are yer feelings now ?"
  ]]
]],
["yes", 0, [
 ["*", [
    //  "You seem to be quite positive.",
    //  "You are sure.",
    //  "I see.",
    //  "I understand."
    "Ye seem t' be quite positive.",     "Ye be sure.",     "I see.",     "I understand."
  ]]
]],
["no", 0, [
 ["* no one *", [
    //  "Are you sure, no one (2) ?",
    //  "Surely someone (2) .",
    //  "Can you think of anyone at all ?",
    //  "Are you thinking of a very special person ?",
    //  "Who, may I ask ?",
    //  "You have a particular person in mind, don't you ?",
    //  "Who do you think you are talking about ?"
    "Are ye sure, no one (2) ?",     "Surely someone (2) .",     "Can ye reckon o' anyone at all ?",     "Are ye thinkin' o' a mighty special scallywag ?",     "Who, may I ask ?",     "Ye 'ave a particular scallywag in mind, don't ye ?",     "Who do ye reckon ye be natterin' about ?"
  ]],
 ["*", [
    //  "Are you saying no just to be negative?",
    //  "You are being a bit negative.",
    //  "Why not ?",
    //  "Why 'no' ?"
    "Are ye sayin' no jus' t' be negative?",     "Ye be bein' a bit negative.",     "Why nah ?",     "Why 'no' ?"
  ]]
]],
["my", 2, [
 ["$ * my *", [
    //  "Does that have anything to do with the fact that your (2) ?",
    //  "Lets discuss further why your (2).",
    //  "Earlier you said your (2).",
    //  "But your (2)."
    "Does that 'ave anythin' t' do wit' the fact that yer (2) ?",     "Lets discuss further why yer (2).",     "Earlier ye said yer (2).",     "But yer (2)."
  ]],
 ["* my* @family *", [
    //  "Tell me more about your family.",
    //  "Who else in your family (4) ?",
    //  "Your (3) ?",
    //  "What else comes to your mind when you think of your (3) ?"
    "Tell me more about yer family.",     "Who else in yer family (4) ?",     "Yer (3) ?",     "Wha' else comes t' yer mind when ye reckon o' yer (3) ?"
  ]],
 ["* my *", [
    //  "Your (2) ?",
    //  "Why do you say your (2) ?",
    //  "Does that suggest anything else which belongs to you ?",
    //  "Is it important to you that your (2) ?"
    "Yer (2) ?",     "Why do ye say yer (2) ?",     "Does that suggest anythin' else which belongs t' ye ?",     "Be it important t' ye that yer (2) ?"
  ]]
]],
["can", 0, [
 ["* can you *", [
    //  "You believe I can (2) don't you ?",
    //  "goto what",
    //  "You want me to be able to (2).",
    //  "Perhaps you would like to be able to (2) yourself."
    "Ye believe I can (2) don't ye ?",     "goto what",     "Ye wants me t' be able t' (2).",     "Perhaps ye would like t' be able t' (2) yourself."
  ]],
 ["* can i *", [
    //  "Whether or not you can (2) depends on you more than on me.",
    //  "Do you want to be able to (2) ?",
    //  "Perhaps you don't want to (2).",
    //  "goto what"
    "Whether or nah ye can (2) depends on ye more than on me.",     "Do ye wants t' be able t' (2) ?",     "Perhaps ye don't wants t' (2).",     "goto what"
  ]]
]],
["what", 0, [
 ["*", [
    //  "Why do you ask ?",
    //  "Does that question interest you ?",
    //  "What is it you really want to know ?",
    //  "Are such questions much on your mind ?",
    //  "What answer would please you most ?",
    //  "What do you think ?",
    //  "What comes to mind when you ask that ?",
    //  "Have you asked such questions before ?",
    //  "Have you asked anyone else ?"
    "Why do ye ask ?",     "Does that riddle interest ye ?",     "Wha' be it ye mighty wants t' know ?",     "Are such riddles much on yer mind ?",     "Wha' answer would please ye most ?",     "Wha' do ye reckon ?",     "Wha' comes t' mind when ye ask that ?",     "'ave ye asked such riddles afore ?",     "'ave ye asked anyone else ?"
  ]]
]],
["who", 0, [
 ["who *", [
     "goto what"
  ]]
]],
["when", 0, [
 ["when *", [
     "goto what"
  ]]
]],
["where", 0, [
 ["where *", [
     "goto what"
  ]]
]],
["how", 0, [
 ["how *", [
     "goto what"
  ]]
]],
["because", 0, [
 ["*", [
    //  "Is that the real reason ?",
    //  "Don't any other reasons come to mind ?",
    //  "Does that reason seem to explain anything else ?",
    //  "What other reasons might there be ?"
    "Be that the real reason ?",     "Don't any other reasons come t' mind ?",     "Does that reason seem t' explain anythin' else ?",     "Wha' other reasons might thar be ?"
  ]]
]],
["why", 0, [
 ["* why don't you *", [
    //  "Do you believe I don't (2) ?",
    //  "Perhaps I will (2) in good time.",
    //  "Should you (2) yourself ?",
    //  "You want me to (2) ?",
    //  "goto what"
    "Do ye believe I don't (2) ?",     "Perhaps I will (2) in good time.",     "Shall ye (2) yourself ?",     "Ye wants me t' (2) ?",     "goto what"
  ]],
 ["* why can't i *", [
    //  "Do you think you should be able to (2) ?",
    //  "Do you want to be able to (2) ?",
    //  "Do you believe this will help you to (2) ?",
    //  "Have you any idea why you can't (2) ?",
    //  "goto what"
    "Do ye reckon ye best be able t' (2) ?",     "Do ye wants t' be able t' (2) ?",     "Do ye believe this will help ye t' (2) ?",     "'ave ye any idea why ye can nah (2) ?",     "goto what"
  ]],
 ["*", [
     "goto what"
  ]]
]],
["everyone", 2, [
 ["* @everyone *", [
    //  "Really, (2) ?",
    //  "Surely not (2).",
    //  "Can you think of anyone in particular ?",
    //  "Who, for example?",
    //  "Are you thinking of a very special person ?",
    //  "Who, may I ask ?",
    //  "Someone special perhaps ?",
    //  "You have a particular person in mind, don't you ?",
    //  "Who do you think you're talking about ?"
    "Mighty, (2) ?",     "Surely nah (2).",     "Can ye reckon o' anyone in particular ?",     "Who, fer example?",     "Are ye thinkin' o' a mighty special scallywag ?",     "Who, may I ask ?",     "Someone special perhaps ?",     "Ye 'ave a particular scallywag in mind, don't ye ?",     "Who do ye reckon ye're natterin' about ?"
  ]]
]],
["everybody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["nobody", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["noone", 2, [
 ["*", [
     "goto everyone"
  ]]
]],
["always", 1, [
 ["*", [
    //  "Can you think of a specific example ?",
    //  "When ?",
    //  "What incident are you thinking of ?",
    //  "Really, always ?"
    "Can ye reckon o' a specific example ?",     "When ?",     "Wha' incident are ye thinkin' o' ?",     "Mighty, always ?"
  ]]
]],
["alike", 10, [
 ["*", [
    //  "In what way ?",
    //  "What resemblence do you see ?",
    //  "What does that similarity suggest to you ?",
    //  "What other connections do you see ?",
    //  "What do you suppose that resemblence means ?",
    //  "What is the connection, do you suppose ?",
    //  "Could there really be some connection ?",
    //  "How ?"
    "In wha' way ?",     "Wha' resemblence do ye see ?",     "Wha' does that similarity suggest t' ye ?",     "Wha' other connections do ye see ?",     "Wha' do ye suppose that resemblence means ?",     "Wha' be the connection, do ye suppose ?",     "Could thar mighty be some connection ?",     "How ?"
  ]]
]],
["like", 10, [
 ["* @be *like *", [
     "goto alike"
  ]]
]],
["different", 0, [
 ["*", [
    //  "How is it different ?",
    //  "What differences do you see ?",
    //  "What does that difference suggest to you ?",
    //  "What other distinctions do you see ?",
    //  "What do you suppose that disparity means ?",
    //  "Could there be some connection, do you suppose ?",
    //  "How ?"
    "How's it different ?",     "Wha' differences do ye see ?",     "Wha' does that difference suggest t' ye ?",     "Wha' other distinctions do ye see ?",     "Wha' do ye suppose that disparity means ?",     "Could thar be some connection, do ye suppose ?",     "How ?"
  ]]
]]

];

// regexp/replacement pairs to be performed as final cleanings
// here: cleanings for multiple bots talking to each other
var elizaPostTransforms = [
	/ old old/g, " old",
	/\bthey were( not)? me\b/g, "it was$1 me",
	/\bthey are( not)? me\b/g, "it is$1 me",
	/Are they( always)? me\b/, "it is$1 me",
	/\bthat your( own)? (\w+)( now)? \?/, "that you have your$1 $2 ?",
	/\bI to have (\w+)/, "I have $1",
	/Earlier you said your( own)? (\w+)( now)?\./, "Earlier you talked about your $2."
];

// eof