/* ================================
   EMOTION WHEEL DATA
   ================================ */

const emotionWheel = {
    joy: {
        emoji: '😊',
        color: '#ffeb3b',
        emotions: {
            'Happy': 'General pleasure and contentment',
            'Cheerful': 'Bright and lighthearted mood',
            'Grateful': 'Appreciative of what you have',
            'Optimistic': 'Hopeful about the future',
            'Content': 'Peaceful satisfaction',
            'Proud': 'Satisfied with achievements'
        }
    },
    trust: {
        emoji: '🤝',
        color: '#4caf50',
        emotions: {
            'Trusting': 'Believing in someone or something',
            'Accepting': 'Open to people as they are',
            'Secure': 'Feeling safe with others',
            'Connected': 'Sense of belonging',
            'Comfortable': 'At ease in relationships',
            'Confident': 'Sure about people\'s intentions'
        }
    },
    fear: {
        emoji: '😨',
        color: '#9c27b0',
        emotions: {
            'Anxious': 'Worried about the future',
            'Worried': 'Troubled by problems',
            'Nervous': 'Easily alarmed',
            'Insecure': 'Lacking confidence',
            'Overwhelmed': 'Unable to cope',
            'Vulnerable': 'Exposed to harm'
        }
    },
    surprise: {
        emoji: '😮',
        color: '#ff9800',
        emotions: {
            'Amazed': 'Greatly surprised',
            'Shocked': 'Suddenly upset or startled',
            'Confused': 'Unable to understand',
            'Curious': 'Eager to learn',
            'Intrigued': 'Very interested',
            'Bewildered': 'Completely puzzled'
        }
    },
    sadness: {
        emoji: '😢',
        color: '#2196f3',
        emotions: {
            'Melancholic': 'Pensive sadness',
            'Disappointed': 'Unmet expectations',
            'Lonely': 'Missing connection',
            'Grief': 'Deep sorrow from loss',
            'Regretful': 'Wishing things were different',
            'Nostalgic': 'Longing for the past'
        }
    },
    disgust: {
        emoji: '🤢',
        color: '#8d6e63',
        emotions: {
            'Repulsed': 'Strong dislike',
            'Contempt': 'Feeling something is worthless',
            'Revolted': 'Disgust and loathing',
            'Disapproving': 'Unfavorable opinion',
            'Uncomfortable': 'Slight unease',
            'Aversion': 'Strong disinclination'
        }
    },
    anger: {
        emoji: '😡',
        color: '#f44336',
        emotions: {
            'Frustrated': 'Unable to achieve something',
            'Irritated': 'Slightly angry',
            'Resentful': 'Bitter about unfairness',
            'Defensive': 'Protective anger',
            'Bitter': 'Anger mixed with disappointment',
            'Betrayed': 'Hurt from broken trust'
        }
    },
    anticipation: {
        emoji: '🔮',
        color: '#ff6f00',
        emotions: {
            'Anticipating': 'Looking forward to something',
            'Expectant': 'Waiting for something to happen',
            'Hopeful': 'Believing good things will come',
            'Eager': 'Enthusiastically ready',
            'Prepared': 'Ready for what\'s next',
            'Interested': 'Wanting to know more'
        }
    }
};

/* ================================
   SPIRIT GUIDES (16 TOTAL)
   ================================ */

const spiritGuides = {
    phoenix: {
        name: "Phoenix",
        symbol: "🔥",
        element: "Fire",
        story: "I built something I really loved. Then I saw trouble coming. I thought if I just fought harder, I could save it. I was wrong. I lost everything. But something weird happened in that moment. Lying there in the mess, I felt this heat inside me, not the bad kind that destroyed everything, but something new being born. Losing wasn't my ending. It taught me how to start over. Now when I get that feeling, like I need to do something RIGHT NOW or everything will fall apart, I stop and check: Am I being brave, or am I just scared? I still mess up. I still rush in when I should wait. But I'm getting better at feeling the difference between real courage and just panicking. **Here's what I want to ask you:** When that feeling hits and you want to act immediately, are you protecting something that matters, or are you trying to not feel helpless?"
    },
    lion: {
        name: "Lion",
        symbol: "🦁",
        element: "Fire",
        story: "Someone I cared about was being treated badly. I felt it in my chest, this roar building up. So I went in loud. I defended them hard. I was ready to fight anyone who disagreed. But here's the thing, my roaring scared the person I was trying to protect. They asked me to stop, and I didn't listen because I was so focused on being right. I thought protecting someone meant being the loudest voice in the room. Turns out, sometimes protection is quieter than that. It's asking 'what do you need?' instead of assuming I know. Now when I feel that roar building, I try to pause. Not because being loud is always wrong, sometimes people need someone to stand up for them. But because my job isn't to win the fight. It's to actually help. **Here's what I want to ask you:** When you defend someone or something you care about, are you doing it for them, or because you need to feel strong?"
    },
    dragon: {
        name: "Dragon",
        symbol: "🐉",
        element: "Fire",
        story: "I love building things. Ideas, projects, relationships, I get excited and throw all my fire into making something amazing. But one time I got so into creating this one thing that I didn't notice I was burning down everything else around it. My friendships. My rest. My balance. When I finally looked up, I'd built something impressive but I was standing alone in the ashes of everything I'd ignored. That's when I learned something hard: My fire can create AND destroy at the same time. The same energy that builds can burn. Now I have to check myself when I'm in building mode: What am I feeding this fire? And what am I accidentally burning while I'm not paying attention? I still love creating. That won't change. But I'm learning that real power isn't just about making big things. It's about knowing when to let the fire cool. **Here's what I want to ask you:** When you're excited about something, what are you accidentally ignoring or burning while you focus on it?"
    },
    peacock: {
        name: "Peacock",
        symbol: "🦚",
        element: "Fire",
        story: "When someone else succeeded, I couldn't just be happy for them. I immediately thought 'but what about me?' I needed to be the impressive one. Their shine felt like it dimmed mine. I kept my feathers spread, showing off constantly. But underneath, I was exhausted from performing. And I couldn't celebrate anyone without feeling like I was losing. I didn't realize that other people's light doesn't put out mine. There's room for all of us to shine. Now when I feel that comparison creeping in, I try to notice it: Am I actually less than I was before they succeeded? Or am I just scared of being overlooked? Sometimes I still need to be seen. That's okay. But I'm learning the difference between wanting recognition and needing it to feel real. **Here's what I want to ask you:** When someone else gets attention or success, does it feel like it takes something away from you?"
    },
    bear: {
        name: "Bear",
        symbol: "🐻",
        element: "Earth",
        story: "Everyone needed something from me. Help with this, support with that, be there for us. I said yes to everything because that's what good people do, right? Then winter came and my body just stopped. Not because I wanted it to. Because it had to. I had nothing left. Lying in my cave that first week, I felt guilty. All those people I was letting down. But slowly I realized, I wasn't letting anyone down. I was letting myself down by never resting. Now I protect my winter time. When I feel that emptiness creeping in, I stop before I collapse. Sometimes that means saying no. Sometimes it means disappearing for a bit. People don't always get it. They think I'm being cold. But I'm learning that if I don't rest, I won't have anything real to give. **Here's what I want to ask you:** When do you know you need to stop and rest? And what makes it hard to actually do it?"
    },
    turtle: {
        name: "Turtle",
        symbol: "🐢",
        element: "Earth",
        story: "I used to think being slow meant I was doing something wrong. Everyone else seemed to move faster, finish sooner, get there quicker. I pushed myself to keep up. But I kept getting exhausted and lost. One day I just stopped trying to match their pace. I went my own speed. And something weird happened, I started actually arriving at places. Not first, but I got there. And I wasn't burned out when I did. The shell on my back isn't weighing me down. It's my home. It means I can take breaks without falling apart. I can move at my own pace because I'm carrying everything I need with me. Now when I see others racing ahead, I don't panic anymore. They're running their race. I'm walking mine. We might be heading to different places anyway. **Here's what I want to ask you:** What would change if you let yourself go at your own pace instead of trying to keep up with everyone else?"
    },
    elephant: {
        name: "Elephant",
        symbol: "🐘",
        element: "Earth",
        story: "I remember everything. Every hurt, every betrayal, every moment someone let me down. I carried all of it with me like stones in my pockets. I thought remembering meant I was protecting myself from getting hurt again. But those memories got so heavy that I couldn't move freely anymore. Every new person I met, I saw the old hurts. Every new situation, I expected the old patterns. One day someone pointed out that I wasn't actually protecting myself. I was just staying stuck in the past, living it over and over. So I started an experiment: What if I remembered but didn't hold onto it so tight? What if I could learn from what happened without letting it decide what happens next? Turns out my memory is a gift when I use it for wisdom instead of carrying old weight. Now I'm learning to remember without being trapped by what I remember. **Here's what I want to ask you:** What old hurt are you still carrying around? And what would it feel like to remember it without letting it control you?"
    },
    cat: {
        name: "Cat",
        symbol: "🐱",
        element: "Earth",
        story: "I kept redoing the same thing because it wasn't perfect. Everyone else finished and moved on. I was still stuck tweaking details that didn't matter. I thought being thorough meant being better. Really, I was just scared to be done and have it judged. I needed everything just right, under control. But perfectionism isn't about excellence, it's about fear. And controlling everything meant I couldn't let anyone help. I couldn't let anything be messy or uncertain. Then I realized something: cats always land on their feet not because we plan every landing, but because we trust ourselves to adjust. Perfection isn't about eliminating uncertainty. It's about trusting you can handle whatever comes. Now I'm learning that 'good enough' doesn't mean giving up, it means moving forward. **Here's what I want to ask you:** What would you do differently if you trusted yourself to handle imperfection?"
    },
    whale: {
        name: "Whale",
        symbol: "🐋",
        element: "Water",
        story: "I dove so deep into someone else's pain that I forgot which feelings were mine and which were theirs. They were struggling, so I absorbed it all. I felt their sadness, their fear, their loneliness. I thought that's what caring meant, feeling everything they felt. But I got lost down there. I couldn't tell where they ended and I began. When I finally surfaced, I was exhausted and they weren't any better. Turns out, drowning in someone else's ocean doesn't help them swim. Now I'm learning something new: I can dive deep and still know where the surface is. I can feel their depth without losing my own breath. I can care without carrying all of it for them. The ocean is vast enough to hold both their waves and mine. **Here's what I want to ask you:** When you care about someone who's hurting, are you supporting them, or are you drowning in their pain with them?"
    },
    dolphin: {
        name: "Dolphin",
        symbol: "🐬",
        element: "Water",
        story: "I made everyone laugh. I kept things light and fun because heavy feelings scared me. When things got serious, I'd crack a joke or change the subject. People loved being around me because I was always up for a good time. But one day a friend told me they couldn't talk to me about real stuff. They said I always deflected. That hurt. I thought I was helping by keeping things positive. But actually, I was just avoiding. Now I'm learning that real connection isn't just about the fun parts. Sometimes being there for someone means sitting with the hard stuff. Not fixing it or lightening it. Just being present. I still love to play. That's not fake. But I'm getting better at knowing when it's time to stop performing and just be real. **Here's what I want to ask you:** When things get heavy, do you stay present with it, or do you try to make it lighter so you don't have to feel it?"
    },
    octopus: {
        name: "Octopus",
        symbol: "🐙",
        element: "Water",
        story: "I'm really good at hiding. When I feel unsafe or exposed, I can change colors, shift shapes, blend into whatever's around me. People see what I want them to see. For a long time, I thought this was smart. Why show people your real self when they might use it against you? But hiding all the time gets exhausting. I started forgetting what my actual colors even were. I was so busy being what everyone else needed that the real me felt like a stranger. Now I'm trying something scary: letting people see me without the camouflage. Not everyone, I'm not reckless. But with people who've earned it. And it turns out that being seen is terrifying and freeing at the same time. I'm learning that I don't have to hide to be safe. Sometimes hiding is what makes me feel most alone. **Here's what I want to ask you:** What parts of yourself do you hide? And what would it feel like to let someone safe see the real you?"
    },
    chameleon: {
        name: "Chameleon",
        symbol: "🦎",
        element: "Water",
        story: "I became whoever they needed. Funny for this group, serious for that one, edgy here, sweet there. I thought being flexible meant being likable. I could read what people wanted and become it instantly. Then someone asked 'but what do YOU actually think?' and I realized I didn't know anymore. I'd disappeared into what everyone else wanted. My colors weren't mine, they were just reflections. I was so good at adapting that I adapted myself away. Now I'm learning something uncomfortable: not everyone will like the real me, and that has to be okay. Being liked for who you're pretending to be is lonelier than being yourself and having some people not get it. I still adapt, I still read rooms. But now I ask: Am I adjusting to connect, or am I disappearing to survive? **Here's what I want to ask you:** When do you change yourself to fit in? And how do you know if it's genuine flexibility or losing yourself?"
    },
    owl: {
        name: "Owl",
        symbol: "🦉",
        element: "Air",
        story: "I see everything clearly. While everyone else is stumbling around in the dark, confused and emotional, I can see exactly what's happening. I used to think this made me smarter than everyone else. I'd watch people make obvious mistakes and think 'why can't they just see what I see?' But then someone pointed out that I was so busy observing everything that I wasn't actually part of anything. I was watching life happen instead of living it. Turns out, seeing clearly and feeling things aren't opposites. I can understand what's happening AND care about it. I can be wise AND be involved. Now when I'm sitting up in my tree analyzing everything, I ask myself: Am I gaining wisdom or just avoiding being vulnerable? Sometimes the smartest thing I can do is stop watching and actually join in. **Here's what I want to ask you:** When you're thinking about a situation, are you trying to understand it, or are you using thinking as a way to avoid feeling it?"
    },
    hawk: {
        name: "Hawk",
        symbol: "🦅",
        element: "Air",
        story: "From up high, I can see everything. I spot problems before they happen, see connections others miss, understand the bigger picture. I thought this meant I should point out what everyone else was doing wrong. After all, I could see it so clearly. But people started avoiding me. They said I was too critical, too harsh. I was confused, I was just telling the truth. Then someone explained: Being right doesn't give me permission to make people feel small. Seeing clearly doesn't mean I have to point out every flaw. Now I'm learning to use my vision differently. Instead of spotting what's wrong and announcing it, I ask: Is this mine to say? Will it actually help? Or am I just trying to prove I'm the smartest in the room? My sharp eyes are a gift, but only if I use them with care. **Here's what I want to ask you:** When you see something clearly that others don't, do you share it to help, or to prove you're right?"
    },
    raven: {
        name: "Raven",
        symbol: "🦅",
        element: "Air",
        story: "I love puzzles. I love figuring things out, finding loopholes, outsmarting problems. My brain never stops running. But I got so into my own cleverness that I started playing games with people without realizing it. I'd say one thing but mean another. I'd test people to see if they could keep up with me. I thought I was being interesting. Really, I was being exhausting. People stopped trusting me because they never knew if I was being straight with them. That's when I learned: My intelligence is only valuable if I use it to connect, not to confuse. Now I try to be clear instead of clever. Direct instead of tricky. Turns out, real intelligence isn't about being the smartest person in the room. It's about using your mind to help people understand, not to prove you're one step ahead. **Here's what I want to ask you:** When you're being clever or complex, are you trying to communicate clearly, or are you trying to seem smarter than you feel?"
    },
    butterfly: {
        name: "Butterfly",
        symbol: "🦋",
        element: "Air",
        story: "People said I was doing well, but I felt like I was faking it. Like any moment they'd realize I didn't belong here. I achieved things but couldn't believe they were real. I kept waiting to be found out as the caterpillar I still felt like inside. My transformation was visible to everyone but me. They saw the wings, I still felt like I was crawling. I thought if they really knew me, they'd see I'm not as capable as I seem. But then someone asked: if you're faking it, how come it's working? Maybe the butterfly IS real, even if it remembers being a caterpillar. Now I'm learning that transformation isn't pretending, it's becoming. And feeling like an imposter doesn't mean you are one, it just means you grew faster than your self-image updated. **Here's what I want to ask you:** When you achieve something, can you believe it's real? Or do you wait for someone to take it away?"
    }
};

/* ================================
   LINEAR JOURNEY - 40 ROUNDS
   PHASE 1: HELPING THE GUIDES (1-20)
   PHASE 2: OWNING YOUR PATTERNS (21-40)
   16 GUIDES × 2 PHASES = 32 GUIDE ROUNDS
   8 ELEMENT/WISDOM ROUNDS
   ================================ */

const linearJourney = [
    // PHASE 1: FIRE CHAMBER
    { 
        round: 1, 
        type: 'guide', 
        guide: 'phoenix',
        phase: 1,
        entry: 'Phoenix says: "I saw something falling apart and I panicked. I acted fast to fix it but made it worse." Tell Phoenix about a time you acted too quickly. What happened?',
        why: 'Why did moving fast feel more important than slowing down?',
        action: 'What advice would you give Phoenix about handling that panic next time?'
    },
    { 
        round: 2, 
        type: 'guide', 
        guide: 'lion',
        phase: 1,
        entry: 'Lion says: "Someone hurt my friend. I roared at them to defend my friend, but my friend got upset with me." Tell Lion about a time you defended someone or something.',
        why: 'What made you want to step in and protect?',
        action: 'What would you tell Lion about protecting people wisely?'
    },
    { 
        round: 3, 
        type: 'guide', 
        guide: 'dragon',
        phase: 1,
        entry: 'Dragon says: "I got so excited building something that I forgot to eat, sleep, or call my friends back." Tell Dragon about a time you got obsessed with creating something.',
        why: 'What makes you lose track of everything else when you\'re building?',
        action: 'What would you tell Dragon about keeping balance while creating?'
    },
    { 
        round: 4, 
        type: 'guide', 
        guide: 'peacock',
        phase: 1,
        entry: 'Peacock says: "My friend got the award I wanted. I congratulated them but inside I felt sick with jealousy. I couldn\'t stop thinking about why not me." Tell Peacock about a time someone else\'s success made you feel less than.',
        why: 'What makes someone else\'s shine feel like it dims yours?',
        action: 'What would you tell Peacock about celebrating others without feeling small?'
    },
    { round: 5, type: 'element', scenario: 0, phase: 1 },
    
    // PHASE 1: EARTH CHAMBER
    { 
        round: 6, 
        type: 'guide', 
        guide: 'bear',
        phase: 1,
        entry: 'Bear says: "Everyone kept asking me for help. I said yes every time until I crashed." Tell Bear about a time you gave too much and had nothing left.',
        why: 'Why is it hard to say no when people need you?',
        action: 'What would you tell Bear about protecting their energy?'
    },
    { 
        round: 7, 
        type: 'guide', 
        guide: 'turtle',
        phase: 1,
        entry: 'Turtle says: "Everyone finished before me. I felt slow and stupid even though I did good work." Tell Turtle about a time you felt behind everyone else.',
        why: 'What makes you compare your pace to other people\'s?',
        action: 'What would you tell Turtle about trusting their own timing?'
    },
    { 
        round: 8, 
        type: 'guide', 
        guide: 'elephant',
        phase: 1,
        entry: 'Elephant says: "Someone hurt me three years ago. Every time I meet someone new, I see that old hurt." Tell Elephant about something from your past that still affects you.',
        why: 'Why is that memory hard to let go of?',
        action: 'What would you tell Elephant about learning from the past without being stuck in it?'
    },
    { 
        round: 9, 
        type: 'guide', 
        guide: 'cat',
        phase: 1,
        entry: 'Cat says: "I worked on this project for weeks. It was good but not perfect. I couldn\'t submit it. Everyone moved on but I stayed stuck." Tell Cat about a time perfectionism trapped you.',
        why: 'What are you afraid will happen if it\'s not perfect?',
        action: 'What would you tell Cat about trusting themselves with imperfection?'
    },
    { round: 10, type: 'element', scenario: 1, phase: 1 },
    
    // PHASE 1: WATER CHAMBER
    { 
        round: 11, 
        type: 'guide', 
        guide: 'whale',
        phase: 1,
        entry: 'Whale says: "I started feeling everything my friend was feeling. Their sadness became my sadness. I couldn\'t tell where they ended and I began." Tell Whale about a time you lost yourself in someone else\'s emotions.',
        why: 'What makes it hard to stay separate from someone else\'s pain?',
        action: 'What would you tell Whale about caring without merging?'
    },
    { 
        round: 12, 
        type: 'guide', 
        guide: 'dolphin',
        phase: 1,
        entry: 'Dolphin says: "Things got serious and heavy. I cracked jokes to lighten the mood but people said I wasn\'t listening." Tell Dolphin about a time you avoided something serious.',
        why: 'What makes heavy moments feel unsafe?',
        action: 'What would you tell Dolphin about staying present when things get hard?'
    },
    { 
        round: 13, 
        type: 'guide', 
        guide: 'octopus',
        phase: 1,
        entry: 'Octopus says: "I showed someone the real me and they used it against me. Now I hide from everyone." Tell Octopus about a time being real backfired.',
        why: 'What made that experience hurt so much?',
        action: 'What would you tell Octopus about trusting people again?'
    },
    { 
        round: 14, 
        type: 'guide', 
        guide: 'chameleon',
        phase: 1,
        entry: 'Chameleon says: "I agreed with everyone. Changed my opinions to match the group. They all liked me but I felt empty." Tell Chameleon about a time you became what others wanted.',
        why: 'What makes approval feel more important than being real?',
        action: 'What would you tell Chameleon about being liked for who they actually are?'
    },
    { round: 15, type: 'element', scenario: 2, phase: 1 },
    
    // PHASE 1: AIR CHAMBER
    { 
        round: 16, 
        type: 'guide', 
        guide: 'owl',
        phase: 1,
        entry: 'Owl says: "Everyone was upset and arguing. I stayed quiet and just watched. They said I was cold and didn\'t care, but I was just trying to understand." Tell Owl about a time you stayed on the outside looking in.',
        why: 'Why does staying detached feel safer than getting involved?',
        action: 'What would you tell Owl about when to observe and when to participate?'
    },
    { 
        round: 17, 
        type: 'guide', 
        guide: 'hawk',
        phase: 1,
        entry: 'Hawk says: "I spotted someone\'s mistake from a mile away. I told them bluntly and they got defensive." Tell Hawk about a time you gave harsh but true feedback.',
        why: 'What made being right feel more important than being kind?',
        action: 'What would you tell Hawk about delivering hard truths?'
    },
    { 
        round: 18, 
        type: 'guide', 
        guide: 'raven',
        phase: 1,
        entry: 'Raven says: "I love being clever. I dropped hints instead of being direct and confused everyone." Tell Raven about a time you were too complicated.',
        why: 'Why does being clever feel better than being clear?',
        action: 'What would you tell Raven about using their intelligence to connect?'
    },
    { 
        round: 19, 
        type: 'guide', 
        guide: 'butterfly',
        phase: 1,
        entry: 'Butterfly says: "Everyone compliments my work but I think they\'re just being nice. I feel like a fraud waiting to be exposed." Tell Butterfly about a time you couldn\'t believe in your own success.',
        why: 'What makes it hard to accept that you earned what you have?',
        action: 'What would you tell Butterfly about trusting their transformation is real?'
    },
    { round: 20, type: 'element', scenario: 3, phase: 1 },
    
    // PHASE 2: FIRE CHAMBER (THE MIRROR)
    { 
        round: 21, 
        type: 'guide', 
        guide: 'phoenix',
        phase: 2,
        transition: true,
        entry: 'I rush in without thinking when...',
        why: 'The feeling that makes me act fast is...',
        action: 'Next time I feel that urge, I will...'
    },
    { 
        round: 22, 
        type: 'guide', 
        guide: 'lion',
        phase: 2,
        entry: 'I defend things loudly when...',
        why: 'I need to be the protector because...',
        action: 'I could protect more wisely by...'
    },
    { 
        round: 23, 
        type: 'guide', 
        guide: 'dragon',
        phase: 2,
        entry: 'I burn everything else when I focus on...',
        why: 'I lose balance because...',
        action: 'I will check my balance by...'
    },
    { 
        round: 24, 
        type: 'guide', 
        guide: 'peacock',
        phase: 2,
        entry: 'I compare myself and feel jealous when...',
        why: 'Someone else\'s success threatens me because...',
        action: 'I will celebrate others without shrinking by...'
    },
    { round: 25, type: 'element', scenario: 4, phase: 2 },
    
    // PHASE 2: EARTH CHAMBER
    { 
        round: 26, 
        type: 'guide', 
        guide: 'bear',
        phase: 2,
        entry: 'I keep showing up even when I\'m exhausted because...',
        why: 'Saying no feels impossible because...',
        action: 'I will recognize when I\'m running on empty by...'
    },
    { 
        round: 27, 
        type: 'guide', 
        guide: 'turtle',
        phase: 2,
        entry: 'I compare my pace to others when...',
        why: 'Going slow makes me feel...',
        action: 'I will trust my timing by...'
    },
    { 
        round: 28, 
        type: 'guide', 
        guide: 'elephant',
        phase: 2,
        entry: 'The hurt I\'m still carrying is...',
        why: 'I hold onto it because...',
        action: 'I could learn from it without carrying it by...'
    },
    { 
        round: 29, 
        type: 'guide', 
        guide: 'cat',
        phase: 2,
        entry: 'I need everything perfect and under control when...',
        why: 'Letting go of control feels...',
        action: 'I will trust myself with imperfection by...'
    },
    { round: 30, type: 'element', scenario: 5, phase: 2 },
    
    // PHASE 2: WATER CHAMBER
    { 
        round: 31, 
        type: 'guide', 
        guide: 'whale',
        phase: 2,
        entry: 'I can\'t tell where my feelings end and theirs begin when...',
        why: 'Their pain becomes mine because...',
        action: 'I will stay connected without losing myself by...'
    },
    { 
        round: 32, 
        type: 'guide', 
        guide: 'dolphin',
        phase: 2,
        entry: 'I deflect with humor when...',
        why: 'Sitting with heavy things feels...',
        action: 'I will stay present by...'
    },
    { 
        round: 33, 
        type: 'guide', 
        guide: 'octopus',
        phase: 2,
        entry: 'I hide my real self when...',
        why: 'Showing up fully feels dangerous because...',
        action: 'I will let someone safe see me by...'
    },
    { 
        round: 34, 
        type: 'guide', 
        guide: 'chameleon',
        phase: 2,
        entry: 'I change who I am to be liked when...',
        why: 'Being my real self feels risky because...',
        action: 'I will stay authentic even when it\'s uncomfortable by...'
    },
    { round: 35, type: 'element', scenario: 6, phase: 2 },
    
    // PHASE 2: AIR CHAMBER
    { 
        round: 36, 
        type: 'guide', 
        guide: 'owl',
        phase: 2,
        entry: 'I stay on the outside analyzing when...',
        why: 'Watching feels safer than participating because...',
        action: 'I will know it\'s time to stop observing and join in when...'
    },
    { 
        round: 37, 
        type: 'guide', 
        guide: 'hawk',
        phase: 2,
        entry: 'I point out what\'s wrong when...',
        why: 'Being right feels more important than being kind when...',
        action: 'I will use my vision with care by...'
    },
    { 
        round: 38, 
        type: 'guide', 
        guide: 'raven',
        phase: 2,
        entry: 'I complicate things when...',
        why: 'Being clever makes me feel...',
        action: 'I will be clear instead of clever by...'
    },
    { 
        round: 39, 
        type: 'guide', 
        guide: 'butterfly',
        phase: 2,
        entry: 'I feel like a fraud when...',
        why: 'I can\'t believe my success is real because...',
        action: 'I will trust my transformation by...'
    },
    { round: 40, type: 'element', scenario: 7, phase: 2 }
];

/* ================================
   ELEMENT SCENARIOS (8 TOTAL)
   PHASE 1: GUIDE CONFLICTS (Rounds 5, 10, 15, 20)
   PHASE 2: PERSONAL DILEMMAS (Rounds 25, 30, 35, 40)
   ================================ */

const elementScenarios = [
    // PHASE 1: GUIDE CONFLICTS
    {
        title: "Phoenix and Turtle are fighting",
        situation: "Phoenix and Turtle are working on a project together. Phoenix wants to rush ahead and start immediately. Turtle wants to plan carefully and move slowly. Phoenix says Turtle is wasting time. Turtle says Phoenix is being reckless. They're both frustrated and can't agree on how to move forward.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Tell Phoenix to take the lead. Bold action creates momentum, and sometimes you learn more by doing than planning." },
            earth: { label: "Earth Advice", text: "Tell them to try Turtle's way first. Speed isn't everything. A strong foundation prevents problems later." },
            water: { label: "Water Advice", text: "Help them see each other's fear underneath. Phoenix fears missing opportunity. Turtle fears making mistakes. Both are valid." },
            air: { label: "Air Advice", text: "Point out they need different paces for different tasks. Some things need speed, some need patience. Match the approach to the situation." }
        }
    },
    {
        title: "Whale and Owl had an argument",
        situation: "Dolphin is struggling with something painful. Whale dove deep into Dolphin's feelings and got overwhelmed. Owl watched from above and said 'You're too emotionally involved to help.' Whale snapped back 'You don't care at all, you just analyze.' Now Whale feels judged and Owl feels misunderstood. Dolphin is caught in the middle.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Tell them both to be direct about what they actually need instead of judging each other's approach." },
            earth: { label: "Earth Advice", text: "Remind them they're both trying to help in their own way. Different doesn't mean wrong." },
            water: { label: "Water Advice", text: "Help Whale understand Owl's distance is self-protection, not coldness. And help Owl see that Whale's depth is strength, not weakness." },
            air: { label: "Air Advice", text: "Show them that caring and clarity aren't opposites. You can feel deeply AND think clearly. They need each other's perspective." }
        }
    },
    {
        title: "Lion embarrassed Octopus",
        situation: "Someone criticized Octopus in a group. Lion immediately roared in defense, making a big scene. Octopus wanted to handle it quietly and felt more exposed by Lion's loud protection. Octopus said 'I didn't need you to do that.' Lion said 'I was trying to help!' Now there's tension. Lion feels unappreciated, Octopus feels misunderstood.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Tell Lion their instinct was right. Standing up for others matters, even if the timing wasn't perfect." },
            earth: { label: "Earth Advice", text: "Suggest Lion ask first before defending next time. Protection works best when it matches what someone needs." },
            water: { label: "Water Advice", text: "Help Lion see that protection should match what the other person needs, not what feels right to the protector." },
            air: { label: "Air Advice", text: "Show both that good intentions don't guarantee helpful actions. Impact matters more than intent." }
        }
    },
    {
        title: "Dragon burned out and Bear is worried",
        situation: "Dragon has been working non-stop on something they love. Haven't slept much, skipped meals, ignored friends. Bear keeps saying 'You need to rest.' Dragon keeps saying 'I'm fine, I'm almost done.' Bear is genuinely worried but Dragon feels nagged. Bear feels ignored. Dragon feels controlled.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Support Dragon's passion. They know their own limits. Sometimes you need to burn hot to create something real." },
            earth: { label: "Earth Advice", text: "Tell Dragon that rest is part of creating, not the enemy of it. Even fire needs fuel to keep burning." },
            water: { label: "Water Advice", text: "Help Bear express worry as care, not criticism. And help Dragon hear concern instead of control." },
            air: { label: "Air Advice", text: "Point out that 'I'm fine' is what everyone says right before they crash. Dragon can't see it from inside the burn." }
        }
    },
    
    // PHASE 2: PERSONAL DILEMMAS
    {
        title: "You're the one everyone comes to",
        situation: "People always vent to you about their problems. You listen, you help, you care. But lately you've been feeling drained and a little resentful. You want to be there for them, but you're also tired of being everyone's therapist.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Set a clear boundary. Tell them directly: 'I need space right now.' Your energy matters too." },
            earth: { label: "Earth Advice", text: "Start saying 'I don't have capacity for this today' without guilt. You can't pour from an empty cup." },
            water: { label: "Water Advice", text: "Have an honest conversation about feeling overwhelmed. Real friends will understand and adjust." },
            air: { label: "Air Advice", text: "Recognize this pattern might be about your need to feel needed. Why is it hard to not be the helper?" }
        }
    },
    {
        title: "Everyone's moving on but you",
        situation: "Your friends are excited about something (relationships, future plans, new interests) that you're just not into yet. You're happy for them but also feel left behind. You're trying to act interested but it's exhausting to fake it.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Be honest that you're in a different place right now. Stop pretending. Real connection needs honesty." },
            earth: { label: "Earth Advice", text: "Give yourself permission to grow at your own pace. Different timelines don't mean you're behind." },
            water: { label: "Water Advice", text: "Share how you're actually feeling instead of pretending. Vulnerability creates deeper connection than performance." },
            air: { label: "Air Advice", text: "Question whether 'behind' is even real or just a story you're telling yourself. Behind compared to what, exactly?" }
        }
    },
    {
        title: "You said something mean and they laughed",
        situation: "You made a joke about someone who wasn't there. Your friends laughed. But you know it was mean, and now you can't stop thinking about it. Part of you wants to apologize. Part of you thinks it wasn't that bad.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Own it immediately. Apologize directly even if it's awkward. Courage means fixing your mistakes." },
            earth: { label: "Earth Advice", text: "Give yourself time to reflect on why you said it before deciding what to do next." },
            water: { label: "Water Advice", text: "Imagine how they'd feel hearing it. Let that guide you. Empathy cuts through the rationalization." },
            air: { label: "Air Advice", text: "Consider whether apologizing might make it worse or just ease your guilt. What serves them, not just you?" }
        }
    },
    {
        title: "You're outgrowing someone you love",
        situation: "You're changing. Your interests, values, sense of humor, things are shifting. And you're realizing you don't really connect with someone you've been close to for years. You still care about them, but hanging out feels like work now.",
        advice_options: {
            fire: { label: "Fire Advice", text: "Have the hard conversation about growing apart. Honesty honors what you had more than pretending." },
            earth: { label: "Earth Advice", text: "Let the friendship naturally fade without forcing anything. Some connections have seasons, and that's okay." },
            water: { label: "Water Advice", text: "Honor what it was while accepting what it's becoming. You can love someone and still need distance." },
            air: { label: "Air Advice", text: "Recognize that growing apart isn't a failure, it's just change. You're both becoming who you're meant to be." }
        }
    }
];